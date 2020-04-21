<?php
/*
Plugin Name: Author Category (LFI version)
Plugin URI: https://github.com/lafranceinsoumise/wp-author-category
Description: Simple plugin to limit categories authors can post to.
Version: 0.8
Author: La France insoumise
Author URI: https://github.com/lafranceinsoumise/
*/
/*
        *   Copyright (C) 2012 - 2013 Ohad Raz <admin@bainternet.info> (http://en.bainternet.info)
        *   Copyright (C) 2020 La France insoumise <site@lafranceinsoumise.fr> (https://github.com/lafranceinsoumise)

        This program is free software; you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation; either version 2 of the License, or
        (at your option) any later version.

        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.

        You should have received a copy of the GNU General Public License
        along with this program; if not, write to the Free Software
        Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

/* Disallow direct access to the plugin file */
defined('ABSPATH') || die('Sorry, but you cannot access this page directly.');

if (!class_exists('author_category')) {
    class author_category
    {
        /**
         * $txtDomain
         *
         * Holds textDomain
         * @var string
         */
        public $txtDomain = 'author_cat';

        public $user_cats = array();

        /**
         * get_user_cats
         *
         * @param null $user_id
         * @return array|mixed
         */
        public function get_user_cats($user_id = null)
        {
            if ($user_id === null) {
                global $current_user;
                wp_get_current_user();
                $user_id = $current_user->ID;
            }

            $cats = get_user_meta($user_id, '_author_cat', true);

            if (empty($cats) || count($cats) <= 0 || !is_array($cats)) {
                return array();
            } else {
                return $cats;
            }
        }

        public function __construct()
        {
            add_action('init', function () {
                $this->user_cats = $this->get_user_cats();
            });

            // For site administrators
            if (is_admin()) {
                // add Author Categories section on users edit page
                add_action('edit_user_profile', array($this, 'extra_user_profile_fields'));
                add_action('edit_user_profile_update', array($this, 'save_extra_user_profile_fields'));

                // our js removes unauthorized categories from Gutenber setting panels
                add_action('enqueue_block_editor_assets', array($this, 'enqueue_js'));

                // remove Yoast seo primary category picker (fucks with our js)
                add_filter('wpseo_primary_term_taxonomies', array($this, 'remove_yoast'));

                // remove unauthorized categories at save time
                add_action("save_post_post", array($this, 'remove_unauthorized_categories'), 50, 2);

                //add metabox
                add_action('quick_edit_show_taxonomy', array($this, 'remove_quick_edit'), 0, 2);
                add_action('add_meta_boxes', array( $this, 'add_meta_box' ));
            }

            // Add property to rest api result for guntenberg to know which to hide
            add_filter('rest_api_init', array($this, 'rest_api_add_author_category_field'));


            //add_filter('pre_option_default_category', array($this, 'user_default_category_option'));

            //xmlrpc post insert hook and quickpress
            add_filter('xmlrpc_wp_insert_post_data', array($this, 'xmlrpc_default_category'), 2);

            //post by email add category
            add_filter('publish_phone', array($this,'post_by_email_default_category'));

            //translations
            $this->load_translation();
        }

        public function enqueue_js()
        {
            if (empty($this->user_cats)) {
                return;
            }

            $assets = json_decode(file_get_contents(plugin_dir_path(__FILE__). '/js/dist/manifest.json'), true);

            wp_enqueue_script(
                'author-category',
                plugins_url('js/dist/' . $assets["main.js"], __FILE__),
                array('wp-edit-post', 'wp-editor', 'wp-compose', 'wp-api-fetch', 'wp-url'),
                null
            );
        }

        /**
         * remove Yoast primary taxonomy picker when we put or js
         *
         * @param $all_taxonomies
         * @return array
         */
        public function remove_yoast($all_taxonomies)
        {
            if (empty($this->user_cats)) {
                return $all_taxonomies;
            }

            return array();
        }

        /**
         * remove unauthorized categories after saving
         *
         * @param $post_id
         */
        public function remove_unauthorized_categories($post_id)
        {
            if (empty($this->user_cats)) {
                return;
            }

            $unfiltered_cats = wp_get_post_categories($post_id);
            $authorized_cats = array_intersect($unfiltered_cats, $this->get_user_cats());

            if (empty(array_diff($unfiltered_cats, $authorized_cats))) {
                wp_set_post_categories($authorized_cats);
            }
        }

        /**
         * Adds a author_category field on rest api to be used by Guntenberg
         */
        public function rest_api_add_author_category_field()
        {
            if (empty($this->user_cats)) {
                return;
            }

            register_rest_field('category', 'author_category', array(
                'get_callback' => function ($term) {
                    return in_array($term["id"], $this->get_user_cats());
                },
                'schema' => array(
                    'description' => 'Is category authorized for author.',
                    'type'        => 'boolean',
                    'context'     =>  array('view')
                ),
            ));
        }

        /**
         * user_default_category
         *
         * function to handle XMLRPC calls
         *
         * @param  array $post_data  post data
         * @param  array $con_stactu xmlrpc post data
         * @return array
         */
        public function xmlrpc_default_category($post_data, $con_stactu)
        {
            if (!empty($this->user_cats)) {
                $post_data['tax_input']['category'] = $this->user_cats;
            }

            return $post_data;
        }

        /**
         * post_by_email_default_category
         *
         * @param  int $post_id
         */
        public function post_by_email_default_category($post_id)
        {
            if (!empty($this->user_cats)) {
                $email_post = array();
                $email_post['ID'] = $post_id;
                $email_post['post_category'] = $this->user_cats;
                wp_update_post($email_post);
            }
        }

        /**
         * remove_quick_edit
         *
         * @return bool
         */
        public function remove_quick_edit($show, $taxonomy_name)
        {
            if ($taxonomy_name == 'category' && !empty($this->user_cats)) {
                return false;
            }

            return $show;
        }

        /**
         * Adds the meta box container
         */
        public function add_meta_box()
        {
            if (!empty($this->user_cats)) {
                //remove default metabox
                remove_meta_box('categorydiv', 'post', 'side');
                //add user specific categories
                add_meta_box(
                    'author_cat',
                    __('Author category', $this->txtDomain),
                    array( &$this, 'render_meta_box_content' ),
                    'post',
                    'side',
                    'low',
                    array(
                        '__back_compat_meta_box' => true,
                    )
                );
            }
        }


        /**
         * Render Meta Box content
         */
        public function render_meta_box_content()
        {
            $cats = $this->get_user_cats();
            // Use nonce for verification
            wp_nonce_field(plugin_basename(__FILE__), 'author_cat_noncename');

            if (count($cats) == 1) {
                $c = get_category($cats[0]);
                echo __('this will be posted in: <strong>', $this->txtDomain) . esc_html($c->name)
                    .__('</strong> Category', $this->txtDomain);
                echo '<input name="post_category[]" type="hidden" value="'.$c->term_id.'">';
            } else {
                echo '<span>'.__('Make sure you select only the categories you want: <strong>', $this->txtDomain).'</span><br />';
                $options = get_option('author_cat_option');
                $checked =  (!isset($options['check_multi']))? ' checked="checked"' : '';

                foreach ($cats as $cat) {
                    $c = get_category($cat);
                    echo '<label><input name="post_category[]" type="checkbox"'.$checked.' value="'.$c->term_id.'">'
                        .esc_html($c->name).'</label><br />';
                }
            }
        }

        /**
         * This will generate the category field on the users profile
         */
        public function extra_user_profile_fields($user)
        {
            // only admin can see and save the categories
            if (!current_user_can('manage_options')) {
                return;
            };

            $select = wp_dropdown_categories(array(
                            'orderby'      => 'name',
                            'show_count'   => 0,
                            'hierarchical' => 1,
                            'hide_empty'   => 0,
                            'echo'         => 0,
                            'name'         => 'author_cat[]'));
            $saved = get_user_meta($user->ID, '_author_cat', true);
            foreach ((array)$saved as $c) {
                $select = str_replace('value="'.$c.'"', 'value="'.$c.'" selected="selected"', $select);
            }
            $select = str_replace('<select', '<select multiple="multiple"', $select); ?>
            <h3><?= __('Author Category', 'author_cat') ?></h3>
            <table class="form-table" role="presentation">
                <tr id="author_cat">
                    <th><label for="author_cat"><?= __('Category', $this->txtDomain) ?></label></th>
                    <td>
                        <?= $select ?>
                        <p class="description">
                            <?= __('select a category to limit an author to post just in that category (use Crtl to select more then one).', $this->txtDomain) ?>
                        </p>
                    </td>
                </tr>
                <tr id="author_cat_clear">
                    <th><label for="author_cat_clear"><?= __('Clear Category', $this->txtDomain) ?></label></th>
                    <td>
                        <p class="description">
                            <input type="checkbox" name="author_cat_clear" id="author_cat_clear" value="1" />
                            <?= __('Check if you want to clear the limitation for this user.', $this->txtDomain) ?>
                        </p>
                    </td>
                </tr>
            </table>
            <?php
        }


        /**
         * This will save category field on the users profile
         *
         * @param  int $user_id
         * @return bool
         */
        public function save_extra_user_profile_fields($user_id)
        {
            //only admin can see and save the categories
            if (!current_user_can('manage_options')) {
                return false;
            }

            $author_cat = sanitize_meta('_author_cat', $_POST['author_cat'], 'user');

            if (!is_array($author_cat)) {
                return false;
            }

            foreach ($author_cat as $cat) {
                if (!is_numeric($cat) || !term_exists($cat, 'category')) {
                    return false;
                }
            }

            update_user_meta($user_id, '_author_cat', $author_cat);
                                                                                
            if (isset($_POST['author_cat_clear']) && $_POST['author_cat_clear'] == 1) {
                delete_user_meta($user_id, '_author_cat');
            }

            return true;
        }

        /**
         * Loads translations
         */
        public function load_translation()
        {
            load_plugin_textdomain($this->txtDomain, false, dirname(plugin_basename(__FILE__)) . '/languages/');
        }
    }
}

$ac = new author_category();
