/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzPzk1MjMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/defineProperty.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/@wordpress/editor/build/utils/terms.js":
/*!*************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build/utils/terms.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.buildTermsTree = buildTermsTree;\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n * Returns terms in a tree form.\n *\n * @param {Array} flatTerms  Array of terms in flat format.\n *\n * @return {Array} Array of terms in tree format.\n */\nfunction buildTermsTree(flatTerms) {\n  var flatTermsWithParentAndChildren = flatTerms.map(function (term) {\n    return _objectSpread({\n      children: [],\n      parent: null\n    }, term);\n  });\n  var termsByParent = (0, _lodash.groupBy)(flatTermsWithParentAndChildren, 'parent');\n\n  if (termsByParent.null && termsByParent.null.length) {\n    return flatTermsWithParentAndChildren;\n  }\n\n  var fillWithChildren = function fillWithChildren(terms) {\n    return terms.map(function (term) {\n      var children = termsByParent[term.id];\n      return _objectSpread({}, term, {\n        children: children && children.length ? fillWithChildren(children) : []\n      });\n    });\n  };\n\n  return fillWithChildren(termsByParent['0'] || []);\n}\n//# sourceMappingURL=terms.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9lZGl0b3IvYnVpbGQvdXRpbHMvdGVybXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9lZGl0b3IvYnVpbGQvdXRpbHMvdGVybXMuanM/NGE3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmJ1aWxkVGVybXNUcmVlID0gYnVpbGRUZXJtc1RyZWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfbG9kYXNoID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuLyoqXG4gKiBSZXR1cm5zIHRlcm1zIGluIGEgdHJlZSBmb3JtLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGZsYXRUZXJtcyAgQXJyYXkgb2YgdGVybXMgaW4gZmxhdCBmb3JtYXQuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIHRlcm1zIGluIHRyZWUgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBidWlsZFRlcm1zVHJlZShmbGF0VGVybXMpIHtcbiAgdmFyIGZsYXRUZXJtc1dpdGhQYXJlbnRBbmRDaGlsZHJlbiA9IGZsYXRUZXJtcy5tYXAoZnVuY3Rpb24gKHRlcm0pIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBwYXJlbnQ6IG51bGxcbiAgICB9LCB0ZXJtKTtcbiAgfSk7XG4gIHZhciB0ZXJtc0J5UGFyZW50ID0gKDAsIF9sb2Rhc2guZ3JvdXBCeSkoZmxhdFRlcm1zV2l0aFBhcmVudEFuZENoaWxkcmVuLCAncGFyZW50Jyk7XG5cbiAgaWYgKHRlcm1zQnlQYXJlbnQubnVsbCAmJiB0ZXJtc0J5UGFyZW50Lm51bGwubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZsYXRUZXJtc1dpdGhQYXJlbnRBbmRDaGlsZHJlbjtcbiAgfVxuXG4gIHZhciBmaWxsV2l0aENoaWxkcmVuID0gZnVuY3Rpb24gZmlsbFdpdGhDaGlsZHJlbih0ZXJtcykge1xuICAgIHJldHVybiB0ZXJtcy5tYXAoZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRlcm1zQnlQYXJlbnRbdGVybS5pZF07XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgdGVybSwge1xuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoID8gZmlsbFdpdGhDaGlsZHJlbihjaGlsZHJlbikgOiBbXVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGZpbGxXaXRoQ2hpbGRyZW4odGVybXNCeVBhcmVudFsnMCddIHx8IFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlcm1zLmpzLm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@wordpress/editor/build/utils/terms.js\n");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/Y2QwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/Y2VkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/module.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_editor_build_utils_terms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/editor/build/utils/terms */ \"./node_modules/@wordpress/editor/build/utils/terms.js\");\n/* harmony import */ var _wordpress_editor_build_utils_terms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor_build_utils_terms__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar DEFAULT_QUERY = {\n  per_page: -1,\n  orderby: \"name\",\n  order: \"asc\",\n  _fields: \"id,name,parent,author_category\"\n};\n\nvar hideIfChildrenDisabled = function hideIfChildrenDisabled(term) {\n  term.children = term.children.filter(function (term) {\n    return hideIfChildrenDisabled(term);\n  });\n  return term.author_category || term.children.length !== 0;\n};\n\nvar getAuthorCategorySelector = function getAuthorCategorySelector(OriginalComponent) {\n  var AuthorCategorySelector = /*#__PURE__*/function (_OriginalComponent) {\n    _inherits(AuthorCategorySelector, _OriginalComponent);\n\n    var _super = _createSuper(AuthorCategorySelector);\n\n    function AuthorCategorySelector() {\n      _classCallCheck(this, AuthorCategorySelector);\n\n      return _super.apply(this, arguments);\n    }\n\n    _createClass(AuthorCategorySelector, [{\n      key: \"fetchTerms\",\n      value: function fetchTerms() {\n        var _this = this;\n\n        var taxonomy = this.props.taxonomy;\n\n        if (!taxonomy) {\n          return;\n        }\n\n        this.fetchRequest = wp.apiFetch({\n          path: wp.url.addQueryArgs(\"/wp/v2/\".concat(taxonomy.rest_base), DEFAULT_QUERY)\n        });\n        this.fetchRequest.then(function (terms) {\n          // resolve\n          var availableTermsTree = _this.sortBySelected(Object(_wordpress_editor_build_utils_terms__WEBPACK_IMPORTED_MODULE_0__[\"buildTermsTree\"])(terms));\n\n          _this.fetchRequest = null;\n\n          _this.setState({\n            loading: false,\n            availableTermsTree: availableTermsTree,\n            availableTerms: terms\n          });\n        }, function (xhr) {\n          // reject\n          if (xhr.statusText === \"abort\") {\n            return;\n          }\n\n          _this.fetchRequest = null;\n\n          _this.setState({\n            loading: false\n          });\n        });\n      }\n    }, {\n      key: \"renderTerms\",\n      value: function renderTerms(renderedTerms) {\n        var _this2 = this;\n\n        var _this$props$terms = this.props.terms,\n            terms = _this$props$terms === void 0 ? [] : _this$props$terms;\n        renderedTerms = renderedTerms.filter(function (term) {\n          return hideIfChildrenDisabled(term);\n        });\n        return renderedTerms.map(function (term) {\n          return /*#__PURE__*/React.createElement(\"div\", {\n            key: term.id,\n            className: \"editor-post-taxonomies__hierarchical-terms-choice\"\n          }, /*#__PURE__*/React.createElement(wp.components.CheckboxControl, {\n            checked: terms.indexOf(term.id) !== -1,\n            onChange: function onChange() {\n              var termId = parseInt(term.id, 10);\n\n              _this2.onChange(termId);\n            },\n            label: Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"unescape\"])(term.name),\n            disabled: !term.author_category\n          }), !!term.children.length && /*#__PURE__*/React.createElement(\"div\", {\n            className: \"editor-post-taxonomies__hierarchical-terms-subchoices\"\n          }, _this2.renderTerms(term.children)));\n        });\n      }\n    }]);\n\n    return AuthorCategorySelector;\n  }(OriginalComponent);\n\n  return /*#__PURE__*/function (_wp$element$Component) {\n    _inherits(Selector, _wp$element$Component);\n\n    var _super2 = _createSuper(Selector);\n\n    function Selector() {\n      _classCallCheck(this, Selector);\n\n      return _super2.apply(this, arguments);\n    }\n\n    _createClass(Selector, [{\n      key: \"render\",\n      value: function render() {\n        if (this.props.slug !== \"category\") {\n          return /*#__PURE__*/React.createElement(OriginalComponent, this.props);\n        }\n\n        return /*#__PURE__*/React.createElement(AuthorCategorySelector, this.props);\n      }\n    }]);\n\n    return Selector;\n  }(wp.element.Component);\n};\n\nwp.hooks.addFilter(\"editor.PostTaxonomyType\", \"author-category\", getAuthorCategorySelector, 0);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2J1aWxkVGVybXNUcmVlfSBmcm9tIFwiQHdvcmRwcmVzcy9lZGl0b3IvYnVpbGQvdXRpbHMvdGVybXNcIjtcbmltcG9ydCB7dW5lc2NhcGUgYXMgdW5lc2NhcGVTdHJpbmd9IGZyb20gXCJsb2Rhc2hcIjtcblxuY29uc3QgREVGQVVMVF9RVUVSWSA9IHtcbiAgcGVyX3BhZ2U6IC0xLFxuICBvcmRlcmJ5OiBcIm5hbWVcIixcbiAgb3JkZXI6IFwiYXNjXCIsXG4gIF9maWVsZHM6IFwiaWQsbmFtZSxwYXJlbnQsYXV0aG9yX2NhdGVnb3J5XCIsXG59O1xuXG5jb25zdCBoaWRlSWZDaGlsZHJlbkRpc2FibGVkID0gKHRlcm0pID0+IHtcbiAgdGVybS5jaGlsZHJlbiA9IHRlcm0uY2hpbGRyZW4uZmlsdGVyKCh0ZXJtKSA9PiBoaWRlSWZDaGlsZHJlbkRpc2FibGVkKHRlcm0pKTtcblxuICByZXR1cm4gdGVybS5hdXRob3JfY2F0ZWdvcnkgfHwgdGVybS5jaGlsZHJlbi5sZW5ndGggIT09IDA7XG59O1xuXG5jb25zdCBnZXRBdXRob3JDYXRlZ29yeVNlbGVjdG9yID0gKE9yaWdpbmFsQ29tcG9uZW50KSA9PiB7XG4gIGNsYXNzIEF1dGhvckNhdGVnb3J5U2VsZWN0b3IgZXh0ZW5kcyBPcmlnaW5hbENvbXBvbmVudCB7XG4gICAgZmV0Y2hUZXJtcygpIHtcbiAgICAgIGNvbnN0IHsgdGF4b25vbXkgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoIXRheG9ub215KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmV0Y2hSZXF1ZXN0ID0gd3AuYXBpRmV0Y2goe1xuICAgICAgICBwYXRoOiB3cC51cmwuYWRkUXVlcnlBcmdzKFxuICAgICAgICAgICAgYC93cC92Mi8ke3RheG9ub215LnJlc3RfYmFzZX1gLFxuICAgICAgICAgICAgREVGQVVMVF9RVUVSWVxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmZldGNoUmVxdWVzdC50aGVuKFxuICAgICAgICAgICh0ZXJtcykgPT4ge1xuICAgICAgICAgICAgLy8gcmVzb2x2ZVxuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlVGVybXNUcmVlID0gdGhpcy5zb3J0QnlTZWxlY3RlZChcbiAgICAgICAgICAgICAgICBidWlsZFRlcm1zVHJlZSh0ZXJtcylcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgYXZhaWxhYmxlVGVybXNUcmVlLFxuICAgICAgICAgICAgICBhdmFpbGFibGVUZXJtczogdGVybXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICh4aHIpID0+IHtcbiAgICAgICAgICAgIC8vIHJlamVjdFxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXNUZXh0ID09PSBcImFib3J0XCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaFJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJUZXJtcyhyZW5kZXJlZFRlcm1zKSB7XG4gICAgICBjb25zdCB7IHRlcm1zID0gW10gfSA9IHRoaXMucHJvcHM7XG4gICAgICByZW5kZXJlZFRlcm1zID0gcmVuZGVyZWRUZXJtcy5maWx0ZXIodGVybSA9PiBoaWRlSWZDaGlsZHJlbkRpc2FibGVkKHRlcm0pKTtcbiAgICAgIHJldHVybiByZW5kZXJlZFRlcm1zLm1hcCggKCB0ZXJtICkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17IHRlcm0uaWQgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRvci1wb3N0LXRheG9ub21pZXNfX2hpZXJhcmNoaWNhbC10ZXJtcy1jaG9pY2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8d3AuY29tcG9uZW50cy5DaGVja2JveENvbnRyb2xcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyB0ZXJtcy5pbmRleE9mKCB0ZXJtLmlkICkgIT09IC0xIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXJtSWQgPSBwYXJzZUludCggdGVybS5pZCwgMTAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSggdGVybUlkICk7XG4gICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXsgdW5lc2NhcGVTdHJpbmcoIHRlcm0ubmFtZSApIH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGVybS5hdXRob3JfY2F0ZWdvcnl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsgISEgdGVybS5jaGlsZHJlbi5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItcG9zdC10YXhvbm9taWVzX19oaWVyYXJjaGljYWwtdGVybXMtc3ViY2hvaWNlc1wiPlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyVGVybXMoIHRlcm0uY2hpbGRyZW4gKSB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xhc3MgU2VsZWN0b3IgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2x1ZyAhPT0gXCJjYXRlZ29yeVwiKSB7XG4gICAgICAgIHJldHVybiA8T3JpZ2luYWxDb21wb25lbnQgeyAuLi50aGlzLnByb3BzfSAvPjtcbiAgICAgIH1cblxuXG4gICAgICByZXR1cm4gPEF1dGhvckNhdGVnb3J5U2VsZWN0b3IgeyAuLi50aGlzLnByb3BzIH0vPjtcbiAgICB9XG4gIH07XG59O1xuXG53cC5ob29rcy5hZGRGaWx0ZXIoXG4gIFwiZWRpdG9yLlBvc3RUYXhvbm9teVR5cGVcIixcbiAgXCJhdXRob3ItY2F0ZWdvcnlcIixcbiAgZ2V0QXV0aG9yQ2F0ZWdvcnlTZWxlY3RvciwgMFxuKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBdENBO0FBQUE7QUFBQTtBQXdDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUFBO0FBTUE7QUFDQTtBQWxFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBb0VBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFSQTtBQUNBO0FBREE7QUFBQTtBQVVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });