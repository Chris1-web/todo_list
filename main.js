/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-background-color: #333333;\n  --primary-color: #112a46;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: \"Comfortaa\", cursive;\n  background-color: var(--primary-background-color);\n  color: white;\n}\n\nul {\n  list-style: none;\n}\n\n.navigation,\n.project-nav-header,\n.top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.top {\n  font-size: 2rem;\n}\n\n.container {\n  max-width: 120rem;\n  margin: 0 auto;\n  padding: 1rem 1rem;\n  height: 95vh;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n}\n\n.navigation {\n  height: 10vh;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 2rem;\n  color: white;\n}\n.logo-container img {\n  height: 5rem;\n  width: auto;\n}\n\n.todo-card img {\n  width: 2.5rem;\n  height: auto;\n  cursor: pointer;\n}\n\n.project-navigation-and-todo-card-container {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.project-navigation,\n.projects-navigation-list {\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 1rem 0;\n}\n\n.project-nav-header button {\n  font-size: 4rem;\n  padding: 0.2rem 1rem;\n  color: white;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n\n.project-nav-header button:hover,\n.todo-card img:hover {\n  background-color: grey;\n}\n\n.projects-navigation-list {\n  cursor: pointer;\n}\n\n.project-navigation {\n  height: 80vh;\n  overflow: scroll;\n}\n\n.section-and-below {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  height: 85vh;\n  overflow: scroll;\n}\n\n.todo-cards {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 0 2rem;\n}\n\n.todo-card {\n  border-bottom: 0.5rem solid #0ebe0e74;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.add-task-button button {\n  padding: 1rem 2rem;\n  cursor: pointer;\n  font-size: 2rem;\n  background-color: transparent;\n  border: none;\n  color: #f8dada;\n}\n\n.add-todo-form,\n#project-name {\n  border: 0.1rem solid rgb(186, 186, 186);\n  border-radius: 1.2rem;\n  background-color: black;\n  padding: 1rem;\n}\n\n.form,\n.add-project-form {\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.form > input,\n.form > select,\n.form > textarea,\n.lower-bottom-form input,\n.lower-bottom-form select,\n.add-project-form input {\n  padding: 1rem;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: white;\n}\n\n.lower-bottom-form select,\n#date {\n  border: 0.1rem solid rgb(186, 186, 186);\n  border-radius: 1.2rem;\n}\n\n.lower-bottom-form {\n  border: none;\n  outline: none;\n  font-size: 1.4rem;\n  display: flex;\n  gap: 1rem;\n  margin: 1rem 0;\n}\n\n.form-btns,\n.add-project-btns,\n.right-todo-nav {\n  display: flex;\n  gap: 1rem;\n}\n\n.form-btns button,\n.cancel-btn,\n.add-btn {\n  padding: 1rem 2rem;\n  cursor: pointer;\n  border-radius: 1.2rem;\n}\n\n.form-btn,\n.add-btn {\n  background-color: green;\n  color: white;\n  border: none;\n}\n\n.cancel-btn {\n  border: 0.1rem solid rgb(186, 186, 186);\n  background-color: transparent;\n  color: white;\n  font-size: 1.2rem;\n}\n\n.active {\n  background-color: green;\n}\n\n.hide {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,mCAAmC;EACnC,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;EACjC,iDAAiD;EACjD,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;EAGE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,YAAY;AACd;AACA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;;EAEE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,6BAA6B;EAC7B,YAAY;AACd;;AAEA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,qCAAqC;EACrC,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,cAAc;AAChB;;AAEA;;EAEE,uCAAuC;EACvC,qBAAqB;EACrB,uBAAuB;EACvB,aAAa;AACf;;AAEA;;EAEE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;;;;;EAME,aAAa;EACb,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd;;AAEA;;EAEE,uCAAuC;EACvC,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,cAAc;AAChB;;AAEA;;;EAGE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE,kBAAkB;EAClB,eAAe;EACf,qBAAqB;AACvB;;AAEA;;EAEE,uBAAuB;EACvB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,uCAAuC;EACvC,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-background-color: #333333;\n  --primary-color: #112a46;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: \"Comfortaa\", cursive;\n  background-color: var(--primary-background-color);\n  color: white;\n}\n\nul {\n  list-style: none;\n}\n\n.navigation,\n.project-nav-header,\n.top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.top {\n  font-size: 2rem;\n}\n\n.container {\n  max-width: 120rem;\n  margin: 0 auto;\n  padding: 1rem 1rem;\n  height: 95vh;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n}\n\n.navigation {\n  height: 10vh;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 2rem;\n  color: white;\n}\n.logo-container img {\n  height: 5rem;\n  width: auto;\n}\n\n.todo-card img {\n  width: 2.5rem;\n  height: auto;\n  cursor: pointer;\n}\n\n.project-navigation-and-todo-card-container {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.project-navigation,\n.projects-navigation-list {\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 1rem 0;\n}\n\n.project-nav-header button {\n  font-size: 4rem;\n  padding: 0.2rem 1rem;\n  color: white;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n\n.project-nav-header button:hover,\n.todo-card img:hover {\n  background-color: grey;\n}\n\n.projects-navigation-list {\n  cursor: pointer;\n}\n\n.project-navigation {\n  height: 80vh;\n  overflow: scroll;\n}\n\n.section-and-below {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  height: 85vh;\n  overflow: scroll;\n}\n\n.todo-cards {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 0 2rem;\n}\n\n.todo-card {\n  border-bottom: 0.5rem solid #0ebe0e74;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.add-task-button button {\n  padding: 1rem 2rem;\n  cursor: pointer;\n  font-size: 2rem;\n  background-color: transparent;\n  border: none;\n  color: #f8dada;\n}\n\n.add-todo-form,\n#project-name {\n  border: 0.1rem solid rgb(186, 186, 186);\n  border-radius: 1.2rem;\n  background-color: black;\n  padding: 1rem;\n}\n\n.form,\n.add-project-form {\n  font-size: 1.4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.form > input,\n.form > select,\n.form > textarea,\n.lower-bottom-form input,\n.lower-bottom-form select,\n.add-project-form input {\n  padding: 1rem;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: white;\n}\n\n.lower-bottom-form select,\n#date {\n  border: 0.1rem solid rgb(186, 186, 186);\n  border-radius: 1.2rem;\n}\n\n.lower-bottom-form {\n  border: none;\n  outline: none;\n  font-size: 1.4rem;\n  display: flex;\n  gap: 1rem;\n  margin: 1rem 0;\n}\n\n.form-btns,\n.add-project-btns,\n.right-todo-nav {\n  display: flex;\n  gap: 1rem;\n}\n\n.form-btns button,\n.cancel-btn,\n.add-btn {\n  padding: 1rem 2rem;\n  cursor: pointer;\n  border-radius: 1.2rem;\n}\n\n.form-btn,\n.add-btn {\n  background-color: green;\n  color: white;\n  border: none;\n}\n\n.cancel-btn {\n  border: 0.1rem solid rgb(186, 186, 186);\n  background-color: transparent;\n  color: white;\n  font-size: 1.2rem;\n}\n\n.active {\n  background-color: green;\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/UIView.js":
/*!***********************!*\
  !*** ./src/UIView.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertHTML": () => (/* binding */ insertHTML),
/* harmony export */   "projectListHTML": () => (/* binding */ projectListHTML),
/* harmony export */   "todoCardHTML": () => (/* binding */ todoCardHTML)
/* harmony export */ });
const insertHTML = function (parent, position, html) {
  const container = document.querySelector(`.${parent}`);
  container.insertAdjacentHTML(position, html);
};

const homePageHTML = function () {
  const html = ``;
};

const todoCardHTML = function (todoData) {
  const parent = "todo-cards";
  const html = `
    <div class="todo-card">
      <div class="top">
        <h2 class="todo-title">${todoData.title}</h2>
        <div class="right-todo-nav">
          <img class="edit-icon" alt="edit icon" />
          <img class="delete-icon" alt="delete icon" />
        </div>
      </div>
      <p class="todo-description">
        ${todoData.description}
      </p>
    </div>
  `;
  insertHTML(parent, "beforeend", html);
};

const projectListHTML = function (projectName) {
  const parent = "projects-navigation-list";
  const html = `
    <li class="project">${projectName}</li>
  `;
  insertHTML(parent, "beforeend", html);
};




/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showNewTodoForm": () => (/* binding */ showNewTodoForm)
/* harmony export */ });
/* harmony import */ var _logics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logics */ "./src/logics.js");
/* harmony import */ var _UIView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIView */ "./src/UIView.js");



