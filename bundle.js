(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("gitlab-monitor", [], factory);
	else if(typeof exports === 'object')
		exports["gitlab-monitor"] = factory();
	else
		root["gitlab-monitor"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../ce-decorators/lib/classevents.js":
/*!*******************************************!*\
  !*** ../ce-decorators/lib/classevents.js ***!
  \*******************************************/
/*! exports provided: getClassEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassEvents", function() { return getClassEvents; });
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
var map = new Map();
/**
 * CLassEvent type
 */

/**
 * return events registered for the given class
 * 
 * @param target Class to get ClassEvents from 
 */

function getClassEvents(target) {
  var properties = map.get(target);

  if (!properties) {
    properties = new Map();
    map.set(target, properties);
  }

  return properties;
}

/***/ }),

/***/ "../ce-decorators/lib/classproperties.js":
/*!***********************************************!*\
  !*** ../ce-decorators/lib/classproperties.js ***!
  \***********************************************/
/*! exports provided: getClassProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassProperties", function() { return getClassProperties; });
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
var map = new Map();
/**
 * ClassProperty type
 */

/**
 * return all defined properties for a class
 * 
 * @param target Class to get ClassProperties from
 */

function getClassProperties(target) {
  var properties = map.get(target);

  if (!properties) {
    properties = new Map();
    map.set(target, properties);
  }

  return properties;
}

/***/ }),

/***/ "../ce-decorators/lib/classpropertyinterceptors.js":
/*!*********************************************************!*\
  !*** ../ce-decorators/lib/classpropertyinterceptors.js ***!
  \*********************************************************/
/*! exports provided: getClassPropertyInterceptor, getAllClassPropertyInterceptors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassPropertyInterceptor", function() { return getClassPropertyInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllClassPropertyInterceptors", function() { return getAllClassPropertyInterceptors; });
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
var map = new Map();
/**
 * PropertyInterceptor Type
 */

/**
 * get all interceprors for a property of a class
 * 
 * @param target Class to get interceptors from
 * @param property property which will be intercepted
 */

function getClassPropertyInterceptor(target, property) {
  var properties = map.get(target);

  if (!properties) {
    properties = new Map();
    map.set(target, properties);
  }

  var propertyInterceptor = properties.get(property);

  if (!propertyInterceptor) {
    propertyInterceptor = [];
    properties.set(property, propertyInterceptor);
  }

  return propertyInterceptor;
}
/**
 * get all interceptors for a class
 * 
 * @param target Class to get interceptors from
 */

function getAllClassPropertyInterceptors(target) {
  var properties = map.get(target);

  if (!properties) {
    properties = new Map();
    map.set(target, properties);
  }

  return properties;
}

/***/ }),

/***/ "../ce-decorators/lib/classpropertywatcher.js":
/*!****************************************************!*\
  !*** ../ce-decorators/lib/classpropertywatcher.js ***!
  \****************************************************/
/*! exports provided: getClassPropertyWatcher, getAllClassPropertyWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassPropertyWatcher", function() { return getClassPropertyWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllClassPropertyWatcher", function() { return getAllClassPropertyWatcher; });
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
var map = new Map();
/**
 * PropertyWatcher type
 */

/**
 * get all property watchers for property
 *
 * @param target Class to get PropertyWatcher from
 * @param property property which is watched
 */

function getClassPropertyWatcher(target, property) {
  var properties = map.get(target);

  if (!properties) {
    properties = new Map();
    map.set(target, properties);
  }

  var propertyWatcher = properties.get(property);

  if (!propertyWatcher) {
    propertyWatcher = [];
    properties.set(property, propertyWatcher);
  }

  return propertyWatcher;
}
/**
 * get all PropertyWatcher from a class
 *
 * @param target Class to get PropertyWatcher from
 */

function getAllClassPropertyWatcher(target) {
  var properties = map.get(target);

  if (!properties) {
    properties = new Map();
    map.set(target, properties);
  }

  return properties;
}

/***/ }),

/***/ "../ce-decorators/lib/component.js":
/*!*****************************************!*\
  !*** ../ce-decorators/lib/component.js ***!
  \*****************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage2/stage2decorators */ "../ce-decorators/lib/stage2/stage2decorators.js");
/* harmony import */ var _stage2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage2/component */ "../ce-decorators/lib/stage2/component.js");
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */


/**
 * Component decorator, defines a new component to be used as a custom element compatible with stage-0, TS and stage-2 decorator implementations
 *
 * @param options (ComponentOptions) options to initialize the component
 */

function Component(options) {
  // tslint:disable-line:function-name
  return function (target) {
    // tslint:disable-line:no-any
    if (Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2ClassDecorator"])(target)) {
      return Object(_stage2_component__WEBPACK_IMPORTED_MODULE_1__["Component"])(options)(target); // tslint:disable-line:no-any
    } else {
      return Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["applyStage2toLegacyClassDecorator"])(target, Object(_stage2_component__WEBPACK_IMPORTED_MODULE_1__["Component"])(options)); // tslint:disable-line:no-unsafe-any
    }
  };
}

/***/ }),

/***/ "../ce-decorators/lib/componentcatalog.js":
/*!************************************************!*\
  !*** ../ce-decorators/lib/componentcatalog.js ***!
  \************************************************/
/*! exports provided: getComponentCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentCatalog", function() { return getComponentCatalog; });
/* harmony import */ var _componentproperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentproperties */ "../ce-decorators/lib/componentproperties.js");
/* harmony import */ var _classproperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classproperties */ "../ce-decorators/lib/classproperties.js");
/* harmony import */ var _classevents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classevents */ "../ce-decorators/lib/classevents.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */



/**
 * return a catalog of all controls registered with ce-decorators
 */

function getComponentCatalog() {
  var components = Object(_componentproperties__WEBPACK_IMPORTED_MODULE_0__["getAllComponents"])();
  var catalog = {};
  components.forEach(function (value) {
    var componentProperties = Object(_componentproperties__WEBPACK_IMPORTED_MODULE_0__["getComponentProperties"])(value);
    var properties = {};
    Array.from(Object(_classproperties__WEBPACK_IMPORTED_MODULE_1__["getClassProperties"])(value).entries()).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          options = _ref2[1];

      properties[name.toString()] = options;
    });
    var events = Array.from(Object(_classevents__WEBPACK_IMPORTED_MODULE_2__["getClassEvents"])(value).values());
    catalog[componentProperties.tag] = {
      properties: properties,
      events: events
    };
  });
  return catalog;
}

if (!window['CEDECORATORCOMPONENTS']) {
  // tslint:disable-line
  window['CEDECORATORCOMPONENTS'] = []; // tslint:disable-line
} // ts-lint:disable-line


window['CEDECORATORCOMPONENTS'].push(getComponentCatalog); // tslint:disable-line

/***/ }),

/***/ "../ce-decorators/lib/componentoptions.js":
/*!************************************************!*\
  !*** ../ce-decorators/lib/componentoptions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../ce-decorators/lib/componentproperties.js":
/*!***************************************************!*\
  !*** ../ce-decorators/lib/componentproperties.js ***!
  \***************************************************/
/*! exports provided: getComponentProperties, setComponentProperties, getAllComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentProperties", function() { return getComponentProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setComponentProperties", function() { return setComponentProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllComponents", function() { return getAllComponents; });
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
var map = new Map();
/**
 * CSSStyleSheetAlike if adoptedStylsheeets are not supported
 */

/**
 * return componentproperties
 * @param target 
 */

function getComponentProperties(target) {
  return map.get(target);
}
/**
 * set component properties
 * @param target 
 * @param options 
 */

function setComponentProperties(target, options) {
  map.set(target, options);
}
/**
 * return all components defined with ce-decorators
 */

function getAllComponents() {
  return Array.from(map.keys());
}

/***/ }),

/***/ "../ce-decorators/lib/componentstate.js":
/*!**********************************************!*\
  !*** ../ce-decorators/lib/componentstate.js ***!
  \**********************************************/
/*! exports provided: COMPONENT_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_STATE", function() { return COMPONENT_STATE; });
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/**
 * COMPONENT_STATE
 */
var COMPONENT_STATE;

(function (COMPONENT_STATE) {
  COMPONENT_STATE[COMPONENT_STATE["CONNECTED"] = 0] = "CONNECTED";
  COMPONENT_STATE[COMPONENT_STATE["DISCONNECTED"] = 1] = "DISCONNECTED";
  COMPONENT_STATE[COMPONENT_STATE["INIT"] = 2] = "INIT";
  COMPONENT_STATE[COMPONENT_STATE["CONSTRUCTED"] = 3] = "CONSTRUCTED";
})(COMPONENT_STATE || (COMPONENT_STATE = {}));

/***/ }),

/***/ "../ce-decorators/lib/customelement.js":
/*!*********************************************!*\
  !*** ../ce-decorators/lib/customelement.js ***!
  \*********************************************/
/*! exports provided: RENDER_STRATEGY, CustomElement, LazyCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_STRATEGY", function() { return RENDER_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomElement", function() { return CustomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyCustomElement", function() { return LazyCustomElement; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../ce-decorators/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../ce-decorators/lib/utils.js");
/* harmony import */ var _classproperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classproperties */ "../ce-decorators/lib/classproperties.js");
/* harmony import */ var _componentstate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentstate */ "../ce-decorators/lib/componentstate.js");
/* harmony import */ var _propertystate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./propertystate */ "../ce-decorators/lib/propertystate.js");
/* harmony import */ var _classpropertywatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classpropertywatcher */ "../ce-decorators/lib/classpropertywatcher.js");
/* harmony import */ var _classpropertyinterceptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classpropertyinterceptors */ "../ce-decorators/lib/classpropertyinterceptors.js");
/* harmony import */ var _renderer_pipeRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderer/pipeRenderer */ "../ce-decorators/lib/renderer/pipeRenderer.js");
/* harmony import */ var _renderer_renderComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./renderer/renderComponent */ "../ce-decorators/lib/renderer/renderComponent.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */








/**
 * interface for an indexable element
 */

/**
 * define the render strategy for the control
 */

var RENDER_STRATEGY;
/**
 * Base class for all custom elements
 */

(function (RENDER_STRATEGY) {
  RENDER_STRATEGY[RENDER_STRATEGY["DEFAULT"] = 0] = "DEFAULT";
  RENDER_STRATEGY[RENDER_STRATEGY["LAZY"] = 1] = "LAZY";
  RENDER_STRATEGY[RENDER_STRATEGY["PIPELINE_EXPERIMENTAL"] = 2] = "PIPELINE_EXPERIMENTAL";
})(RENDER_STRATEGY || (RENDER_STRATEGY = {}));

var CustomElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(CustomElement, _HTMLElement);

  _createClass(CustomElement, null, [{
    key: "_fromAttribute",

    /* tslint:disable-next-line */
    value: function _fromAttribute(name, oldValue, newValue, instance) {
      if (instance._propertyState !== _propertystate__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATE"].REFLECTING) {
        var propertyName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["kebapToCamelCase"])(name);
        var classProperty = Object(_classproperties__WEBPACK_IMPORTED_MODULE_2__["getClassProperties"])(this).get(propertyName);
        oldValue = instance[propertyName];

        if (classProperty.converter) {
          if (classProperty.converter.fromAttribute) {
            newValue = classProperty.converter.fromAttribute(newValue, classProperty.type); // tslint:disable-line:no-unsafe-any
          } else {
            newValue = classProperty.converter(newValue, classProperty.type); // tslint:disable-line:no-unsafe-any
          }
        } else {
          newValue = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["deserializeValue"])(newValue, classProperty.type); // tslint:disable-line:no-unsafe-any
        }

        if (oldValue !== newValue) {
          instance._propertyState = _propertystate__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATE"].UPDATE_FROM_ATTRIBUTE;

          this._fromProperty(propertyName, oldValue, newValue, instance);
        }
      }
    }
    /* tslint:disable-next-line */

  }, {
    key: "_fromProperty",
    value: function _fromProperty(propertyKey, oldValue, newValue, instance) {
      if (oldValue !== newValue) {
        var classProperty = Object(_classproperties__WEBPACK_IMPORTED_MODULE_2__["getClassProperties"])(this).get(propertyKey);
        var interceptor = Object(_classpropertyinterceptors__WEBPACK_IMPORTED_MODULE_6__["getClassPropertyInterceptor"])(this, propertyKey);
        newValue = interceptor.reduce(function (value, func) {
          return func.apply(instance, [oldValue, value]) || value;
        }, newValue);

        this._reflectAttributes(classProperty, instance, newValue, propertyKey);

        instance._propertyState = _propertystate__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATE"].UPDATE_PROPERTY;
        instance[propertyKey] = newValue;
        instance._propertyState = _propertystate__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATE"].DIRTY;
        var watcher = Object(_classpropertywatcher__WEBPACK_IMPORTED_MODULE_5__["getClassPropertyWatcher"])(this, propertyKey);
        watcher.forEach(function (value) {
          return value.apply(instance, [oldValue, newValue]);
        }); // tslint:disable-line:no-unsafe-any

        instance.scheduleRender();
      }
    }
    /* tslint:disable-next-line */

  }, {
    key: "_reflectAttributes",
    value: function _reflectAttributes(classProperty, instance, newValue, propertyKey) {
      if ((classProperty.reflectAsAttribute || classProperty.reflectAsAttribute === undefined) && instance._componentState !== _componentstate__WEBPACK_IMPORTED_MODULE_3__["COMPONENT_STATE"].INIT) {
        if (classProperty.type === Boolean || classProperty.type === String || classProperty.type === Number || classProperty.reflectAsAttribute === true) {
          if (instance._propertyState !== _propertystate__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATE"].UPDATE_FROM_ATTRIBUTE) {
            instance._propertyState = _propertystate__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATE"].REFLECTING;

            if (newValue === false || newValue === null || newValue === undefined) {
              instance.removeAttribute(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["camelToKebapCase"])(propertyKey));
            } else {
              if (classProperty.converter && classProperty.converter.toAttribute) {
                instance.setAttribute(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["camelToKebapCase"])(propertyKey), classProperty.converter.toAttribute(newValue, classProperty.type));
              } else {
                instance.setAttribute(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["camelToKebapCase"])(propertyKey), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["serializeValue"])(newValue, classProperty.type));
              }
            }
          }
        }
      }
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      // filter out states -> type === undefined
      return Array.from(Object(_classproperties__WEBPACK_IMPORTED_MODULE_2__["getClassProperties"])(this)).filter(function (value) {
        return value[1].type !== undefined;
      }).map(function (value) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["camelToKebapCase"])(value[0].toString());
      });
    }
  }]);

  function CustomElement() {
    var _this;

    _classCallCheck(this, CustomElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomElement).call(this));
    _this._renderStrategy = RENDER_STRATEGY.DEFAULT;
    _this._renderCallbackResolver = null;
    _this._componentState = _componentstate__WEBPACK_IMPORTED_MODULE_3__["COMPONENT_STATE"].INIT;
    _this._propertyState = _propertystate__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATE"].DIRTY;
    _this._renderScheduled = false;
    _this._templateCache = null;
    _this._firstRender = true;
    _this._renderCompletedCallbacks = [];
    _this._constructedCompletedCallbacks = [];
    _this._layoutRAFReference = null;
    Promise.resolve().then(function () {
      if (_this._componentState === _componentstate__WEBPACK_IMPORTED_MODULE_3__["COMPONENT_STATE"].INIT) {
        _this._componentState = _componentstate__WEBPACK_IMPORTED_MODULE_3__["COMPONENT_STATE"].CONSTRUCTED;

        _this._constructedCompletedCallbacks.forEach(function (value) {
          return value();
        });

        _this._constructedCompletedCallbacks = [];
      }
    });
    return _this;
  }
  /**
   * should return the DOM to be rendered
   */

  /**
   * is called when the element is attached to the DOM
   */


  _createClass(CustomElement, [{
    key: "componentConnected",
    value: function componentConnected() {} // tslint:disable-line

    /**
     * is called when the element is dettached from the DOM
     */

  }, {
    key: "componentDisconnected",
    value: function componentDisconnected() {} // tslint:disable-line

    /** 
     * is called just before render() will be exexuted 
     */

  }, {
    key: "componentWillRender",
    value: function componentWillRender() {} // tslint:disable-line

    /** 
     * is called just after render() will be exexuted 
     */

  }, {
    key: "componentDidRender",
    value: function componentDidRender() {} // tslint:disable-line

    /** 
     * is called just after the first render()
     */

  }, {
    key: "componentFirstRender",
    value: function componentFirstRender() {} // tslint:disable-line

    /**
     * is called after render and broser layouting
     */

  }, {
    key: "componentDidLayout",
    value: function componentDidLayout() {} // tslint:disable-line

    /**
     * return element whre the DOM from render will be rendered to
     */

  }, {
    key: "renderToElement",
    value: function renderToElement() {
      if (!this.shadowRoot) {
        this.attachShadow({
          mode: 'open'
        });
      }

      return this.shadowRoot;
    }
    /**
     * return a Promise which will be resolved after
     * construction of the element
     * 
     * @returns Promise<void> promise which will resolve after construction is complete
     */

  }, {
    key: "waitForConstruction",
    value: function () {
      var _waitForConstruction = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve) {
                  _this2._constructedCompletedCallbacks.push(resolve);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function waitForConstruction() {
        return _waitForConstruction.apply(this, arguments);
      }

      return waitForConstruction;
    }()
    /**
     * return a Promise which will be resolved after a
     * successfull render
     * 
     * @returns Promise<void>
     */

  }, {
    key: "waitForRender",
    value: function () {
      var _waitForRender = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve) {
                  _this3._renderCompletedCallbacks.push(resolve);
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function waitForRender() {
        return _waitForRender.apply(this, arguments);
      }

      return waitForRender;
    }()
    /**
     * Schedule a new render (the render will only be scheduled) if
     * the componentstate is CONNECTED and propertystate is DIRTY
     * 
     * force will force a re-render
     * 
     * @param force force the re-render
     */

  }, {
    key: "scheduleRender",
    value: function scheduleRender() {
      var _this4 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this._componentState === _componentstate__WEBPACK_IMPORTED_MODULE_3__["COMPONENT_STATE"].CONNECTED && this._propertyState === _propertystate__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATE"].DIRTY && !this._renderScheduled) {
        this._renderScheduled = true;

        switch (this._renderStrategy) {
          case RENDER_STRATEGY.PIPELINE_EXPERIMENTAL:
            Object(_renderer_pipeRenderer__WEBPACK_IMPORTED_MODULE_7__["addComponentToRenderPipeline"])(this);
            break;

          case RENDER_STRATEGY.LAZY:
            if (!force) {
              new Promise(function (resolve) {
                setTimeout(resolve);
                _this4._renderCallbackResolver = resolve;
              }).then(function () {
                _renderer_renderComponent__WEBPACK_IMPORTED_MODULE_8__["renderComponent"].apply(_this4);
                _this4._renderCallbackResolver = null;
              });
              break;
            }

          default:
            Promise.resolve().then(function () {
              _renderer_renderComponent__WEBPACK_IMPORTED_MODULE_8__["renderComponent"].apply(_this4);
            });
            break;
        }
      } else if (force) {
        if (this._renderScheduled) {
          if (this._renderCallbackResolver) {
            Promise.resolve().then(function () {
              _this4._renderCallbackResolver();
            });
            return;
          } else if (this._renderStrategy === RENDER_STRATEGY.PIPELINE_EXPERIMENTAL) {
            Object(_renderer_pipeRenderer__WEBPACK_IMPORTED_MODULE_7__["removeComponentFromRenderPipeline"])(this);
          } else {
            return; // render already scheduled as microtask
          }
        }

        Promise.resolve().then(function () {
          _renderer_renderComponent__WEBPACK_IMPORTED_MODULE_8__["renderComponent"].apply(_this4);
        });
      }
    }
    /**
     * build-in function please do not override
     */

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this5 = this;

      if (this._componentState === _componentstate__WEBPACK_IMPORTED_MODULE_3__["COMPONENT_STATE"].INIT || this._componentState === _componentstate__WEBPACK_IMPORTED_MODULE_3__["COMPONENT_STATE"].CONSTRUCTED) {
        // on first connected reflect attributes
        this._componentState = _componentstate__WEBPACK_IMPORTED_MODULE_3__["COMPONENT_STATE"].CONNECTED;
        var _originalPropertyState = this._propertyState;
        this._propertyState = _propertystate__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATE"].REFLECTING;
        var properties = Object(_classproperties__WEBPACK_IMPORTED_MODULE_2__["getClassProperties"])(this.constructor);
        properties.forEach(function (value, key) {
          var propValue = _this5[key.toString()];

          if (propValue || propValue === 0) {
            _this5.constructor._reflectAttributes(value, _this5, propValue, key.toString());
          }
        });
        this._propertyState = _originalPropertyState;
      } else {
        this._componentState = _componentstate__WEBPACK_IMPORTED_MODULE_3__["COMPONENT_STATE"].CONNECTED;
      }

      this.componentConnected();
      this.scheduleRender();
    }
    /**
     * build-in function please do not override
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this._componentState = _componentstate__WEBPACK_IMPORTED_MODULE_3__["COMPONENT_STATE"].DISCONNECTED;
      this.componentDisconnected();
    }
    /**
     * build-in function please do not override
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.constructor._fromAttribute(name, oldValue, newValue, this);
      }
    }
  }]);

  return CustomElement;
}(_wrapNativeSuper(HTMLElement));
/**
 * shorthand for lazy rendered custom element
 */

var LazyCustomElement =
/*#__PURE__*/
function (_CustomElement) {
  _inherits(LazyCustomElement, _CustomElement);

  function LazyCustomElement() {
    var _this6;

    _classCallCheck(this, LazyCustomElement);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(LazyCustomElement).call(this));
    _this6._renderStrategy = RENDER_STRATEGY.LAZY;
    return _this6;
  }

  return LazyCustomElement;
}(CustomElement);
/** helper for shimmed browsers */

(function () {
  // tslint:disable-line
  if ('ShadyCSS' in window && typeof window.ShadyCSS.ScopingShim.prepareAdoptedCssText === 'undefined') {
    console.error('Please check your "@webcomponents/webcomponentsjs" polyfill, minimum version 2.2.6 required'); // tslint:disable-line
  }
})();

/***/ }),

/***/ "../ce-decorators/lib/deprecated.js":
/*!******************************************!*\
  !*** ../ce-decorators/lib/deprecated.js ***!
  \******************************************/
/*! exports provided: Deprecated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deprecated", function() { return Deprecated; });
/* harmony import */ var _stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage2/stage2decorators */ "../ce-decorators/lib/stage2/stage2decorators.js");
/* harmony import */ var _stage2_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage2/deprecated */ "../ce-decorators/lib/stage2/deprecated.js");
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */


/**
 * Emits a deprecated warning
 */

function Deprecated(message) {
  // tslint:disable-line
  return function (target, propertyKey, descriptor) {
    // tslint:disable-line:no-any
    if (Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2MethodDecorator"])(target) || Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2FieldDecorator"])(target)) {
      return Object(_stage2_deprecated__WEBPACK_IMPORTED_MODULE_1__["Deprecated"])(message)(target); // tslint:disable-line:no-any
    } else {
      return Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["applyStage2ToLegacyFieldDecorator"])(target, propertyKey, descriptor, Object(_stage2_deprecated__WEBPACK_IMPORTED_MODULE_1__["Deprecated"])(message));
    }
  };
}

/***/ }),

/***/ "../ce-decorators/lib/event.js":
/*!*************************************!*\
  !*** ../ce-decorators/lib/event.js ***!
  \*************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var _stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage2/stage2decorators */ "../ce-decorators/lib/stage2/stage2decorators.js");
/* harmony import */ var _stage2_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage2/event */ "../ce-decorators/lib/stage2/event.js");
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

 // tslint:disable-line:no-any

/**
 * Event decorator for an event emitter, compatible with stage-0, TS and stage-2 decorators
 *
 * @param name (string) optional: name of the event, if no state, property name will be used
 */

function Event(options) {
  // tslint:disable-line:function-name
  return function (target, propertyKey, descriptor) {
    // tslint:disable-line:no-any
    if (Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2FieldDecorator"])(target)) {
      return Object(_stage2_event__WEBPACK_IMPORTED_MODULE_1__["Event"])(options)(target); // tslint:disable-line:no-any
    } else {
      return Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["applyStage2ToLegacyFieldDecorator"])(target, propertyKey, descriptor, Object(_stage2_event__WEBPACK_IMPORTED_MODULE_1__["Event"])(options));
    }
  };
}

/***/ }),

/***/ "../ce-decorators/lib/eventemitter.js":
/*!********************************************!*\
  !*** ../ce-decorators/lib/eventemitter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../ce-decorators/lib/index.js":
/*!*************************************!*\
  !*** ../ce-decorators/lib/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "../ce-decorators/lib/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony import */ var _componentoptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentoptions */ "../ce-decorators/lib/componentoptions.js");
/* harmony import */ var _componentoptions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_componentoptions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _componentoptions__WEBPACK_IMPORTED_MODULE_1__) if(["Component","CustomElement","LazyCustomElement","Event","Prop","Watch","State","Trace","Deprecated","Interceptor","COMPONENT_STATE","getComponentCatalog","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _componentoptions__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _eventemitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventemitter */ "../ce-decorators/lib/eventemitter.js");
/* harmony import */ var _eventemitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventemitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _eventemitter__WEBPACK_IMPORTED_MODULE_2__) if(["Component","CustomElement","LazyCustomElement","Event","Prop","Watch","State","Trace","Deprecated","Interceptor","COMPONENT_STATE","getComponentCatalog","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _eventemitter__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _propertyoptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertyoptions */ "../ce-decorators/lib/propertyoptions.js");
/* harmony import */ var _propertyoptions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_propertyoptions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _propertyoptions__WEBPACK_IMPORTED_MODULE_3__) if(["Component","CustomElement","LazyCustomElement","Event","Prop","Watch","State","Trace","Deprecated","Interceptor","COMPONENT_STATE","getComponentCatalog","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _propertyoptions__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _customelement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customelement */ "../ce-decorators/lib/customelement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomElement", function() { return _customelement__WEBPACK_IMPORTED_MODULE_4__["CustomElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyCustomElement", function() { return _customelement__WEBPACK_IMPORTED_MODULE_4__["LazyCustomElement"]; });

/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event */ "../ce-decorators/lib/event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _event__WEBPACK_IMPORTED_MODULE_5__["Event"]; });

/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prop */ "../ce-decorators/lib/prop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return _prop__WEBPACK_IMPORTED_MODULE_6__["Prop"]; });

/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./watch */ "../ce-decorators/lib/watch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return _watch__WEBPACK_IMPORTED_MODULE_7__["Watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "State", function() { return _prop__WEBPACK_IMPORTED_MODULE_6__["State"]; });

/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trace */ "../ce-decorators/lib/trace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return _trace__WEBPACK_IMPORTED_MODULE_8__["Trace"]; });

/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deprecated */ "../ce-decorators/lib/deprecated.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Deprecated", function() { return _deprecated__WEBPACK_IMPORTED_MODULE_9__["Deprecated"]; });

/* harmony import */ var _interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptor */ "../ce-decorators/lib/interceptor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return _interceptor__WEBPACK_IMPORTED_MODULE_10__["Interceptor"]; });

/* harmony import */ var _componentstate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentstate */ "../ce-decorators/lib/componentstate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_STATE", function() { return _componentstate__WEBPACK_IMPORTED_MODULE_11__["COMPONENT_STATE"]; });

/* harmony import */ var _componentcatalog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentcatalog */ "../ce-decorators/lib/componentcatalog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getComponentCatalog", function() { return _componentcatalog__WEBPACK_IMPORTED_MODULE_12__["getComponentCatalog"]; });

/* harmony import */ var _lit_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lit-html */ "../ce-decorators/lib/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadyRender", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["shadyRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["defaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["reparentNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["nothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["PropertyPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["templateFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["Template"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncAppend", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["asyncAppend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncReplace", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["asyncReplace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["cache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["classMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guard", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["guard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["ifDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["repeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleMap", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["styleMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeHTML", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["unsafeHTML"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "until", function() { return _lit_html__WEBPACK_IMPORTED_MODULE_13__["until"]; });

/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
















/***/ }),

/***/ "../ce-decorators/lib/interceptor.js":
/*!*******************************************!*\
  !*** ../ce-decorators/lib/interceptor.js ***!
  \*******************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage2/stage2decorators */ "../ce-decorators/lib/stage2/stage2decorators.js");
/* harmony import */ var _stage2_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage2/interceptor */ "../ce-decorators/lib/stage2/interceptor.js");
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */


/**
 * Registers a interceptor for property changes
 *
 * @param property property to intercept
 */

function Interceptor(property) {
  // tslint:disable-line
  // tslint:disable-next-line
  return function (target, propertyKey, descriptor) {
    if (Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2MethodDecorator"])(target)) {
      return Object(_stage2_interceptor__WEBPACK_IMPORTED_MODULE_1__["Interceptor"])(property)(target); // tslint:disable-line
    } else {
      return Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["applyStage2ToLegacyMethodDecorator"])(target, propertyKey, descriptor, Object(_stage2_interceptor__WEBPACK_IMPORTED_MODULE_1__["Interceptor"])(property));
    }
  };
}

/***/ }),

/***/ "../ce-decorators/lib/lit-html.js":
/*!****************************************!*\
  !*** ../ce-decorators/lib/lit-html.js ***!
  \****************************************/
/*! exports provided: shadyRender, DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg, asyncAppend, asyncReplace, cache, classMap, guard, ifDefined, repeat, styleMap, unsafeHTML, until */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "../ce-decorators/node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["nothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["templateFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["Template"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["svg"]; });

/* harmony import */ var lit_html_lib_shady_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/lib/shady-render */ "../ce-decorators/node_modules/lit-html/lib/shady-render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadyRender", function() { return lit_html_lib_shady_render__WEBPACK_IMPORTED_MODULE_1__["render"]; });

/* harmony import */ var lit_html_directives_async_append__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/async-append */ "../ce-decorators/node_modules/lit-html/directives/async-append.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncAppend", function() { return lit_html_directives_async_append__WEBPACK_IMPORTED_MODULE_2__["asyncAppend"]; });

/* harmony import */ var lit_html_directives_async_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/async-replace */ "../ce-decorators/node_modules/lit-html/directives/async-replace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncReplace", function() { return lit_html_directives_async_replace__WEBPACK_IMPORTED_MODULE_3__["asyncReplace"]; });

/* harmony import */ var lit_html_directives_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/cache */ "../ce-decorators/node_modules/lit-html/directives/cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return lit_html_directives_cache__WEBPACK_IMPORTED_MODULE_4__["cache"]; });

/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html/directives/class-map */ "../ce-decorators/node_modules/lit-html/directives/class-map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"]; });

/* harmony import */ var lit_html_directives_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-html/directives/guard */ "../ce-decorators/node_modules/lit-html/directives/guard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guard", function() { return lit_html_directives_guard__WEBPACK_IMPORTED_MODULE_6__["guard"]; });

/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-html/directives/if-defined */ "../ce-decorators/node_modules/lit-html/directives/if-defined.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_7__["ifDefined"]; });

/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-html/directives/repeat */ "../ce-decorators/node_modules/lit-html/directives/repeat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_8__["repeat"]; });

/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-html/directives/style-map */ "../ce-decorators/node_modules/lit-html/directives/style-map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleMap", function() { return lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_9__["styleMap"]; });

/* harmony import */ var lit_html_directives_unsafe_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit-html/directives/unsafe-html */ "../ce-decorators/node_modules/lit-html/directives/unsafe-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeHTML", function() { return lit_html_directives_unsafe_html__WEBPACK_IMPORTED_MODULE_10__["unsafeHTML"]; });

/* harmony import */ var lit_html_directives_until__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit-html/directives/until */ "../ce-decorators/node_modules/lit-html/directives/until.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "until", function() { return lit_html_directives_until__WEBPACK_IMPORTED_MODULE_11__["until"]; });














/***/ }),

/***/ "../ce-decorators/lib/prop.js":
/*!************************************!*\
  !*** ../ce-decorators/lib/prop.js ***!
  \************************************/
/*! exports provided: Prop, State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return Prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var _reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reflect */ "../ce-decorators/lib/reflect.js");
/* harmony import */ var _stage2_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage2/prop */ "../ce-decorators/lib/stage2/prop.js");
/* harmony import */ var _stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage2/stage2decorators */ "../ce-decorators/lib/stage2/stage2decorators.js");
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
 // tslint:disable-line


 // tslint:disable-line:no-any

/**
 * Property decorator, handles attribute reflection and type checking
 *
 * @param options initializer options for the property
 */

function Prop(options) {
  // tslint:disable-line:function-name
  return function (target, propertyKey, descriptor) {
    // tslint:disable-line:no-any
    if (Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_2__["isStage2FieldDecorator"])(target)) {
      if (options && !options.type) {
        throw new Error("type not defined for property");
      }

      return Object(_stage2_prop__WEBPACK_IMPORTED_MODULE_1__["Prop"])(options)(target); // tslint:disable-line:no-any
    } else {
      if (!options || !options.type) {
        if (!options) {
          options = {};
        }

        options.type = Reflect.getMetadata('design:type', target, propertyKey.toString()); // tslint:disable-line
      }

      return Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_2__["applyStage2ToLegacyFieldDecorator"])(target, propertyKey, descriptor, Object(_stage2_prop__WEBPACK_IMPORTED_MODULE_1__["Prop"])(options));
    }
  };
}
/**
 * State decorator, handles re-rendering but without attribute reflection
 */

function State() {
  // tslint:disable-line:function-name
  return function (target, propertyKey, descriptor) {
    // tslint:disable-line:no-any
    if (Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_2__["isStage2FieldDecorator"])(target)) {
      return Object(_stage2_prop__WEBPACK_IMPORTED_MODULE_1__["State"])()(target); // tslint:disable-line:no-any
    } else {
      return Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_2__["applyStage2ToLegacyFieldDecorator"])(target, propertyKey, descriptor, Object(_stage2_prop__WEBPACK_IMPORTED_MODULE_1__["State"])());
    }
  };
}

/***/ }),

/***/ "../ce-decorators/lib/propertyoptions.js":
/*!***********************************************!*\
  !*** ../ce-decorators/lib/propertyoptions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../ce-decorators/lib/propertystate.js":
/*!*********************************************!*\
  !*** ../ce-decorators/lib/propertystate.js ***!
  \*********************************************/
/*! exports provided: PROPERTY_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPERTY_STATE", function() { return PROPERTY_STATE; });
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/**
 * PROPERTY_STATE
 */
var PROPERTY_STATE;

(function (PROPERTY_STATE) {
  PROPERTY_STATE[PROPERTY_STATE["INIT"] = 0] = "INIT";
  PROPERTY_STATE[PROPERTY_STATE["DIRTY"] = 1] = "DIRTY";
  PROPERTY_STATE[PROPERTY_STATE["UPDATE_PROPERTY"] = 2] = "UPDATE_PROPERTY";
  PROPERTY_STATE[PROPERTY_STATE["REFLECTING"] = 3] = "REFLECTING";
  PROPERTY_STATE[PROPERTY_STATE["UPDATE_FROM_ATTRIBUTE"] = 4] = "UPDATE_FROM_ATTRIBUTE";
  PROPERTY_STATE[PROPERTY_STATE["UPDATED"] = 5] = "UPDATED";
  PROPERTY_STATE[PROPERTY_STATE["EXECUTING_WATCHER"] = 6] = "EXECUTING_WATCHER";
})(PROPERTY_STATE || (PROPERTY_STATE = {}));

/***/ }),

/***/ "../ce-decorators/lib/reflect.js":
/*!***************************************!*\
  !*** ../ce-decorators/lib/reflect.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage2/stage2decorators */ "../ce-decorators/lib/stage2/stage2decorators.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
// reflect polyfill in case reflect-metadata package not installed

var origReflect = window.Reflect || {}; // tslint:disable-line:no-any
// tslint:disable-line:no-any

var reflectMap = new Map();

function getOrCreateMetadataMap(map, property) {
  var metadataMap = map.get(property);

  if (!metadataMap) {
    metadataMap = new Map();
    map.set(property, metadataMap);
  }

  return metadataMap;
}

function getOrCreatePropMap(map, target) {
  var propMap = map.get(target);

  if (!propMap) {
    propMap = new Map();
    map.set(target, propMap);
  }

  return propMap;
}

function decorate(decorators, target, propertyKey, description) {
  // tslint:disable-line:no-any
  if (_typeof(origReflect) === 'object' && typeof origReflect.decorate === 'function' && origReflect.decorate !== decorate) {
    // tslint:disable-line:no-unsafe-any
    origReflect.decorate(decorators, target, propertyKey, description); // tslint:disable-line:no-unsafe-any
  }

  var desciptor = decorators.reverse() // tslint:disable-line:no-any
  .reduce(function (prevValue, currentValue) {
    return currentValue(target, propertyKey, prevValue) || prevValue;
  }, description); // tslint:disable-line

  return desciptor || description;
}

function metadata(metadataKey, metaDataValue) {
  // tslint:disable-line:no-any
  if (_typeof(origReflect) === 'object' && typeof origReflect.metadata === 'function' && origReflect.metadata !== metadata) {
    // tslint:disable-line:no-unsafe-any
    return origReflect.metadata(metadataKey, metaDataValue); // tslint:disable-line:no-unsafe-any
  } else {
    return function (target, property) {
      if (Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2FieldDecorator"])(target) || Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2MethodDecorator"])(target)) {
        if (Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2FieldDecorator"])(target)) {
          var result = {
            descriptor: target.descriptor,
            key: target.key,
            kind: target.kind,
            placement: target.placement,
            finisher: function finisher(finisherTarget) {
              var propMap = getOrCreatePropMap(reflectMap, finisherTarget.prototype);
              getOrCreateMetadataMap(propMap, target.key).set(metadataKey, metaDataValue);
            }
          };
          return result;
        } else if (Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2MethodDecorator"])(target)) {
          var _result = {
            descriptor: target.descriptor,
            key: target.key,
            kind: target.kind,
            placement: target.placement,
            finisher: function finisher(finishTarget) {
              var propMap = getOrCreatePropMap(reflectMap, finishTarget.prototype);
              getOrCreateMetadataMap(propMap, target.key).set(metadataKey, metaDataValue);
            }
          };
          return _result;
        }
      } else {
        if (!property) {
          property = '';
        }

        var propMap = getOrCreatePropMap(reflectMap, target);
        getOrCreateMetadataMap(propMap, property).set(metadataKey, metaDataValue);
      }
    };
  }
}

function getMetadata(metadataKey, target, propertyKey) {
  // tslint:disable-line:no-any
  if (_typeof(origReflect) === 'object' && typeof origReflect.getMetadata === 'function' && origReflect.getMetadata !== getMetadata) {
    // tslint:disable-line:no-unsafe-any
    return origReflect.getMetadata(metadataKey, target, propertyKey); // tslint:disable-line:no-unsafe-any
  } else {
    return getOrCreateMetadataMap(getOrCreatePropMap(reflectMap, target), propertyKey).get(metadataKey);
  }
}

if (!window.Reflect) {
  // tslint:disable-line:no-any
  window.Reflect = {
    decorate: decorate,
    getMetadata: getMetadata,
    metadata: metadata
  }; // tslint:disable-line:no-any

  window.ReflectPoorlyFill = {
    decorate: decorate,
    getMetadata: getMetadata,
    metadata: metadata
  }; // tslint:disable-line:no-any
} else {
  if (!window.Reflect.decorate) {
    // tslint:disable-line
    window.Reflect.decorate = decorate; // tslint:disable-line
  }

  if (!window.Reflect.getMetadata) {
    // tslint:disable-line
    window.Reflect.getMetadata = getMetadata; // tslint:disable-line
  }

  if (!window.Reflect.metadata) {
    // tslint:disable-line
    window.Reflect.metadata = metadata; // tslint:disable-line
  }

  window.ReflectPoorlyFill = {
    decorate: decorate,
    getMetadata: getMetadata,
    metadata: metadata
  }; // tslint:disable-line
}

/***/ }),

/***/ "../ce-decorators/lib/renderer/lightDOMRenderer.js":
/*!*********************************************************!*\
  !*** ../ce-decorators/lib/renderer/lightDOMRenderer.js ***!
  \*********************************************************/
/*! exports provided: renderToLightDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToLightDOM", function() { return renderToLightDOM; });
/* harmony import */ var _componentproperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../componentproperties */ "../ce-decorators/lib/componentproperties.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../ce-decorators/lib/utils.js");
/* harmony import */ var _lit_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lit-html */ "../ce-decorators/lib/lit-html.js");
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */



/**
 * Renders the subtree to a lightdom element
 * @param this 
 * @param elementToRender 
 */

function renderToLightDOM(elementToRender) {
  if (this._templateCache === null) {
    var _getComponentProperti = Object(_componentproperties__WEBPACK_IMPORTED_MODULE_0__["getComponentProperties"])(this.constructor),
        cssStyles = _getComponentProperti.cssStyles,
        tag = _getComponentProperti.tag,
        shadyCSSStyleSheetAdopted = _getComponentProperti.shadyCSSStyleSheetAdopted,
        templateCache = _getComponentProperti.templateCache;

    if (!shadyCSSStyleSheetAdopted) {
      var styleSheet = document.createElement('style');
      styleSheet.setAttribute('scope', tag);
      var styleString = cssStyles.map(function (value) {
        return !_utils__WEBPACK_IMPORTED_MODULE_1__["supportsAdoptingStyleSheets"] ? value.cssText : Array.from(value.rules).reduce(function (prev, current) {
          return prev + current.cssText;
        }, '');
      }).reduce(function (prevValue, currentValue) {
        return prevValue + currentValue;
      });
      styleSheet.textContent = styleString.replace(/(};?|,)\s*((\.?|#?)[a-z\-A-Z]+)/g, function (_token) {
        return "".concat(arguments.length <= 1 ? undefined : arguments[1], " :host ").concat(arguments.length <= 2 ? undefined : arguments[2]);
      }).replace(/((:host\(([^\(]*)\))|(:host))/g, function (_token) {
        return "".concat(tag).concat((arguments.length <= 3 ? undefined : arguments[3]) ? arguments.length <= 3 ? undefined : arguments[3] : '');
      });
      document.querySelector('head').appendChild(styleSheet);
      Object(_componentproperties__WEBPACK_IMPORTED_MODULE_0__["getComponentProperties"])(this.constructor).shadyCSSStyleSheetAdopted = true;
    }

    this._templateCache = templateCache || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["makeTemplateString"])(['', ''], ['', '']);
    Object(_componentproperties__WEBPACK_IMPORTED_MODULE_0__["getComponentProperties"])(this.constructor).templateCache = this._templateCache;
  }

  Object(_lit_html__WEBPACK_IMPORTED_MODULE_2__["render"])(this.render(), elementToRender, {
    eventContext: this
  });
}

/***/ }),

/***/ "../ce-decorators/lib/renderer/pipeRenderer.js":
/*!*****************************************************!*\
  !*** ../ce-decorators/lib/renderer/pipeRenderer.js ***!
  \*****************************************************/
/*! exports provided: removeComponentFromRenderPipeline, addComponentToRenderPipeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeComponentFromRenderPipeline", function() { return removeComponentFromRenderPipeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComponentToRenderPipeline", function() { return addComponentToRenderPipeline; });
/* harmony import */ var _renderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderComponent */ "../ce-decorators/lib/renderer/renderComponent.js");
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

var componentsToRender = [];
var currentAnimationFrame = null;
var frameBudget = 1000 / 60;
/**
 * remove component from render queue
 * @param component 
 */

function removeComponentFromRenderPipeline(component) {
  componentsToRender.splice(componentsToRender.indexOf(component), 1);
}
/**
 * add ocmponent to render queue
 * @param component 
 */

function addComponentToRenderPipeline(component) {
  if (componentsToRender.indexOf(component) < 0) {
    componentsToRender.push(component);
  }

  scheduleNextRAFRender();
}

function scheduleNextRAFRender() {
  if (currentAnimationFrame === null) {
    currentAnimationFrame = window.requestAnimationFrame(function () {
      var currentFrameBudget = frameBudget;

      do {
        var component = componentsToRender.splice(0, 1)[0];
        if (!component) break;
        var start = performance.now();
        _renderComponent__WEBPACK_IMPORTED_MODULE_0__["renderComponent"].apply(component);
        var renderTime = performance.now() - start;
        currentFrameBudget = currentFrameBudget - renderTime;
      } while (currentFrameBudget > 0);

      currentAnimationFrame = null;
      scheduleNextRAFRender();
    });
  }
}

/***/ }),

/***/ "../ce-decorators/lib/renderer/renderComponent.js":
/*!********************************************************!*\
  !*** ../ce-decorators/lib/renderer/renderComponent.js ***!
  \********************************************************/
/*! exports provided: renderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony import */ var _shadowDOMRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shadowDOMRenderer */ "../ce-decorators/lib/renderer/shadowDOMRenderer.js");
/* harmony import */ var _lightDOMRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightDOMRenderer */ "../ce-decorators/lib/renderer/lightDOMRenderer.js");
/* harmony import */ var _propertystate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../propertystate */ "../ce-decorators/lib/propertystate.js");
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */



/**
 * renders the component
 */

function renderComponent() {
  var _this = this;

  this.componentWillRender();
  this._renderScheduled = false;
  var elementToRender = this.renderToElement();

  if (elementToRender === this.shadowRoot) {
    // render to shadowroot
    _shadowDOMRenderer__WEBPACK_IMPORTED_MODULE_0__["renderToShadowDOM"].apply(this, [elementToRender]);
  } else {
    _lightDOMRenderer__WEBPACK_IMPORTED_MODULE_1__["renderToLightDOM"].apply(this, [elementToRender]);
  }

  this.componentDidRender();

  if (this._firstRender) {
    this.componentFirstRender();
    this._firstRender = false;
  }

  this._propertyState = _propertystate__WEBPACK_IMPORTED_MODULE_2__["PROPERTY_STATE"].UPDATED;

  this._renderCompletedCallbacks.forEach(function (value) {
    return value();
  });

  this._renderCompletedCallbacks = [];

  if (this._layoutRAFReference === null) {
    // queue a promise which resolves after browser layouting
    this._layoutRAFReference = window.requestAnimationFrame(function () {
      Promise.resolve().then(function () {
        _this.componentDidLayout();

        _this._layoutRAFReference = null;
      });
    });
  }
}

/***/ }),

/***/ "../ce-decorators/lib/renderer/shadowDOMRenderer.js":
/*!**********************************************************!*\
  !*** ../ce-decorators/lib/renderer/shadowDOMRenderer.js ***!
  \**********************************************************/
/*! exports provided: renderToShadowDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToShadowDOM", function() { return renderToShadowDOM; });
/* harmony import */ var _componentproperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../componentproperties */ "../ce-decorators/lib/componentproperties.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../ce-decorators/lib/utils.js");
/* harmony import */ var _lit_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lit-html */ "../ce-decorators/lib/lit-html.js");
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */



/**
 * render shadowroot of component
 * @param this 
 * @param elementToRender 
 */

function renderToShadowDOM(elementToRender) {
  if (this._templateCache === null) {
    var _getComponentProperti = Object(_componentproperties__WEBPACK_IMPORTED_MODULE_0__["getComponentProperties"])(this.constructor),
        cssStyles = _getComponentProperti.cssStyles,
        tag = _getComponentProperti.tag,
        shadyCSSStyleSheetAdopted = _getComponentProperti.shadyCSSStyleSheetAdopted,
        templateCache = _getComponentProperti.templateCache;

    if (window.ShadyCSS && !window.ShadyCSS.nativeShadow && window.ShadyCSS.ScopingShim.prepareAdoptedCssText) {
      if (!shadyCSSStyleSheetAdopted) {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(cssStyles.map(function (value) {
          return value.cssText;
        }), tag);
        Object(_componentproperties__WEBPACK_IMPORTED_MODULE_0__["getComponentProperties"])(this.constructor).shadyCSSStyleSheetAdopted = true;
      }

      this._templateCache = templateCache || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["makeTemplateString"])(['', ''], ['', '']);
    } else if (_utils__WEBPACK_IMPORTED_MODULE_1__["supportsAdoptingStyleSheets"]) {
      this.shadowRoot.adoptedStyleSheets = cssStyles;
      this._templateCache = templateCache || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["makeTemplateString"])(['', ''], ['', '']);
    } else {
      var styleString = cssStyles.map(function (value) {
        return value.cssText;
      }).reduce(function (prevValue, currentValue) {
        return prevValue + '\n' + currentValue;
      });
      this._templateCache = templateCache || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["makeTemplateString"])(["<style>".concat(styleString, "</style>"), ''], ["<style>".concat(styleString, "</style>"), '']);
    }

    if (!templateCache) {
      Object(_componentproperties__WEBPACK_IMPORTED_MODULE_0__["getComponentProperties"])(this.constructor).templateCache = this._templateCache;
    }
  }

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["needShadyDOM"])()) {
    Object(_lit_html__WEBPACK_IMPORTED_MODULE_2__["shadyRender"])(Object(_lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(this._templateCache, this.render()), elementToRender, {
      scopeName: Object(_componentproperties__WEBPACK_IMPORTED_MODULE_0__["getComponentProperties"])(this.constructor).tag,
      eventContext: this
    });
  } else {
    Object(_lit_html__WEBPACK_IMPORTED_MODULE_2__["render"])(Object(_lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(this._templateCache, this.render()), elementToRender, {
      eventContext: this
    });
  }
}

/***/ }),

/***/ "../ce-decorators/lib/stage2/component.js":
/*!************************************************!*\
  !*** ../ce-decorators/lib/stage2/component.js ***!
  \************************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _customelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customelement */ "../ce-decorators/lib/customelement.js");
/* harmony import */ var _classproperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classproperties */ "../ce-decorators/lib/classproperties.js");
/* harmony import */ var _componentproperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentproperties */ "../ce-decorators/lib/componentproperties.js");
/* harmony import */ var _classpropertywatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classpropertywatcher */ "../ce-decorators/lib/classpropertywatcher.js");
/* harmony import */ var _classpropertyinterceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classpropertyinterceptors */ "../ce-decorators/lib/classpropertyinterceptors.js");
/* harmony import */ var _classevents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classevents */ "../ce-decorators/lib/classevents.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "../ce-decorators/lib/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */







/**
 * stage-2 implementation of the component decorator
 *
 * @param options ComponentOptions
 */

function Component(options) {
  //tslint:disable-line
  return function (descriptor) {
    return {
      elements: descriptor.elements,
      constructor: undefined,
      kind: 'class',
      finisher: function finisher(target) {
        if (!_customelement__WEBPACK_IMPORTED_MODULE_0__["CustomElement"].isPrototypeOf(target)) {
          throw new Error("".concat(target.name, " must extend CustomElement"));
        }

        var componentExtendedOptions = _objectSpread({}, options, {
          cssStyles: [],
          shadyCSSStyleSheetAdopted: false,
          templateCache: null
        });

        var prototype = Object.getPrototypeOf(target);
        var prototypeClassProperties = Object(_classproperties__WEBPACK_IMPORTED_MODULE_1__["getClassProperties"])(prototype);

        if (prototypeClassProperties) {
          var targetClassProperties = Object(_classproperties__WEBPACK_IMPORTED_MODULE_1__["getClassProperties"])(target);
          prototypeClassProperties.forEach(function (value, key) {
            targetClassProperties.set(key, value);
          });
        }

        var componentStyles = Array.isArray(options.style) ? options.style : [options.style || ''];
        var componentCSSStyles = componentStyles.map(function (value) {
          if (_utils__WEBPACK_IMPORTED_MODULE_6__["supportsAdoptingStyleSheets"]) {
            var css = new CSSStyleSheet();
            css.replaceSync(value);
            return css;
          } else {
            return {
              cssText: value
            };
          }
        });

        if (componentExtendedOptions.inheritStyle) {
          var _componentExtendedOpt, _componentExtendedOpt2;

          var parentStyle = Object(_componentproperties__WEBPACK_IMPORTED_MODULE_2__["getComponentProperties"])(prototype).cssStyles;

          (_componentExtendedOpt = componentExtendedOptions.cssStyles).push.apply(_componentExtendedOpt, _toConsumableArray(parentStyle));

          (_componentExtendedOpt2 = componentExtendedOptions.cssStyles).push.apply(_componentExtendedOpt2, _toConsumableArray(componentCSSStyles));
        } else {
          var _componentExtendedOpt3;

          (_componentExtendedOpt3 = componentExtendedOptions.cssStyles).push.apply(_componentExtendedOpt3, _toConsumableArray(componentCSSStyles));
        }

        var prototypeWatcher = Object(_classpropertywatcher__WEBPACK_IMPORTED_MODULE_3__["getAllClassPropertyWatcher"])(prototype);

        if (prototypeWatcher.size > 0) {
          Array.from(prototypeWatcher.entries()).forEach(function (_ref) {
            var _getClassPropertyWatc;

            var _ref2 = _slicedToArray(_ref, 2),
                property = _ref2[0],
                watcher = _ref2[1];

            (_getClassPropertyWatc = Object(_classpropertywatcher__WEBPACK_IMPORTED_MODULE_3__["getClassPropertyWatcher"])(target, property)).push.apply(_getClassPropertyWatc, _toConsumableArray(watcher));
          });
        }

        var prototypeInterceptor = Object(_classpropertyinterceptors__WEBPACK_IMPORTED_MODULE_4__["getAllClassPropertyInterceptors"])(prototype);

        if (prototypeInterceptor.size > 0) {
          Array.from(prototypeInterceptor.entries()).forEach(function (_ref3) {
            var _getClassPropertyInte;

            var _ref4 = _slicedToArray(_ref3, 2),
                property = _ref4[0],
                interceptor = _ref4[1];

            (_getClassPropertyInte = Object(_classpropertyinterceptors__WEBPACK_IMPORTED_MODULE_4__["getClassPropertyInterceptor"])(target, property)).push.apply(_getClassPropertyInte, _toConsumableArray(interceptor));
          });
        }

        var events = Object(_classevents__WEBPACK_IMPORTED_MODULE_5__["getClassEvents"])(prototype);

        if (events.size > 0) {
          Array.from(events.entries()).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                event = _ref6[0],
                option = _ref6[1];

            Object(_classevents__WEBPACK_IMPORTED_MODULE_5__["getClassEvents"])(target).set(event, option);
          });
        }

        Object(_componentproperties__WEBPACK_IMPORTED_MODULE_2__["setComponentProperties"])(target, componentExtendedOptions);
        window.customElements.define(options.tag, target);
      }
    };
  };
}

/***/ }),

/***/ "../ce-decorators/lib/stage2/deprecated.js":
/*!*************************************************!*\
  !*** ../ce-decorators/lib/stage2/deprecated.js ***!
  \*************************************************/
/*! exports provided: Deprecated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deprecated", function() { return Deprecated; });
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/**
 * deprecated stage-2 decorator
 */
function Deprecated(message) {
  // tslint:disable-line
  return function (descriptor) {
    if (descriptor.kind === 'field') {
      var key = Symbol();
      return {
        extras: [{
          key: key,
          kind: 'field',
          placement: 'own',
          initializer: descriptor.initializer,
          initialize: descriptor.initialize,
          descriptor: {
            configurable: true,
            enumerable: false,
            writable: true
          }
        }],
        key: descriptor.key,
        kind: 'method',
        placement: 'own',
        descriptor: {
          configurable: true,
          enumerable: false,
          get: function get() {
            console.warn("[DEPRECATED] [".concat(this.constructor.name, "] property ").concat(descriptor.key.toString(), " is deprecated: ").concat(message || '')); // tslint:disable-line

            return this[key]; // tslint:disable-line:no-any
          },
          set: function set(value) {
            // tslint:disable-line:no-any
            console.warn("[DEPRECATED] [".concat(this.constructor.name, "] property ").concat(descriptor.key.toString(), " is deprecated: ").concat(message || '')); // tslint:disable-line

            this[key] = value; // tslint:disable-line:no-any
          }
        }
      };
    } else {
      return {
        kind: 'method',
        descriptor: descriptor.descriptor.value ? {
          configurable: true,
          enumerable: false,
          value: function value() {
            // tslint:disable-line:no-any
            console.warn("[DEPRECATED] [".concat(this.constructor.name, "] method ").concat(descriptor.key.toString(), " is deprecated: ").concat(message || '')); // tslint:disable-line

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            descriptor.descriptor.value.apply(this, [].concat(args)); // tslint:disable-line
          }
        } : {
          configurable: true,
          enumerable: false,
          get: function get() {
            console.warn("[DEPRECATED] [".concat(this.constructor.name, "] getter ").concat(descriptor.key.toString(), " is deprecated: ").concat(message || '')); // tslint:disable-line

            return descriptor.descriptor.get.apply(this);
          },
          set: function set(value) {
            // tslint:disable-line:no-any
            console.warn("[DEPRECATED] [".concat(this.constructor.name, "] setter ").concat(descriptor.key.toString(), " is deprecated: ").concat(message || '')); // tslint:disable-line

            descriptor.descriptor.set.apply(this, [value]);
          }
        },
        key: descriptor.key,
        placement: 'own',
        extras: [] // tslint:disable-line

      };
    }
  };
}

/***/ }),

/***/ "../ce-decorators/lib/stage2/event.js":
/*!********************************************!*\
  !*** ../ce-decorators/lib/stage2/event.js ***!
  \********************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var _classevents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classevents */ "../ce-decorators/lib/classevents.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/**
 * stage-2 decorator for events
 * @param options 
 */

function Event(options) {
  // tslint:disable-line
  return function (descriptor) {
    var optionsObject = options;

    if (typeof options === 'undefined') {
      optionsObject = {
        name: descriptor.key.toString()
      };
    } else if (typeof options === 'string') {
      // legacy mode
      optionsObject = {
        name: options
      };
    }

    if (typeof optionsObject.options === 'undefined') {
      optionsObject.options = {
        cancelable: false,
        bubbles: true
      };
    }

    if (descriptor.kind === 'field') {
      return {
        kind: 'method',
        descriptor: {
          configurable: true,
          enumerable: false,
          get: function get() {
            var _this = this;

            // tslint:disable-line:no-any
            return {
              emit: function emit(value) {
                // tslint:disable-line:no-any
                var customEvent = new CustomEvent(optionsObject.name, _objectSpread({}, optionsObject.options, {
                  detail: value
                }));

                _this.dispatchEvent(customEvent);
              }
            };
          }
        },
        key: descriptor.key,
        placement: 'own',
        finisher: function finisher(target) {
          Object(_classevents__WEBPACK_IMPORTED_MODULE_0__["getClassEvents"])(target).set(descriptor.key.toString(), optionsObject);
        }
      };
    } else {
      throw new Error('only fields can be decorated with event');
    }
  };
}

/***/ }),

/***/ "../ce-decorators/lib/stage2/interceptor.js":
/*!**************************************************!*\
  !*** ../ce-decorators/lib/stage2/interceptor.js ***!
  \**************************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _customelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customelement */ "../ce-decorators/lib/customelement.js");
/* harmony import */ var _classpropertyinterceptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classpropertyinterceptors */ "../ce-decorators/lib/classpropertyinterceptors.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */


/**
 * stage-2 decorator for intercept
 * @param propertyKey 
 */

function Interceptor(propertyKey) {
  // tslint:disable-line
  return function (descriptor) {
    return _objectSpread({}, descriptor, {
      finisher: function finisher(target) {
        if (!_customelement__WEBPACK_IMPORTED_MODULE_0__["CustomElement"].isPrototypeOf(target)) {
          throw new Error("".concat(target.name, " the property must be within a class which extends CustomElement"));
        }

        Object(_classpropertyinterceptors__WEBPACK_IMPORTED_MODULE_1__["getClassPropertyInterceptor"])(target, propertyKey).push(descriptor.descriptor.value); // tslint:disable-line:no-unsafe-any
      }
    });
  };
}

/***/ }),

/***/ "../ce-decorators/lib/stage2/prop.js":
/*!*******************************************!*\
  !*** ../ce-decorators/lib/stage2/prop.js ***!
  \*******************************************/
/*! exports provided: State, Prop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return Prop; });
/* harmony import */ var _customelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customelement */ "../ce-decorators/lib/customelement.js");
/* harmony import */ var _classproperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classproperties */ "../ce-decorators/lib/classproperties.js");
/* harmony import */ var _propertystate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../propertystate */ "../ce-decorators/lib/propertystate.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */



/**
 * stage-2 state decorators
 */

function State() {
  // tslint:disable-line
  return Prop({
    reflectAsAttribute: false,
    type: undefined
  });
}
/**
 * stage-2 prop decorator
 * @param _options 
 */

function Prop(_options) {
  // tslint:disable-line
  return function (descriptor) {
    var key = _typeof(descriptor.key) === 'symbol' ? Symbol() : "__".concat(descriptor.key);

    if (descriptor.kind === 'field') {
      return {
        kind: 'method',
        descriptor: {
          configurable: true,
          enumerable: false,
          get: function get() {
            return this[key]; // tslint:disable-line:no-any
          },
          set: function set(value) {
            // tslint:disable-line:no-any
            if (this._propertyState === _propertystate__WEBPACK_IMPORTED_MODULE_2__["PROPERTY_STATE"].UPDATE_PROPERTY) {
              this[key] = value; // tslint:disable-line:no-any
            } else {
              this.constructor._fromProperty(descriptor.key.toString(), this[descriptor.key.toString()], value, this);
            }
          }
        },
        key: descriptor.key,
        placement: 'own',
        extras: [{
          placement: 'own',
          initializer: descriptor.initializer,
          initialize: descriptor.initialize,
          key: key,
          descriptor: {
            enumerable: false,
            configurable: true,
            writable: true
          },
          kind: 'field'
        }],
        finisher: function finisher(target) {
          if (!_customelement__WEBPACK_IMPORTED_MODULE_0__["CustomElement"].isPrototypeOf(target)) {
            throw new Error("".concat(target.name, " the property must be within a class which extends CustomElement"));
          }

          if (!_options) {
            _options = {};
          }

          if (!_options.type) {
            _options.type = Reflect.getMetadata('design:type', target.prototype, descriptor.key.toString()); // tslint:disable-line
          }

          Object(_classproperties__WEBPACK_IMPORTED_MODULE_1__["getClassProperties"])(target).set(descriptor.key, _options);
        }
      };
    } else {
      return {
        kind: 'method',
        descriptor: {
          configurable: true,
          enumerable: false,
          get: function get() {
            return descriptor.descriptor.get.apply(this);
          },
          set: function set(value) {
            // tslint:disable-line:no-any
            if (this._propertyState === _propertystate__WEBPACK_IMPORTED_MODULE_2__["PROPERTY_STATE"].UPDATE_PROPERTY) {
              descriptor.descriptor.set.apply(this, [value]);
            } else {
              this.constructor._fromProperty(descriptor.key.toString(), this[descriptor.key.toString()], value, this);
            }
          }
        },
        key: descriptor.key,
        placement: 'own',
        finisher: function finisher(target) {
          if (!_customelement__WEBPACK_IMPORTED_MODULE_0__["CustomElement"].isPrototypeOf(target)) {
            throw new Error("".concat(target.name, " the property must be within a class which extends CustomElement"));
          }

          if (!_options) {
            _options = {};
          }

          Object(_classproperties__WEBPACK_IMPORTED_MODULE_1__["getClassProperties"])(target).set(descriptor.key, _options);
        }
      };
    }
  };
}

/***/ }),

/***/ "../ce-decorators/lib/stage2/stage2decorators.js":
/*!*******************************************************!*\
  !*** ../ce-decorators/lib/stage2/stage2decorators.js ***!
  \*******************************************************/
/*! exports provided: isStage2ClassDecorator, isStage2FieldDecorator, isStage2MethodDecorator, applyStage2toLegacyClassDecorator, applyStage2ToLegacyFieldDecorator, applyStage2ToLegacyMethodDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStage2ClassDecorator", function() { return isStage2ClassDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStage2FieldDecorator", function() { return isStage2FieldDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStage2MethodDecorator", function() { return isStage2MethodDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStage2toLegacyClassDecorator", function() { return applyStage2toLegacyClassDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStage2ToLegacyFieldDecorator", function() { return applyStage2ToLegacyFieldDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStage2ToLegacyMethodDecorator", function() { return applyStage2ToLegacyMethodDecorator; });
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/**
 * FieldDecoratorDescriptor
 */

/**
 * MethodDecoratorDesciptor
 */

/**
 * ClassDecoratorDescriptor
 */

/**
 * FieldDecoratorResult
 */

/**
 * MethodDecoratorResult
 */

/**
 * ClassDecoratorResult
 */

/**
 * Stage2FieldDecorator
 */

/**
 * Stage2MethodDecorator
 */

/**
 * Stage2ClassDecorator
 */

/**
 * isStage2ClassDecorator
 * @param element 
 */
function isStage2ClassDecorator(element) {
  // tslint:disable-line:no-any
  return element.kind === 'class'; // tslint:disable-line
}
/**
 * isStage2FieldDecorator
 * @param element 
 */

function isStage2FieldDecorator(element) {
  // tslint:disable-line:no-any
  return element.kind === 'field' || element.kind === 'method'; // tslint:disable-line
}
/**
 * isStage2MethodDecorator
 * @param element 
 */

function isStage2MethodDecorator(element) {
  // tslint:disable-line:no-any
  return element.kind === 'method'; // tslint:disable-line
}
/**
 * applyLegacyToStage2ClassDecorator
 */

function applyStage2toLegacyClassDecorator(target, decorator) {
  var classDescriptor = {
    kind: 'class',
    elements: [] // tslint:disable-line:no-any

  };
  var result = decorator(classDescriptor);
  var newConstructor = undefined; // tslint:disable-line

  if (result.finisher) {
    if (result.constructor) {
      newConstructor = result.finisher(result.constructor); // tslint:disable-line:no-any
    } else {
      newConstructor = result.finisher(target); // tslint:disable-line:no-any
    }
  }

  return newConstructor || result.constructor || target; // tslint:disable-line
}
/**
 * applyLegacyToStage2FieldDecorator
 */

function applyStage2ToLegacyFieldDecorator(target, propertyKey, descriptor, decorator) {
  var fieldDecoratorDescriptor = {
    key: propertyKey,
    // tslint:disable-next-line
    initializer: descriptor ? descriptor['initializer'] : undefined,
    // in babel case there is an initializer
    // tslint:disable-next-line
    initialize: descriptor ? descriptor['initializer'] : undefined,
    // in babel case there is an initializer
    kind: descriptor ? descriptor.get || descriptor.set || typeof descriptor.value === 'function' ? 'method' : 'field' : 'field',
    descriptor: descriptor ? descriptor : {
      configurable: true,
      enumerable: false,
      value: null
    },
    placement: 'own'
  };
  var result = decorator(fieldDecoratorDescriptor);

  if (result.extras && result.extras.length > 0) {
    result.extras.forEach(function (value) {
      return Object.defineProperty(target.constructor.prototype, value.key, {
        // tslint:disable-line
        configurable: true,
        enumerable: false,
        value: fieldDecoratorDescriptor.initialize ? fieldDecoratorDescriptor.initialize() : undefined,
        writable: true
      });
    });
  }

  if (result.finisher) {
    result.finisher(target.constructor); // tslint:disable-line
  }

  return result.descriptor;
}
/**
 * applyLegacyToStage2MethodDecorator
 */

function applyStage2ToLegacyMethodDecorator(target, propertyKey, descriptor, // tslint:disable-line:no-any
decorator) {
  // tslint:disable-line:no-any
  var methodDecoratorDescriptor = {
    descriptor: descriptor,
    // tslint:disable-line:no-any
    key: propertyKey,
    kind: 'method',
    placement: 'prototype'
  };
  var result = decorator(methodDecoratorDescriptor);

  if (result.extras && result.extras.length > 0) {
    result.extras.forEach(function (value) {
      return Object.defineProperty(target.constructor.prototype, value.key, value.descriptor);
    }); // tslint:disable-line
  }

  if (result.finisher) {
    result.finisher(target.constructor); // tslint:disable-line:no-any
  }

  return result.descriptor;
}

/***/ }),

/***/ "../ce-decorators/lib/stage2/trace.js":
/*!********************************************!*\
  !*** ../ce-decorators/lib/stage2/trace.js ***!
  \********************************************/
/*! exports provided: Trace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return Trace; });
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/**
 * trace stage-2 decorator
 */
function Trace() {
  // tslint:disable-line
  return function (descriptor) {
    if (descriptor.kind === 'field') {
      var key = Symbol();
      return {
        extras: [{
          key: key,
          kind: 'field',
          placement: 'own',
          initializer: descriptor.initializer,
          initialize: descriptor.initialize,
          descriptor: {
            configurable: true,
            enumerable: false,
            writable: true
          }
        }],
        key: descriptor.key,
        kind: 'method',
        placement: 'own',
        descriptor: {
          configurable: true,
          enumerable: false,
          get: function get() {
            console.log("[LOG] [".concat(this.constructor.name, "] getter called on property ").concat(descriptor.key.toString())); // tslint:disable-line

            return this[key]; // tslint:disable-line:no-any
          },
          set: function set(value) {
            // tslint:disable-line:no-any
            console.log("[LOG] [".concat(this.constructor.name, "] setter called on property ").concat(descriptor.key.toString(), " with value ").concat(value)); // tslint:disable-line

            this[key] = value; // tslint:disable-line:no-any
          }
        }
      };
    } else {
      return {
        kind: 'method',
        descriptor: descriptor.descriptor.value ? {
          configurable: true,
          enumerable: false,
          value: function value() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            // tslint:disable-line:no-any
            console.log("[LOG] [".concat(this.constructor.name, "] method ").concat(descriptor.key.toString(), " calles with args"), [].concat(args)); // tslint:disable-line

            descriptor.descriptor.value.apply(this, [].concat(args)); // tslint:disable-line
          }
        } : {
          configurable: true,
          enumerable: false,
          get: function get() {
            console.log("[LOG] [".concat(this.constructor.name, "] getter called on property ").concat(descriptor.key.toString())); // tslint:disable-line

            return descriptor.descriptor.get.apply(this);
          },
          set: function set(value) {
            // tslint:disable-line:no-any
            console.log("[LOG] [".concat(this.constructor.name, "] setter called on property ").concat(descriptor.key.toString(), " with value ").concat(value)); // tslint:disable-line

            descriptor.descriptor.set.apply(this, [value]);
          }
        },
        key: descriptor.key,
        placement: 'own',
        extras: [] // tslint:disable-line

      };
    }
  };
}

/***/ }),

/***/ "../ce-decorators/lib/stage2/watch.js":
/*!********************************************!*\
  !*** ../ce-decorators/lib/stage2/watch.js ***!
  \********************************************/
/*! exports provided: Watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return Watch; });
/* harmony import */ var _customelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customelement */ "../ce-decorators/lib/customelement.js");
/* harmony import */ var _classpropertywatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classpropertywatcher */ "../ce-decorators/lib/classpropertywatcher.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */


/**
 * stage 2 property watch decorator
 * @param propertyKey 
 */

function Watch(propertyKey) {
  // tslint:disable-line
  return function (descriptor) {
    return _objectSpread({}, descriptor, {
      finisher: function finisher(target) {
        if (!_customelement__WEBPACK_IMPORTED_MODULE_0__["CustomElement"].isPrototypeOf(target)) {
          throw new Error("".concat(target.name, " the property must be within a class which extends CustomElement"));
        }

        Object(_classpropertywatcher__WEBPACK_IMPORTED_MODULE_1__["getClassPropertyWatcher"])(target, propertyKey).push(descriptor.descriptor.value); // tslint:disable-line
      }
    });
  };
}

/***/ }),

/***/ "../ce-decorators/lib/trace.js":
/*!*************************************!*\
  !*** ../ce-decorators/lib/trace.js ***!
  \*************************************/
/*! exports provided: Trace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return Trace; });
/* harmony import */ var _stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage2/stage2decorators */ "../ce-decorators/lib/stage2/stage2decorators.js");
/* harmony import */ var _stage2_trace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage2/trace */ "../ce-decorators/lib/stage2/trace.js");
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */


/**
 * Displays trace messages
 */

function Trace() {
  // tslint:disable-line
  return function (target, propertyKey, descriptor) {
    // tslint:disable-line:no-any
    if (Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2MethodDecorator"])(target) || Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2FieldDecorator"])(target)) {
      return Object(_stage2_trace__WEBPACK_IMPORTED_MODULE_1__["Trace"])()(target); // tslint:disable-line:no-any
    } else {
      return Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["applyStage2ToLegacyFieldDecorator"])(target, propertyKey, descriptor, Object(_stage2_trace__WEBPACK_IMPORTED_MODULE_1__["Trace"])());
    }
  };
}

/***/ }),

/***/ "../ce-decorators/lib/utils.js":
/*!*************************************!*\
  !*** ../ce-decorators/lib/utils.js ***!
  \*************************************/
/*! exports provided: deserializeValue, serializeValue, camelToKebapCase, kebapToCamelCase, makeTemplateString, needShadyDOM, supportsAdoptingStyleSheets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeValue", function() { return deserializeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeValue", function() { return serializeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToKebapCase", function() { return camelToKebapCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebapToCamelCase", function() { return kebapToCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTemplateString", function() { return makeTemplateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needShadyDOM", function() { return needShadyDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return supportsAdoptingStyleSheets; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/**
 * deserializes a string to a typed value
 * @param value value string to be transformed
 * @param type type transformer type for string value
 */
function deserializeValue(value, type) {
  // tslint:disable-line
  if ((value === null || value === undefined) && type !== Boolean) {
    return null;
  } else if (type === Boolean) {
    if (value === 'false') {
      return false;
    } else {
      return value !== null;
    }
  } else if (type === Number) {
    return parseFloat(value);
  } else if (type === String) {
    return value;
  } else if (type === RegExp) {
    var _Array$from = Array.from(/(\/(.*)\/([a-z]*))|(.+)/.exec(value)),
        _Array$from2 = _slicedToArray(_Array$from, 5),
        _2 = _Array$from2[2],
        _3 = _Array$from2[3],
        _4 = _Array$from2[4];

    if (_4) {
      return new RegExp(_4);
    } else if (_2) {
      return new RegExp(_2, _3 || '');
    } else {
      return null;
    }
  } else if (type === Function) {
    var callback = eval('( function() {' + value + '} )'); // tslint:disable-line

    return callback;
  } else if (type instanceof Object) {
    return JSON.parse(value); // tslint:disable-line
  } else {
    return value;
  }
}
/**
 * serializes a value to a string
 * @param value value
 * @param type type
 */

function serializeValue(value, type) {
  // tslint:disable-line
  if (value === null || value === undefined) {
    return null;
  } else if (type === String) {
    return value; // tslint:disable-line
  } else if (type instanceof Object) {
    return JSON.stringify(value);
  } else {
    return "".concat(value);
  }
}
/**
 * transform a string from camel case to lower-case kebap case
 * @param str input string
 */

function camelToKebapCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
/**
 * transform a string from kebap to camel case
 * @param str input string
 */

function kebapToCamelCase(str) {
  return str.toLowerCase().replace(/-([a-zA-Z])/g, function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args[1].toUpperCase();
  });
}
/**
 * create a template string array
 */

function makeTemplateString(template, raw) {
  Object.defineProperty(template, 'raw', {
    value: raw
  });
  return template; // tslint:disable-line:no-any
}
/**
 * helper for shadydom
 */

function needShadyDOM() {
  // tslint:disable-next-line:no-any
  return window.ShadyCSS && !window.ShadyCSS.nativeShadow;
}
/**
 * support for new adopting stylesheet functionality
 */

var supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;

/***/ }),

/***/ "../ce-decorators/lib/watch.js":
/*!*************************************!*\
  !*** ../ce-decorators/lib/watch.js ***!
  \*************************************/
/*! exports provided: Watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return Watch; });
/* harmony import */ var _stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage2/stage2decorators */ "../ce-decorators/lib/stage2/stage2decorators.js");
/* harmony import */ var _stage2_watch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage2/watch */ "../ce-decorators/lib/stage2/watch.js");
/**
 * Copyright (c) 2018 Mathis Zeiher
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */


/**
 * Registers a watcher for property changes
 *
 * @param property property to watch
 */

function Watch(property) {
  // tslint:disable-line
  return function (target, propertyKey, descriptor) {
    // tslint:disable-line:no-any
    if (Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["isStage2MethodDecorator"])(target)) {
      return Object(_stage2_watch__WEBPACK_IMPORTED_MODULE_1__["Watch"])(property)(target); // tslint:disable-line:no-any
    } else {
      return Object(_stage2_stage2decorators__WEBPACK_IMPORTED_MODULE_0__["applyStage2ToLegacyMethodDecorator"])(target, propertyKey, descriptor, Object(_stage2_watch__WEBPACK_IMPORTED_MODULE_1__["Watch"])(property));
    }
  };
}

/***/ }),

/***/ "../ce-decorators/node_modules/@babel/runtime/regenerator/index.js":
/*!*************************************************************************!*\
  !*** ../ce-decorators/node_modules/@babel/runtime/regenerator/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../ce-decorators/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/directives/async-append.js":
/*!*************************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/directives/async-append.js ***!
  \*************************************************************************/
/*! exports provided: asyncAppend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncAppend", function() { return asyncAppend; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../ce-decorators/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "../ce-decorators/node_modules/lit-html/lit-html.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var __asyncValues = undefined && undefined.__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};


/**
 * A directive that renders the items of an async iterable[1], appending new
 * values after previous values, similar to the built-in support for iterables.
 *
 * Async iterables are objects with a [Symbol.asyncIterator] method, which
 * returns an iterator who's `next()` method returns a Promise. When a new
 * value is available, the Promise resolves and the value is appended to the
 * Part controlled by the directive. If another value other than this
 * directive has been set on the Part, the iterable will no longer be listened
 * to and new values won't be written to the Part.
 *
 * [1]: https://github.com/tc39/proposal-async-iteration
 *
 * @param value An async iterable
 * @param mapper An optional function that maps from (value, index) to another
 *     value. Useful for generating templates for each item in the iterable.
 */

var asyncAppend = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])(function (value, mapper) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(part) {
        var e_1, _a, itemPart, i, value_1, value_1_1, v, itemStartNode;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"]) {
                  _context.next = 2;
                  break;
                }

                throw new Error('asyncAppend can only be used in text bindings');

              case 2:
                if (!(value === part.value)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                part.value = value; // We keep track of item Parts across iterations, so that we can
                // share marker nodes between consecutive Parts.

                i = 0;
                _context.prev = 6;
                value_1 = __asyncValues(value);

              case 8:
                _context.next = 10;
                return value_1.next();

              case 10:
                value_1_1 = _context.sent;

                if (value_1_1.done) {
                  _context.next = 26;
                  break;
                }

                v = value_1_1.value; // Check to make sure that value is the still the current value of
                // the part, and if not bail because a new value owns this part

                if (!(part.value !== value)) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("break", 26);

              case 15:
                // When we get the first value, clear the part. This lets the
                // previous value display until we can replace it.
                if (i === 0) {
                  part.clear();
                } // As a convenience, because functional-programming-style
                // transforms of iterables and async iterables requires a library,
                // we accept a mapper function. This is especially convenient for
                // rendering a template for each item.


                if (mapper !== undefined) {
                  // This is safe because T must otherwise be treated as unknown by
                  // the rest of the system.
                  v = mapper(v, i);
                } // Like with sync iterables, each item induces a Part, so we need
                // to keep track of start and end nodes for the Part.
                // Note: Because these Parts are not updatable like with a sync
                // iterable (if we render a new value, we always clear), it may
                // be possible to optimize away the Parts and just re-use the
                // Part.setValue() logic.


                itemStartNode = part.startNode; // Check to see if we have a previous item and Part

                if (itemPart !== undefined) {
                  // Create a new node to separate the previous and next Parts
                  itemStartNode = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["createMarker"])(); // itemPart is currently the Part for the previous item. Set
                  // it's endNode to the node we'll use for the next Part's
                  // startNode.

                  itemPart.endNode = itemStartNode;
                  part.endNode.parentNode.insertBefore(itemStartNode, part.endNode);
                }

                itemPart = new _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](part.options);
                itemPart.insertAfterNode(itemStartNode);
                itemPart.setValue(v);
                itemPart.commit();
                i++;

              case 24:
                _context.next = 8;
                break;

              case 26:
                _context.next = 31;
                break;

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](6);
                e_1 = {
                  error: _context.t0
                };

              case 31:
                _context.prev = 31;
                _context.prev = 32;

                if (!(value_1_1 && !value_1_1.done && (_a = value_1.return))) {
                  _context.next = 36;
                  break;
                }

                _context.next = 36;
                return _a.call(value_1);

              case 36:
                _context.prev = 36;

                if (!e_1) {
                  _context.next = 39;
                  break;
                }

                throw e_1.error;

              case 39:
                return _context.finish(36);

              case 40:
                return _context.finish(31);

              case 41:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 28, 31, 41], [32,, 36, 40]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
});

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/directives/async-replace.js":
/*!**************************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/directives/async-replace.js ***!
  \**************************************************************************/
/*! exports provided: asyncReplace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncReplace", function() { return asyncReplace; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../ce-decorators/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "../ce-decorators/node_modules/lit-html/lit-html.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var __asyncValues = undefined && undefined.__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};


/**
 * A directive that renders the items of an async iterable[1], replacing
 * previous values with new values, so that only one value is ever rendered
 * at a time.
 *
 * Async iterables are objects with a [Symbol.asyncIterator] method, which
 * returns an iterator who's `next()` method returns a Promise. When a new
 * value is available, the Promise resolves and the value is rendered to the
 * Part controlled by the directive. If another value other than this
 * directive has been set on the Part, the iterable will no longer be listened
 * to and new values won't be written to the Part.
 *
 * [1]: https://github.com/tc39/proposal-async-iteration
 *
 * @param value An async iterable
 * @param mapper An optional function that maps from (value, index) to another
 *     value. Useful for generating templates for each item in the iterable.
 */

var asyncReplace = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])(function (value, mapper) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(part) {
        var e_1, _a, itemPart, i, value_1, value_1_1, v;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"]) {
                  _context.next = 2;
                  break;
                }

                throw new Error('asyncReplace can only be used in text bindings');

              case 2:
                if (!(value === part.value)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                // We nest a new part to keep track of previous item values separately
                // of the iterable as a value itself.
                itemPart = new _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](part.options);
                part.value = value;
                i = 0;
                _context.prev = 7;
                value_1 = __asyncValues(value);

              case 9:
                _context.next = 11;
                return value_1.next();

              case 11:
                value_1_1 = _context.sent;

                if (value_1_1.done) {
                  _context.next = 23;
                  break;
                }

                v = value_1_1.value; // Check to make sure that value is the still the current value of
                // the part, and if not bail because a new value owns this part

                if (!(part.value !== value)) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("break", 23);

              case 16:
                // When we get the first value, clear the part. This let's the
                // previous value display until we can replace it.
                if (i === 0) {
                  part.clear();
                  itemPart.appendIntoPart(part);
                } // As a convenience, because functional-programming-style
                // transforms of iterables and async iterables requires a library,
                // we accept a mapper function. This is especially convenient for
                // rendering a template for each item.


                if (mapper !== undefined) {
                  // This is safe because T must otherwise be treated as unknown by
                  // the rest of the system.
                  v = mapper(v, i);
                }

                itemPart.setValue(v);
                itemPart.commit();
                i++;

              case 21:
                _context.next = 9;
                break;

              case 23:
                _context.next = 28;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](7);
                e_1 = {
                  error: _context.t0
                };

              case 28:
                _context.prev = 28;
                _context.prev = 29;

                if (!(value_1_1 && !value_1_1.done && (_a = value_1.return))) {
                  _context.next = 33;
                  break;
                }

                _context.next = 33;
                return _a.call(value_1);

              case 33:
                _context.prev = 33;

                if (!e_1) {
                  _context.next = 36;
                  break;
                }

                throw e_1.error;

              case 36:
                return _context.finish(33);

              case 37:
                return _context.finish(28);

              case 38:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[7, 25, 28, 38], [29,, 33, 37]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
});

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/directives/cache.js":
/*!******************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/directives/cache.js ***!
  \******************************************************************/
/*! exports provided: cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/template-instance.js */ "../ce-decorators/node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "../ce-decorators/node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


var templateCaches = new WeakMap();
/**
 * Enables fast switching between multiple templates by caching the DOM nodes
 * and TemplateInstances produced by the templates.
 *
 * Example:
 *
 * ```
 * let checked = false;
 *
 * html`
 *   ${cache(checked ? html`input is checked` : html`input is not checked`)}
 * `
 * ```
 */

var cache = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])(function (value) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"])) {
      throw new Error('cache can only be used in text bindings');
    }

    var templateCache = templateCaches.get(part);

    if (templateCache === undefined) {
      templateCache = new WeakMap();
      templateCaches.set(part, templateCache);
    }

    var previousValue = part.value; // First, can we update the current TemplateInstance, or do we need to move
    // the current nodes into the cache?

    if (previousValue instanceof _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_0__["TemplateInstance"]) {
      if (value instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"] && previousValue.template === part.options.templateFactory(value)) {
        // Same Template, just trigger an update of the TemplateInstance
        part.setValue(value);
        return;
      } else {
        // Not the same Template, move the nodes from the DOM into the cache.
        var cachedTemplate = templateCache.get(previousValue.template);

        if (cachedTemplate === undefined) {
          cachedTemplate = {
            instance: previousValue,
            nodes: document.createDocumentFragment()
          };
          templateCache.set(previousValue.template, cachedTemplate);
        }

        Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["reparentNodes"])(cachedTemplate.nodes, part.startNode.nextSibling, part.endNode);
      }
    } // Next, can we reuse nodes from the cache?


    if (value instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]) {
      var template = part.options.templateFactory(value);

      var _cachedTemplate = templateCache.get(template);

      if (_cachedTemplate !== undefined) {
        // Move nodes out of cache
        part.setValue(_cachedTemplate.nodes);
        part.commit(); // Set the Part value to the TemplateInstance so it'll update it.

        part.value = _cachedTemplate.instance;
      }
    }

    part.setValue(value);
  };
});

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/directives/class-map.js":
/*!**********************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/directives/class-map.js ***!
  \**********************************************************************/
/*! exports provided: classMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return classMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "../ce-decorators/node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
 // On IE11, classList.toggle doesn't accept a second argument.
// Since this is so minor, we just polyfill it.

if (window.navigator.userAgent.match('Trident')) {
  DOMTokenList.prototype.toggle = function (token, force) {
    if (force === undefined || force) {
      this.add(token);
    } else {
      this.remove(token);
    }

    return force === undefined ? true : force;
  };
}
/**
 * Stores the ClassInfo object applied to a given AttributePart.
 * Used to unset existing values when a new ClassInfo object is applied.
 */


var classMapCache = new WeakMap();
/**
 * Stores AttributeParts that have had static classes applied (e.g. `foo` in
 * class="foo ${classMap()}"). Static classes are applied only the first time
 * the directive is run on a part.
 */
// Note, could be a WeakSet, but prefer not requiring this polyfill.

var classMapStatics = new WeakMap();
/**
 * A directive that applies CSS classes. This must be used in the `class`
 * attribute and must be the only part used in the attribute. It takes each
 * property in the `classInfo` argument and adds the property name to the
 * element's `classList` if the property value is truthy; if the property value
 * is falsey, the property name is removed from the element's `classList`. For
 * example
 * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
 * @param classInfo {ClassInfo}
 */

var classMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (classInfo) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'class' || part.committer.parts.length > 1) {
      throw new Error('The `classMap` directive must be used in the `class` attribute ' + 'and must be the only part in the attribute.');
    } // handle static classes


    if (!classMapStatics.has(part)) {
      part.committer.element.className = part.committer.strings.join(' ');
      classMapStatics.set(part, true);
    } // remove old classes that no longer apply


    var oldInfo = classMapCache.get(part);

    for (var name in oldInfo) {
      if (!(name in classInfo)) {
        part.committer.element.classList.remove(name);
      }
    } // add new classes


    for (var _name in classInfo) {
      if (!oldInfo || oldInfo[_name] !== classInfo[_name]) {
        // We explicitly want a loose truthy check here because
        // it seems more convenient that '' and 0 are skipped.
        part.committer.element.classList.toggle(_name, Boolean(classInfo[_name]));
      }
    }

    classMapCache.set(part, classInfo);
  };
});

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/directives/guard.js":
/*!******************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/directives/guard.js ***!
  \******************************************************************/
/*! exports provided: guard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guard", function() { return guard; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "../ce-decorators/node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

var previousValues = new WeakMap();
/**
 * Prevents re-render of a template function until a single value or an array of
 * values changes.
 *
 * Example:
 *
 * ```js
 * html`
 *   <div>
 *     ${guard([user.id, company.id], () => html`...`)}
 *   </div>
 * ```
 *
 * In this case, the template only renders if either `user.id` or `company.id`
 * changes.
 *
 * guard() is useful with immutable data patterns, by preventing expensive work
 * until data updates.
 *
 * Example:
 *
 * ```js
 * html`
 *   <div>
 *     ${guard([immutableItems], () => immutableItems.map(i => html`${i}`))}
 *   </div>
 * ```
 *
 * In this case, items are mapped over only when the array reference changes.
 *
 * @param value the value to check before re-rendering
 * @param f the template function
 */

var guard = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (value, f) {
  return function (part) {
    var previousValue = previousValues.get(part);

    if (Array.isArray(value)) {
      // Dirty-check arrays by item
      if (Array.isArray(previousValue) && previousValue.length === value.length && value.every(function (v, i) {
        return v === previousValue[i];
      })) {
        return;
      }
    } else if (previousValue === value && (value !== undefined || previousValues.has(part))) {
      // Dirty-check non-arrays by identity
      return;
    }

    part.setValue(f()); // Copy the value if it's an array so that if it's mutated we don't forget
    // what the previous values were.

    previousValues.set(part, Array.isArray(value) ? Array.from(value) : value);
  };
});

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/directives/if-defined.js":
/*!***********************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/directives/if-defined.js ***!
  \***********************************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "../ce-decorators/node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */

var ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (value) {
  return function (part) {
    if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
      if (value !== part.value) {
        var name = part.committer.name;
        part.committer.element.removeAttribute(name);
      }
    } else {
      part.setValue(value);
    }
  };
});

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/directives/repeat.js":
/*!*******************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/directives/repeat.js ***!
  \*******************************************************************/
/*! exports provided: repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "../ce-decorators/node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
 // Helper functions for manipulating parts
// TODO(kschaaf): Refactor into Part API?

var createAndInsertPart = function createAndInsertPart(containerPart, beforePart) {
  var container = containerPart.startNode.parentNode;
  var beforeNode = beforePart === undefined ? containerPart.endNode : beforePart.startNode;
  var startNode = container.insertBefore(Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["createMarker"])(), beforeNode);
  container.insertBefore(Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["createMarker"])(), beforeNode);
  var newPart = new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](containerPart.options);
  newPart.insertAfterNode(startNode);
  return newPart;
};

var updatePart = function updatePart(part, value) {
  part.setValue(value);
  part.commit();
  return part;
};

var insertPartBefore = function insertPartBefore(containerPart, part, ref) {
  var container = containerPart.startNode.parentNode;
  var beforeNode = ref ? ref.startNode : containerPart.endNode;
  var endNode = part.endNode.nextSibling;

  if (endNode !== beforeNode) {
    Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(container, part.startNode, endNode, beforeNode);
  }
};

var removePart = function removePart(part) {
  Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(part.startNode.parentNode, part.startNode, part.endNode.nextSibling);
}; // Helper for generating a map of array item to its index over a subset
// of an array (used to lazily generate `newKeyToIndexMap` and
// `oldKeyToIndexMap`)


var generateMap = function generateMap(list, start, end) {
  var map = new Map();

  for (var i = start; i <= end; i++) {
    map.set(list[i], i);
  }

  return map;
}; // Stores previous ordered list of parts and map of key to index


var partListCache = new WeakMap();
var keyListCache = new WeakMap();
/**
 * A directive that repeats a series of values (usually `TemplateResults`)
 * generated from an iterable, and updates those items efficiently when the
 * iterable changes based on user-provided `keys` associated with each item.
 *
 * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
 * meaning previous DOM for a given key is moved into the new position if
 * needed, and DOM will never be reused with values for different keys (new DOM
 * will always be created for new keys). This is generally the most efficient
 * way to use `repeat` since it performs minimum unnecessary work for insertions
 * amd removals.
 *
 * IMPORTANT: If providing a `keyFn`, keys *must* be unique for all items in a
 * given call to `repeat`. The behavior when two or more items have the same key
 * is undefined.
 *
 * If no `keyFn` is provided, this directive will perform similar to mapping
 * items to values, and DOM will be reused against potentially different items.
 */

var repeat = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (items, keyFnOrTemplate, template) {
  var keyFn;

  if (template === undefined) {
    template = keyFnOrTemplate;
  } else if (keyFnOrTemplate !== undefined) {
    keyFn = keyFnOrTemplate;
  }

  return function (containerPart) {
    if (!(containerPart instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"])) {
      throw new Error('repeat can only be used in text bindings');
    } // Old part & key lists are retrieved from the last update
    // (associated with the part for this instance of the directive)


    var oldParts = partListCache.get(containerPart) || [];
    var oldKeys = keyListCache.get(containerPart) || []; // New part list will be built up as we go (either reused from
    // old parts or created for new keys in this update). This is
    // saved in the above cache at the end of the update.

    var newParts = []; // New value list is eagerly generated from items along with a
    // parallel array indicating its key.

    var newValues = [];
    var newKeys = [];
    var index = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        newKeys[index] = keyFn ? keyFn(item, index) : index;
        newValues[index] = template(item, index);
        index++;
      } // Maps from key to index for current and previous update; these
      // are generated lazily only when needed as a performance
      // optimization, since they are only required for multiple
      // non-contiguous changes in the list, which are less common.

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var newKeyToIndexMap;
    var oldKeyToIndexMap; // Head and tail pointers to old parts and new values

    var oldHead = 0;
    var oldTail = oldParts.length - 1;
    var newHead = 0;
    var newTail = newValues.length - 1; // Overview of O(n) reconciliation algorithm (general approach
    // based on ideas found in ivi, vue, snabbdom, etc.):
    //
    // * We start with the list of old parts and new values (and
    // arrays of
    //   their respective keys), head/tail pointers into each, and
    //   we build up the new list of parts by updating (and when
    //   needed, moving) old parts or creating new ones. The initial
    //   scenario might look like this (for brevity of the diagrams,
    //   the numbers in the array reflect keys associated with the
    //   old parts or new values, although keys and parts/values are
    //   actually stored in parallel arrays indexed using the same
    //   head/tail pointers):
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [ ,  ,  ,  ,  ,  ,  ]
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
    //   item order
    //      newHead ^                 ^ newTail
    //
    // * Iterate old & new lists from both sides, updating,
    // swapping, or
    //   removing parts at the head/tail locations until neither
    //   head nor tail can move.
    //
    // * Example below: keys at head pointers match, so update old
    // part 0 in-
    //   place (no need to move it) and record part 0 in the
    //   `newParts` list. The last thing we do is advance the
    //   `oldHead` and `newHead` pointers (will be reflected in the
    //   next diagram).
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
    //   and newKeys:  [0, 2, 1, 4, 3, 7, 6]    advance both oldHead
    //   & newHead
    //      newHead ^                 ^ newTail
    //
    // * Example below: head pointers don't match, but tail pointers
    // do, so
    //   update part 6 in place (no need to move it), and record
    //   part 6 in the `newParts` list. Last, advance the `oldTail`
    //   and `oldHead` pointers.
    //
    //         oldHead v              v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
    //   and newKeys:  [0, 2, 1, 4, 3, 7, 6]    advance both oldTail
    //   & newTail
    //         newHead ^              ^ newTail
    //
    // * If neither head nor tail match; next check if one of the
    // old head/tail
    //   items was removed. We first need to generate the reverse
    //   map of new keys to index (`newKeyToIndexMap`), which is
    //   done once lazily as a performance optimization, since we
    //   only hit this case if multiple non-contiguous changes were
    //   made. Note that for contiguous removal anywhere in the
    //   list, the head and tails would advance from either end and
    //   pass each other before we get to this case and removals
    //   would be handled in the final while loop without needing to
    //   generate the map.
    //
    // * Example below: The key at `oldTail` was removed (no longer
    // in the
    //   `newKeyToIndexMap`), so remove that part from the DOM and
    //   advance just the `oldTail` pointer.
    //
    //         oldHead v           v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map; remove
    //   5 and newKeys:  [0, 2, 1, 4, 3, 7, 6]    advance oldTail
    //         newHead ^           ^ newTail
    //
    // * Once head and tail cannot move, any mismatches are due to
    // either new or
    //   moved items; if a new key is in the previous "old key to
    //   old index" map, move the old part to the new location,
    //   otherwise create and insert a new part. Note that when
    //   moving an old part we null its position in the oldParts
    //   array if it lies between the head and tail so we know to
    //   skip it when the pointers get there.
    //
    // * Example below: neither head nor tail match, and neither
    // were removed;
    //   so find the `newHead` key in the `oldKeyToIndexMap`, and
    //   move that old part's DOM into the next head position
    //   (before `oldParts[oldHead]`). Last, null the part in the
    //   `oldPart` array since it was somewhere in the remaining
    //   oldParts still to be scanned (between the head and tail
    //   pointers) so that we know to skip that old part on future
    //   iterations.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck; update & move 2
    //   into place newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance
    //   newHead
    //         newHead ^           ^ newTail
    //
    // * Note that for moves/insertions like the one above, a part
    // inserted at
    //   the head pointer is inserted before the current
    //   `oldParts[oldHead]`, and a part inserted at the tail
    //   pointer is inserted before `newParts[newTail+1]`. The
    //   seeming asymmetry lies in the fact that new parts are moved
    //   into place outside in, so to the right of the head pointer
    //   are old parts, and to the right of the tail pointer are new
    //   parts.
    //
    // * We always restart back from the top of the algorithm,
    // allowing matching
    //   and simple updates in place to continue...
    //
    // * Example below: the head pointers once again match, so
    // simply update
    //   part 1 and record it in the `newParts` array.  Last,
    //   advance both head pointers.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched; update 1
    //   and newKeys:  [0, 2, 1, 4, 3, 7, 6]    advance both oldHead
    //   & newHead
    //            newHead ^        ^ newTail
    //
    // * As mentioned above, items that were moved as a result of
    // being stuck
    //   (the final else clause in the code below) are marked with
    //   null, so we always advance old pointers over these so we're
    //   comparing the next actual old value on either end.
    //
    // * Example below: `oldHead` is null (already placed in
    // newParts), so
    //   advance `oldHead`.
    //
    //            oldHead v     v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6] // old head already used;
    //   advance newParts: [0, 2, 1,  ,  ,  , 6] // oldHead newKeys:
    //   [0, 2, 1, 4, 3, 7, 6]
    //               newHead ^     ^ newTail
    //
    // * Note it's not critical to mark old parts as null when they
    // are moved
    //   from head to tail or tail to head, since they will be
    //   outside the pointer range and never visited again.
    //
    // * Example below: Here the old tail key matches the new head
    // key, so
    //   the part at the `oldTail` position and move its DOM to the
    //   new head position (before `oldParts[oldHead]`). Last,
    //   advance `oldTail` and `newHead` pointers.
    //
    //               oldHead v  v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
    //   head: update newKeys:  [0, 2, 1, 4, 3, 7, 6]   & move 4,
    //   advance oldTail & newHead
    //               newHead ^     ^ newTail
    //
    // * Example below: Old and new head keys match, so update the
    // old head
    //   part in place, and advance the `oldHead` and `newHead`
    //   pointers.
    //
    //               oldHead v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
    //   and advance newKeys:  [0, 2, 1, 4, 3, 7, 6]    oldHead &
    //   newHead
    //                  newHead ^  ^ newTail
    //
    // * Once the new or old pointers move past each other then all
    // we have
    //   left is additions (if old list exhausted) or removals (if
    //   new list exhausted). Those are handled in the final while
    //   loops at the end.
    //
    // * Example below: `oldHead` exceeded `oldTail`, so we're done
    // with the
    //   main loop.  Create the remaining part and insert it at the
    //   new head position, and the update is complete.
    //
    //                   (oldHead > oldTail)
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //                     newHead ^ newTail
    //
    // * Note that the order of the if/else clauses is not important
    // to the
    //   algorithm, as long as the null checks come first (to ensure
    //   we're always working on valid old parts) and that the final
    //   else clause comes last (since that's where the expensive
    //   moves occur). The order of remaining clauses is is just a
    //   simple guess at which cases will be most common.
    //
    // * TODO(kschaaf) Note, we could calculate the longest
    // increasing
    //   subsequence (LIS) of old items in new position, and only
    //   move those not in the LIS set. However that costs O(nlogn)
    //   time and adds a bit more code, and only helps make rare
    //   types of mutations require fewer moves. The above handles
    //   removes, adds, reversal, swaps, and single moves of
    //   contiguous items in linear time, in the minimum number of
    //   moves. As the number of multiple moves where LIS might help
    //   approaches a random shuffle, the LIS optimization becomes
    //   less helpful, so it seems not worth the code at this point.
    //   Could reconsider if a compelling case arises.

    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldParts[oldHead] === null) {
        // `null` means old part at head has already been used
        // below; skip
        oldHead++;
      } else if (oldParts[oldTail] === null) {
        // `null` means old part at tail has already been used
        // below; skip
        oldTail--;
      } else if (oldKeys[oldHead] === newKeys[newHead]) {
        // Old head matches new head; update in place
        newParts[newHead] = updatePart(oldParts[oldHead], newValues[newHead]);
        oldHead++;
        newHead++;
      } else if (oldKeys[oldTail] === newKeys[newTail]) {
        // Old tail matches new tail; update in place
        newParts[newTail] = updatePart(oldParts[oldTail], newValues[newTail]);
        oldTail--;
        newTail--;
      } else if (oldKeys[oldHead] === newKeys[newTail]) {
        // Old head matches new tail; update and move to new tail
        newParts[newTail] = updatePart(oldParts[oldHead], newValues[newTail]);
        insertPartBefore(containerPart, oldParts[oldHead], newParts[newTail + 1]);
        oldHead++;
        newTail--;
      } else if (oldKeys[oldTail] === newKeys[newHead]) {
        // Old tail matches new head; update and move to new head
        newParts[newHead] = updatePart(oldParts[oldTail], newValues[newHead]);
        insertPartBefore(containerPart, oldParts[oldTail], oldParts[oldHead]);
        oldTail--;
        newHead++;
      } else {
        if (newKeyToIndexMap === undefined) {
          // Lazily generate key-to-index maps, used for removals &
          // moves below
          newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
          oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
        }

        if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
          // Old head is no longer in new list; remove
          removePart(oldParts[oldHead]);
          oldHead++;
        } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
          // Old tail is no longer in new list; remove
          removePart(oldParts[oldTail]);
          oldTail--;
        } else {
          // Any mismatches at this point are due to additions or
          // moves; see if we have an old part we can reuse and move
          // into place
          var oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
          var oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;

          if (oldPart === null) {
            // No old part for this value; create a new one and
            // insert it
            var newPart = createAndInsertPart(containerPart, oldParts[oldHead]);
            updatePart(newPart, newValues[newHead]);
            newParts[newHead] = newPart;
          } else {
            // Reuse old part
            newParts[newHead] = updatePart(oldPart, newValues[newHead]);
            insertPartBefore(containerPart, oldPart, oldParts[oldHead]); // This marks the old part as having been used, so that
            // it will be skipped in the first two checks above

            oldParts[oldIndex] = null;
          }

          newHead++;
        }
      }
    } // Add parts for any remaining new values


    while (newHead <= newTail) {
      // For all remaining additions, we insert before last new
      // tail, since old pointers are no longer valid
      var _newPart = createAndInsertPart(containerPart, newParts[newTail + 1]);

      updatePart(_newPart, newValues[newHead]);
      newParts[newHead++] = _newPart;
    } // Remove any remaining unused old parts


    while (oldHead <= oldTail) {
      var _oldPart = oldParts[oldHead++];

      if (_oldPart !== null) {
        removePart(_oldPart);
      }
    } // Save order of new parts for next round


    partListCache.set(containerPart, newParts);
    keyListCache.set(containerPart, newKeys);
  };
});

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/directives/style-map.js":
/*!**********************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/directives/style-map.js ***!
  \**********************************************************************/
/*! exports provided: styleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleMap", function() { return styleMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "../ce-decorators/node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Stores the StyleInfo object applied to a given AttributePart.
 * Used to unset existing values when a new StyleInfo object is applied.
 */

var styleMapCache = new WeakMap();
/**
 * Stores AttributeParts that have had static styles applied (e.g. `height: 0;`
 * in style="height: 0; ${styleMap()}"). Static styles are applied only the
 * first time the directive is run on a part.
 */
// Note, could be a WeakSet, but prefer not requiring this polyfill.

var styleMapStatics = new WeakMap();
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS propertes. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo {StyleInfo}
 */

var styleMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (styleInfo) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'style' || part.committer.parts.length > 1) {
      throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
    } // Handle static styles the first time we see a Part


    if (!styleMapStatics.has(part)) {
      part.committer.element.style.cssText = part.committer.strings.join(' ');
      styleMapStatics.set(part, true);
    }

    var style = part.committer.element.style; // Remove old properties that no longer exist in styleInfo

    var oldInfo = styleMapCache.get(part);

    for (var name in oldInfo) {
      if (!(name in styleInfo)) {
        if (name.indexOf('-') === -1) {
          // tslint:disable-next-line:no-any
          style[name] = null;
        } else {
          style.removeProperty(name);
        }
      }
    } // Add or update properties


    for (var _name in styleInfo) {
      if (_name.indexOf('-') === -1) {
        // tslint:disable-next-line:no-any
        style[_name] = styleInfo[_name];
      } else {
        style.setProperty(_name, styleInfo[_name]);
      }
    }

    styleMapCache.set(part, styleInfo);
  };
});

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/directives/unsafe-html.js":
/*!************************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/directives/unsafe-html.js ***!
  \************************************************************************/
/*! exports provided: unsafeHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeHTML", function() { return unsafeHTML; });
/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/parts.js */ "../ce-decorators/node_modules/lit-html/lib/parts.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "../ce-decorators/node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

 // For each part, remember the value that was last rendered to the part by the
// unsafeHTML directive, and the DocumentFragment that was last set as a value.
// The DocumentFragment is used as a unique key to check if the last value
// rendered to the part was with unsafeHTML. If not, we'll always re-render the
// value passed to unsafeHTML.

var previousValues = new WeakMap();
/**
 * Renders the result as HTML, rather than text.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */

var unsafeHTML = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])(function (value) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"])) {
      throw new Error('unsafeHTML can only be used in text bindings');
    }

    var previousValue = previousValues.get(part);

    if (previousValue !== undefined && Object(_lib_parts_js__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(value) && value === previousValue.value && part.value === previousValue.fragment) {
      return;
    }

    var template = document.createElement('template');
    template.innerHTML = value; // innerHTML casts to string internally

    var fragment = document.importNode(template.content, true);
    part.setValue(fragment);
    previousValues.set(part, {
      value: value,
      fragment: fragment
    });
  };
});

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/directives/until.js":
/*!******************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/directives/until.js ***!
  \******************************************************************/
/*! exports provided: until */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/parts.js */ "../ce-decorators/node_modules/lit-html/lib/parts.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "../ce-decorators/node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



var _state = new WeakMap();
/**
 * Renders one of a series of values, including Promises, to a Part.
 *
 * Values are rendered in priority order, with the first argument having the
 * highest priority and the last argument having the lowest priority. If a
 * value is a Promise, low-priority values will be rendered until it resolves.
 *
 * The priority of values can be used to create placeholder content for async
 * data. For example, a Promise with pending content can be the first,
 * highest-priority, argument, and a non_promise loading indicator template can
 * be used as the second, lower-priority, argument. The loading indicator will
 * render immediately, and the primary content will render when the Promise
 * resolves.
 *
 * Example:
 *
 *     const content = fetch('./content.txt').then(r => r.text());
 *     html`${until(content, html`<span>Loading...</span>`)}`
 */


var until = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])(function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (part) {
    var state = _state.get(part);

    if (state === undefined) {
      state = {
        values: []
      };

      _state.set(part, state);
    }

    var previousValues = state.values;
    state.values = args;

    var _loop2 = function _loop2(i) {
      // If we've rendered a higher-priority value already, stop.
      if (state.lastRenderedIndex !== undefined && i > state.lastRenderedIndex) {
        return "break";
      }

      var value = args[i]; // Render non-Promise values immediately

      if (Object(_lib_parts_js__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(value) || typeof value.then !== 'function') {
        part.setValue(value);
        state.lastRenderedIndex = i; // Since a lower-priority value will never overwrite a higher-priority
        // synchronous value, we can stop processsing now.

        return "break";
      } // If this is a Promise we've already handled, skip it.


      if (state.lastRenderedIndex !== undefined && typeof value.then === 'function' && value === previousValues[i]) {
        return "continue";
      } // We have a Promise that we haven't seen before, so priorities may have
      // changed. Forget what we rendered before.


      state.lastRenderedIndex = undefined;
      Promise.resolve(value).then(function (resolvedValue) {
        var index = state.values.indexOf(value); // If state.values doesn't contain the value, we've re-rendered without
        // the value, so don't render it. Then, only render if the value is
        // higher-priority than what's already been rendered.

        if (index > -1 && (state.lastRenderedIndex === undefined || index < state.lastRenderedIndex)) {
          state.lastRenderedIndex = index;
          part.setValue(resolvedValue);
          part.commit();
        }
      });
    };

    _loop: for (var i = 0; i < args.length; i++) {
      var _ret = _loop2(i);

      switch (_ret) {
        case "break":
          break _loop;

        case "continue":
          continue;
      }
    }
  };
});

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/default-template-processor.js":
/*!********************************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/default-template-processor.js ***!
  \********************************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "../ce-decorators/node_modules/lit-html/lib/parts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */

var DefaultTemplateProcessor =
/*#__PURE__*/
function () {
  function DefaultTemplateProcessor() {
    _classCallCheck(this, DefaultTemplateProcessor);
  }

  _createClass(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",

    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    value: function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];

      if (prefix === '.') {
        var _comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);

        return _comitter.parts;
      }

      if (prefix === '@') {
        return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
      }

      if (prefix === '?') {
        return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
      }

      var comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
      return comitter.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */

  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
  }]);

  return DefaultTemplateProcessor;
}();
var defaultTemplateProcessor = new DefaultTemplateProcessor();

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/directive.js":
/*!***************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/directive.js ***!
  \***************************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
/**
 * Brands a function as a directive so that lit-html will call the function
 * during template rendering, rather than passing as a value.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object
 *
 * @example
 *
 * ```
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 * ```
 */
// tslint:disable-next-line:no-any

var directive = function directive(f) {
  return function () {
    var d = f.apply(void 0, arguments);
    directives.set(d, true);
    return d;
  };
};
var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/dom.js":
/*!*********************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/dom.js ***!
  \*********************************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */

var reparentNodes = function reparentNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var node = start;

  while (node !== end) {
    var n = node.nextSibling;
    container.insertBefore(node, before);
    node = n;
  }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */

var removeNodes = function removeNodes(container, startNode) {
  var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var node = startNode;

  while (node !== endNode) {
    var n = node.nextSibling;
    container.removeChild(node);
    node = n;
  }
};

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/modify-template.js":
/*!*********************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/modify-template.js ***!
  \*********************************************************************/
/*! exports provided: removeNodesFromTemplate, insertNodeIntoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodesFromTemplate", function() { return removeNodesFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeIntoTemplate", function() { return insertNodeIntoTemplate; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "../ce-decorators/node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module shady-render
 */

var walkerNodeFilter = 133
/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */

function removeNodesFromTemplate(template, nodesToRemove) {
  var content = template.element.content,
      parts = template.parts;
  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var part = parts[partIndex];
  var nodeIndex = -1;
  var removeCount = 0;
  var nodesToRemoveInTemplate = [];
  var currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    var node = walker.currentNode; // End removal if stepped past the removing node

    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    } // A node to remove was found in the template


    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node); // Track node we're removing

      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    } // When removing, increment count by which to adjust subsequent part indices


    if (currentRemovingNode !== null) {
      removeCount++;
    }

    while (part !== undefined && part.index === nodeIndex) {
      // If part is in a removed node deactivate it by setting index to -1 or
      // adjust the index as needed.
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }

  nodesToRemoveInTemplate.forEach(function (n) {
    return n.parentNode.removeChild(n);
  });
}

var countNodes = function countNodes(node) {
  var count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

  for (var i = startIndex + 1; i < parts.length; i++) {
    var part = parts[i];

    if (Object(_template_js__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"])(part)) {
      return i;
    }
  }

  return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */


function insertNodeIntoTemplate(template, node) {
  var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var content = template.element.content,
      parts = template.parts; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var insertCount = 0;
  var walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    var walkerNode = walker.currentNode;

    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }

    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      // If we've inserted the node, simply adjust all subsequent parts
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }

        return;
      }

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/part.js":
/*!**********************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/part.js ***!
  \**********************************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

var nothing = {};

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/parts.js":
/*!***********************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/parts.js ***!
  \***********************************************************/
/*! exports provided: isPrimitive, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "../ce-decorators/node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "../ce-decorators/node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "../ce-decorators/node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "../ce-decorators/node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "../ce-decorators/node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "../ce-decorators/node_modules/lit-html/lib/template.js");
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */






var isPrimitive = function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
};
/**
 * Sets attribute values for AttributeParts, so that the value is only set once
 * even if there are multiple parts for an attribute.
 */

var AttributeCommitter =
/*#__PURE__*/
function () {
  function AttributeCommitter(element, name, strings) {
    _classCallCheck(this, AttributeCommitter);

    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createClass(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var text = '';

      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = this.parts[i];

        if (part !== undefined) {
          var v = part.value;

          if (v != null && (Array.isArray(v) || // tslint:disable-next-line:no-any
          typeof v !== 'string' && v[Symbol.iterator])) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var t = _step.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            text += typeof v === 'string' ? v : String(v);
          }
        }
      }

      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);

  return AttributeCommitter;
}();
var AttributePart =
/*#__PURE__*/
function () {
  function AttributePart(comitter) {
    _classCallCheck(this, AttributePart);

    this.value = undefined;
    this.committer = comitter;
  }

  _createClass(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
        this.value = value; // If the value is a not a directive, dirty the committer so that it'll
        // call setAttribute. If the value is a directive, it'll dirty the
        // committer if it calls setValue().

        if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
        var directive = this.value;
        this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      this.committer.commit();
    }
  }]);

  return AttributePart;
}();
var NodePart =
/*#__PURE__*/
function () {
  function NodePart(options) {
    _classCallCheck(this, NodePart);

    this.value = undefined;
    this._pendingValue = undefined;
    this.options = options;
  }
  /**
   * Inserts this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  _createClass(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
      this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
      this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
     * its next sibling must be static, unchanging nodes such as those that appear
     * in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

      part._insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Appends this part after `ref`
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      var value = this._pendingValue;

      if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      if (isPrimitive(value)) {
        if (value !== this.value) {
          this._commitText(value);
        }
      } else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
        this._commitTemplateResult(value);
      } else if (value instanceof Node) {
        this._commitNode(value);
      } else if (Array.isArray(value) || // tslint:disable-next-line:no-any
      value[Symbol.iterator]) {
        this._commitIterable(value);
      } else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
        this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
        this.clear();
      } else {
        // Fallback, will render the string representation
        this._commitText(value);
      }
    }
  }, {
    key: "_insert",
    value: function _insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "_commitNode",
    value: function _commitNode(value) {
      if (this.value === value) {
        return;
      }

      this.clear();

      this._insert(value);

      this.value = value;
    }
  }, {
    key: "_commitText",
    value: function _commitText(value) {
      var node = this.startNode.nextSibling;
      value = value == null ? '' : value;

      if (node === this.endNode.previousSibling && node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          // If we only have a single text node between the markers, we can just
          // set its value, rather than replacing it.
          // TODO(justinfagnani): Can we just check if this.value is primitive?
          node.data = value;
        } else {
        this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
      }

      this.value = value;
    }
  }, {
    key: "_commitTemplateResult",
    value: function _commitTemplateResult(value) {
      var template = this.options.templateFactory(value);

      if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] && this.value.template === template) {
        this.value.update(value.values);
      } else {
        // Make sure we propagate the template processor from the TemplateResult
        // so that we use its syntax extension, etc. The template factory comes
        // from the render function options so that it can control template
        // caching and preprocessing.
        var instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);

        var fragment = instance._clone();

        instance.update(value.values);

        this._commitNode(fragment);

        this.value = instance;
      }
    }
  }, {
    key: "_commitIterable",
    value: function _commitIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If _value is an array, then the previous render was of an
      // iterable and _value will contain the NodeParts from the previous
      // render. If _value is not an array, clear this part and make a new
      // array for NodeParts.
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      } // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render


      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          // Try to reuse an existing part
          itemPart = itemParts[partIndex]; // If no existing part, create a new one

          if (itemPart === undefined) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);

            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }

          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (partIndex < itemParts.length) {
        // Truncate the parts array so _value reflects the current state
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);

  return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */

var BooleanAttributePart =
/*#__PURE__*/
function () {
  function BooleanAttributePart(element, name, strings) {
    _classCallCheck(this, BooleanAttributePart);

    this.value = undefined;
    this._pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  _createClass(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      var value = !!this._pendingValue;

      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, '');
        } else {
          this.element.removeAttribute(this.name);
        }
      }

      this.value = value;
      this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
  }]);

  return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */

var PropertyCommitter =
/*#__PURE__*/
function (_AttributeCommitter) {
  _inherits(PropertyCommitter, _AttributeCommitter);

  function PropertyCommitter(element, name, strings) {
    var _this;

    _classCallCheck(this, PropertyCommitter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyCommitter).call(this, element, name, strings));
    _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this;
  }

  _createClass(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }

      return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false; // tslint:disable-next-line:no-any

        this.element[this.name] = this._getValue();
      }
    }
  }]);

  return PropertyCommitter;
}(AttributeCommitter);
var PropertyPart =
/*#__PURE__*/
function (_AttributePart) {
  _inherits(PropertyPart, _AttributePart);

  function PropertyPart() {
    _classCallCheck(this, PropertyPart);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyPart).apply(this, arguments));
  }

  return PropertyPart;
}(AttributePart); // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

var eventOptionsSupported = false;

try {
  var options = {
    get capture() {
      eventOptionsSupported = true;
      return false;
    }

  }; // tslint:disable-next-line:no-any

  window.addEventListener('test', options, options); // tslint:disable-next-line:no-any

  window.removeEventListener('test', options, options);
} catch (_e) {}

var EventPart =
/*#__PURE__*/
function () {
  function EventPart(element, eventName, eventContext) {
    var _this2 = this;

    _classCallCheck(this, EventPart);

    this.value = undefined;
    this._pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this._boundHandleEvent = function (e) {
      return _this2.handleEvent(e);
    };
  }

  _createClass(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      var newListener = this._pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
      }

      if (shouldAddListener) {
        this._options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
      }

      this.value = newListener;
      this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);

  return EventPart;
}(); // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.

var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/render.js":
/*!************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/render.js ***!
  \************************************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "../ce-decorators/node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "../ce-decorators/node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "../ce-decorators/node_modules/lit-html/lib/template-factory.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */



var parts = new WeakMap();
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

var render = function render(result, container, options) {
  var part = parts.get(container);

  if (part === undefined) {
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({
      templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"]
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/shady-render.js":
/*!******************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/shady-render.js ***!
  \******************************************************************/
/*! exports provided: html, svg, TemplateResult, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "../ce-decorators/node_modules/lit-html/lib/dom.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-template.js */ "../ce-decorators/node_modules/lit-html/lib/modify-template.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "../ce-decorators/node_modules/lit-html/lib/render.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-factory.js */ "../ce-decorators/node_modules/lit-html/lib/template-factory.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-instance.js */ "../ce-decorators/node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template-result.js */ "../ce-decorators/node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template.js */ "../ce-decorators/node_modules/lit-html/lib/template.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lit-html.js */ "../ce-decorators/node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["TemplateResult"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @module shady-render
 * @preferred
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */







 // Get a key to lookup in `templateCaches`.

var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
  return "".concat(type, "--").concat(scopeName);
};

var compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn("Incompatible ShadyCSS version detected." + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and" + "@webcomponents/shadycss@1.3.1.");
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
  return function (result) {
    var cacheKey = getTemplateCacheKey(result.type, scopeName);
    var templateCache = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(cacheKey);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].set(cacheKey, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    }

    var key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_6__["marker"]);
    template = templateCache.keyString.get(key);

    if (template === undefined) {
      var element = result.getTemplateElement();

      if (compatibleShadyCSSVersion) {
        window.ShadyCSS.prepareTemplateDom(element, scopeName);
      }

      template = new _template_js__WEBPACK_IMPORTED_MODULE_6__["Template"](result, element);
      templateCache.keyString.set(key, template);
    }

    templateCache.stringsArray.set(result.strings, template);
    return template;
  };
};

var TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
  TEMPLATE_TYPES.forEach(function (type) {
    var templates = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(function (template) {
        var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

        var styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(function (s) {
          styles.add(s);
        });
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, styles);
      });
    }
  });
};

var shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */

var prepareTemplateStyles = function prepareTemplateStyles(renderedDOM, template, scopeName) {
  shadyRenderSet.add(scopeName); // Move styles out of rendered DOM and store.

  var styles = renderedDOM.querySelectorAll('style'); // If there are no styles, skip unnecessary work

  if (styles.length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
    return;
  }

  var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (var i = 0; i < styles.length; i++) {
    var style = styles[i];
    style.parentNode.removeChild(style);
    condensedStyle.textContent += style.textContent;
  } // Remove styles from nested templates in this scope.


  removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
  // `template`.

  Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["insertNodeIntoTemplate"])(template, condensedStyle, template.element.content.firstChild); // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).

  window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);

  if (window.ShadyCSS.nativeShadow) {
    // When in native Shadow DOM, re-add styling to rendered content using
    // the style ShadyCSS produced.
    var _style = template.element.content.querySelector('style');

    renderedDOM.insertBefore(_style.cloneNode(true), renderedDOM.firstChild);
  } else {
    // When not in native Shadow DOM, at this point ShadyCSS will have
    // removed the style from the lit template and parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    template.element.content.insertBefore(condensedStyle, template.element.content.firstChild);
    var removes = new Set();
    removes.add(condensedStyle);
    Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, removes);
  }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */


var render = function render(result, container, options) {
  var scopeName = options.scopeName;
  var hasRendered = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].has(container);
  var needsScoping = container instanceof ShadowRoot && compatibleShadyCSSVersion && result instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_5__["TemplateResult"]; // Handle first render to a scope specially...

  var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(result, renderContainer, Object.assign({
    templateFactory: shadyTemplateFactory(scopeName)
  }, options)); // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.

  if (firstScopeRender) {
    var part = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].get(renderContainer);
    _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].delete(renderContainer);

    if (part.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_4__["TemplateInstance"]) {
      prepareTemplateStyles(renderContainer, part.value.template, scopeName);
    }

    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    container.appendChild(renderContainer);
    _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].set(container, part);
  } // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSSS.styleElement`
  // for dynamic changes.


  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/template-factory.js":
/*!**********************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/template-factory.js ***!
  \**********************************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "../ce-decorators/node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */

function templateFactory(result) {
  var templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  var template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  var key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}
var templateCaches = new Map();

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/template-instance.js":
/*!***********************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/template-instance.js ***!
  \***********************************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "../ce-decorators/node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "../ce-decorators/node_modules/lit-html/lib/template.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */

var TemplateInstance =
/*#__PURE__*/
function () {
  function TemplateInstance(template, processor, options) {
    _classCallCheck(this, TemplateInstance);

    this._parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  _createClass(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var part = _step.value;

          if (part !== undefined) {
            part.setValue(values[i]);
          }

          i++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _part = _step2.value;

          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      var _this = this;

      // When using the Custom Elements polyfill, clone the node, rather than
      // importing it, to keep the fragment in the template's document. This
      // leaves the fragment inert so custom elements won't upgrade and
      // potentially modify their contents by creating a polyfilled ShadowRoot
      // while we traverse the tree.
      var fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var parts = this.template.parts;
      var partIndex = 0;
      var nodeIndex = 0;

      var _prepareInstance = function _prepareInstance(fragment) {
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
        // null
        var walker = document.createTreeWalker(fragment, 133
        /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
        , null, false);
        var node = walker.nextNode(); // Loop through all the nodes and parts of a template

        while (partIndex < parts.length && node !== null) {
          var part = parts[partIndex]; // Consecutive Parts may have the same node index, in the case of
          // multiple bound attributes on an element. So each iteration we either
          // increment the nodeIndex, if we aren't on a node with a part, or the
          // partIndex if we are. By not incrementing the nodeIndex when we find a
          // part, we allow for the next part to be associated with the current
          // node if neccessasry.

          if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
            _this._parts.push(undefined);

            partIndex++;
          } else if (nodeIndex === part.index) {
            if (part.type === 'node') {
              var _part2 = _this.processor.handleTextExpression(_this.options);

              _part2.insertAfterNode(node.previousSibling);

              _this._parts.push(_part2);
            } else {
              var _this$_parts;

              (_this$_parts = _this._parts).push.apply(_this$_parts, _toConsumableArray(_this.processor.handleAttributeExpressions(node, part.name, part.strings, _this.options)));
            }

            partIndex++;
          } else {
            nodeIndex++;

            if (node.nodeName === 'TEMPLATE') {
              _prepareInstance(node.content);
            }

            node = walker.nextNode();
          }
        }
      };

      _prepareInstance(fragment);

      if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }

      return fragment;
    }
  }]);

  return TemplateInstance;
}();

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/template-result.js":
/*!*********************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/template-result.js ***!
  \*********************************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "../ce-decorators/node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "../ce-decorators/node_modules/lit-html/lib/template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

var TemplateResult =
/*#__PURE__*/
function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);

    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var endIndex = this.strings.length - 1;
      var html = '';

      for (var i = 0; i < endIndex; i++) {
        var s = this.strings[i]; // This exec() call does two things:
        // 1) Appends a suffix to the bound attribute name to opt out of special
        // attribute value parsing that IE11 and Edge do, like for style and
        // many SVG attributes. The Template class also appends the same suffix
        // when looking up attributes to create Parts.
        // 2) Adds an unquoted-attribute-safe marker for the first expression in
        // an attribute. Subsequent attribute expressions will use node markers,
        // and this is safe since attributes with multiple expressions are
        // guaranteed to be quoted.

        var match = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);

        if (match) {
          // We're starting a new bound attribute.
          // Add the safe attribute suffix, and use unquoted-attribute-safe
          // marker.
          html += s.substr(0, match.index) + match[1] + match[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + match[3] + _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
        } else {
          // We're either in a bound node, or trailing bound attribute.
          // Either way, nodeMarker is safe to use.
          html += s + _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"];
        }
      }

      return html + this.strings[endIndex];
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      template.innerHTML = this.getHTML();
      return template;
    }
  }]);

  return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */

var SVGTemplateResult =
/*#__PURE__*/
function (_TemplateResult) {
  _inherits(SVGTemplateResult, _TemplateResult);

  function SVGTemplateResult() {
    _classCallCheck(this, SVGTemplateResult);

    return _possibleConstructorReturn(this, _getPrototypeOf(SVGTemplateResult).apply(this, arguments));
  }

  _createClass(SVGTemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      return "<svg>".concat(_get(_getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = _get(_getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);

      var content = template.content;
      var svgElement = content.firstChild;
      content.removeChild(svgElement);
      Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
      return template;
    }
  }]);

  return SVGTemplateResult;
}(TemplateResult);

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lib/template.js":
/*!**************************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lib/template.js ***!
  \**************************************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

var nodeMarker = "<!--".concat(marker, "-->");
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
/**
 * Suffix appended to all bound attribute names.
 */

var boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */

var Template = function Template(result, element) {
  var _this = this;

  _classCallCheck(this, Template);

  this.parts = [];
  this.element = element;
  var index = -1;
  var partIndex = 0;
  var nodesToRemove = [];

  var _prepareTemplate = function _prepareTemplate(template) {
    var content = template.content; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
    // null

    var walker = document.createTreeWalker(content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    var lastPartIndex = 0;

    while (walker.nextNode()) {
      index++;
      var node = walker.currentNode;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            var attributes = node.attributes; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondance between part index and attribute index.

            var count = 0;

            for (var i = 0; i < attributes.length; i++) {
              if (attributes[i].value.indexOf(marker) >= 0) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              var stringForPart = result.strings[partIndex]; // Find the attribute name

              var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              var attributeValue = node.getAttribute(attributeLookupName);
              var strings = attributeValue.split(markerRegex);

              _this.parts.push({
                type: 'attribute',
                index: index,
                name: name,
                strings: strings
              });

              node.removeAttribute(attributeLookupName);
              partIndex += strings.length - 1;
            }
          }

          if (node.tagName === 'TEMPLATE') {
            _prepareTemplate(node);
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          var data = node.data;

          if (data.indexOf(marker) >= 0) {
            var parent = node.parentNode;

            var _strings = data.split(markerRegex);

            var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (var _i = 0; _i < lastIndex; _i++) {
              parent.insertBefore(_strings[_i] === '' ? createMarker() : document.createTextNode(_strings[_i]), node);

              _this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (_strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = _strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;

              _parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;

            _this.parts.push({
              type: 'node',
              index: index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.


            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }

            partIndex++;
          } else {
            var _i2 = -1;

            while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              _this.parts.push({
                type: 'node',
                index: -1
              });
            }
          }
        }
    }
  };

  _prepareTemplate(element); // Remove text binding nodes after the walk to not disturb the TreeWalker


  for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
    var n = _nodesToRemove[_i3];
    n.parentNode.removeChild(n);
  }
};
var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
}; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.

var createMarker = function createMarker() {
  return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */

var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/***/ }),

/***/ "../ce-decorators/node_modules/lit-html/lit-html.js":
/*!**********************************************************!*\
  !*** ../ce-decorators/node_modules/lit-html/lit-html.js ***!
  \**********************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "../ce-decorators/node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "../ce-decorators/node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "../ce-decorators/node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "../ce-decorators/node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "../ce-decorators/node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "../ce-decorators/node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "../ce-decorators/node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "../ce-decorators/node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "../ce-decorators/node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "../ce-decorators/node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */



 // TODO(justinfagnani): remove line when we get NodePart moving methods








 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time

(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */

var html = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
};
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */

var svg = function svg(strings) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
};

/***/ }),

/***/ "../ce-decorators/node_modules/regenerator-runtime/runtime-module.js":
/*!***************************************************************************!*\
  !*** ../ce-decorators/node_modules/regenerator-runtime/runtime-module.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "../ce-decorators/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../ce-decorators/node_modules/regenerator-runtime/runtime.js":
/*!********************************************************************!*\
  !*** ../ce-decorators/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./src/components/testcomponent.ts":
/*!*****************************************!*\
  !*** ./src/components/testcomponent.ts ***!
  \*****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var ce_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ce-decorators */ "../ce-decorators/lib/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["test"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var TestComponent = _decorate(null, function (_initialize, _CustomElement) {
  var TestComponent =
  /*#__PURE__*/
  function (_CustomElement2) {
    _inherits(TestComponent, _CustomElement2);

    function TestComponent() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, TestComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TestComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return TestComponent;
  }(_CustomElement);

  return {
    F: TestComponent,
    d: [{
      kind: "field",
      decorators: [Object(ce_decorators__WEBPACK_IMPORTED_MODULE_0__["Prop"])(), Reflect.metadata("design:type", String)],
      key: "test",
      value: function value() {
        return '';
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return Object(ce_decorators__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
      }
    }]
  };
}, ce_decorators__WEBPACK_IMPORTED_MODULE_0__["CustomElement"]);

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_testcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/testcomponent */ "./src/components/testcomponent.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NsYXNzZXZlbnRzLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9jbGFzc3Byb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NsYXNzcHJvcGVydHlpbnRlcmNlcHRvcnMudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NsYXNzcHJvcGVydHl3YXRjaGVyLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NvbXBvbmVudGNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NvbXBvbmVudHByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NvbXBvbmVudHN0YXRlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9jdXN0b21lbGVtZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9kZXByZWNhdGVkLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9ldmVudC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2ludGVyY2VwdG9yLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saXQtaHRtbC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvcHJvcC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvcHJvcGVydHlzdGF0ZS50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvcmVmbGVjdC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi8uLi9zcmMvcmVuZGVyZXIvbGlnaHRET01SZW5kZXJlci50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi8uLi9zcmMvcmVuZGVyZXIvcGlwZVJlbmRlcmVyLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9yZW5kZXJlci9yZW5kZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vLi4vc3JjL3JlbmRlcmVyL3NoYWRvd0RPTVJlbmRlcmVyLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9zdGFnZTIvY29tcG9uZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9zdGFnZTIvZGVwcmVjYXRlZC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi8uLi9zcmMvc3RhZ2UyL2V2ZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9zdGFnZTIvaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vLi4vc3JjL3N0YWdlMi9wcm9wLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9zdGFnZTIvc3RhZ2UyZGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi8uLi9zcmMvc3RhZ2UyL3RyYWNlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9zdGFnZTIvd2F0Y2gudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL3RyYWNlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvd2F0Y2gudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vY2UtZGVjb3JhdG9ycy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2RpcmVjdGl2ZXMvYXN5bmMtYXBwZW5kLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9kaXJlY3RpdmVzL2FzeW5jLXJlcGxhY2UudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2RpcmVjdGl2ZXMvY2FjaGUudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2RpcmVjdGl2ZXMvY2xhc3MtbWFwLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9kaXJlY3RpdmVzL2d1YXJkLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9kaXJlY3RpdmVzL2lmLWRlZmluZWQudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2RpcmVjdGl2ZXMvcmVwZWF0LnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9kaXJlY3RpdmVzL3N0eWxlLW1hcC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvZGlyZWN0aXZlcy91bnRpbC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvZGlyZWN0aXZlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvZG9tLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvbW9kaWZ5LXRlbXBsYXRlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvcGFydC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvbGliL3BhcnRzLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvcmVuZGVyLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvc2hhZHktcmVuZGVyLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvdGVtcGxhdGUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvbGliL3RlbXBsYXRlLWluc3RhbmNlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvdGVtcGxhdGUtcmVzdWx0LnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3Ivc3JjL2xpdC1odG1sLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL2NlLWRlY29yYXRvcnMvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vY2UtZGVjb3JhdG9ycy9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4vc3JjL2NvbXBvbmVudHMvdGVzdGNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbIm1hcCIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eUludGVyY2VwdG9yIiwicHJvcGVydHlXYXRjaGVyIiwidGFyZ2V0IiwiaXNTdGFnZTJDbGFzc0RlY29yYXRvciIsIkNvbXBvbmVudFMyIiwiYXBwbHlTdGFnZTJ0b0xlZ2FjeUNsYXNzRGVjb3JhdG9yIiwiY29tcG9uZW50cyIsImdldEFsbENvbXBvbmVudHMiLCJjYXRhbG9nIiwidmFsdWUiLCJjb21wb25lbnRQcm9wZXJ0aWVzIiwiZ2V0Q29tcG9uZW50UHJvcGVydGllcyIsIkFycmF5IiwiZ2V0Q2xhc3NQcm9wZXJ0aWVzIiwibmFtZSIsImV2ZW50cyIsImdldENsYXNzRXZlbnRzIiwid2luZG93IiwiQ09NUE9ORU5UX1NUQVRFIiwiUkVOREVSX1NUUkFURUdZIiwiaW5zdGFuY2UiLCJQUk9QRVJUWV9TVEFURSIsInByb3BlcnR5TmFtZSIsImtlYmFwVG9DYW1lbENhc2UiLCJjbGFzc1Byb3BlcnR5Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsImRlc2VyaWFsaXplVmFsdWUiLCJpbnRlcmNlcHRvciIsImdldENsYXNzUHJvcGVydHlJbnRlcmNlcHRvciIsImZ1bmMiLCJ3YXRjaGVyIiwiZ2V0Q2xhc3NQcm9wZXJ0eVdhdGNoZXIiLCJjYW1lbFRvS2ViYXBDYXNlIiwic2VyaWFsaXplVmFsdWUiLCJjb25zdHJ1Y3RvciIsIl9yZW5kZXJTdHJhdGVneSIsIkRFRkFVTFQiLCJfcmVuZGVyQ2FsbGJhY2tSZXNvbHZlciIsIl9jb21wb25lbnRTdGF0ZSIsIklOSVQiLCJfcHJvcGVydHlTdGF0ZSIsIkRJUlRZIiwiX3JlbmRlclNjaGVkdWxlZCIsIl90ZW1wbGF0ZUNhY2hlIiwiX2ZpcnN0UmVuZGVyIiwiX3JlbmRlckNvbXBsZXRlZENhbGxiYWNrcyIsIl9jb25zdHJ1Y3RlZENvbXBsZXRlZENhbGxiYWNrcyIsIl9sYXlvdXRSQUZSZWZlcmVuY2UiLCJQcm9taXNlIiwibW9kZSIsInJlc29sdmUiLCJmb3JjZSIsImFkZENvbXBvbmVudFRvUmVuZGVyUGlwZWxpbmUiLCJzZXRUaW1lb3V0IiwicmVuZGVyQ29tcG9uZW50IiwicmVtb3ZlQ29tcG9uZW50RnJvbVJlbmRlclBpcGVsaW5lIiwiX29yaWdpbmFsUHJvcGVydHlTdGF0ZSIsInByb3BWYWx1ZSIsImtleSIsImNvbnNvbGUiLCJpc1N0YWdlMk1ldGhvZERlY29yYXRvciIsImlzU3RhZ2UyRmllbGREZWNvcmF0b3IiLCJEZXByZWNhdGVkUzIiLCJhcHBseVN0YWdlMlRvTGVnYWN5RmllbGREZWNvcmF0b3IiLCJFdmVudHMyIiwiSW50ZXJjZXB0b3JTMiIsImFwcGx5U3RhZ2UyVG9MZWdhY3lNZXRob2REZWNvcmF0b3IiLCJvcHRpb25zIiwiUHJvcFMyIiwiUmVmbGVjdCIsInByb3BlcnR5S2V5IiwiU3RhdGVTMiIsIm9yaWdSZWZsZWN0IiwicmVmbGVjdE1hcCIsIm1ldGFkYXRhTWFwIiwicHJvcE1hcCIsImRlc2NpcHRvciIsImN1cnJlbnRWYWx1ZSIsInJlc3VsdCIsImRlc2NyaXB0b3IiLCJraW5kIiwicGxhY2VtZW50IiwiZmluaXNoZXIiLCJmaW5pc2hlclRhcmdldCIsImdldE9yQ3JlYXRlUHJvcE1hcCIsImdldE9yQ3JlYXRlTWV0YWRhdGFNYXAiLCJmaW5pc2hUYXJnZXQiLCJwcm9wZXJ0eSIsImRlY29yYXRlIiwiZ2V0TWV0YWRhdGEiLCJtZXRhZGF0YSIsInRlbXBsYXRlQ2FjaGUiLCJzdHlsZVNoZWV0IiwiZG9jdW1lbnQiLCJzdHlsZVN0cmluZyIsInByZXYiLCJjdXJyZW50IiwicHJldlZhbHVlIiwidGFnIiwiYXJncyIsIm1ha2VUZW1wbGF0ZVN0cmluZyIsInJlbmRlciIsImV2ZW50Q29udGV4dCIsImNvbXBvbmVudHNUb1JlbmRlciIsImN1cnJlbnRBbmltYXRpb25GcmFtZSIsImZyYW1lQnVkZ2V0Iiwic2NoZWR1bGVOZXh0UkFGUmVuZGVyIiwiY3VycmVudEZyYW1lQnVkZ2V0IiwiY29tcG9uZW50Iiwic3RhcnQiLCJwZXJmb3JtYW5jZSIsInJlbmRlclRpbWUiLCJlbGVtZW50VG9SZW5kZXIiLCJyZW5kZXJUb1NoYWRvd0RPTSIsInJlbmRlclRvTGlnaHRET00iLCJjc3NTdHlsZXMiLCJuZWVkU2hhZHlET00iLCJzaGFkeVJlbmRlciIsImh0bWwiLCJzY29wZU5hbWUiLCJlbGVtZW50cyIsIkN1c3RvbUVsZW1lbnQiLCJjb21wb25lbnRFeHRlbmRlZE9wdGlvbnMiLCJzaGFkeUNTU1N0eWxlU2hlZXRBZG9wdGVkIiwicHJvdG90eXBlIiwiT2JqZWN0IiwicHJvdG90eXBlQ2xhc3NQcm9wZXJ0aWVzIiwidGFyZ2V0Q2xhc3NQcm9wZXJ0aWVzIiwiY29tcG9uZW50U3R5bGVzIiwiY29tcG9uZW50Q1NTU3R5bGVzIiwiY3NzIiwiY3NzVGV4dCIsInBhcmVudFN0eWxlIiwicHJvdG90eXBlV2F0Y2hlciIsImdldEFsbENsYXNzUHJvcGVydHlXYXRjaGVyIiwicHJvdG90eXBlSW50ZXJjZXB0b3IiLCJnZXRBbGxDbGFzc1Byb3BlcnR5SW50ZXJjZXB0b3JzIiwic2V0Q29tcG9uZW50UHJvcGVydGllcyIsIlN5bWJvbCIsImV4dHJhcyIsImluaXRpYWxpemVyIiwiaW5pdGlhbGl6ZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImdldCIsIm1lc3NhZ2UiLCJzZXQiLCJvcHRpb25zT2JqZWN0IiwiY2FuY2VsYWJsZSIsImJ1YmJsZXMiLCJlbWl0IiwiY3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJQcm9wIiwicmVmbGVjdEFzQXR0cmlidXRlIiwidHlwZSIsInVuZGVmaW5lZCIsIl9vcHRpb25zIiwiZWxlbWVudCIsImNsYXNzRGVzY3JpcHRvciIsImRlY29yYXRvciIsIm5ld0NvbnN0cnVjdG9yIiwiZmllbGREZWNvcmF0b3JEZXNjcmlwdG9yIiwibWV0aG9kRGVjb3JhdG9yRGVzY3JpcHRvciIsIlRyYWNlUzIiLCJwYXJzZUZsb2F0IiwiXzMiLCJjYWxsYmFjayIsImV2YWwiLCJKU09OIiwic3RyIiwicmF3Iiwic3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzIiwiRG9jdW1lbnQiLCJDU1NTdHlsZVNoZWV0IiwiV2F0Y2hTMiIsIlRlc3RDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7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QUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFULEdBQWtCLENBQWhDO0FBQ0EsUUFBSSxPQUFPLEdBQUcsQ0FBZDtBQUNBLFFBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFWLEdBQW1CLENBQWpDLENBcENtQyxDQXNDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHRCQTtBQUVPLElBQU1DLGFBQWI7QUFBQSxNQUFhQSxhQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLE9BQWFBLGFBQWI7QUFBQTtBQUFBO0FBQUEsbUJBRUt2QiwwREFBSSxFQUZUO0FBQUE7QUFBQTtBQUFBLGVBR2tCLEVBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUlJLGtCQUFTO0FBQ0wsZUFBT3BDLDBEQUFQO0FBQ0g7QUFOTDtBQUFBO0FBQUEsR0FBbUNHLDJEQUFuQyxFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZ2l0bGFiLW1vbml0b3JcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ2l0bGFiLW1vbml0b3JcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ2l0bGFiLW1vbml0b3JcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBDdXN0b21FbGVtZW50IH0gZnJvbSAnLi9jdXN0b21lbGVtZW50JztcbmltcG9ydCB7IEV2ZW50T3B0aW9ucyB9IGZyb20gJy4vZXZlbnRvcHRpb25zJztcblxuY29uc3QgbWFwOiBNYXA8dHlwZW9mIEN1c3RvbUVsZW1lbnQsIENsYXNzRXZlbnRzPiA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBDTGFzc0V2ZW50IHR5cGVcbiAqL1xuZXhwb3J0IHR5cGUgQ2xhc3NFdmVudHMgPSBNYXA8c3RyaW5nIHwgc3ltYm9sLCBFdmVudE9wdGlvbnM+O1xuXG4vKipcbiAqIHJldHVybiBldmVudHMgcmVnaXN0ZXJlZCBmb3IgdGhlIGdpdmVuIGNsYXNzXG4gKiBcbiAqIEBwYXJhbSB0YXJnZXQgQ2xhc3MgdG8gZ2V0IENsYXNzRXZlbnRzIGZyb20gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc0V2ZW50cyh0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50KTogQ2xhc3NFdmVudHMge1xuICBsZXQgcHJvcGVydGllczogQ2xhc3NFdmVudHMgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghcHJvcGVydGllcykge1xuICAgIHByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgbWFwLnNldCh0YXJnZXQsIHByb3BlcnRpZXMpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vY3VzdG9tZWxlbWVudCc7XG5pbXBvcnQgeyBQcm9wZXJ0eU9wdGlvbnMgfSBmcm9tICcuL3Byb3BlcnR5b3B0aW9ucyc7XG5cbmNvbnN0IG1hcDogTWFwPHR5cGVvZiBDdXN0b21FbGVtZW50LCBDbGFzc1Byb3BlcnRpZXM+ID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIENsYXNzUHJvcGVydHkgdHlwZVxuICovXG5leHBvcnQgdHlwZSBDbGFzc1Byb3BlcnRpZXMgPSBNYXA8c3RyaW5nIHwgc3ltYm9sLCBQcm9wZXJ0eU9wdGlvbnM+O1xuXG4vKipcbiAqIHJldHVybiBhbGwgZGVmaW5lZCBwcm9wZXJ0aWVzIGZvciBhIGNsYXNzXG4gKiBcbiAqIEBwYXJhbSB0YXJnZXQgQ2xhc3MgdG8gZ2V0IENsYXNzUHJvcGVydGllcyBmcm9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc1Byb3BlcnRpZXModGFyZ2V0OiB0eXBlb2YgQ3VzdG9tRWxlbWVudCk6IENsYXNzUHJvcGVydGllcyB7XG4gIGxldCBwcm9wZXJ0aWVzOiBDbGFzc1Byb3BlcnRpZXMgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghcHJvcGVydGllcykge1xuICAgIHByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgbWFwLnNldCh0YXJnZXQsIHByb3BlcnRpZXMpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vY3VzdG9tZWxlbWVudCc7XG5cbmNvbnN0IG1hcDogTWFwPHR5cGVvZiBDdXN0b21FbGVtZW50LCBQcm9wZXJ0eUludGVyY2VwdG9yPiA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBQcm9wZXJ0eUludGVyY2VwdG9yIFR5cGVcbiAqL1xuZXhwb3J0IHR5cGUgUHJvcGVydHlJbnRlcmNlcHRvciA9IE1hcDxzdHJpbmcsIEFycmF5PCgpID0+IHZvaWQ+PjtcblxuLyoqXG4gKiBnZXQgYWxsIGludGVyY2Vwcm9ycyBmb3IgYSBwcm9wZXJ0eSBvZiBhIGNsYXNzXG4gKiBcbiAqIEBwYXJhbSB0YXJnZXQgQ2xhc3MgdG8gZ2V0IGludGVyY2VwdG9ycyBmcm9tXG4gKiBAcGFyYW0gcHJvcGVydHkgcHJvcGVydHkgd2hpY2ggd2lsbCBiZSBpbnRlcmNlcHRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NQcm9wZXJ0eUludGVyY2VwdG9yKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQsIHByb3BlcnR5OiBzdHJpbmcpOiBBcnJheTwoKSA9PiB2b2lkPiB7XG4gIGxldCBwcm9wZXJ0aWVzOiBQcm9wZXJ0eUludGVyY2VwdG9yIHwgdW5kZWZpbmVkID0gbWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQodGFyZ2V0LCBwcm9wZXJ0aWVzKTtcbiAgfVxuICBsZXQgcHJvcGVydHlJbnRlcmNlcHRvciA9IHByb3BlcnRpZXMuZ2V0KHByb3BlcnR5KTtcbiAgaWYgKCFwcm9wZXJ0eUludGVyY2VwdG9yKSB7XG4gICAgcHJvcGVydHlJbnRlcmNlcHRvciA9IFtdO1xuICAgIHByb3BlcnRpZXMuc2V0KHByb3BlcnR5LCBwcm9wZXJ0eUludGVyY2VwdG9yKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHlJbnRlcmNlcHRvcjtcbn1cblxuLyoqXG4gKiBnZXQgYWxsIGludGVyY2VwdG9ycyBmb3IgYSBjbGFzc1xuICogXG4gKiBAcGFyYW0gdGFyZ2V0IENsYXNzIHRvIGdldCBpbnRlcmNlcHRvcnMgZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQ2xhc3NQcm9wZXJ0eUludGVyY2VwdG9ycyh0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50KTogUHJvcGVydHlJbnRlcmNlcHRvciB7XG4gIGxldCBwcm9wZXJ0aWVzOiBQcm9wZXJ0eUludGVyY2VwdG9yIHwgdW5kZWZpbmVkID0gbWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQodGFyZ2V0LCBwcm9wZXJ0aWVzKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL2N1c3RvbWVsZW1lbnQnO1xuXG5jb25zdCBtYXA6IE1hcDx0eXBlb2YgQ3VzdG9tRWxlbWVudCwgUHJvcGVydHlXYXRjaGVyPiA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBQcm9wZXJ0eVdhdGNoZXIgdHlwZVxuICovXG5leHBvcnQgdHlwZSBQcm9wZXJ0eVdhdGNoZXIgPSBNYXA8c3RyaW5nLCBBcnJheTwoKSA9PiB2b2lkPj47XG5cbi8qKlxuICogZ2V0IGFsbCBwcm9wZXJ0eSB3YXRjaGVycyBmb3IgcHJvcGVydHlcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IENsYXNzIHRvIGdldCBQcm9wZXJ0eVdhdGNoZXIgZnJvbVxuICogQHBhcmFtIHByb3BlcnR5IHByb3BlcnR5IHdoaWNoIGlzIHdhdGNoZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzUHJvcGVydHlXYXRjaGVyKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQsIHByb3BlcnR5OiBzdHJpbmcpOiBBcnJheTwoKSA9PiB2b2lkPiB7XG4gIGxldCBwcm9wZXJ0aWVzOiBQcm9wZXJ0eVdhdGNoZXIgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghcHJvcGVydGllcykge1xuICAgIHByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgbWFwLnNldCh0YXJnZXQsIHByb3BlcnRpZXMpO1xuICB9XG4gIGxldCBwcm9wZXJ0eVdhdGNoZXIgPSBwcm9wZXJ0aWVzLmdldChwcm9wZXJ0eSk7XG4gIGlmICghcHJvcGVydHlXYXRjaGVyKSB7XG4gICAgcHJvcGVydHlXYXRjaGVyID0gW107XG4gICAgcHJvcGVydGllcy5zZXQocHJvcGVydHksIHByb3BlcnR5V2F0Y2hlcik7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5V2F0Y2hlcjtcbn1cblxuLyoqXG4gKiBnZXQgYWxsIFByb3BlcnR5V2F0Y2hlciBmcm9tIGEgY2xhc3NcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IENsYXNzIHRvIGdldCBQcm9wZXJ0eVdhdGNoZXIgZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQ2xhc3NQcm9wZXJ0eVdhdGNoZXIodGFyZ2V0OiB0eXBlb2YgQ3VzdG9tRWxlbWVudCk6IFByb3BlcnR5V2F0Y2hlciB7XG4gIGxldCBwcm9wZXJ0aWVzOiBQcm9wZXJ0eVdhdGNoZXIgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghcHJvcGVydGllcykge1xuICAgIHByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgbWFwLnNldCh0YXJnZXQsIHByb3BlcnRpZXMpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vY3VzdG9tZWxlbWVudCc7XG5pbXBvcnQgeyBpc1N0YWdlMkNsYXNzRGVjb3JhdG9yLCBhcHBseVN0YWdlMnRvTGVnYWN5Q2xhc3NEZWNvcmF0b3IgfSBmcm9tICcuL3N0YWdlMi9zdGFnZTJkZWNvcmF0b3JzJztcbmltcG9ydCB7IENvbXBvbmVudCBhcyBDb21wb25lbnRTMiB9IGZyb20gJy4vc3RhZ2UyL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnRPcHRpb25zIH0gZnJvbSAnLi9jb21wb25lbnRvcHRpb25zJztcblxuLyoqXG4gKiBDb21wb25lbnQgZGVjb3JhdG9yLCBkZWZpbmVzIGEgbmV3IGNvbXBvbmVudCB0byBiZSB1c2VkIGFzIGEgY3VzdG9tIGVsZW1lbnQgY29tcGF0aWJsZSB3aXRoIHN0YWdlLTAsIFRTIGFuZCBzdGFnZS0yIGRlY29yYXRvciBpbXBsZW1lbnRhdGlvbnNcbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAoQ29tcG9uZW50T3B0aW9ucykgb3B0aW9ucyB0byBpbml0aWFsaXplIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudChvcHRpb25zOiBDb21wb25lbnRPcHRpb25zKTogQ2xhc3NEZWNvcmF0b3IgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmZ1bmN0aW9uLW5hbWVcbiAgcmV0dXJuICh0YXJnZXQ6IGFueSk6IGFueSA9PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgaWYgKGlzU3RhZ2UyQ2xhc3NEZWNvcmF0b3IodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudFMyKG9wdGlvbnMpKDxhbnk+dGFyZ2V0KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFwcGx5U3RhZ2UydG9MZWdhY3lDbGFzc0RlY29yYXRvcjx0eXBlb2YgQ3VzdG9tRWxlbWVudD4odGFyZ2V0LCBDb21wb25lbnRTMihvcHRpb25zKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tdW5zYWZlLWFueVxuICAgIH1cbiAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFByb3BlcnR5T3B0aW9ucyB9IGZyb20gJy4vcHJvcGVydHlvcHRpb25zJztcbmltcG9ydCB7IGdldENvbXBvbmVudFByb3BlcnRpZXMsIGdldEFsbENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHByb3BlcnRpZXMnO1xuaW1wb3J0IHsgZ2V0Q2xhc3NQcm9wZXJ0aWVzIH0gZnJvbSAnLi9jbGFzc3Byb3BlcnRpZXMnO1xuaW1wb3J0IHsgZ2V0Q2xhc3NFdmVudHMgfSBmcm9tICcuL2NsYXNzZXZlbnRzJztcbmltcG9ydCB7IEV2ZW50T3B0aW9ucyB9IGZyb20gJy4vZXZlbnRvcHRpb25zJztcblxuLyoqXG4gKiBDb21wb25lbnRPcHRpb25zIHR5cGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRDYXRhbG9nT3B0aW9ucyB7XG4gIHByb3BlcnRpZXM6IHsgW25hbWU6IHN0cmluZ106IFByb3BlcnR5T3B0aW9ucyB9O1xuICBldmVudHM6IEFycmF5PEV2ZW50T3B0aW9ucz47XG59XG5cbi8qKlxuICogQ29tcG9uZXRzIHR5cGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRzIHtcbiAgW3RhZzogc3RyaW5nXTogQ29tcG9uZW50Q2F0YWxvZ09wdGlvbnM7XG59XG5cbi8qKlxuICogcmV0dXJuIGEgY2F0YWxvZyBvZiBhbGwgY29udHJvbHMgcmVnaXN0ZXJlZCB3aXRoIGNlLWRlY29yYXRvcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBvbmVudENhdGFsb2coKTogQ29tcG9uZW50cyB7XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBnZXRBbGxDb21wb25lbnRzKCk7XG4gIGNvbnN0IGNhdGFsb2c6IENvbXBvbmVudHMgPSB7fTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFByb3BlcnRpZXMgPSBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKHZhbHVlKTtcblxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW25hbWU6IHN0cmluZ106IFByb3BlcnR5T3B0aW9ucyB9ID0ge307XG4gICAgQXJyYXkuZnJvbShnZXRDbGFzc1Byb3BlcnRpZXModmFsdWUpLmVudHJpZXMoKSkuZm9yRWFjaCgoW25hbWUsIG9wdGlvbnNdKSA9PiB7XG4gICAgICBwcm9wZXJ0aWVzW25hbWUudG9TdHJpbmcoKV0gPSBvcHRpb25zO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZXZlbnRzOiBBcnJheTxFdmVudE9wdGlvbnM+ID0gQXJyYXkuZnJvbShnZXRDbGFzc0V2ZW50cyh2YWx1ZSkudmFsdWVzKCkpO1xuXG4gICAgY2F0YWxvZ1tjb21wb25lbnRQcm9wZXJ0aWVzLnRhZ10gPSB7XG4gICAgICBwcm9wZXJ0aWVzLFxuICAgICAgZXZlbnRzLFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gY2F0YWxvZztcbn1cblxuaWYgKCEoPGFueT53aW5kb3cpWydDRURFQ09SQVRPUkNPTVBPTkVOVFMnXSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gKDxhbnk+d2luZG93KVsnQ0VERUNPUkFUT1JDT01QT05FTlRTJ10gPSBbXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxufSAvLyB0cy1saW50OmRpc2FibGUtbGluZVxuKDxhbnk+d2luZG93KVsnQ0VERUNPUkFUT1JDT01QT05FTlRTJ10ucHVzaChnZXRDb21wb25lbnRDYXRhbG9nKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vY3VzdG9tZWxlbWVudCc7XG5pbXBvcnQgeyBDb21wb25lbnRPcHRpb25zIH0gZnJvbSAnLi9jb21wb25lbnRvcHRpb25zJztcblxuY29uc3QgbWFwOiBNYXA8dHlwZW9mIEN1c3RvbUVsZW1lbnQsIEV4dGVuZGVkQ29tcG9uZW50T3B0aW9ucz4gPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogQ1NTU3R5bGVTaGVldEFsaWtlIGlmIGFkb3B0ZWRTdHlsc2hlZWV0cyBhcmUgbm90IHN1cHBvcnRlZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENTU1N0eWxlU2hlZXRBbGlrZSB7XG4gIGNzc1RleHQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBleHRlbmRlZCBvcHRpb25zIGZvciBiZXR0ZXIgc3R5bGUgaGFuZGxpbmdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFeHRlbmRlZENvbXBvbmVudE9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnRPcHRpb25zIHtcbiAgY3NzU3R5bGVzOiBBcnJheTxDU1NTdHlsZVNoZWV0IHwgQ1NTU3R5bGVTaGVldEFsaWtlPjtcbiAgc2hhZHlDU1NTdHlsZVNoZWV0QWRvcHRlZDogYm9vbGVhbjtcbiAgdGVtcGxhdGVDYWNoZTogVGVtcGxhdGVTdHJpbmdzQXJyYXk7XG59XG5cbi8qKlxuICogcmV0dXJuIGNvbXBvbmVudHByb3BlcnRpZXNcbiAqIEBwYXJhbSB0YXJnZXQgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQpOiBFeHRlbmRlZENvbXBvbmVudE9wdGlvbnMge1xuICByZXR1cm4gbWFwLmdldCh0YXJnZXQpO1xufVxuXG4vKipcbiAqIHNldCBjb21wb25lbnQgcHJvcGVydGllc1xuICogQHBhcmFtIHRhcmdldCBcbiAqIEBwYXJhbSBvcHRpb25zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29tcG9uZW50UHJvcGVydGllcyh0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50LCBvcHRpb25zOiBFeHRlbmRlZENvbXBvbmVudE9wdGlvbnMpOiB2b2lkIHtcbiAgbWFwLnNldCh0YXJnZXQsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIHJldHVybiBhbGwgY29tcG9uZW50cyBkZWZpbmVkIHdpdGggY2UtZGVjb3JhdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQ29tcG9uZW50cygpOiBBcnJheTx0eXBlb2YgQ3VzdG9tRWxlbWVudD4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShtYXAua2V5cygpKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbiAvKipcbiAgKiBDT01QT05FTlRfU1RBVEVcbiAgKi9cbmV4cG9ydCBlbnVtIENPTVBPTkVOVF9TVEFURSB7XG4gIENPTk5FQ1RFRCxcbiAgRElTQ09OTkVDVEVELFxuICBJTklULFxuICBDT05TVFJVQ1RFRCxcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IGNhbWVsVG9LZWJhcENhc2UsIGtlYmFwVG9DYW1lbENhc2UsIGRlc2VyaWFsaXplVmFsdWUsIHNlcmlhbGl6ZVZhbHVlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBnZXRDbGFzc1Byb3BlcnRpZXMgfSBmcm9tICcuL2NsYXNzcHJvcGVydGllcyc7XG5pbXBvcnQgeyBDT01QT05FTlRfU1RBVEUgfSBmcm9tICcuL2NvbXBvbmVudHN0YXRlJztcbmltcG9ydCB7IFBST1BFUlRZX1NUQVRFIH0gZnJvbSAnLi9wcm9wZXJ0eXN0YXRlJztcbmltcG9ydCB7IFByb3BlcnR5T3B0aW9ucywgQXR0cmlidXRlUHJvcENvbnZlcnRlciwgRnJvbUF0dHJpYnV0ZUNvbnZlcnRlciB9IGZyb20gJy4vcHJvcGVydHlvcHRpb25zJztcbmltcG9ydCB7IGdldENsYXNzUHJvcGVydHlXYXRjaGVyIH0gZnJvbSAnLi9jbGFzc3Byb3BlcnR5d2F0Y2hlcic7XG5pbXBvcnQgeyBnZXRDbGFzc1Byb3BlcnR5SW50ZXJjZXB0b3IgfSBmcm9tICcuL2NsYXNzcHJvcGVydHlpbnRlcmNlcHRvcnMnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGl0LWh0bWwnO1xuaW1wb3J0IHsgYWRkQ29tcG9uZW50VG9SZW5kZXJQaXBlbGluZSwgcmVtb3ZlQ29tcG9uZW50RnJvbVJlbmRlclBpcGVsaW5lIH0gZnJvbSAnLi9yZW5kZXJlci9waXBlUmVuZGVyZXInO1xuaW1wb3J0IHsgcmVuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZW5kZXJlci9yZW5kZXJDb21wb25lbnQnO1xuXG4vKipcbiAqIGludGVyZmFjZSBmb3IgYW4gaW5kZXhhYmxlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmRleGFibGVFbGVtZW50IHtcbiAgW2luZGV4OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbn1cblxuLyoqXG4gKiBkZWZpbmUgdGhlIHJlbmRlciBzdHJhdGVneSBmb3IgdGhlIGNvbnRyb2xcbiAqL1xuZXhwb3J0IGVudW0gUkVOREVSX1NUUkFURUdZIHtcbiAgREVGQVVMVCxcbiAgTEFaWSxcbiAgUElQRUxJTkVfRVhQRVJJTUVOVEFMLFxufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGFsbCBjdXN0b20gZWxlbWVudHNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEN1c3RvbUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHN0YXRpYyBfZnJvbUF0dHJpYnV0ZSh0aGlzOiB0eXBlb2YgQ3VzdG9tRWxlbWVudCwgbmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55LCBpbnN0YW5jZTogQ3VzdG9tRWxlbWVudCkge1xuICAgIGlmIChpbnN0YW5jZS5fcHJvcGVydHlTdGF0ZSAhPT0gUFJPUEVSVFlfU1RBVEUuUkVGTEVDVElORykge1xuICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0ga2ViYXBUb0NhbWVsQ2FzZShuYW1lKTtcbiAgICAgIGNvbnN0IGNsYXNzUHJvcGVydHk6IFByb3BlcnR5T3B0aW9ucyA9IGdldENsYXNzUHJvcGVydGllcyh0aGlzKS5nZXQocHJvcGVydHlOYW1lKTtcblxuICAgICAgb2xkVmFsdWUgPSAoPEluZGV4YWJsZUVsZW1lbnQ+aW5zdGFuY2UpW3Byb3BlcnR5TmFtZV07XG4gICAgICBpZiAoY2xhc3NQcm9wZXJ0eS5jb252ZXJ0ZXIpIHtcbiAgICAgICAgaWYgKCg8QXR0cmlidXRlUHJvcENvbnZlcnRlcj5jbGFzc1Byb3BlcnR5LmNvbnZlcnRlcikuZnJvbUF0dHJpYnV0ZSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gKDxBdHRyaWJ1dGVQcm9wQ29udmVydGVyPmNsYXNzUHJvcGVydHkuY29udmVydGVyKS5mcm9tQXR0cmlidXRlKG5ld1ZhbHVlLCBjbGFzc1Byb3BlcnR5LnR5cGUpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXVuc2FmZS1hbnlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9ICg8RnJvbUF0dHJpYnV0ZUNvbnZlcnRlcj5jbGFzc1Byb3BlcnR5LmNvbnZlcnRlcikobmV3VmFsdWUsIGNsYXNzUHJvcGVydHkudHlwZSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tdW5zYWZlLWFueVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IGRlc2VyaWFsaXplVmFsdWUobmV3VmFsdWUsIGNsYXNzUHJvcGVydHkudHlwZSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tdW5zYWZlLWFueVxuICAgICAgfVxuICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICBpbnN0YW5jZS5fcHJvcGVydHlTdGF0ZSA9IFBST1BFUlRZX1NUQVRFLlVQREFURV9GUk9NX0FUVFJJQlVURTtcbiAgICAgICAgdGhpcy5fZnJvbVByb3BlcnR5KHByb3BlcnR5TmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBpbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc3RhdGljIF9mcm9tUHJvcGVydHkodGhpczogdHlwZW9mIEN1c3RvbUVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcsIG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnksIGluc3RhbmNlOiBDdXN0b21FbGVtZW50KSB7XG4gICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgY29uc3QgY2xhc3NQcm9wZXJ0eTogUHJvcGVydHlPcHRpb25zID0gZ2V0Q2xhc3NQcm9wZXJ0aWVzKHRoaXMpLmdldChwcm9wZXJ0eUtleSk7XG5cbiAgICAgIGNvbnN0IGludGVyY2VwdG9yID0gZ2V0Q2xhc3NQcm9wZXJ0eUludGVyY2VwdG9yKHRoaXMsIHByb3BlcnR5S2V5KTtcbiAgICAgIG5ld1ZhbHVlID0gaW50ZXJjZXB0b3IucmVkdWNlKCh2YWx1ZSwgZnVuYykgPT4ge1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseShpbnN0YW5jZSwgW29sZFZhbHVlLCB2YWx1ZV0pIHx8IHZhbHVlO1xuICAgICAgfSwgbmV3VmFsdWUpO1xuXG4gICAgICB0aGlzLl9yZWZsZWN0QXR0cmlidXRlcyhjbGFzc1Byb3BlcnR5LCBpbnN0YW5jZSwgbmV3VmFsdWUsIHByb3BlcnR5S2V5KTtcblxuICAgICAgaW5zdGFuY2UuX3Byb3BlcnR5U3RhdGUgPSBQUk9QRVJUWV9TVEFURS5VUERBVEVfUFJPUEVSVFk7XG4gICAgICAoPEluZGV4YWJsZUVsZW1lbnQ+aW5zdGFuY2UpW3Byb3BlcnR5S2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgaW5zdGFuY2UuX3Byb3BlcnR5U3RhdGUgPSBQUk9QRVJUWV9TVEFURS5ESVJUWTtcblxuICAgICAgY29uc3Qgd2F0Y2hlciA9IGdldENsYXNzUHJvcGVydHlXYXRjaGVyKHRoaXMsIHByb3BlcnR5S2V5KTtcbiAgICAgIHdhdGNoZXIuZm9yRWFjaCgodmFsdWUpID0+IHZhbHVlLmFwcGx5KGluc3RhbmNlLCBbb2xkVmFsdWUsIG5ld1ZhbHVlXSkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXVuc2FmZS1hbnlcblxuICAgICAgaW5zdGFuY2Uuc2NoZWR1bGVSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX3JlZmxlY3RBdHRyaWJ1dGVzKGNsYXNzUHJvcGVydHk6IFByb3BlcnR5T3B0aW9ucywgaW5zdGFuY2U6IEN1c3RvbUVsZW1lbnQsIG5ld1ZhbHVlOiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoKGNsYXNzUHJvcGVydHkucmVmbGVjdEFzQXR0cmlidXRlIHx8IGNsYXNzUHJvcGVydHkucmVmbGVjdEFzQXR0cmlidXRlID09PSB1bmRlZmluZWQpICYmIGluc3RhbmNlLl9jb21wb25lbnRTdGF0ZSAhPT0gQ09NUE9ORU5UX1NUQVRFLklOSVQpIHtcbiAgICAgIGlmIChjbGFzc1Byb3BlcnR5LnR5cGUgPT09IEJvb2xlYW4gfHwgY2xhc3NQcm9wZXJ0eS50eXBlID09PSBTdHJpbmcgfHwgY2xhc3NQcm9wZXJ0eS50eXBlID09PSBOdW1iZXIgfHwgY2xhc3NQcm9wZXJ0eS5yZWZsZWN0QXNBdHRyaWJ1dGUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLl9wcm9wZXJ0eVN0YXRlICE9PSBQUk9QRVJUWV9TVEFURS5VUERBVEVfRlJPTV9BVFRSSUJVVEUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5fcHJvcGVydHlTdGF0ZSA9IFBST1BFUlRZX1NUQVRFLlJFRkxFQ1RJTkc7XG4gICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBmYWxzZSB8fCBuZXdWYWx1ZSA9PT0gbnVsbCB8fCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5yZW1vdmVBdHRyaWJ1dGUoY2FtZWxUb0tlYmFwQ2FzZShwcm9wZXJ0eUtleSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NQcm9wZXJ0eS5jb252ZXJ0ZXIgJiYgKDxBdHRyaWJ1dGVQcm9wQ29udmVydGVyPmNsYXNzUHJvcGVydHkuY29udmVydGVyKS50b0F0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLnNldEF0dHJpYnV0ZShjYW1lbFRvS2ViYXBDYXNlKHByb3BlcnR5S2V5KSwgKDxBdHRyaWJ1dGVQcm9wQ29udmVydGVyPmNsYXNzUHJvcGVydHkuY29udmVydGVyKS50b0F0dHJpYnV0ZShuZXdWYWx1ZSwgY2xhc3NQcm9wZXJ0eS50eXBlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbnN0YW5jZS5zZXRBdHRyaWJ1dGUoY2FtZWxUb0tlYmFwQ2FzZShwcm9wZXJ0eUtleSksIHNlcmlhbGl6ZVZhbHVlKG5ld1ZhbHVlLCBjbGFzc1Byb3BlcnR5LnR5cGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpOiBBcnJheTxzdHJpbmc+IHsgLy8gZmlsdGVyIG91dCBzdGF0ZXMgLT4gdHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ2V0Q2xhc3NQcm9wZXJ0aWVzKHRoaXMpKS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZVsxXS50eXBlICE9PSB1bmRlZmluZWQpLm1hcCgodmFsdWUpID0+IGNhbWVsVG9LZWJhcENhc2UodmFsdWVbMF0udG9TdHJpbmcoKSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9yZW5kZXJTdHJhdGVneTogUkVOREVSX1NUUkFURUdZID0gUkVOREVSX1NUUkFURUdZLkRFRkFVTFQ7XG4gIHByb3RlY3RlZCBfcmVuZGVyQ2FsbGJhY2tSZXNvbHZlcjogKCkgPT4gdm9pZCA9IG51bGw7XG5cbiAgcHJvdGVjdGVkIF9jb21wb25lbnRTdGF0ZTogQ09NUE9ORU5UX1NUQVRFID0gQ09NUE9ORU5UX1NUQVRFLklOSVQ7XG4gIHByb3RlY3RlZCBfcHJvcGVydHlTdGF0ZTogUFJPUEVSVFlfU1RBVEUgPSBQUk9QRVJUWV9TVEFURS5ESVJUWTtcblxuICBwcm90ZWN0ZWQgX3JlbmRlclNjaGVkdWxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3RlbXBsYXRlQ2FjaGU6IFRlbXBsYXRlU3RyaW5nc0FycmF5ID0gbnVsbDtcbiAgcHJvdGVjdGVkIF9maXJzdFJlbmRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJvdGVjdGVkIF9yZW5kZXJDb21wbGV0ZWRDYWxsYmFja3M6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG4gIHByb3RlY3RlZCBfY29uc3RydWN0ZWRDb21wbGV0ZWRDYWxsYmFja3M6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG4gIHByb3RlY3RlZCBfbGF5b3V0UkFGUmVmZXJlbmNlOiBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29tcG9uZW50U3RhdGUgPT09IENPTVBPTkVOVF9TVEFURS5JTklUKSB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFN0YXRlID0gQ09NUE9ORU5UX1NUQVRFLkNPTlNUUlVDVEVEO1xuICAgICAgICB0aGlzLl9jb25zdHJ1Y3RlZENvbXBsZXRlZENhbGxiYWNrcy5mb3JFYWNoKCh2YWx1ZSkgPT4gdmFsdWUoKSk7XG4gICAgICAgIHRoaXMuX2NvbnN0cnVjdGVkQ29tcGxldGVkQ2FsbGJhY2tzID0gW107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogc2hvdWxkIHJldHVybiB0aGUgRE9NIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBhYnN0cmFjdCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQ7XG5cbiAgLyoqXG4gICAqIGlzIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBET01cbiAgICovXG4gIGNvbXBvbmVudENvbm5lY3RlZCgpIHsgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgLyoqXG4gICAqIGlzIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGRldHRhY2hlZCBmcm9tIHRoZSBET01cbiAgICovXG4gIGNvbXBvbmVudERpc2Nvbm5lY3RlZCgpIHsgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgLyoqIFxuICAgKiBpcyBjYWxsZWQganVzdCBiZWZvcmUgcmVuZGVyKCkgd2lsbCBiZSBleGV4dXRlZCBcbiAgICovXG4gIGNvbXBvbmVudFdpbGxSZW5kZXIoKSB7IH0gLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIC8qKiBcbiAgICogaXMgY2FsbGVkIGp1c3QgYWZ0ZXIgcmVuZGVyKCkgd2lsbCBiZSBleGV4dXRlZCBcbiAgICovXG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHsgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgLyoqIFxuICAgKiBpcyBjYWxsZWQganVzdCBhZnRlciB0aGUgZmlyc3QgcmVuZGVyKClcbiAgICovXG4gIGNvbXBvbmVudEZpcnN0UmVuZGVyKCkgeyB9IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICAvKipcbiAgICogaXMgY2FsbGVkIGFmdGVyIHJlbmRlciBhbmQgYnJvc2VyIGxheW91dGluZ1xuICAgKi9cbiAgY29tcG9uZW50RGlkTGF5b3V0KCkgeyB9IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICAvKipcbiAgICogcmV0dXJuIGVsZW1lbnQgd2hyZSB0aGUgRE9NIGZyb20gcmVuZGVyIHdpbGwgYmUgcmVuZGVyZWQgdG9cbiAgICovXG4gIHJlbmRlclRvRWxlbWVudCgpOiBFbGVtZW50IHwgU2hhZG93Um9vdCB7XG4gICAgaWYgKCF0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290O1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBhIFByb21pc2Ugd2hpY2ggd2lsbCBiZSByZXNvbHZlZCBhZnRlclxuICAgKiBjb25zdHJ1Y3Rpb24gb2YgdGhlIGVsZW1lbnRcbiAgICogXG4gICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD4gcHJvbWlzZSB3aGljaCB3aWxsIHJlc29sdmUgYWZ0ZXIgY29uc3RydWN0aW9uIGlzIGNvbXBsZXRlXG4gICAqL1xuICBhc3luYyB3YWl0Rm9yQ29uc3RydWN0aW9uKCk6IFByb21pc2U8e30+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX2NvbnN0cnVjdGVkQ29tcGxldGVkQ2FsbGJhY2tzLnB1c2gocmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIGEgUHJvbWlzZSB3aGljaCB3aWxsIGJlIHJlc29sdmVkIGFmdGVyIGFcbiAgICogc3VjY2Vzc2Z1bGwgcmVuZGVyXG4gICAqIFxuICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gICAqL1xuICBhc3luYyB3YWl0Rm9yUmVuZGVyKCk6IFByb21pc2U8e30+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlckNvbXBsZXRlZENhbGxiYWNrcy5wdXNoKHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjaGVkdWxlIGEgbmV3IHJlbmRlciAodGhlIHJlbmRlciB3aWxsIG9ubHkgYmUgc2NoZWR1bGVkKSBpZlxuICAgKiB0aGUgY29tcG9uZW50c3RhdGUgaXMgQ09OTkVDVEVEIGFuZCBwcm9wZXJ0eXN0YXRlIGlzIERJUlRZXG4gICAqIFxuICAgKiBmb3JjZSB3aWxsIGZvcmNlIGEgcmUtcmVuZGVyXG4gICAqIFxuICAgKiBAcGFyYW0gZm9yY2UgZm9yY2UgdGhlIHJlLXJlbmRlclxuICAgKi9cbiAgc2NoZWR1bGVSZW5kZXIoZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICgoKHRoaXMuX2NvbXBvbmVudFN0YXRlID09PSBDT01QT05FTlRfU1RBVEUuQ09OTkVDVEVEICYmXG4gICAgICB0aGlzLl9wcm9wZXJ0eVN0YXRlID09PSBQUk9QRVJUWV9TVEFURS5ESVJUWSkpICYmXG4gICAgICAhdGhpcy5fcmVuZGVyU2NoZWR1bGVkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgc3dpdGNoICh0aGlzLl9yZW5kZXJTdHJhdGVneSkge1xuICAgICAgICBjYXNlIFJFTkRFUl9TVFJBVEVHWS5QSVBFTElORV9FWFBFUklNRU5UQUw6XG4gICAgICAgICAgYWRkQ29tcG9uZW50VG9SZW5kZXJQaXBlbGluZSh0aGlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBSRU5ERVJfU1RSQVRFR1kuTEFaWTpcbiAgICAgICAgICBpZiAoIWZvcmNlKSB7XG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUpO1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJDYWxsYmFja1Jlc29sdmVyID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZW5kZXJDb21wb25lbnQuYXBwbHkodGhpcyk7XG4gICAgICAgICAgICAgIHRoaXMuX3JlbmRlckNhbGxiYWNrUmVzb2x2ZXIgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJDb21wb25lbnQuYXBwbHkodGhpcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmb3JjZSkge1xuICAgICAgaWYgKHRoaXMuX3JlbmRlclNjaGVkdWxlZCkge1xuICAgICAgICBpZiAodGhpcy5fcmVuZGVyQ2FsbGJhY2tSZXNvbHZlcikge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyQ2FsbGJhY2tSZXNvbHZlcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9yZW5kZXJTdHJhdGVneSA9PT0gUkVOREVSX1NUUkFURUdZLlBJUEVMSU5FX0VYUEVSSU1FTlRBTCkge1xuICAgICAgICAgIHJlbW92ZUNvbXBvbmVudEZyb21SZW5kZXJQaXBlbGluZSh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47IC8vIHJlbmRlciBhbHJlYWR5IHNjaGVkdWxlZCBhcyBtaWNyb3Rhc2tcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlbmRlckNvbXBvbmVudC5hcHBseSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBidWlsZC1pbiBmdW5jdGlvbiBwbGVhc2UgZG8gbm90IG92ZXJyaWRlXG4gICAqL1xuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5fY29tcG9uZW50U3RhdGUgPT09IENPTVBPTkVOVF9TVEFURS5JTklUIHx8IHRoaXMuX2NvbXBvbmVudFN0YXRlID09PSBDT01QT05FTlRfU1RBVEUuQ09OU1RSVUNURUQpIHsgLy8gb24gZmlyc3QgY29ubmVjdGVkIHJlZmxlY3QgYXR0cmlidXRlc1xuICAgICAgdGhpcy5fY29tcG9uZW50U3RhdGUgPSBDT01QT05FTlRfU1RBVEUuQ09OTkVDVEVEO1xuICAgICAgY29uc3QgX29yaWdpbmFsUHJvcGVydHlTdGF0ZSA9IHRoaXMuX3Byb3BlcnR5U3RhdGU7XG4gICAgICB0aGlzLl9wcm9wZXJ0eVN0YXRlID0gUFJPUEVSVFlfU1RBVEUuUkVGTEVDVElORztcbiAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBnZXRDbGFzc1Byb3BlcnRpZXModGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgQ3VzdG9tRWxlbWVudCk7XG4gICAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcFZhbHVlID0gKDxJbmRleGFibGVFbGVtZW50PnRoaXMpW2tleS50b1N0cmluZygpXTtcbiAgICAgICAgaWYgKHByb3BWYWx1ZSB8fCBwcm9wVmFsdWUgPT09IDApIHtcbiAgICAgICAgICAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgQ3VzdG9tRWxlbWVudCkuX3JlZmxlY3RBdHRyaWJ1dGVzKHZhbHVlLCB0aGlzLCBwcm9wVmFsdWUsIGtleS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9wcm9wZXJ0eVN0YXRlID0gX29yaWdpbmFsUHJvcGVydHlTdGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tcG9uZW50U3RhdGUgPSBDT01QT05FTlRfU1RBVEUuQ09OTkVDVEVEO1xuICAgIH1cbiAgICB0aGlzLmNvbXBvbmVudENvbm5lY3RlZCgpO1xuICAgIHRoaXMuc2NoZWR1bGVSZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBidWlsZC1pbiBmdW5jdGlvbiBwbGVhc2UgZG8gbm90IG92ZXJyaWRlXG4gICAqL1xuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9jb21wb25lbnRTdGF0ZSA9IENPTVBPTkVOVF9TVEFURS5ESVNDT05ORUNURUQ7XG4gICAgdGhpcy5jb21wb25lbnREaXNjb25uZWN0ZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBidWlsZC1pbiBmdW5jdGlvbiBwbGVhc2UgZG8gbm90IG92ZXJyaWRlXG4gICAqL1xuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQpLl9mcm9tQXR0cmlidXRlKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBzaG9ydGhhbmQgZm9yIGxhenkgcmVuZGVyZWQgY3VzdG9tIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExhenlDdXN0b21FbGVtZW50IGV4dGVuZHMgQ3VzdG9tRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyU3RyYXRlZ3kgPSBSRU5ERVJfU1RSQVRFR1kuTEFaWTtcbiAgfVxufVxuXG4vKiogaGVscGVyIGZvciBzaGltbWVkIGJyb3dzZXJzICovXG4oZnVuY3Rpb24oKSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgaWYgKCdTaGFkeUNTUycgaW4gd2luZG93ICYmIHR5cGVvZiB3aW5kb3cuU2hhZHlDU1MuU2NvcGluZ1NoaW0ucHJlcGFyZUFkb3B0ZWRDc3NUZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBjaGVjayB5b3VyIFwiQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzXCIgcG9seWZpbGwsIG1pbmltdW0gdmVyc2lvbiAyLjIuNiByZXF1aXJlZCcpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIH1cbn0pKCk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBpc1N0YWdlMk1ldGhvZERlY29yYXRvciwgaXNTdGFnZTJGaWVsZERlY29yYXRvciwgYXBwbHlTdGFnZTJUb0xlZ2FjeUZpZWxkRGVjb3JhdG9yIH0gZnJvbSAnLi9zdGFnZTIvc3RhZ2UyZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBEZXByZWNhdGVkIGFzIERlcHJlY2F0ZWRTMiB9IGZyb20gJy4vc3RhZ2UyL2RlcHJlY2F0ZWQnO1xuaW1wb3J0IHsgRml4ZWRQcm9wZXJ0eURlY29yYXRvciB9IGZyb20gJy4vcHJvcCc7XG5cbi8qKlxuICogRW1pdHMgYSBkZXByZWNhdGVkIHdhcm5pbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIERlcHJlY2F0ZWQobWVzc2FnZT86IHN0cmluZyk6IEZpeGVkUHJvcGVydHlEZWNvcmF0b3IgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIHJldHVybiAodGFyZ2V0OiB0eXBlb2YgT2JqZWN0LFxuICAgICAgICAgIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsXG4gICAgICAgICAgZGVzY3JpcHRvcjogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55Pik6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPGFueT4gfCBhbnkgfCB2b2lkID0+IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICBpZiAoaXNTdGFnZTJNZXRob2REZWNvcmF0b3IodGFyZ2V0KSB8fCBpc1N0YWdlMkZpZWxkRGVjb3JhdG9yKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBEZXByZWNhdGVkUzIobWVzc2FnZSkoPGFueT50YXJnZXQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXBwbHlTdGFnZTJUb0xlZ2FjeUZpZWxkRGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IsIERlcHJlY2F0ZWRTMihtZXNzYWdlKSk7XG4gICAgfVxuICB9O1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vY3VzdG9tZWxlbWVudCc7XG5pbXBvcnQgeyBpc1N0YWdlMkZpZWxkRGVjb3JhdG9yLCBhcHBseVN0YWdlMlRvTGVnYWN5RmllbGREZWNvcmF0b3IgfSBmcm9tICcuL3N0YWdlMi9zdGFnZTJkZWNvcmF0b3JzJztcbmltcG9ydCB7IEV2ZW50IGFzIEV2ZW50czIgfSBmcm9tICcuL3N0YWdlMi9ldmVudCc7XG5pbXBvcnQgeyBFdmVudE9wdGlvbnMgfSBmcm9tICcuL2V2ZW50b3B0aW9ucyc7XG5cbi8qKlxuICogUHJvcGVydHlEZWNvcmF0b3IgLT4gZml4ZWQgZm9yIGJhYmVsIGluaXRpYWxpemVyXG4gKi9cbmV4cG9ydCB0eXBlIEZpeGVkUHJvcGVydHlEZWNvcmF0b3IgPSAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIGRlc2NyaXB0b3I/OiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcblxuLyoqXG4gKiBFdmVudCBkZWNvcmF0b3IgZm9yIGFuIGV2ZW50IGVtaXR0ZXIsIGNvbXBhdGlibGUgd2l0aCBzdGFnZS0wLCBUUyBhbmQgc3RhZ2UtMiBkZWNvcmF0b3JzXG4gKlxuICogQHBhcmFtIG5hbWUgKHN0cmluZykgb3B0aW9uYWw6IG5hbWUgb2YgdGhlIGV2ZW50LCBpZiBubyBzdGF0ZSwgcHJvcGVydHkgbmFtZSB3aWxsIGJlIHVzZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50KG9wdGlvbnM/OiBFdmVudE9wdGlvbnMgfCBzdHJpbmcpOiBGaXhlZFByb3BlcnR5RGVjb3JhdG9yIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpmdW5jdGlvbi1uYW1lXG4gIHJldHVybiAodGFyZ2V0OiB0eXBlb2YgQ3VzdG9tRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCwgZGVzY3JpcHRvcj86IFByb3BlcnR5RGVzY3JpcHRvcik6IFByb3BlcnR5RGVzY3JpcHRvciB8IGFueSA9PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgaWYgKGlzU3RhZ2UyRmllbGREZWNvcmF0b3IodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIEV2ZW50czIob3B0aW9ucykoPGFueT50YXJnZXQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXBwbHlTdGFnZTJUb0xlZ2FjeUZpZWxkRGVjb3JhdG9yPEN1c3RvbUVsZW1lbnQsIHR5cGVvZiBDdXN0b21FbGVtZW50Pih0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yLCBFdmVudHMyKG9wdGlvbnMpKTtcbiAgICB9XG4gIH07XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5leHBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudG9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudGVtaXR0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9wZXJ0eW9wdGlvbnMnO1xuZXhwb3J0IHsgQ3VzdG9tRWxlbWVudCwgTGF6eUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL2N1c3RvbWVsZW1lbnQnO1xuXG5leHBvcnQgeyBFdmVudH0gZnJvbSAnLi9ldmVudCc7XG5leHBvcnQgeyBQcm9wIH0gZnJvbSAnLi9wcm9wJztcbmV4cG9ydCB7IFdhdGNoIH0gZnJvbSAnLi93YXRjaCc7XG5leHBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vcHJvcCc7XG5leHBvcnQgeyBUcmFjZSB9IGZyb20gJy4vdHJhY2UnO1xuZXhwb3J0IHsgRGVwcmVjYXRlZCB9IGZyb20gJy4vZGVwcmVjYXRlZCc7XG5leHBvcnQgeyBJbnRlcmNlcHRvciB9IGZyb20gJy4vaW50ZXJjZXB0b3InO1xuZXhwb3J0IHsgQ09NUE9ORU5UX1NUQVRFIH0gZnJvbSAnLi9jb21wb25lbnRzdGF0ZSc7XG5cbmV4cG9ydCB7IGdldENvbXBvbmVudENhdGFsb2d9IGZyb20gJy4vY29tcG9uZW50Y2F0YWxvZyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbGl0LWh0bWwnO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vY3VzdG9tZWxlbWVudCc7XG5pbXBvcnQgeyBpc1N0YWdlMk1ldGhvZERlY29yYXRvciwgYXBwbHlTdGFnZTJUb0xlZ2FjeU1ldGhvZERlY29yYXRvciB9IGZyb20gJy4vc3RhZ2UyL3N0YWdlMmRlY29yYXRvcnMnO1xuaW1wb3J0IHsgSW50ZXJjZXB0b3IgYXMgSW50ZXJjZXB0b3JTMiB9IGZyb20gJy4vc3RhZ2UyL2ludGVyY2VwdG9yJztcblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBpbnRlcmNlcHRvciBmb3IgcHJvcGVydHkgY2hhbmdlc1xuICpcbiAqIEBwYXJhbSBwcm9wZXJ0eSBwcm9wZXJ0eSB0byBpbnRlcmNlcHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEludGVyY2VwdG9yKHByb3BlcnR5OiBzdHJpbmcpOiBNZXRob2REZWNvcmF0b3IgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICByZXR1cm4gKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPGFueT4pOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+IHwgYW55IHwgdm9pZCA9PiB7XG4gICAgaWYgKGlzU3RhZ2UyTWV0aG9kRGVjb3JhdG9yKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBJbnRlcmNlcHRvclMyKHByb3BlcnR5KSg8YW55PnRhcmdldCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFwcGx5U3RhZ2UyVG9MZWdhY3lNZXRob2REZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvciwgSW50ZXJjZXB0b3JTMihwcm9wZXJ0eSkpO1xuICAgIH1cbiAgfTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJ2xpdC1odG1sJztcbmV4cG9ydCB7IHJlbmRlciBhcyBzaGFkeVJlbmRlciB9IGZyb20gJ2xpdC1odG1sL2xpYi9zaGFkeS1yZW5kZXInO1xuXG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2FzeW5jLWFwcGVuZCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2FzeW5jLXJlcGxhY2UnO1xuZXhwb3J0ICogZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jYWNoZSc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2d1YXJkJztcbmV4cG9ydCAqIGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3JlcGVhdCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sJztcbmV4cG9ydCAqIGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWwnO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0ICcuL3JlZmxlY3QnOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgUHJvcCBhcyBQcm9wUzIsIFN0YXRlIGFzIFN0YXRlUzIgfSBmcm9tICcuL3N0YWdlMi9wcm9wJztcbmltcG9ydCB7IGlzU3RhZ2UyRmllbGREZWNvcmF0b3IsIGFwcGx5U3RhZ2UyVG9MZWdhY3lGaWVsZERlY29yYXRvciB9IGZyb20gJy4vc3RhZ2UyL3N0YWdlMmRlY29yYXRvcnMnO1xuaW1wb3J0IHsgUHJvcGVydHlPcHRpb25zIH0gZnJvbSAnLi9wcm9wZXJ0eW9wdGlvbnMnO1xuXG4vKipcbiAqIGZpeGVkIGRlY29yYXRvciBmb3IgYmFiZWxzIGluaXRpYWxpemVyXG4gKi9cbmV4cG9ydCB0eXBlIEZpeGVkUHJvcGVydHlEZWNvcmF0b3IgPSAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIGRlc2NyaXB0b3I/OiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcblxuLyoqXG4gKiBQcm9wZXJ0eSBkZWNvcmF0b3IsIGhhbmRsZXMgYXR0cmlidXRlIHJlZmxlY3Rpb24gYW5kIHR5cGUgY2hlY2tpbmdcbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyBpbml0aWFsaXplciBvcHRpb25zIGZvciB0aGUgcHJvcGVydHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFByb3Aob3B0aW9ucz86IFByb3BlcnR5T3B0aW9ucyk6IEZpeGVkUHJvcGVydHlEZWNvcmF0b3IgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmZ1bmN0aW9uLW5hbWVcbiAgcmV0dXJuICh0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdG9yPzogUHJvcGVydHlEZXNjcmlwdG9yKTogUHJvcGVydHlEZXNjcmlwdG9yIHwgYW55ID0+IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICBpZiAoaXNTdGFnZTJGaWVsZERlY29yYXRvcih0YXJnZXQpKSB7XG4gICAgICBpZiAob3B0aW9ucyAmJiAhb3B0aW9ucy50eXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdHlwZSBub3QgZGVmaW5lZCBmb3IgcHJvcGVydHlgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9wUzIob3B0aW9ucykoPGFueT50YXJnZXQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMudHlwZSkge1xuICAgICAgICBpZiAoIW9wdGlvbnMpIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIG9wdGlvbnMudHlwZSA9ICg8YW55PlJlZmxlY3QpLmdldE1ldGFkYXRhKCdkZXNpZ246dHlwZScsIHRhcmdldCwgcHJvcGVydHlLZXkudG9TdHJpbmcoKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcHBseVN0YWdlMlRvTGVnYWN5RmllbGREZWNvcmF0b3I8Q3VzdG9tRWxlbWVudCwgdHlwZW9mIEN1c3RvbUVsZW1lbnQ+KHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IsIFByb3BTMihvcHRpb25zKSk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFN0YXRlIGRlY29yYXRvciwgaGFuZGxlcyByZS1yZW5kZXJpbmcgYnV0IHdpdGhvdXQgYXR0cmlidXRlIHJlZmxlY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFN0YXRlKCk6IEZpeGVkUHJvcGVydHlEZWNvcmF0b3IgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmZ1bmN0aW9uLW5hbWVcbiAgcmV0dXJuICh0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdG9yPzogUHJvcGVydHlEZXNjcmlwdG9yKTogUHJvcGVydHlEZXNjcmlwdG9yIHwgYW55ID0+IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICBpZiAoaXNTdGFnZTJGaWVsZERlY29yYXRvcih0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gU3RhdGVTMigpKDxhbnk+dGFyZ2V0KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFwcGx5U3RhZ2UyVG9MZWdhY3lGaWVsZERlY29yYXRvcjxDdXN0b21FbGVtZW50LCB0eXBlb2YgQ3VzdG9tRWxlbWVudD4odGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvciwgU3RhdGVTMigpKTtcbiAgICB9XG4gIH07XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFBST1BFUlRZX1NUQVRFXG4gKi9cbmV4cG9ydCBlbnVtIFBST1BFUlRZX1NUQVRFIHtcbiAgSU5JVCxcbiAgRElSVFksXG4gIFVQREFURV9QUk9QRVJUWSxcbiAgUkVGTEVDVElORyxcbiAgVVBEQVRFX0ZST01fQVRUUklCVVRFLFxuICBVUERBVEVELFxuICBFWEVDVVRJTkdfV0FUQ0hFUixcbn1cbiIsImltcG9ydCB7IGlzU3RhZ2UyRmllbGREZWNvcmF0b3IsIGlzU3RhZ2UyTWV0aG9kRGVjb3JhdG9yLCBNZXRob2REZWNvcmF0b3JSZXN1bHQsIEZpZWxkRGVjb3JhdG9yUmVzdWx0LCBDbGFzc0RlY29yYXRvclJlc3VsdCwgRmllbGREZWNvcmF0b3JEZXNjcmlwdG9yLCBNZXRob2REZWNvcmF0b3JEZXNjaXB0b3IgfSBmcm9tIFwiLi9zdGFnZTIvc3RhZ2UyZGVjb3JhdG9yc1wiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG4vLyByZWZsZWN0IHBvbHlmaWxsIGluIGNhc2UgcmVmbGVjdC1tZXRhZGF0YSBwYWNrYWdlIG5vdCBpbnN0YWxsZWRcbmNvbnN0IG9yaWdSZWZsZWN0OiBhbnkgPSAoPGFueT53aW5kb3cpLlJlZmxlY3QgfHwge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG5cbnR5cGUgTWV0YWRhdGFNYXAgPSBNYXA8c3RyaW5nLCBhbnk+OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxudHlwZSBQcm9wTWFwID0gTWFwPHN0cmluZyB8IHN5bWJvbCwgTWV0YWRhdGFNYXA+O1xudHlwZSBUYXJnZXRNYXAgPSBNYXA8T2JqZWN0LCBQcm9wTWFwPjtcbnR5cGUgRGVjb3JhdG9yRnVuYyA9ICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCwgbW9yZTogYW55KSA9PiBhbnkgfCBQcm9wZXJ0eURlc2NyaXB0b3I7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG5cbmNvbnN0IHJlZmxlY3RNYXA6IFRhcmdldE1hcCA9IG5ldyBNYXAoKTtcblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChtYXA6IFByb3BNYXAsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpOiBNZXRhZGF0YU1hcCB7XG4gIGxldCBtZXRhZGF0YU1hcDogTWV0YWRhdGFNYXAgPSBtYXAuZ2V0KHByb3BlcnR5KTtcbiAgaWYgKCFtZXRhZGF0YU1hcCkge1xuICAgIG1ldGFkYXRhTWFwID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQocHJvcGVydHksIG1ldGFkYXRhTWFwKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhZGF0YU1hcDtcbn1cblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVQcm9wTWFwKG1hcDogVGFyZ2V0TWFwLCB0YXJnZXQ6IE9iamVjdCk6IFByb3BNYXAge1xuICBsZXQgcHJvcE1hcDogUHJvcE1hcCA9IG1hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKCFwcm9wTWFwKSB7XG4gICAgcHJvcE1hcCA9IG5ldyBNYXAoKTtcbiAgICBtYXAuc2V0KHRhcmdldCwgcHJvcE1hcCk7XG4gIH1cblxuICByZXR1cm4gcHJvcE1hcDtcbn1cblxuZnVuY3Rpb24gZGVjb3JhdGUoZGVjb3JhdG9yczogQXJyYXk8RGVjb3JhdG9yRnVuYz4sIHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdGlvbjogYW55KTogYW55IHwgdm9pZCB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIGlmICh0eXBlb2Ygb3JpZ1JlZmxlY3QgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvcmlnUmVmbGVjdC5kZWNvcmF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBvcmlnUmVmbGVjdC5kZWNvcmF0ZSAhPT0gZGVjb3JhdGUpIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby11bnNhZmUtYW55XG4gICAgb3JpZ1JlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRpb24pOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXVuc2FmZS1hbnlcbiAgfVxuICBjb25zdCBkZXNjaXB0b3I6IGFueSA9IGRlY29yYXRvcnMucmV2ZXJzZSgpIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgLnJlZHVjZTxQcm9wZXJ0eURlc2NyaXB0b3I+KChwcmV2VmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4gKGN1cnJlbnRWYWx1ZSh0YXJnZXQsIHByb3BlcnR5S2V5LCBwcmV2VmFsdWUpIHx8IHByZXZWYWx1ZSksIGRlc2NyaXB0aW9uKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICByZXR1cm4gZGVzY2lwdG9yIHx8IGRlc2NyaXB0aW9uO1xufVxuXG5mdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleTogc3RyaW5nLCBtZXRhRGF0YVZhbHVlOiBhbnkpOiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHZvaWQgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBpZiAodHlwZW9mIG9yaWdSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb3JpZ1JlZmxlY3QubWV0YWRhdGEgPT09ICdmdW5jdGlvbicgJiYgb3JpZ1JlZmxlY3QubWV0YWRhdGEgIT09IG1ldGFkYXRhKSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tdW5zYWZlLWFueVxuICAgIHJldHVybiBvcmlnUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YURhdGFWYWx1ZSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tdW5zYWZlLWFueVxuICB9IGVsc2Uge1xuXG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCk6IHZvaWQgfCBNZXRob2REZWNvcmF0b3JSZXN1bHQ8YW55LCBhbnk+IHwgRmllbGREZWNvcmF0b3JSZXN1bHQ8YW55LCBhbnk+IHwgQ2xhc3NEZWNvcmF0b3JSZXN1bHQ8YW55PiA9PiB7XG4gICAgICBpZiAoaXNTdGFnZTJGaWVsZERlY29yYXRvcih0YXJnZXQpIHx8IGlzU3RhZ2UyTWV0aG9kRGVjb3JhdG9yKHRhcmdldCkpIHtcbiAgICAgICAgaWYgKGlzU3RhZ2UyRmllbGREZWNvcmF0b3IodGFyZ2V0KSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdDogRmllbGREZWNvcmF0b3JSZXN1bHQ8YW55LCBhbnk+ID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRvcjogKDxGaWVsZERlY29yYXRvckRlc2NyaXB0b3I+dGFyZ2V0KS5kZXNjcmlwdG9yLFxuICAgICAgICAgICAga2V5OiAoPEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvcj50YXJnZXQpLmtleSxcbiAgICAgICAgICAgIGtpbmQ6ICg8RmllbGREZWNvcmF0b3JEZXNjcmlwdG9yPnRhcmdldCkua2luZCxcbiAgICAgICAgICAgIHBsYWNlbWVudDogKDxGaWVsZERlY29yYXRvckRlc2NyaXB0b3I+dGFyZ2V0KS5wbGFjZW1lbnQsXG4gICAgICAgICAgICBmaW5pc2hlcjogKGZpbmlzaGVyVGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BNYXA6IFByb3BNYXAgPSBnZXRPckNyZWF0ZVByb3BNYXAocmVmbGVjdE1hcCwgZmluaXNoZXJUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChwcm9wTWFwLCAoPEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvcj50YXJnZXQpLmtleSkuc2V0KG1ldGFkYXRhS2V5LCBtZXRhRGF0YVZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIGlmIChpc1N0YWdlMk1ldGhvZERlY29yYXRvcih0YXJnZXQpKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0OiBNZXRob2REZWNvcmF0b3JSZXN1bHQ8YW55LCBhbnk+ID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRvcjogKDxNZXRob2REZWNvcmF0b3JEZXNjaXB0b3I+dGFyZ2V0KS5kZXNjcmlwdG9yLFxuICAgICAgICAgICAga2V5OiAoPE1ldGhvZERlY29yYXRvckRlc2NpcHRvcj50YXJnZXQpLmtleSxcbiAgICAgICAgICAgIGtpbmQ6ICg8TWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yPnRhcmdldCkua2luZCxcbiAgICAgICAgICAgIHBsYWNlbWVudDogKDxNZXRob2REZWNvcmF0b3JEZXNjaXB0b3I+dGFyZ2V0KS5wbGFjZW1lbnQsXG4gICAgICAgICAgICBmaW5pc2hlcjogKGZpbmlzaFRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm9wTWFwOiBQcm9wTWFwID0gZ2V0T3JDcmVhdGVQcm9wTWFwKHJlZmxlY3RNYXAsIGZpbmlzaFRhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHByb3BNYXAsICg8TWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yPnRhcmdldCkua2V5KS5zZXQobWV0YWRhdGFLZXksIG1ldGFEYXRhVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXByb3BlcnR5KSB7XG4gICAgICAgICAgcHJvcGVydHkgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wTWFwOiBQcm9wTWFwID0gZ2V0T3JDcmVhdGVQcm9wTWFwKHJlZmxlY3RNYXAsIHRhcmdldCk7XG4gICAgICAgIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAocHJvcE1hcCwgcHJvcGVydHkpLnNldChtZXRhZGF0YUtleSwgbWV0YURhdGFWYWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleTogc3RyaW5nLCB0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlLZXk/OiBzdHJpbmcgfCBzeW1ib2wpOiBhbnkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBpZiAodHlwZW9mIG9yaWdSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb3JpZ1JlZmxlY3QuZ2V0TWV0YWRhdGEgPT09ICdmdW5jdGlvbicgJiYgb3JpZ1JlZmxlY3QuZ2V0TWV0YWRhdGEgIT09IGdldE1ldGFkYXRhKSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tdW5zYWZlLWFueVxuICAgIHJldHVybiBvcmlnUmVmbGVjdC5nZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tdW5zYWZlLWFueVxuICB9IGVsc2Uge1xuXG4gICAgcmV0dXJuIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoZ2V0T3JDcmVhdGVQcm9wTWFwKHJlZmxlY3RNYXAsIHRhcmdldCksIHByb3BlcnR5S2V5KS5nZXQobWV0YWRhdGFLZXkpO1xuICB9XG59XG5cbmlmICghKDxhbnk+d2luZG93KS5SZWZsZWN0KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICg8YW55PndpbmRvdykuUmVmbGVjdCA9IHsgZGVjb3JhdGUsIGdldE1ldGFkYXRhLCBtZXRhZGF0YSB9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAoPGFueT53aW5kb3cpLlJlZmxlY3RQb29ybHlGaWxsID0geyBkZWNvcmF0ZSwgZ2V0TWV0YWRhdGEsIG1ldGFkYXRhIH07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG59IGVsc2Uge1xuICBpZiAoISg8YW55PndpbmRvdykuUmVmbGVjdC5kZWNvcmF0ZSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgKDxhbnk+d2luZG93KS5SZWZsZWN0LmRlY29yYXRlID0gZGVjb3JhdGU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgfVxuICBpZiAoISg8YW55PndpbmRvdykuUmVmbGVjdC5nZXRNZXRhZGF0YSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgKDxhbnk+d2luZG93KS5SZWZsZWN0LmdldE1ldGFkYXRhID0gZ2V0TWV0YWRhdGE7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgfVxuICBpZiAoISg8YW55PndpbmRvdykuUmVmbGVjdC5tZXRhZGF0YSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgKDxhbnk+d2luZG93KS5SZWZsZWN0Lm1ldGFkYXRhID0gbWV0YWRhdGE7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgfVxuICAoPGFueT53aW5kb3cpLlJlZmxlY3RQb29ybHlGaWxsID0geyBkZWNvcmF0ZSwgZ2V0TWV0YWRhdGEsIG1ldGFkYXRhIH07IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuLi9jdXN0b21lbGVtZW50JztcbmltcG9ydCB7IGdldENvbXBvbmVudFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb21wb25lbnRwcm9wZXJ0aWVzJztcbmltcG9ydCB7IG1ha2VUZW1wbGF0ZVN0cmluZywgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi4vbGl0LWh0bWwnO1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIHN1YnRyZWUgdG8gYSBsaWdodGRvbSBlbGVtZW50XG4gKiBAcGFyYW0gdGhpcyBcbiAqIEBwYXJhbSBlbGVtZW50VG9SZW5kZXIgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb0xpZ2h0RE9NKHRoaXM6IEN1c3RvbUVsZW1lbnQsIGVsZW1lbnRUb1JlbmRlcjogSFRNTEVsZW1lbnQpIHtcbiAgaWYgKHRoaXMuX3RlbXBsYXRlQ2FjaGUgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IGNzc1N0eWxlcywgdGFnLCBzaGFkeUNTU1N0eWxlU2hlZXRBZG9wdGVkLCB0ZW1wbGF0ZUNhY2hlIH0gPSBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQpO1xuICAgIGlmICghc2hhZHlDU1NTdHlsZVNoZWV0QWRvcHRlZCkge1xuICAgICAgY29uc3Qgc3R5bGVTaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZVNoZWV0LnNldEF0dHJpYnV0ZSgnc2NvcGUnLCB0YWcpO1xuICAgICAgY29uc3Qgc3R5bGVTdHJpbmc6IHN0cmluZyA9IGNzc1N0eWxlcy5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiAhc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzID8gdmFsdWUuY3NzVGV4dCA6XG4gICAgICAgIEFycmF5LmZyb20oKDxhbnk+dmFsdWUpLnJ1bGVzKS5yZWR1Y2UoKHByZXYsIGN1cnJlbnQ6IGFueSkgPT4gcHJldiArIGN1cnJlbnQuY3NzVGV4dCwgJycpO1xuICAgICAgfSkucmVkdWNlKChwcmV2VmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4gcHJldlZhbHVlICsgY3VycmVudFZhbHVlKTtcbiAgICAgIHN0eWxlU2hlZXQudGV4dENvbnRlbnQgPSBzdHlsZVN0cmluZy5yZXBsYWNlKC8ofTs/fCwpXFxzKigoXFwuP3wjPylbYS16XFwtQS1aXSspL2csIChfdG9rZW4sIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke2FyZ3NbMF19IDpob3N0ICR7YXJnc1sxXX1gO1xuICAgICAgfSkucmVwbGFjZSgvKCg6aG9zdFxcKChbXlxcKF0qKVxcKSl8KDpob3N0KSkvZywgKF90b2tlbiwgLi4uYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gYCR7dGFnfSR7YXJnc1syXSA/IGFyZ3NbMl0gOiAnJ31gO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoc3R5bGVTaGVldCk7XG4gICAgICBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQpLnNoYWR5Q1NTU3R5bGVTaGVldEFkb3B0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLl90ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZSB8fCBtYWtlVGVtcGxhdGVTdHJpbmcoWycnLCAnJ10sIFsnJywgJyddKTtcbiAgICBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQpLnRlbXBsYXRlQ2FjaGUgPSB0aGlzLl90ZW1wbGF0ZUNhY2hlO1xuICB9XG4gIHJlbmRlcih0aGlzLnJlbmRlcigpLCBlbGVtZW50VG9SZW5kZXIsIHsgZXZlbnRDb250ZXh0OiB0aGlzIH0pO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4uL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgcmVuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZW5kZXJDb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzVG9SZW5kZXI6IEFycmF5PEN1c3RvbUVsZW1lbnQ+ID0gW107XG5sZXQgY3VycmVudEFuaW1hdGlvbkZyYW1lOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuY29uc3QgZnJhbWVCdWRnZXQgPSAxMDAwIC8gNjA7XG5cbi8qKlxuICogcmVtb3ZlIGNvbXBvbmVudCBmcm9tIHJlbmRlciBxdWV1ZVxuICogQHBhcmFtIGNvbXBvbmVudCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBvbmVudEZyb21SZW5kZXJQaXBlbGluZShjb21wb25lbnQ6IEN1c3RvbUVsZW1lbnQpIHtcbiAgY29tcG9uZW50c1RvUmVuZGVyLnNwbGljZShjb21wb25lbnRzVG9SZW5kZXIuaW5kZXhPZihjb21wb25lbnQpLCAxKTtcbn1cblxuLyoqXG4gKiBhZGQgb2NtcG9uZW50IHRvIHJlbmRlciBxdWV1ZVxuICogQHBhcmFtIGNvbXBvbmVudCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbXBvbmVudFRvUmVuZGVyUGlwZWxpbmUoY29tcG9uZW50OiBDdXN0b21FbGVtZW50KSB7XG4gIGlmIChjb21wb25lbnRzVG9SZW5kZXIuaW5kZXhPZihjb21wb25lbnQpIDwgMCkge1xuICAgIGNvbXBvbmVudHNUb1JlbmRlci5wdXNoKGNvbXBvbmVudCk7XG4gIH1cbiAgc2NoZWR1bGVOZXh0UkFGUmVuZGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNjaGVkdWxlTmV4dFJBRlJlbmRlcigpIHtcbiAgaWYgKGN1cnJlbnRBbmltYXRpb25GcmFtZSA9PT0gbnVsbCkge1xuICAgIGN1cnJlbnRBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnRGcmFtZUJ1ZGdldCA9IGZyYW1lQnVkZ2V0O1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzVG9SZW5kZXIuc3BsaWNlKDAsIDEpWzBdO1xuICAgICAgICBpZiAoIWNvbXBvbmVudCkgYnJlYWs7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICAgICAgcmVuZGVyQ29tcG9uZW50LmFwcGx5KGNvbXBvbmVudCk7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQ7XG4gICAgICAgIGN1cnJlbnRGcmFtZUJ1ZGdldCA9IGN1cnJlbnRGcmFtZUJ1ZGdldCAtIHJlbmRlclRpbWU7XG4gICAgICB9IHdoaWxlIChjdXJyZW50RnJhbWVCdWRnZXQgPiAwKTtcbiAgICAgIGN1cnJlbnRBbmltYXRpb25GcmFtZSA9IG51bGw7XG4gICAgICBzY2hlZHVsZU5leHRSQUZSZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4uL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgcmVuZGVyVG9TaGFkb3dET00gfSBmcm9tICcuL3NoYWRvd0RPTVJlbmRlcmVyJztcbmltcG9ydCB7IHJlbmRlclRvTGlnaHRET00gfSBmcm9tICcuL2xpZ2h0RE9NUmVuZGVyZXInO1xuaW1wb3J0IHsgUFJPUEVSVFlfU1RBVEUgfSBmcm9tICcuLi9wcm9wZXJ0eXN0YXRlJztcblxuIC8qKlxuICAqIHJlbmRlcnMgdGhlIGNvbXBvbmVudFxuICAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudCh0aGlzOiBDdXN0b21FbGVtZW50KSB7XG4gICAgdGhpcy5jb21wb25lbnRXaWxsUmVuZGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgY29uc3QgZWxlbWVudFRvUmVuZGVyID0gdGhpcy5yZW5kZXJUb0VsZW1lbnQoKTtcbiAgICBpZiAoZWxlbWVudFRvUmVuZGVyID09PSB0aGlzLnNoYWRvd1Jvb3QpIHsgLy8gcmVuZGVyIHRvIHNoYWRvd3Jvb3RcbiAgICAgIHJlbmRlclRvU2hhZG93RE9NLmFwcGx5KHRoaXMsIFtlbGVtZW50VG9SZW5kZXJdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyVG9MaWdodERPTS5hcHBseSh0aGlzLCBbZWxlbWVudFRvUmVuZGVyXSk7XG4gICAgfVxuICAgIHRoaXMuY29tcG9uZW50RGlkUmVuZGVyKCk7XG4gICAgaWYgKHRoaXMuX2ZpcnN0UmVuZGVyKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudEZpcnN0UmVuZGVyKCk7XG4gICAgICB0aGlzLl9maXJzdFJlbmRlciA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9wcm9wZXJ0eVN0YXRlID0gUFJPUEVSVFlfU1RBVEUuVVBEQVRFRDtcbiAgICB0aGlzLl9yZW5kZXJDb21wbGV0ZWRDYWxsYmFja3MuZm9yRWFjaCgodmFsdWUpID0+IHZhbHVlKCkpO1xuICAgIHRoaXMuX3JlbmRlckNvbXBsZXRlZENhbGxiYWNrcyA9IFtdO1xuICAgIGlmICh0aGlzLl9sYXlvdXRSQUZSZWZlcmVuY2UgPT09IG51bGwpIHsgLy8gcXVldWUgYSBwcm9taXNlIHdoaWNoIHJlc29sdmVzIGFmdGVyIGJyb3dzZXIgbGF5b3V0aW5nXG4gICAgICB0aGlzLl9sYXlvdXRSQUZSZWZlcmVuY2UgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnREaWRMYXlvdXQoKTtcbiAgICAgICAgICB0aGlzLl9sYXlvdXRSQUZSZWZlcmVuY2UgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4uL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0Q29tcG9uZW50UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbXBvbmVudHByb3BlcnRpZXMnO1xuaW1wb3J0IHsgbWFrZVRlbXBsYXRlU3RyaW5nLCBuZWVkU2hhZHlET00sIHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHJlbmRlciwgc2hhZHlSZW5kZXIsIGh0bWwgfSBmcm9tICcuLi9saXQtaHRtbCc7XG5cbi8qKlxuICogcmVuZGVyIHNoYWRvd3Jvb3Qgb2YgY29tcG9uZW50XG4gKiBAcGFyYW0gdGhpcyBcbiAqIEBwYXJhbSBlbGVtZW50VG9SZW5kZXIgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb1NoYWRvd0RPTSh0aGlzOiBDdXN0b21FbGVtZW50LCBlbGVtZW50VG9SZW5kZXI6IFNoYWRvd1Jvb3QpIHtcbiAgaWYgKHRoaXMuX3RlbXBsYXRlQ2FjaGUgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IGNzc1N0eWxlcywgdGFnLCBzaGFkeUNTU1N0eWxlU2hlZXRBZG9wdGVkLCB0ZW1wbGF0ZUNhY2hlIH0gPSBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQpO1xuICAgIGlmICh3aW5kb3cuU2hhZHlDU1MgJiYgIXdpbmRvdy5TaGFkeUNTUy5uYXRpdmVTaGFkb3cgJiYgd2luZG93LlNoYWR5Q1NTLlNjb3BpbmdTaGltLnByZXBhcmVBZG9wdGVkQ3NzVGV4dCkge1xuICAgICAgaWYgKCFzaGFkeUNTU1N0eWxlU2hlZXRBZG9wdGVkKSB7XG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUy5TY29waW5nU2hpbS5wcmVwYXJlQWRvcHRlZENzc1RleHQoY3NzU3R5bGVzLm1hcCgodmFsdWUpID0+IHZhbHVlLmNzc1RleHQpLCB0YWcpO1xuICAgICAgICBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQpLnNoYWR5Q1NTU3R5bGVTaGVldEFkb3B0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGUgfHwgbWFrZVRlbXBsYXRlU3RyaW5nKFsnJywgJyddLCBbJycsICcnXSk7XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgIHRoaXMuc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMgPSA8QXJyYXk8Q1NTU3R5bGVTaGVldD4+Y3NzU3R5bGVzO1xuICAgICAgdGhpcy5fdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGUgfHwgbWFrZVRlbXBsYXRlU3RyaW5nKFsnJywgJyddLCBbJycsICcnXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlU3RyaW5nID0gY3NzU3R5bGVzLm1hcCgodmFsdWUpID0+IHZhbHVlLmNzc1RleHQpLnJlZHVjZSgocHJldlZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZWYWx1ZSArICdcXG4nICsgY3VycmVudFZhbHVlKTtcbiAgICAgIHRoaXMuX3RlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlIHx8IG1ha2VUZW1wbGF0ZVN0cmluZyhbYDxzdHlsZT4ke3N0eWxlU3RyaW5nfTwvc3R5bGU+YCwgJyddLCBbYDxzdHlsZT4ke3N0eWxlU3RyaW5nfTwvc3R5bGU+YCwgJyddKTtcbiAgICB9XG4gICAgaWYgKCF0ZW1wbGF0ZUNhY2hlKSB7XG4gICAgICBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQpLnRlbXBsYXRlQ2FjaGUgPSB0aGlzLl90ZW1wbGF0ZUNhY2hlO1xuICAgIH1cbiAgfVxuICBpZiAobmVlZFNoYWR5RE9NKCkpIHtcbiAgICBzaGFkeVJlbmRlcihodG1sKHRoaXMuX3RlbXBsYXRlQ2FjaGUsXG4gICAgICB0aGlzLnJlbmRlcigpKSxcbiAgICAgIGVsZW1lbnRUb1JlbmRlcixcbiAgICAgIHsgc2NvcGVOYW1lOiBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQpIS50YWcsIGV2ZW50Q29udGV4dDogdGhpcyB9KTtcbiAgfSBlbHNlIHtcbiAgICByZW5kZXIoaHRtbCh0aGlzLl90ZW1wbGF0ZUNhY2hlLCB0aGlzLnJlbmRlcigpKSwgZWxlbWVudFRvUmVuZGVyLCB7IGV2ZW50Q29udGV4dDogdGhpcyB9KTtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgU3RhZ2UyQ2xhc3NEZWNvcmF0b3IsIENsYXNzRGVjb3JhdG9yRGVzY3JpcHRvciwgQ2xhc3NEZWNvcmF0b3JSZXN1bHQgfSBmcm9tICcuL3N0YWdlMmRlY29yYXRvcnMnO1xuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4uL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0Q2xhc3NQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY2xhc3Nwcm9wZXJ0aWVzJztcbmltcG9ydCB7IFByb3BlcnR5T3B0aW9ucyB9IGZyb20gJy4uL3Byb3BlcnR5b3B0aW9ucyc7XG5pbXBvcnQgeyBzZXRDb21wb25lbnRQcm9wZXJ0aWVzLCBnZXRDb21wb25lbnRQcm9wZXJ0aWVzLCBFeHRlbmRlZENvbXBvbmVudE9wdGlvbnMgfSBmcm9tICcuLi9jb21wb25lbnRwcm9wZXJ0aWVzJztcbmltcG9ydCB7IGdldEFsbENsYXNzUHJvcGVydHlXYXRjaGVyLCBnZXRDbGFzc1Byb3BlcnR5V2F0Y2hlciB9IGZyb20gJy4uL2NsYXNzcHJvcGVydHl3YXRjaGVyJztcbmltcG9ydCB7IGdldENsYXNzUHJvcGVydHlJbnRlcmNlcHRvciwgZ2V0QWxsQ2xhc3NQcm9wZXJ0eUludGVyY2VwdG9ycyB9IGZyb20gJy4uL2NsYXNzcHJvcGVydHlpbnRlcmNlcHRvcnMnO1xuaW1wb3J0IHsgZ2V0Q2xhc3NFdmVudHMgfSBmcm9tICcuLi9jbGFzc2V2ZW50cyc7XG5pbXBvcnQgeyBDb21wb25lbnRPcHRpb25zIH0gZnJvbSAnLi4vY29tcG9uZW50b3B0aW9ucyc7XG5pbXBvcnQgeyBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogc3RhZ2UtMiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY29tcG9uZW50IGRlY29yYXRvclxuICpcbiAqIEBwYXJhbSBvcHRpb25zIENvbXBvbmVudE9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudChvcHRpb25zOiBDb21wb25lbnRPcHRpb25zKTogU3RhZ2UyQ2xhc3NEZWNvcmF0b3I8dHlwZW9mIEN1c3RvbUVsZW1lbnQ+IHsgLy90c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIHJldHVybiAoZGVzY3JpcHRvcjogQ2xhc3NEZWNvcmF0b3JEZXNjcmlwdG9yKTogQ2xhc3NEZWNvcmF0b3JSZXN1bHQ8dHlwZW9mIEN1c3RvbUVsZW1lbnQ+ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZWxlbWVudHM6IGRlc2NyaXB0b3IuZWxlbWVudHMsXG4gICAgICBjb25zdHJ1Y3RvcjogdW5kZWZpbmVkLFxuICAgICAga2luZDogJ2NsYXNzJyxcbiAgICAgIGZpbmlzaGVyOiAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGlmICghQ3VzdG9tRWxlbWVudC5pc1Byb3RvdHlwZU9mKHRhcmdldCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0Lm5hbWV9IG11c3QgZXh0ZW5kIEN1c3RvbUVsZW1lbnRgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnRFeHRlbmRlZE9wdGlvbnM6IEV4dGVuZGVkQ29tcG9uZW50T3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgY3NzU3R5bGVzOiBbXSwgc2hhZHlDU1NTdHlsZVNoZWV0QWRvcHRlZDogZmFsc2UsIHRlbXBsYXRlQ2FjaGU6IG51bGwgfTtcblxuICAgICAgICBjb25zdCBwcm90b3R5cGU6IHR5cGVvZiBDdXN0b21FbGVtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCkgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZUNsYXNzUHJvcGVydGllcyA9IGdldENsYXNzUHJvcGVydGllcyhwcm90b3R5cGUpO1xuICAgICAgICBpZiAocHJvdG90eXBlQ2xhc3NQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0Q2xhc3NQcm9wZXJ0aWVzID0gZ2V0Q2xhc3NQcm9wZXJ0aWVzKHRhcmdldCk7XG4gICAgICAgICAgcHJvdG90eXBlQ2xhc3NQcm9wZXJ0aWVzLmZvckVhY2goKHZhbHVlOiBQcm9wZXJ0eU9wdGlvbnMsIGtleTogc3RyaW5nIHwgc3ltYm9sKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRDbGFzc1Byb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFN0eWxlcyA9IEFycmF5LmlzQXJyYXkob3B0aW9ucy5zdHlsZSkgPyBvcHRpb25zLnN0eWxlIDogW29wdGlvbnMuc3R5bGUgfHwgJyddO1xuICAgICAgICBjb25zdCBjb21wb25lbnRDU1NTdHlsZXMgPSBjb21wb25lbnRTdHlsZXMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNzcyA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgICBjc3MucmVwbGFjZVN5bmModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY3NzVGV4dDogdmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb21wb25lbnRFeHRlbmRlZE9wdGlvbnMuaW5oZXJpdFN0eWxlKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50U3R5bGUgPSBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKHByb3RvdHlwZSkuY3NzU3R5bGVzO1xuICAgICAgICAgIGNvbXBvbmVudEV4dGVuZGVkT3B0aW9ucy5jc3NTdHlsZXMucHVzaCguLi5wYXJlbnRTdHlsZSk7XG4gICAgICAgICAgY29tcG9uZW50RXh0ZW5kZWRPcHRpb25zLmNzc1N0eWxlcy5wdXNoKC4uLmNvbXBvbmVudENTU1N0eWxlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcG9uZW50RXh0ZW5kZWRPcHRpb25zLmNzc1N0eWxlcy5wdXNoKC4uLmNvbXBvbmVudENTU1N0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvdG90eXBlV2F0Y2hlciA9IGdldEFsbENsYXNzUHJvcGVydHlXYXRjaGVyKHByb3RvdHlwZSk7XG4gICAgICAgIGlmIChwcm90b3R5cGVXYXRjaGVyLnNpemUgPiAwKSB7XG4gICAgICAgICAgQXJyYXkuZnJvbShwcm90b3R5cGVXYXRjaGVyLmVudHJpZXMoKSkuZm9yRWFjaCgoW3Byb3BlcnR5LCB3YXRjaGVyXSkgPT4ge1xuICAgICAgICAgICAgZ2V0Q2xhc3NQcm9wZXJ0eVdhdGNoZXIodGFyZ2V0LCBwcm9wZXJ0eSkucHVzaCguLi53YXRjaGVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm90b3R5cGVJbnRlcmNlcHRvciA9IGdldEFsbENsYXNzUHJvcGVydHlJbnRlcmNlcHRvcnMocHJvdG90eXBlKTtcbiAgICAgICAgaWYgKHByb3RvdHlwZUludGVyY2VwdG9yLnNpemUgPiAwKSB7XG4gICAgICAgICAgQXJyYXkuZnJvbShwcm90b3R5cGVJbnRlcmNlcHRvci5lbnRyaWVzKCkpLmZvckVhY2goKFtwcm9wZXJ0eSwgaW50ZXJjZXB0b3JdKSA9PiB7XG4gICAgICAgICAgICBnZXRDbGFzc1Byb3BlcnR5SW50ZXJjZXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSkucHVzaCguLi5pbnRlcmNlcHRvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnRzID0gZ2V0Q2xhc3NFdmVudHMocHJvdG90eXBlKTtcbiAgICAgICAgaWYgKGV2ZW50cy5zaXplID4gMCkge1xuICAgICAgICAgIEFycmF5LmZyb20oZXZlbnRzLmVudHJpZXMoKSkuZm9yRWFjaCgoW2V2ZW50LCBvcHRpb25dKSA9PiB7XG4gICAgICAgICAgICBnZXRDbGFzc0V2ZW50cyh0YXJnZXQpLnNldChldmVudCwgb3B0aW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldENvbXBvbmVudFByb3BlcnRpZXModGFyZ2V0LCBjb21wb25lbnRFeHRlbmRlZE9wdGlvbnMpO1xuICAgICAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKG9wdGlvbnMudGFnLCB0YXJnZXQpO1xuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgU3RhZ2UyRmllbGREZWNvcmF0b3IsIEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvciB9IGZyb20gJy4vc3RhZ2UyZGVjb3JhdG9ycyc7XG5cbi8qKlxuICogZGVwcmVjYXRlZCBzdGFnZS0yIGRlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gRGVwcmVjYXRlZChtZXNzYWdlPzogc3RyaW5nKTogU3RhZ2UyRmllbGREZWNvcmF0b3I8T2JqZWN0LCB0eXBlb2YgT2JqZWN0PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgcmV0dXJuIChkZXNjcmlwdG9yOiBGaWVsZERlY29yYXRvckRlc2NyaXB0b3IpID0+IHtcbiAgICBpZiAoZGVzY3JpcHRvci5raW5kID09PSAnZmllbGQnKSB7XG4gICAgICBjb25zdCBrZXkgPSBTeW1ib2woKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGV4dHJhczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGtpbmQ6ICdmaWVsZCcsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgICAgaW5pdGlhbGl6ZXI6IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIsXG4gICAgICAgICAgICBpbml0aWFsaXplOiBkZXNjcmlwdG9yLmluaXRpYWxpemUsXG4gICAgICAgICAgICBkZXNjcmlwdG9yOiB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBrZXk6IGRlc2NyaXB0b3Iua2V5LFxuICAgICAgICBraW5kOiAnbWV0aG9kJyxcbiAgICAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgZGVzY3JpcHRvcjoge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBnZXQodGhpczogT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtERVBSRUNBVEVEXSBbJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9XSBwcm9wZXJ0eSAke2Rlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCl9IGlzIGRlcHJlY2F0ZWQ6ICR7bWVzc2FnZSB8fCAnJ31gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgICAgcmV0dXJuICg8YW55PnRoaXMpW2tleV07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogT2JqZWN0LCB2YWx1ZTogYW55KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtERVBSRUNBVEVEXSBbJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9XSBwcm9wZXJ0eSAke2Rlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCl9IGlzIGRlcHJlY2F0ZWQ6ICR7bWVzc2FnZSB8fCAnJ31gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgICAgKDxhbnk+dGhpcylba2V5XSA9IHZhbHVlOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiAnbWV0aG9kJyxcbiAgICAgICAgZGVzY3JpcHRvcjogZGVzY3JpcHRvci5kZXNjcmlwdG9yLnZhbHVlID8ge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZSguLi5hcmdzOiBBcnJheTxhbnk+KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtERVBSRUNBVEVEXSBbJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9XSBtZXRob2QgJHtkZXNjcmlwdG9yLmtleS50b1N0cmluZygpfSBpcyBkZXByZWNhdGVkOiAke21lc3NhZ2UgfHwgJyd9YCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIGRlc2NyaXB0b3IuZGVzY3JpcHRvci52YWx1ZS5hcHBseSh0aGlzLCBbLi4uYXJnc10pOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgICAgfSxcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgZ2V0KHRoaXM6IE9iamVjdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbREVQUkVDQVRFRF0gWyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfV0gZ2V0dGVyICR7ZGVzY3JpcHRvci5rZXkudG9TdHJpbmcoKX0gaXMgZGVwcmVjYXRlZDogJHttZXNzYWdlIHx8ICcnfWApOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvci5kZXNjcmlwdG9yLmdldC5hcHBseSh0aGlzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBPYmplY3QsIHZhbHVlOiBhbnkpIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgW0RFUFJFQ0FURURdIFske3RoaXMuY29uc3RydWN0b3IubmFtZX1dIHNldHRlciAke2Rlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCl9IGlzIGRlcHJlY2F0ZWQ6ICR7bWVzc2FnZSB8fCAnJ31gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgICAgZGVzY3JpcHRvci5kZXNjcmlwdG9yLnNldC5hcHBseSh0aGlzLCBbdmFsdWVdKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBrZXk6IGRlc2NyaXB0b3Iua2V5LFxuICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICBleHRyYXM6IFtdIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgU3RhZ2UyRmllbGREZWNvcmF0b3IsIEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvciwgRmllbGREZWNvcmF0b3JSZXN1bHQsIE1ldGhvZERlY29yYXRvclJlc3VsdCB9IGZyb20gJy4vc3RhZ2UyZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50IH0gZnJvbSAnLi4vY3VzdG9tZWxlbWVudCc7XG5pbXBvcnQgeyBnZXRDbGFzc0V2ZW50cyB9IGZyb20gJy4uL2NsYXNzZXZlbnRzJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4uL2V2ZW50ZW1pdHRlcic7XG5pbXBvcnQgeyBFdmVudE9wdGlvbnMgfSBmcm9tICcuLi9ldmVudG9wdGlvbnMnO1xuXG4vKipcbiAqIHN0YWdlLTIgZGVjb3JhdG9yIGZvciBldmVudHNcbiAqIEBwYXJhbSBvcHRpb25zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gRXZlbnQob3B0aW9ucz86IEV2ZW50T3B0aW9ucyB8IHN0cmluZyk6IFN0YWdlMkZpZWxkRGVjb3JhdG9yPEN1c3RvbUVsZW1lbnQsIHR5cGVvZiBDdXN0b21FbGVtZW50PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgcmV0dXJuIChkZXNjcmlwdG9yOiBGaWVsZERlY29yYXRvckRlc2NyaXB0b3IpOiBGaWVsZERlY29yYXRvclJlc3VsdDxDdXN0b21FbGVtZW50LCB0eXBlb2YgQ3VzdG9tRWxlbWVudD4gfCBNZXRob2REZWNvcmF0b3JSZXN1bHQ8Q3VzdG9tRWxlbWVudCwgdHlwZW9mIEN1c3RvbUVsZW1lbnQ+ID0+IHtcbiAgICBsZXQgb3B0aW9uc09iamVjdDogRXZlbnRPcHRpb25zID0gPEV2ZW50T3B0aW9ucz5vcHRpb25zO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9wdGlvbnNPYmplY3QgPSB7IG5hbWU6IGRlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCkgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykgeyAvLyBsZWdhY3kgbW9kZVxuICAgICAgb3B0aW9uc09iamVjdCA9IHsgbmFtZTogPHN0cmluZz5vcHRpb25zIH07XG4gICAgfSBcbiAgICBpZiAodHlwZW9mIG9wdGlvbnNPYmplY3Qub3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9wdGlvbnNPYmplY3Qub3B0aW9ucyA9IHsgY2FuY2VsYWJsZTogZmFsc2UsIGJ1YmJsZXM6IHRydWUgfTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0b3Iua2luZCA9PT0gJ2ZpZWxkJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogJ21ldGhvZCcsXG4gICAgICAgIGRlc2NyaXB0b3I6IHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgZ2V0KHRoaXM6IEN1c3RvbUVsZW1lbnQpOiBFdmVudEVtaXR0ZXI8YW55PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBlbWl0OiAodmFsdWU6IGFueSk6IHZvaWQgPT4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUV2ZW50OiBDdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudChvcHRpb25zT2JqZWN0Lm5hbWUsIHsgLi4ub3B0aW9uc09iamVjdC5vcHRpb25zLCBkZXRhaWw6IHZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGtleTogZGVzY3JpcHRvci5rZXksXG4gICAgICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgIGZpbmlzaGVyOiAodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgZ2V0Q2xhc3NFdmVudHModGFyZ2V0KS5zZXQoZGVzY3JpcHRvci5rZXkudG9TdHJpbmcoKSwgb3B0aW9uc09iamVjdCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29ubHkgZmllbGRzIGNhbiBiZSBkZWNvcmF0ZWQgd2l0aCBldmVudCcpO1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFN0YWdlMk1ldGhvZERlY29yYXRvciwgTWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yLCBNZXRob2REZWNvcmF0b3JSZXN1bHQgfSBmcm9tICcuL3N0YWdlMmRlY29yYXRvcnMnO1xuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4uL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0Q2xhc3NQcm9wZXJ0eUludGVyY2VwdG9yIH0gZnJvbSAnLi4vY2xhc3Nwcm9wZXJ0eWludGVyY2VwdG9ycyc7XG5cbi8qKlxuICogc3RhZ2UtMiBkZWNvcmF0b3IgZm9yIGludGVyY2VwdFxuICogQHBhcmFtIHByb3BlcnR5S2V5IFxuICovXG5leHBvcnQgZnVuY3Rpb24gSW50ZXJjZXB0b3IocHJvcGVydHlLZXk6IHN0cmluZyk6IFN0YWdlMk1ldGhvZERlY29yYXRvcjxDdXN0b21FbGVtZW50LCB0eXBlb2YgQ3VzdG9tRWxlbWVudD4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIHJldHVybiAoZGVzY3JpcHRvcjogTWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yKTogTWV0aG9kRGVjb3JhdG9yUmVzdWx0PEN1c3RvbUVsZW1lbnQsIHR5cGVvZiBDdXN0b21FbGVtZW50PiA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlc2NyaXB0b3IsXG4gICAgICBmaW5pc2hlcjogKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKCFDdXN0b21FbGVtZW50LmlzUHJvdG90eXBlT2YodGFyZ2V0KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YXJnZXQubmFtZX0gdGhlIHByb3BlcnR5IG11c3QgYmUgd2l0aGluIGEgY2xhc3Mgd2hpY2ggZXh0ZW5kcyBDdXN0b21FbGVtZW50YCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0Q2xhc3NQcm9wZXJ0eUludGVyY2VwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpLnB1c2goZGVzY3JpcHRvci5kZXNjcmlwdG9yLnZhbHVlKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby11bnNhZmUtYW55XG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFN0YWdlMkZpZWxkRGVjb3JhdG9yLCBNZXRob2REZWNvcmF0b3JSZXN1bHQsIEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvciwgRmllbGREZWNvcmF0b3JSZXN1bHQsIE1ldGhvZERlY29yYXRvckRlc2NpcHRvciB9IGZyb20gJy4vc3RhZ2UyZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50LCBJbmRleGFibGVFbGVtZW50IH0gZnJvbSAnLi4vY3VzdG9tZWxlbWVudCc7XG5pbXBvcnQgeyBnZXRDbGFzc1Byb3BlcnRpZXMgfSBmcm9tICcuLi9jbGFzc3Byb3BlcnRpZXMnO1xuaW1wb3J0IHsgUFJPUEVSVFlfU1RBVEUgfSBmcm9tICcuLi9wcm9wZXJ0eXN0YXRlJztcbmltcG9ydCB7IFByb3BlcnR5T3B0aW9ucyB9IGZyb20gJy4uL3Byb3BlcnR5b3B0aW9ucyc7XG5cbi8qKlxuICogc3RhZ2UtMiBzdGF0ZSBkZWNvcmF0b3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTdGF0ZSgpOiBTdGFnZTJGaWVsZERlY29yYXRvcjxDdXN0b21FbGVtZW50LCB0eXBlb2YgQ3VzdG9tRWxlbWVudD4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIHJldHVybiBQcm9wKHsgcmVmbGVjdEFzQXR0cmlidXRlOiBmYWxzZSwgdHlwZTogdW5kZWZpbmVkIH0pO1xufVxuXG4vKipcbiAqIHN0YWdlLTIgcHJvcCBkZWNvcmF0b3JcbiAqIEBwYXJhbSBfb3B0aW9ucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFByb3AoX29wdGlvbnM6IFByb3BlcnR5T3B0aW9ucyk6IFN0YWdlMkZpZWxkRGVjb3JhdG9yPEN1c3RvbUVsZW1lbnQsIHR5cGVvZiBDdXN0b21FbGVtZW50PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgcmV0dXJuIChkZXNjcmlwdG9yOiBGaWVsZERlY29yYXRvckRlc2NyaXB0b3IgfCBNZXRob2REZWNvcmF0b3JEZXNjaXB0b3IpOiBGaWVsZERlY29yYXRvclJlc3VsdDxDdXN0b21FbGVtZW50LCB0eXBlb2YgQ3VzdG9tRWxlbWVudD4gfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ldGhvZERlY29yYXRvclJlc3VsdDxDdXN0b21FbGVtZW50LCB0eXBlb2YgQ3VzdG9tRWxlbWVudD4gPT4ge1xuXG4gICAgY29uc3Qga2V5ID0gdHlwZW9mIGRlc2NyaXB0b3Iua2V5ID09PSAnc3ltYm9sJyA/IFN5bWJvbCgpIDogYF9fJHtkZXNjcmlwdG9yLmtleX1gO1xuICAgIGlmIChkZXNjcmlwdG9yLmtpbmQgPT09ICdmaWVsZCcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgICAgICBkZXNjcmlwdG9yOiB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIGdldCh0aGlzOiBDdXN0b21FbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gKDxhbnk+dGhpcylba2V5XTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBDdXN0b21FbGVtZW50LCB2YWx1ZTogYW55KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgICBpZiAodGhpcy5fcHJvcGVydHlTdGF0ZSA9PT0gUFJPUEVSVFlfU1RBVEUuVVBEQVRFX1BST1BFUlRZKSB7XG4gICAgICAgICAgICAgICg8YW55PnRoaXMpW2tleV0gPSB2YWx1ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBDdXN0b21FbGVtZW50KS5fZnJvbVByb3BlcnR5KGRlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCksICg8SW5kZXhhYmxlRWxlbWVudD50aGlzKVtkZXNjcmlwdG9yLmtleS50b1N0cmluZygpXSwgdmFsdWUsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGtleTogZGVzY3JpcHRvci5rZXksXG4gICAgICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgIGV4dHJhczogW3tcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgIGluaXRpYWxpemVyOiBkZXNjcmlwdG9yLmluaXRpYWxpemVyLFxuICAgICAgICAgIGluaXRpYWxpemU6IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZSxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgZGVzY3JpcHRvcjoge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGtpbmQ6ICdmaWVsZCcsXG4gICAgICAgIH1dLFxuICAgICAgICBmaW5pc2hlcjogKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAoIUN1c3RvbUVsZW1lbnQuaXNQcm90b3R5cGVPZih0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0Lm5hbWV9IHRoZSBwcm9wZXJ0eSBtdXN0IGJlIHdpdGhpbiBhIGNsYXNzIHdoaWNoIGV4dGVuZHMgQ3VzdG9tRWxlbWVudGApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIV9vcHRpb25zKSB7XG4gICAgICAgICAgICBfb3B0aW9ucyA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIV9vcHRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgIF9vcHRpb25zLnR5cGUgPSAoPGFueT5SZWZsZWN0KS5nZXRNZXRhZGF0YSgnZGVzaWduOnR5cGUnLCB0YXJnZXQucHJvdG90eXBlLCBkZXNjcmlwdG9yLmtleS50b1N0cmluZygpKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgIH1cbiAgICAgICAgICBnZXRDbGFzc1Byb3BlcnRpZXModGFyZ2V0KS5zZXQoZGVzY3JpcHRvci5rZXksIF9vcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgICAgICBkZXNjcmlwdG9yOiB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIGdldCh0aGlzOiBDdXN0b21FbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvci5kZXNjcmlwdG9yLmdldC5hcHBseSh0aGlzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBDdXN0b21FbGVtZW50LCB2YWx1ZTogYW55KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgICBpZiAodGhpcy5fcHJvcGVydHlTdGF0ZSA9PT0gUFJPUEVSVFlfU1RBVEUuVVBEQVRFX1BST1BFUlRZKSB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0b3IuZGVzY3JpcHRvci5zZXQuYXBwbHkodGhpcywgW3ZhbHVlXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgQ3VzdG9tRWxlbWVudCkuX2Zyb21Qcm9wZXJ0eShkZXNjcmlwdG9yLmtleS50b1N0cmluZygpLCAoPEluZGV4YWJsZUVsZW1lbnQ+dGhpcylbZGVzY3JpcHRvci5rZXkudG9TdHJpbmcoKV0sIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBrZXk6IGRlc2NyaXB0b3Iua2V5LFxuICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICBmaW5pc2hlcjogKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAoIUN1c3RvbUVsZW1lbnQuaXNQcm90b3R5cGVPZih0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0Lm5hbWV9IHRoZSBwcm9wZXJ0eSBtdXN0IGJlIHdpdGhpbiBhIGNsYXNzIHdoaWNoIGV4dGVuZHMgQ3VzdG9tRWxlbWVudGApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIV9vcHRpb25zKSB7XG4gICAgICAgICAgICBfb3B0aW9ucyA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBnZXRDbGFzc1Byb3BlcnRpZXModGFyZ2V0KS5zZXQoZGVzY3JpcHRvci5rZXksIF9vcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBGaWVsZERlY29yYXRvckRlc2NyaXB0b3JcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWVsZERlY29yYXRvckRlc2NyaXB0b3Ige1xuICBraW5kOiAnZmllbGQnIHwgJ21ldGhvZCc7XG4gIGtleTogc3RyaW5nIHwgc3ltYm9sO1xuICBwbGFjZW1lbnQ6ICdzdGF0aWMnIHwgJ3Byb3RvdHlwZScgfCAnb3duJztcbiAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yO1xuICBpbml0aWFsaXplcjogKCkgPT4gc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlciB8IE9iamVjdCB8IHN5bWJvbDtcbiAgaW5pdGlhbGl6ZSgpOiAoKSA9PiBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyIHwgT2JqZWN0IHwgc3ltYm9sO1xufVxuXG4vKipcbiAqIE1ldGhvZERlY29yYXRvckRlc2NpcHRvclxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1ldGhvZERlY29yYXRvckRlc2NpcHRvciB7XG4gIGtpbmQ6ICdtZXRob2QnO1xuICBrZXk6IHN0cmluZyB8IHN5bWJvbDtcbiAgcGxhY2VtZW50OiAnc3RhdGljJyB8ICdwcm90b3R5cGUnIHwgJ293bic7XG4gIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcjtcbn1cblxuLyoqXG4gKiBDbGFzc0RlY29yYXRvckRlc2NyaXB0b3JcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDbGFzc0RlY29yYXRvckRlc2NyaXB0b3Ige1xuICBraW5kOiAnY2xhc3MnO1xuICBlbGVtZW50czogQXJyYXk8RmllbGREZWNvcmF0b3JEZXNjcmlwdG9yIHwgTWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yPjtcbn1cblxuLyoqXG4gKiBGaWVsZERlY29yYXRvclJlc3VsdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkRGVjb3JhdG9yUmVzdWx0PFQsIEM+IHtcbiAga2luZDogJ2ZpZWxkJyB8ICdtZXRob2QnO1xuICBrZXk6IHN0cmluZyB8IHN5bWJvbDtcbiAgcGxhY2VtZW50OiAnc3RhdGljJyB8ICdwcm90b3R5cGUnIHwgJ293bic7XG4gIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcjtcbiAgaW5pdGlhbGl6ZXI/OiAoKSA9PiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55IG9sZCBpbXBsZW1lbnRhdGlvblxuICBpbml0aWFsaXplPzogKCkgPT4gYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBleHRyYXM/OiBBcnJheTxGaWVsZERlY29yYXRvclJlc3VsdDxULCBDPj47XG4gIGZpbmlzaGVyPzogKHRhcmdldDogQykgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBNZXRob2REZWNvcmF0b3JSZXN1bHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXRob2REZWNvcmF0b3JSZXN1bHQ8VCwgQz4ge1xuICBraW5kOiAnbWV0aG9kJztcbiAga2V5OiBzdHJpbmcgfCBzeW1ib2w7XG4gIHBsYWNlbWVudDogJ3N0YXRpYycgfCAncHJvdG90eXBlJyB8ICdvd24nO1xuICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3I7XG4gIGV4dHJhcz86IEFycmF5PEZpZWxkRGVjb3JhdG9yUmVzdWx0PFQsIEM+PjtcbiAgZmluaXNoZXI/OiAodGFyZ2V0OiBDKSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIENsYXNzRGVjb3JhdG9yUmVzdWx0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NEZWNvcmF0b3JSZXN1bHQ8VD4ge1xuICBlbGVtZW50czogQXJyYXk8RmllbGREZWNvcmF0b3JEZXNjcmlwdG9yIHwgTWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yPjtcbiAgY29uc3RydWN0b3I/OiBUO1xuICBraW5kOiAnY2xhc3MnO1xuICBmaW5pc2hlcj86ICh0YXJnZXQ6IFQpID0+IHZvaWQgfCAobmV3ICgpID0+IGFueSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG59XG5cbi8qKlxuICogU3RhZ2UyRmllbGREZWNvcmF0b3JcbiAqL1xuZXhwb3J0IHR5cGUgU3RhZ2UyRmllbGREZWNvcmF0b3I8VCwgQz4gPSAoZGVzY3JpcHRvcjogRmllbGREZWNvcmF0b3JEZXNjcmlwdG9yKSA9PiBGaWVsZERlY29yYXRvclJlc3VsdDxULCBDPiB8IE1ldGhvZERlY29yYXRvclJlc3VsdDxULCBDPjtcbi8qKlxuICogU3RhZ2UyTWV0aG9kRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCB0eXBlIFN0YWdlMk1ldGhvZERlY29yYXRvcjxULCBDPiA9IChkZXNjcmlwdG9yOiBNZXRob2REZWNvcmF0b3JEZXNjaXB0b3IpID0+IE1ldGhvZERlY29yYXRvclJlc3VsdDxULCBDPjtcbi8qKlxuICogU3RhZ2UyQ2xhc3NEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IHR5cGUgU3RhZ2UyQ2xhc3NEZWNvcmF0b3I8VD4gPSAoZGVzY3JpcHRvcjogQ2xhc3NEZWNvcmF0b3JEZXNjcmlwdG9yKSA9PiBDbGFzc0RlY29yYXRvclJlc3VsdDxUPjtcblxuLyoqXG4gKiBpc1N0YWdlMkNsYXNzRGVjb3JhdG9yXG4gKiBAcGFyYW0gZWxlbWVudCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RhZ2UyQ2xhc3NEZWNvcmF0b3IoZWxlbWVudDogYW55KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIHJldHVybiBlbGVtZW50IS5raW5kID09PSAnY2xhc3MnOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG59XG5cbi8qKlxuICogaXNTdGFnZTJGaWVsZERlY29yYXRvclxuICogQHBhcmFtIGVsZW1lbnQgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0YWdlMkZpZWxkRGVjb3JhdG9yKGVsZW1lbnQ6IGFueSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICByZXR1cm4gZWxlbWVudCEua2luZCA9PT0gJ2ZpZWxkJyB8fCBlbGVtZW50IS5raW5kID09PSAnbWV0aG9kJzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxufVxuXG4vKipcbiAqIGlzU3RhZ2UyTWV0aG9kRGVjb3JhdG9yXG4gKiBAcGFyYW0gZWxlbWVudCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RhZ2UyTWV0aG9kRGVjb3JhdG9yKGVsZW1lbnQ6IGFueSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICByZXR1cm4gZWxlbWVudCEua2luZCA9PT0gJ21ldGhvZCc7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbn1cblxuLyoqXG4gKiBhcHBseUxlZ2FjeVRvU3RhZ2UyQ2xhc3NEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3RhZ2UydG9MZWdhY3lDbGFzc0RlY29yYXRvcjxDPih0YXJnZXQ6IEMsIGRlY29yYXRvcjogU3RhZ2UyQ2xhc3NEZWNvcmF0b3I8Qz4pOiBDIHwgbnVsbCB7XG4gIGNvbnN0IGNsYXNzRGVzY3JpcHRvcjogQ2xhc3NEZWNvcmF0b3JEZXNjcmlwdG9yID0ge1xuICAgIGtpbmQ6ICdjbGFzcycsXG4gICAgZWxlbWVudHM6IFtdLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICB9O1xuICBjb25zdCByZXN1bHQgPSBkZWNvcmF0b3IoY2xhc3NEZXNjcmlwdG9yKTtcbiAgbGV0IG5ld0NvbnN0cnVjdG9yOiBhbnkgPSB1bmRlZmluZWQ7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgaWYgKHJlc3VsdC5maW5pc2hlcikge1xuICAgIGlmIChyZXN1bHQuY29uc3RydWN0b3IpIHtcbiAgICAgIG5ld0NvbnN0cnVjdG9yID0gcmVzdWx0LmZpbmlzaGVyKCg8YW55PnJlc3VsdC5jb25zdHJ1Y3RvcikpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDb25zdHJ1Y3RvciA9IHJlc3VsdC5maW5pc2hlcig8YW55PnRhcmdldCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0NvbnN0cnVjdG9yIHx8IHJlc3VsdC5jb25zdHJ1Y3RvciB8fCB0YXJnZXQ7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbn1cblxuLyoqXG4gKiBhcHBseUxlZ2FjeVRvU3RhZ2UyRmllbGREZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3RhZ2UyVG9MZWdhY3lGaWVsZERlY29yYXRvcjxULCBDPih0YXJnZXQ6IEMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciwgZGVjb3JhdG9yOiBTdGFnZTJGaWVsZERlY29yYXRvcjxULCBDPik6IFByb3BlcnR5RGVzY3JpcHRvciB7XG4gIGNvbnN0IGZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvcjogRmllbGREZWNvcmF0b3JEZXNjcmlwdG9yID0ge1xuICAgIGtleTogcHJvcGVydHlLZXksXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgaW5pdGlhbGl6ZXI6IGRlc2NyaXB0b3IgPyAoPGFueT5kZXNjcmlwdG9yKVsnaW5pdGlhbGl6ZXInXSA6IHVuZGVmaW5lZCwgLy8gaW4gYmFiZWwgY2FzZSB0aGVyZSBpcyBhbiBpbml0aWFsaXplclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIGluaXRpYWxpemU6IGRlc2NyaXB0b3IgPyAoPGFueT5kZXNjcmlwdG9yKVsnaW5pdGlhbGl6ZXInXSA6IHVuZGVmaW5lZCwgLy8gaW4gYmFiZWwgY2FzZSB0aGVyZSBpcyBhbiBpbml0aWFsaXplclxuICAgIGtpbmQ6IGRlc2NyaXB0b3IgPyBkZXNjcmlwdG9yLmdldCB8fCBkZXNjcmlwdG9yLnNldCB8fCB0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/ICdtZXRob2QnIDogJ2ZpZWxkJyA6ICdmaWVsZCcsXG4gICAgZGVzY3JpcHRvcjogZGVzY3JpcHRvciA/IGRlc2NyaXB0b3IgOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBudWxsIH0sXG4gICAgcGxhY2VtZW50OiAnb3duJyxcbiAgfTtcbiAgY29uc3QgcmVzdWx0ID0gZGVjb3JhdG9yKGZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvcik7XG5cbiAgaWYgKHJlc3VsdC5leHRyYXMgJiYgcmVzdWx0LmV4dHJhcy5sZW5ndGggPiAwKSB7XG4gICAgcmVzdWx0LmV4dHJhcy5mb3JFYWNoKCh2YWx1ZSkgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5KCg8YW55PnRhcmdldCkuY29uc3RydWN0b3IucHJvdG90eXBlLCB2YWx1ZS5rZXksIHsvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmaWVsZERlY29yYXRvckRlc2NyaXB0b3IuaW5pdGlhbGl6ZSA/IGZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvci5pbml0aWFsaXplKCkgOiB1bmRlZmluZWQsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cbiAgaWYgKHJlc3VsdC5maW5pc2hlcikge1xuICAgIHJlc3VsdC5maW5pc2hlcig8YW55PnRhcmdldC5jb25zdHJ1Y3Rvcik7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgfVxuICByZXR1cm4gcmVzdWx0LmRlc2NyaXB0b3I7XG59XG5cbi8qKlxuICogYXBwbHlMZWdhY3lUb1N0YWdlMk1ldGhvZERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTdGFnZTJUb0xlZ2FjeU1ldGhvZERlY29yYXRvcjxULCBDPih0YXJnZXQ6IEMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvcjogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55PiwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29yYXRvcjogU3RhZ2UyTWV0aG9kRGVjb3JhdG9yPFQsIEM+KTogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55PiB8IHZvaWQgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBjb25zdCBtZXRob2REZWNvcmF0b3JEZXNjcmlwdG9yOiBNZXRob2REZWNvcmF0b3JEZXNjaXB0b3IgPSB7XG4gICAgZGVzY3JpcHRvcjogPGFueT5kZXNjcmlwdG9yLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIGtleTogcHJvcGVydHlLZXksXG4gICAga2luZDogJ21ldGhvZCcsXG4gICAgcGxhY2VtZW50OiAncHJvdG90eXBlJyxcbiAgfTtcbiAgY29uc3QgcmVzdWx0ID0gZGVjb3JhdG9yKG1ldGhvZERlY29yYXRvckRlc2NyaXB0b3IpO1xuXG4gIGlmIChyZXN1bHQuZXh0cmFzICYmIHJlc3VsdC5leHRyYXMubGVuZ3RoID4gMCkge1xuICAgIHJlc3VsdC5leHRyYXMuZm9yRWFjaCgodmFsdWUpID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgoPGFueT50YXJnZXQpLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgdmFsdWUua2V5LCB2YWx1ZS5kZXNjcmlwdG9yKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgfVxuXG4gIGlmIChyZXN1bHQuZmluaXNoZXIpIHtcbiAgICByZXN1bHQuZmluaXNoZXIoPGFueT50YXJnZXQuY29uc3RydWN0b3IpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICB9XG4gIHJldHVybiByZXN1bHQuZGVzY3JpcHRvcjtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFN0YWdlMkZpZWxkRGVjb3JhdG9yLCBGaWVsZERlY29yYXRvckRlc2NyaXB0b3IgfSBmcm9tICcuL3N0YWdlMmRlY29yYXRvcnMnO1xuXG4vKipcbiAqIHRyYWNlIHN0YWdlLTIgZGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUcmFjZSgpOiBTdGFnZTJGaWVsZERlY29yYXRvcjxPYmplY3QsIHR5cGVvZiBPYmplY3Q+IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICByZXR1cm4gKGRlc2NyaXB0b3I6IEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvcikgPT4ge1xuICAgIGlmIChkZXNjcmlwdG9yLmtpbmQgPT09ICdmaWVsZCcpIHtcbiAgICAgIGNvbnN0IGtleSA9IFN5bWJvbCgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXh0cmFzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAga2luZDogJ2ZpZWxkJyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgICAgICBpbml0aWFsaXplcjogZGVzY3JpcHRvci5pbml0aWFsaXplcixcbiAgICAgICAgICAgIGluaXRpYWxpemU6IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6IHtcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGtleTogZGVzY3JpcHRvci5rZXksXG4gICAgICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICBkZXNjcmlwdG9yOiB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIGdldCh0aGlzOiBPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbTE9HXSBbJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9XSBnZXR0ZXIgY2FsbGVkIG9uIHByb3BlcnR5ICR7ZGVzY3JpcHRvci5rZXkudG9TdHJpbmcoKX1gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgICAgcmV0dXJuICg8YW55PnRoaXMpW2tleV07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogT2JqZWN0LCB2YWx1ZTogYW55KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW0xPR10gWyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfV0gc2V0dGVyIGNhbGxlZCBvbiBwcm9wZXJ0eSAke2Rlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCl9IHdpdGggdmFsdWUgJHt2YWx1ZX1gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgICAgKDxhbnk+dGhpcylba2V5XSA9IHZhbHVlOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiAnbWV0aG9kJyxcbiAgICAgICAgZGVzY3JpcHRvcjogZGVzY3JpcHRvci5kZXNjcmlwdG9yLnZhbHVlID8ge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZSguLi5hcmdzOiBBcnJheTxhbnk+KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW0xPR10gWyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfV0gbWV0aG9kICR7ZGVzY3JpcHRvci5rZXkudG9TdHJpbmcoKX0gY2FsbGVzIHdpdGggYXJnc2AsIFsuLi5hcmdzXSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIGRlc2NyaXB0b3IuZGVzY3JpcHRvci52YWx1ZS5hcHBseSh0aGlzLCBbLi4uYXJnc10pOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgICAgfSxcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgZ2V0KHRoaXM6IE9iamVjdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFtMT0ddIFske3RoaXMuY29uc3RydWN0b3IubmFtZX1dIGdldHRlciBjYWxsZWQgb24gcHJvcGVydHkgJHtkZXNjcmlwdG9yLmtleS50b1N0cmluZygpfWApOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvci5kZXNjcmlwdG9yLmdldC5hcHBseSh0aGlzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBPYmplY3QsIHZhbHVlOiBhbnkpIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbTE9HXSBbJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9XSBzZXR0ZXIgY2FsbGVkIG9uIHByb3BlcnR5ICR7ZGVzY3JpcHRvci5rZXkudG9TdHJpbmcoKX0gd2l0aCB2YWx1ZSAke3ZhbHVlfWApOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgICAgICBkZXNjcmlwdG9yLmRlc2NyaXB0b3Iuc2V0LmFwcGx5KHRoaXMsIFt2YWx1ZV0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGtleTogZGVzY3JpcHRvci5rZXksXG4gICAgICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgIGV4dHJhczogW10gLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBTdGFnZTJNZXRob2REZWNvcmF0b3IsIE1ldGhvZERlY29yYXRvckRlc2NpcHRvciwgTWV0aG9kRGVjb3JhdG9yUmVzdWx0IH0gZnJvbSAnLi9zdGFnZTJkZWNvcmF0b3JzJztcbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuLi9jdXN0b21lbGVtZW50JztcbmltcG9ydCB7IGdldENsYXNzUHJvcGVydHlXYXRjaGVyIH0gZnJvbSAnLi4vY2xhc3Nwcm9wZXJ0eXdhdGNoZXInO1xuXG4vKipcbiAqIHN0YWdlIDIgcHJvcGVydHkgd2F0Y2ggZGVjb3JhdG9yXG4gKiBAcGFyYW0gcHJvcGVydHlLZXkgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBXYXRjaChwcm9wZXJ0eUtleTogc3RyaW5nKTogU3RhZ2UyTWV0aG9kRGVjb3JhdG9yPEN1c3RvbUVsZW1lbnQsIHR5cGVvZiBDdXN0b21FbGVtZW50PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgcmV0dXJuIChkZXNjcmlwdG9yOiBNZXRob2REZWNvcmF0b3JEZXNjaXB0b3IpOiBNZXRob2REZWNvcmF0b3JSZXN1bHQ8Q3VzdG9tRWxlbWVudCwgdHlwZW9mIEN1c3RvbUVsZW1lbnQ+ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVzY3JpcHRvcixcbiAgICAgIGZpbmlzaGVyOiAodGFyZ2V0OiB0eXBlb2YgQ3VzdG9tRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoIUN1c3RvbUVsZW1lbnQuaXNQcm90b3R5cGVPZih0YXJnZXQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldC5uYW1lfSB0aGUgcHJvcGVydHkgbXVzdCBiZSB3aXRoaW4gYSBjbGFzcyB3aGljaCBleHRlbmRzIEN1c3RvbUVsZW1lbnRgKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRDbGFzc1Byb3BlcnR5V2F0Y2hlcih0YXJnZXQsIHByb3BlcnR5S2V5KS5wdXNoKGRlc2NyaXB0b3IuZGVzY3JpcHRvci52YWx1ZSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgaXNTdGFnZTJNZXRob2REZWNvcmF0b3IsIGlzU3RhZ2UyRmllbGREZWNvcmF0b3IsIGFwcGx5U3RhZ2UyVG9MZWdhY3lGaWVsZERlY29yYXRvciB9IGZyb20gJy4vc3RhZ2UyL3N0YWdlMmRlY29yYXRvcnMnO1xuaW1wb3J0IHsgVHJhY2UgYXMgVHJhY2VTMiB9IGZyb20gJy4vc3RhZ2UyL3RyYWNlJztcbmltcG9ydCB7IEZpeGVkUHJvcGVydHlEZWNvcmF0b3IgfSBmcm9tICcuL3Byb3AnO1xuXG4vKipcbiAqIERpc3BsYXlzIHRyYWNlIG1lc3NhZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUcmFjZSgpOiBGaXhlZFByb3BlcnR5RGVjb3JhdG9yIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICByZXR1cm4gKHRhcmdldDogdHlwZW9mIE9iamVjdCxcbiAgICAgICAgICBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLFxuICAgICAgICAgIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPGFueT4pOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+IHwgYW55IHwgdm9pZCA9PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgaWYgKGlzU3RhZ2UyTWV0aG9kRGVjb3JhdG9yKHRhcmdldCkgfHwgaXNTdGFnZTJGaWVsZERlY29yYXRvcih0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gVHJhY2VTMigpKDxhbnk+dGFyZ2V0KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFwcGx5U3RhZ2UyVG9MZWdhY3lGaWVsZERlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yLCBUcmFjZVMyKCkpO1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFByb3BlcnR5VHlwZSB9IGZyb20gJy4vcHJvcGVydHlvcHRpb25zJztcblxuLyoqXG4gKiBkZXNlcmlhbGl6ZXMgYSBzdHJpbmcgdG8gYSB0eXBlZCB2YWx1ZVxuICogQHBhcmFtIHZhbHVlIHZhbHVlIHN0cmluZyB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHR5cGUgdHlwZSB0cmFuc2Zvcm1lciB0eXBlIGZvciBzdHJpbmcgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplVmFsdWUodmFsdWU6IHN0cmluZywgdHlwZTogUHJvcGVydHlUeXBlKTogbnVsbCB8IHN0cmluZyB8IG9iamVjdCB8IG51bWJlciB8IGJvb2xlYW4gfCBhbnlbXSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgaWYgKCh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSAmJiB0eXBlICE9PSBCb29sZWFuKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gQm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgIT09IG51bGw7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09IE51bWJlcikge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBTdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gUmVnRXhwKSB7XG4gICAgY29uc3QgWywgLCBfMiwgXzMsIF80IF0gPSAgQXJyYXkuZnJvbSgvKFxcLyguKilcXC8oW2Etel0qKSl8KC4rKS8uZXhlYyh2YWx1ZSkpO1xuICAgIGlmIChfNCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXzQpO1xuICAgIH0gZWxzZSBpZiAoXzIpIHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKF8yLCBfMyB8fCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSBGdW5jdGlvbikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZXZhbCgnKCBmdW5jdGlvbigpIHsnICsgdmFsdWUgKyAnfSApJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICByZXR1cm4gY2FsbGJhY2s7XG4gIH0gZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIHNlcmlhbGl6ZXMgYSB2YWx1ZSB0byBhIHN0cmluZ1xuICogQHBhcmFtIHZhbHVlIHZhbHVlXG4gKiBAcGFyYW0gdHlwZSB0eXBlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVWYWx1ZSh2YWx1ZTogYW55LCB0eXBlOiBQcm9wZXJ0eVR5cGUpOiBzdHJpbmcgfCBudWxsIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFN0cmluZykge1xuICAgIHJldHVybiB2YWx1ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICB9IGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICB9XG59XG5cbi8qKlxuICogdHJhbnNmb3JtIGEgc3RyaW5nIGZyb20gY2FtZWwgY2FzZSB0byBsb3dlci1jYXNlIGtlYmFwIGNhc2VcbiAqIEBwYXJhbSBzdHIgaW5wdXQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvS2ViYXBDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIHRyYW5zZm9ybSBhIHN0cmluZyBmcm9tIGtlYmFwIHRvIGNhbWVsIGNhc2VcbiAqIEBwYXJhbSBzdHIgaW5wdXQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBrZWJhcFRvQ2FtZWxDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oW2EtekEtWl0pL2csICguLi5hcmdzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gYXJnc1sxXS50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBjcmVhdGUgYSB0ZW1wbGF0ZSBzdHJpbmcgYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUZW1wbGF0ZVN0cmluZyh0ZW1wbGF0ZTogQXJyYXk8c3RyaW5nPiwgcmF3OiBBcnJheTxzdHJpbmc+KTogVGVtcGxhdGVTdHJpbmdzQXJyYXkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGVtcGxhdGUsICdyYXcnLCB7IHZhbHVlOiByYXcgfSk7XG5cbiAgcmV0dXJuIDxhbnk+dGVtcGxhdGU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG59XG5cbi8qKlxuICogaGVscGVyIGZvciBzaGFkeWRvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gbmVlZFNoYWR5RE9NKCk6IGJvb2xlYW4ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHJldHVybiAoPGFueT53aW5kb3cpLlNoYWR5Q1NTICYmICF3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93O1xufVxuXG4vKipcbiAqIHN1cHBvcnQgZm9yIG5ldyBhZG9wdGluZyBzdHlsZXNoZWV0IGZ1bmN0aW9uYWxpdHlcbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0czogYm9vbGVhbiA9ICgnYWRvcHRlZFN0eWxlU2hlZXRzJyBpbiBEb2N1bWVudC5wcm90b3R5cGUpICYmICgncmVwbGFjZScgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vY3VzdG9tZWxlbWVudCc7XG5pbXBvcnQgeyBpc1N0YWdlMk1ldGhvZERlY29yYXRvciwgYXBwbHlTdGFnZTJUb0xlZ2FjeU1ldGhvZERlY29yYXRvciB9IGZyb20gJy4vc3RhZ2UyL3N0YWdlMmRlY29yYXRvcnMnO1xuaW1wb3J0IHsgV2F0Y2ggYXMgV2F0Y2hTMiB9IGZyb20gJy4vc3RhZ2UyL3dhdGNoJztcblxuLyoqXG4gKiBSZWdpc3RlcnMgYSB3YXRjaGVyIGZvciBwcm9wZXJ0eSBjaGFuZ2VzXG4gKlxuICogQHBhcmFtIHByb3BlcnR5IHByb3BlcnR5IHRvIHdhdGNoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBXYXRjaChwcm9wZXJ0eTogc3RyaW5nKTogTWV0aG9kRGVjb3JhdG9yIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICByZXR1cm4gKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQsXG4gICAgICAgICAgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCxcbiAgICAgICAgICBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+KTogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55PiB8IGFueSB8IHZvaWQgPT4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIGlmIChpc1N0YWdlMk1ldGhvZERlY29yYXRvcih0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gV2F0Y2hTMihwcm9wZXJ0eSkoPGFueT50YXJnZXQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXBwbHlTdGFnZTJUb0xlZ2FjeU1ldGhvZERlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yLCBXYXRjaFMyKHByb3BlcnR5KSk7XG4gICAgfVxuICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtjcmVhdGVNYXJrZXIsIGRpcmVjdGl2ZSwgTm9kZVBhcnQsIFBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHJlbmRlcnMgdGhlIGl0ZW1zIG9mIGFuIGFzeW5jIGl0ZXJhYmxlWzFdLCBhcHBlbmRpbmcgbmV3XG4gKiB2YWx1ZXMgYWZ0ZXIgcHJldmlvdXMgdmFsdWVzLCBzaW1pbGFyIHRvIHRoZSBidWlsdC1pbiBzdXBwb3J0IGZvciBpdGVyYWJsZXMuXG4gKlxuICogQXN5bmMgaXRlcmFibGVzIGFyZSBvYmplY3RzIHdpdGggYSBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdIG1ldGhvZCwgd2hpY2hcbiAqIHJldHVybnMgYW4gaXRlcmF0b3Igd2hvJ3MgYG5leHQoKWAgbWV0aG9kIHJldHVybnMgYSBQcm9taXNlLiBXaGVuIGEgbmV3XG4gKiB2YWx1ZSBpcyBhdmFpbGFibGUsIHRoZSBQcm9taXNlIHJlc29sdmVzIGFuZCB0aGUgdmFsdWUgaXMgYXBwZW5kZWQgdG8gdGhlXG4gKiBQYXJ0IGNvbnRyb2xsZWQgYnkgdGhlIGRpcmVjdGl2ZS4gSWYgYW5vdGhlciB2YWx1ZSBvdGhlciB0aGFuIHRoaXNcbiAqIGRpcmVjdGl2ZSBoYXMgYmVlbiBzZXQgb24gdGhlIFBhcnQsIHRoZSBpdGVyYWJsZSB3aWxsIG5vIGxvbmdlciBiZSBsaXN0ZW5lZFxuICogdG8gYW5kIG5ldyB2YWx1ZXMgd29uJ3QgYmUgd3JpdHRlbiB0byB0aGUgUGFydC5cbiAqXG4gKiBbMV06IGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFzeW5jLWl0ZXJhdGlvblxuICpcbiAqIEBwYXJhbSB2YWx1ZSBBbiBhc3luYyBpdGVyYWJsZVxuICogQHBhcmFtIG1hcHBlciBBbiBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IG1hcHMgZnJvbSAodmFsdWUsIGluZGV4KSB0byBhbm90aGVyXG4gKiAgICAgdmFsdWUuIFVzZWZ1bCBmb3IgZ2VuZXJhdGluZyB0ZW1wbGF0ZXMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgaXRlcmFibGUuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3luY0FwcGVuZCA9IGRpcmVjdGl2ZShcbiAgICA8VD4odmFsdWU6IEFzeW5jSXRlcmFibGU8VD4sXG4gICAgICAgIG1hcHBlcj86ICh2OiBULCBpbmRleD86IG51bWJlcikgPT4gdW5rbm93bikgPT4gYXN5bmMgKHBhcnQ6IFBhcnQpID0+IHtcbiAgICAgIGlmICghKHBhcnQgaW5zdGFuY2VvZiBOb2RlUGFydCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhc3luY0FwcGVuZCBjYW4gb25seSBiZSB1c2VkIGluIHRleHQgYmluZGluZ3MnKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgc2V0IHVwIHRoaXMgcGFydGljdWxhciBpdGVyYWJsZSwgd2UgZG9uJ3QgbmVlZFxuICAgICAgLy8gdG8gZG8gYW55dGhpbmcuXG4gICAgICBpZiAodmFsdWUgPT09IHBhcnQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGFydC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAvLyBXZSBrZWVwIHRyYWNrIG9mIGl0ZW0gUGFydHMgYWNyb3NzIGl0ZXJhdGlvbnMsIHNvIHRoYXQgd2UgY2FuXG4gICAgICAvLyBzaGFyZSBtYXJrZXIgbm9kZXMgYmV0d2VlbiBjb25zZWN1dGl2ZSBQYXJ0cy5cbiAgICAgIGxldCBpdGVtUGFydDtcbiAgICAgIGxldCBpID0gMDtcblxuICAgICAgZm9yIGF3YWl0IChsZXQgdiBvZiB2YWx1ZSkge1xuICAgICAgICAvLyBDaGVjayB0byBtYWtlIHN1cmUgdGhhdCB2YWx1ZSBpcyB0aGUgc3RpbGwgdGhlIGN1cnJlbnQgdmFsdWUgb2ZcbiAgICAgICAgLy8gdGhlIHBhcnQsIGFuZCBpZiBub3QgYmFpbCBiZWNhdXNlIGEgbmV3IHZhbHVlIG93bnMgdGhpcyBwYXJ0XG4gICAgICAgIGlmIChwYXJ0LnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiB3ZSBnZXQgdGhlIGZpcnN0IHZhbHVlLCBjbGVhciB0aGUgcGFydC4gVGhpcyBsZXRzIHRoZVxuICAgICAgICAvLyBwcmV2aW91cyB2YWx1ZSBkaXNwbGF5IHVudGlsIHdlIGNhbiByZXBsYWNlIGl0LlxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHBhcnQuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFzIGEgY29udmVuaWVuY2UsIGJlY2F1c2UgZnVuY3Rpb25hbC1wcm9ncmFtbWluZy1zdHlsZVxuICAgICAgICAvLyB0cmFuc2Zvcm1zIG9mIGl0ZXJhYmxlcyBhbmQgYXN5bmMgaXRlcmFibGVzIHJlcXVpcmVzIGEgbGlicmFyeSxcbiAgICAgICAgLy8gd2UgYWNjZXB0IGEgbWFwcGVyIGZ1bmN0aW9uLiBUaGlzIGlzIGVzcGVjaWFsbHkgY29udmVuaWVudCBmb3JcbiAgICAgICAgLy8gcmVuZGVyaW5nIGEgdGVtcGxhdGUgZm9yIGVhY2ggaXRlbS5cbiAgICAgICAgaWYgKG1hcHBlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBzYWZlIGJlY2F1c2UgVCBtdXN0IG90aGVyd2lzZSBiZSB0cmVhdGVkIGFzIHVua25vd24gYnlcbiAgICAgICAgICAvLyB0aGUgcmVzdCBvZiB0aGUgc3lzdGVtLlxuICAgICAgICAgIHYgPSBtYXBwZXIodiwgaSkgYXMgVDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExpa2Ugd2l0aCBzeW5jIGl0ZXJhYmxlcywgZWFjaCBpdGVtIGluZHVjZXMgYSBQYXJ0LCBzbyB3ZSBuZWVkXG4gICAgICAgIC8vIHRvIGtlZXAgdHJhY2sgb2Ygc3RhcnQgYW5kIGVuZCBub2RlcyBmb3IgdGhlIFBhcnQuXG4gICAgICAgIC8vIE5vdGU6IEJlY2F1c2UgdGhlc2UgUGFydHMgYXJlIG5vdCB1cGRhdGFibGUgbGlrZSB3aXRoIGEgc3luY1xuICAgICAgICAvLyBpdGVyYWJsZSAoaWYgd2UgcmVuZGVyIGEgbmV3IHZhbHVlLCB3ZSBhbHdheXMgY2xlYXIpLCBpdCBtYXlcbiAgICAgICAgLy8gYmUgcG9zc2libGUgdG8gb3B0aW1pemUgYXdheSB0aGUgUGFydHMgYW5kIGp1c3QgcmUtdXNlIHRoZVxuICAgICAgICAvLyBQYXJ0LnNldFZhbHVlKCkgbG9naWMuXG5cbiAgICAgICAgbGV0IGl0ZW1TdGFydE5vZGUgPSBwYXJ0LnN0YXJ0Tm9kZTtcblxuICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIHByZXZpb3VzIGl0ZW0gYW5kIFBhcnRcbiAgICAgICAgaWYgKGl0ZW1QYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbm9kZSB0byBzZXBhcmF0ZSB0aGUgcHJldmlvdXMgYW5kIG5leHQgUGFydHNcbiAgICAgICAgICBpdGVtU3RhcnROb2RlID0gY3JlYXRlTWFya2VyKCk7XG4gICAgICAgICAgLy8gaXRlbVBhcnQgaXMgY3VycmVudGx5IHRoZSBQYXJ0IGZvciB0aGUgcHJldmlvdXMgaXRlbS4gU2V0XG4gICAgICAgICAgLy8gaXQncyBlbmROb2RlIHRvIHRoZSBub2RlIHdlJ2xsIHVzZSBmb3IgdGhlIG5leHQgUGFydCdzXG4gICAgICAgICAgLy8gc3RhcnROb2RlLlxuICAgICAgICAgIGl0ZW1QYXJ0LmVuZE5vZGUgPSBpdGVtU3RhcnROb2RlO1xuICAgICAgICAgIHBhcnQuZW5kTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUoaXRlbVN0YXJ0Tm9kZSwgcGFydC5lbmROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydChwYXJ0Lm9wdGlvbnMpO1xuICAgICAgICBpdGVtUGFydC5pbnNlcnRBZnRlck5vZGUoaXRlbVN0YXJ0Tm9kZSk7XG4gICAgICAgIGl0ZW1QYXJ0LnNldFZhbHVlKHYpO1xuICAgICAgICBpdGVtUGFydC5jb21taXQoKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge2RpcmVjdGl2ZSwgTm9kZVBhcnQsIFBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHJlbmRlcnMgdGhlIGl0ZW1zIG9mIGFuIGFzeW5jIGl0ZXJhYmxlWzFdLCByZXBsYWNpbmdcbiAqIHByZXZpb3VzIHZhbHVlcyB3aXRoIG5ldyB2YWx1ZXMsIHNvIHRoYXQgb25seSBvbmUgdmFsdWUgaXMgZXZlciByZW5kZXJlZFxuICogYXQgYSB0aW1lLlxuICpcbiAqIEFzeW5jIGl0ZXJhYmxlcyBhcmUgb2JqZWN0cyB3aXRoIGEgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSBtZXRob2QsIHdoaWNoXG4gKiByZXR1cm5zIGFuIGl0ZXJhdG9yIHdobydzIGBuZXh0KClgIG1ldGhvZCByZXR1cm5zIGEgUHJvbWlzZS4gV2hlbiBhIG5ld1xuICogdmFsdWUgaXMgYXZhaWxhYmxlLCB0aGUgUHJvbWlzZSByZXNvbHZlcyBhbmQgdGhlIHZhbHVlIGlzIHJlbmRlcmVkIHRvIHRoZVxuICogUGFydCBjb250cm9sbGVkIGJ5IHRoZSBkaXJlY3RpdmUuIElmIGFub3RoZXIgdmFsdWUgb3RoZXIgdGhhbiB0aGlzXG4gKiBkaXJlY3RpdmUgaGFzIGJlZW4gc2V0IG9uIHRoZSBQYXJ0LCB0aGUgaXRlcmFibGUgd2lsbCBubyBsb25nZXIgYmUgbGlzdGVuZWRcbiAqIHRvIGFuZCBuZXcgdmFsdWVzIHdvbid0IGJlIHdyaXR0ZW4gdG8gdGhlIFBhcnQuXG4gKlxuICogWzFdOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hc3luYy1pdGVyYXRpb25cbiAqXG4gKiBAcGFyYW0gdmFsdWUgQW4gYXN5bmMgaXRlcmFibGVcbiAqIEBwYXJhbSBtYXBwZXIgQW4gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCBtYXBzIGZyb20gKHZhbHVlLCBpbmRleCkgdG8gYW5vdGhlclxuICogICAgIHZhbHVlLiBVc2VmdWwgZm9yIGdlbmVyYXRpbmcgdGVtcGxhdGVzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGl0ZXJhYmxlLlxuICovXG5leHBvcnQgY29uc3QgYXN5bmNSZXBsYWNlID0gZGlyZWN0aXZlKFxuICAgIDxUPih2YWx1ZTogQXN5bmNJdGVyYWJsZTxUPiwgbWFwcGVyPzogKHY6IFQsIGluZGV4PzogbnVtYmVyKSA9PiB1bmtub3duKSA9PlxuICAgICAgICBhc3luYyAocGFydDogUGFydCkgPT4ge1xuICAgICAgICAgIGlmICghKHBhcnQgaW5zdGFuY2VvZiBOb2RlUGFydCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXN5bmNSZXBsYWNlIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGV4dCBiaW5kaW5ncycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHNldCB1cCB0aGlzIHBhcnRpY3VsYXIgaXRlcmFibGUsIHdlIGRvbid0IG5lZWRcbiAgICAgICAgICAvLyB0byBkbyBhbnl0aGluZy5cbiAgICAgICAgICBpZiAodmFsdWUgPT09IHBhcnQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXZSBuZXN0IGEgbmV3IHBhcnQgdG8ga2VlcCB0cmFjayBvZiBwcmV2aW91cyBpdGVtIHZhbHVlcyBzZXBhcmF0ZWx5XG4gICAgICAgICAgLy8gb2YgdGhlIGl0ZXJhYmxlIGFzIGEgdmFsdWUgaXRzZWxmLlxuICAgICAgICAgIGNvbnN0IGl0ZW1QYXJ0ID0gbmV3IE5vZGVQYXJ0KHBhcnQub3B0aW9ucyk7XG4gICAgICAgICAgcGFydC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgICAgZm9yIGF3YWl0IChsZXQgdiBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgdmFsdWUgaXMgdGhlIHN0aWxsIHRoZSBjdXJyZW50IHZhbHVlIG9mXG4gICAgICAgICAgICAvLyB0aGUgcGFydCwgYW5kIGlmIG5vdCBiYWlsIGJlY2F1c2UgYSBuZXcgdmFsdWUgb3ducyB0aGlzIHBhcnRcbiAgICAgICAgICAgIGlmIChwYXJ0LnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV2hlbiB3ZSBnZXQgdGhlIGZpcnN0IHZhbHVlLCBjbGVhciB0aGUgcGFydC4gVGhpcyBsZXQncyB0aGVcbiAgICAgICAgICAgIC8vIHByZXZpb3VzIHZhbHVlIGRpc3BsYXkgdW50aWwgd2UgY2FuIHJlcGxhY2UgaXQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICBwYXJ0LmNsZWFyKCk7XG4gICAgICAgICAgICAgIGl0ZW1QYXJ0LmFwcGVuZEludG9QYXJ0KHBhcnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcyBhIGNvbnZlbmllbmNlLCBiZWNhdXNlIGZ1bmN0aW9uYWwtcHJvZ3JhbW1pbmctc3R5bGVcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybXMgb2YgaXRlcmFibGVzIGFuZCBhc3luYyBpdGVyYWJsZXMgcmVxdWlyZXMgYSBsaWJyYXJ5LFxuICAgICAgICAgICAgLy8gd2UgYWNjZXB0IGEgbWFwcGVyIGZ1bmN0aW9uLiBUaGlzIGlzIGVzcGVjaWFsbHkgY29udmVuaWVudCBmb3JcbiAgICAgICAgICAgIC8vIHJlbmRlcmluZyBhIHRlbXBsYXRlIGZvciBlYWNoIGl0ZW0uXG4gICAgICAgICAgICBpZiAobWFwcGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBzYWZlIGJlY2F1c2UgVCBtdXN0IG90aGVyd2lzZSBiZSB0cmVhdGVkIGFzIHVua25vd24gYnlcbiAgICAgICAgICAgICAgLy8gdGhlIHJlc3Qgb2YgdGhlIHN5c3RlbS5cbiAgICAgICAgICAgICAgdiA9IG1hcHBlcih2LCBpKSBhcyBUO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtUGFydC5zZXRWYWx1ZSh2KTtcbiAgICAgICAgICAgIGl0ZW1QYXJ0LmNvbW1pdCgpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7VGVtcGxhdGVJbnN0YW5jZX0gZnJvbSAnLi4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmltcG9ydCB7VGVtcGxhdGV9IGZyb20gJy4uL2xpYi90ZW1wbGF0ZS5qcyc7XG5pbXBvcnQge2RpcmVjdGl2ZSwgTm9kZVBhcnQsIFBhcnQsIHJlcGFyZW50Tm9kZXMsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbnR5cGUgQ2FjaGVkVGVtcGxhdGUgPSB7XG4gIGluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlLFxuICBub2RlczogRG9jdW1lbnRGcmFnbWVudFxufTtcbmNvbnN0IHRlbXBsYXRlQ2FjaGVzID1cbiAgICBuZXcgV2Vha01hcDxOb2RlUGFydCwgV2Vha01hcDxUZW1wbGF0ZSwgQ2FjaGVkVGVtcGxhdGU+PigpO1xuXG4vKipcbiAqIEVuYWJsZXMgZmFzdCBzd2l0Y2hpbmcgYmV0d2VlbiBtdWx0aXBsZSB0ZW1wbGF0ZXMgYnkgY2FjaGluZyB0aGUgRE9NIG5vZGVzXG4gKiBhbmQgVGVtcGxhdGVJbnN0YW5jZXMgcHJvZHVjZWQgYnkgdGhlIHRlbXBsYXRlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYFxuICogbGV0IGNoZWNrZWQgPSBmYWxzZTtcbiAqXG4gKiBodG1sYFxuICogICAke2NhY2hlKGNoZWNrZWQgPyBodG1sYGlucHV0IGlzIGNoZWNrZWRgIDogaHRtbGBpbnB1dCBpcyBub3QgY2hlY2tlZGApfVxuICogYFxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBjYWNoZSA9IGRpcmVjdGl2ZSgodmFsdWU6IHVua25vd24pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICghKHBhcnQgaW5zdGFuY2VvZiBOb2RlUGFydCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhY2hlIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGV4dCBiaW5kaW5ncycpO1xuICB9XG5cbiAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQocGFydCk7XG5cbiAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRlbXBsYXRlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuICAgIHRlbXBsYXRlQ2FjaGVzLnNldChwYXJ0LCB0ZW1wbGF0ZUNhY2hlKTtcbiAgfVxuXG4gIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBwYXJ0LnZhbHVlO1xuXG4gIC8vIEZpcnN0LCBjYW4gd2UgdXBkYXRlIHRoZSBjdXJyZW50IFRlbXBsYXRlSW5zdGFuY2UsIG9yIGRvIHdlIG5lZWQgdG8gbW92ZVxuICAvLyB0aGUgY3VycmVudCBub2RlcyBpbnRvIHRoZSBjYWNoZT9cbiAgaWYgKHByZXZpb3VzVmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQgJiZcbiAgICAgICAgcHJldmlvdXNWYWx1ZS50ZW1wbGF0ZSA9PT0gcGFydC5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSkpIHtcbiAgICAgIC8vIFNhbWUgVGVtcGxhdGUsIGp1c3QgdHJpZ2dlciBhbiB1cGRhdGUgb2YgdGhlIFRlbXBsYXRlSW5zdGFuY2VcbiAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3QgdGhlIHNhbWUgVGVtcGxhdGUsIG1vdmUgdGhlIG5vZGVzIGZyb20gdGhlIERPTSBpbnRvIHRoZSBjYWNoZS5cbiAgICAgIGxldCBjYWNoZWRUZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuZ2V0KHByZXZpb3VzVmFsdWUudGVtcGxhdGUpO1xuICAgICAgaWYgKGNhY2hlZFRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2FjaGVkVGVtcGxhdGUgPSB7XG4gICAgICAgICAgaW5zdGFuY2U6IHByZXZpb3VzVmFsdWUsXG4gICAgICAgICAgbm9kZXM6IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZS5zZXQocHJldmlvdXNWYWx1ZS50ZW1wbGF0ZSwgY2FjaGVkVGVtcGxhdGUpO1xuICAgICAgfVxuICAgICAgcmVwYXJlbnROb2RlcyhcbiAgICAgICAgICBjYWNoZWRUZW1wbGF0ZS5ub2RlcywgcGFydC5zdGFydE5vZGUubmV4dFNpYmxpbmcsIHBhcnQuZW5kTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTmV4dCwgY2FuIHdlIHJldXNlIG5vZGVzIGZyb20gdGhlIGNhY2hlP1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gcGFydC5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgY29uc3QgY2FjaGVkVGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldCh0ZW1wbGF0ZSk7XG4gICAgaWYgKGNhY2hlZFRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE1vdmUgbm9kZXMgb3V0IG9mIGNhY2hlXG4gICAgICBwYXJ0LnNldFZhbHVlKGNhY2hlZFRlbXBsYXRlLm5vZGVzKTtcbiAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICAvLyBTZXQgdGhlIFBhcnQgdmFsdWUgdG8gdGhlIFRlbXBsYXRlSW5zdGFuY2Ugc28gaXQnbGwgdXBkYXRlIGl0LlxuICAgICAgcGFydC52YWx1ZSA9IGNhY2hlZFRlbXBsYXRlLmluc3RhbmNlO1xuICAgIH1cbiAgfVxuICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbn0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydCwgUHJvcGVydHlQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cblxuLy8gT24gSUUxMSwgY2xhc3NMaXN0LnRvZ2dsZSBkb2Vzbid0IGFjY2VwdCBhIHNlY29uZCBhcmd1bWVudC5cbi8vIFNpbmNlIHRoaXMgaXMgc28gbWlub3IsIHdlIGp1c3QgcG9seWZpbGwgaXQuXG5pZiAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goJ1RyaWRlbnQnKSkge1xuICBET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKFxuICAgICAgdG9rZW46IHN0cmluZywgZm9yY2U/OiBib29sZWFufHVuZGVmaW5lZCkge1xuICAgIGlmIChmb3JjZSA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlKSB7XG4gICAgICB0aGlzLmFkZCh0b2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlKHRva2VuKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcmNlID09PSB1bmRlZmluZWQgPyB0cnVlIDogZm9yY2U7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NJbmZvIHtcbiAgW25hbWU6IHN0cmluZ106IHN0cmluZ3xib29sZWFufG51bWJlcjtcbn1cblxuLyoqXG4gKiBTdG9yZXMgdGhlIENsYXNzSW5mbyBvYmplY3QgYXBwbGllZCB0byBhIGdpdmVuIEF0dHJpYnV0ZVBhcnQuXG4gKiBVc2VkIHRvIHVuc2V0IGV4aXN0aW5nIHZhbHVlcyB3aGVuIGEgbmV3IENsYXNzSW5mbyBvYmplY3QgaXMgYXBwbGllZC5cbiAqL1xuY29uc3QgY2xhc3NNYXBDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbi8qKlxuICogU3RvcmVzIEF0dHJpYnV0ZVBhcnRzIHRoYXQgaGF2ZSBoYWQgc3RhdGljIGNsYXNzZXMgYXBwbGllZCAoZS5nLiBgZm9vYCBpblxuICogY2xhc3M9XCJmb28gJHtjbGFzc01hcCgpfVwiKS4gU3RhdGljIGNsYXNzZXMgYXJlIGFwcGxpZWQgb25seSB0aGUgZmlyc3QgdGltZVxuICogdGhlIGRpcmVjdGl2ZSBpcyBydW4gb24gYSBwYXJ0LlxuICovXG4vLyBOb3RlLCBjb3VsZCBiZSBhIFdlYWtTZXQsIGJ1dCBwcmVmZXIgbm90IHJlcXVpcmluZyB0aGlzIHBvbHlmaWxsLlxuY29uc3QgY2xhc3NNYXBTdGF0aWNzID0gbmV3IFdlYWtNYXAoKTtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFwcGxpZXMgQ1NTIGNsYXNzZXMuIFRoaXMgbXVzdCBiZSB1c2VkIGluIHRoZSBgY2xhc3NgXG4gKiBhdHRyaWJ1dGUgYW5kIG11c3QgYmUgdGhlIG9ubHkgcGFydCB1c2VkIGluIHRoZSBhdHRyaWJ1dGUuIEl0IHRha2VzIGVhY2hcbiAqIHByb3BlcnR5IGluIHRoZSBgY2xhc3NJbmZvYCBhcmd1bWVudCBhbmQgYWRkcyB0aGUgcHJvcGVydHkgbmFtZSB0byB0aGVcbiAqIGVsZW1lbnQncyBgY2xhc3NMaXN0YCBpZiB0aGUgcHJvcGVydHkgdmFsdWUgaXMgdHJ1dGh5OyBpZiB0aGUgcHJvcGVydHkgdmFsdWVcbiAqIGlzIGZhbHNleSwgdGhlIHByb3BlcnR5IG5hbWUgaXMgcmVtb3ZlZCBmcm9tIHRoZSBlbGVtZW50J3MgYGNsYXNzTGlzdGAuIEZvclxuICogZXhhbXBsZVxuICogYHtmb286IGJhcn1gIGFwcGxpZXMgdGhlIGNsYXNzIGBmb29gIGlmIHRoZSB2YWx1ZSBvZiBgYmFyYCBpcyB0cnV0aHkuXG4gKiBAcGFyYW0gY2xhc3NJbmZvIHtDbGFzc0luZm99XG4gKi9cbmV4cG9ydCBjb25zdCBjbGFzc01hcCA9IGRpcmVjdGl2ZSgoY2xhc3NJbmZvOiBDbGFzc0luZm8pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICghKHBhcnQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVQYXJ0KSB8fCAocGFydCBpbnN0YW5jZW9mIFByb3BlcnR5UGFydCkgfHxcbiAgICAgIHBhcnQuY29tbWl0dGVyLm5hbWUgIT09ICdjbGFzcycgfHwgcGFydC5jb21taXR0ZXIucGFydHMubGVuZ3RoID4gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSBgY2xhc3NNYXBgIGRpcmVjdGl2ZSBtdXN0IGJlIHVzZWQgaW4gdGhlIGBjbGFzc2AgYXR0cmlidXRlICcgK1xuICAgICAgICAnYW5kIG11c3QgYmUgdGhlIG9ubHkgcGFydCBpbiB0aGUgYXR0cmlidXRlLicpO1xuICB9XG4gIC8vIGhhbmRsZSBzdGF0aWMgY2xhc3Nlc1xuICBpZiAoIWNsYXNzTWFwU3RhdGljcy5oYXMocGFydCkpIHtcbiAgICBwYXJ0LmNvbW1pdHRlci5lbGVtZW50LmNsYXNzTmFtZSA9IHBhcnQuY29tbWl0dGVyLnN0cmluZ3Muam9pbignICcpO1xuICAgIGNsYXNzTWFwU3RhdGljcy5zZXQocGFydCwgdHJ1ZSk7XG4gIH1cbiAgLy8gcmVtb3ZlIG9sZCBjbGFzc2VzIHRoYXQgbm8gbG9uZ2VyIGFwcGx5XG4gIGNvbnN0IG9sZEluZm8gPSBjbGFzc01hcENhY2hlLmdldChwYXJ0KTtcbiAgZm9yIChjb25zdCBuYW1lIGluIG9sZEluZm8pIHtcbiAgICBpZiAoIShuYW1lIGluIGNsYXNzSW5mbykpIHtcbiAgICAgIHBhcnQuY29tbWl0dGVyLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcbiAgICB9XG4gIH1cbiAgLy8gYWRkIG5ldyBjbGFzc2VzXG4gIGZvciAoY29uc3QgbmFtZSBpbiBjbGFzc0luZm8pIHtcbiAgICBpZiAoIW9sZEluZm8gfHwgKG9sZEluZm9bbmFtZV0gIT09IGNsYXNzSW5mb1tuYW1lXSkpIHtcbiAgICAgIC8vIFdlIGV4cGxpY2l0bHkgd2FudCBhIGxvb3NlIHRydXRoeSBjaGVjayBoZXJlIGJlY2F1c2VcbiAgICAgIC8vIGl0IHNlZW1zIG1vcmUgY29udmVuaWVudCB0aGF0ICcnIGFuZCAwIGFyZSBza2lwcGVkLlxuICAgICAgcGFydC5jb21taXR0ZXIuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKG5hbWUsIEJvb2xlYW4oY2xhc3NJbmZvW25hbWVdKSk7XG4gICAgfVxuICB9XG4gIGNsYXNzTWFwQ2FjaGUuc2V0KHBhcnQsIGNsYXNzSW5mbyk7XG59KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtkaXJlY3RpdmUsIFBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBuZXcgV2Vha01hcDxQYXJ0LCB1bmtub3duPigpO1xuXG4vKipcbiAqIFByZXZlbnRzIHJlLXJlbmRlciBvZiBhIHRlbXBsYXRlIGZ1bmN0aW9uIHVudGlsIGEgc2luZ2xlIHZhbHVlIG9yIGFuIGFycmF5IG9mXG4gKiB2YWx1ZXMgY2hhbmdlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiBodG1sYFxuICogICA8ZGl2PlxuICogICAgICR7Z3VhcmQoW3VzZXIuaWQsIGNvbXBhbnkuaWRdLCAoKSA9PiBodG1sYC4uLmApfVxuICogICA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIEluIHRoaXMgY2FzZSwgdGhlIHRlbXBsYXRlIG9ubHkgcmVuZGVycyBpZiBlaXRoZXIgYHVzZXIuaWRgIG9yIGBjb21wYW55LmlkYFxuICogY2hhbmdlcy5cbiAqXG4gKiBndWFyZCgpIGlzIHVzZWZ1bCB3aXRoIGltbXV0YWJsZSBkYXRhIHBhdHRlcm5zLCBieSBwcmV2ZW50aW5nIGV4cGVuc2l2ZSB3b3JrXG4gKiB1bnRpbCBkYXRhIHVwZGF0ZXMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogaHRtbGBcbiAqICAgPGRpdj5cbiAqICAgICAke2d1YXJkKFtpbW11dGFibGVJdGVtc10sICgpID0+IGltbXV0YWJsZUl0ZW1zLm1hcChpID0+IGh0bWxgJHtpfWApKX1cbiAqICAgPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBJbiB0aGlzIGNhc2UsIGl0ZW1zIGFyZSBtYXBwZWQgb3ZlciBvbmx5IHdoZW4gdGhlIGFycmF5IHJlZmVyZW5jZSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgdG8gY2hlY2sgYmVmb3JlIHJlLXJlbmRlcmluZ1xuICogQHBhcmFtIGYgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBndWFyZCA9XG4gICAgZGlyZWN0aXZlKCh2YWx1ZTogdW5rbm93biwgZjogKCkgPT4gdW5rbm93bikgPT4gKHBhcnQ6IFBhcnQpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1ZhbHVlcy5nZXQocGFydCk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgLy8gRGlydHktY2hlY2sgYXJyYXlzIGJ5IGl0ZW1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJldmlvdXNWYWx1ZSkgJiZcbiAgICAgICAgICAgIHByZXZpb3VzVmFsdWUubGVuZ3RoID09PSB2YWx1ZS5sZW5ndGggJiZcbiAgICAgICAgICAgIHZhbHVlLmV2ZXJ5KCh2LCBpKSA9PiB2ID09PSBwcmV2aW91c1ZhbHVlW2ldKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBwcmV2aW91c1ZhbHVlID09PSB2YWx1ZSAmJlxuICAgICAgICAgICh2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IHByZXZpb3VzVmFsdWVzLmhhcyhwYXJ0KSkpIHtcbiAgICAgICAgLy8gRGlydHktY2hlY2sgbm9uLWFycmF5cyBieSBpZGVudGl0eVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBhcnQuc2V0VmFsdWUoZigpKTtcbiAgICAgIC8vIENvcHkgdGhlIHZhbHVlIGlmIGl0J3MgYW4gYXJyYXkgc28gdGhhdCBpZiBpdCdzIG11dGF0ZWQgd2UgZG9uJ3QgZm9yZ2V0XG4gICAgICAvLyB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZXMgd2VyZS5cbiAgICAgIHByZXZpb3VzVmFsdWVzLnNldChcbiAgICAgICAgICBwYXJ0LCBBcnJheS5pc0FycmF5KHZhbHVlKSA/IEFycmF5LmZyb20odmFsdWUpIDogdmFsdWUpO1xuICAgIH0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG4vKipcbiAqIEZvciBBdHRyaWJ1dGVQYXJ0cywgc2V0cyB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyBkZWZpbmVkIGFuZCByZW1vdmVzXG4gKiB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogRm9yIG90aGVyIHBhcnQgdHlwZXMsIHRoaXMgZGlyZWN0aXZlIGlzIGEgbm8tb3AuXG4gKi9cbmV4cG9ydCBjb25zdCBpZkRlZmluZWQgPSBkaXJlY3RpdmUoKHZhbHVlOiB1bmtub3duKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkge1xuICAgIGlmICh2YWx1ZSAhPT0gcGFydC52YWx1ZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHBhcnQuY29tbWl0dGVyLm5hbWU7XG4gICAgICBwYXJ0LmNvbW1pdHRlci5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbn0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZUZufSBmcm9tICcuLi9saWIvZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7Y3JlYXRlTWFya2VyLCBkaXJlY3RpdmUsIE5vZGVQYXJ0LCBQYXJ0LCByZW1vdmVOb2RlcywgcmVwYXJlbnROb2Rlc30gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5leHBvcnQgdHlwZSBLZXlGbjxUPiA9IChpdGVtOiBULCBpbmRleDogbnVtYmVyKSA9PiB1bmtub3duO1xuZXhwb3J0IHR5cGUgSXRlbVRlbXBsYXRlPFQ+ID0gKGl0ZW06IFQsIGluZGV4OiBudW1iZXIpID0+IHVua25vd247XG5cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyBwYXJ0c1xuLy8gVE9ETyhrc2NoYWFmKTogUmVmYWN0b3IgaW50byBQYXJ0IEFQST9cbmNvbnN0IGNyZWF0ZUFuZEluc2VydFBhcnQgPVxuICAgIChjb250YWluZXJQYXJ0OiBOb2RlUGFydCwgYmVmb3JlUGFydD86IE5vZGVQYXJ0KTogTm9kZVBhcnQgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyUGFydC5zdGFydE5vZGUucGFyZW50Tm9kZSBhcyBOb2RlO1xuICAgICAgY29uc3QgYmVmb3JlTm9kZSA9IGJlZm9yZVBhcnQgPT09IHVuZGVmaW5lZCA/IGNvbnRhaW5lclBhcnQuZW5kTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlUGFydC5zdGFydE5vZGU7XG4gICAgICBjb25zdCBzdGFydE5vZGUgPSBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBiZWZvcmVOb2RlKTtcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIGJlZm9yZU5vZGUpO1xuICAgICAgY29uc3QgbmV3UGFydCA9IG5ldyBOb2RlUGFydChjb250YWluZXJQYXJ0Lm9wdGlvbnMpO1xuICAgICAgbmV3UGFydC5pbnNlcnRBZnRlck5vZGUoc3RhcnROb2RlKTtcbiAgICAgIHJldHVybiBuZXdQYXJ0O1xuICAgIH07XG5cbmNvbnN0IHVwZGF0ZVBhcnQgPSAocGFydDogTm9kZVBhcnQsIHZhbHVlOiB1bmtub3duKSA9PiB7XG4gIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICBwYXJ0LmNvbW1pdCgpO1xuICByZXR1cm4gcGFydDtcbn07XG5cbmNvbnN0IGluc2VydFBhcnRCZWZvcmUgPVxuICAgIChjb250YWluZXJQYXJ0OiBOb2RlUGFydCwgcGFydDogTm9kZVBhcnQsIHJlZj86IE5vZGVQYXJ0KSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBjb250YWluZXJQYXJ0LnN0YXJ0Tm9kZS5wYXJlbnROb2RlIGFzIE5vZGU7XG4gICAgICBjb25zdCBiZWZvcmVOb2RlID0gcmVmID8gcmVmLnN0YXJ0Tm9kZSA6IGNvbnRhaW5lclBhcnQuZW5kTm9kZTtcbiAgICAgIGNvbnN0IGVuZE5vZGUgPSBwYXJ0LmVuZE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoZW5kTm9kZSAhPT0gYmVmb3JlTm9kZSkge1xuICAgICAgICByZXBhcmVudE5vZGVzKGNvbnRhaW5lciwgcGFydC5zdGFydE5vZGUsIGVuZE5vZGUsIGJlZm9yZU5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbmNvbnN0IHJlbW92ZVBhcnQgPSAocGFydDogTm9kZVBhcnQpID0+IHtcbiAgcmVtb3ZlTm9kZXMoXG4gICAgICBwYXJ0LnN0YXJ0Tm9kZS5wYXJlbnROb2RlISwgcGFydC5zdGFydE5vZGUsIHBhcnQuZW5kTm9kZS5uZXh0U2libGluZyk7XG59O1xuXG4vLyBIZWxwZXIgZm9yIGdlbmVyYXRpbmcgYSBtYXAgb2YgYXJyYXkgaXRlbSB0byBpdHMgaW5kZXggb3ZlciBhIHN1YnNldFxuLy8gb2YgYW4gYXJyYXkgKHVzZWQgdG8gbGF6aWx5IGdlbmVyYXRlIGBuZXdLZXlUb0luZGV4TWFwYCBhbmRcbi8vIGBvbGRLZXlUb0luZGV4TWFwYClcbmNvbnN0IGdlbmVyYXRlTWFwID0gKGxpc3Q6IHVua25vd25bXSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpID0+IHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICBtYXAuc2V0KGxpc3RbaV0sIGkpO1xuICB9XG4gIHJldHVybiBtYXA7XG59O1xuXG4vLyBTdG9yZXMgcHJldmlvdXMgb3JkZXJlZCBsaXN0IG9mIHBhcnRzIGFuZCBtYXAgb2Yga2V5IHRvIGluZGV4XG5jb25zdCBwYXJ0TGlzdENhY2hlID0gbmV3IFdlYWtNYXA8Tm9kZVBhcnQsIChOb2RlUGFydCB8IG51bGwpW10+KCk7XG5jb25zdCBrZXlMaXN0Q2FjaGUgPSBuZXcgV2Vha01hcDxOb2RlUGFydCwgdW5rbm93bltdPigpO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgcmVwZWF0cyBhIHNlcmllcyBvZiB2YWx1ZXMgKHVzdWFsbHkgYFRlbXBsYXRlUmVzdWx0c2ApXG4gKiBnZW5lcmF0ZWQgZnJvbSBhbiBpdGVyYWJsZSwgYW5kIHVwZGF0ZXMgdGhvc2UgaXRlbXMgZWZmaWNpZW50bHkgd2hlbiB0aGVcbiAqIGl0ZXJhYmxlIGNoYW5nZXMgYmFzZWQgb24gdXNlci1wcm92aWRlZCBga2V5c2AgYXNzb2NpYXRlZCB3aXRoIGVhY2ggaXRlbS5cbiAqXG4gKiBOb3RlIHRoYXQgaWYgYSBga2V5Rm5gIGlzIHByb3ZpZGVkLCBzdHJpY3Qga2V5LXRvLURPTSBtYXBwaW5nIGlzIG1haW50YWluZWQsXG4gKiBtZWFuaW5nIHByZXZpb3VzIERPTSBmb3IgYSBnaXZlbiBrZXkgaXMgbW92ZWQgaW50byB0aGUgbmV3IHBvc2l0aW9uIGlmXG4gKiBuZWVkZWQsIGFuZCBET00gd2lsbCBuZXZlciBiZSByZXVzZWQgd2l0aCB2YWx1ZXMgZm9yIGRpZmZlcmVudCBrZXlzIChuZXcgRE9NXG4gKiB3aWxsIGFsd2F5cyBiZSBjcmVhdGVkIGZvciBuZXcga2V5cykuIFRoaXMgaXMgZ2VuZXJhbGx5IHRoZSBtb3N0IGVmZmljaWVudFxuICogd2F5IHRvIHVzZSBgcmVwZWF0YCBzaW5jZSBpdCBwZXJmb3JtcyBtaW5pbXVtIHVubmVjZXNzYXJ5IHdvcmsgZm9yIGluc2VydGlvbnNcbiAqIGFtZCByZW1vdmFscy5cbiAqXG4gKiBJTVBPUlRBTlQ6IElmIHByb3ZpZGluZyBhIGBrZXlGbmAsIGtleXMgKm11c3QqIGJlIHVuaXF1ZSBmb3IgYWxsIGl0ZW1zIGluIGFcbiAqIGdpdmVuIGNhbGwgdG8gYHJlcGVhdGAuIFRoZSBiZWhhdmlvciB3aGVuIHR3byBvciBtb3JlIGl0ZW1zIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBpcyB1bmRlZmluZWQuXG4gKlxuICogSWYgbm8gYGtleUZuYCBpcyBwcm92aWRlZCwgdGhpcyBkaXJlY3RpdmUgd2lsbCBwZXJmb3JtIHNpbWlsYXIgdG8gbWFwcGluZ1xuICogaXRlbXMgdG8gdmFsdWVzLCBhbmQgRE9NIHdpbGwgYmUgcmV1c2VkIGFnYWluc3QgcG90ZW50aWFsbHkgZGlmZmVyZW50IGl0ZW1zLlxuICovXG5leHBvcnQgY29uc3QgcmVwZWF0ID1cbiAgICBkaXJlY3RpdmUoXG4gICAgICAgIDxUPihpdGVtczogSXRlcmFibGU8VD4sXG4gICAgICAgICAgICBrZXlGbk9yVGVtcGxhdGU6IEtleUZuPFQ+fEl0ZW1UZW1wbGF0ZTxUPixcbiAgICAgICAgICAgIHRlbXBsYXRlPzogSXRlbVRlbXBsYXRlPFQ+KTpcbiAgICAgICAgICAgIERpcmVjdGl2ZUZuID0+IHtcbiAgICAgICAgICAgICAgbGV0IGtleUZuOiBLZXlGbjxUPjtcbiAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IGtleUZuT3JUZW1wbGF0ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlGbk9yVGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGtleUZuID0ga2V5Rm5PclRlbXBsYXRlIGFzIEtleUZuPFQ+O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChjb250YWluZXJQYXJ0OiBQYXJ0KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoY29udGFpbmVyUGFydCBpbnN0YW5jZW9mIE5vZGVQYXJ0KSkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXBlYXQgY2FuIG9ubHkgYmUgdXNlZCBpbiB0ZXh0IGJpbmRpbmdzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9sZCBwYXJ0ICYga2V5IGxpc3RzIGFyZSByZXRyaWV2ZWQgZnJvbSB0aGUgbGFzdCB1cGRhdGVcbiAgICAgICAgICAgICAgICAvLyAoYXNzb2NpYXRlZCB3aXRoIHRoZSBwYXJ0IGZvciB0aGlzIGluc3RhbmNlIG9mIHRoZSBkaXJlY3RpdmUpXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkUGFydHMgPSBwYXJ0TGlzdENhY2hlLmdldChjb250YWluZXJQYXJ0KSB8fCBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRLZXlzID0ga2V5TGlzdENhY2hlLmdldChjb250YWluZXJQYXJ0KSB8fCBbXTtcblxuICAgICAgICAgICAgICAgIC8vIE5ldyBwYXJ0IGxpc3Qgd2lsbCBiZSBidWlsdCB1cCBhcyB3ZSBnbyAoZWl0aGVyIHJldXNlZCBmcm9tXG4gICAgICAgICAgICAgICAgLy8gb2xkIHBhcnRzIG9yIGNyZWF0ZWQgZm9yIG5ldyBrZXlzIGluIHRoaXMgdXBkYXRlKS4gVGhpcyBpc1xuICAgICAgICAgICAgICAgIC8vIHNhdmVkIGluIHRoZSBhYm92ZSBjYWNoZSBhdCB0aGUgZW5kIG9mIHRoZSB1cGRhdGUuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UGFydHM6IE5vZGVQYXJ0W10gPSBbXTtcblxuICAgICAgICAgICAgICAgIC8vIE5ldyB2YWx1ZSBsaXN0IGlzIGVhZ2VybHkgZ2VuZXJhdGVkIGZyb20gaXRlbXMgYWxvbmcgd2l0aCBhXG4gICAgICAgICAgICAgICAgLy8gcGFyYWxsZWwgYXJyYXkgaW5kaWNhdGluZyBpdHMga2V5LlxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlczogdW5rbm93bltdID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3S2V5czogdW5rbm93bltdID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgIG5ld0tleXNbaW5kZXhdID0ga2V5Rm4gPyBrZXlGbihpdGVtLCBpbmRleCkgOiBpbmRleDtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1tpbmRleF0gPSB0ZW1wbGF0ZSAhKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFwcyBmcm9tIGtleSB0byBpbmRleCBmb3IgY3VycmVudCBhbmQgcHJldmlvdXMgdXBkYXRlOyB0aGVzZVxuICAgICAgICAgICAgICAgIC8vIGFyZSBnZW5lcmF0ZWQgbGF6aWx5IG9ubHkgd2hlbiBuZWVkZWQgYXMgYSBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgIC8vIG9wdGltaXphdGlvbiwgc2luY2UgdGhleSBhcmUgb25seSByZXF1aXJlZCBmb3IgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAvLyBub24tY29udGlndW91cyBjaGFuZ2VzIGluIHRoZSBsaXN0LCB3aGljaCBhcmUgbGVzcyBjb21tb24uXG4gICAgICAgICAgICAgICAgbGV0IG5ld0tleVRvSW5kZXhNYXAhOiBNYXA8dW5rbm93biwgbnVtYmVyPjtcbiAgICAgICAgICAgICAgICBsZXQgb2xkS2V5VG9JbmRleE1hcCE6IE1hcDx1bmtub3duLCBudW1iZXI+O1xuXG4gICAgICAgICAgICAgICAgLy8gSGVhZCBhbmQgdGFpbCBwb2ludGVycyB0byBvbGQgcGFydHMgYW5kIG5ldyB2YWx1ZXNcbiAgICAgICAgICAgICAgICBsZXQgb2xkSGVhZCA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IG9sZFRhaWwgPSBvbGRQYXJ0cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGxldCBuZXdIZWFkID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFpbCA9IG5ld1ZhbHVlcy5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgLy8gT3ZlcnZpZXcgb2YgTyhuKSByZWNvbmNpbGlhdGlvbiBhbGdvcml0aG0gKGdlbmVyYWwgYXBwcm9hY2hcbiAgICAgICAgICAgICAgICAvLyBiYXNlZCBvbiBpZGVhcyBmb3VuZCBpbiBpdmksIHZ1ZSwgc25hYmJkb20sIGV0Yy4pOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBXZSBzdGFydCB3aXRoIHRoZSBsaXN0IG9mIG9sZCBwYXJ0cyBhbmQgbmV3IHZhbHVlcyAoYW5kXG4gICAgICAgICAgICAgICAgLy8gYXJyYXlzIG9mXG4gICAgICAgICAgICAgICAgLy8gICB0aGVpciByZXNwZWN0aXZlIGtleXMpLCBoZWFkL3RhaWwgcG9pbnRlcnMgaW50byBlYWNoLCBhbmRcbiAgICAgICAgICAgICAgICAvLyAgIHdlIGJ1aWxkIHVwIHRoZSBuZXcgbGlzdCBvZiBwYXJ0cyBieSB1cGRhdGluZyAoYW5kIHdoZW5cbiAgICAgICAgICAgICAgICAvLyAgIG5lZWRlZCwgbW92aW5nKSBvbGQgcGFydHMgb3IgY3JlYXRpbmcgbmV3IG9uZXMuIFRoZSBpbml0aWFsXG4gICAgICAgICAgICAgICAgLy8gICBzY2VuYXJpbyBtaWdodCBsb29rIGxpa2UgdGhpcyAoZm9yIGJyZXZpdHkgb2YgdGhlIGRpYWdyYW1zLFxuICAgICAgICAgICAgICAgIC8vICAgdGhlIG51bWJlcnMgaW4gdGhlIGFycmF5IHJlZmxlY3Qga2V5cyBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgLy8gICBvbGQgcGFydHMgb3IgbmV3IHZhbHVlcywgYWx0aG91Z2gga2V5cyBhbmQgcGFydHMvdmFsdWVzIGFyZVxuICAgICAgICAgICAgICAgIC8vICAgYWN0dWFsbHkgc3RvcmVkIGluIHBhcmFsbGVsIGFycmF5cyBpbmRleGVkIHVzaW5nIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgLy8gICBoZWFkL3RhaWwgcG9pbnRlcnMpOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICBvbGRIZWFkIHYgICAgICAgICAgICAgICAgIHYgb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgb2xkS2V5czogIFswLCAxLCAyLCAzLCA0LCA1LCA2XVxuICAgICAgICAgICAgICAgIC8vICAgbmV3UGFydHM6IFsgLCAgLCAgLCAgLCAgLCAgLCAgXVxuICAgICAgICAgICAgICAgIC8vICAgbmV3S2V5czogIFswLCAyLCAxLCA0LCAzLCA3LCA2XSA8LSByZWZsZWN0cyB0aGUgdXNlcidzIG5ld1xuICAgICAgICAgICAgICAgIC8vICAgaXRlbSBvcmRlclxuICAgICAgICAgICAgICAgIC8vICAgICAgbmV3SGVhZCBeICAgICAgICAgICAgICAgICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogSXRlcmF0ZSBvbGQgJiBuZXcgbGlzdHMgZnJvbSBib3RoIHNpZGVzLCB1cGRhdGluZyxcbiAgICAgICAgICAgICAgICAvLyBzd2FwcGluZywgb3JcbiAgICAgICAgICAgICAgICAvLyAgIHJlbW92aW5nIHBhcnRzIGF0IHRoZSBoZWFkL3RhaWwgbG9jYXRpb25zIHVudGlsIG5laXRoZXJcbiAgICAgICAgICAgICAgICAvLyAgIGhlYWQgbm9yIHRhaWwgY2FuIG1vdmUuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEV4YW1wbGUgYmVsb3c6IGtleXMgYXQgaGVhZCBwb2ludGVycyBtYXRjaCwgc28gdXBkYXRlIG9sZFxuICAgICAgICAgICAgICAgIC8vIHBhcnQgMCBpbi1cbiAgICAgICAgICAgICAgICAvLyAgIHBsYWNlIChubyBuZWVkIHRvIG1vdmUgaXQpIGFuZCByZWNvcmQgcGFydCAwIGluIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgYG5ld1BhcnRzYCBsaXN0LiBUaGUgbGFzdCB0aGluZyB3ZSBkbyBpcyBhZHZhbmNlIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgYG9sZEhlYWRgIGFuZCBgbmV3SGVhZGAgcG9pbnRlcnMgKHdpbGwgYmUgcmVmbGVjdGVkIGluIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgbmV4dCBkaWFncmFtKS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgb2xkSGVhZCB2ICAgICAgICAgICAgICAgICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgMiwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgICwgICwgICwgICwgICwgIF0gPC0gaGVhZHMgbWF0Y2hlZDogdXBkYXRlIDBcbiAgICAgICAgICAgICAgICAvLyAgIGFuZCBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgIGFkdmFuY2UgYm90aCBvbGRIZWFkXG4gICAgICAgICAgICAgICAgLy8gICAmIG5ld0hlYWRcbiAgICAgICAgICAgICAgICAvLyAgICAgIG5ld0hlYWQgXiAgICAgICAgICAgICAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEV4YW1wbGUgYmVsb3c6IGhlYWQgcG9pbnRlcnMgZG9uJ3QgbWF0Y2gsIGJ1dCB0YWlsIHBvaW50ZXJzXG4gICAgICAgICAgICAgICAgLy8gZG8sIHNvXG4gICAgICAgICAgICAgICAgLy8gICB1cGRhdGUgcGFydCA2IGluIHBsYWNlIChubyBuZWVkIHRvIG1vdmUgaXQpLCBhbmQgcmVjb3JkXG4gICAgICAgICAgICAgICAgLy8gICBwYXJ0IDYgaW4gdGhlIGBuZXdQYXJ0c2AgbGlzdC4gTGFzdCwgYWR2YW5jZSB0aGUgYG9sZFRhaWxgXG4gICAgICAgICAgICAgICAgLy8gICBhbmQgYG9sZEhlYWRgIHBvaW50ZXJzLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBvbGRIZWFkIHYgICAgICAgICAgICAgIHYgb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgb2xkS2V5czogIFswLCAxLCAyLCAzLCA0LCA1LCA2XVxuICAgICAgICAgICAgICAgIC8vICAgbmV3UGFydHM6IFswLCAgLCAgLCAgLCAgLCAgLCA2XSA8LSB0YWlscyBtYXRjaGVkOiB1cGRhdGUgNlxuICAgICAgICAgICAgICAgIC8vICAgYW5kIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl0gICAgYWR2YW5jZSBib3RoIG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgICYgbmV3VGFpbFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3SGVhZCBeICAgICAgICAgICAgICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogSWYgbmVpdGhlciBoZWFkIG5vciB0YWlsIG1hdGNoOyBuZXh0IGNoZWNrIGlmIG9uZSBvZiB0aGVcbiAgICAgICAgICAgICAgICAvLyBvbGQgaGVhZC90YWlsXG4gICAgICAgICAgICAgICAgLy8gICBpdGVtcyB3YXMgcmVtb3ZlZC4gV2UgZmlyc3QgbmVlZCB0byBnZW5lcmF0ZSB0aGUgcmV2ZXJzZVxuICAgICAgICAgICAgICAgIC8vICAgbWFwIG9mIG5ldyBrZXlzIHRvIGluZGV4IChgbmV3S2V5VG9JbmRleE1hcGApLCB3aGljaCBpc1xuICAgICAgICAgICAgICAgIC8vICAgZG9uZSBvbmNlIGxhemlseSBhcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiwgc2luY2Ugd2VcbiAgICAgICAgICAgICAgICAvLyAgIG9ubHkgaGl0IHRoaXMgY2FzZSBpZiBtdWx0aXBsZSBub24tY29udGlndW91cyBjaGFuZ2VzIHdlcmVcbiAgICAgICAgICAgICAgICAvLyAgIG1hZGUuIE5vdGUgdGhhdCBmb3IgY29udGlndW91cyByZW1vdmFsIGFueXdoZXJlIGluIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgbGlzdCwgdGhlIGhlYWQgYW5kIHRhaWxzIHdvdWxkIGFkdmFuY2UgZnJvbSBlaXRoZXIgZW5kIGFuZFxuICAgICAgICAgICAgICAgIC8vICAgcGFzcyBlYWNoIG90aGVyIGJlZm9yZSB3ZSBnZXQgdG8gdGhpcyBjYXNlIGFuZCByZW1vdmFsc1xuICAgICAgICAgICAgICAgIC8vICAgd291bGQgYmUgaGFuZGxlZCBpbiB0aGUgZmluYWwgd2hpbGUgbG9vcCB3aXRob3V0IG5lZWRpbmcgdG9cbiAgICAgICAgICAgICAgICAvLyAgIGdlbmVyYXRlIHRoZSBtYXAuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEV4YW1wbGUgYmVsb3c6IFRoZSBrZXkgYXQgYG9sZFRhaWxgIHdhcyByZW1vdmVkIChubyBsb25nZXJcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGBuZXdLZXlUb0luZGV4TWFwYCksIHNvIHJlbW92ZSB0aGF0IHBhcnQgZnJvbSB0aGUgRE9NIGFuZFxuICAgICAgICAgICAgICAgIC8vICAgYWR2YW5jZSBqdXN0IHRoZSBgb2xkVGFpbGAgcG9pbnRlci5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2xkSGVhZCB2ICAgICAgICAgICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgMiwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgICwgICwgICwgICwgICwgNl0gPC0gNSBub3QgaW4gbmV3IG1hcDsgcmVtb3ZlXG4gICAgICAgICAgICAgICAgLy8gICA1IGFuZCBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgIGFkdmFuY2Ugb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3SGVhZCBeICAgICAgICAgICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogT25jZSBoZWFkIGFuZCB0YWlsIGNhbm5vdCBtb3ZlLCBhbnkgbWlzbWF0Y2hlcyBhcmUgZHVlIHRvXG4gICAgICAgICAgICAgICAgLy8gZWl0aGVyIG5ldyBvclxuICAgICAgICAgICAgICAgIC8vICAgbW92ZWQgaXRlbXM7IGlmIGEgbmV3IGtleSBpcyBpbiB0aGUgcHJldmlvdXMgXCJvbGQga2V5IHRvXG4gICAgICAgICAgICAgICAgLy8gICBvbGQgaW5kZXhcIiBtYXAsIG1vdmUgdGhlIG9sZCBwYXJ0IHRvIHRoZSBuZXcgbG9jYXRpb24sXG4gICAgICAgICAgICAgICAgLy8gICBvdGhlcndpc2UgY3JlYXRlIGFuZCBpbnNlcnQgYSBuZXcgcGFydC4gTm90ZSB0aGF0IHdoZW5cbiAgICAgICAgICAgICAgICAvLyAgIG1vdmluZyBhbiBvbGQgcGFydCB3ZSBudWxsIGl0cyBwb3NpdGlvbiBpbiB0aGUgb2xkUGFydHNcbiAgICAgICAgICAgICAgICAvLyAgIGFycmF5IGlmIGl0IGxpZXMgYmV0d2VlbiB0aGUgaGVhZCBhbmQgdGFpbCBzbyB3ZSBrbm93IHRvXG4gICAgICAgICAgICAgICAgLy8gICBza2lwIGl0IHdoZW4gdGhlIHBvaW50ZXJzIGdldCB0aGVyZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzogbmVpdGhlciBoZWFkIG5vciB0YWlsIG1hdGNoLCBhbmQgbmVpdGhlclxuICAgICAgICAgICAgICAgIC8vIHdlcmUgcmVtb3ZlZDtcbiAgICAgICAgICAgICAgICAvLyAgIHNvIGZpbmQgdGhlIGBuZXdIZWFkYCBrZXkgaW4gdGhlIGBvbGRLZXlUb0luZGV4TWFwYCwgYW5kXG4gICAgICAgICAgICAgICAgLy8gICBtb3ZlIHRoYXQgb2xkIHBhcnQncyBET00gaW50byB0aGUgbmV4dCBoZWFkIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgLy8gICAoYmVmb3JlIGBvbGRQYXJ0c1tvbGRIZWFkXWApLiBMYXN0LCBudWxsIHRoZSBwYXJ0IGluIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgYG9sZFBhcnRgIGFycmF5IHNpbmNlIGl0IHdhcyBzb21ld2hlcmUgaW4gdGhlIHJlbWFpbmluZ1xuICAgICAgICAgICAgICAgIC8vICAgb2xkUGFydHMgc3RpbGwgdG8gYmUgc2Nhbm5lZCAoYmV0d2VlbiB0aGUgaGVhZCBhbmQgdGFpbFxuICAgICAgICAgICAgICAgIC8vICAgcG9pbnRlcnMpIHNvIHRoYXQgd2Uga25vdyB0byBza2lwIHRoYXQgb2xkIHBhcnQgb24gZnV0dXJlXG4gICAgICAgICAgICAgICAgLy8gICBpdGVyYXRpb25zLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBvbGRIZWFkIHYgICAgICAgIHYgb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgb2xkS2V5czogIFswLCAxLCAtLCAzLCA0LCA1LCA2XVxuICAgICAgICAgICAgICAgIC8vICAgbmV3UGFydHM6IFswLCAyLCAgLCAgLCAgLCAgLCA2XSA8LSBzdHVjazsgdXBkYXRlICYgbW92ZSAyXG4gICAgICAgICAgICAgICAgLy8gICBpbnRvIHBsYWNlIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl0gICAgYW5kIGFkdmFuY2VcbiAgICAgICAgICAgICAgICAvLyAgIG5ld0hlYWRcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld0hlYWQgXiAgICAgICAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIE5vdGUgdGhhdCBmb3IgbW92ZXMvaW5zZXJ0aW9ucyBsaWtlIHRoZSBvbmUgYWJvdmUsIGEgcGFydFxuICAgICAgICAgICAgICAgIC8vIGluc2VydGVkIGF0XG4gICAgICAgICAgICAgICAgLy8gICB0aGUgaGVhZCBwb2ludGVyIGlzIGluc2VydGVkIGJlZm9yZSB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgIC8vICAgYG9sZFBhcnRzW29sZEhlYWRdYCwgYW5kIGEgcGFydCBpbnNlcnRlZCBhdCB0aGUgdGFpbFxuICAgICAgICAgICAgICAgIC8vICAgcG9pbnRlciBpcyBpbnNlcnRlZCBiZWZvcmUgYG5ld1BhcnRzW25ld1RhaWwrMV1gLiBUaGVcbiAgICAgICAgICAgICAgICAvLyAgIHNlZW1pbmcgYXN5bW1ldHJ5IGxpZXMgaW4gdGhlIGZhY3QgdGhhdCBuZXcgcGFydHMgYXJlIG1vdmVkXG4gICAgICAgICAgICAgICAgLy8gICBpbnRvIHBsYWNlIG91dHNpZGUgaW4sIHNvIHRvIHRoZSByaWdodCBvZiB0aGUgaGVhZCBwb2ludGVyXG4gICAgICAgICAgICAgICAgLy8gICBhcmUgb2xkIHBhcnRzLCBhbmQgdG8gdGhlIHJpZ2h0IG9mIHRoZSB0YWlsIHBvaW50ZXIgYXJlIG5ld1xuICAgICAgICAgICAgICAgIC8vICAgcGFydHMuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIFdlIGFsd2F5cyByZXN0YXJ0IGJhY2sgZnJvbSB0aGUgdG9wIG9mIHRoZSBhbGdvcml0aG0sXG4gICAgICAgICAgICAgICAgLy8gYWxsb3dpbmcgbWF0Y2hpbmdcbiAgICAgICAgICAgICAgICAvLyAgIGFuZCBzaW1wbGUgdXBkYXRlcyBpbiBwbGFjZSB0byBjb250aW51ZS4uLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiB0aGUgaGVhZCBwb2ludGVycyBvbmNlIGFnYWluIG1hdGNoLCBzb1xuICAgICAgICAgICAgICAgIC8vIHNpbXBseSB1cGRhdGVcbiAgICAgICAgICAgICAgICAvLyAgIHBhcnQgMSBhbmQgcmVjb3JkIGl0IGluIHRoZSBgbmV3UGFydHNgIGFycmF5LiAgTGFzdCxcbiAgICAgICAgICAgICAgICAvLyAgIGFkdmFuY2UgYm90aCBoZWFkIHBvaW50ZXJzLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBvbGRIZWFkIHYgICAgICAgIHYgb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgb2xkS2V5czogIFswLCAxLCAtLCAzLCA0LCA1LCA2XVxuICAgICAgICAgICAgICAgIC8vICAgbmV3UGFydHM6IFswLCAyLCAxLCAgLCAgLCAgLCA2XSA8LSBoZWFkcyBtYXRjaGVkOyB1cGRhdGUgMVxuICAgICAgICAgICAgICAgIC8vICAgYW5kIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl0gICAgYWR2YW5jZSBib3RoIG9sZEhlYWRcbiAgICAgICAgICAgICAgICAvLyAgICYgbmV3SGVhZFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgbmV3SGVhZCBeICAgICAgICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogQXMgbWVudGlvbmVkIGFib3ZlLCBpdGVtcyB0aGF0IHdlcmUgbW92ZWQgYXMgYSByZXN1bHQgb2ZcbiAgICAgICAgICAgICAgICAvLyBiZWluZyBzdHVja1xuICAgICAgICAgICAgICAgIC8vICAgKHRoZSBmaW5hbCBlbHNlIGNsYXVzZSBpbiB0aGUgY29kZSBiZWxvdykgYXJlIG1hcmtlZCB3aXRoXG4gICAgICAgICAgICAgICAgLy8gICBudWxsLCBzbyB3ZSBhbHdheXMgYWR2YW5jZSBvbGQgcG9pbnRlcnMgb3ZlciB0aGVzZSBzbyB3ZSdyZVxuICAgICAgICAgICAgICAgIC8vICAgY29tcGFyaW5nIHRoZSBuZXh0IGFjdHVhbCBvbGQgdmFsdWUgb24gZWl0aGVyIGVuZC5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzogYG9sZEhlYWRgIGlzIG51bGwgKGFscmVhZHkgcGxhY2VkIGluXG4gICAgICAgICAgICAgICAgLy8gbmV3UGFydHMpLCBzb1xuICAgICAgICAgICAgICAgIC8vICAgYWR2YW5jZSBgb2xkSGVhZGAuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIG9sZEhlYWQgdiAgICAgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIC0sIDMsIDQsIDUsIDZdIC8vIG9sZCBoZWFkIGFscmVhZHkgdXNlZDtcbiAgICAgICAgICAgICAgICAvLyAgIGFkdmFuY2UgbmV3UGFydHM6IFswLCAyLCAxLCAgLCAgLCAgLCA2XSAvLyBvbGRIZWFkIG5ld0tleXM6XG4gICAgICAgICAgICAgICAgLy8gICBbMCwgMiwgMSwgNCwgMywgNywgNl1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIG5ld0hlYWQgXiAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIE5vdGUgaXQncyBub3QgY3JpdGljYWwgdG8gbWFyayBvbGQgcGFydHMgYXMgbnVsbCB3aGVuIHRoZXlcbiAgICAgICAgICAgICAgICAvLyBhcmUgbW92ZWRcbiAgICAgICAgICAgICAgICAvLyAgIGZyb20gaGVhZCB0byB0YWlsIG9yIHRhaWwgdG8gaGVhZCwgc2luY2UgdGhleSB3aWxsIGJlXG4gICAgICAgICAgICAgICAgLy8gICBvdXRzaWRlIHRoZSBwb2ludGVyIHJhbmdlIGFuZCBuZXZlciB2aXNpdGVkIGFnYWluLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBIZXJlIHRoZSBvbGQgdGFpbCBrZXkgbWF0Y2hlcyB0aGUgbmV3IGhlYWRcbiAgICAgICAgICAgICAgICAvLyBrZXksIHNvXG4gICAgICAgICAgICAgICAgLy8gICB0aGUgcGFydCBhdCB0aGUgYG9sZFRhaWxgIHBvc2l0aW9uIGFuZCBtb3ZlIGl0cyBET00gdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gICBuZXcgaGVhZCBwb3NpdGlvbiAoYmVmb3JlIGBvbGRQYXJ0c1tvbGRIZWFkXWApLiBMYXN0LFxuICAgICAgICAgICAgICAgIC8vICAgYWR2YW5jZSBgb2xkVGFpbGAgYW5kIGBuZXdIZWFkYCBwb2ludGVycy5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgb2xkSGVhZCB2ICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgLSwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgMiwgMSwgNCwgICwgICwgNl0gPC0gb2xkIHRhaWwgbWF0Y2hlcyBuZXdcbiAgICAgICAgICAgICAgICAvLyAgIGhlYWQ6IHVwZGF0ZSBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgJiBtb3ZlIDQsXG4gICAgICAgICAgICAgICAgLy8gICBhZHZhbmNlIG9sZFRhaWwgJiBuZXdIZWFkXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBuZXdIZWFkIF4gICAgIF4gbmV3VGFpbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBPbGQgYW5kIG5ldyBoZWFkIGtleXMgbWF0Y2gsIHNvIHVwZGF0ZSB0aGVcbiAgICAgICAgICAgICAgICAvLyBvbGQgaGVhZFxuICAgICAgICAgICAgICAgIC8vICAgcGFydCBpbiBwbGFjZSwgYW5kIGFkdmFuY2UgdGhlIGBvbGRIZWFkYCBhbmQgYG5ld0hlYWRgXG4gICAgICAgICAgICAgICAgLy8gICBwb2ludGVycy5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgb2xkSGVhZCB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgLSwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgMiwgMSwgNCwgMywgICAsNl0gPC0gaGVhZHMgbWF0Y2g6IHVwZGF0ZSAzXG4gICAgICAgICAgICAgICAgLy8gICBhbmQgYWR2YW5jZSBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgIG9sZEhlYWQgJlxuICAgICAgICAgICAgICAgIC8vICAgbmV3SGVhZFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgbmV3SGVhZCBeICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogT25jZSB0aGUgbmV3IG9yIG9sZCBwb2ludGVycyBtb3ZlIHBhc3QgZWFjaCBvdGhlciB0aGVuIGFsbFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmVcbiAgICAgICAgICAgICAgICAvLyAgIGxlZnQgaXMgYWRkaXRpb25zIChpZiBvbGQgbGlzdCBleGhhdXN0ZWQpIG9yIHJlbW92YWxzIChpZlxuICAgICAgICAgICAgICAgIC8vICAgbmV3IGxpc3QgZXhoYXVzdGVkKS4gVGhvc2UgYXJlIGhhbmRsZWQgaW4gdGhlIGZpbmFsIHdoaWxlXG4gICAgICAgICAgICAgICAgLy8gICBsb29wcyBhdCB0aGUgZW5kLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBgb2xkSGVhZGAgZXhjZWVkZWQgYG9sZFRhaWxgLCBzbyB3ZSdyZSBkb25lXG4gICAgICAgICAgICAgICAgLy8gd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIG1haW4gbG9vcC4gIENyZWF0ZSB0aGUgcmVtYWluaW5nIHBhcnQgYW5kIGluc2VydCBpdCBhdCB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIG5ldyBoZWFkIHBvc2l0aW9uLCBhbmQgdGhlIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIChvbGRIZWFkID4gb2xkVGFpbClcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgLSwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgMiwgMSwgNCwgMywgNyAsNl0gPC0gY3JlYXRlIGFuZCBpbnNlcnQgN1xuICAgICAgICAgICAgICAgIC8vICAgbmV3S2V5czogIFswLCAyLCAxLCA0LCAzLCA3LCA2XVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZCBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogTm90ZSB0aGF0IHRoZSBvcmRlciBvZiB0aGUgaWYvZWxzZSBjbGF1c2VzIGlzIG5vdCBpbXBvcnRhbnRcbiAgICAgICAgICAgICAgICAvLyB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGFsZ29yaXRobSwgYXMgbG9uZyBhcyB0aGUgbnVsbCBjaGVja3MgY29tZSBmaXJzdCAodG8gZW5zdXJlXG4gICAgICAgICAgICAgICAgLy8gICB3ZSdyZSBhbHdheXMgd29ya2luZyBvbiB2YWxpZCBvbGQgcGFydHMpIGFuZCB0aGF0IHRoZSBmaW5hbFxuICAgICAgICAgICAgICAgIC8vICAgZWxzZSBjbGF1c2UgY29tZXMgbGFzdCAoc2luY2UgdGhhdCdzIHdoZXJlIHRoZSBleHBlbnNpdmVcbiAgICAgICAgICAgICAgICAvLyAgIG1vdmVzIG9jY3VyKS4gVGhlIG9yZGVyIG9mIHJlbWFpbmluZyBjbGF1c2VzIGlzIGlzIGp1c3QgYVxuICAgICAgICAgICAgICAgIC8vICAgc2ltcGxlIGd1ZXNzIGF0IHdoaWNoIGNhc2VzIHdpbGwgYmUgbW9zdCBjb21tb24uXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIFRPRE8oa3NjaGFhZikgTm90ZSwgd2UgY291bGQgY2FsY3VsYXRlIHRoZSBsb25nZXN0XG4gICAgICAgICAgICAgICAgLy8gaW5jcmVhc2luZ1xuICAgICAgICAgICAgICAgIC8vICAgc3Vic2VxdWVuY2UgKExJUykgb2Ygb2xkIGl0ZW1zIGluIG5ldyBwb3NpdGlvbiwgYW5kIG9ubHlcbiAgICAgICAgICAgICAgICAvLyAgIG1vdmUgdGhvc2Ugbm90IGluIHRoZSBMSVMgc2V0LiBIb3dldmVyIHRoYXQgY29zdHMgTyhubG9nbilcbiAgICAgICAgICAgICAgICAvLyAgIHRpbWUgYW5kIGFkZHMgYSBiaXQgbW9yZSBjb2RlLCBhbmQgb25seSBoZWxwcyBtYWtlIHJhcmVcbiAgICAgICAgICAgICAgICAvLyAgIHR5cGVzIG9mIG11dGF0aW9ucyByZXF1aXJlIGZld2VyIG1vdmVzLiBUaGUgYWJvdmUgaGFuZGxlc1xuICAgICAgICAgICAgICAgIC8vICAgcmVtb3ZlcywgYWRkcywgcmV2ZXJzYWwsIHN3YXBzLCBhbmQgc2luZ2xlIG1vdmVzIG9mXG4gICAgICAgICAgICAgICAgLy8gICBjb250aWd1b3VzIGl0ZW1zIGluIGxpbmVhciB0aW1lLCBpbiB0aGUgbWluaW11bSBudW1iZXIgb2ZcbiAgICAgICAgICAgICAgICAvLyAgIG1vdmVzLiBBcyB0aGUgbnVtYmVyIG9mIG11bHRpcGxlIG1vdmVzIHdoZXJlIExJUyBtaWdodCBoZWxwXG4gICAgICAgICAgICAgICAgLy8gICBhcHByb2FjaGVzIGEgcmFuZG9tIHNodWZmbGUsIHRoZSBMSVMgb3B0aW1pemF0aW9uIGJlY29tZXNcbiAgICAgICAgICAgICAgICAvLyAgIGxlc3MgaGVscGZ1bCwgc28gaXQgc2VlbXMgbm90IHdvcnRoIHRoZSBjb2RlIGF0IHRoaXMgcG9pbnQuXG4gICAgICAgICAgICAgICAgLy8gICBDb3VsZCByZWNvbnNpZGVyIGlmIGEgY29tcGVsbGluZyBjYXNlIGFyaXNlcy5cblxuICAgICAgICAgICAgICAgIHdoaWxlIChvbGRIZWFkIDw9IG9sZFRhaWwgJiYgbmV3SGVhZCA8PSBuZXdUYWlsKSB7XG4gICAgICAgICAgICAgICAgICBpZiAob2xkUGFydHNbb2xkSGVhZF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYG51bGxgIG1lYW5zIG9sZCBwYXJ0IGF0IGhlYWQgaGFzIGFscmVhZHkgYmVlbiB1c2VkXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlbG93OyBza2lwXG4gICAgICAgICAgICAgICAgICAgIG9sZEhlYWQrKztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkUGFydHNbb2xkVGFpbF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYG51bGxgIG1lYW5zIG9sZCBwYXJ0IGF0IHRhaWwgaGFzIGFscmVhZHkgYmVlbiB1c2VkXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlbG93OyBza2lwXG4gICAgICAgICAgICAgICAgICAgIG9sZFRhaWwtLTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkS2V5c1tvbGRIZWFkXSA9PT0gbmV3S2V5c1tuZXdIZWFkXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbGQgaGVhZCBtYXRjaGVzIG5ldyBoZWFkOyB1cGRhdGUgaW4gcGxhY2VcbiAgICAgICAgICAgICAgICAgICAgbmV3UGFydHNbbmV3SGVhZF0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFydChvbGRQYXJ0c1tvbGRIZWFkXSEsIG5ld1ZhbHVlc1tuZXdIZWFkXSk7XG4gICAgICAgICAgICAgICAgICAgIG9sZEhlYWQrKztcbiAgICAgICAgICAgICAgICAgICAgbmV3SGVhZCsrO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRLZXlzW29sZFRhaWxdID09PSBuZXdLZXlzW25ld1RhaWxdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9sZCB0YWlsIG1hdGNoZXMgbmV3IHRhaWw7IHVwZGF0ZSBpbiBwbGFjZVxuICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdUYWlsXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJ0KG9sZFBhcnRzW29sZFRhaWxdISwgbmV3VmFsdWVzW25ld1RhaWxdKTtcbiAgICAgICAgICAgICAgICAgICAgb2xkVGFpbC0tO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYWlsLS07XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9sZEtleXNbb2xkSGVhZF0gPT09IG5ld0tleXNbbmV3VGFpbF0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT2xkIGhlYWQgbWF0Y2hlcyBuZXcgdGFpbDsgdXBkYXRlIGFuZCBtb3ZlIHRvIG5ldyB0YWlsXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhcnRzW25ld1RhaWxdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcnQob2xkUGFydHNbb2xkSGVhZF0hLCBuZXdWYWx1ZXNbbmV3VGFpbF0pO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRQYXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyUGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFBhcnRzW29sZEhlYWRdISxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BhcnRzW25ld1RhaWwgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgIG9sZEhlYWQrKztcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFpbC0tO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRLZXlzW29sZFRhaWxdID09PSBuZXdLZXlzW25ld0hlYWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9sZCB0YWlsIG1hdGNoZXMgbmV3IGhlYWQ7IHVwZGF0ZSBhbmQgbW92ZSB0byBuZXcgaGVhZFxuICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdIZWFkXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJ0KG9sZFBhcnRzW29sZFRhaWxdISwgbmV3VmFsdWVzW25ld0hlYWRdKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UGFydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclBhcnQsIG9sZFBhcnRzW29sZFRhaWxdISwgb2xkUGFydHNbb2xkSGVhZF0hKTtcbiAgICAgICAgICAgICAgICAgICAgb2xkVGFpbC0tO1xuICAgICAgICAgICAgICAgICAgICBuZXdIZWFkKys7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3S2V5VG9JbmRleE1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gTGF6aWx5IGdlbmVyYXRlIGtleS10by1pbmRleCBtYXBzLCB1c2VkIGZvciByZW1vdmFscyAmXG4gICAgICAgICAgICAgICAgICAgICAgLy8gbW92ZXMgYmVsb3dcbiAgICAgICAgICAgICAgICAgICAgICBuZXdLZXlUb0luZGV4TWFwID0gZ2VuZXJhdGVNYXAobmV3S2V5cywgbmV3SGVhZCwgbmV3VGFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgb2xkS2V5VG9JbmRleE1hcCA9IGdlbmVyYXRlTWFwKG9sZEtleXMsIG9sZEhlYWQsIG9sZFRhaWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV3S2V5VG9JbmRleE1hcC5oYXMob2xkS2V5c1tvbGRIZWFkXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBPbGQgaGVhZCBpcyBubyBsb25nZXIgaW4gbmV3IGxpc3Q7IHJlbW92ZVxuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVBhcnQob2xkUGFydHNbb2xkSGVhZF0hKTtcbiAgICAgICAgICAgICAgICAgICAgICBvbGRIZWFkKys7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIW5ld0tleVRvSW5kZXhNYXAuaGFzKG9sZEtleXNbb2xkVGFpbF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gT2xkIHRhaWwgaXMgbm8gbG9uZ2VyIGluIG5ldyBsaXN0OyByZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQYXJ0KG9sZFBhcnRzW29sZFRhaWxdISk7XG4gICAgICAgICAgICAgICAgICAgICAgb2xkVGFpbC0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEFueSBtaXNtYXRjaGVzIGF0IHRoaXMgcG9pbnQgYXJlIGR1ZSB0byBhZGRpdGlvbnMgb3JcbiAgICAgICAgICAgICAgICAgICAgICAvLyBtb3Zlczsgc2VlIGlmIHdlIGhhdmUgYW4gb2xkIHBhcnQgd2UgY2FuIHJldXNlIGFuZCBtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaW50byBwbGFjZVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZEluZGV4ID0gb2xkS2V5VG9JbmRleE1hcC5nZXQobmV3S2V5c1tuZXdIZWFkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkUGFydCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9sZEluZGV4ICE9PSB1bmRlZmluZWQgPyBvbGRQYXJ0c1tvbGRJbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRQYXJ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBvbGQgcGFydCBmb3IgdGhpcyB2YWx1ZTsgY3JlYXRlIGEgbmV3IG9uZSBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluc2VydCBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGFydCA9IGNyZWF0ZUFuZEluc2VydFBhcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyUGFydCwgb2xkUGFydHNbb2xkSGVhZF0hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcnQobmV3UGFydCwgbmV3VmFsdWVzW25ld0hlYWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BhcnRzW25ld0hlYWRdID0gbmV3UGFydDtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV1c2Ugb2xkIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BhcnRzW25ld0hlYWRdID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJ0KG9sZFBhcnQsIG5ld1ZhbHVlc1tuZXdIZWFkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRQYXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclBhcnQsIG9sZFBhcnQsIG9sZFBhcnRzW29sZEhlYWRdISk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIG1hcmtzIHRoZSBvbGQgcGFydCBhcyBoYXZpbmcgYmVlbiB1c2VkLCBzbyB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCB3aWxsIGJlIHNraXBwZWQgaW4gdGhlIGZpcnN0IHR3byBjaGVja3MgYWJvdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFBhcnRzW29sZEluZGV4IGFzIG51bWJlcl0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBuZXdIZWFkKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIHBhcnRzIGZvciBhbnkgcmVtYWluaW5nIG5ldyB2YWx1ZXNcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3SGVhZCA8PSBuZXdUYWlsKSB7XG4gICAgICAgICAgICAgICAgICAvLyBGb3IgYWxsIHJlbWFpbmluZyBhZGRpdGlvbnMsIHdlIGluc2VydCBiZWZvcmUgbGFzdCBuZXdcbiAgICAgICAgICAgICAgICAgIC8vIHRhaWwsIHNpbmNlIG9sZCBwb2ludGVycyBhcmUgbm8gbG9uZ2VyIHZhbGlkXG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXdQYXJ0ID0gY3JlYXRlQW5kSW5zZXJ0UGFydChcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJQYXJ0LCBuZXdQYXJ0c1tuZXdUYWlsICsgMV0hKTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcnQobmV3UGFydCwgbmV3VmFsdWVzW25ld0hlYWRdKTtcbiAgICAgICAgICAgICAgICAgIG5ld1BhcnRzW25ld0hlYWQrK10gPSBuZXdQYXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW55IHJlbWFpbmluZyB1bnVzZWQgb2xkIHBhcnRzXG4gICAgICAgICAgICAgICAgd2hpbGUgKG9sZEhlYWQgPD0gb2xkVGFpbCkge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkUGFydCA9IG9sZFBhcnRzW29sZEhlYWQrK107XG4gICAgICAgICAgICAgICAgICBpZiAob2xkUGFydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVQYXJ0KG9sZFBhcnQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTYXZlIG9yZGVyIG9mIG5ldyBwYXJ0cyBmb3IgbmV4dCByb3VuZFxuICAgICAgICAgICAgICAgIHBhcnRMaXN0Q2FjaGUuc2V0KGNvbnRhaW5lclBhcnQsIG5ld1BhcnRzKTtcbiAgICAgICAgICAgICAgICBrZXlMaXN0Q2FjaGUuc2V0KGNvbnRhaW5lclBhcnQsIG5ld0tleXMpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkgYXNcbiAgICA8VD4oaXRlbXM6IEl0ZXJhYmxlPFQ+LFxuICAgICAgICBrZXlGbk9yVGVtcGxhdGU6IEtleUZuPFQ+fEl0ZW1UZW1wbGF0ZTxUPixcbiAgICAgICAgdGVtcGxhdGU/OiBJdGVtVGVtcGxhdGU8VD4pID0+IERpcmVjdGl2ZUZuO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydCwgUHJvcGVydHlQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVJbmZvIHtcbiAgW25hbWU6IHN0cmluZ106IHN0cmluZztcbn1cblxuLyoqXG4gKiBTdG9yZXMgdGhlIFN0eWxlSW5mbyBvYmplY3QgYXBwbGllZCB0byBhIGdpdmVuIEF0dHJpYnV0ZVBhcnQuXG4gKiBVc2VkIHRvIHVuc2V0IGV4aXN0aW5nIHZhbHVlcyB3aGVuIGEgbmV3IFN0eWxlSW5mbyBvYmplY3QgaXMgYXBwbGllZC5cbiAqL1xuY29uc3Qgc3R5bGVNYXBDYWNoZSA9IG5ldyBXZWFrTWFwPEF0dHJpYnV0ZVBhcnQsIFN0eWxlSW5mbz4oKTtcblxuLyoqXG4gKiBTdG9yZXMgQXR0cmlidXRlUGFydHMgdGhhdCBoYXZlIGhhZCBzdGF0aWMgc3R5bGVzIGFwcGxpZWQgKGUuZy4gYGhlaWdodDogMDtgXG4gKiBpbiBzdHlsZT1cImhlaWdodDogMDsgJHtzdHlsZU1hcCgpfVwiKS4gU3RhdGljIHN0eWxlcyBhcmUgYXBwbGllZCBvbmx5IHRoZVxuICogZmlyc3QgdGltZSB0aGUgZGlyZWN0aXZlIGlzIHJ1biBvbiBhIHBhcnQuXG4gKi9cbi8vIE5vdGUsIGNvdWxkIGJlIGEgV2Vha1NldCwgYnV0IHByZWZlciBub3QgcmVxdWlyaW5nIHRoaXMgcG9seWZpbGwuXG5jb25zdCBzdHlsZU1hcFN0YXRpY3MgPSBuZXcgV2Vha01hcDxBdHRyaWJ1dGVQYXJ0LCB0cnVlPigpO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgYXBwbGllcyBDU1MgcHJvcGVydGllcyB0byBhbiBlbGVtZW50LlxuICpcbiAqIGBzdHlsZU1hcGAgY2FuIG9ubHkgYmUgdXNlZCBpbiB0aGUgYHN0eWxlYCBhdHRyaWJ1dGUgYW5kIG11c3QgYmUgdGhlIG9ubHlcbiAqIGV4cHJlc3Npb24gaW4gdGhlIGF0dHJpYnV0ZS4gSXQgdGFrZXMgdGhlIHByb3BlcnR5IG5hbWVzIGluIHRoZSBgc3R5bGVJbmZvYFxuICogb2JqZWN0IGFuZCBhZGRzIHRoZSBwcm9wZXJ0eSB2YWx1ZXMgYXMgQ1NTIHByb3BlcnRlcy4gUHJvcGVydHkgbmFtZXMgd2l0aFxuICogZGFzaGVzIChgLWApIGFyZSBhc3N1bWVkIHRvIGJlIHZhbGlkIENTUyBwcm9wZXJ0eSBuYW1lcyBhbmQgc2V0IG9uIHRoZVxuICogZWxlbWVudCdzIHN0eWxlIG9iamVjdCB1c2luZyBgc2V0UHJvcGVydHkoKWAuIE5hbWVzIHdpdGhvdXQgZGFzaGVzIGFyZVxuICogYXNzdW1lZCB0byBiZSBjYW1lbENhc2VkIEphdmFTY3JpcHQgcHJvcGVydHkgbmFtZXMgYW5kIHNldCBvbiB0aGUgZWxlbWVudCdzXG4gKiBzdHlsZSBvYmplY3QgdXNpbmcgcHJvcGVydHkgYXNzaWdubWVudCwgYWxsb3dpbmcgdGhlIHN0eWxlIG9iamVjdCB0b1xuICogdHJhbnNsYXRlIEphdmFTY3JpcHQtc3R5bGUgbmFtZXMgdG8gQ1NTIHByb3BlcnR5IG5hbWVzLlxuICpcbiAqIEZvciBleGFtcGxlIGBzdHlsZU1hcCh7YmFja2dyb3VuZENvbG9yOiAncmVkJywgJ2JvcmRlci10b3AnOiAnNXB4JywgJy0tc2l6ZSc6XG4gKiAnMCd9KWAgc2V0cyB0aGUgYGJhY2tncm91bmQtY29sb3JgLCBgYm9yZGVyLXRvcGAgYW5kIGAtLXNpemVgIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHN0eWxlSW5mbyB7U3R5bGVJbmZvfVxuICovXG5leHBvcnQgY29uc3Qgc3R5bGVNYXAgPSBkaXJlY3RpdmUoKHN0eWxlSW5mbzogU3R5bGVJbmZvKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAoIShwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkgfHwgKHBhcnQgaW5zdGFuY2VvZiBQcm9wZXJ0eVBhcnQpIHx8XG4gICAgICBwYXJ0LmNvbW1pdHRlci5uYW1lICE9PSAnc3R5bGUnIHx8IHBhcnQuY29tbWl0dGVyLnBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgYHN0eWxlTWFwYCBkaXJlY3RpdmUgbXVzdCBiZSB1c2VkIGluIHRoZSBzdHlsZSBhdHRyaWJ1dGUgJyArXG4gICAgICAgICdhbmQgbXVzdCBiZSB0aGUgb25seSBwYXJ0IGluIHRoZSBhdHRyaWJ1dGUuJyk7XG4gIH1cblxuICAvLyBIYW5kbGUgc3RhdGljIHN0eWxlcyB0aGUgZmlyc3QgdGltZSB3ZSBzZWUgYSBQYXJ0XG4gIGlmICghc3R5bGVNYXBTdGF0aWNzLmhhcyhwYXJ0KSkge1xuICAgIChwYXJ0LmNvbW1pdHRlci5lbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgcGFydC5jb21taXR0ZXIuc3RyaW5ncy5qb2luKCcgJyk7XG4gICAgc3R5bGVNYXBTdGF0aWNzLnNldChwYXJ0LCB0cnVlKTtcbiAgfVxuICBjb25zdCBzdHlsZSA9IChwYXJ0LmNvbW1pdHRlci5lbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zdHlsZTtcblxuICAvLyBSZW1vdmUgb2xkIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3QgaW4gc3R5bGVJbmZvXG4gIGNvbnN0IG9sZEluZm8gPSBzdHlsZU1hcENhY2hlLmdldChwYXJ0KTtcbiAgZm9yIChjb25zdCBuYW1lIGluIG9sZEluZm8pIHtcbiAgICBpZiAoIShuYW1lIGluIHN0eWxlSW5mbykpIHtcbiAgICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAoc3R5bGUgYXMgYW55KVtuYW1lXSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBZGQgb3IgdXBkYXRlIHByb3BlcnRpZXNcbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlSW5mbykge1xuICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIChzdHlsZSBhcyBhbnkpW25hbWVdID0gc3R5bGVJbmZvW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBzdHlsZUluZm9bbmFtZV0pO1xuICAgIH1cbiAgfVxuICBzdHlsZU1hcENhY2hlLnNldChwYXJ0LCBzdHlsZUluZm8pO1xufSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7aXNQcmltaXRpdmV9IGZyb20gJy4uL2xpYi9wYXJ0cy5qcyc7XG5pbXBvcnQge2RpcmVjdGl2ZSwgTm9kZVBhcnQsIFBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuaW50ZXJmYWNlIFByZXZpb3VzVmFsdWUge1xuICB2YWx1ZTogdW5rbm93bjtcbiAgZnJhZ21lbnQ6IERvY3VtZW50RnJhZ21lbnQ7XG59XG5cbi8vIEZvciBlYWNoIHBhcnQsIHJlbWVtYmVyIHRoZSB2YWx1ZSB0aGF0IHdhcyBsYXN0IHJlbmRlcmVkIHRvIHRoZSBwYXJ0IGJ5IHRoZVxuLy8gdW5zYWZlSFRNTCBkaXJlY3RpdmUsIGFuZCB0aGUgRG9jdW1lbnRGcmFnbWVudCB0aGF0IHdhcyBsYXN0IHNldCBhcyBhIHZhbHVlLlxuLy8gVGhlIERvY3VtZW50RnJhZ21lbnQgaXMgdXNlZCBhcyBhIHVuaXF1ZSBrZXkgdG8gY2hlY2sgaWYgdGhlIGxhc3QgdmFsdWVcbi8vIHJlbmRlcmVkIHRvIHRoZSBwYXJ0IHdhcyB3aXRoIHVuc2FmZUhUTUwuIElmIG5vdCwgd2UnbGwgYWx3YXlzIHJlLXJlbmRlciB0aGVcbi8vIHZhbHVlIHBhc3NlZCB0byB1bnNhZmVIVE1MLlxuY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBuZXcgV2Vha01hcDxOb2RlUGFydCwgUHJldmlvdXNWYWx1ZT4oKTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSByZXN1bHQgYXMgSFRNTCwgcmF0aGVyIHRoYW4gdGV4dC5cbiAqXG4gKiBOb3RlLCB0aGlzIGlzIHVuc2FmZSB0byB1c2Ugd2l0aCBhbnkgdXNlci1wcm92aWRlZCBpbnB1dCB0aGF0IGhhc24ndCBiZWVuXG4gKiBzYW5pdGl6ZWQgb3IgZXNjYXBlZCwgYXMgaXQgbWF5IGxlYWQgdG8gY3Jvc3Mtc2l0ZS1zY3JpcHRpbmdcbiAqIHZ1bG5lcmFiaWxpdGllcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUhUTUwgPSBkaXJlY3RpdmUoKHZhbHVlOiB1bmtub3duKSA9PiAocGFydDogUGFydCk6IHZvaWQgPT4ge1xuICBpZiAoIShwYXJ0IGluc3RhbmNlb2YgTm9kZVBhcnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1bnNhZmVIVE1MIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGV4dCBiaW5kaW5ncycpO1xuICB9XG5cbiAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzVmFsdWVzLmdldChwYXJ0KTtcblxuICBpZiAocHJldmlvdXNWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGlzUHJpbWl0aXZlKHZhbHVlKSAmJlxuICAgICAgdmFsdWUgPT09IHByZXZpb3VzVmFsdWUudmFsdWUgJiYgcGFydC52YWx1ZSA9PT0gcHJldmlvdXNWYWx1ZS5mcmFnbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdmFsdWUgYXMgc3RyaW5nOyAgLy8gaW5uZXJIVE1MIGNhc3RzIHRvIHN0cmluZyBpbnRlcm5hbGx5XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgcGFydC5zZXRWYWx1ZShmcmFnbWVudCk7XG4gIHByZXZpb3VzVmFsdWVzLnNldChwYXJ0LCB7dmFsdWUsIGZyYWdtZW50fSk7XG59KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtpc1ByaW1pdGl2ZX0gZnJvbSAnLi4vbGliL3BhcnRzLmpzJztcbmltcG9ydCB7ZGlyZWN0aXZlLCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbmludGVyZmFjZSBBc3luY1N0YXRlIHtcbiAgLyoqXG4gICAqIFRoZSBsYXN0IHJlbmRlcmVkIGluZGV4IG9mIGEgY2FsbCB0byB1bnRpbCgpLiBBIHZhbHVlIG9ubHkgcmVuZGVycyBpZiBpdHNcbiAgICogaW5kZXggaXMgbGVzcyB0aGFuIHRoZSBgbGFzdFJlbmRlcmVkSW5kZXhgLlxuICAgKi9cbiAgbGFzdFJlbmRlcmVkSW5kZXg/OiBudW1iZXI7XG5cbiAgdmFsdWVzOiB1bmtub3duW107XG59XG5cbmNvbnN0IF9zdGF0ZSA9IG5ldyBXZWFrTWFwPFBhcnQsIEFzeW5jU3RhdGU+KCk7XG5cbi8qKlxuICogUmVuZGVycyBvbmUgb2YgYSBzZXJpZXMgb2YgdmFsdWVzLCBpbmNsdWRpbmcgUHJvbWlzZXMsIHRvIGEgUGFydC5cbiAqXG4gKiBWYWx1ZXMgYXJlIHJlbmRlcmVkIGluIHByaW9yaXR5IG9yZGVyLCB3aXRoIHRoZSBmaXJzdCBhcmd1bWVudCBoYXZpbmcgdGhlXG4gKiBoaWdoZXN0IHByaW9yaXR5IGFuZCB0aGUgbGFzdCBhcmd1bWVudCBoYXZpbmcgdGhlIGxvd2VzdCBwcmlvcml0eS4gSWYgYVxuICogdmFsdWUgaXMgYSBQcm9taXNlLCBsb3ctcHJpb3JpdHkgdmFsdWVzIHdpbGwgYmUgcmVuZGVyZWQgdW50aWwgaXQgcmVzb2x2ZXMuXG4gKlxuICogVGhlIHByaW9yaXR5IG9mIHZhbHVlcyBjYW4gYmUgdXNlZCB0byBjcmVhdGUgcGxhY2Vob2xkZXIgY29udGVudCBmb3IgYXN5bmNcbiAqIGRhdGEuIEZvciBleGFtcGxlLCBhIFByb21pc2Ugd2l0aCBwZW5kaW5nIGNvbnRlbnQgY2FuIGJlIHRoZSBmaXJzdCxcbiAqIGhpZ2hlc3QtcHJpb3JpdHksIGFyZ3VtZW50LCBhbmQgYSBub25fcHJvbWlzZSBsb2FkaW5nIGluZGljYXRvciB0ZW1wbGF0ZSBjYW5cbiAqIGJlIHVzZWQgYXMgdGhlIHNlY29uZCwgbG93ZXItcHJpb3JpdHksIGFyZ3VtZW50LiBUaGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbFxuICogcmVuZGVyIGltbWVkaWF0ZWx5LCBhbmQgdGhlIHByaW1hcnkgY29udGVudCB3aWxsIHJlbmRlciB3aGVuIHRoZSBQcm9taXNlXG4gKiByZXNvbHZlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBjb250ZW50ID0gZmV0Y2goJy4vY29udGVudC50eHQnKS50aGVuKHIgPT4gci50ZXh0KCkpO1xuICogICAgIGh0bWxgJHt1bnRpbChjb250ZW50LCBodG1sYDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+YCl9YFxuICovXG5leHBvcnQgY29uc3QgdW50aWwgPSBkaXJlY3RpdmUoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gKHBhcnQ6IFBhcnQpID0+IHtcbiAgbGV0IHN0YXRlID0gX3N0YXRlLmdldChwYXJ0KSE7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhdGUgPSB7XG4gICAgICB2YWx1ZXM6IFtdLFxuICAgIH07XG4gICAgX3N0YXRlLnNldChwYXJ0LCBzdGF0ZSk7XG4gIH1cbiAgY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBzdGF0ZS52YWx1ZXM7XG4gIHN0YXRlLnZhbHVlcyA9IGFyZ3M7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gSWYgd2UndmUgcmVuZGVyZWQgYSBoaWdoZXItcHJpb3JpdHkgdmFsdWUgYWxyZWFkeSwgc3RvcC5cbiAgICBpZiAoc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggIT09IHVuZGVmaW5lZCAmJiBpID4gc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gYXJnc1tpXTtcblxuICAgIC8vIFJlbmRlciBub24tUHJvbWlzZSB2YWx1ZXMgaW1tZWRpYXRlbHlcbiAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgIHR5cGVvZiAodmFsdWUgYXMge3RoZW4/OiB1bmtub3dufSkudGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGk7XG4gICAgICAvLyBTaW5jZSBhIGxvd2VyLXByaW9yaXR5IHZhbHVlIHdpbGwgbmV2ZXIgb3ZlcndyaXRlIGEgaGlnaGVyLXByaW9yaXR5XG4gICAgICAvLyBzeW5jaHJvbm91cyB2YWx1ZSwgd2UgY2FuIHN0b3AgcHJvY2Vzc3Npbmcgbm93LlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIFByb21pc2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkLCBza2lwIGl0LlxuICAgIGlmIChzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHR5cGVvZiAodmFsdWUgYXMge3RoZW4/OiB1bmtub3dufSkudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICB2YWx1ZSA9PT0gcHJldmlvdXNWYWx1ZXNbaV0pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIFdlIGhhdmUgYSBQcm9taXNlIHRoYXQgd2UgaGF2ZW4ndCBzZWVuIGJlZm9yZSwgc28gcHJpb3JpdGllcyBtYXkgaGF2ZVxuICAgIC8vIGNoYW5nZWQuIEZvcmdldCB3aGF0IHdlIHJlbmRlcmVkIGJlZm9yZS5cbiAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IHVuZGVmaW5lZDtcblxuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbigocmVzb2x2ZWRWYWx1ZTogdW5rbm93bikgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS52YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAvLyBJZiBzdGF0ZS52YWx1ZXMgZG9lc24ndCBjb250YWluIHRoZSB2YWx1ZSwgd2UndmUgcmUtcmVuZGVyZWQgd2l0aG91dFxuICAgICAgLy8gdGhlIHZhbHVlLCBzbyBkb24ndCByZW5kZXIgaXQuIFRoZW4sIG9ubHkgcmVuZGVyIGlmIHRoZSB2YWx1ZSBpc1xuICAgICAgLy8gaGlnaGVyLXByaW9yaXR5IHRoYW4gd2hhdCdzIGFscmVhZHkgYmVlbiByZW5kZXJlZC5cbiAgICAgIGlmIChpbmRleCA+IC0xICYmXG4gICAgICAgICAgKHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgaW5kZXggPCBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCkpIHtcbiAgICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgcGFydC5zZXRWYWx1ZShyZXNvbHZlZFZhbHVlKTtcbiAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7UGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7QXR0cmlidXRlQ29tbWl0dGVyLCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXJ9IGZyb20gJy4vcGFydHMuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIFBhcnRzIHdoZW4gYSB0ZW1wbGF0ZSBpcyBpbnN0YW50aWF0ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgaW1wbGVtZW50cyBUZW1wbGF0ZVByb2Nlc3NvciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgcGFydHMgZm9yIGFuIGF0dHJpYnV0ZS1wb3NpdGlvbiBiaW5kaW5nLCBnaXZlbiB0aGUgZXZlbnQsIGF0dHJpYnV0ZVxuICAgKiBuYW1lLCBhbmQgc3RyaW5nIGxpdGVyYWxzLlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBiaW5kaW5nXG4gICAqIEBwYXJhbSBuYW1lICBUaGUgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtIHN0cmluZ3MgVGhlIHN0cmluZyBsaXRlcmFscy4gVGhlcmUgYXJlIGFsd2F5cyBhdCBsZWFzdCB0d28gc3RyaW5ncyxcbiAgICogICBldmVudCBmb3IgZnVsbHktY29udHJvbGxlZCBiaW5kaW5ncyB3aXRoIGEgc2luZ2xlIGV4cHJlc3Npb24uXG4gICAqL1xuICBoYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhcbiAgICAgIGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW10sXG4gICAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zKTogUGFydFtdIHtcbiAgICBjb25zdCBwcmVmaXggPSBuYW1lWzBdO1xuICAgIGlmIChwcmVmaXggPT09ICcuJykge1xuICAgICAgY29uc3QgY29taXR0ZXIgPSBuZXcgUHJvcGVydHlDb21taXR0ZXIoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyk7XG4gICAgICByZXR1cm4gY29taXR0ZXIucGFydHM7XG4gICAgfVxuICAgIGlmIChwcmVmaXggPT09ICdAJykge1xuICAgICAgcmV0dXJuIFtuZXcgRXZlbnRQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIG9wdGlvbnMuZXZlbnRDb250ZXh0KV07XG4gICAgfVxuICAgIGlmIChwcmVmaXggPT09ICc/Jykge1xuICAgICAgcmV0dXJuIFtuZXcgQm9vbGVhbkF0dHJpYnV0ZVBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyldO1xuICAgIH1cbiAgICBjb25zdCBjb21pdHRlciA9IG5ldyBBdHRyaWJ1dGVDb21taXR0ZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgcmV0dXJuIGNvbWl0dGVyLnBhcnRzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgcGFydHMgZm9yIGEgdGV4dC1wb3NpdGlvbiBiaW5kaW5nLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVGYWN0b3J5XG4gICAqL1xuICBoYW5kbGVUZXh0RXhwcmVzc2lvbihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlUGFydChvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yID0gbmV3IERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvcigpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSBuZXcgV2Vha01hcDxvYmplY3QsIHRydWU+KCk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCB0eXBlIERpcmVjdGl2ZUZhY3RvcnkgPSAoLi4uYXJnczogYW55W10pID0+IG9iamVjdDtcblxuZXhwb3J0IHR5cGUgRGlyZWN0aXZlRm4gPSAocGFydDogUGFydCkgPT4gdm9pZDtcblxuLyoqXG4gKiBCcmFuZHMgYSBmdW5jdGlvbiBhcyBhIGRpcmVjdGl2ZSBzbyB0aGF0IGxpdC1odG1sIHdpbGwgY2FsbCB0aGUgZnVuY3Rpb25cbiAqIGR1cmluZyB0ZW1wbGF0ZSByZW5kZXJpbmcsIHJhdGhlciB0aGFuIHBhc3NpbmcgYXMgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gZiBUaGUgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24uIE11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogZnVuY3Rpb24gb2YgdGhlIHNpZ25hdHVyZSBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbFxuICogYmUgY2FsbGVkIHdpdGggdGhlIHBhcnQgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7ZGlyZWN0aXZlLCBodG1sfSBmcm9tICdsaXQtaHRtbCc7XG4gKlxuICogY29uc3QgaW1tdXRhYmxlID0gZGlyZWN0aXZlKCh2KSA9PiAocGFydCkgPT4ge1xuICogICBpZiAocGFydC52YWx1ZSAhPT0gdikge1xuICogICAgIHBhcnQuc2V0VmFsdWUodilcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IDxGIGV4dGVuZHMgRGlyZWN0aXZlRmFjdG9yeT4oZjogRik6IEYgPT5cbiAgICAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgY29uc3QgZCA9IGYoLi4uYXJncyk7XG4gICAgICBkaXJlY3RpdmVzLnNldChkLCB0cnVlKTtcbiAgICAgIHJldHVybiBkO1xuICAgIH0pIGFzIEY7XG5cbmV4cG9ydCBjb25zdCBpc0RpcmVjdGl2ZSA9IChvOiB1bmtub3duKTogbyBpcyBEaXJlY3RpdmVGbiA9PiB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyAmJiBkaXJlY3RpdmVzLmhhcyhvKTtcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmludGVyZmFjZSBNYXliZVBvbHlmaWxsZWRDZSBleHRlbmRzIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB7XG4gIHBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2s/OiBvYmplY3Q7XG59XG5cbi8qKlxuICogVHJ1ZSBpZiB0aGUgY3VzdG9tIGVsZW1lbnRzIHBvbHlmaWxsIGlzIGluIHVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ0VQb2x5ZmlsbCA9IHdpbmRvdy5jdXN0b21FbGVtZW50cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgKHdpbmRvdy5jdXN0b21FbGVtZW50cyBhcyBNYXliZVBvbHlmaWxsZWRDZSkucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayAhPT1cbiAgICAgICAgdW5kZWZpbmVkO1xuXG4vKipcbiAqIFJlcGFyZW50cyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnROb2RlYCAoaW5jbHVzaXZlKSB0byBgZW5kTm9kZWBcbiAqIChleGNsdXNpdmUpLCBpbnRvIGFub3RoZXIgY29udGFpbmVyIChjb3VsZCBiZSB0aGUgc2FtZSBjb250YWluZXIpLCBiZWZvcmVcbiAqIGBiZWZvcmVOb2RlYC4gSWYgYGJlZm9yZU5vZGVgIGlzIG51bGwsIGl0IGFwcGVuZHMgdGhlIG5vZGVzIHRvIHRoZVxuICogY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgcmVwYXJlbnROb2RlcyA9XG4gICAgKGNvbnRhaW5lcjogTm9kZSxcbiAgICAgc3RhcnQ6IE5vZGV8bnVsbCxcbiAgICAgZW5kOiBOb2RlfG51bGwgPSBudWxsLFxuICAgICBiZWZvcmU6IE5vZGV8bnVsbCA9IG51bGwpOiB2b2lkID0+IHtcbiAgICAgIGxldCBub2RlID0gc3RhcnQ7XG4gICAgICB3aGlsZSAobm9kZSAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBub2RlIS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShub2RlISwgYmVmb3JlIGFzIE5vZGUpO1xuICAgICAgICBub2RlID0gbjtcbiAgICAgIH1cbiAgICB9O1xuXG4vKipcbiAqIFJlbW92ZXMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0Tm9kZWAgKGluY2x1c2l2ZSkgdG8gYGVuZE5vZGVgXG4gKiAoZXhjbHVzaXZlKSwgZnJvbSBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID1cbiAgICAoY29udGFpbmVyOiBOb2RlLCBzdGFydE5vZGU6IE5vZGV8bnVsbCwgZW5kTm9kZTogTm9kZXxudWxsID0gbnVsbCk6XG4gICAgICAgIHZvaWQgPT4ge1xuICAgICAgICAgIGxldCBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgIHdoaWxlIChub2RlICE9PSBlbmROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gbm9kZSEubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobm9kZSEpO1xuICAgICAgICAgICAgbm9kZSA9IG47XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgc2hhZHktcmVuZGVyXG4gKi9cblxuaW1wb3J0IHtpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGUsIFRlbXBsYXRlUGFydH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbmNvbnN0IHdhbGtlck5vZGVGaWx0ZXIgPSAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi87XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGlzdCBvZiBub2RlcyBmcm9tIGEgVGVtcGxhdGUgc2FmZWx5LiBJbiBhZGRpdGlvbiB0byByZW1vdmluZ1xuICogbm9kZXMgZnJvbSB0aGUgVGVtcGxhdGUsIHRoZSBUZW1wbGF0ZSBwYXJ0IGluZGljZXMgYXJlIHVwZGF0ZWQgdG8gbWF0Y2hcbiAqIHRoZSBtdXRhdGVkIFRlbXBsYXRlIERPTS5cbiAqXG4gKiBBcyB0aGUgdGVtcGxhdGUgaXMgd2Fsa2VkIHRoZSByZW1vdmFsIHN0YXRlIGlzIHRyYWNrZWQgYW5kXG4gKiBwYXJ0IGluZGljZXMgYXJlIGFkanVzdGVkIGFzIG5lZWRlZC5cbiAqXG4gKiBkaXZcbiAqICAgZGl2IzEgKHJlbW92ZSkgPC0tIHN0YXJ0IHJlbW92aW5nIChyZW1vdmluZyBub2RlIGlzIGRpdiMxKVxuICogICAgIGRpdlxuICogICAgICAgZGl2IzIgKHJlbW92ZSkgIDwtLSBjb250aW51ZSByZW1vdmluZyAocmVtb3Zpbmcgbm9kZSBpcyBzdGlsbCBkaXYjMSlcbiAqICAgICAgICAgZGl2XG4gKiBkaXYgPC0tIHN0b3AgcmVtb3Zpbmcgc2luY2UgcHJldmlvdXMgc2libGluZyBpcyB0aGUgcmVtb3Zpbmcgbm9kZSAoZGl2IzEsXG4gKiByZW1vdmVkIDQgbm9kZXMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZShcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGUsIG5vZGVzVG9SZW1vdmU6IFNldDxOb2RlPikge1xuICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9LCBwYXJ0c30gPSB0ZW1wbGF0ZTtcbiAgY29uc3Qgd2Fsa2VyID1cbiAgICAgIGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoY29udGVudCwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICBsZXQgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzKTtcbiAgbGV0IHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICBsZXQgbm9kZUluZGV4ID0gLTE7XG4gIGxldCByZW1vdmVDb3VudCA9IDA7XG4gIGNvbnN0IG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlID0gW107XG4gIGxldCBjdXJyZW50UmVtb3ZpbmdOb2RlOiBOb2RlfG51bGwgPSBudWxsO1xuICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICBub2RlSW5kZXgrKztcbiAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlIGFzIEVsZW1lbnQ7XG4gICAgLy8gRW5kIHJlbW92YWwgaWYgc3RlcHBlZCBwYXN0IHRoZSByZW1vdmluZyBub2RlXG4gICAgaWYgKG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBjdXJyZW50UmVtb3ZpbmdOb2RlKSB7XG4gICAgICBjdXJyZW50UmVtb3ZpbmdOb2RlID0gbnVsbDtcbiAgICB9XG4gICAgLy8gQSBub2RlIHRvIHJlbW92ZSB3YXMgZm91bmQgaW4gdGhlIHRlbXBsYXRlXG4gICAgaWYgKG5vZGVzVG9SZW1vdmUuaGFzKG5vZGUpKSB7XG4gICAgICBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZS5wdXNoKG5vZGUpO1xuICAgICAgLy8gVHJhY2sgbm9kZSB3ZSdyZSByZW1vdmluZ1xuICAgICAgaWYgKGN1cnJlbnRSZW1vdmluZ05vZGUgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudFJlbW92aW5nTm9kZSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdoZW4gcmVtb3ZpbmcsIGluY3JlbWVudCBjb3VudCBieSB3aGljaCB0byBhZGp1c3Qgc3Vic2VxdWVudCBwYXJ0IGluZGljZXNcbiAgICBpZiAoY3VycmVudFJlbW92aW5nTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICB9XG4gICAgd2hpbGUgKHBhcnQgIT09IHVuZGVmaW5lZCAmJiBwYXJ0LmluZGV4ID09PSBub2RlSW5kZXgpIHtcbiAgICAgIC8vIElmIHBhcnQgaXMgaW4gYSByZW1vdmVkIG5vZGUgZGVhY3RpdmF0ZSBpdCBieSBzZXR0aW5nIGluZGV4IHRvIC0xIG9yXG4gICAgICAvLyBhZGp1c3QgdGhlIGluZGV4IGFzIG5lZWRlZC5cbiAgICAgIHBhcnQuaW5kZXggPSBjdXJyZW50UmVtb3ZpbmdOb2RlICE9PSBudWxsID8gLTEgOiBwYXJ0LmluZGV4IC0gcmVtb3ZlQ291bnQ7XG4gICAgICAvLyBnbyB0byB0aGUgbmV4dCBhY3RpdmUgcGFydC5cbiAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICAgIHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgIH1cbiAgfVxuICBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZS5mb3JFYWNoKChuKSA9PiBuLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG4pKTtcbn1cblxuY29uc3QgY291bnROb2RlcyA9IChub2RlOiBOb2RlKSA9PiB7XG4gIGxldCBjb3VudCA9IChub2RlLm5vZGVUeXBlID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgKi8pID8gMCA6IDE7XG4gIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICBjb3VudCsrO1xuICB9XG4gIHJldHVybiBjb3VudDtcbn07XG5cbmNvbnN0IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyA9XG4gICAgKHBhcnRzOiBUZW1wbGF0ZVBhcnRbXSwgc3RhcnRJbmRleDogbnVtYmVyID0gLTEpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4ICsgMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgaWYgKGlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4vKipcbiAqIEluc2VydHMgdGhlIGdpdmVuIG5vZGUgaW50byB0aGUgVGVtcGxhdGUsIG9wdGlvbmFsbHkgYmVmb3JlIHRoZSBnaXZlblxuICogcmVmTm9kZS4gSW4gYWRkaXRpb24gdG8gaW5zZXJ0aW5nIHRoZSBub2RlIGludG8gdGhlIFRlbXBsYXRlLCB0aGUgVGVtcGxhdGVcbiAqIHBhcnQgaW5kaWNlcyBhcmUgdXBkYXRlZCB0byBtYXRjaCB0aGUgbXV0YXRlZCBUZW1wbGF0ZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnROb2RlSW50b1RlbXBsYXRlKFxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSwgbm9kZTogTm9kZSwgcmVmTm9kZTogTm9kZXxudWxsID0gbnVsbCkge1xuICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9LCBwYXJ0c30gPSB0ZW1wbGF0ZTtcbiAgLy8gSWYgdGhlcmUncyBubyByZWZOb2RlLCB0aGVuIHB1dCBub2RlIGF0IGVuZCBvZiB0ZW1wbGF0ZS5cbiAgLy8gTm8gcGFydCBpbmRpY2VzIG5lZWQgdG8gYmUgc2hpZnRlZCBpbiB0aGlzIGNhc2UuXG4gIGlmIChyZWZOb2RlID09PSBudWxsIHx8IHJlZk5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHdhbGtlciA9XG4gICAgICBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGNvbnRlbnQsIHdhbGtlck5vZGVGaWx0ZXIsIG51bGwsIGZhbHNlKTtcbiAgbGV0IHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cyk7XG4gIGxldCBpbnNlcnRDb3VudCA9IDA7XG4gIGxldCB3YWxrZXJJbmRleCA9IC0xO1xuICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICB3YWxrZXJJbmRleCsrO1xuICAgIGNvbnN0IHdhbGtlck5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGUgYXMgRWxlbWVudDtcbiAgICBpZiAod2Fsa2VyTm9kZSA9PT0gcmVmTm9kZSkge1xuICAgICAgaW5zZXJ0Q291bnQgPSBjb3VudE5vZGVzKG5vZGUpO1xuICAgICAgcmVmTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobm9kZSwgcmVmTm9kZSk7XG4gICAgfVxuICAgIHdoaWxlIChwYXJ0SW5kZXggIT09IC0xICYmIHBhcnRzW3BhcnRJbmRleF0uaW5kZXggPT09IHdhbGtlckluZGV4KSB7XG4gICAgICAvLyBJZiB3ZSd2ZSBpbnNlcnRlZCB0aGUgbm9kZSwgc2ltcGx5IGFkanVzdCBhbGwgc3Vic2VxdWVudCBwYXJ0c1xuICAgICAgaWYgKGluc2VydENvdW50ID4gMCkge1xuICAgICAgICB3aGlsZSAocGFydEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHBhcnRzW3BhcnRJbmRleF0uaW5kZXggKz0gaW5zZXJ0Q291bnQ7XG4gICAgICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuLyoqXG4gKiBUaGUgUGFydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGR5bmFtaWMgcGFydCBvZiBhIHRlbXBsYXRlIGluc3RhbmNlIHJlbmRlcmVkXG4gKiBieSBsaXQtaHRtbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJ0IHtcbiAgdmFsdWU6IHVua25vd247XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgcGFydCB2YWx1ZSwgYnV0IGRvZXMgbm90IHdyaXRlIGl0IHRvIHRoZSBET00uXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB3aWxsIGJlIGNvbW1pdHRlZC5cbiAgICovXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZDtcblxuICAvKipcbiAgICogQ29tbWl0cyB0aGUgY3VycmVudCBwYXJ0IHZhbHVlLCBjYXVzZSBpdCB0byBhY3R1YWxseSBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gICAqL1xuICBjb21taXQoKTogdm9pZDtcbn1cblxuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlOiBvYmplY3QgPSB7fTtcblxuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIE5vZGVQYXJ0IHRvIGZ1bGx5IGNsZWFyIGl0cyBjb250ZW50LlxuICovXG5leHBvcnQgY29uc3Qgbm90aGluZyA9IHt9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge2lzRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQge3JlbW92ZU5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge25vQ2hhbmdlLCBub3RoaW5nLCBQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVJbnN0YW5jZX0gZnJvbSAnLi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5pbXBvcnQge2NyZWF0ZU1hcmtlcn0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGVvZi1vcGVyYXRvclxuZXhwb3J0IHR5cGUgUHJpbWl0aXZlID0gbnVsbHx1bmRlZmluZWR8Ym9vbGVhbnxudW1iZXJ8c3RyaW5nfFN5bWJvbHxiaWdpbnQ7XG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBQcmltaXRpdmUgPT4ge1xuICByZXR1cm4gKFxuICAgICAgdmFsdWUgPT09IG51bGwgfHxcbiAgICAgICEodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpKTtcbn07XG5cbi8qKlxuICogU2V0cyBhdHRyaWJ1dGUgdmFsdWVzIGZvciBBdHRyaWJ1dGVQYXJ0cywgc28gdGhhdCB0aGUgdmFsdWUgaXMgb25seSBzZXQgb25jZVxuICogZXZlbiBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgcGFydHMgZm9yIGFuIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG5hbWU6IHN0cmluZztcbiAgc3RyaW5nczogc3RyaW5nW107XG4gIHBhcnRzOiBBdHRyaWJ1dGVQYXJ0W107XG4gIGRpcnR5ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHRoaXMucGFydHNbaV0gPSB0aGlzLl9jcmVhdGVQYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzaW5nbGUgcGFydC4gT3ZlcnJpZGUgdGhpcyB0byBjcmVhdGUgYSBkaWZmZXJudCB0eXBlIG9mIHBhcnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NyZWF0ZVBhcnQoKTogQXR0cmlidXRlUGFydCB7XG4gICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGVQYXJ0KHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9nZXRWYWx1ZSgpOiB1bmtub3duIHtcbiAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgbGV0IHRleHQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0ZXh0ICs9IHN0cmluZ3NbaV07XG4gICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1tpXTtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdiA9IHBhcnQudmFsdWU7XG4gICAgICAgIGlmICh2ICE9IG51bGwgJiZcbiAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHYpIHx8XG4gICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgIHR5cGVvZiB2ICE9PSAnc3RyaW5nJyAmJiAodiBhcyBhbnkpW1N5bWJvbC5pdGVyYXRvcl0pKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB0IG9mIHYgYXMgSXRlcmFibGU8dW5rbm93bj4pIHtcbiAgICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHQgPT09ICdzdHJpbmcnID8gdCA6IFN0cmluZyh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dCArPSB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyB2IDogU3RyaW5nKHYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGV4dCArPSBzdHJpbmdzW2xdO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgY29tbWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdGhpcy5fZ2V0VmFsdWUoKSBhcyBzdHJpbmcpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICBjb21taXR0ZXI6IEF0dHJpYnV0ZUNvbW1pdHRlcjtcbiAgdmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoY29taXR0ZXI6IEF0dHJpYnV0ZUNvbW1pdHRlcikge1xuICAgIHRoaXMuY29tbWl0dGVyID0gY29taXR0ZXI7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPT0gbm9DaGFuZ2UgJiYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHwgdmFsdWUgIT09IHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYSBub3QgYSBkaXJlY3RpdmUsIGRpcnR5IHRoZSBjb21taXR0ZXIgc28gdGhhdCBpdCdsbFxuICAgICAgLy8gY2FsbCBzZXRBdHRyaWJ1dGUuIElmIHRoZSB2YWx1ZSBpcyBhIGRpcmVjdGl2ZSwgaXQnbGwgZGlydHkgdGhlXG4gICAgICAvLyBjb21taXR0ZXIgaWYgaXQgY2FsbHMgc2V0VmFsdWUoKS5cbiAgICAgIGlmICghaXNEaXJlY3RpdmUodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY29tbWl0dGVyLmRpcnR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb21taXR0ZXIuY29tbWl0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIG9wdGlvbnM6IFJlbmRlck9wdGlvbnM7XG4gIHN0YXJ0Tm9kZSE6IE5vZGU7XG4gIGVuZE5vZGUhOiBOb2RlO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcbiAgX3BlbmRpbmdWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIHRoaXMgcGFydCBpbnRvIGEgY29udGFpbmVyLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGFwcGVuZEludG8oY29udGFpbmVyOiBOb2RlKSB7XG4gICAgdGhpcy5zdGFydE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICAgIHRoaXMuZW5kTm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYmV0d2VlbiBgcmVmYCBhbmQgYHJlZmAncyBuZXh0IHNpYmxpbmcuIEJvdGggYHJlZmAgYW5kXG4gICAqIGl0cyBuZXh0IHNpYmxpbmcgbXVzdCBiZSBzdGF0aWMsIHVuY2hhbmdpbmcgbm9kZXMgc3VjaCBhcyB0aG9zZSB0aGF0IGFwcGVhclxuICAgKiBpbiBhIGxpdGVyYWwgc2VjdGlvbiBvZiBhIHRlbXBsYXRlLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGluc2VydEFmdGVyTm9kZShyZWY6IE5vZGUpIHtcbiAgICB0aGlzLnN0YXJ0Tm9kZSA9IHJlZjtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYubmV4dFNpYmxpbmchO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGludG8gYSBwYXJlbnQgcGFydC5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBhcHBlbmRJbnRvUGFydChwYXJ0OiBOb2RlUGFydCkge1xuICAgIHBhcnQuX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICBwYXJ0Ll9pbnNlcnQodGhpcy5lbmROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGFmdGVyIGByZWZgXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgaW5zZXJ0QWZ0ZXJQYXJ0KHJlZjogTm9kZVBhcnQpIHtcbiAgICByZWYuX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYuZW5kTm9kZTtcbiAgICByZWYuZW5kTm9kZSA9IHRoaXMuc3RhcnROb2RlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgdGhpcy5fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICB0aGlzLl9jb21taXROb2RlKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICh2YWx1ZSBhcyBhbnkpW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgIHRoaXMuX2NvbW1pdEl0ZXJhYmxlKHZhbHVlIGFzIEl0ZXJhYmxlPHVua25vd24+KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBub3RoaW5nKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbm90aGluZztcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2luc2VydChub2RlOiBOb2RlKSB7XG4gICAgdGhpcy5lbmROb2RlLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmVuZE5vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tbWl0Tm9kZSh2YWx1ZTogTm9kZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5faW5zZXJ0KHZhbHVlKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9jb21taXRUZXh0KHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhcnROb2RlLm5leHRTaWJsaW5nITtcbiAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIGlmIChub2RlID09PSB0aGlzLmVuZE5vZGUucHJldmlvdXNTaWJsaW5nICYmXG4gICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSB0ZXh0IG5vZGUgYmV0d2VlbiB0aGUgbWFya2Vycywgd2UgY2FuIGp1c3RcbiAgICAgIC8vIHNldCBpdHMgdmFsdWUsIHJhdGhlciB0aGFuIHJlcGxhY2luZyBpdC5cbiAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IENhbiB3ZSBqdXN0IGNoZWNrIGlmIHRoaXMudmFsdWUgaXMgcHJpbWl0aXZlP1xuICAgICAgKG5vZGUgYXMgVGV4dCkuZGF0YSA9IHZhbHVlIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tbWl0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpKSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlOiBUZW1wbGF0ZVJlc3VsdCk6IHZvaWQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlICYmXG4gICAgICAgIHRoaXMudmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICB0aGlzLnZhbHVlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgcHJvcGFnYXRlIHRoZSB0ZW1wbGF0ZSBwcm9jZXNzb3IgZnJvbSB0aGUgVGVtcGxhdGVSZXN1bHRcbiAgICAgIC8vIHNvIHRoYXQgd2UgdXNlIGl0cyBzeW50YXggZXh0ZW5zaW9uLCBldGMuIFRoZSB0ZW1wbGF0ZSBmYWN0b3J5IGNvbWVzXG4gICAgICAvLyBmcm9tIHRoZSByZW5kZXIgZnVuY3Rpb24gb3B0aW9ucyBzbyB0aGF0IGl0IGNhbiBjb250cm9sIHRlbXBsYXRlXG4gICAgICAvLyBjYWNoaW5nIGFuZCBwcmVwcm9jZXNzaW5nLlxuICAgICAgY29uc3QgaW5zdGFuY2UgPVxuICAgICAgICAgIG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB2YWx1ZS5wcm9jZXNzb3IsIHRoaXMub3B0aW9ucyk7XG4gICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSgpO1xuICAgICAgaW5zdGFuY2UudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgICB0aGlzLl9jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgIHRoaXMudmFsdWUgPSBpbnN0YW5jZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb21taXRJdGVyYWJsZSh2YWx1ZTogSXRlcmFibGU8dW5rbm93bj4pOiB2b2lkIHtcbiAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG5cbiAgICAvLyBJZiBfdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAvLyBpdGVyYWJsZSBhbmQgX3ZhbHVlIHdpbGwgY29udGFpbiB0aGUgTm9kZVBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgLy8gcmVuZGVyLiBJZiBfdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAvLyBhcnJheSBmb3IgTm9kZVBhcnRzLlxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLnZhbHVlIGFzIE5vZGVQYXJ0W107XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgbGV0IGl0ZW1QYXJ0OiBOb2RlUGFydHx1bmRlZmluZWQ7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgIC8vIFRyeSB0byByZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuXG4gICAgICAvLyBJZiBubyBleGlzdGluZyBwYXJ0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICBpZiAoaXRlbVBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpdGVtUGFydHMucHVzaChpdGVtUGFydCk7XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPT09IDApIHtcbiAgICAgICAgICBpdGVtUGFydC5hcHBlbmRJbnRvUGFydCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtUGFydC5pbnNlcnRBZnRlclBhcnQoaXRlbVBhcnRzW3BhcnRJbmRleCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXRlbVBhcnQuc2V0VmFsdWUoaXRlbSk7XG4gICAgICBpdGVtUGFydC5jb21taXQoKTtcbiAgICAgIHBhcnRJbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgdGhpcy5jbGVhcihpdGVtUGFydCAmJiBpdGVtUGFydCEuZW5kTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoc3RhcnROb2RlOiBOb2RlID0gdGhpcy5zdGFydE5vZGUpIHtcbiAgICByZW1vdmVOb2RlcyhcbiAgICAgICAgdGhpcy5zdGFydE5vZGUucGFyZW50Tm9kZSEsIHN0YXJ0Tm9kZS5uZXh0U2libGluZyEsIHRoaXMuZW5kTm9kZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBuYW1lOiBzdHJpbmc7XG4gIHN0cmluZ3M6IHN0cmluZ1tdO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcbiAgX3BlbmRpbmdWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHN0cmluZ3MubGVuZ3RoICE9PSAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0Jvb2xlYW4gYXR0cmlidXRlcyBjYW4gb25seSBjb250YWluIGEgc2luZ2xlIGV4cHJlc3Npb24nKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9wZW5kaW5nVmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9wZW5kaW5nVmFsdWU7XG4gICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSAhIXRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgc2luZ2xlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW10pIHtcbiAgICBzdXBlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICB0aGlzLnNpbmdsZSA9XG4gICAgICAgIChzdHJpbmdzLmxlbmd0aCA9PT0gMiAmJiBzdHJpbmdzWzBdID09PSAnJyAmJiBzdHJpbmdzWzFdID09PSAnJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NyZWF0ZVBhcnQoKTogUHJvcGVydHlQYXJ0IHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5UGFydCh0aGlzKTtcbiAgfVxuXG4gIF9nZXRWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5zaW5nbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnRzWzBdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuX2dldFZhbHVlKCk7XG4gIH1cblxuICBjb21taXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICh0aGlzLmVsZW1lbnQgYXMgYW55KVt0aGlzLm5hbWVdID0gdGhpcy5fZ2V0VmFsdWUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge31cblxuLy8gRGV0ZWN0IGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgc3VwcG9ydC4gSWYgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eSBpcyByZWFkXG4vLyBmcm9tIHRoZSBvcHRpb25zIG9iamVjdCwgdGhlbiBvcHRpb25zIGFyZSBzdXBwb3J0ZWQuIElmIG5vdCwgdGhlbiB0aGUgdGhyaWRcbi8vIGFyZ3VtZW50IHRvIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyIGlzIGludGVycHJldGVkIGFzIHRoZSBib29sZWFuIGNhcHR1cmVcbi8vIHZhbHVlIHNvIHdlIHNob3VsZCBvbmx5IHBhc3MgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eS5cbmxldCBldmVudE9wdGlvbnNTdXBwb3J0ZWQgPSBmYWxzZTtcblxudHJ5IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBnZXQgY2FwdHVyZSgpIHtcbiAgICAgIGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucyBhcyBhbnksIG9wdGlvbnMpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucyBhcyBhbnksIG9wdGlvbnMpO1xufSBjYXRjaCAoX2UpIHtcbn1cblxuXG50eXBlIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zID1cbiAgICBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0JlBhcnRpYWw8QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM+O1xuZXhwb3J0IGNsYXNzIEV2ZW50UGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBldmVudE5hbWU6IHN0cmluZztcbiAgZXZlbnRDb250ZXh0PzogRXZlbnRUYXJnZXQ7XG4gIHZhbHVlOiB1bmRlZmluZWR8RXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIF9vcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM7XG4gIF9wZW5kaW5nVmFsdWU6IHVuZGVmaW5lZHxFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgX2JvdW5kSGFuZGxlRXZlbnQ6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50Q29udGV4dD86IEV2ZW50VGFyZ2V0KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICB0aGlzLmV2ZW50Q29udGV4dCA9IGV2ZW50Q29udGV4dDtcbiAgICB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50ID0gKGUpID0+IHRoaXMuaGFuZGxlRXZlbnQoZSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5kZWZpbmVkfEV2ZW50SGFuZGxlcldpdGhPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlIGFzIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0xpc3RlbmVyID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IG5ld0xpc3RlbmVyID09IG51bGwgfHxcbiAgICAgICAgb2xkTGlzdGVuZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgKG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09IG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PSBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT0gb2xkTGlzdGVuZXIucGFzc2l2ZSk7XG4gICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPVxuICAgICAgICBuZXdMaXN0ZW5lciAhPSBudWxsICYmIChvbGRMaXN0ZW5lciA9PSBudWxsIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcblxuICAgIGlmIChzaG91bGRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgdGhpcy5ldmVudE5hbWUsIHRoaXMuX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX29wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBnZXRPcHRpb25zKG5ld0xpc3RlbmVyKTtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHRoaXMuZXZlbnROYW1lLCB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9vcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlIGFzIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnZhbHVlLmNhbGwodGhpcy5ldmVudENvbnRleHQgfHwgdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLnZhbHVlIGFzIEV2ZW50TGlzdGVuZXJPYmplY3QpLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gV2UgY29weSBvcHRpb25zIGJlY2F1c2Ugb2YgdGhlIGluY29uc2lzdGVudCBiZWhhdmlvciBvZiBicm93c2VycyB3aGVuIHJlYWRpbmdcbi8vIHRoZSB0aGlyZCBhcmd1bWVudCBvZiBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lci4gSUUxMSBkb2Vzbid0IHN1cHBvcnQgb3B0aW9uc1xuLy8gYXQgYWxsLiBDaHJvbWUgNDEgb25seSByZWFkcyBgY2FwdHVyZWAgaWYgdGhlIGFyZ3VtZW50IGlzIGFuIG9iamVjdC5cbmNvbnN0IGdldE9wdGlvbnMgPSAobzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnN8dW5kZWZpbmVkKSA9PiBvICYmXG4gICAgKGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA/XG4gICAgICAgICB7Y2FwdHVyZTogby5jYXB0dXJlLCBwYXNzaXZlOiBvLnBhc3NpdmUsIG9uY2U6IG8ub25jZX0gOlxuICAgICAgICAgby5jYXB0dXJlIGFzIEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtOb2RlUGFydH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHt0ZW1wbGF0ZUZhY3Rvcnl9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbmV4cG9ydCBjb25zdCBwYXJ0cyA9IG5ldyBXZWFrTWFwPE5vZGUsIE5vZGVQYXJ0PigpO1xuXG4vKipcbiAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgYSBUZW1wbGF0ZVJlc3VsdCBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWcgbGlrZVxuICogICAgIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gb3B0aW9ucyBSZW5kZXJPcHRpb25zIGZvciB0aGUgZW50aXJlIHJlbmRlciB0cmVlIHJlbmRlcmVkIHRvIHRoaXNcbiAqICAgICBjb250YWluZXIuIFJlbmRlciBvcHRpb25zIG11c3QgKm5vdCogY2hhbmdlIGJldHdlZW4gcmVuZGVycyB0byB0aGUgc2FtZVxuICogICAgIGNvbnRhaW5lciwgYXMgdGhvc2UgY2hhbmdlcyB3aWxsIG5vdCBlZmZlY3QgcHJldmlvdXNseSByZW5kZXJlZCBET00uXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPVxuICAgIChyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LFxuICAgICBjb250YWluZXI6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudCxcbiAgICAgb3B0aW9ucz86IFBhcnRpYWw8UmVuZGVyT3B0aW9ucz4pID0+IHtcbiAgICAgIGxldCBwYXJ0ID0gcGFydHMuZ2V0KGNvbnRhaW5lcik7XG4gICAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlbW92ZU5vZGVzKGNvbnRhaW5lciwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBwYXJ0cy5zZXQoY29udGFpbmVyLCBwYXJ0ID0gbmV3IE5vZGVQYXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICBwYXJ0LmFwcGVuZEludG8oY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICAgIHBhcnQuc2V0VmFsdWUocmVzdWx0KTtcbiAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgdG8gYWRkIHNoYWR5IERPTS9zaGFkeSBDU1MgcG9seWZpbGwgc3VwcG9ydCB0byBsaXQtaHRtbCB0ZW1wbGF0ZVxuICogcmVuZGVyaW5nLiBTZWUgdGhlIFtbcmVuZGVyXV0gbWV0aG9kIGZvciBkZXRhaWxzLlxuICpcbiAqIEBtb2R1bGUgc2hhZHktcmVuZGVyXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqXG4gKiBEbyBub3QgcmVtb3ZlIHRoaXMgY29tbWVudDsgaXQga2VlcHMgdHlwZWRvYyBmcm9tIG1pc3BsYWNpbmcgdGhlIG1vZHVsZVxuICogZG9jcy5cbiAqL1xuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtpbnNlcnROb2RlSW50b1RlbXBsYXRlLCByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZX0gZnJvbSAnLi9tb2RpZnktdGVtcGxhdGUuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7cGFydHMsIHJlbmRlciBhcyBsaXRSZW5kZXJ9IGZyb20gJy4vcmVuZGVyLmpzJztcbmltcG9ydCB7dGVtcGxhdGVDYWNoZXN9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHttYXJrZXIsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuZXhwb3J0IHtodG1sLCBzdmcsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8vIEdldCBhIGtleSB0byBsb29rdXAgaW4gYHRlbXBsYXRlQ2FjaGVzYC5cbmNvbnN0IGdldFRlbXBsYXRlQ2FjaGVLZXkgPSAodHlwZTogc3RyaW5nLCBzY29wZU5hbWU6IHN0cmluZykgPT5cbiAgICBgJHt0eXBlfS0tJHtzY29wZU5hbWV9YDtcblxubGV0IGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gPSB0cnVlO1xuXG5pZiAodHlwZW9mIHdpbmRvdy5TaGFkeUNTUyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiA9IGZhbHNlO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZURvbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc29sZS53YXJuKFxuICAgICAgYEluY29tcGF0aWJsZSBTaGFkeUNTUyB2ZXJzaW9uIGRldGVjdGVkLmAgK1xuICAgICAgYFBsZWFzZSB1cGRhdGUgdG8gYXQgbGVhc3QgQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzQDIuMC4yIGFuZGAgK1xuICAgICAgYEB3ZWJjb21wb25lbnRzL3NoYWR5Y3NzQDEuMy4xLmApO1xuICBjb21wYXRpYmxlU2hhZHlDU1NWZXJzaW9uID0gZmFsc2U7XG59XG5cbi8qKlxuICogVGVtcGxhdGUgZmFjdG9yeSB3aGljaCBzY29wZXMgdGVtcGxhdGUgRE9NIHVzaW5nIFNoYWR5Q1NTLlxuICogQHBhcmFtIHNjb3BlTmFtZSB7c3RyaW5nfVxuICovXG5jb25zdCBzaGFkeVRlbXBsYXRlRmFjdG9yeSA9IChzY29wZU5hbWU6IHN0cmluZykgPT5cbiAgICAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRUZW1wbGF0ZUNhY2hlS2V5KHJlc3VsdC50eXBlLCBzY29wZU5hbWUpO1xuICAgICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoY2FjaGVLZXkpO1xuICAgICAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlID0ge1xuICAgICAgICAgIHN0cmluZ3NBcnJheTogbmV3IFdlYWtNYXA8VGVtcGxhdGVTdHJpbmdzQXJyYXksIFRlbXBsYXRlPigpLFxuICAgICAgICAgIGtleVN0cmluZzogbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlPigpXG4gICAgICAgIH07XG4gICAgICAgIHRlbXBsYXRlQ2FjaGVzLnNldChjYWNoZUtleSwgdGVtcGxhdGVDYWNoZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgICBpZiAodGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IHJlc3VsdC5zdHJpbmdzLmpvaW4obWFya2VyKTtcbiAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gICAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBpZiAoY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbikge1xuICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUyEucHJlcGFyZVRlbXBsYXRlRG9tKGVsZW1lbnQsIHNjb3BlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCBlbGVtZW50KTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICAgICAgfVxuICAgICAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfTtcblxuY29uc3QgVEVNUExBVEVfVFlQRVMgPSBbJ2h0bWwnLCAnc3ZnJ107XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgc3R5bGUgZWxlbWVudHMgZnJvbSBUZW1wbGF0ZXMgZm9yIHRoZSBnaXZlbiBzY29wZU5hbWUuXG4gKi9cbmNvbnN0IHJlbW92ZVN0eWxlc0Zyb21MaXRUZW1wbGF0ZXMgPSAoc2NvcGVOYW1lOiBzdHJpbmcpID0+IHtcbiAgVEVNUExBVEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRlbXBsYXRlQ2FjaGVzLmdldChnZXRUZW1wbGF0ZUNhY2hlS2V5KHR5cGUsIHNjb3BlTmFtZSkpO1xuICAgIGlmICh0ZW1wbGF0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGVtcGxhdGVzLmtleVN0cmluZy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9fSA9IHRlbXBsYXRlO1xuICAgICAgICAvLyBJRSAxMSBkb2Vzbid0IHN1cHBvcnQgdGhlIGl0ZXJhYmxlIHBhcmFtIFNldCBjb25zdHJ1Y3RvclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBuZXcgU2V0PEVsZW1lbnQ+KCk7XG4gICAgICAgIEFycmF5LmZyb20oY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpKS5mb3JFYWNoKChzOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgc3R5bGVzLmFkZChzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCBzdHlsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHNoYWR5UmVuZGVyU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbi8qKlxuICogRm9yIHRoZSBnaXZlbiBzY29wZSBuYW1lLCBlbnN1cmVzIHRoYXQgU2hhZHlDU1Mgc3R5bGUgc2NvcGluZyBpcyBwZXJmb3JtZWQuXG4gKiBUaGlzIGlzIGRvbmUganVzdCBvbmNlIHBlciBzY29wZSBuYW1lIHNvIHRoZSBmcmFnbWVudCBhbmQgdGVtcGxhdGUgY2Fubm90XG4gKiBiZSBtb2RpZmllZC5cbiAqICgxKSBleHRyYWN0cyBzdHlsZXMgZnJvbSB0aGUgcmVuZGVyZWQgZnJhZ21lbnQgYW5kIGhhbmRzIHRoZW0gdG8gU2hhZHlDU1NcbiAqIHRvIGJlIHNjb3BlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50XG4gKiAoMikgcmVtb3ZlcyBzdHlsZSBlbGVtZW50cyBmcm9tIGFsbCBsaXQtaHRtbCBUZW1wbGF0ZXMgZm9yIHRoaXMgc2NvcGUgbmFtZS5cbiAqXG4gKiBOb3RlLCA8c3R5bGU+IGVsZW1lbnRzIGNhbiBvbmx5IGJlIHBsYWNlZCBpbnRvIHRlbXBsYXRlcyBmb3IgdGhlXG4gKiBpbml0aWFsIHJlbmRlcmluZyBvZiB0aGUgc2NvcGUuIElmIDxzdHlsZT4gZWxlbWVudHMgYXJlIGluY2x1ZGVkIGluIHRlbXBsYXRlc1xuICogZHluYW1pY2FsbHkgcmVuZGVyZWQgdG8gdGhlIHNjb3BlIChhZnRlciB0aGUgZmlyc3Qgc2NvcGUgcmVuZGVyKSwgdGhleSB3aWxsXG4gKiBub3QgYmUgc2NvcGVkIGFuZCB0aGUgPHN0eWxlPiB3aWxsIGJlIGxlZnQgaW4gdGhlIHRlbXBsYXRlIGFuZCByZW5kZXJlZFxuICogb3V0cHV0LlxuICovXG5jb25zdCBwcmVwYXJlVGVtcGxhdGVTdHlsZXMgPVxuICAgIChyZW5kZXJlZERPTTogRG9jdW1lbnRGcmFnbWVudCwgdGVtcGxhdGU6IFRlbXBsYXRlLCBzY29wZU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgc2hhZHlSZW5kZXJTZXQuYWRkKHNjb3BlTmFtZSk7XG4gICAgICAvLyBNb3ZlIHN0eWxlcyBvdXQgb2YgcmVuZGVyZWQgRE9NIGFuZCBzdG9yZS5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHJlbmRlcmVkRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJyk7XG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gc3R5bGVzLCBza2lwIHVubmVjZXNzYXJ5IHdvcmtcbiAgICAgIGlmIChzdHlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIEVuc3VyZSBwcmVwYXJlVGVtcGxhdGVTdHlsZXMgaXMgY2FsbGVkIHRvIHN1cHBvcnQgYWRkaW5nXG4gICAgICAgIC8vIHN0eWxlcyB2aWEgYHByZXBhcmVBZG9wdGVkQ3NzVGV4dGAgc2luY2UgdGhhdCByZXF1aXJlcyB0aGF0XG4gICAgICAgIC8vIGBwcmVwYXJlVGVtcGxhdGVTdHlsZXNgIGlzIGNhbGxlZC5cbiAgICAgICAgd2luZG93LlNoYWR5Q1NTIS5wcmVwYXJlVGVtcGxhdGVTdHlsZXModGVtcGxhdGUuZWxlbWVudCwgc2NvcGVOYW1lKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29uZGVuc2VkU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgLy8gQ29sbGVjdCBzdHlsZXMgaW50byBhIHNpbmdsZSBzdHlsZS4gVGhpcyBoZWxwcyB1cyBtYWtlIHN1cmUgU2hhZHlDU1NcbiAgICAgIC8vIG1hbmlwdWxhdGlvbnMgd2lsbCBub3QgcHJldmVudCB1cyBmcm9tIGJlaW5nIGFibGUgdG8gZml4IHVwIHRlbXBsYXRlXG4gICAgICAvLyBwYXJ0IGluZGljZXMuXG4gICAgICAvLyBOT1RFOiBjb2xsZWN0aW5nIHN0eWxlcyBpcyBpbmVmZmljaWVudCBmb3IgYnJvd3NlcnMgYnV0IFNoYWR5Q1NTXG4gICAgICAvLyBjdXJyZW50bHkgZG9lcyB0aGlzIGFueXdheS4gV2hlbiBpdCBkb2VzIG5vdCwgdGhpcyBzaG91bGQgYmUgY2hhbmdlZC5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzW2ldO1xuICAgICAgICBzdHlsZS5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgICAgIGNvbmRlbnNlZFN0eWxlLnRleHRDb250ZW50ISArPSBzdHlsZS50ZXh0Q29udGVudDtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSBzdHlsZXMgZnJvbSBuZXN0ZWQgdGVtcGxhdGVzIGluIHRoaXMgc2NvcGUuXG4gICAgICByZW1vdmVTdHlsZXNGcm9tTGl0VGVtcGxhdGVzKHNjb3BlTmFtZSk7XG4gICAgICAvLyBBbmQgdGhlbiBwdXQgdGhlIGNvbmRlbnNlZCBzdHlsZSBpbnRvIHRoZSBcInJvb3RcIiB0ZW1wbGF0ZSBwYXNzZWQgaW4gYXNcbiAgICAgIC8vIGB0ZW1wbGF0ZWAuXG4gICAgICBpbnNlcnROb2RlSW50b1RlbXBsYXRlKFxuICAgICAgICAgIHRlbXBsYXRlLCBjb25kZW5zZWRTdHlsZSwgdGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgLy8gTm90ZSwgaXQncyBpbXBvcnRhbnQgdGhhdCBTaGFkeUNTUyBnZXRzIHRoZSB0ZW1wbGF0ZSB0aGF0IGBsaXQtaHRtbGBcbiAgICAgIC8vIHdpbGwgYWN0dWFsbHkgcmVuZGVyIHNvIHRoYXQgaXQgY2FuIHVwZGF0ZSB0aGUgc3R5bGUgaW5zaWRlIHdoZW5cbiAgICAgIC8vIG5lZWRlZCAoZS5nLiBAYXBwbHkgbmF0aXZlIFNoYWRvdyBET00gY2FzZSkuXG4gICAgICB3aW5kb3cuU2hhZHlDU1MhLnByZXBhcmVUZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZS5lbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgaWYgKHdpbmRvdy5TaGFkeUNTUyEubmF0aXZlU2hhZG93KSB7XG4gICAgICAgIC8vIFdoZW4gaW4gbmF0aXZlIFNoYWRvdyBET00sIHJlLWFkZCBzdHlsaW5nIHRvIHJlbmRlcmVkIGNvbnRlbnQgdXNpbmdcbiAgICAgICAgLy8gdGhlIHN0eWxlIFNoYWR5Q1NTIHByb2R1Y2VkLlxuICAgICAgICBjb25zdCBzdHlsZSA9IHRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpITtcbiAgICAgICAgcmVuZGVyZWRET00uaW5zZXJ0QmVmb3JlKHN0eWxlLmNsb25lTm9kZSh0cnVlKSwgcmVuZGVyZWRET00uZmlyc3RDaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXaGVuIG5vdCBpbiBuYXRpdmUgU2hhZG93IERPTSwgYXQgdGhpcyBwb2ludCBTaGFkeUNTUyB3aWxsIGhhdmVcbiAgICAgICAgLy8gcmVtb3ZlZCB0aGUgc3R5bGUgZnJvbSB0aGUgbGl0IHRlbXBsYXRlIGFuZCBwYXJ0cyB3aWxsIGJlIGJyb2tlbiBhcyBhXG4gICAgICAgIC8vIHJlc3VsdC4gVG8gZml4IHRoaXMsIHdlIHB1dCBiYWNrIHRoZSBzdHlsZSBub2RlIFNoYWR5Q1NTIHJlbW92ZWRcbiAgICAgICAgLy8gYW5kIHRoZW4gdGVsbCBsaXQgdG8gcmVtb3ZlIHRoYXQgbm9kZSBmcm9tIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgLy8gTk9URSwgU2hhZHlDU1MgY3JlYXRlcyBpdHMgb3duIHN0eWxlIHNvIHdlIGNhbiBzYWZlbHkgYWRkL3JlbW92ZVxuICAgICAgICAvLyBgY29uZGVuc2VkU3R5bGVgIGhlcmUuXG4gICAgICAgIHRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBjb25kZW5zZWRTdHlsZSwgdGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICBjb25zdCByZW1vdmVzID0gbmV3IFNldCgpO1xuICAgICAgICByZW1vdmVzLmFkZChjb25kZW5zZWRTdHlsZSk7XG4gICAgICAgIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCByZW1vdmVzKTtcbiAgICAgIH1cbiAgICB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoYWR5UmVuZGVyT3B0aW9ucyBleHRlbmRzIFBhcnRpYWw8UmVuZGVyT3B0aW9ucz4ge1xuICBzY29wZU5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBFeHRlbnNpb24gdG8gdGhlIHN0YW5kYXJkIGByZW5kZXJgIG1ldGhvZCB3aGljaCBzdXBwb3J0cyByZW5kZXJpbmdcbiAqIHRvIFNoYWRvd1Jvb3RzIHdoZW4gdGhlIFNoYWR5RE9NIChodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9zaGFkeWRvbSlcbiAqIGFuZCBTaGFkeUNTUyAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHljc3MpIHBvbHlmaWxscyBhcmUgdXNlZFxuICogb3Igd2hlbiB0aGUgd2ViY29tcG9uZW50c2pzXG4gKiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzKSBwb2x5ZmlsbCBpcyB1c2VkLlxuICpcbiAqIEFkZHMgYSBgc2NvcGVOYW1lYCBvcHRpb24gd2hpY2ggaXMgdXNlZCB0byBzY29wZSBlbGVtZW50IERPTSBhbmQgc3R5bGVzaGVldHNcbiAqIHdoZW4gbmF0aXZlIFNoYWRvd0RPTSBpcyB1bmF2YWlsYWJsZS4gVGhlIGBzY29wZU5hbWVgIHdpbGwgYmUgYWRkZWQgdG9cbiAqIHRoZSBjbGFzcyBhdHRyaWJ1dGUgb2YgYWxsIHJlbmRlcmVkIERPTS4gSW4gYWRkaXRpb24sIGFueSBzdHlsZSBlbGVtZW50cyB3aWxsXG4gKiBiZSBhdXRvbWF0aWNhbGx5IHJlLXdyaXR0ZW4gd2l0aCB0aGlzIGBzY29wZU5hbWVgIHNlbGVjdG9yIGFuZCBtb3ZlZCBvdXRcbiAqIG9mIHRoZSByZW5kZXJlZCBET00gYW5kIGludG8gdGhlIGRvY3VtZW50IGA8aGVhZD5gLlxuICpcbiAqIEl0IGlzIGNvbW1vbiB0byB1c2UgdGhpcyByZW5kZXIgbWV0aG9kIGluIGNvbmp1bmN0aW9uIHdpdGggYSBjdXN0b20gZWxlbWVudFxuICogd2hpY2ggcmVuZGVycyBhIHNoYWRvd1Jvb3QuIFdoZW4gdGhpcyBpcyBkb25lLCB0eXBpY2FsbHkgdGhlIGVsZW1lbnQnc1xuICogYGxvY2FsTmFtZWAgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIGBzY29wZU5hbWVgLlxuICpcbiAqIEluIGFkZGl0aW9uIHRvIERPTSBzY29waW5nLCBTaGFkeUNTUyBhbHNvIHN1cHBvcnRzIGEgYmFzaWMgc2hpbSBmb3IgY3NzXG4gKiBjdXN0b20gcHJvcGVydGllcyAobmVlZGVkIG9ubHkgb24gb2xkZXIgYnJvd3NlcnMgbGlrZSBJRTExKSBhbmQgYSBzaGltIGZvclxuICogYSBkZXByZWNhdGVkIGZlYXR1cmUgY2FsbGVkIGBAYXBwbHlgIHRoYXQgc3VwcG9ydHMgYXBwbHlpbmcgYSBzZXQgb2YgY3NzXG4gKiBjdXN0b20gcHJvcGVydGllcyB0byBhIGdpdmVuIGxvY2F0aW9uLlxuICpcbiAqIFVzYWdlIGNvbnNpZGVyYXRpb25zOlxuICpcbiAqICogUGFydCB2YWx1ZXMgaW4gYDxzdHlsZT5gIGVsZW1lbnRzIGFyZSBvbmx5IGFwcGxpZWQgdGhlIGZpcnN0IHRpbWUgYSBnaXZlblxuICogYHNjb3BlTmFtZWAgcmVuZGVycy4gU3Vic2VxdWVudCBjaGFuZ2VzIHRvIHBhcnRzIGluIHN0eWxlIGVsZW1lbnRzIHdpbGwgaGF2ZVxuICogbm8gZWZmZWN0LiBCZWNhdXNlIG9mIHRoaXMsIHBhcnRzIGluIHN0eWxlIGVsZW1lbnRzIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yXG4gKiB2YWx1ZXMgdGhhdCB3aWxsIG5ldmVyIGNoYW5nZSwgZm9yIGV4YW1wbGUgcGFydHMgdGhhdCBzZXQgc2NvcGUtd2lkZSB0aGVtZVxuICogdmFsdWVzIG9yIHBhcnRzIHdoaWNoIHJlbmRlciBzaGFyZWQgc3R5bGUgZWxlbWVudHMuXG4gKlxuICogKiBOb3RlLCBkdWUgdG8gYSBsaW1pdGF0aW9uIG9mIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgcmVuZGVyaW5nIGluIGFcbiAqIGN1c3RvbSBlbGVtZW50J3MgYGNvbnN0cnVjdG9yYCBpcyBub3Qgc3VwcG9ydGVkLiBJbnN0ZWFkIHJlbmRlcmluZyBzaG91bGRcbiAqIGVpdGhlciBkb25lIGFzeW5jaHJvbm91c2x5LCBmb3IgZXhhbXBsZSBhdCBtaWNyb3Rhc2sgdGltaW5nIChmb3IgZXhhbXBsZVxuICogYFByb21pc2UucmVzb2x2ZSgpYCksIG9yIGJlIGRlZmVycmVkIHVudGlsIHRoZSBmaXJzdCB0aW1lIHRoZSBlbGVtZW50J3NcbiAqIGBjb25uZWN0ZWRDYWxsYmFja2AgcnVucy5cbiAqXG4gKiBVc2FnZSBjb25zaWRlcmF0aW9ucyB3aGVuIHVzaW5nIHNoaW1tZWQgY3VzdG9tIHByb3BlcnRpZXMgb3IgYEBhcHBseWA6XG4gKlxuICogKiBXaGVuZXZlciBhbnkgZHluYW1pYyBjaGFuZ2VzIGFyZSBtYWRlIHdoaWNoIGFmZmVjdFxuICogY3NzIGN1c3RvbSBwcm9wZXJ0aWVzLCBgU2hhZHlDU1Muc3R5bGVFbGVtZW50KGVsZW1lbnQpYCBtdXN0IGJlIGNhbGxlZFxuICogdG8gdXBkYXRlIHRoZSBlbGVtZW50LiBUaGVyZSBhcmUgdHdvIGNhc2VzIHdoZW4gdGhpcyBpcyBuZWVkZWQ6XG4gKiAoMSkgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIGEgbmV3IHBhcmVudCwgKDIpIGEgY2xhc3MgaXMgYWRkZWQgdG8gdGhlXG4gKiBlbGVtZW50IHRoYXQgY2F1c2VzIGl0IHRvIG1hdGNoIGRpZmZlcmVudCBjdXN0b20gcHJvcGVydGllcy5cbiAqIFRvIGFkZHJlc3MgdGhlIGZpcnN0IGNhc2Ugd2hlbiByZW5kZXJpbmcgYSBjdXN0b20gZWxlbWVudCwgYHN0eWxlRWxlbWVudGBcbiAqIHNob3VsZCBiZSBjYWxsZWQgaW4gdGhlIGVsZW1lbnQncyBgY29ubmVjdGVkQ2FsbGJhY2tgLlxuICpcbiAqICogU2hpbW1lZCBjdXN0b20gcHJvcGVydGllcyBtYXkgb25seSBiZSBkZWZpbmVkIGVpdGhlciBmb3IgYW4gZW50aXJlXG4gKiBzaGFkb3dSb290IChmb3IgZXhhbXBsZSwgaW4gYSBgOmhvc3RgIHJ1bGUpIG9yIHZpYSBhIHJ1bGUgdGhhdCBkaXJlY3RseVxuICogbWF0Y2hlcyBhbiBlbGVtZW50IHdpdGggYSBzaGFkb3dSb290LiBJbiBvdGhlciB3b3JkcywgaW5zdGVhZCBvZiBmbG93aW5nIGZyb21cbiAqIHBhcmVudCB0byBjaGlsZCBhcyBkbyBuYXRpdmUgY3NzIGN1c3RvbSBwcm9wZXJ0aWVzLCBzaGltbWVkIGN1c3RvbSBwcm9wZXJ0aWVzXG4gKiBmbG93IG9ubHkgZnJvbSBzaGFkb3dSb290cyB0byBuZXN0ZWQgc2hhZG93Um9vdHMuXG4gKlxuICogKiBXaGVuIHVzaW5nIGBAYXBwbHlgIG1peGluZyBjc3Mgc2hvcnRoYW5kIHByb3BlcnR5IG5hbWVzIHdpdGhcbiAqIG5vbi1zaG9ydGhhbmQgbmFtZXMgKGZvciBleGFtcGxlIGBib3JkZXJgIGFuZCBgYm9yZGVyLXdpZHRoYCkgaXMgbm90XG4gKiBzdXBwb3J0ZWQuXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPVxuICAgIChyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LFxuICAgICBjb250YWluZXI6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudCxcbiAgICAgb3B0aW9uczogU2hhZHlSZW5kZXJPcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBzY29wZU5hbWUgPSBvcHRpb25zLnNjb3BlTmFtZTtcbiAgICAgIGNvbnN0IGhhc1JlbmRlcmVkID0gcGFydHMuaGFzKGNvbnRhaW5lcik7XG4gICAgICBjb25zdCBuZWVkc1Njb3BpbmcgPSBjb250YWluZXIgaW5zdGFuY2VvZiBTaGFkb3dSb290ICYmXG4gICAgICAgICAgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiAmJiByZXN1bHQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdDtcbiAgICAgIC8vIEhhbmRsZSBmaXJzdCByZW5kZXIgdG8gYSBzY29wZSBzcGVjaWFsbHkuLi5cbiAgICAgIGNvbnN0IGZpcnN0U2NvcGVSZW5kZXIgPSBuZWVkc1Njb3BpbmcgJiYgIXNoYWR5UmVuZGVyU2V0LmhhcyhzY29wZU5hbWUpO1xuICAgICAgLy8gT24gZmlyc3Qgc2NvcGUgcmVuZGVyLCByZW5kZXIgaW50byBhIGZyYWdtZW50OyB0aGlzIGNhbm5vdCBiZSBhIHNpbmdsZVxuICAgICAgLy8gZnJhZ21lbnQgdGhhdCBpcyByZXVzZWQgc2luY2UgbmVzdGVkIHJlbmRlcnMgY2FuIG9jY3VyIHN5bmNocm9ub3VzbHkuXG4gICAgICBjb25zdCByZW5kZXJDb250YWluZXIgPVxuICAgICAgICAgIGZpcnN0U2NvcGVSZW5kZXIgPyBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkgOiBjb250YWluZXI7XG4gICAgICBsaXRSZW5kZXIoXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIHJlbmRlckNvbnRhaW5lcixcbiAgICAgICAgICB7dGVtcGxhdGVGYWN0b3J5OiBzaGFkeVRlbXBsYXRlRmFjdG9yeShzY29wZU5hbWUpLCAuLi5vcHRpb25zfSBhc1xuICAgICAgICAgICAgICBSZW5kZXJPcHRpb25zKTtcbiAgICAgIC8vIFdoZW4gcGVyZm9ybWluZyBmaXJzdCBzY29wZSByZW5kZXIsXG4gICAgICAvLyAoMSkgV2UndmUgcmVuZGVyZWQgaW50byBhIGZyYWdtZW50IHNvIHRoYXQgdGhlcmUncyBhIGNoYW5jZSB0b1xuICAgICAgLy8gYHByZXBhcmVUZW1wbGF0ZVN0eWxlc2AgYmVmb3JlIHN1Yi1lbGVtZW50cyBoaXQgdGhlIERPTVxuICAgICAgLy8gKHdoaWNoIG1pZ2h0IGNhdXNlIHRoZW0gdG8gcmVuZGVyIGJhc2VkIG9uIGEgY29tbW9uIHBhdHRlcm4gb2ZcbiAgICAgIC8vIHJlbmRlcmluZyBpbiBhIGN1c3RvbSBlbGVtZW50J3MgYGNvbm5lY3RlZENhbGxiYWNrYCk7XG4gICAgICAvLyAoMikgU2NvcGUgdGhlIHRlbXBsYXRlIHdpdGggU2hhZHlDU1Mgb25lIHRpbWUgb25seSBmb3IgdGhpcyBzY29wZS5cbiAgICAgIC8vICgzKSBSZW5kZXIgdGhlIGZyYWdtZW50IGludG8gdGhlIGNvbnRhaW5lciBhbmQgbWFrZSBzdXJlIHRoZVxuICAgICAgLy8gY29udGFpbmVyIGtub3dzIGl0cyBgcGFydGAgaXMgdGhlIG9uZSB3ZSBqdXN0IHJlbmRlcmVkLiBUaGlzIGVuc3VyZXNcbiAgICAgIC8vIERPTSB3aWxsIGJlIHJlLXVzZWQgb24gc3Vic2VxdWVudCByZW5kZXJzLlxuICAgICAgaWYgKGZpcnN0U2NvcGVSZW5kZXIpIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzLmdldChyZW5kZXJDb250YWluZXIpITtcbiAgICAgICAgcGFydHMuZGVsZXRlKHJlbmRlckNvbnRhaW5lcik7XG4gICAgICAgIGlmIChwYXJ0LnZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVJbnN0YW5jZSkge1xuICAgICAgICAgIHByZXBhcmVUZW1wbGF0ZVN0eWxlcyhcbiAgICAgICAgICAgICAgcmVuZGVyQ29udGFpbmVyIGFzIERvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgICAgICAgIHBhcnQudmFsdWUudGVtcGxhdGUsXG4gICAgICAgICAgICAgIHNjb3BlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJDb250YWluZXIpO1xuICAgICAgICBwYXJ0cy5zZXQoY29udGFpbmVyLCBwYXJ0KTtcbiAgICAgIH1cbiAgICAgIC8vIEFmdGVyIGVsZW1lbnRzIGhhdmUgaGl0IHRoZSBET00sIHVwZGF0ZSBzdHlsaW5nIGlmIHRoaXMgaXMgdGhlXG4gICAgICAvLyBpbml0aWFsIHJlbmRlciB0byB0aGlzIGNvbnRhaW5lci5cbiAgICAgIC8vIFRoaXMgaXMgbmVlZGVkIHdoZW5ldmVyIGR5bmFtaWMgY2hhbmdlcyBhcmUgbWFkZSBzbyBpdCB3b3VsZCBiZVxuICAgICAgLy8gc2FmZXN0IHRvIGRvIGV2ZXJ5IHJlbmRlcjsgaG93ZXZlciwgdGhpcyB3b3VsZCByZWdyZXNzIHBlcmZvcm1hbmNlXG4gICAgICAvLyBzbyB3ZSBsZWF2ZSBpdCB1cCB0byB0aGUgdXNlciB0byBjYWxsIGBTaGFkeUNTU1Muc3R5bGVFbGVtZW50YFxuICAgICAgLy8gZm9yIGR5bmFtaWMgY2hhbmdlcy5cbiAgICAgIGlmICghaGFzUmVuZGVyZWQgJiYgbmVlZHNTY29waW5nKSB7XG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUyEuc3R5bGVFbGVtZW50KChjb250YWluZXIgYXMgU2hhZG93Um9vdCkuaG9zdCk7XG4gICAgICB9XG4gICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHttYXJrZXIsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHR5cGUgdGhhdCBjcmVhdGVzIGEgVGVtcGxhdGUgZnJvbSBhIFRlbXBsYXRlUmVzdWx0LlxuICpcbiAqIFRoaXMgaXMgYSBob29rIGludG8gdGhlIHRlbXBsYXRlLWNyZWF0aW9uIHByb2Nlc3MgZm9yIHJlbmRlcmluZyB0aGF0XG4gKiByZXF1aXJlcyBzb21lIG1vZGlmaWNhdGlvbiBvZiB0ZW1wbGF0ZXMgYmVmb3JlIHRoZXkncmUgdXNlZCwgbGlrZSBTaGFkeUNTUyxcbiAqIHdoaWNoIG11c3QgYWRkIGNsYXNzZXMgdG8gZWxlbWVudHMgYW5kIHJlbW92ZSBzdHlsZXMuXG4gKlxuICogVGVtcGxhdGVzIHNob3VsZCBiZSBjYWNoZWQgYXMgYWdncmVzc2l2ZWx5IGFzIHBvc3NpYmxlLCBzbyB0aGF0IG1hbnlcbiAqIFRlbXBsYXRlUmVzdWx0cyBwcm9kdWNlZCBmcm9tIHRoZSBzYW1lIGV4cHJlc3Npb24gb25seSBkbyB0aGUgd29yayBvZlxuICogY3JlYXRpbmcgdGhlIFRlbXBsYXRlIHRoZSBmaXJzdCB0aW1lLlxuICpcbiAqIFRlbXBsYXRlcyBhcmUgdXN1YWxseSBjYWNoZWQgYnkgVGVtcGxhdGVSZXN1bHQuc3RyaW5ncyBhbmRcbiAqIFRlbXBsYXRlUmVzdWx0LnR5cGUsIGJ1dCBtYXkgYmUgY2FjaGVkIGJ5IG90aGVyIGtleXMgaWYgdGhpcyBmdW5jdGlvblxuICogbW9kaWZpZXMgdGhlIHRlbXBsYXRlLlxuICpcbiAqIE5vdGUgdGhhdCBjdXJyZW50bHkgVGVtcGxhdGVGYWN0b3JpZXMgbXVzdCBub3QgYWRkLCByZW1vdmUsIG9yIHJlb3JkZXJcbiAqIGV4cHJlc3Npb25zLCBiZWNhdXNlIHRoZXJlIGlzIG5vIHdheSB0byBkZXNjcmliZSBzdWNoIGEgbW9kaWZpY2F0aW9uXG4gKiB0byByZW5kZXIoKSBzbyB0aGF0IHZhbHVlcyBhcmUgaW50ZXJwb2xhdGVkIHRvIHRoZSBjb3JyZWN0IHBsYWNlIGluIHRoZVxuICogdGVtcGxhdGUgaW5zdGFuY2VzLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZUZhY3RvcnkgPSAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkgPT4gVGVtcGxhdGU7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5IHdoaWNoIGNhY2hlcyBUZW1wbGF0ZXMga2V5ZWQgb25cbiAqIHJlc3VsdC50eXBlIGFuZCByZXN1bHQuc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlRmFjdG9yeShyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0KSB7XG4gIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHJlc3VsdC50eXBlKTtcbiAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwPFRlbXBsYXRlU3RyaW5nc0FycmF5LCBUZW1wbGF0ZT4oKSxcbiAgICAgIGtleVN0cmluZzogbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlPigpXG4gICAgfTtcbiAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICB9XG5cbiAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgaWYgKHRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICAvLyBJZiB0aGUgVGVtcGxhdGVTdHJpbmdzQXJyYXkgaXMgbmV3LCBnZW5lcmF0ZSBhIGtleSBmcm9tIHRoZSBzdHJpbmdzXG4gIC8vIFRoaXMga2V5IGlzIHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgd2l0aCBpZGVudGljYWwgY29udGVudFxuICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG5cbiAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3Qgc2VlbiB0aGlzIGtleSBiZWZvcmUsIGNyZWF0ZSBhIG5ldyBUZW1wbGF0ZVxuICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpKTtcbiAgICAvLyBDYWNoZSB0aGUgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICB9XG5cbiAgLy8gQ2FjaGUgYWxsIGZ1dHVyZSBxdWVyaWVzIGZvciB0aGlzIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gIHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8qKlxuICogVGhlIGZpcnN0IGFyZ3VtZW50IHRvIEpTIHRlbXBsYXRlIHRhZ3MgcmV0YWluIGlkZW50aXR5IGFjcm9zcyBtdWx0aXBsZVxuICogY2FsbHMgdG8gYSB0YWcgZm9yIHRoZSBzYW1lIGxpdGVyYWwsIHNvIHdlIGNhbiBjYWNoZSB3b3JrIGRvbmUgcGVyIGxpdGVyYWxcbiAqIGluIGEgTWFwLlxuICpcbiAqIFNhZmFyaSBjdXJyZW50bHkgaGFzIGEgYnVnIHdoaWNoIG9jY2FzaW9uYWxseSBicmVha3MgdGhpcyBiZWhhdmlvdXIsIHNvIHdlXG4gKiBuZWVkIHRvIGNhY2hlIHRoZSBUZW1wbGF0ZSBhdCB0d28gbGV2ZWxzLiBXZSBmaXJzdCBjYWNoZSB0aGVcbiAqIFRlbXBsYXRlU3RyaW5nc0FycmF5LCBhbmQgaWYgdGhhdCBmYWlscywgd2UgY2FjaGUgYSBrZXkgY29uc3RydWN0ZWQgYnlcbiAqIGpvaW5pbmcgdGhlIHN0cmluZ3MgYXJyYXkuXG4gKi9cbmV4cG9ydCB0eXBlIHRlbXBsYXRlQ2FjaGUgPSB7XG4gIHN0cmluZ3NBcnJheTogV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+O1xuICBrZXlTdHJpbmc6IE1hcDxzdHJpbmcsIFRlbXBsYXRlPjtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUNhY2hlcyA9IG5ldyBNYXA8c3RyaW5nLCB0ZW1wbGF0ZUNhY2hlPigpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge2lzQ0VQb2x5ZmlsbH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7aXNUZW1wbGF0ZVBhcnRBY3RpdmUsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBhIGBUZW1wbGF0ZWAgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSBhbmQgdXBkYXRlZFxuICogd2l0aCBuZXcgdmFsdWVzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gIF9wYXJ0czogQXJyYXk8UGFydHx1bmRlZmluZWQ+ID0gW107XG4gIHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3I7XG4gIG9wdGlvbnM6IFJlbmRlck9wdGlvbnM7XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSwgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3NvcixcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHVwZGF0ZSh2YWx1ZXM6IHVua25vd25bXSkge1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xvbmUoKTogRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgLy8gV2hlbiB1c2luZyB0aGUgQ3VzdG9tIEVsZW1lbnRzIHBvbHlmaWxsLCBjbG9uZSB0aGUgbm9kZSwgcmF0aGVyIHRoYW5cbiAgICAvLyBpbXBvcnRpbmcgaXQsIHRvIGtlZXAgdGhlIGZyYWdtZW50IGluIHRoZSB0ZW1wbGF0ZSdzIGRvY3VtZW50LiBUaGlzXG4gICAgLy8gbGVhdmVzIHRoZSBmcmFnbWVudCBpbmVydCBzbyBjdXN0b20gZWxlbWVudHMgd29uJ3QgdXBncmFkZSBhbmRcbiAgICAvLyBwb3RlbnRpYWxseSBtb2RpZnkgdGhlaXIgY29udGVudHMgYnkgY3JlYXRpbmcgYSBwb2x5ZmlsbGVkIFNoYWRvd1Jvb3RcbiAgICAvLyB3aGlsZSB3ZSB0cmF2ZXJzZSB0aGUgdHJlZS5cbiAgICBjb25zdCBmcmFnbWVudCA9IGlzQ0VQb2x5ZmlsbCA/XG4gICAgICAgIHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudEZyYWdtZW50IDpcbiAgICAgICAgZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudCwgdHJ1ZSk7XG5cbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgY29uc3QgX3ByZXBhcmVJbnN0YW5jZSA9IChmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCkgPT4ge1xuICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZVxuICAgICAgLy8gbnVsbFxuICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBmYWxzZSk7XG4gICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgbm9kZXMgYW5kIHBhcnRzIG9mIGEgdGVtcGxhdGVcbiAgICAgIHdoaWxlIChwYXJ0SW5kZXggPCBwYXJ0cy5sZW5ndGggJiYgbm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgLy8gQ29uc2VjdXRpdmUgUGFydHMgbWF5IGhhdmUgdGhlIHNhbWUgbm9kZSBpbmRleCwgaW4gdGhlIGNhc2Ugb2ZcbiAgICAgICAgLy8gbXVsdGlwbGUgYm91bmQgYXR0cmlidXRlcyBvbiBhbiBlbGVtZW50LiBTbyBlYWNoIGl0ZXJhdGlvbiB3ZSBlaXRoZXJcbiAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBub2RlSW5kZXgsIGlmIHdlIGFyZW4ndCBvbiBhIG5vZGUgd2l0aCBhIHBhcnQsIG9yIHRoZVxuICAgICAgICAvLyBwYXJ0SW5kZXggaWYgd2UgYXJlLiBCeSBub3QgaW5jcmVtZW50aW5nIHRoZSBub2RlSW5kZXggd2hlbiB3ZSBmaW5kIGFcbiAgICAgICAgLy8gcGFydCwgd2UgYWxsb3cgZm9yIHRoZSBuZXh0IHBhcnQgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICAgIC8vIG5vZGUgaWYgbmVjY2Vzc2FzcnkuXG4gICAgICAgIGlmICghaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCkpIHtcbiAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZUluZGV4ID09PSBwYXJ0LmluZGV4KSB7XG4gICAgICAgICAgaWYgKHBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wcm9jZXNzb3IuaGFuZGxlVGV4dEV4cHJlc3Npb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIHBhcnQuaW5zZXJ0QWZ0ZXJOb2RlKG5vZGUucHJldmlvdXNTaWJsaW5nISk7XG4gICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKC4uLnRoaXMucHJvY2Vzc29yLmhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKFxuICAgICAgICAgICAgICAgIG5vZGUgYXMgRWxlbWVudCwgcGFydC5uYW1lLCBwYXJ0LnN0cmluZ3MsIHRoaXMub3B0aW9ucykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgICAgX3ByZXBhcmVJbnN0YW5jZSgobm9kZSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KS5jb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBfcHJlcGFyZUluc3RhbmNlKGZyYWdtZW50KTtcbiAgICBpZiAoaXNDRVBvbHlmaWxsKSB7XG4gICAgICBkb2N1bWVudC5hZG9wdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgY3VzdG9tRWxlbWVudHMudXBncmFkZShmcmFnbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge3JlcGFyZW50Tm9kZXN9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7Ym91bmRBdHRyaWJ1dGVTdWZmaXgsIGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXgsIG1hcmtlciwgbm9kZU1hcmtlcn0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gIHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5O1xuICB2YWx1ZXM6IHVua25vd25bXTtcbiAgdHlwZTogc3RyaW5nO1xuICBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHZhbHVlczogdW5rbm93bltdLCB0eXBlOiBzdHJpbmcsXG4gICAgICBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yKSB7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIGA8dGVtcGxhdGU+YCBlbGVtZW50LlxuICAgKi9cbiAgZ2V0SFRNTCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVuZEluZGV4ID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3NbaV07XG4gICAgICAvLyBUaGlzIGV4ZWMoKSBjYWxsIGRvZXMgdHdvIHRoaW5nczpcbiAgICAgIC8vIDEpIEFwcGVuZHMgYSBzdWZmaXggdG8gdGhlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lIHRvIG9wdCBvdXQgb2Ygc3BlY2lhbFxuICAgICAgLy8gYXR0cmlidXRlIHZhbHVlIHBhcnNpbmcgdGhhdCBJRTExIGFuZCBFZGdlIGRvLCBsaWtlIGZvciBzdHlsZSBhbmRcbiAgICAgIC8vIG1hbnkgU1ZHIGF0dHJpYnV0ZXMuIFRoZSBUZW1wbGF0ZSBjbGFzcyBhbHNvIGFwcGVuZHMgdGhlIHNhbWUgc3VmZml4XG4gICAgICAvLyB3aGVuIGxvb2tpbmcgdXAgYXR0cmlidXRlcyB0byBjcmVhdGUgUGFydHMuXG4gICAgICAvLyAyKSBBZGRzIGFuIHVucXVvdGVkLWF0dHJpYnV0ZS1zYWZlIG1hcmtlciBmb3IgdGhlIGZpcnN0IGV4cHJlc3Npb24gaW5cbiAgICAgIC8vIGFuIGF0dHJpYnV0ZS4gU3Vic2VxdWVudCBhdHRyaWJ1dGUgZXhwcmVzc2lvbnMgd2lsbCB1c2Ugbm9kZSBtYXJrZXJzLFxuICAgICAgLy8gYW5kIHRoaXMgaXMgc2FmZSBzaW5jZSBhdHRyaWJ1dGVzIHdpdGggbXVsdGlwbGUgZXhwcmVzc2lvbnMgYXJlXG4gICAgICAvLyBndWFyYW50ZWVkIHRvIGJlIHF1b3RlZC5cbiAgICAgIGNvbnN0IG1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHMpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIC8vIFdlJ3JlIHN0YXJ0aW5nIGEgbmV3IGJvdW5kIGF0dHJpYnV0ZS5cbiAgICAgICAgLy8gQWRkIHRoZSBzYWZlIGF0dHJpYnV0ZSBzdWZmaXgsIGFuZCB1c2UgdW5xdW90ZWQtYXR0cmlidXRlLXNhZmVcbiAgICAgICAgLy8gbWFya2VyLlxuICAgICAgICBodG1sICs9IHMuc3Vic3RyKDAsIG1hdGNoLmluZGV4KSArIG1hdGNoWzFdICsgbWF0Y2hbMl0gK1xuICAgICAgICAgICAgYm91bmRBdHRyaWJ1dGVTdWZmaXggKyBtYXRjaFszXSArIG1hcmtlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdlJ3JlIGVpdGhlciBpbiBhIGJvdW5kIG5vZGUsIG9yIHRyYWlsaW5nIGJvdW5kIGF0dHJpYnV0ZS5cbiAgICAgICAgLy8gRWl0aGVyIHdheSwgbm9kZU1hcmtlciBpcyBzYWZlIHRvIHVzZS5cbiAgICAgICAgaHRtbCArPSBzICsgbm9kZU1hcmtlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0bWwgKyB0aGlzLnN0cmluZ3NbZW5kSW5kZXhdO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGVFbGVtZW50KCk6IEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmdldEhUTUwoKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cbn1cblxuLyoqXG4gKiBBIFRlbXBsYXRlUmVzdWx0IGZvciBTVkcgZnJhZ21lbnRzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd3JhcHMgSFRNbCBpbiBhbiBgPHN2Zz5gIHRhZyBpbiBvcmRlciB0byBwYXJzZSBpdHMgY29udGVudHMgaW4gdGhlXG4gKiBTVkcgbmFtZXNwYWNlLCB0aGVuIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZSB0byByZW1vdmUgdGhlIGA8c3ZnPmAgdGFnIHNvIHRoYXRcbiAqIGNsb25lcyBvbmx5IGNvbnRhaW5lciB0aGUgb3JpZ2luYWwgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkdUZW1wbGF0ZVJlc3VsdCBleHRlbmRzIFRlbXBsYXRlUmVzdWx0IHtcbiAgZ2V0SFRNTCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPHN2Zz4ke3N1cGVyLmdldEhUTUwoKX08L3N2Zz5gO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGVFbGVtZW50KCk6IEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gc3VwZXIuZ2V0VGVtcGxhdGVFbGVtZW50KCk7XG4gICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZCE7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICByZXBhcmVudE5vZGVzKGNvbnRlbnQsIHN2Z0VsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcblxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB3aXRoIGVtYmVkZGVkIHVuaXF1ZSBrZXkgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGhcbiAqIHBvc3NpYmxlIHRleHQgaW4gdGVtcGxhdGVzLlxuICovXG5leHBvcnQgY29uc3QgbWFya2VyID0gYHt7bGl0LSR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDIpfX19YDtcblxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB1c2VkIHRleHQtcG9zaXRpb25zLCBtdWx0aS1iaW5kaW5nIGF0dHJpYnV0ZXMsIGFuZFxuICogYXR0cmlidXRlcyB3aXRoIG1hcmt1cC1saWtlIHRleHQgdmFsdWVzLlxuICovXG5leHBvcnQgY29uc3Qgbm9kZU1hcmtlciA9IGA8IS0tJHttYXJrZXJ9LS0+YDtcblxuZXhwb3J0IGNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcblxuLyoqXG4gKiBTdWZmaXggYXBwZW5kZWQgdG8gYWxsIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcblxuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIFRlbXBsYXRlIHRoYXQgdHJhY2tzIHRoZSBsb2NhdGlvbiBvZiBkeW5hbWljIHBhcnRzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICBwYXJ0czogVGVtcGxhdGVQYXJ0W10gPSBbXTtcbiAgZWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LCBlbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICBjb25zdCBub2Rlc1RvUmVtb3ZlOiBOb2RlW10gPSBbXTtcbiAgICBjb25zdCBfcHJlcGFyZVRlbXBsYXRlID0gKHRlbXBsYXRlOiBIVE1MVGVtcGxhdGVFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmVcbiAgICAgIC8vIG51bGxcbiAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBmYWxzZSk7XG4gICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgbGFzdCBpbmRleCBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0LiBXZSB0cnkgdG8gZGVsZXRlXG4gICAgICAvLyB1bm5lY2Vzc2FyeSBub2RlcywgYnV0IHdlIG5ldmVyIHdhbnQgdG8gYXNzb2NpYXRlIHR3byBkaWZmZXJlbnQgcGFydHNcbiAgICAgIC8vIHRvIHRoZSBzYW1lIGluZGV4LiBUaGV5IG11c3QgaGF2ZSBhIGNvbnN0YW50IG5vZGUgYmV0d2Vlbi5cbiAgICAgIGxldCBsYXN0UGFydEluZGV4ID0gMDtcbiAgICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlIGFzIEVsZW1lbnQgfCBDb21tZW50IHwgVGV4dDtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgICBpZiAoKG5vZGUgYXMgRWxlbWVudCkuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gKG5vZGUgYXMgRWxlbWVudCkuYXR0cmlidXRlcztcbiAgICAgICAgICAgIC8vIFBlclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hbWVkTm9kZU1hcCxcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIHJldHVybmVkIGluIGRvY3VtZW50IG9yZGVyLlxuICAgICAgICAgICAgLy8gSW4gcGFydGljdWxhciwgRWRnZS9JRSBjYW4gcmV0dXJuIHRoZW0gb3V0IG9mIG9yZGVyLCBzbyB3ZSBjYW5ub3RcbiAgICAgICAgICAgIC8vIGFzc3VtZSBhIGNvcnJlc3BvbmRhbmNlIGJldHdlZW4gcGFydCBpbmRleCBhbmQgYXR0cmlidXRlIGluZGV4LlxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpXS52YWx1ZS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAvLyBleHByZXNzaW9uIGluIHRoaXMgYXR0cmlidXRlXG4gICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZvclBhcnQgPSByZXN1bHQuc3RyaW5nc1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpIVsyXTtcbiAgICAgICAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgLy8gQWxsIGJvdW5kIGF0dHJpYnV0ZXMgaGF2ZSBoYWQgYSBzdWZmaXggYWRkZWQgaW5cbiAgICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAgIC8vIGhhbmRsaW5nLiBUbyBsb29rIHVwIHRoZSBhdHRyaWJ1dGUgdmFsdWUgd2UgYWxzbyBuZWVkIHRvIGFkZFxuICAgICAgICAgICAgICAvLyB0aGUgc3VmZml4LlxuICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID1cbiAgICAgICAgICAgICAgICAgIG5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4O1xuICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSkhO1xuICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gYXR0cmlidXRlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdhdHRyaWJ1dGUnLCBpbmRleCwgbmFtZSwgc3RyaW5nc30pO1xuICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSk7XG4gICAgICAgICAgICAgIHBhcnRJbmRleCArPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgobm9kZSBhcyBFbGVtZW50KS50YWdOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgICBfcHJlcGFyZVRlbXBsYXRlKG5vZGUgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gKG5vZGUgYXMgVGV4dCkuZGF0YSE7XG4gICAgICAgICAgaWYgKGRhdGEuaW5kZXhPZihtYXJrZXIpID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZSE7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gZGF0YS5zcGxpdChtYXJrZXJSZWdleCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgICAvLyBUaGVzZSBub2RlcyBhcmUgYWxzbyB1c2VkIGFzIHRoZSBtYXJrZXJzIGZvciBub2RlIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAoc3RyaW5nc1tpXSA9PT0gJycpID8gY3JlYXRlTWFya2VyKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cmluZ3NbaV0pLFxuICAgICAgICAgICAgICAgICAgbm9kZSk7XG4gICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleDogKytpbmRleH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyB0ZXh0LCB3ZSBtdXN0IGluc2VydCBhIGNvbW1lbnQgdG8gbWFyayBvdXIgcGxhY2UuXG4gICAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gdHJ1c3QgaXQgd2lsbCBzdGljayBhcm91bmQgYWZ0ZXIgY2xvbmluZy5cbiAgICAgICAgICAgIGlmIChzdHJpbmdzW2xhc3RJbmRleF0gPT09ICcnKSB7XG4gICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAobm9kZSBhcyBUZXh0KS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHBhcnQgZm9yIGVhY2ggbWF0Y2ggZm91bmRcbiAgICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogTm9kZS5DT01NRU5UX05PREUgKi8pIHtcbiAgICAgICAgICBpZiAoKG5vZGUgYXMgQ29tbWVudCkuZGF0YSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUhO1xuICAgICAgICAgICAgLy8gQWRkIGEgbmV3IG1hcmtlciBub2RlIHRvIGJlIHRoZSBzdGFydE5vZGUgb2YgdGhlIFBhcnQgaWYgYW55IG9mXG4gICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgICAgLy8gICogV2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzU2libGluZ1xuICAgICAgICAgICAgLy8gICogVGhlIHByZXZpb3VzU2libGluZyBpcyBhbHJlYWR5IHRoZSBzdGFydCBvZiBhIHByZXZpb3VzIHBhcnRcbiAgICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fCBpbmRleCA9PT0gbGFzdFBhcnRJbmRleCkge1xuICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RQYXJ0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleH0pO1xuICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nLCBrZWVwIHRoaXMgbm9kZSBzbyB3ZSBoYXZlIGFuIGVuZC5cbiAgICAgICAgICAgIC8vIEVsc2UsIHdlIGNhbiByZW1vdmUgaXQgdG8gc2F2ZSBmdXR1cmUgY29zdHMuXG4gICAgICAgICAgICBpZiAobm9kZS5uZXh0U2libGluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAobm9kZSBhcyBDb21tZW50KS5kYXRhID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgIHdoaWxlICgoaSA9IChub2RlIGFzIENvbW1lbnQpLmRhdGEhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PVxuICAgICAgICAgICAgICAgICAgIC0xKSB7XG4gICAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBjb25zaWRlciB3aGV0aGVyIGl0J3MgZXZlbiB3b3J0aCBpdCB0b1xuICAgICAgICAgICAgICAvLyBtYWtlIGJpbmRpbmdzIGluIGNvbW1lbnRzIHdvcmtcbiAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnbm9kZScsIGluZGV4OiAtMX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgX3ByZXBhcmVUZW1wbGF0ZShlbGVtZW50KTtcbiAgICAvLyBSZW1vdmUgdGV4dCBiaW5kaW5nIG5vZGVzIGFmdGVyIHRoZSB3YWxrIHRvIG5vdCBkaXN0dXJiIHRoZSBUcmVlV2Fsa2VyXG4gICAgZm9yIChjb25zdCBuIG9mIG5vZGVzVG9SZW1vdmUpIHtcbiAgICAgIG4ucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQobik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQSBwbGFjZWhvbGRlciBmb3IgYSBkeW5hbWljIGV4cHJlc3Npb24gaW4gYW4gSFRNTCB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGJ1aWx0LWluIHBhcnQgdHlwZXM6IEF0dHJpYnV0ZVBhcnQgYW5kIE5vZGVQYXJ0LiBOb2RlUGFydHNcbiAqIGFsd2F5cyByZXByZXNlbnQgYSBzaW5nbGUgZHluYW1pYyBleHByZXNzaW9uLCB3aGlsZSBBdHRyaWJ1dGVQYXJ0cyBtYXlcbiAqIHJlcHJlc2VudCBhcyBtYW55IGV4cHJlc3Npb25zIGFyZSBjb250YWluZWQgaW4gdGhlIGF0dHJpYnV0ZS5cbiAqXG4gKiBBIFRlbXBsYXRlJ3MgcGFydHMgYXJlIG11dGFibGUsIHNvIHBhcnRzIGNhbiBiZSByZXBsYWNlZCBvciBtb2RpZmllZFxuICogKHBvc3NpYmx5IHRvIGltcGxlbWVudCBkaWZmZXJlbnQgdGVtcGxhdGUgc2VtYW50aWNzKS4gVGhlIGNvbnRyYWN0IGlzIHRoYXRcbiAqIHBhcnRzIGNhbiBvbmx5IGJlIHJlcGxhY2VkLCBub3QgcmVtb3ZlZCwgYWRkZWQgb3IgcmVvcmRlcmVkLCBhbmQgcGFydHMgbXVzdFxuICogYWx3YXlzIGNvbnN1bWUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHZhbHVlcyBpbiB0aGVpciBgdXBkYXRlKClgIG1ldGhvZC5cbiAqXG4gKiBUT0RPKGp1c3RpbmZhZ25hbmkpOiBUaGF0IHJlcXVpcmVtZW50IGlzIGEgbGl0dGxlIGZyYWdpbGUuIEFcbiAqIFRlbXBsYXRlSW5zdGFuY2UgY291bGQgaW5zdGVhZCBiZSBtb3JlIGNhcmVmdWwgYWJvdXQgd2hpY2ggdmFsdWVzIGl0IGdpdmVzXG4gKiB0byBQYXJ0LnVwZGF0ZSgpLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZVBhcnQgPSB7XG4gIHR5cGU6ICdub2RlJyxcbiAgaW5kZXg6IG51bWJlclxufXx7dHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4OiBudW1iZXIsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW119O1xuXG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydDogVGVtcGxhdGVQYXJ0KSA9PiBwYXJ0LmluZGV4ICE9PSAtMTtcblxuLy8gQWxsb3dzIGBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKWAgdG8gYmUgcmVuYW1lZCBmb3IgYVxuLy8gc21hbGwgbWFudWFsIHNpemUtc2F2aW5ncy5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXJrZXIgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuLyoqXG4gKiBUaGlzIHJlZ2V4IGV4dHJhY3RzIHRoZSBhdHRyaWJ1dGUgbmFtZSBwcmVjZWRpbmcgYW4gYXR0cmlidXRlLXBvc2l0aW9uXG4gKiBleHByZXNzaW9uLiBJdCBkb2VzIHRoaXMgYnkgbWF0Y2hpbmcgdGhlIHN5bnRheCBhbGxvd2VkIGZvciBhdHRyaWJ1dGVzXG4gKiBhZ2FpbnN0IHRoZSBzdHJpbmcgbGl0ZXJhbCBkaXJlY3RseSBwcmVjZWRpbmcgdGhlIGV4cHJlc3Npb24sIGFzc3VtaW5nIHRoYXRcbiAqIHRoZSBleHByZXNzaW9uIGlzIGluIGFuIGF0dHJpYnV0ZS12YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMFxuICpcbiAqIFwiXFwwLVxceDFGXFx4N0YtXFx4OUZcIiBhcmUgVW5pY29kZSBjb250cm9sIGNoYXJhY3RlcnNcbiAqXG4gKiBcIiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzcGFjZS1jaGFyYWN0ZXJcbiAqXG4gKiBTbyBhbiBhdHRyaWJ1dGUgaXM6XG4gKiAgKiBUaGUgbmFtZTogYW55IGNoYXJhY3RlciBleGNlcHQgYSBjb250cm9sIGNoYXJhY3Rlciwgc3BhY2UgY2hhcmFjdGVyLCAoJyksXG4gKiAgICAoXCIpLCBcIj5cIiwgXCI9XCIsIG9yIFwiL1wiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5leHBvcnQgY29uc3QgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCA9XG4gICAgLyhbIFxceDA5XFx4MGFcXHgwY1xceDBkXSkoW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiJz49L10rKShbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSkkLztcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKlxuICogTWFpbiBsaXQtaHRtbCBtb2R1bGUuXG4gKlxuICogTWFpbiBleHBvcnRzOlxuICpcbiAqIC0gIFtbaHRtbF1dXG4gKiAtICBbW3N2Z11dXG4gKiAtICBbW3JlbmRlcl1dXG4gKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKlxuICogRG8gbm90IHJlbW92ZSB0aGlzIGNvbW1lbnQ7IGl0IGtlZXBzIHR5cGVkb2MgZnJvbSBtaXNwbGFjaW5nIHRoZSBtb2R1bGVcbiAqIGRvY3MuXG4gKi9cbmltcG9ydCB7ZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5pbXBvcnQge1NWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcblxuZXhwb3J0IHtEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuZXhwb3J0IHtkaXJlY3RpdmUsIERpcmVjdGl2ZUZuLCBpc0RpcmVjdGl2ZX0gZnJvbSAnLi9saWIvZGlyZWN0aXZlLmpzJztcbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IHJlbW92ZSBsaW5lIHdoZW4gd2UgZ2V0IE5vZGVQYXJ0IG1vdmluZyBtZXRob2RzXG5leHBvcnQge3JlbW92ZU5vZGVzLCByZXBhcmVudE5vZGVzfSBmcm9tICcuL2xpYi9kb20uanMnO1xuZXhwb3J0IHtub0NoYW5nZSwgbm90aGluZywgUGFydH0gZnJvbSAnLi9saWIvcGFydC5qcyc7XG5leHBvcnQge0F0dHJpYnV0ZUNvbW1pdHRlciwgQXR0cmlidXRlUGFydCwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgaXNQcmltaXRpdmUsIE5vZGVQYXJ0LCBQcm9wZXJ0eUNvbW1pdHRlciwgUHJvcGVydHlQYXJ0fSBmcm9tICcuL2xpYi9wYXJ0cy5qcyc7XG5leHBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vbGliL3JlbmRlci1vcHRpb25zLmpzJztcbmV4cG9ydCB7cGFydHMsIHJlbmRlcn0gZnJvbSAnLi9saWIvcmVuZGVyLmpzJztcbmV4cG9ydCB7dGVtcGxhdGVDYWNoZXMsIHRlbXBsYXRlRmFjdG9yeX0gZnJvbSAnLi9saWIvdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5leHBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmV4cG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vbGliL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5leHBvcnQge1NWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcbmV4cG9ydCB7Y3JlYXRlTWFya2VyLCBpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGV9IGZyb20gJy4vbGliL3RlbXBsYXRlLmpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBsaXRIdG1sVmVyc2lvbnM6IHN0cmluZ1tdO1xuICB9XG59XG5cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gfHwgKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzEuMC4wJyk7XG5cbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IHVua25vd25bXSkgPT5cbiAgICBuZXcgVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnaHRtbCcsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG5cbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IChzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4udmFsdWVzOiB1bmtub3duW10pID0+XG4gICAgbmV3IFNWR1RlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ3N2ZycsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xufSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG4gIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCwgUHJvcCwgaHRtbCB9IGZyb20gJ2NlLWRlY29yYXRvcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RDb21wb25lbnQgZXh0ZW5kcyBDdXN0b21FbGVtZW50IHtcclxuXHJcbiAgICBAUHJvcCgpXHJcbiAgICB0ZXN0OnN0cmluZyA9ICcnO1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sYHRlc3RgO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvdGVzdGNvbXBvbmVudCc7Il0sInNvdXJjZVJvb3QiOiIifQ==