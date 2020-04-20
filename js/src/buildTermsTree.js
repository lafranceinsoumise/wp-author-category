/**
 * copied from https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/utils/terms.js
 */

import groupBy from "lodash/groupBy";

export default function buildTermsTree( flatTerms ) {
  const flatTermsWithParentAndChildren = flatTerms.map( ( term ) => {
    return {
      children: [],
      parent: null,
      ...term,
    };
  } );

  const termsByParent = groupBy( flatTermsWithParentAndChildren, 'parent' );
  if ( termsByParent.null && termsByParent.null.length ) {
    return flatTermsWithParentAndChildren;
  }
  const fillWithChildren = ( terms ) => {
    return terms.map( ( term ) => {
      const children = termsByParent[ term.id ];
      return {
        ...term,
        children:
          children && children.length
            ? fillWithChildren( children )
            : [],
      };
    } );
  };

  return fillWithChildren( termsByParent[ '0' ] || [] );
}