const addTaskBtn = document.querySelector(".add-task-btn");
const addNewTodoForm = document.querySelector(".add-todo-form");
const addNewProjectForm = document.querySelector(".add-project-form");
const addNewProjectBtn = document.querySelector(".project-plus");
const cancelNewTaskBtn = document.querySelector("#form-cancel-btn");
const cancelNewProjectBtn = document.querySelector(".cancel-project-btn");

const showNewTodoForm = function () {
  addTaskBtn.addEventListener("click", function () {
    addNewTodoForm.classList.toggle("hide");
    addTaskBtn.classList.add("hide");
  });
  addNewTodoForm.addEventListener("submit", function (e) {
    let currentProject = (0,_logics__WEBPACK_IMPORTED_MODULE_0__.createProject)("Welcome");
    e.preventDefault();
    const title = document.querySelector("#title").value.trim();
    const description = document
      .querySelector("#todo-description")
      .value.trim();
    const due_date = document.querySelector("#date").value;
    const priority = document.querySelector("#priority-select").value;
    document.querySelector("#title").value = "";
    document.querySelector("#todo-description").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#priority-select").value = "High Priority";
    cancelNewTaskBtn.click();
    // check current project, project with active with in class
    // use project name
    // create new todo
    const newTodo = (0,_logics__WEBPACK_IMPORTED_MODULE_0__.createNewTodo)(
      currentProject,
      title,
      description,
      due_date,
      priority
    );
    // display card (to be chnanged, because display would be by loop)
    // todoCardHTML(newTodo);
    (0,_logics__WEBPACK_IMPORTED_MODULE_0__.displayTodo)(currentProject);
    console.log(newTodo);
  });
  cancelNewTaskBtn.addEventListener("click", function () {
    addNewTodoForm.classList.toggle("hide");
    addTaskBtn.classList.remove("hide");
  });
  cancelNewProjectBtn.addEventListener("click", function () {
    addNewProjectForm.classList.add("hide");
  });
  addNewProjectBtn.addEventListener("click", function () {
    addNewProjectForm.classList.remove("hide");
  });
  // create a new project
  addNewProjectForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.querySelector("#project-name").value.trim();
    addNewProjectForm.classList.add("hide");
    console.log({ title });
    document.querySelector("#project-name").value = "";
    cancelNewProjectBtn.click();
    // create a new project
    (0,_logics__WEBPACK_IMPORTED_MODULE_0__.createProject)(title);
  });
};




/***/ }),

/***/ "./src/loadImages.js":
/*!***************************!*\
  !*** ./src/loadImages.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/logo.png */ "./src/icons/logo.png");
/* harmony import */ var _icons_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/delete.png */ "./src/icons/delete.png");
/* harmony import */ var _icons_edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/edit.png */ "./src/icons/edit.png");




const loadImages = function () {
  const logoIcon = document.querySelector(".logo-icon");
  const allDeleteImgs = document.querySelectorAll(".delete-icon");
  const allEditImgs = document.querySelectorAll(".edit-icon");
  allDeleteImgs.forEach(function (icon) {
    icon.src = _icons_delete_png__WEBPACK_IMPORTED_MODULE_1__;
  });
  allEditImgs.forEach(function (icon) {
    icon.src = _icons_edit_png__WEBPACK_IMPORTED_MODULE_2__;
  });
  logoIcon.setAttribute("src", _icons_logo_png__WEBPACK_IMPORTED_MODULE_0__);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadImages);


/***/ }),

/***/ "./src/logics.js":
/*!***********************!*\
  !*** ./src/logics.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjectsArray": () => (/* binding */ allProjectsArray),
/* harmony export */   "createNewTodo": () => (/* binding */ createNewTodo),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "displayTodo": () => (/* binding */ displayTodo)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _UIView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIView */ "./src/UIView.js");



