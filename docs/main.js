/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n\\nhtml, body\\n{\\n  margin: 0\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fluidSimulation/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://fluidSimulation/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://fluidSimulation/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/hippoLg.jpeg":
/*!**************************!*\
  !*** ./src/hippoLg.jpeg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"ac98728f5c4e593d43d7a75786da0573.jpeg\");\n\n//# sourceURL=webpack://fluidSimulation/./src/hippoLg.jpeg?");

/***/ }),

/***/ "./src/hippoSqrd.jpeg":
/*!****************************!*\
  !*** ./src/hippoSqrd.jpeg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"aca652b2df73945aec3edec6404a8e7f.jpeg\");\n\n//# sourceURL=webpack://fluidSimulation/./src/hippoSqrd.jpeg?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://fluidSimulation/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://fluidSimulation/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://fluidSimulation/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://fluidSimulation/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://fluidSimulation/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://fluidSimulation/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://fluidSimulation/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _shaders_advection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/advection.js */ \"./src/shaders/advection.js\");\n/* harmony import */ var _shaders_pressurePoisson1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/pressurePoisson1.js */ \"./src/shaders/pressurePoisson1.js\");\n/* harmony import */ var _shaders_pressurePoisson2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/pressurePoisson2.js */ \"./src/shaders/pressurePoisson2.js\");\n/* harmony import */ var _shaders_projection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/projection.js */ \"./src/shaders/projection.js\");\n/* harmony import */ var _shaders_finalFrag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/finalFrag.js */ \"./src/shaders/finalFrag.js\");\n/* harmony import */ var _shaders_vertex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shaders/vertex.js */ \"./src/shaders/vertex.js\");\n/* harmony import */ var _hippoSqrd_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hippoSqrd.jpeg */ \"./src/hippoSqrd.jpeg\");\n/* harmony import */ var _hippoLg_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hippoLg.jpeg */ \"./src/hippoLg.jpeg\");\n\n\n\n//import fluidFrag from './shaders/fluidFrag.js';\n\n\n\n\n\n\n\n\n\nclass Main\n{\n  constructor()\n  {\n    this.width = window.innerWidth;\n    this.height = window.innerHeight;\n\n    this.mouse = {x: this.width / 2, y: this.height / 2};\n\n    // if screen is larger than tablet we will index 1 to select larger img\n    this.screenSize = (this.width < 768) ? 0 : 1;\n\n    this.img = [ new three__WEBPACK_IMPORTED_MODULE_9__.TextureLoader().load(_hippoSqrd_jpeg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]), new three__WEBPACK_IMPORTED_MODULE_9__.TextureLoader().load(_hippoLg_jpeg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]) ];\n\n    // parameters for fluid simulation\n    this.dt = 2.0;\n    this.dx = 1.0;\n    this.nu = 0.00001;\n\n    this.animate = this.animate.bind(this);\n    this.scene_setup();\n    this.buffer_texture_setup();\n\n    document.addEventListener('mousemove', (e) => {\n      this.mouse.x = e.clientX;\n      this.mouse.y = this.height - e.clientY;\n    })\n\n    document.addEventListener('mousedown', (e) => {\n      this.mouse.x = e.clientX;\n      this.mouse.y = this.height - e.clientY;\n      this.mouse.z = 1.0\n    })\n\n    document.addEventListener('mouseup', (e) => {\n      this.mouse.z = 0.0\n    })\n\n    // mobile events\n    document.addEventListener('touchmove', (e) => {\n      //this.mouse.x = e.clientX;\n      this.mouse.x = e.changedTouches[0].clientX;\n      this.mouse.y = this.height - e.changedTouches[0].clientY;\n    })\n\n    document.addEventListener('touchstart', (e) => {\n      this.mouse.x = e.changedTouches[0].clientX;\n      this.mouse.y = this.height - e.changedTouches[0].clientY;\n      this.mouse.z = 1.0;\n    })\n\n    document.addEventListener('touchend', (e) => {\n      this.mouse.z = 0.0;\n    })\n\n    this.animate();\n  }\n\n  scene_setup(){\n\t\t//This is the basic scene setup\n\t\tthis.scene = new three__WEBPACK_IMPORTED_MODULE_9__.Scene();\n\n\t\t//Note that we're using an orthographic camera here rather than a prespective\n\t\tthis.camera = new three__WEBPACK_IMPORTED_MODULE_9__.OrthographicCamera( this.width / - 2, this.width / 2, this.height / 2, this.height / - 2, 1, 1000 );\n\t\tthis.camera.position.z = 2;\n\n\t\tthis.renderer = new three__WEBPACK_IMPORTED_MODULE_9__.WebGLRenderer();\n\t\tthis.renderer.setSize( this.width, this.height );\n    this.renderer.setPixelRatio(document.devicePixelRatio)\n\t\tdocument.body.appendChild( this.renderer.domElement );\n  }\n\n\n  buffer_texture_setup(){\n\t\t//Create buffer scene\n\t\tthis.advectionScene = new three__WEBPACK_IMPORTED_MODULE_9__.Scene();\n\t\tthis.p1Scene = new three__WEBPACK_IMPORTED_MODULE_9__.Scene();\n    this.p2Scene = new three__WEBPACK_IMPORTED_MODULE_9__.Scene();\n\t\tthis.projectionScene = new three__WEBPACK_IMPORTED_MODULE_9__.Scene();\n\n\n    this.pass1 = new three__WEBPACK_IMPORTED_MODULE_9__.WebGLRenderTarget( this.width, this.height,\n      // each pass needs these setting or simulation will not work, im guessing the pixel to pixel length is off and all the passes become unstable\n      {\n        minFilter: three__WEBPACK_IMPORTED_MODULE_9__.LinearFilter,\n        magFilter: three__WEBPACK_IMPORTED_MODULE_9__.LinearFilter,\n        format: three__WEBPACK_IMPORTED_MODULE_9__.RGBAFormat,\n        type: three__WEBPACK_IMPORTED_MODULE_9__.FloatType,\n        stencilBuffer: false\n      });\n\n    this.pass2 = new three__WEBPACK_IMPORTED_MODULE_9__.WebGLRenderTarget( this.width, this.height,\n      {\n        minFilter: three__WEBPACK_IMPORTED_MODULE_9__.LinearFilter,\n        magFilter: three__WEBPACK_IMPORTED_MODULE_9__.LinearFilter,\n        format: three__WEBPACK_IMPORTED_MODULE_9__.RGBAFormat,\n        type: three__WEBPACK_IMPORTED_MODULE_9__.FloatType,\n        stencilBuffer: false\n      });\n\n    this.pass3 = new three__WEBPACK_IMPORTED_MODULE_9__.WebGLRenderTarget( this.width, this.height,\n      {\n        minFilter: three__WEBPACK_IMPORTED_MODULE_9__.LinearFilter,\n        magFilter: three__WEBPACK_IMPORTED_MODULE_9__.LinearFilter,\n        format: three__WEBPACK_IMPORTED_MODULE_9__.RGBAFormat,\n        type: three__WEBPACK_IMPORTED_MODULE_9__.FloatType,\n        stencilBuffer: false\n      });\n\n    this.pass4 = new three__WEBPACK_IMPORTED_MODULE_9__.WebGLRenderTarget( this.width, this.height,\n    {\n      minFilter: three__WEBPACK_IMPORTED_MODULE_9__.LinearFilter,\n      magFilter: three__WEBPACK_IMPORTED_MODULE_9__.LinearFilter,\n      format: three__WEBPACK_IMPORTED_MODULE_9__.RGBAFormat,\n      type: three__WEBPACK_IMPORTED_MODULE_9__.FloatType,\n      stencilBuffer: false\n    });\n\n\n    this.advectionMaterial = new three__WEBPACK_IMPORTED_MODULE_9__.ShaderMaterial( {\n\t\t\tuniforms: {\n\t\t\t bufferTexture: { type: \"t\", value: null },\n\t\t\t res : {type: 'v2',value:new three__WEBPACK_IMPORTED_MODULE_9__.Vector2(this.width,this.height)},//Keeps the resolution\n       mouse: { type: 'v2', value: new three__WEBPACK_IMPORTED_MODULE_9__.Vector4(0, 0, 0, 0)},\n       iTime: { type: 'f', value: 0.0},\n       dt: { value: this.dt},\n       dx: { value: this.dx},\n       nu: { value: this.nu}\n\t\t\t},\n      vertexShader: _shaders_vertex_js__WEBPACK_IMPORTED_MODULE_6__.vertex,\n\t\t\tfragmentShader: _shaders_advection_js__WEBPACK_IMPORTED_MODULE_1__.advection\n\t\t} );\n\n    this.p1Material = new three__WEBPACK_IMPORTED_MODULE_9__.ShaderMaterial( {\n      uniforms: {\n       bufferTexture: { type: \"t\", value: null },\n       res : {type: 'v2',value:new three__WEBPACK_IMPORTED_MODULE_9__.Vector2(this.width,this.height)},//Keeps the resolution\n       dt: { value: this.dt},\n       dx: { value: this.dx},\n       nu: { value: this.nu}\n      },\n      vertexShader: _shaders_vertex_js__WEBPACK_IMPORTED_MODULE_6__.vertex,\n      fragmentShader: _shaders_pressurePoisson1_js__WEBPACK_IMPORTED_MODULE_2__.poisson1\n    } );\n\n    this.p2Material = new three__WEBPACK_IMPORTED_MODULE_9__.ShaderMaterial( {\n      uniforms: {\n       bufferTexture: { type: \"t\", value: null },\n       res : {type: 'v2',value:new three__WEBPACK_IMPORTED_MODULE_9__.Vector2(this.width,this.height)},//Keeps the resolution\n       dt: { value: this.dt},\n       dx: { value: this.dx},\n       nu: { value: this.nu}\n      },\n      vertexShader: _shaders_vertex_js__WEBPACK_IMPORTED_MODULE_6__.vertex,\n      fragmentShader: _shaders_pressurePoisson2_js__WEBPACK_IMPORTED_MODULE_3__.poisson2\n    } );\n\n    this.projectionMaterial = new three__WEBPACK_IMPORTED_MODULE_9__.ShaderMaterial( {\n      uniforms: {\n       bufferTexture: { type: \"t\", value: null },\n       res : {type: 'v2',value:new three__WEBPACK_IMPORTED_MODULE_9__.Vector2(this.width,this.height)},//Keeps the resolution\n       dt: { value: this.dt},\n       dx: { value: this.dx},\n       nu: { value: this.nu}\n      },\n      vertexShader: _shaders_vertex_js__WEBPACK_IMPORTED_MODULE_6__.vertex,\n      fragmentShader: _shaders_projection_js__WEBPACK_IMPORTED_MODULE_4__.projection\n    } );\n\n    this.renderedMaterial = new three__WEBPACK_IMPORTED_MODULE_9__.ShaderMaterial( {\n      uniforms: {\n       bufferTexture: { type: \"t\", value: null},\n       imgTexture: { type: \"t\", value: this.img[this.screenSize]},\n       res : {type: 'v2',value:new three__WEBPACK_IMPORTED_MODULE_9__.Vector2(this.width,this.height)},//Keeps the resolution\n      },\n      vertexShader: _shaders_vertex_js__WEBPACK_IMPORTED_MODULE_6__.vertex,\n      fragmentShader: _shaders_finalFrag_js__WEBPACK_IMPORTED_MODULE_5__.finalFrag\n    } );\n\n\t\tthis.plane = new three__WEBPACK_IMPORTED_MODULE_9__.PlaneBufferGeometry( this.width, this.height );\n\n\t\tthis.bufferAdvection = new three__WEBPACK_IMPORTED_MODULE_9__.Mesh( this.plane, this.advectionMaterial );\n\t\tthis.bufferP1 = new three__WEBPACK_IMPORTED_MODULE_9__.Mesh( this.plane, this.p1Material );\n\t\tthis.bufferP2 = new three__WEBPACK_IMPORTED_MODULE_9__.Mesh( this.plane, this.p2Material );\n\t\tthis.bufferProjection = new three__WEBPACK_IMPORTED_MODULE_9__.Mesh( this.plane, this.projectionMaterial );\n\n    this.advectionScene.add(this.bufferAdvection);\n    this.p1Scene.add(this.bufferP1);\n    this.p2Scene.add(this.bufferP2);\n    this.projectionScene.add(this.bufferProjection);\n\n    this.finalMesh = new three__WEBPACK_IMPORTED_MODULE_9__.Mesh(this.plane, this.renderedMaterial);\n\n    this.scene.add(this.finalMesh)\n\n  }\n\n\n  \t\t//Render everything!\n  \t\tanimate() {\n  \t\t  requestAnimationFrame( this.animate );\n\n  \t\t  this.advectionMaterial.uniforms.mouse.value.x = this.mouse.x;\n  \t\t  this.advectionMaterial.uniforms.mouse.value.y = this.mouse.y;\n  \t\t  this.advectionMaterial.uniforms.mouse.value.z = this.mouse.z;\n\n  \t\t  //this.advectionMaterial.uniforms.mouse.value.w = 1.0;\n\n        // rendering the render targets to the scenes\n        this.renderer.setRenderTarget(this.pass1);\n        this.renderer.render(this.advectionScene, this.camera);\n        this.renderer.setRenderTarget(null);\n        this.renderer.clear();\n\n        this.renderer.setRenderTarget(this.pass2);\n        this.renderer.render(this.p1Scene, this.camera);\n        this.renderer.setRenderTarget(null);\n        this.renderer.clear();\n\n        this.renderer.setRenderTarget(this.pass3);\n        this.renderer.render(this.p2Scene, this.camera);\n        this.renderer.setRenderTarget(null);\n        this.renderer.clear();\n\n        this.renderer.setRenderTarget(this.pass4);\n        this.renderer.render(this.projectionScene, this.camera);\n        this.renderer.setRenderTarget(null);\n        this.renderer.clear();\n\n        // as we enter the rendered pass to the shaders the will execute and now we can switch the texture and chain them together to preserve state\n        this.advectionMaterial.uniforms.bufferTexture.value = this.pass4.texture;\n        this.p1Material.uniforms.bufferTexture.value = this.pass1.texture;\n        this.p2Material.uniforms.bufferTexture.value = this.pass2.texture;\n        this.projectionMaterial.uniforms.bufferTexture.value = this.pass3.texture;\n\n        // now we use this material as the final texture to render to the screen\n        this.renderedMaterial.uniforms.bufferTexture.value = this.pass4.texture;\n\n  \t\t  this.renderer.render( this.scene, this.camera );\n  \t\t}\n\n\n}\n\nnew Main();\n\n\n//# sourceURL=webpack://fluidSimulation/./src/main.js?");

/***/ }),

/***/ "./src/shaders/advection.js":
/*!**********************************!*\
  !*** ./src/shaders/advection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\n\n\nexports.advection =\n`\n// advection & boundary & control\n\nuniform sampler2D bufferTexture;\nuniform vec2 res;\nuniform vec4 mouse;\n//varying vec2 vUv;\nuniform float dt;\nuniform float dx;\nuniform float nu;\n\n//const float dt = 0.9f;\n//const float dx = 1.00f;\n//const float nu = 0.00001f;\n\n// all shaders used were created by Gijs at shader toy, link is below\n//https://www.shadertoy.com/view/tt3yzn\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec4 o = texelFetch(bufferTexture, ivec2(uv), 0);\n    vec4 n = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0, 1), 0);\n    vec4 e = texelFetch(bufferTexture, ivec2(uv) + ivec2( 1, 0), 0);\n    vec4 s = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0, -1), 0);\n    vec4 w = texelFetch(bufferTexture, ivec2(uv) + ivec2(-1, 0), 0);\n\n    // advection\n    vec4 a = texture(bufferTexture, (uv - o.xy * dt) / res.xy);\n    gl_FragColor = a;\n\n\n    // interaction\n    if(mouse.z==1.0f)\n    {\n        vec2 d = uv - mouse.xy;\n        float r = length(d);\n        //vec2 d2 = mouse.xy - abs(mouse.zw);\n        vec2 d2 = mouse.xy - vec2(.1);\n        float r2 = length(d2);\n        if(r2>0.0f)\n        {\n            gl_FragColor.xy += d2/r2*exp(-r*r*0.01f);\n            gl_FragColor.w += 0.5f*exp(-r*r*0.01f);\n            gl_FragColor.w = min(gl_FragColor.w, .8f);\n        }\n    }\n\n\n    // boundary condition\n    if(uv.x == 0.5f)\n    {\n        gl_FragColor.xy = -e.xy;\n        gl_FragColor.z = e.z;\n        gl_FragColor.w = 0.0f;\n    }\n\n    if(uv.y == 0.5f)\n    {\n        gl_FragColor.xy = -n.xy;\n        gl_FragColor.z = n.z;\n        gl_FragColor.w = 0.0f;\n    }\n\n    if(uv.x == res.x-0.5f)\n    {\n        gl_FragColor.xy = -w.xy;\n        gl_FragColor.z = w.z;\n        gl_FragColor.w = 0.0f;\n    }\n\n    if(uv.y == res.y-0.5f)\n    {\n        gl_FragColor.xy = -s.xy;\n        gl_FragColor.z = s.z;\n        gl_FragColor.w = 0.0f;\n    }\n}\n`\n\n\n//# sourceURL=webpack://fluidSimulation/./src/shaders/advection.js?");

/***/ }),

/***/ "./src/shaders/finalFrag.js":
/*!**********************************!*\
  !*** ./src/shaders/finalFrag.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.finalFrag =\n`\nuniform sampler2D bufferTexture;\nuniform sampler2D imgTexture;\nuniform vec2 res;\n//varying vec2 vUv;\n\n// all shaders used were created by Gijs at shader toy, link is below\n//https://www.shadertoy.com/view/tt3yzn\n\nvoid main()\n{\n  //vec2 v = vUv;\n  vec2 uv = gl_FragCoord.xy / res.xy;\n\n  // adding fluid texture\n  vec4 c = texture(bufferTexture, uv);\n\n  // subtracting fluid texture uv coordinate to the texture image coordinate\n  vec4 b = texture(imgTexture, uv - c.w);\n  //gl_FragColor = vec4(abs(c.xy)*1.0f, abs(c.z)*100.0f, c.w);\n  //gl_FragColor = vec4(c.w);\n  //gl_FragColor = vec4(c.w, 0.0, 0.0, 1.0);\n  //gl_FragColor = vec4(abs(b.xy)*1.0f, abs(b.z)*100.0f, b.w);\n\n  // adding fluid texture to the red channel of the img texture to apply red fluid\n  //gl_FragColor = vec4(b.x + c.w * 3.0, b.y, b.z, b.w);\n\n  // this is texture has the ink with no color added\n  gl_FragColor = b;\n}\n\n\n`\n\n\n//# sourceURL=webpack://fluidSimulation/./src/shaders/finalFrag.js?");

/***/ }),

