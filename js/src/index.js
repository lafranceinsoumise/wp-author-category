import {buildTermsTree} from "@wordpress/editor/build/utils/terms";
import {unescape as unescapeString} from "lodash";

const DEFAULT_QUERY = {
  per_page: -1,
  orderby: "name",
  order: "asc",
  _fields: "id,name,parent,author_category",
};

const hideIfChildrenDisabled = (term) => {
  term.children = term.children.filter((term) => hideIfChildrenDisabled(term));

  return term.author_category || term.children.length !== 0;
};

const getAuthorCategorySelector = (OriginalComponent) => {
  class AuthorCategorySelector extends OriginalComponent {
    fetchTerms() {
      const { taxonomy } = this.props;
      if (!taxonomy) {
        return;
      }
      this.fetchRequest = wp.apiFetch({
        path: wp.url.addQueryArgs(
            `/wp/v2/${taxonomy.rest_base}`,
            DEFAULT_QUERY
        ),
      });
      this.fetchRequest.then(
          (terms) => {
            // resolve
            const availableTermsTree = this.sortBySelected(
                buildTermsTree(terms)
            );

            this.fetchRequest = null;
            this.setState({
              loading: false,
              availableTermsTree,
              availableTerms: terms,
            });
          },
          (xhr) => {
            // reject
            if (xhr.statusText === "abort") {
              return;
            }
            this.fetchRequest = null;
            this.setState({
              loading: false,
            });
          }
      );
    }

    renderTerms(renderedTerms) {
      const { terms = [] } = this.props;
      renderedTerms = renderedTerms.filter(term => hideIfChildrenDisabled(term));
      return renderedTerms.map( ( term ) => {
        return (
            <div
                key={ term.id }
                className="editor-post-taxonomies__hierarchical-terms-choice"
            >
              <wp.components.CheckboxControl
                  checked={ terms.indexOf( term.id ) !== -1 }
                  onChange={ () => {
                    const termId = parseInt( term.id, 10 );
                    this.onChange( termId );
                  } }
                  label={ unescapeString( term.name ) }
                  disabled={!term.author_category}
              />
              { !! term.children.length && (
                  <div className="editor-post-taxonomies__hierarchical-terms-subchoices">
                    { this.renderTerms( term.children ) }
                  </div>
              ) }
            </div>
        );
      } );
    }
  }

  return class Selector extends wp.element.Component {
    render() {
      if (this.props.slug !== "category") {
        return <OriginalComponent { ...this.props} />;
      }


      return <AuthorCategorySelector { ...this.props }/>;
    }
  };
};

wp.hooks.addFilter(
  "editor.PostTaxonomyType",
  "author-category",
  getAuthorCategorySelector, 0
);
