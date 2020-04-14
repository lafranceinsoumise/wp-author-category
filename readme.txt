=== Author Category ===
Contributors: jllro, bainternet
Tags: author category, limit author to category, author posts to category
Requires at least: 5.0
Tested up to: 5.4
Stable tag: 0.8

Simple lightweight plugin limit authors to post just in one category. Compatible with Gutenberg.

== Description ==

This Plugin allows you to select specific category per user and all of that users posts will be posted in that category only.


**Main Features:**

*   Only admin can set authorized categories for each users.
*   Only users with a specified category will be limited to that category, other will still have full control.
*   Removes unauthorized categories for selected users.
*   Removes categories from quick edit for selected users.
*   Option to clear selection.
*   Multiple categories per user.

French traslation (since 0.8) thanks to jyd44

== Frequently Asked Questions ==

= How To Use =

Simply login as the admin user and under each user profile, select the category for that user.

== Changelog ==
 = 0.8 = 
Added POT file for translations.
Added french translation.
Fixed translation loading to an earlest time to allow panel translation.

 = 0.7 =
updated simple panel version.
added textdomain to plugin and to option panel.
wrapped checkboxes with labels
categoires are now ordered by name.

 = 0.6 =
Fixed xmlrpc posting issue.
Added an option panel to allow configuration of multiple categories.
added An action hook `in_author_category_metabox`

 = 0.5 = 
Added post by mail category limitation.

 = 0.4 = 
Added support for multiple categories per user.
added option to remove user selected category.

 = 0.3 =  
added plugin links,
added XMLRPC and Quickpress support
changed category save function from save_post to default input_tax field.
added a function to overwrite default category option per user.

 = 0.2 = 
Fixed admin profile update issue.

 = 0.1 = 
initial release