/***/ "./src/shaders/pressurePoisson1.js":
/*!*****************************************!*\
  !*** ./src/shaders/pressurePoisson1.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.poisson1 =\n`\n// pressure poisson\n\nuniform sampler2D bufferTexture;\nuniform vec2 res;\nuniform float dt;\nuniform float dx;\nuniform float nu;\n//varying vec2 vUv;\n\n//const float dt = 5.0f;\n//const float dx = 1.00f;\n//const float nu = 0.00001f;\n\n// all shaders used were created by Gijs at shader toy, link is below\n//https://www.shadertoy.com/view/tt3yzn\n\nvoid main()\n{\n\n    vec2 uv = gl_FragCoord.xy;\n\n    vec4 o = texelFetch(bufferTexture, ivec2(uv), 0);\n    vec4 n = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0, 1), 0);\n    vec4 e = texelFetch(bufferTexture, ivec2(uv) + ivec2( 1, 0), 0);\n    vec4 s = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0,-1), 0);\n    vec4 w = texelFetch(bufferTexture, ivec2(uv) + ivec2(-1, 0), 0);\n\n    // float divergence of the velocity\n    float div = (e.x - w.x + n.y - s.y) / (2.0f * dx * dx);\n\n    // one jacobi iteration\n    float a = 1.0f / ( dx * dx);\n    float p = 1.0f / ( -4.0f * a ) * ( div - a * (n.z + e.z + s.z + w.z));\n\n    gl_FragColor = vec4(o.xy, p, o.w);\n}\n\n\n`\n\n\n//# sourceURL=webpack://fluidSimulation/./src/shaders/pressurePoisson1.js?");

/***/ }),