const allProjectsArray = [];
const createProject = function (projectName = "Welcome") {
  const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName);
  allProjectsArray.push(newProject);
  displayProjectList();
  return newProject;
};

const createNewTodo = function (
  project,
  title,
  description,
  due_date,
  priority
) {
  const todoProject = project; //project function
  const projectTodo = todoProject.addTodo(
    title,
    description,
    due_date,
    priority
  );
  todoProject.addTask(projectTodo);
  return projectTodo;
};

const displayTodo = function (project) {
  const projectContainer = project;
  projectContainer.listProjectTask();
};

const displayProjectList = function () {
  // clear current html
  const parentContainer = document.querySelector(".projects-navigation-list");
  parentContainer.textContent = "";
  // learn first project example
  (0,_UIView__WEBPACK_IMPORTED_MODULE_1__.projectListHTML)("Welcome");
  parentContainer.firstElementChild.classList.add("active");
  // create html for new html from project list array loop
  allProjectsArray.forEach(function (project) {
    (0,_UIView__WEBPACK_IMPORTED_MODULE_1__.projectListHTML)(project.projectName);
    console.log(project);
  });
};

const editProject = function () {};

const editTodo = function () {};

const deleteTodo = function () {};




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _UIView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIView */ "./src/UIView.js");
/* harmony import */ var _loadImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadImages */ "./src/loadImages.js");





const getProjectName = (data) => ({
  projectName: data.projectName,
});

const getProjectId = (data) => ({
  projectId: data.projectId,
});
const listTasks = (data) => {
  // get data in all tasks array and log out individual todos
  const listProjectTask = function () {
    data.allTasks.forEach(function (todo) {
      (0,_UIView__WEBPACK_IMPORTED_MODULE_1__.todoCardHTML)(todo);
      (0,_loadImages__WEBPACK_IMPORTED_MODULE_2__["default"])();
      console.log(todo);
    });
  };
  return { listProjectTask };
};
const addTodo = () => ({
  addTodo: (title, description, due_date, priority) =>
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, due_date, priority),
});

const addTask = (data) => ({
  addTask: (task) => data.allTasks.push(task),
});

const Project = function (projectName = "Welcome") {
  const projectId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const allTasks = [];
  const data = {
    projectName,
    allTasks,
    projectId,
  };
  return Object.assign(
    {},
    getProjectName(data),
    listTasks(data),
    addTask(data),
    addTodo(),
    getProjectId(data)
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getTitle = (data) => ({
  title: data.title,
});
const getDescription = (data) => ({
  description: data.description,
});
const getDueDate = (data) => ({
  due_date: data.due_date,
});
const getPriority = (data) => ({
  priority: data.priority,
});

const Todo = function (title, description, due_date, priority) {
  const data = {
    title,
    description,
    due_date,
    priority,
  };
  return Object.assign(
    {},
    getTitle(data),
    getDescription(data),
    getDueDate(data),
    getPriority(data)
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/icons/delete.png":
/*!******************************!*\
  !*** ./src/icons/delete.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6fd29509719f079bfd7.png";

/***/ }),

/***/ "./src/icons/edit.png":
/*!****************************!*\
  !*** ./src/icons/edit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8150eeab4214b6667146.png";

/***/ }),

/***/ "./src/icons/logo.png":
/*!****************************!*\
  !*** ./src/icons/logo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d20cd48e2e0d022083.png";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _logics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logics */ "./src/logics.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");




const project1 = (0,_logics__WEBPACK_IMPORTED_MODULE_1__.createProject)("Personal");
console.log(project1);
(0,_logics__WEBPACK_IMPORTED_MODULE_1__.createNewTodo)(
  project1,
  "charge my phone",
  "I need to charge my phone as soon as the light comes on",
  "02/2022",
  "low"
);
(0,_logics__WEBPACK_IMPORTED_MODULE_1__.createNewTodo)(
  project1,
  "call a friend",
  "Need to call a friend to catch up with old times",
  "02/2023",
  "high"
);
(0,_logics__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(project1);

(0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.showNewTodoForm)();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map