/***/ "./src/shaders/pressurePoisson2.js":
/*!*****************************************!*\
  !*** ./src/shaders/pressurePoisson2.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.poisson2 =\n`\n// pressure poisson\n\nuniform sampler2D bufferTexture;\nuniform vec2 res;\nuniform float dt;\nuniform float dx;\nuniform float nu;\n//varying vec2 vUv;\n\n//const float dt = 5.0f;\n//const float dx = 1.00f;\n//const float nu = 0.00001f;\n\n// all shaders used were created by Gijs at shader toy, link is below\n//https://www.shadertoy.com/view/tt3yzn\n\nvoid main()\n{\n\n    vec2 uv = gl_FragCoord.xy;\n\n    vec4 o = texelFetch(bufferTexture, ivec2(uv), 0);\n    vec4 n = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0, 1), 0);\n    vec4 e = texelFetch(bufferTexture, ivec2(uv) + ivec2( 1, 0), 0);\n    vec4 s = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0,-1), 0);\n    vec4 w = texelFetch(bufferTexture, ivec2(uv) + ivec2(-1, 0), 0);\n\n    // float divergence of the velocity\n    float div = (e.x - w.x + n.y - s.y) / (2.0f * dx * dx);\n\n    // one jacobi iteration\n    float a = 1.0f / ( dx * dx);\n    float p = 1.0f / ( -4.0f * a ) * ( div - a * (n.z + e.z + s.z + w.z));\n\n    gl_FragColor = vec4(o.xy, p, o.w);\n}\n\n\n`\n\n\n//# sourceURL=webpack://fluidSimulation/./src/shaders/pressurePoisson2.js?");

/***/ }),

/***/ "./src/shaders/projection.js":
/*!***********************************!*\
  !*** ./src/shaders/projection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.projection =\n`\n// projection\n\nuniform sampler2D bufferTexture;\nuniform vec2 res;\nuniform float dt;\nuniform float dx;\nuniform float nu;\n//varying vec2 vUv;\n\n// all shaders used were created by Gijs at shader toy, link is below\n//https://www.shadertoy.com/view/tt3yzn\n\n//const float dt = 5.0f;\n//const float dx = 1.00f;\n//const float nu = 0.00001f;\n\nvoid main()\n{\n\n    vec2 uv = gl_FragCoord.xy;\n\n    vec4 o = texelFetch(bufferTexture, ivec2(uv), 0);\n    vec4 n = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0, 1), 0);\n    vec4 e = texelFetch(bufferTexture, ivec2(uv) + ivec2( 1, 0), 0);\n    vec4 s = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0, -1), 0);\n    vec4 w = texelFetch(bufferTexture, ivec2(uv) + ivec2(-1, 0), 0);\n\n    // gradient of the pressure\n    vec2 grad = vec2( e.z - w.z, n.z - s.z ) / (2.0f * dx * dx);\n\n    // project\n    gl_FragColor = vec4(o.xy - grad, o.zw);\n}\n`\n\n\n//# sourceURL=webpack://fluidSimulation/./src/shaders/projection.js?");

/***/ }),

/***/ "./src/shaders/vertex.js":
/*!*******************************!*\
  !*** ./src/shaders/vertex.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.vertex =\n`\n  uniform sampler2D positionTexture;\n  //varying vec2 vUv;\n\n  void main()\n  {\n      //vUv = uv;\n\n      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n      gl_Position = projectionMatrix * mvPosition;\n  }\n\n`\n\n\n//# sourceURL=webpack://fluidSimulation/./src/shaders/vertex.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;