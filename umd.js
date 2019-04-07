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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this || (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self;
}() || Function("return this")(); // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.


var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
module.exports = __webpack_require__(/*! ./runtime */ "../ce-decorators/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),

/***/ "../ce-decorators/node_modules/regenerator-runtime/runtime.js":
/*!********************************************************************!*\
  !*** ../ce-decorators/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
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
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
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
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
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
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
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
        } // Be forgiving, per 25.3.3.3.3 of the spec:
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
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
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
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
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

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
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
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

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
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
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
        var i = -1,
            next = function next() {
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
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
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
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
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

        return !!caught;
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
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
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
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
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
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
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
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
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
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this || (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../gitlab-monitor/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NsYXNzZXZlbnRzLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9jbGFzc3Byb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NsYXNzcHJvcGVydHlpbnRlcmNlcHRvcnMudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NsYXNzcHJvcGVydHl3YXRjaGVyLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NvbXBvbmVudGNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NvbXBvbmVudHByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2NvbXBvbmVudHN0YXRlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9jdXN0b21lbGVtZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9kZXByZWNhdGVkLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9ldmVudC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2ludGVyY2VwdG9yLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saXQtaHRtbC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvcHJvcC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvcHJvcGVydHlzdGF0ZS50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvcmVmbGVjdC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi8uLi9zcmMvcmVuZGVyZXIvbGlnaHRET01SZW5kZXJlci50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi8uLi9zcmMvcmVuZGVyZXIvcGlwZVJlbmRlcmVyLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9yZW5kZXJlci9yZW5kZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vLi4vc3JjL3JlbmRlcmVyL3NoYWRvd0RPTVJlbmRlcmVyLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9zdGFnZTIvY29tcG9uZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9zdGFnZTIvZGVwcmVjYXRlZC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi8uLi9zcmMvc3RhZ2UyL2V2ZW50LnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9zdGFnZTIvaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vLi4vc3JjL3N0YWdlMi9wcm9wLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9zdGFnZTIvc3RhZ2UyZGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi8uLi9zcmMvc3RhZ2UyL3RyYWNlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uLy4uL3NyYy9zdGFnZTIvd2F0Y2gudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL3RyYWNlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvd2F0Y2gudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vY2UtZGVjb3JhdG9ycy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2RpcmVjdGl2ZXMvYXN5bmMtYXBwZW5kLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9kaXJlY3RpdmVzL2FzeW5jLXJlcGxhY2UudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2RpcmVjdGl2ZXMvY2FjaGUudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2RpcmVjdGl2ZXMvY2xhc3MtbWFwLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9kaXJlY3RpdmVzL2d1YXJkLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9kaXJlY3RpdmVzL2lmLWRlZmluZWQudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vc3JjL2RpcmVjdGl2ZXMvcmVwZWF0LnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9kaXJlY3RpdmVzL3N0eWxlLW1hcC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvZGlyZWN0aXZlcy91bnRpbC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvZGlyZWN0aXZlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvZG9tLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvbW9kaWZ5LXRlbXBsYXRlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvcGFydC50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvbGliL3BhcnRzLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvcmVuZGVyLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvc2hhZHktcmVuZGVyLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvdGVtcGxhdGUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uLi9zcmMvbGliL3RlbXBsYXRlLWluc3RhbmNlLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvdGVtcGxhdGUtcmVzdWx0LnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL3NyYy9saWIvdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3Ivc3JjL2xpdC1odG1sLnRzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLy4uL2NlLWRlY29yYXRvcnMvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi4vY2UtZGVjb3JhdG9ycy9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2dpdGxhYi1tb25pdG9yLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9naXRsYWItbW9uaXRvci8uL3NyYy9jb21wb25lbnRzL3Rlc3Rjb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZ2l0bGFiLW1vbml0b3IvLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6WyJtYXAiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHlJbnRlcmNlcHRvciIsInByb3BlcnR5V2F0Y2hlciIsInRhcmdldCIsImlzU3RhZ2UyQ2xhc3NEZWNvcmF0b3IiLCJDb21wb25lbnRTMiIsImFwcGx5U3RhZ2UydG9MZWdhY3lDbGFzc0RlY29yYXRvciIsImNvbXBvbmVudHMiLCJnZXRBbGxDb21wb25lbnRzIiwiY2F0YWxvZyIsInZhbHVlIiwiY29tcG9uZW50UHJvcGVydGllcyIsImdldENvbXBvbmVudFByb3BlcnRpZXMiLCJBcnJheSIsImdldENsYXNzUHJvcGVydGllcyIsIm5hbWUiLCJldmVudHMiLCJnZXRDbGFzc0V2ZW50cyIsIndpbmRvdyIsIkNPTVBPTkVOVF9TVEFURSIsIlJFTkRFUl9TVFJBVEVHWSIsImluc3RhbmNlIiwiUFJPUEVSVFlfU1RBVEUiLCJwcm9wZXJ0eU5hbWUiLCJrZWJhcFRvQ2FtZWxDYXNlIiwiY2xhc3NQcm9wZXJ0eSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJkZXNlcmlhbGl6ZVZhbHVlIiwiaW50ZXJjZXB0b3IiLCJnZXRDbGFzc1Byb3BlcnR5SW50ZXJjZXB0b3IiLCJmdW5jIiwid2F0Y2hlciIsImdldENsYXNzUHJvcGVydHlXYXRjaGVyIiwiY2FtZWxUb0tlYmFwQ2FzZSIsInNlcmlhbGl6ZVZhbHVlIiwiY29uc3RydWN0b3IiLCJfcmVuZGVyU3RyYXRlZ3kiLCJERUZBVUxUIiwiX3JlbmRlckNhbGxiYWNrUmVzb2x2ZXIiLCJfY29tcG9uZW50U3RhdGUiLCJJTklUIiwiX3Byb3BlcnR5U3RhdGUiLCJESVJUWSIsIl9yZW5kZXJTY2hlZHVsZWQiLCJfdGVtcGxhdGVDYWNoZSIsIl9maXJzdFJlbmRlciIsIl9yZW5kZXJDb21wbGV0ZWRDYWxsYmFja3MiLCJfY29uc3RydWN0ZWRDb21wbGV0ZWRDYWxsYmFja3MiLCJfbGF5b3V0UkFGUmVmZXJlbmNlIiwiUHJvbWlzZSIsIm1vZGUiLCJyZXNvbHZlIiwiZm9yY2UiLCJhZGRDb21wb25lbnRUb1JlbmRlclBpcGVsaW5lIiwic2V0VGltZW91dCIsInJlbmRlckNvbXBvbmVudCIsInJlbW92ZUNvbXBvbmVudEZyb21SZW5kZXJQaXBlbGluZSIsIl9vcmlnaW5hbFByb3BlcnR5U3RhdGUiLCJwcm9wVmFsdWUiLCJrZXkiLCJjb25zb2xlIiwiaXNTdGFnZTJNZXRob2REZWNvcmF0b3IiLCJpc1N0YWdlMkZpZWxkRGVjb3JhdG9yIiwiRGVwcmVjYXRlZFMyIiwiYXBwbHlTdGFnZTJUb0xlZ2FjeUZpZWxkRGVjb3JhdG9yIiwiRXZlbnRzMiIsIkludGVyY2VwdG9yUzIiLCJhcHBseVN0YWdlMlRvTGVnYWN5TWV0aG9kRGVjb3JhdG9yIiwib3B0aW9ucyIsIlByb3BTMiIsIlJlZmxlY3QiLCJwcm9wZXJ0eUtleSIsIlN0YXRlUzIiLCJvcmlnUmVmbGVjdCIsInJlZmxlY3RNYXAiLCJtZXRhZGF0YU1hcCIsInByb3BNYXAiLCJkZXNjaXB0b3IiLCJjdXJyZW50VmFsdWUiLCJyZXN1bHQiLCJkZXNjcmlwdG9yIiwia2luZCIsInBsYWNlbWVudCIsImZpbmlzaGVyIiwiZmluaXNoZXJUYXJnZXQiLCJnZXRPckNyZWF0ZVByb3BNYXAiLCJnZXRPckNyZWF0ZU1ldGFkYXRhTWFwIiwiZmluaXNoVGFyZ2V0IiwicHJvcGVydHkiLCJkZWNvcmF0ZSIsImdldE1ldGFkYXRhIiwibWV0YWRhdGEiLCJ0ZW1wbGF0ZUNhY2hlIiwic3R5bGVTaGVldCIsImRvY3VtZW50Iiwic3R5bGVTdHJpbmciLCJwcmV2IiwiY3VycmVudCIsInByZXZWYWx1ZSIsInRhZyIsImFyZ3MiLCJtYWtlVGVtcGxhdGVTdHJpbmciLCJyZW5kZXIiLCJldmVudENvbnRleHQiLCJjb21wb25lbnRzVG9SZW5kZXIiLCJjdXJyZW50QW5pbWF0aW9uRnJhbWUiLCJmcmFtZUJ1ZGdldCIsInNjaGVkdWxlTmV4dFJBRlJlbmRlciIsImN1cnJlbnRGcmFtZUJ1ZGdldCIsImNvbXBvbmVudCIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJyZW5kZXJUaW1lIiwiZWxlbWVudFRvUmVuZGVyIiwicmVuZGVyVG9TaGFkb3dET00iLCJyZW5kZXJUb0xpZ2h0RE9NIiwiY3NzU3R5bGVzIiwibmVlZFNoYWR5RE9NIiwic2hhZHlSZW5kZXIiLCJodG1sIiwic2NvcGVOYW1lIiwiZWxlbWVudHMiLCJDdXN0b21FbGVtZW50IiwiY29tcG9uZW50RXh0ZW5kZWRPcHRpb25zIiwic2hhZHlDU1NTdHlsZVNoZWV0QWRvcHRlZCIsInByb3RvdHlwZSIsIk9iamVjdCIsInByb3RvdHlwZUNsYXNzUHJvcGVydGllcyIsInRhcmdldENsYXNzUHJvcGVydGllcyIsImNvbXBvbmVudFN0eWxlcyIsImNvbXBvbmVudENTU1N0eWxlcyIsImNzcyIsImNzc1RleHQiLCJwYXJlbnRTdHlsZSIsInByb3RvdHlwZVdhdGNoZXIiLCJnZXRBbGxDbGFzc1Byb3BlcnR5V2F0Y2hlciIsInByb3RvdHlwZUludGVyY2VwdG9yIiwiZ2V0QWxsQ2xhc3NQcm9wZXJ0eUludGVyY2VwdG9ycyIsInNldENvbXBvbmVudFByb3BlcnRpZXMiLCJTeW1ib2wiLCJleHRyYXMiLCJpbml0aWFsaXplciIsImluaXRpYWxpemUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJnZXQiLCJtZXNzYWdlIiwic2V0Iiwib3B0aW9uc09iamVjdCIsImNhbmNlbGFibGUiLCJidWJibGVzIiwiZW1pdCIsImN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiUHJvcCIsInJlZmxlY3RBc0F0dHJpYnV0ZSIsInR5cGUiLCJ1bmRlZmluZWQiLCJfb3B0aW9ucyIsImVsZW1lbnQiLCJjbGFzc0Rlc2NyaXB0b3IiLCJkZWNvcmF0b3IiLCJuZXdDb25zdHJ1Y3RvciIsImZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvciIsIm1ldGhvZERlY29yYXRvckRlc2NyaXB0b3IiLCJUcmFjZVMyIiwicGFyc2VGbG9hdCIsIl8zIiwiY2FsbGJhY2siLCJldmFsIiwiSlNPTiIsInN0ciIsInJhdyIsInN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyIsIkRvY3VtZW50IiwiQ1NTU3R5bGVTaGVldCIsIldhdGNoUzIiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImciLCJzZWxmIiwiRnVuY3Rpb24iLCJoYWRSdW50aW1lIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImluZGV4T2YiLCJvbGRSdW50aW1lIiwiZSIsImdsb2JhbCIsIk9wIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImluTW9kdWxlIiwicnVudGltZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsImNhbGwiLCJlcnIiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZWplY3QiLCJyZWNvcmQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsInJldHVybiIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInRvU3RyaW5nIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwib2JqZWN0IiwicmV2ZXJzZSIsImxlbmd0aCIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJza2lwVGVtcFJlc2V0IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwiZGVmaW5lUHJvcGVydHkiLCJsIiwiVGVzdENvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LEdBQWtCLENBQWhDO0FBQ0EsUUFBSSxPQUFPLEdBQUcsQ0FBZDtBQUNBLFFBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFWLEdBQW1CLENBQWpDLENBcENtQyxDQXNDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFJSSxrQkFBUztBQUNMLGVBQU9wQywwREFBUDtBQUNIO0FBTkw7QUFBQTtBQUFBLEdBQW1DRywyREFBbkMsRTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQSIsImZpbGUiOiJ1bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImdpdGxhYi1tb25pdG9yXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImdpdGxhYi1tb25pdG9yXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImdpdGxhYi1tb25pdG9yXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vY3VzdG9tZWxlbWVudCc7XG5pbXBvcnQgeyBFdmVudE9wdGlvbnMgfSBmcm9tICcuL2V2ZW50b3B0aW9ucyc7XG5cbmNvbnN0IG1hcDogTWFwPHR5cGVvZiBDdXN0b21FbGVtZW50LCBDbGFzc0V2ZW50cz4gPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogQ0xhc3NFdmVudCB0eXBlXG4gKi9cbmV4cG9ydCB0eXBlIENsYXNzRXZlbnRzID0gTWFwPHN0cmluZyB8IHN5bWJvbCwgRXZlbnRPcHRpb25zPjtcblxuLyoqXG4gKiByZXR1cm4gZXZlbnRzIHJlZ2lzdGVyZWQgZm9yIHRoZSBnaXZlbiBjbGFzc1xuICogXG4gKiBAcGFyYW0gdGFyZ2V0IENsYXNzIHRvIGdldCBDbGFzc0V2ZW50cyBmcm9tIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NFdmVudHModGFyZ2V0OiB0eXBlb2YgQ3VzdG9tRWxlbWVudCk6IENsYXNzRXZlbnRzIHtcbiAgbGV0IHByb3BlcnRpZXM6IENsYXNzRXZlbnRzIHwgdW5kZWZpbmVkID0gbWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQodGFyZ2V0LCBwcm9wZXJ0aWVzKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgUHJvcGVydHlPcHRpb25zIH0gZnJvbSAnLi9wcm9wZXJ0eW9wdGlvbnMnO1xuXG5jb25zdCBtYXA6IE1hcDx0eXBlb2YgQ3VzdG9tRWxlbWVudCwgQ2xhc3NQcm9wZXJ0aWVzPiA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBDbGFzc1Byb3BlcnR5IHR5cGVcbiAqL1xuZXhwb3J0IHR5cGUgQ2xhc3NQcm9wZXJ0aWVzID0gTWFwPHN0cmluZyB8IHN5bWJvbCwgUHJvcGVydHlPcHRpb25zPjtcblxuLyoqXG4gKiByZXR1cm4gYWxsIGRlZmluZWQgcHJvcGVydGllcyBmb3IgYSBjbGFzc1xuICogXG4gKiBAcGFyYW0gdGFyZ2V0IENsYXNzIHRvIGdldCBDbGFzc1Byb3BlcnRpZXMgZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NQcm9wZXJ0aWVzKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQpOiBDbGFzc1Byb3BlcnRpZXMge1xuICBsZXQgcHJvcGVydGllczogQ2xhc3NQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkID0gbWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQodGFyZ2V0LCBwcm9wZXJ0aWVzKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL2N1c3RvbWVsZW1lbnQnO1xuXG5jb25zdCBtYXA6IE1hcDx0eXBlb2YgQ3VzdG9tRWxlbWVudCwgUHJvcGVydHlJbnRlcmNlcHRvcj4gPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogUHJvcGVydHlJbnRlcmNlcHRvciBUeXBlXG4gKi9cbmV4cG9ydCB0eXBlIFByb3BlcnR5SW50ZXJjZXB0b3IgPSBNYXA8c3RyaW5nLCBBcnJheTwoKSA9PiB2b2lkPj47XG5cbi8qKlxuICogZ2V0IGFsbCBpbnRlcmNlcHJvcnMgZm9yIGEgcHJvcGVydHkgb2YgYSBjbGFzc1xuICogXG4gKiBAcGFyYW0gdGFyZ2V0IENsYXNzIHRvIGdldCBpbnRlcmNlcHRvcnMgZnJvbVxuICogQHBhcmFtIHByb3BlcnR5IHByb3BlcnR5IHdoaWNoIHdpbGwgYmUgaW50ZXJjZXB0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzUHJvcGVydHlJbnRlcmNlcHRvcih0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50LCBwcm9wZXJ0eTogc3RyaW5nKTogQXJyYXk8KCkgPT4gdm9pZD4ge1xuICBsZXQgcHJvcGVydGllczogUHJvcGVydHlJbnRlcmNlcHRvciB8IHVuZGVmaW5lZCA9IG1hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICBtYXAuc2V0KHRhcmdldCwgcHJvcGVydGllcyk7XG4gIH1cbiAgbGV0IHByb3BlcnR5SW50ZXJjZXB0b3IgPSBwcm9wZXJ0aWVzLmdldChwcm9wZXJ0eSk7XG4gIGlmICghcHJvcGVydHlJbnRlcmNlcHRvcikge1xuICAgIHByb3BlcnR5SW50ZXJjZXB0b3IgPSBbXTtcbiAgICBwcm9wZXJ0aWVzLnNldChwcm9wZXJ0eSwgcHJvcGVydHlJbnRlcmNlcHRvcik7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5SW50ZXJjZXB0b3I7XG59XG5cbi8qKlxuICogZ2V0IGFsbCBpbnRlcmNlcHRvcnMgZm9yIGEgY2xhc3NcbiAqIFxuICogQHBhcmFtIHRhcmdldCBDbGFzcyB0byBnZXQgaW50ZXJjZXB0b3JzIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbENsYXNzUHJvcGVydHlJbnRlcmNlcHRvcnModGFyZ2V0OiB0eXBlb2YgQ3VzdG9tRWxlbWVudCk6IFByb3BlcnR5SW50ZXJjZXB0b3Ige1xuICBsZXQgcHJvcGVydGllczogUHJvcGVydHlJbnRlcmNlcHRvciB8IHVuZGVmaW5lZCA9IG1hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICBtYXAuc2V0KHRhcmdldCwgcHJvcGVydGllcyk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBDdXN0b21FbGVtZW50IH0gZnJvbSAnLi9jdXN0b21lbGVtZW50JztcblxuY29uc3QgbWFwOiBNYXA8dHlwZW9mIEN1c3RvbUVsZW1lbnQsIFByb3BlcnR5V2F0Y2hlcj4gPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogUHJvcGVydHlXYXRjaGVyIHR5cGVcbiAqL1xuZXhwb3J0IHR5cGUgUHJvcGVydHlXYXRjaGVyID0gTWFwPHN0cmluZywgQXJyYXk8KCkgPT4gdm9pZD4+O1xuXG4vKipcbiAqIGdldCBhbGwgcHJvcGVydHkgd2F0Y2hlcnMgZm9yIHByb3BlcnR5XG4gKlxuICogQHBhcmFtIHRhcmdldCBDbGFzcyB0byBnZXQgUHJvcGVydHlXYXRjaGVyIGZyb21cbiAqIEBwYXJhbSBwcm9wZXJ0eSBwcm9wZXJ0eSB3aGljaCBpcyB3YXRjaGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc1Byb3BlcnR5V2F0Y2hlcih0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50LCBwcm9wZXJ0eTogc3RyaW5nKTogQXJyYXk8KCkgPT4gdm9pZD4ge1xuICBsZXQgcHJvcGVydGllczogUHJvcGVydHlXYXRjaGVyIHwgdW5kZWZpbmVkID0gbWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQodGFyZ2V0LCBwcm9wZXJ0aWVzKTtcbiAgfVxuICBsZXQgcHJvcGVydHlXYXRjaGVyID0gcHJvcGVydGllcy5nZXQocHJvcGVydHkpO1xuICBpZiAoIXByb3BlcnR5V2F0Y2hlcikge1xuICAgIHByb3BlcnR5V2F0Y2hlciA9IFtdO1xuICAgIHByb3BlcnRpZXMuc2V0KHByb3BlcnR5LCBwcm9wZXJ0eVdhdGNoZXIpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eVdhdGNoZXI7XG59XG5cbi8qKlxuICogZ2V0IGFsbCBQcm9wZXJ0eVdhdGNoZXIgZnJvbSBhIGNsYXNzXG4gKlxuICogQHBhcmFtIHRhcmdldCBDbGFzcyB0byBnZXQgUHJvcGVydHlXYXRjaGVyIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbENsYXNzUHJvcGVydHlXYXRjaGVyKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQpOiBQcm9wZXJ0eVdhdGNoZXIge1xuICBsZXQgcHJvcGVydGllczogUHJvcGVydHlXYXRjaGVyIHwgdW5kZWZpbmVkID0gbWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgIG1hcC5zZXQodGFyZ2V0LCBwcm9wZXJ0aWVzKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgaXNTdGFnZTJDbGFzc0RlY29yYXRvciwgYXBwbHlTdGFnZTJ0b0xlZ2FjeUNsYXNzRGVjb3JhdG9yIH0gZnJvbSAnLi9zdGFnZTIvc3RhZ2UyZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBDb21wb25lbnQgYXMgQ29tcG9uZW50UzIgfSBmcm9tICcuL3N0YWdlMi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50T3B0aW9ucyB9IGZyb20gJy4vY29tcG9uZW50b3B0aW9ucyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGRlY29yYXRvciwgZGVmaW5lcyBhIG5ldyBjb21wb25lbnQgdG8gYmUgdXNlZCBhcyBhIGN1c3RvbSBlbGVtZW50IGNvbXBhdGlibGUgd2l0aCBzdGFnZS0wLCBUUyBhbmQgc3RhZ2UtMiBkZWNvcmF0b3IgaW1wbGVtZW50YXRpb25zXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgKENvbXBvbmVudE9wdGlvbnMpIG9wdGlvbnMgdG8gaW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQob3B0aW9uczogQ29tcG9uZW50T3B0aW9ucyk6IENsYXNzRGVjb3JhdG9yIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpmdW5jdGlvbi1uYW1lXG4gIHJldHVybiAodGFyZ2V0OiBhbnkpOiBhbnkgPT4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIGlmIChpc1N0YWdlMkNsYXNzRGVjb3JhdG9yKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRTMihvcHRpb25zKSg8YW55PnRhcmdldCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcHBseVN0YWdlMnRvTGVnYWN5Q2xhc3NEZWNvcmF0b3I8dHlwZW9mIEN1c3RvbUVsZW1lbnQ+KHRhcmdldCwgQ29tcG9uZW50UzIob3B0aW9ucykpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXVuc2FmZS1hbnlcbiAgICB9XG4gIH07XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBQcm9wZXJ0eU9wdGlvbnMgfSBmcm9tICcuL3Byb3BlcnR5b3B0aW9ucyc7XG5pbXBvcnQgeyBnZXRDb21wb25lbnRQcm9wZXJ0aWVzLCBnZXRBbGxDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRwcm9wZXJ0aWVzJztcbmltcG9ydCB7IGdldENsYXNzUHJvcGVydGllcyB9IGZyb20gJy4vY2xhc3Nwcm9wZXJ0aWVzJztcbmltcG9ydCB7IGdldENsYXNzRXZlbnRzIH0gZnJvbSAnLi9jbGFzc2V2ZW50cyc7XG5pbXBvcnQgeyBFdmVudE9wdGlvbnMgfSBmcm9tICcuL2V2ZW50b3B0aW9ucyc7XG5cbi8qKlxuICogQ29tcG9uZW50T3B0aW9ucyB0eXBlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50Q2F0YWxvZ09wdGlvbnMge1xuICBwcm9wZXJ0aWVzOiB7IFtuYW1lOiBzdHJpbmddOiBQcm9wZXJ0eU9wdGlvbnMgfTtcbiAgZXZlbnRzOiBBcnJheTxFdmVudE9wdGlvbnM+O1xufVxuXG4vKipcbiAqIENvbXBvbmV0cyB0eXBlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50cyB7XG4gIFt0YWc6IHN0cmluZ106IENvbXBvbmVudENhdGFsb2dPcHRpb25zO1xufVxuXG4vKipcbiAqIHJldHVybiBhIGNhdGFsb2cgb2YgYWxsIGNvbnRyb2xzIHJlZ2lzdGVyZWQgd2l0aCBjZS1kZWNvcmF0b3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wb25lbnRDYXRhbG9nKCk6IENvbXBvbmVudHMge1xuICBjb25zdCBjb21wb25lbnRzID0gZ2V0QWxsQ29tcG9uZW50cygpO1xuICBjb25zdCBjYXRhbG9nOiBDb21wb25lbnRzID0ge307XG4gIGNvbXBvbmVudHMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRQcm9wZXJ0aWVzID0gZ2V0Q29tcG9uZW50UHJvcGVydGllcyh2YWx1ZSk7XG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtuYW1lOiBzdHJpbmddOiBQcm9wZXJ0eU9wdGlvbnMgfSA9IHt9O1xuICAgIEFycmF5LmZyb20oZ2V0Q2xhc3NQcm9wZXJ0aWVzKHZhbHVlKS5lbnRyaWVzKCkpLmZvckVhY2goKFtuYW1lLCBvcHRpb25zXSkgPT4ge1xuICAgICAgcHJvcGVydGllc1tuYW1lLnRvU3RyaW5nKCldID0gb3B0aW9ucztcbiAgICB9KTtcblxuICAgIGNvbnN0IGV2ZW50czogQXJyYXk8RXZlbnRPcHRpb25zPiA9IEFycmF5LmZyb20oZ2V0Q2xhc3NFdmVudHModmFsdWUpLnZhbHVlcygpKTtcblxuICAgIGNhdGFsb2dbY29tcG9uZW50UHJvcGVydGllcy50YWddID0ge1xuICAgICAgcHJvcGVydGllcyxcbiAgICAgIGV2ZW50cyxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIGNhdGFsb2c7XG59XG5cbmlmICghKDxhbnk+d2luZG93KVsnQ0VERUNPUkFUT1JDT01QT05FTlRTJ10pIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICg8YW55PndpbmRvdylbJ0NFREVDT1JBVE9SQ09NUE9ORU5UUyddID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbn0gLy8gdHMtbGludDpkaXNhYmxlLWxpbmVcbig8YW55PndpbmRvdylbJ0NFREVDT1JBVE9SQ09NUE9ORU5UUyddLnB1c2goZ2V0Q29tcG9uZW50Q2F0YWxvZyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50T3B0aW9ucyB9IGZyb20gJy4vY29tcG9uZW50b3B0aW9ucyc7XG5cbmNvbnN0IG1hcDogTWFwPHR5cGVvZiBDdXN0b21FbGVtZW50LCBFeHRlbmRlZENvbXBvbmVudE9wdGlvbnM+ID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIENTU1N0eWxlU2hlZXRBbGlrZSBpZiBhZG9wdGVkU3R5bHNoZWVldHMgYXJlIG5vdCBzdXBwb3J0ZWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDU1NTdHlsZVNoZWV0QWxpa2Uge1xuICBjc3NUZXh0OiBzdHJpbmc7XG59XG5cbi8qKlxuICogZXh0ZW5kZWQgb3B0aW9ucyBmb3IgYmV0dGVyIHN0eWxlIGhhbmRsaW5nXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZW5kZWRDb21wb25lbnRPcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50T3B0aW9ucyB7XG4gIGNzc1N0eWxlczogQXJyYXk8Q1NTU3R5bGVTaGVldCB8IENTU1N0eWxlU2hlZXRBbGlrZT47XG4gIHNoYWR5Q1NTU3R5bGVTaGVldEFkb3B0ZWQ6IGJvb2xlYW47XG4gIHRlbXBsYXRlQ2FjaGU6IFRlbXBsYXRlU3RyaW5nc0FycmF5O1xufVxuXG4vKipcbiAqIHJldHVybiBjb21wb25lbnRwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gdGFyZ2V0IFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50UHJvcGVydGllcyh0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50KTogRXh0ZW5kZWRDb21wb25lbnRPcHRpb25zIHtcbiAgcmV0dXJuIG1hcC5nZXQodGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBzZXQgY29tcG9uZW50IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB0YXJnZXQgXG4gKiBAcGFyYW0gb3B0aW9ucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBvbmVudFByb3BlcnRpZXModGFyZ2V0OiB0eXBlb2YgQ3VzdG9tRWxlbWVudCwgb3B0aW9uczogRXh0ZW5kZWRDb21wb25lbnRPcHRpb25zKTogdm9pZCB7XG4gIG1hcC5zZXQodGFyZ2V0LCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiByZXR1cm4gYWxsIGNvbXBvbmVudHMgZGVmaW5lZCB3aXRoIGNlLWRlY29yYXRvcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbENvbXBvbmVudHMoKTogQXJyYXk8dHlwZW9mIEN1c3RvbUVsZW1lbnQ+IHtcbiAgcmV0dXJuIEFycmF5LmZyb20obWFwLmtleXMoKSk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG4gLyoqXG4gICogQ09NUE9ORU5UX1NUQVRFXG4gICovXG5leHBvcnQgZW51bSBDT01QT05FTlRfU1RBVEUge1xuICBDT05ORUNURUQsXG4gIERJU0NPTk5FQ1RFRCxcbiAgSU5JVCxcbiAgQ09OU1RSVUNURUQsXG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBjYW1lbFRvS2ViYXBDYXNlLCBrZWJhcFRvQ2FtZWxDYXNlLCBkZXNlcmlhbGl6ZVZhbHVlLCBzZXJpYWxpemVWYWx1ZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0Q2xhc3NQcm9wZXJ0aWVzIH0gZnJvbSAnLi9jbGFzc3Byb3BlcnRpZXMnO1xuaW1wb3J0IHsgQ09NUE9ORU5UX1NUQVRFIH0gZnJvbSAnLi9jb21wb25lbnRzdGF0ZSc7XG5pbXBvcnQgeyBQUk9QRVJUWV9TVEFURSB9IGZyb20gJy4vcHJvcGVydHlzdGF0ZSc7XG5pbXBvcnQgeyBQcm9wZXJ0eU9wdGlvbnMsIEF0dHJpYnV0ZVByb3BDb252ZXJ0ZXIsIEZyb21BdHRyaWJ1dGVDb252ZXJ0ZXIgfSBmcm9tICcuL3Byb3BlcnR5b3B0aW9ucyc7XG5pbXBvcnQgeyBnZXRDbGFzc1Byb3BlcnR5V2F0Y2hlciB9IGZyb20gJy4vY2xhc3Nwcm9wZXJ0eXdhdGNoZXInO1xuaW1wb3J0IHsgZ2V0Q2xhc3NQcm9wZXJ0eUludGVyY2VwdG9yIH0gZnJvbSAnLi9jbGFzc3Byb3BlcnR5aW50ZXJjZXB0b3JzJztcblxuaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuL2xpdC1odG1sJztcbmltcG9ydCB7IGFkZENvbXBvbmVudFRvUmVuZGVyUGlwZWxpbmUsIHJlbW92ZUNvbXBvbmVudEZyb21SZW5kZXJQaXBlbGluZSB9IGZyb20gJy4vcmVuZGVyZXIvcGlwZVJlbmRlcmVyJztcbmltcG9ydCB7IHJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vcmVuZGVyZXIvcmVuZGVyQ29tcG9uZW50JztcblxuLyoqXG4gKiBpbnRlcmZhY2UgZm9yIGFuIGluZGV4YWJsZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5kZXhhYmxlRWxlbWVudCB7XG4gIFtpbmRleDogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG59XG5cbi8qKlxuICogZGVmaW5lIHRoZSByZW5kZXIgc3RyYXRlZ3kgZm9yIHRoZSBjb250cm9sXG4gKi9cbmV4cG9ydCBlbnVtIFJFTkRFUl9TVFJBVEVHWSB7XG4gIERFRkFVTFQsXG4gIExBWlksXG4gIFBJUEVMSU5FX0VYUEVSSU1FTlRBTCxcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBhbGwgY3VzdG9tIGVsZW1lbnRzXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdXN0b21FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBzdGF0aWMgX2Zyb21BdHRyaWJ1dGUodGhpczogdHlwZW9mIEN1c3RvbUVsZW1lbnQsIG5hbWU6IHN0cmluZywgb2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSwgaW5zdGFuY2U6IEN1c3RvbUVsZW1lbnQpIHtcbiAgICBpZiAoaW5zdGFuY2UuX3Byb3BlcnR5U3RhdGUgIT09IFBST1BFUlRZX1NUQVRFLlJFRkxFQ1RJTkcpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGtlYmFwVG9DYW1lbENhc2UobmFtZSk7XG4gICAgICBjb25zdCBjbGFzc1Byb3BlcnR5OiBQcm9wZXJ0eU9wdGlvbnMgPSBnZXRDbGFzc1Byb3BlcnRpZXModGhpcykuZ2V0KHByb3BlcnR5TmFtZSk7XG5cbiAgICAgIG9sZFZhbHVlID0gKDxJbmRleGFibGVFbGVtZW50Pmluc3RhbmNlKVtwcm9wZXJ0eU5hbWVdO1xuICAgICAgaWYgKGNsYXNzUHJvcGVydHkuY29udmVydGVyKSB7XG4gICAgICAgIGlmICgoPEF0dHJpYnV0ZVByb3BDb252ZXJ0ZXI+Y2xhc3NQcm9wZXJ0eS5jb252ZXJ0ZXIpLmZyb21BdHRyaWJ1dGUpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9ICg8QXR0cmlidXRlUHJvcENvbnZlcnRlcj5jbGFzc1Byb3BlcnR5LmNvbnZlcnRlcikuZnJvbUF0dHJpYnV0ZShuZXdWYWx1ZSwgY2xhc3NQcm9wZXJ0eS50eXBlKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby11bnNhZmUtYW55XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSAoPEZyb21BdHRyaWJ1dGVDb252ZXJ0ZXI+Y2xhc3NQcm9wZXJ0eS5jb252ZXJ0ZXIpKG5ld1ZhbHVlLCBjbGFzc1Byb3BlcnR5LnR5cGUpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXVuc2FmZS1hbnlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBkZXNlcmlhbGl6ZVZhbHVlKG5ld1ZhbHVlLCBjbGFzc1Byb3BlcnR5LnR5cGUpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXVuc2FmZS1hbnlcbiAgICAgIH1cbiAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgaW5zdGFuY2UuX3Byb3BlcnR5U3RhdGUgPSBQUk9QRVJUWV9TVEFURS5VUERBVEVfRlJPTV9BVFRSSUJVVEU7XG4gICAgICAgIHRoaXMuX2Zyb21Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHN0YXRpYyBfZnJvbVByb3BlcnR5KHRoaXM6IHR5cGVvZiBDdXN0b21FbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55LCBpbnN0YW5jZTogQ3VzdG9tRWxlbWVudCkge1xuICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIGNvbnN0IGNsYXNzUHJvcGVydHk6IFByb3BlcnR5T3B0aW9ucyA9IGdldENsYXNzUHJvcGVydGllcyh0aGlzKS5nZXQocHJvcGVydHlLZXkpO1xuXG4gICAgICBjb25zdCBpbnRlcmNlcHRvciA9IGdldENsYXNzUHJvcGVydHlJbnRlcmNlcHRvcih0aGlzLCBwcm9wZXJ0eUtleSk7XG4gICAgICBuZXdWYWx1ZSA9IGludGVyY2VwdG9yLnJlZHVjZSgodmFsdWUsIGZ1bmMpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoaW5zdGFuY2UsIFtvbGRWYWx1ZSwgdmFsdWVdKSB8fCB2YWx1ZTtcbiAgICAgIH0sIG5ld1ZhbHVlKTtcblxuICAgICAgdGhpcy5fcmVmbGVjdEF0dHJpYnV0ZXMoY2xhc3NQcm9wZXJ0eSwgaW5zdGFuY2UsIG5ld1ZhbHVlLCBwcm9wZXJ0eUtleSk7XG5cbiAgICAgIGluc3RhbmNlLl9wcm9wZXJ0eVN0YXRlID0gUFJPUEVSVFlfU1RBVEUuVVBEQVRFX1BST1BFUlRZO1xuICAgICAgKDxJbmRleGFibGVFbGVtZW50Pmluc3RhbmNlKVtwcm9wZXJ0eUtleV0gPSBuZXdWYWx1ZTtcbiAgICAgIGluc3RhbmNlLl9wcm9wZXJ0eVN0YXRlID0gUFJPUEVSVFlfU1RBVEUuRElSVFk7XG5cbiAgICAgIGNvbnN0IHdhdGNoZXIgPSBnZXRDbGFzc1Byb3BlcnR5V2F0Y2hlcih0aGlzLCBwcm9wZXJ0eUtleSk7XG4gICAgICB3YXRjaGVyLmZvckVhY2goKHZhbHVlKSA9PiB2YWx1ZS5hcHBseShpbnN0YW5jZSwgW29sZFZhbHVlLCBuZXdWYWx1ZV0pKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby11bnNhZmUtYW55XG5cbiAgICAgIGluc3RhbmNlLnNjaGVkdWxlUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHByaXZhdGUgc3RhdGljIF9yZWZsZWN0QXR0cmlidXRlcyhjbGFzc1Byb3BlcnR5OiBQcm9wZXJ0eU9wdGlvbnMsIGluc3RhbmNlOiBDdXN0b21FbGVtZW50LCBuZXdWYWx1ZTogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XG4gICAgaWYgKChjbGFzc1Byb3BlcnR5LnJlZmxlY3RBc0F0dHJpYnV0ZSB8fCBjbGFzc1Byb3BlcnR5LnJlZmxlY3RBc0F0dHJpYnV0ZSA9PT0gdW5kZWZpbmVkKSAmJiBpbnN0YW5jZS5fY29tcG9uZW50U3RhdGUgIT09IENPTVBPTkVOVF9TVEFURS5JTklUKSB7XG4gICAgICBpZiAoY2xhc3NQcm9wZXJ0eS50eXBlID09PSBCb29sZWFuIHx8IGNsYXNzUHJvcGVydHkudHlwZSA9PT0gU3RyaW5nIHx8IGNsYXNzUHJvcGVydHkudHlwZSA9PT0gTnVtYmVyIHx8IGNsYXNzUHJvcGVydHkucmVmbGVjdEFzQXR0cmlidXRlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5fcHJvcGVydHlTdGF0ZSAhPT0gUFJPUEVSVFlfU1RBVEUuVVBEQVRFX0ZST01fQVRUUklCVVRFKSB7XG4gICAgICAgICAgaW5zdGFuY2UuX3Byb3BlcnR5U3RhdGUgPSBQUk9QRVJUWV9TVEFURS5SRUZMRUNUSU5HO1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gZmFsc2UgfHwgbmV3VmFsdWUgPT09IG51bGwgfHwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5zdGFuY2UucmVtb3ZlQXR0cmlidXRlKGNhbWVsVG9LZWJhcENhc2UocHJvcGVydHlLZXkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNsYXNzUHJvcGVydHkuY29udmVydGVyICYmICg8QXR0cmlidXRlUHJvcENvbnZlcnRlcj5jbGFzc1Byb3BlcnR5LmNvbnZlcnRlcikudG9BdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5zZXRBdHRyaWJ1dGUoY2FtZWxUb0tlYmFwQ2FzZShwcm9wZXJ0eUtleSksICg8QXR0cmlidXRlUHJvcENvbnZlcnRlcj5jbGFzc1Byb3BlcnR5LmNvbnZlcnRlcikudG9BdHRyaWJ1dGUobmV3VmFsdWUsIGNsYXNzUHJvcGVydHkudHlwZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc2V0QXR0cmlidXRlKGNhbWVsVG9LZWJhcENhc2UocHJvcGVydHlLZXkpLCBzZXJpYWxpemVWYWx1ZShuZXdWYWx1ZSwgY2xhc3NQcm9wZXJ0eS50eXBlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKTogQXJyYXk8c3RyaW5nPiB7IC8vIGZpbHRlciBvdXQgc3RhdGVzIC0+IHR5cGUgPT09IHVuZGVmaW5lZFxuICAgIHJldHVybiBBcnJheS5mcm9tKGdldENsYXNzUHJvcGVydGllcyh0aGlzKSkuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWVbMV0udHlwZSAhPT0gdW5kZWZpbmVkKS5tYXAoKHZhbHVlKSA9PiBjYW1lbFRvS2ViYXBDYXNlKHZhbHVlWzBdLnRvU3RyaW5nKCkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVuZGVyU3RyYXRlZ3k6IFJFTkRFUl9TVFJBVEVHWSA9IFJFTkRFUl9TVFJBVEVHWS5ERUZBVUxUO1xuICBwcm90ZWN0ZWQgX3JlbmRlckNhbGxiYWNrUmVzb2x2ZXI6ICgpID0+IHZvaWQgPSBudWxsO1xuXG4gIHByb3RlY3RlZCBfY29tcG9uZW50U3RhdGU6IENPTVBPTkVOVF9TVEFURSA9IENPTVBPTkVOVF9TVEFURS5JTklUO1xuICBwcm90ZWN0ZWQgX3Byb3BlcnR5U3RhdGU6IFBST1BFUlRZX1NUQVRFID0gUFJPUEVSVFlfU1RBVEUuRElSVFk7XG5cbiAgcHJvdGVjdGVkIF9yZW5kZXJTY2hlZHVsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF90ZW1wbGF0ZUNhY2hlOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSA9IG51bGw7XG4gIHByb3RlY3RlZCBfZmlyc3RSZW5kZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByb3RlY3RlZCBfcmVuZGVyQ29tcGxldGVkQ2FsbGJhY2tzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xuICBwcm90ZWN0ZWQgX2NvbnN0cnVjdGVkQ29tcGxldGVkQ2FsbGJhY2tzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xuICBwcm90ZWN0ZWQgX2xheW91dFJBRlJlZmVyZW5jZTogbnVtYmVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFN0YXRlID09PSBDT01QT05FTlRfU1RBVEUuSU5JVCkge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRTdGF0ZSA9IENPTVBPTkVOVF9TVEFURS5DT05TVFJVQ1RFRDtcbiAgICAgICAgdGhpcy5fY29uc3RydWN0ZWRDb21wbGV0ZWRDYWxsYmFja3MuZm9yRWFjaCgodmFsdWUpID0+IHZhbHVlKCkpO1xuICAgICAgICB0aGlzLl9jb25zdHJ1Y3RlZENvbXBsZXRlZENhbGxiYWNrcyA9IFtdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHNob3VsZCByZXR1cm4gdGhlIERPTSB0byBiZSByZW5kZXJlZFxuICAgKi9cbiAgYWJzdHJhY3QgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0O1xuXG4gIC8qKlxuICAgKiBpcyBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBhdHRhY2hlZCB0byB0aGUgRE9NXG4gICAqL1xuICBjb21wb25lbnRDb25uZWN0ZWQoKSB7IH0gLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIC8qKlxuICAgKiBpcyBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBkZXR0YWNoZWQgZnJvbSB0aGUgRE9NXG4gICAqL1xuICBjb21wb25lbnREaXNjb25uZWN0ZWQoKSB7IH0gLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIC8qKiBcbiAgICogaXMgY2FsbGVkIGp1c3QgYmVmb3JlIHJlbmRlcigpIHdpbGwgYmUgZXhleHV0ZWQgXG4gICAqL1xuICBjb21wb25lbnRXaWxsUmVuZGVyKCkgeyB9IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICAvKiogXG4gICAqIGlzIGNhbGxlZCBqdXN0IGFmdGVyIHJlbmRlcigpIHdpbGwgYmUgZXhleHV0ZWQgXG4gICAqL1xuICBjb21wb25lbnREaWRSZW5kZXIoKSB7IH0gLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIC8qKiBcbiAgICogaXMgY2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlcigpXG4gICAqL1xuICBjb21wb25lbnRGaXJzdFJlbmRlcigpIHsgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgLyoqXG4gICAqIGlzIGNhbGxlZCBhZnRlciByZW5kZXIgYW5kIGJyb3NlciBsYXlvdXRpbmdcbiAgICovXG4gIGNvbXBvbmVudERpZExheW91dCgpIHsgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgLyoqXG4gICAqIHJldHVybiBlbGVtZW50IHdocmUgdGhlIERPTSBmcm9tIHJlbmRlciB3aWxsIGJlIHJlbmRlcmVkIHRvXG4gICAqL1xuICByZW5kZXJUb0VsZW1lbnQoKTogRWxlbWVudCB8IFNoYWRvd1Jvb3Qge1xuICAgIGlmICghdGhpcy5zaGFkb3dSb290KSB7XG4gICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gYSBQcm9taXNlIHdoaWNoIHdpbGwgYmUgcmVzb2x2ZWQgYWZ0ZXJcbiAgICogY29uc3RydWN0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAqIFxuICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+IHByb21pc2Ugd2hpY2ggd2lsbCByZXNvbHZlIGFmdGVyIGNvbnN0cnVjdGlvbiBpcyBjb21wbGV0ZVxuICAgKi9cbiAgYXN5bmMgd2FpdEZvckNvbnN0cnVjdGlvbigpOiBQcm9taXNlPHt9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9jb25zdHJ1Y3RlZENvbXBsZXRlZENhbGxiYWNrcy5wdXNoKHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBhIFByb21pc2Ugd2hpY2ggd2lsbCBiZSByZXNvbHZlZCBhZnRlciBhXG4gICAqIHN1Y2Nlc3NmdWxsIHJlbmRlclxuICAgKiBcbiAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICAgKi9cbiAgYXN5bmMgd2FpdEZvclJlbmRlcigpOiBQcm9taXNlPHt9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJDb21wbGV0ZWRDYWxsYmFja3MucHVzaChyZXNvbHZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2hlZHVsZSBhIG5ldyByZW5kZXIgKHRoZSByZW5kZXIgd2lsbCBvbmx5IGJlIHNjaGVkdWxlZCkgaWZcbiAgICogdGhlIGNvbXBvbmVudHN0YXRlIGlzIENPTk5FQ1RFRCBhbmQgcHJvcGVydHlzdGF0ZSBpcyBESVJUWVxuICAgKiBcbiAgICogZm9yY2Ugd2lsbCBmb3JjZSBhIHJlLXJlbmRlclxuICAgKiBcbiAgICogQHBhcmFtIGZvcmNlIGZvcmNlIHRoZSByZS1yZW5kZXJcbiAgICovXG4gIHNjaGVkdWxlUmVuZGVyKGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAoKCh0aGlzLl9jb21wb25lbnRTdGF0ZSA9PT0gQ09NUE9ORU5UX1NUQVRFLkNPTk5FQ1RFRCAmJlxuICAgICAgdGhpcy5fcHJvcGVydHlTdGF0ZSA9PT0gUFJPUEVSVFlfU1RBVEUuRElSVFkpKSAmJlxuICAgICAgIXRoaXMuX3JlbmRlclNjaGVkdWxlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHN3aXRjaCAodGhpcy5fcmVuZGVyU3RyYXRlZ3kpIHtcbiAgICAgICAgY2FzZSBSRU5ERVJfU1RSQVRFR1kuUElQRUxJTkVfRVhQRVJJTUVOVEFMOlxuICAgICAgICAgIGFkZENvbXBvbmVudFRvUmVuZGVyUGlwZWxpbmUodGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUkVOREVSX1NUUkFURUdZLkxBWlk6XG4gICAgICAgICAgaWYgKCFmb3JjZSkge1xuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlKTtcbiAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyQ2FsbGJhY2tSZXNvbHZlciA9IHJlc29sdmU7XG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LmFwcGx5KHRoaXMpO1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJDYWxsYmFja1Jlc29sdmVyID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LmFwcGx5KHRoaXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZm9yY2UpIHtcbiAgICAgIGlmICh0aGlzLl9yZW5kZXJTY2hlZHVsZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlckNhbGxiYWNrUmVzb2x2ZXIpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlckNhbGxiYWNrUmVzb2x2ZXIoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmVuZGVyU3RyYXRlZ3kgPT09IFJFTkRFUl9TVFJBVEVHWS5QSVBFTElORV9FWFBFUklNRU5UQUwpIHtcbiAgICAgICAgICByZW1vdmVDb21wb25lbnRGcm9tUmVuZGVyUGlwZWxpbmUodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuOyAvLyByZW5kZXIgYWxyZWFkeSBzY2hlZHVsZWQgYXMgbWljcm90YXNrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZW5kZXJDb21wb25lbnQuYXBwbHkodGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYnVpbGQtaW4gZnVuY3Rpb24gcGxlYXNlIGRvIG5vdCBvdmVycmlkZVxuICAgKi9cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuX2NvbXBvbmVudFN0YXRlID09PSBDT01QT05FTlRfU1RBVEUuSU5JVCB8fCB0aGlzLl9jb21wb25lbnRTdGF0ZSA9PT0gQ09NUE9ORU5UX1NUQVRFLkNPTlNUUlVDVEVEKSB7IC8vIG9uIGZpcnN0IGNvbm5lY3RlZCByZWZsZWN0IGF0dHJpYnV0ZXNcbiAgICAgIHRoaXMuX2NvbXBvbmVudFN0YXRlID0gQ09NUE9ORU5UX1NUQVRFLkNPTk5FQ1RFRDtcbiAgICAgIGNvbnN0IF9vcmlnaW5hbFByb3BlcnR5U3RhdGUgPSB0aGlzLl9wcm9wZXJ0eVN0YXRlO1xuICAgICAgdGhpcy5fcHJvcGVydHlTdGF0ZSA9IFBST1BFUlRZX1NUQVRFLlJFRkxFQ1RJTkc7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gZ2V0Q2xhc3NQcm9wZXJ0aWVzKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQpO1xuICAgICAgcHJvcGVydGllcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BWYWx1ZSA9ICg8SW5kZXhhYmxlRWxlbWVudD50aGlzKVtrZXkudG9TdHJpbmcoKV07XG4gICAgICAgIGlmIChwcm9wVmFsdWUgfHwgcHJvcFZhbHVlID09PSAwKSB7XG4gICAgICAgICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQpLl9yZWZsZWN0QXR0cmlidXRlcyh2YWx1ZSwgdGhpcywgcHJvcFZhbHVlLCBrZXkudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcHJvcGVydHlTdGF0ZSA9IF9vcmlnaW5hbFByb3BlcnR5U3RhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBvbmVudFN0YXRlID0gQ09NUE9ORU5UX1NUQVRFLkNPTk5FQ1RFRDtcbiAgICB9XG4gICAgdGhpcy5jb21wb25lbnRDb25uZWN0ZWQoKTtcbiAgICB0aGlzLnNjaGVkdWxlUmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogYnVpbGQtaW4gZnVuY3Rpb24gcGxlYXNlIGRvIG5vdCBvdmVycmlkZVxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5fY29tcG9uZW50U3RhdGUgPSBDT01QT05FTlRfU1RBVEUuRElTQ09OTkVDVEVEO1xuICAgIHRoaXMuY29tcG9uZW50RGlzY29ubmVjdGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogYnVpbGQtaW4gZnVuY3Rpb24gcGxlYXNlIGRvIG5vdCBvdmVycmlkZVxuICAgKi9cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZywgbmV3VmFsdWU6IHN0cmluZykge1xuICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBDdXN0b21FbGVtZW50KS5fZnJvbUF0dHJpYnV0ZShuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICogc2hvcnRoYW5kIGZvciBsYXp5IHJlbmRlcmVkIGN1c3RvbSBlbGVtZW50XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXp5Q3VzdG9tRWxlbWVudCBleHRlbmRzIEN1c3RvbUVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3JlbmRlclN0cmF0ZWd5ID0gUkVOREVSX1NUUkFURUdZLkxBWlk7XG4gIH1cbn1cblxuLyoqIGhlbHBlciBmb3Igc2hpbW1lZCBicm93c2VycyAqL1xuKGZ1bmN0aW9uKCkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIGlmICgnU2hhZHlDU1MnIGluIHdpbmRvdyAmJiB0eXBlb2Ygd2luZG93LlNoYWR5Q1NTLlNjb3BpbmdTaGltLnByZXBhcmVBZG9wdGVkQ3NzVGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgY2hlY2sgeW91ciBcIkB3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqc1wiIHBvbHlmaWxsLCBtaW5pbXVtIHZlcnNpb24gMi4yLjYgcmVxdWlyZWQnKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICB9XG59KSgpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgaXNTdGFnZTJNZXRob2REZWNvcmF0b3IsIGlzU3RhZ2UyRmllbGREZWNvcmF0b3IsIGFwcGx5U3RhZ2UyVG9MZWdhY3lGaWVsZERlY29yYXRvciB9IGZyb20gJy4vc3RhZ2UyL3N0YWdlMmRlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGVwcmVjYXRlZCBhcyBEZXByZWNhdGVkUzIgfSBmcm9tICcuL3N0YWdlMi9kZXByZWNhdGVkJztcbmltcG9ydCB7IEZpeGVkUHJvcGVydHlEZWNvcmF0b3IgfSBmcm9tICcuL3Byb3AnO1xuXG4vKipcbiAqIEVtaXRzIGEgZGVwcmVjYXRlZCB3YXJuaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBEZXByZWNhdGVkKG1lc3NhZ2U/OiBzdHJpbmcpOiBGaXhlZFByb3BlcnR5RGVjb3JhdG9yIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICByZXR1cm4gKHRhcmdldDogdHlwZW9mIE9iamVjdCxcbiAgICAgICAgICBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLFxuICAgICAgICAgIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPGFueT4pOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+IHwgYW55IHwgdm9pZCA9PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgaWYgKGlzU3RhZ2UyTWV0aG9kRGVjb3JhdG9yKHRhcmdldCkgfHwgaXNTdGFnZTJGaWVsZERlY29yYXRvcih0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gRGVwcmVjYXRlZFMyKG1lc3NhZ2UpKDxhbnk+dGFyZ2V0KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFwcGx5U3RhZ2UyVG9MZWdhY3lGaWVsZERlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yLCBEZXByZWNhdGVkUzIobWVzc2FnZSkpO1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgaXNTdGFnZTJGaWVsZERlY29yYXRvciwgYXBwbHlTdGFnZTJUb0xlZ2FjeUZpZWxkRGVjb3JhdG9yIH0gZnJvbSAnLi9zdGFnZTIvc3RhZ2UyZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBFdmVudCBhcyBFdmVudHMyIH0gZnJvbSAnLi9zdGFnZTIvZXZlbnQnO1xuaW1wb3J0IHsgRXZlbnRPcHRpb25zIH0gZnJvbSAnLi9ldmVudG9wdGlvbnMnO1xuXG4vKipcbiAqIFByb3BlcnR5RGVjb3JhdG9yIC0+IGZpeGVkIGZvciBiYWJlbCBpbml0aWFsaXplclxuICovXG5leHBvcnQgdHlwZSBGaXhlZFByb3BlcnR5RGVjb3JhdG9yID0gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdG9yPzogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG5cbi8qKlxuICogRXZlbnQgZGVjb3JhdG9yIGZvciBhbiBldmVudCBlbWl0dGVyLCBjb21wYXRpYmxlIHdpdGggc3RhZ2UtMCwgVFMgYW5kIHN0YWdlLTIgZGVjb3JhdG9yc1xuICpcbiAqIEBwYXJhbSBuYW1lIChzdHJpbmcpIG9wdGlvbmFsOiBuYW1lIG9mIHRoZSBldmVudCwgaWYgbm8gc3RhdGUsIHByb3BlcnR5IG5hbWUgd2lsbCBiZSB1c2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBFdmVudChvcHRpb25zPzogRXZlbnRPcHRpb25zIHwgc3RyaW5nKTogRml4ZWRQcm9wZXJ0eURlY29yYXRvciB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6ZnVuY3Rpb24tbmFtZVxuICByZXR1cm4gKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIGRlc2NyaXB0b3I/OiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCBhbnkgPT4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIGlmIChpc1N0YWdlMkZpZWxkRGVjb3JhdG9yKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBFdmVudHMyKG9wdGlvbnMpKDxhbnk+dGFyZ2V0KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFwcGx5U3RhZ2UyVG9MZWdhY3lGaWVsZERlY29yYXRvcjxDdXN0b21FbGVtZW50LCB0eXBlb2YgQ3VzdG9tRWxlbWVudD4odGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvciwgRXZlbnRzMihvcHRpb25zKSk7XG4gICAgfVxuICB9O1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRvcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnRlbWl0dGVyJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvcGVydHlvcHRpb25zJztcbmV4cG9ydCB7IEN1c3RvbUVsZW1lbnQsIExhenlDdXN0b21FbGVtZW50IH0gZnJvbSAnLi9jdXN0b21lbGVtZW50JztcblxuZXhwb3J0IHsgRXZlbnR9IGZyb20gJy4vZXZlbnQnO1xuZXhwb3J0IHsgUHJvcCB9IGZyb20gJy4vcHJvcCc7XG5leHBvcnQgeyBXYXRjaCB9IGZyb20gJy4vd2F0Y2gnO1xuZXhwb3J0IHsgU3RhdGUgfSBmcm9tICcuL3Byb3AnO1xuZXhwb3J0IHsgVHJhY2UgfSBmcm9tICcuL3RyYWNlJztcbmV4cG9ydCB7IERlcHJlY2F0ZWQgfSBmcm9tICcuL2RlcHJlY2F0ZWQnO1xuZXhwb3J0IHsgSW50ZXJjZXB0b3IgfSBmcm9tICcuL2ludGVyY2VwdG9yJztcbmV4cG9ydCB7IENPTVBPTkVOVF9TVEFURSB9IGZyb20gJy4vY29tcG9uZW50c3RhdGUnO1xuXG5leHBvcnQgeyBnZXRDb21wb25lbnRDYXRhbG9nfSBmcm9tICcuL2NvbXBvbmVudGNhdGFsb2cnO1xuXG5leHBvcnQgKiBmcm9tICcuL2xpdC1odG1sJztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgaXNTdGFnZTJNZXRob2REZWNvcmF0b3IsIGFwcGx5U3RhZ2UyVG9MZWdhY3lNZXRob2REZWNvcmF0b3IgfSBmcm9tICcuL3N0YWdlMi9zdGFnZTJkZWNvcmF0b3JzJztcbmltcG9ydCB7IEludGVyY2VwdG9yIGFzIEludGVyY2VwdG9yUzIgfSBmcm9tICcuL3N0YWdlMi9pbnRlcmNlcHRvcic7XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgaW50ZXJjZXB0b3IgZm9yIHByb3BlcnR5IGNoYW5nZXNcbiAqXG4gKiBAcGFyYW0gcHJvcGVydHkgcHJvcGVydHkgdG8gaW50ZXJjZXB0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJbnRlcmNlcHRvcihwcm9wZXJ0eTogc3RyaW5nKTogTWV0aG9kRGVjb3JhdG9yIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcmV0dXJuICh0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+KTogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55PiB8IGFueSB8IHZvaWQgPT4ge1xuICAgIGlmIChpc1N0YWdlMk1ldGhvZERlY29yYXRvcih0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gSW50ZXJjZXB0b3JTMihwcm9wZXJ0eSkoPGFueT50YXJnZXQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcHBseVN0YWdlMlRvTGVnYWN5TWV0aG9kRGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IsIEludGVyY2VwdG9yUzIocHJvcGVydHkpKTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgKiBmcm9tICdsaXQtaHRtbCc7XG5leHBvcnQgeyByZW5kZXIgYXMgc2hhZHlSZW5kZXIgfSBmcm9tICdsaXQtaHRtbC9saWIvc2hhZHktcmVuZGVyJztcblxuZXhwb3J0ICogZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9hc3luYy1hcHBlbmQnO1xuZXhwb3J0ICogZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9hc3luYy1yZXBsYWNlJztcbmV4cG9ydCAqIGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2FjaGUnO1xuZXhwb3J0ICogZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuZXhwb3J0ICogZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9ndWFyZCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2lmLWRlZmluZWQnO1xuZXhwb3J0ICogZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9yZXBlYXQnO1xuZXhwb3J0ICogZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuZXhwb3J0ICogZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy91bnNhZmUtaHRtbCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3VudGlsJztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCAnLi9yZWZsZWN0JzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG5pbXBvcnQgeyBDdXN0b21FbGVtZW50IH0gZnJvbSAnLi9jdXN0b21lbGVtZW50JztcbmltcG9ydCB7IFByb3AgYXMgUHJvcFMyLCBTdGF0ZSBhcyBTdGF0ZVMyIH0gZnJvbSAnLi9zdGFnZTIvcHJvcCc7XG5pbXBvcnQgeyBpc1N0YWdlMkZpZWxkRGVjb3JhdG9yLCBhcHBseVN0YWdlMlRvTGVnYWN5RmllbGREZWNvcmF0b3IgfSBmcm9tICcuL3N0YWdlMi9zdGFnZTJkZWNvcmF0b3JzJztcbmltcG9ydCB7IFByb3BlcnR5T3B0aW9ucyB9IGZyb20gJy4vcHJvcGVydHlvcHRpb25zJztcblxuLyoqXG4gKiBmaXhlZCBkZWNvcmF0b3IgZm9yIGJhYmVscyBpbml0aWFsaXplclxuICovXG5leHBvcnQgdHlwZSBGaXhlZFByb3BlcnR5RGVjb3JhdG9yID0gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdG9yPzogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG5cbi8qKlxuICogUHJvcGVydHkgZGVjb3JhdG9yLCBoYW5kbGVzIGF0dHJpYnV0ZSByZWZsZWN0aW9uIGFuZCB0eXBlIGNoZWNraW5nXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgaW5pdGlhbGl6ZXIgb3B0aW9ucyBmb3IgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQcm9wKG9wdGlvbnM/OiBQcm9wZXJ0eU9wdGlvbnMpOiBGaXhlZFByb3BlcnR5RGVjb3JhdG9yIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpmdW5jdGlvbi1uYW1lXG4gIHJldHVybiAodGFyZ2V0OiB0eXBlb2YgQ3VzdG9tRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCwgZGVzY3JpcHRvcj86IFByb3BlcnR5RGVzY3JpcHRvcik6IFByb3BlcnR5RGVzY3JpcHRvciB8IGFueSA9PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgaWYgKGlzU3RhZ2UyRmllbGREZWNvcmF0b3IodGFyZ2V0KSkge1xuICAgICAgaWYgKG9wdGlvbnMgJiYgIW9wdGlvbnMudHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHR5cGUgbm90IGRlZmluZWQgZm9yIHByb3BlcnR5YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvcFMyKG9wdGlvbnMpKDxhbnk+dGFyZ2V0KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnR5cGUpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBvcHRpb25zLnR5cGUgPSAoPGFueT5SZWZsZWN0KS5nZXRNZXRhZGF0YSgnZGVzaWduOnR5cGUnLCB0YXJnZXQsIHByb3BlcnR5S2V5LnRvU3RyaW5nKCkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICB9XG4gICAgICByZXR1cm4gYXBwbHlTdGFnZTJUb0xlZ2FjeUZpZWxkRGVjb3JhdG9yPEN1c3RvbUVsZW1lbnQsIHR5cGVvZiBDdXN0b21FbGVtZW50Pih0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yLCBQcm9wUzIob3B0aW9ucykpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBTdGF0ZSBkZWNvcmF0b3IsIGhhbmRsZXMgcmUtcmVuZGVyaW5nIGJ1dCB3aXRob3V0IGF0dHJpYnV0ZSByZWZsZWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTdGF0ZSgpOiBGaXhlZFByb3BlcnR5RGVjb3JhdG9yIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpmdW5jdGlvbi1uYW1lXG4gIHJldHVybiAodGFyZ2V0OiB0eXBlb2YgQ3VzdG9tRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCwgZGVzY3JpcHRvcj86IFByb3BlcnR5RGVzY3JpcHRvcik6IFByb3BlcnR5RGVzY3JpcHRvciB8IGFueSA9PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgaWYgKGlzU3RhZ2UyRmllbGREZWNvcmF0b3IodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIFN0YXRlUzIoKSg8YW55PnRhcmdldCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcHBseVN0YWdlMlRvTGVnYWN5RmllbGREZWNvcmF0b3I8Q3VzdG9tRWxlbWVudCwgdHlwZW9mIEN1c3RvbUVsZW1lbnQ+KHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IsIFN0YXRlUzIoKSk7XG4gICAgfVxuICB9O1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBQUk9QRVJUWV9TVEFURVxuICovXG5leHBvcnQgZW51bSBQUk9QRVJUWV9TVEFURSB7XG4gIElOSVQsXG4gIERJUlRZLFxuICBVUERBVEVfUFJPUEVSVFksXG4gIFJFRkxFQ1RJTkcsXG4gIFVQREFURV9GUk9NX0FUVFJJQlVURSxcbiAgVVBEQVRFRCxcbiAgRVhFQ1VUSU5HX1dBVENIRVIsXG59XG4iLCJpbXBvcnQgeyBpc1N0YWdlMkZpZWxkRGVjb3JhdG9yLCBpc1N0YWdlMk1ldGhvZERlY29yYXRvciwgTWV0aG9kRGVjb3JhdG9yUmVzdWx0LCBGaWVsZERlY29yYXRvclJlc3VsdCwgQ2xhc3NEZWNvcmF0b3JSZXN1bHQsIEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvciwgTWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yIH0gZnJvbSBcIi4vc3RhZ2UyL3N0YWdlMmRlY29yYXRvcnNcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuLy8gcmVmbGVjdCBwb2x5ZmlsbCBpbiBjYXNlIHJlZmxlY3QtbWV0YWRhdGEgcGFja2FnZSBub3QgaW5zdGFsbGVkXG5jb25zdCBvcmlnUmVmbGVjdDogYW55ID0gKDxhbnk+d2luZG93KS5SZWZsZWN0IHx8IHt9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuXG50eXBlIE1ldGFkYXRhTWFwID0gTWFwPHN0cmluZywgYW55PjsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbnR5cGUgUHJvcE1hcCA9IE1hcDxzdHJpbmcgfCBzeW1ib2wsIE1ldGFkYXRhTWFwPjtcbnR5cGUgVGFyZ2V0TWFwID0gTWFwPE9iamVjdCwgUHJvcE1hcD47XG50eXBlIERlY29yYXRvckZ1bmMgPSAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIG1vcmU6IGFueSkgPT4gYW55IHwgUHJvcGVydHlEZXNjcmlwdG9yOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuXG5jb25zdCByZWZsZWN0TWFwOiBUYXJnZXRNYXAgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAobWFwOiBQcm9wTWFwLCBwcm9wZXJ0eTogc3RyaW5nIHwgc3ltYm9sKTogTWV0YWRhdGFNYXAge1xuICBsZXQgbWV0YWRhdGFNYXA6IE1ldGFkYXRhTWFwID0gbWFwLmdldChwcm9wZXJ0eSk7XG4gIGlmICghbWV0YWRhdGFNYXApIHtcbiAgICBtZXRhZGF0YU1hcCA9IG5ldyBNYXAoKTtcbiAgICBtYXAuc2V0KHByb3BlcnR5LCBtZXRhZGF0YU1hcCk7XG4gIH1cblxuICByZXR1cm4gbWV0YWRhdGFNYXA7XG59XG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlUHJvcE1hcChtYXA6IFRhcmdldE1hcCwgdGFyZ2V0OiBPYmplY3QpOiBQcm9wTWFwIHtcbiAgbGV0IHByb3BNYXA6IFByb3BNYXAgPSBtYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghcHJvcE1hcCkge1xuICAgIHByb3BNYXAgPSBuZXcgTWFwKCk7XG4gICAgbWFwLnNldCh0YXJnZXQsIHByb3BNYXApO1xuICB9XG5cbiAgcmV0dXJuIHByb3BNYXA7XG59XG5cbmZ1bmN0aW9uIGRlY29yYXRlKGRlY29yYXRvcnM6IEFycmF5PERlY29yYXRvckZ1bmM+LCB0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCwgZGVzY3JpcHRpb246IGFueSk6IGFueSB8IHZvaWQgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBpZiAodHlwZW9mIG9yaWdSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb3JpZ1JlZmxlY3QuZGVjb3JhdGUgPT09ICdmdW5jdGlvbicgJiYgb3JpZ1JlZmxlY3QuZGVjb3JhdGUgIT09IGRlY29yYXRlKSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tdW5zYWZlLWFueVxuICAgIG9yaWdSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0aW9uKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby11bnNhZmUtYW55XG4gIH1cbiAgY29uc3QgZGVzY2lwdG9yOiBhbnkgPSBkZWNvcmF0b3JzLnJldmVyc2UoKSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIC5yZWR1Y2U8UHJvcGVydHlEZXNjcmlwdG9yPigocHJldlZhbHVlLCBjdXJyZW50VmFsdWUpID0+IChjdXJyZW50VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcHJldlZhbHVlKSB8fCBwcmV2VmFsdWUpLCBkZXNjcmlwdGlvbik7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgcmV0dXJuIGRlc2NpcHRvciB8fCBkZXNjcmlwdGlvbjtcbn1cblxuZnVuY3Rpb24gbWV0YWRhdGEobWV0YWRhdGFLZXk6IHN0cmluZywgbWV0YURhdGFWYWx1ZTogYW55KTogKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eTogc3RyaW5nIHwgc3ltYm9sKSA9PiB2b2lkIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgaWYgKHR5cGVvZiBvcmlnUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9yaWdSZWZsZWN0Lm1ldGFkYXRhID09PSAnZnVuY3Rpb24nICYmIG9yaWdSZWZsZWN0Lm1ldGFkYXRhICE9PSBtZXRhZGF0YSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXVuc2FmZS1hbnlcbiAgICByZXR1cm4gb3JpZ1JlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFEYXRhVmFsdWUpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXVuc2FmZS1hbnlcbiAgfSBlbHNlIHtcblxuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpOiB2b2lkIHwgTWV0aG9kRGVjb3JhdG9yUmVzdWx0PGFueSwgYW55PiB8IEZpZWxkRGVjb3JhdG9yUmVzdWx0PGFueSwgYW55PiB8IENsYXNzRGVjb3JhdG9yUmVzdWx0PGFueT4gPT4ge1xuICAgICAgaWYgKGlzU3RhZ2UyRmllbGREZWNvcmF0b3IodGFyZ2V0KSB8fCBpc1N0YWdlMk1ldGhvZERlY29yYXRvcih0YXJnZXQpKSB7XG4gICAgICAgIGlmIChpc1N0YWdlMkZpZWxkRGVjb3JhdG9yKHRhcmdldCkpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQ6IEZpZWxkRGVjb3JhdG9yUmVzdWx0PGFueSwgYW55PiA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6ICg8RmllbGREZWNvcmF0b3JEZXNjcmlwdG9yPnRhcmdldCkuZGVzY3JpcHRvcixcbiAgICAgICAgICAgIGtleTogKDxGaWVsZERlY29yYXRvckRlc2NyaXB0b3I+dGFyZ2V0KS5rZXksXG4gICAgICAgICAgICBraW5kOiAoPEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvcj50YXJnZXQpLmtpbmQsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICg8RmllbGREZWNvcmF0b3JEZXNjcmlwdG9yPnRhcmdldCkucGxhY2VtZW50LFxuICAgICAgICAgICAgZmluaXNoZXI6IChmaW5pc2hlclRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm9wTWFwOiBQcm9wTWFwID0gZ2V0T3JDcmVhdGVQcm9wTWFwKHJlZmxlY3RNYXAsIGZpbmlzaGVyVGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAocHJvcE1hcCwgKDxGaWVsZERlY29yYXRvckRlc2NyaXB0b3I+dGFyZ2V0KS5rZXkpLnNldChtZXRhZGF0YUtleSwgbWV0YURhdGFWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNTdGFnZTJNZXRob2REZWNvcmF0b3IodGFyZ2V0KSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdDogTWV0aG9kRGVjb3JhdG9yUmVzdWx0PGFueSwgYW55PiA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6ICg8TWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yPnRhcmdldCkuZGVzY3JpcHRvcixcbiAgICAgICAgICAgIGtleTogKDxNZXRob2REZWNvcmF0b3JEZXNjaXB0b3I+dGFyZ2V0KS5rZXksXG4gICAgICAgICAgICBraW5kOiAoPE1ldGhvZERlY29yYXRvckRlc2NpcHRvcj50YXJnZXQpLmtpbmQsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICg8TWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yPnRhcmdldCkucGxhY2VtZW50LFxuICAgICAgICAgICAgZmluaXNoZXI6IChmaW5pc2hUYXJnZXQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJvcE1hcDogUHJvcE1hcCA9IGdldE9yQ3JlYXRlUHJvcE1hcChyZWZsZWN0TWFwLCBmaW5pc2hUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChwcm9wTWFwLCAoPE1ldGhvZERlY29yYXRvckRlc2NpcHRvcj50YXJnZXQpLmtleSkuc2V0KG1ldGFkYXRhS2V5LCBtZXRhRGF0YVZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFwcm9wZXJ0eSkge1xuICAgICAgICAgIHByb3BlcnR5ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcE1hcDogUHJvcE1hcCA9IGdldE9yQ3JlYXRlUHJvcE1hcChyZWZsZWN0TWFwLCB0YXJnZXQpO1xuICAgICAgICBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHByb3BNYXAsIHByb3BlcnR5KS5zZXQobWV0YWRhdGFLZXksIG1ldGFEYXRhVmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXk6IHN0cmluZywgdGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5S2V5Pzogc3RyaW5nIHwgc3ltYm9sKTogYW55IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgaWYgKHR5cGVvZiBvcmlnUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9yaWdSZWZsZWN0LmdldE1ldGFkYXRhID09PSAnZnVuY3Rpb24nICYmIG9yaWdSZWZsZWN0LmdldE1ldGFkYXRhICE9PSBnZXRNZXRhZGF0YSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXVuc2FmZS1hbnlcbiAgICByZXR1cm4gb3JpZ1JlZmxlY3QuZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLXVuc2FmZS1hbnlcbiAgfSBlbHNlIHtcblxuICAgIHJldHVybiBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKGdldE9yQ3JlYXRlUHJvcE1hcChyZWZsZWN0TWFwLCB0YXJnZXQpLCBwcm9wZXJ0eUtleSkuZ2V0KG1ldGFkYXRhS2V5KTtcbiAgfVxufVxuXG5pZiAoISg8YW55PndpbmRvdykuUmVmbGVjdCkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAoPGFueT53aW5kb3cpLlJlZmxlY3QgPSB7IGRlY29yYXRlLCBnZXRNZXRhZGF0YSwgbWV0YWRhdGEgfTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgKDxhbnk+d2luZG93KS5SZWZsZWN0UG9vcmx5RmlsbCA9IHsgZGVjb3JhdGUsIGdldE1ldGFkYXRhLCBtZXRhZGF0YSB9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxufSBlbHNlIHtcbiAgaWYgKCEoPGFueT53aW5kb3cpLlJlZmxlY3QuZGVjb3JhdGUpIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICg8YW55PndpbmRvdykuUmVmbGVjdC5kZWNvcmF0ZSA9IGRlY29yYXRlOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIH1cbiAgaWYgKCEoPGFueT53aW5kb3cpLlJlZmxlY3QuZ2V0TWV0YWRhdGEpIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICg8YW55PndpbmRvdykuUmVmbGVjdC5nZXRNZXRhZGF0YSA9IGdldE1ldGFkYXRhOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIH1cbiAgaWYgKCEoPGFueT53aW5kb3cpLlJlZmxlY3QubWV0YWRhdGEpIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICg8YW55PndpbmRvdykuUmVmbGVjdC5tZXRhZGF0YSA9IG1ldGFkYXRhOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIH1cbiAgKDxhbnk+d2luZG93KS5SZWZsZWN0UG9vcmx5RmlsbCA9IHsgZGVjb3JhdGUsIGdldE1ldGFkYXRhLCBtZXRhZGF0YSB9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBDdXN0b21FbGVtZW50IH0gZnJvbSAnLi4vY3VzdG9tZWxlbWVudCc7XG5pbXBvcnQgeyBnZXRDb21wb25lbnRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29tcG9uZW50cHJvcGVydGllcyc7XG5pbXBvcnQgeyBtYWtlVGVtcGxhdGVTdHJpbmcsIHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4uL2xpdC1odG1sJztcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBzdWJ0cmVlIHRvIGEgbGlnaHRkb20gZWxlbWVudFxuICogQHBhcmFtIHRoaXMgXG4gKiBAcGFyYW0gZWxlbWVudFRvUmVuZGVyIFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9MaWdodERPTSh0aGlzOiBDdXN0b21FbGVtZW50LCBlbGVtZW50VG9SZW5kZXI6IEhUTUxFbGVtZW50KSB7XG4gIGlmICh0aGlzLl90ZW1wbGF0ZUNhY2hlID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBjc3NTdHlsZXMsIHRhZywgc2hhZHlDU1NTdHlsZVNoZWV0QWRvcHRlZCwgdGVtcGxhdGVDYWNoZSB9ID0gZ2V0Q29tcG9uZW50UHJvcGVydGllcyh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBDdXN0b21FbGVtZW50KTtcbiAgICBpZiAoIXNoYWR5Q1NTU3R5bGVTaGVldEFkb3B0ZWQpIHtcbiAgICAgIGNvbnN0IHN0eWxlU2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGVTaGVldC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgdGFnKTtcbiAgICAgIGNvbnN0IHN0eWxlU3RyaW5nOiBzdHJpbmcgPSBjc3NTdHlsZXMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gIXN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyA/IHZhbHVlLmNzc1RleHQgOlxuICAgICAgICBBcnJheS5mcm9tKCg8YW55PnZhbHVlKS5ydWxlcykucmVkdWNlKChwcmV2LCBjdXJyZW50OiBhbnkpID0+IHByZXYgKyBjdXJyZW50LmNzc1RleHQsICcnKTtcbiAgICAgIH0pLnJlZHVjZSgocHJldlZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZWYWx1ZSArIGN1cnJlbnRWYWx1ZSk7XG4gICAgICBzdHlsZVNoZWV0LnRleHRDb250ZW50ID0gc3R5bGVTdHJpbmcucmVwbGFjZSgvKH07P3wsKVxccyooKFxcLj98Iz8pW2EtelxcLUEtWl0rKS9nLCAoX3Rva2VuLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHthcmdzWzBdfSA6aG9zdCAke2FyZ3NbMV19YDtcbiAgICAgIH0pLnJlcGxhY2UoLygoOmhvc3RcXCgoW15cXChdKilcXCkpfCg6aG9zdCkpL2csIChfdG9rZW4sIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke3RhZ30ke2FyZ3NbMl0gPyBhcmdzWzJdIDogJyd9YDtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLmFwcGVuZENoaWxkKHN0eWxlU2hlZXQpO1xuICAgICAgZ2V0Q29tcG9uZW50UHJvcGVydGllcyh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBDdXN0b21FbGVtZW50KS5zaGFkeUNTU1N0eWxlU2hlZXRBZG9wdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5fdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGUgfHwgbWFrZVRlbXBsYXRlU3RyaW5nKFsnJywgJyddLCBbJycsICcnXSk7XG4gICAgZ2V0Q29tcG9uZW50UHJvcGVydGllcyh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBDdXN0b21FbGVtZW50KS50ZW1wbGF0ZUNhY2hlID0gdGhpcy5fdGVtcGxhdGVDYWNoZTtcbiAgfVxuICByZW5kZXIodGhpcy5yZW5kZXIoKSwgZWxlbWVudFRvUmVuZGVyLCB7IGV2ZW50Q29udGV4dDogdGhpcyB9KTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuLi9jdXN0b21lbGVtZW50JztcbmltcG9ydCB7IHJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vcmVuZGVyQ29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50c1RvUmVuZGVyOiBBcnJheTxDdXN0b21FbGVtZW50PiA9IFtdO1xubGV0IGN1cnJlbnRBbmltYXRpb25GcmFtZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbmNvbnN0IGZyYW1lQnVkZ2V0ID0gMTAwMCAvIDYwO1xuXG4vKipcbiAqIHJlbW92ZSBjb21wb25lbnQgZnJvbSByZW5kZXIgcXVldWVcbiAqIEBwYXJhbSBjb21wb25lbnQgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb21wb25lbnRGcm9tUmVuZGVyUGlwZWxpbmUoY29tcG9uZW50OiBDdXN0b21FbGVtZW50KSB7XG4gIGNvbXBvbmVudHNUb1JlbmRlci5zcGxpY2UoY29tcG9uZW50c1RvUmVuZGVyLmluZGV4T2YoY29tcG9uZW50KSwgMSk7XG59XG5cbi8qKlxuICogYWRkIG9jbXBvbmVudCB0byByZW5kZXIgcXVldWVcbiAqIEBwYXJhbSBjb21wb25lbnQgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21wb25lbnRUb1JlbmRlclBpcGVsaW5lKGNvbXBvbmVudDogQ3VzdG9tRWxlbWVudCkge1xuICBpZiAoY29tcG9uZW50c1RvUmVuZGVyLmluZGV4T2YoY29tcG9uZW50KSA8IDApIHtcbiAgICBjb21wb25lbnRzVG9SZW5kZXIucHVzaChjb21wb25lbnQpO1xuICB9XG4gIHNjaGVkdWxlTmV4dFJBRlJlbmRlcigpO1xufVxuXG5mdW5jdGlvbiBzY2hlZHVsZU5leHRSQUZSZW5kZXIoKSB7XG4gIGlmIChjdXJyZW50QW5pbWF0aW9uRnJhbWUgPT09IG51bGwpIHtcbiAgICBjdXJyZW50QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGxldCBjdXJyZW50RnJhbWVCdWRnZXQgPSBmcmFtZUJ1ZGdldDtcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c1RvUmVuZGVyLnNwbGljZSgwLCAxKVswXTtcbiAgICAgICAgaWYgKCFjb21wb25lbnQpIGJyZWFrO1xuICAgICAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgICAgIHJlbmRlckNvbXBvbmVudC5hcHBseShjb21wb25lbnQpO1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0O1xuICAgICAgICBjdXJyZW50RnJhbWVCdWRnZXQgPSBjdXJyZW50RnJhbWVCdWRnZXQgLSByZW5kZXJUaW1lO1xuICAgICAgfSB3aGlsZSAoY3VycmVudEZyYW1lQnVkZ2V0ID4gMCk7XG4gICAgICBjdXJyZW50QW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgICAgc2NoZWR1bGVOZXh0UkFGUmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuLi9jdXN0b21lbGVtZW50JztcbmltcG9ydCB7IHJlbmRlclRvU2hhZG93RE9NIH0gZnJvbSAnLi9zaGFkb3dET01SZW5kZXJlcic7XG5pbXBvcnQgeyByZW5kZXJUb0xpZ2h0RE9NIH0gZnJvbSAnLi9saWdodERPTVJlbmRlcmVyJztcbmltcG9ydCB7IFBST1BFUlRZX1NUQVRFIH0gZnJvbSAnLi4vcHJvcGVydHlzdGF0ZSc7XG5cbiAvKipcbiAgKiByZW5kZXJzIHRoZSBjb21wb25lbnRcbiAgKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb21wb25lbnQodGhpczogQ3VzdG9tRWxlbWVudCkge1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFJlbmRlcigpO1xuICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGVsZW1lbnRUb1JlbmRlciA9IHRoaXMucmVuZGVyVG9FbGVtZW50KCk7XG4gICAgaWYgKGVsZW1lbnRUb1JlbmRlciA9PT0gdGhpcy5zaGFkb3dSb290KSB7IC8vIHJlbmRlciB0byBzaGFkb3dyb290XG4gICAgICByZW5kZXJUb1NoYWRvd0RPTS5hcHBseSh0aGlzLCBbZWxlbWVudFRvUmVuZGVyXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlclRvTGlnaHRET00uYXBwbHkodGhpcywgW2VsZW1lbnRUb1JlbmRlcl0pO1xuICAgIH1cbiAgICB0aGlzLmNvbXBvbmVudERpZFJlbmRlcigpO1xuICAgIGlmICh0aGlzLl9maXJzdFJlbmRlcikge1xuICAgICAgdGhpcy5jb21wb25lbnRGaXJzdFJlbmRlcigpO1xuICAgICAgdGhpcy5fZmlyc3RSZW5kZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fcHJvcGVydHlTdGF0ZSA9IFBST1BFUlRZX1NUQVRFLlVQREFURUQ7XG4gICAgdGhpcy5fcmVuZGVyQ29tcGxldGVkQ2FsbGJhY2tzLmZvckVhY2goKHZhbHVlKSA9PiB2YWx1ZSgpKTtcbiAgICB0aGlzLl9yZW5kZXJDb21wbGV0ZWRDYWxsYmFja3MgPSBbXTtcbiAgICBpZiAodGhpcy5fbGF5b3V0UkFGUmVmZXJlbmNlID09PSBudWxsKSB7IC8vIHF1ZXVlIGEgcHJvbWlzZSB3aGljaCByZXNvbHZlcyBhZnRlciBicm93c2VyIGxheW91dGluZ1xuICAgICAgdGhpcy5fbGF5b3V0UkFGUmVmZXJlbmNlID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkTGF5b3V0KCk7XG4gICAgICAgICAgdGhpcy5fbGF5b3V0UkFGUmVmZXJlbmNlID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuLi9jdXN0b21lbGVtZW50JztcbmltcG9ydCB7IGdldENvbXBvbmVudFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb21wb25lbnRwcm9wZXJ0aWVzJztcbmltcG9ydCB7IG1ha2VUZW1wbGF0ZVN0cmluZywgbmVlZFNoYWR5RE9NLCBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyByZW5kZXIsIHNoYWR5UmVuZGVyLCBodG1sIH0gZnJvbSAnLi4vbGl0LWh0bWwnO1xuXG4vKipcbiAqIHJlbmRlciBzaGFkb3dyb290IG9mIGNvbXBvbmVudFxuICogQHBhcmFtIHRoaXMgXG4gKiBAcGFyYW0gZWxlbWVudFRvUmVuZGVyIFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9TaGFkb3dET00odGhpczogQ3VzdG9tRWxlbWVudCwgZWxlbWVudFRvUmVuZGVyOiBTaGFkb3dSb290KSB7XG4gIGlmICh0aGlzLl90ZW1wbGF0ZUNhY2hlID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBjc3NTdHlsZXMsIHRhZywgc2hhZHlDU1NTdHlsZVNoZWV0QWRvcHRlZCwgdGVtcGxhdGVDYWNoZSB9ID0gZ2V0Q29tcG9uZW50UHJvcGVydGllcyh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBDdXN0b21FbGVtZW50KTtcbiAgICBpZiAod2luZG93LlNoYWR5Q1NTICYmICF3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93ICYmIHdpbmRvdy5TaGFkeUNTUy5TY29waW5nU2hpbS5wcmVwYXJlQWRvcHRlZENzc1RleHQpIHtcbiAgICAgIGlmICghc2hhZHlDU1NTdHlsZVNoZWV0QWRvcHRlZCkge1xuICAgICAgICB3aW5kb3cuU2hhZHlDU1MuU2NvcGluZ1NoaW0ucHJlcGFyZUFkb3B0ZWRDc3NUZXh0KGNzc1N0eWxlcy5tYXAoKHZhbHVlKSA9PiB2YWx1ZS5jc3NUZXh0KSwgdGFnKTtcbiAgICAgICAgZ2V0Q29tcG9uZW50UHJvcGVydGllcyh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBDdXN0b21FbGVtZW50KS5zaGFkeUNTU1N0eWxlU2hlZXRBZG9wdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlIHx8IG1ha2VUZW1wbGF0ZVN0cmluZyhbJycsICcnXSwgWycnLCAnJ10pO1xuICAgIH0gZWxzZSBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzKSB7XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gPEFycmF5PENTU1N0eWxlU2hlZXQ+PmNzc1N0eWxlcztcbiAgICAgIHRoaXMuX3RlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlIHx8IG1ha2VUZW1wbGF0ZVN0cmluZyhbJycsICcnXSwgWycnLCAnJ10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZVN0cmluZyA9IGNzc1N0eWxlcy5tYXAoKHZhbHVlKSA9PiB2YWx1ZS5jc3NUZXh0KS5yZWR1Y2UoKHByZXZWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBwcmV2VmFsdWUgKyAnXFxuJyArIGN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZSB8fCBtYWtlVGVtcGxhdGVTdHJpbmcoW2A8c3R5bGU+JHtzdHlsZVN0cmluZ308L3N0eWxlPmAsICcnXSwgW2A8c3R5bGU+JHtzdHlsZVN0cmluZ308L3N0eWxlPmAsICcnXSk7XG4gICAgfVxuICAgIGlmICghdGVtcGxhdGVDYWNoZSkge1xuICAgICAgZ2V0Q29tcG9uZW50UHJvcGVydGllcyh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBDdXN0b21FbGVtZW50KS50ZW1wbGF0ZUNhY2hlID0gdGhpcy5fdGVtcGxhdGVDYWNoZTtcbiAgICB9XG4gIH1cbiAgaWYgKG5lZWRTaGFkeURPTSgpKSB7XG4gICAgc2hhZHlSZW5kZXIoaHRtbCh0aGlzLl90ZW1wbGF0ZUNhY2hlLFxuICAgICAgdGhpcy5yZW5kZXIoKSksXG4gICAgICBlbGVtZW50VG9SZW5kZXIsXG4gICAgICB7IHNjb3BlTmFtZTogZ2V0Q29tcG9uZW50UHJvcGVydGllcyh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBDdXN0b21FbGVtZW50KSEudGFnLCBldmVudENvbnRleHQ6IHRoaXMgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyKGh0bWwodGhpcy5fdGVtcGxhdGVDYWNoZSwgdGhpcy5yZW5kZXIoKSksIGVsZW1lbnRUb1JlbmRlciwgeyBldmVudENvbnRleHQ6IHRoaXMgfSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFN0YWdlMkNsYXNzRGVjb3JhdG9yLCBDbGFzc0RlY29yYXRvckRlc2NyaXB0b3IsIENsYXNzRGVjb3JhdG9yUmVzdWx0IH0gZnJvbSAnLi9zdGFnZTJkZWNvcmF0b3JzJztcbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuLi9jdXN0b21lbGVtZW50JztcbmltcG9ydCB7IGdldENsYXNzUHJvcGVydGllcyB9IGZyb20gJy4uL2NsYXNzcHJvcGVydGllcyc7XG5pbXBvcnQgeyBQcm9wZXJ0eU9wdGlvbnMgfSBmcm9tICcuLi9wcm9wZXJ0eW9wdGlvbnMnO1xuaW1wb3J0IHsgc2V0Q29tcG9uZW50UHJvcGVydGllcywgZ2V0Q29tcG9uZW50UHJvcGVydGllcywgRXh0ZW5kZWRDb21wb25lbnRPcHRpb25zIH0gZnJvbSAnLi4vY29tcG9uZW50cHJvcGVydGllcyc7XG5pbXBvcnQgeyBnZXRBbGxDbGFzc1Byb3BlcnR5V2F0Y2hlciwgZ2V0Q2xhc3NQcm9wZXJ0eVdhdGNoZXIgfSBmcm9tICcuLi9jbGFzc3Byb3BlcnR5d2F0Y2hlcic7XG5pbXBvcnQgeyBnZXRDbGFzc1Byb3BlcnR5SW50ZXJjZXB0b3IsIGdldEFsbENsYXNzUHJvcGVydHlJbnRlcmNlcHRvcnMgfSBmcm9tICcuLi9jbGFzc3Byb3BlcnR5aW50ZXJjZXB0b3JzJztcbmltcG9ydCB7IGdldENsYXNzRXZlbnRzIH0gZnJvbSAnLi4vY2xhc3NldmVudHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50T3B0aW9ucyB9IGZyb20gJy4uL2NvbXBvbmVudG9wdGlvbnMnO1xuaW1wb3J0IHsgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIHN0YWdlLTIgaW1wbGVtZW50YXRpb24gb2YgdGhlIGNvbXBvbmVudCBkZWNvcmF0b3JcbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyBDb21wb25lbnRPcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQob3B0aW9uczogQ29tcG9uZW50T3B0aW9ucyk6IFN0YWdlMkNsYXNzRGVjb3JhdG9yPHR5cGVvZiBDdXN0b21FbGVtZW50PiB7IC8vdHNsaW50OmRpc2FibGUtbGluZVxuICByZXR1cm4gKGRlc2NyaXB0b3I6IENsYXNzRGVjb3JhdG9yRGVzY3JpcHRvcik6IENsYXNzRGVjb3JhdG9yUmVzdWx0PHR5cGVvZiBDdXN0b21FbGVtZW50PiA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVsZW1lbnRzOiBkZXNjcmlwdG9yLmVsZW1lbnRzLFxuICAgICAgY29uc3RydWN0b3I6IHVuZGVmaW5lZCxcbiAgICAgIGtpbmQ6ICdjbGFzcycsXG4gICAgICBmaW5pc2hlcjogKHRhcmdldCkgPT4ge1xuICAgICAgICBpZiAoIUN1c3RvbUVsZW1lbnQuaXNQcm90b3R5cGVPZih0YXJnZXQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldC5uYW1lfSBtdXN0IGV4dGVuZCBDdXN0b21FbGVtZW50YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50RXh0ZW5kZWRPcHRpb25zOiBFeHRlbmRlZENvbXBvbmVudE9wdGlvbnMgPSB7IC4uLm9wdGlvbnMsIGNzc1N0eWxlczogW10sIHNoYWR5Q1NTU3R5bGVTaGVldEFkb3B0ZWQ6IGZhbHNlLCB0ZW1wbGF0ZUNhY2hlOiBudWxsIH07XG5cbiAgICAgICAgY29uc3QgcHJvdG90eXBlOiB0eXBlb2YgQ3VzdG9tRWxlbWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpIGFzIHR5cGVvZiBDdXN0b21FbGVtZW50O1xuICAgICAgICBjb25zdCBwcm90b3R5cGVDbGFzc1Byb3BlcnRpZXMgPSBnZXRDbGFzc1Byb3BlcnRpZXMocHJvdG90eXBlKTtcbiAgICAgICAgaWYgKHByb3RvdHlwZUNsYXNzUHJvcGVydGllcykge1xuICAgICAgICAgIGNvbnN0IHRhcmdldENsYXNzUHJvcGVydGllcyA9IGdldENsYXNzUHJvcGVydGllcyh0YXJnZXQpO1xuICAgICAgICAgIHByb3RvdHlwZUNsYXNzUHJvcGVydGllcy5mb3JFYWNoKCh2YWx1ZTogUHJvcGVydHlPcHRpb25zLCBrZXk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0Q2xhc3NQcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnRTdHlsZXMgPSBBcnJheS5pc0FycmF5KG9wdGlvbnMuc3R5bGUpID8gb3B0aW9ucy5zdHlsZSA6IFtvcHRpb25zLnN0eWxlIHx8ICcnXTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50Q1NTU3R5bGVzID0gY29tcG9uZW50U3R5bGVzLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzKSB7XG4gICAgICAgICAgICBjb25zdCBjc3MgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgY3NzLnJlcGxhY2VTeW5jKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBjc3M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNzc1RleHQ6IHZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29tcG9uZW50RXh0ZW5kZWRPcHRpb25zLmluaGVyaXRTdHlsZSkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudFN0eWxlID0gZ2V0Q29tcG9uZW50UHJvcGVydGllcyhwcm90b3R5cGUpLmNzc1N0eWxlcztcbiAgICAgICAgICBjb21wb25lbnRFeHRlbmRlZE9wdGlvbnMuY3NzU3R5bGVzLnB1c2goLi4ucGFyZW50U3R5bGUpO1xuICAgICAgICAgIGNvbXBvbmVudEV4dGVuZGVkT3B0aW9ucy5jc3NTdHlsZXMucHVzaCguLi5jb21wb25lbnRDU1NTdHlsZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBvbmVudEV4dGVuZGVkT3B0aW9ucy5jc3NTdHlsZXMucHVzaCguLi5jb21wb25lbnRDU1NTdHlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZVdhdGNoZXIgPSBnZXRBbGxDbGFzc1Byb3BlcnR5V2F0Y2hlcihwcm90b3R5cGUpO1xuICAgICAgICBpZiAocHJvdG90eXBlV2F0Y2hlci5zaXplID4gMCkge1xuICAgICAgICAgIEFycmF5LmZyb20ocHJvdG90eXBlV2F0Y2hlci5lbnRyaWVzKCkpLmZvckVhY2goKFtwcm9wZXJ0eSwgd2F0Y2hlcl0pID0+IHtcbiAgICAgICAgICAgIGdldENsYXNzUHJvcGVydHlXYXRjaGVyKHRhcmdldCwgcHJvcGVydHkpLnB1c2goLi4ud2F0Y2hlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvdG90eXBlSW50ZXJjZXB0b3IgPSBnZXRBbGxDbGFzc1Byb3BlcnR5SW50ZXJjZXB0b3JzKHByb3RvdHlwZSk7XG4gICAgICAgIGlmIChwcm90b3R5cGVJbnRlcmNlcHRvci5zaXplID4gMCkge1xuICAgICAgICAgIEFycmF5LmZyb20ocHJvdG90eXBlSW50ZXJjZXB0b3IuZW50cmllcygpKS5mb3JFYWNoKChbcHJvcGVydHksIGludGVyY2VwdG9yXSkgPT4ge1xuICAgICAgICAgICAgZ2V0Q2xhc3NQcm9wZXJ0eUludGVyY2VwdG9yKHRhcmdldCwgcHJvcGVydHkpLnB1c2goLi4uaW50ZXJjZXB0b3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IGdldENsYXNzRXZlbnRzKHByb3RvdHlwZSk7XG4gICAgICAgIGlmIChldmVudHMuc2l6ZSA+IDApIHtcbiAgICAgICAgICBBcnJheS5mcm9tKGV2ZW50cy5lbnRyaWVzKCkpLmZvckVhY2goKFtldmVudCwgb3B0aW9uXSkgPT4ge1xuICAgICAgICAgICAgZ2V0Q2xhc3NFdmVudHModGFyZ2V0KS5zZXQoZXZlbnQsIG9wdGlvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRDb21wb25lbnRQcm9wZXJ0aWVzKHRhcmdldCwgY29tcG9uZW50RXh0ZW5kZWRPcHRpb25zKTtcbiAgICAgICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShvcHRpb25zLnRhZywgdGFyZ2V0KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFN0YWdlMkZpZWxkRGVjb3JhdG9yLCBGaWVsZERlY29yYXRvckRlc2NyaXB0b3IgfSBmcm9tICcuL3N0YWdlMmRlY29yYXRvcnMnO1xuXG4vKipcbiAqIGRlcHJlY2F0ZWQgc3RhZ2UtMiBkZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIERlcHJlY2F0ZWQobWVzc2FnZT86IHN0cmluZyk6IFN0YWdlMkZpZWxkRGVjb3JhdG9yPE9iamVjdCwgdHlwZW9mIE9iamVjdD4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIHJldHVybiAoZGVzY3JpcHRvcjogRmllbGREZWNvcmF0b3JEZXNjcmlwdG9yKSA9PiB7XG4gICAgaWYgKGRlc2NyaXB0b3Iua2luZCA9PT0gJ2ZpZWxkJykge1xuICAgICAgY29uc3Qga2V5ID0gU3ltYm9sKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBleHRyYXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBraW5kOiAnZmllbGQnLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgICAgIGluaXRpYWxpemVyOiBkZXNjcmlwdG9yLmluaXRpYWxpemVyLFxuICAgICAgICAgICAgaW5pdGlhbGl6ZTogZGVzY3JpcHRvci5pbml0aWFsaXplLFxuICAgICAgICAgICAgZGVzY3JpcHRvcjoge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAga2V5OiBkZXNjcmlwdG9yLmtleSxcbiAgICAgICAga2luZDogJ21ldGhvZCcsXG4gICAgICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgIGRlc2NyaXB0b3I6IHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgZ2V0KHRoaXM6IE9iamVjdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbREVQUkVDQVRFRF0gWyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfV0gcHJvcGVydHkgJHtkZXNjcmlwdG9yLmtleS50b1N0cmluZygpfSBpcyBkZXByZWNhdGVkOiAke21lc3NhZ2UgfHwgJyd9YCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIHJldHVybiAoPGFueT50aGlzKVtrZXldOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IE9iamVjdCwgdmFsdWU6IGFueSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbREVQUkVDQVRFRF0gWyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfV0gcHJvcGVydHkgJHtkZXNjcmlwdG9yLmtleS50b1N0cmluZygpfSBpcyBkZXByZWNhdGVkOiAke21lc3NhZ2UgfHwgJyd9YCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICg8YW55PnRoaXMpW2tleV0gPSB2YWx1ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogJ21ldGhvZCcsXG4gICAgICAgIGRlc2NyaXB0b3I6IGRlc2NyaXB0b3IuZGVzY3JpcHRvci52YWx1ZSA/IHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWUoLi4uYXJnczogQXJyYXk8YW55PikgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbREVQUkVDQVRFRF0gWyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfV0gbWV0aG9kICR7ZGVzY3JpcHRvci5rZXkudG9TdHJpbmcoKX0gaXMgZGVwcmVjYXRlZDogJHttZXNzYWdlIHx8ICcnfWApOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgICAgICBkZXNjcmlwdG9yLmRlc2NyaXB0b3IudmFsdWUuYXBwbHkodGhpcywgWy4uLmFyZ3NdKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgIH0sXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIGdldCh0aGlzOiBPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgW0RFUFJFQ0FURURdIFske3RoaXMuY29uc3RydWN0b3IubmFtZX1dIGdldHRlciAke2Rlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCl9IGlzIGRlcHJlY2F0ZWQ6ICR7bWVzc2FnZSB8fCAnJ31gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IuZGVzY3JpcHRvci5nZXQuYXBwbHkodGhpcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogT2JqZWN0LCB2YWx1ZTogYW55KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtERVBSRUNBVEVEXSBbJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9XSBzZXR0ZXIgJHtkZXNjcmlwdG9yLmtleS50b1N0cmluZygpfSBpcyBkZXByZWNhdGVkOiAke21lc3NhZ2UgfHwgJyd9YCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIGRlc2NyaXB0b3IuZGVzY3JpcHRvci5zZXQuYXBwbHkodGhpcywgW3ZhbHVlXSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBkZXNjcmlwdG9yLmtleSxcbiAgICAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgZXh0cmFzOiBbXSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFN0YWdlMkZpZWxkRGVjb3JhdG9yLCBGaWVsZERlY29yYXRvckRlc2NyaXB0b3IsIEZpZWxkRGVjb3JhdG9yUmVzdWx0LCBNZXRob2REZWNvcmF0b3JSZXN1bHQgfSBmcm9tICcuL3N0YWdlMmRlY29yYXRvcnMnO1xuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4uL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0Q2xhc3NFdmVudHMgfSBmcm9tICcuLi9jbGFzc2V2ZW50cyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICcuLi9ldmVudGVtaXR0ZXInO1xuaW1wb3J0IHsgRXZlbnRPcHRpb25zIH0gZnJvbSAnLi4vZXZlbnRvcHRpb25zJztcblxuLyoqXG4gKiBzdGFnZS0yIGRlY29yYXRvciBmb3IgZXZlbnRzXG4gKiBAcGFyYW0gb3B0aW9ucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50KG9wdGlvbnM/OiBFdmVudE9wdGlvbnMgfCBzdHJpbmcpOiBTdGFnZTJGaWVsZERlY29yYXRvcjxDdXN0b21FbGVtZW50LCB0eXBlb2YgQ3VzdG9tRWxlbWVudD4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIHJldHVybiAoZGVzY3JpcHRvcjogRmllbGREZWNvcmF0b3JEZXNjcmlwdG9yKTogRmllbGREZWNvcmF0b3JSZXN1bHQ8Q3VzdG9tRWxlbWVudCwgdHlwZW9mIEN1c3RvbUVsZW1lbnQ+IHwgTWV0aG9kRGVjb3JhdG9yUmVzdWx0PEN1c3RvbUVsZW1lbnQsIHR5cGVvZiBDdXN0b21FbGVtZW50PiA9PiB7XG4gICAgbGV0IG9wdGlvbnNPYmplY3Q6IEV2ZW50T3B0aW9ucyA9IDxFdmVudE9wdGlvbnM+b3B0aW9ucztcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRpb25zT2JqZWN0ID0geyBuYW1lOiBkZXNjcmlwdG9yLmtleS50b1N0cmluZygpIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHsgLy8gbGVnYWN5IG1vZGVcbiAgICAgIG9wdGlvbnNPYmplY3QgPSB7IG5hbWU6IDxzdHJpbmc+b3B0aW9ucyB9O1xuICAgIH0gXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zT2JqZWN0Lm9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRpb25zT2JqZWN0Lm9wdGlvbnMgPSB7IGNhbmNlbGFibGU6IGZhbHNlLCBidWJibGVzOiB0cnVlIH07XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdG9yLmtpbmQgPT09ICdmaWVsZCcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgICAgICBkZXNjcmlwdG9yOiB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIGdldCh0aGlzOiBDdXN0b21FbGVtZW50KTogRXZlbnRFbWl0dGVyPGFueT4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZW1pdDogKHZhbHVlOiBhbnkpOiB2b2lkID0+IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21FdmVudDogQ3VzdG9tRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQob3B0aW9uc09iamVjdC5uYW1lLCB7IC4uLm9wdGlvbnNPYmplY3Qub3B0aW9ucywgZGV0YWlsOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBrZXk6IGRlc2NyaXB0b3Iua2V5LFxuICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICBmaW5pc2hlcjogKHRhcmdldCkgPT4ge1xuICAgICAgICAgIGdldENsYXNzRXZlbnRzKHRhcmdldCkuc2V0KGRlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCksIG9wdGlvbnNPYmplY3QpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvbmx5IGZpZWxkcyBjYW4gYmUgZGVjb3JhdGVkIHdpdGggZXZlbnQnKTtcbiAgICB9XG4gIH07XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBTdGFnZTJNZXRob2REZWNvcmF0b3IsIE1ldGhvZERlY29yYXRvckRlc2NpcHRvciwgTWV0aG9kRGVjb3JhdG9yUmVzdWx0IH0gZnJvbSAnLi9zdGFnZTJkZWNvcmF0b3JzJztcbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuLi9jdXN0b21lbGVtZW50JztcbmltcG9ydCB7IGdldENsYXNzUHJvcGVydHlJbnRlcmNlcHRvciB9IGZyb20gJy4uL2NsYXNzcHJvcGVydHlpbnRlcmNlcHRvcnMnO1xuXG4vKipcbiAqIHN0YWdlLTIgZGVjb3JhdG9yIGZvciBpbnRlcmNlcHRcbiAqIEBwYXJhbSBwcm9wZXJ0eUtleSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEludGVyY2VwdG9yKHByb3BlcnR5S2V5OiBzdHJpbmcpOiBTdGFnZTJNZXRob2REZWNvcmF0b3I8Q3VzdG9tRWxlbWVudCwgdHlwZW9mIEN1c3RvbUVsZW1lbnQ+IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICByZXR1cm4gKGRlc2NyaXB0b3I6IE1ldGhvZERlY29yYXRvckRlc2NpcHRvcik6IE1ldGhvZERlY29yYXRvclJlc3VsdDxDdXN0b21FbGVtZW50LCB0eXBlb2YgQ3VzdG9tRWxlbWVudD4gPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5kZXNjcmlwdG9yLFxuICAgICAgZmluaXNoZXI6ICh0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICghQ3VzdG9tRWxlbWVudC5pc1Byb3RvdHlwZU9mKHRhcmdldCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0Lm5hbWV9IHRoZSBwcm9wZXJ0eSBtdXN0IGJlIHdpdGhpbiBhIGNsYXNzIHdoaWNoIGV4dGVuZHMgQ3VzdG9tRWxlbWVudGApO1xuICAgICAgICB9XG4gICAgICAgIGdldENsYXNzUHJvcGVydHlJbnRlcmNlcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KS5wdXNoKGRlc2NyaXB0b3IuZGVzY3JpcHRvci52YWx1ZSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tdW5zYWZlLWFueVxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBTdGFnZTJGaWVsZERlY29yYXRvciwgTWV0aG9kRGVjb3JhdG9yUmVzdWx0LCBGaWVsZERlY29yYXRvckRlc2NyaXB0b3IsIEZpZWxkRGVjb3JhdG9yUmVzdWx0LCBNZXRob2REZWNvcmF0b3JEZXNjaXB0b3IgfSBmcm9tICcuL3N0YWdlMmRlY29yYXRvcnMnO1xuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudCwgSW5kZXhhYmxlRWxlbWVudCB9IGZyb20gJy4uL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0Q2xhc3NQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY2xhc3Nwcm9wZXJ0aWVzJztcbmltcG9ydCB7IFBST1BFUlRZX1NUQVRFIH0gZnJvbSAnLi4vcHJvcGVydHlzdGF0ZSc7XG5pbXBvcnQgeyBQcm9wZXJ0eU9wdGlvbnMgfSBmcm9tICcuLi9wcm9wZXJ0eW9wdGlvbnMnO1xuXG4vKipcbiAqIHN0YWdlLTIgc3RhdGUgZGVjb3JhdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gU3RhdGUoKTogU3RhZ2UyRmllbGREZWNvcmF0b3I8Q3VzdG9tRWxlbWVudCwgdHlwZW9mIEN1c3RvbUVsZW1lbnQ+IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICByZXR1cm4gUHJvcCh7IHJlZmxlY3RBc0F0dHJpYnV0ZTogZmFsc2UsIHR5cGU6IHVuZGVmaW5lZCB9KTtcbn1cblxuLyoqXG4gKiBzdGFnZS0yIHByb3AgZGVjb3JhdG9yXG4gKiBAcGFyYW0gX29wdGlvbnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQcm9wKF9vcHRpb25zOiBQcm9wZXJ0eU9wdGlvbnMpOiBTdGFnZTJGaWVsZERlY29yYXRvcjxDdXN0b21FbGVtZW50LCB0eXBlb2YgQ3VzdG9tRWxlbWVudD4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIHJldHVybiAoZGVzY3JpcHRvcjogRmllbGREZWNvcmF0b3JEZXNjcmlwdG9yIHwgTWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yKTogRmllbGREZWNvcmF0b3JSZXN1bHQ8Q3VzdG9tRWxlbWVudCwgdHlwZW9mIEN1c3RvbUVsZW1lbnQ+IHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXRob2REZWNvcmF0b3JSZXN1bHQ8Q3VzdG9tRWxlbWVudCwgdHlwZW9mIEN1c3RvbUVsZW1lbnQ+ID0+IHtcblxuICAgIGNvbnN0IGtleSA9IHR5cGVvZiBkZXNjcmlwdG9yLmtleSA9PT0gJ3N5bWJvbCcgPyBTeW1ib2woKSA6IGBfXyR7ZGVzY3JpcHRvci5rZXl9YDtcbiAgICBpZiAoZGVzY3JpcHRvci5raW5kID09PSAnZmllbGQnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiAnbWV0aG9kJyxcbiAgICAgICAgZGVzY3JpcHRvcjoge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBnZXQodGhpczogQ3VzdG9tRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuICg8YW55PnRoaXMpW2tleV07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogQ3VzdG9tRWxlbWVudCwgdmFsdWU6IGFueSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgICAgaWYgKHRoaXMuX3Byb3BlcnR5U3RhdGUgPT09IFBST1BFUlRZX1NUQVRFLlVQREFURV9QUk9QRVJUWSkge1xuICAgICAgICAgICAgICAoPGFueT50aGlzKVtrZXldID0gdmFsdWU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgQ3VzdG9tRWxlbWVudCkuX2Zyb21Qcm9wZXJ0eShkZXNjcmlwdG9yLmtleS50b1N0cmluZygpLCAoPEluZGV4YWJsZUVsZW1lbnQ+dGhpcylbZGVzY3JpcHRvci5rZXkudG9TdHJpbmcoKV0sIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBrZXk6IGRlc2NyaXB0b3Iua2V5LFxuICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICBleHRyYXM6IFt7XG4gICAgICAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgICBpbml0aWFsaXplcjogZGVzY3JpcHRvci5pbml0aWFsaXplcixcbiAgICAgICAgICBpbml0aWFsaXplOiBkZXNjcmlwdG9yLmluaXRpYWxpemUsXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIGRlc2NyaXB0b3I6IHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBraW5kOiAnZmllbGQnLFxuICAgICAgICB9XSxcbiAgICAgICAgZmluaXNoZXI6ICh0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKCFDdXN0b21FbGVtZW50LmlzUHJvdG90eXBlT2YodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldC5uYW1lfSB0aGUgcHJvcGVydHkgbXVzdCBiZSB3aXRoaW4gYSBjbGFzcyB3aGljaCBleHRlbmRzIEN1c3RvbUVsZW1lbnRgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFfb3B0aW9ucykge1xuICAgICAgICAgICAgX29wdGlvbnMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFfb3B0aW9ucy50eXBlKSB7XG4gICAgICAgICAgICBfb3B0aW9ucy50eXBlID0gKDxhbnk+UmVmbGVjdCkuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgdGFyZ2V0LnByb3RvdHlwZSwgZGVzY3JpcHRvci5rZXkudG9TdHJpbmcoKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgICB9XG4gICAgICAgICAgZ2V0Q2xhc3NQcm9wZXJ0aWVzKHRhcmdldCkuc2V0KGRlc2NyaXB0b3Iua2V5LCBfb3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiAnbWV0aG9kJyxcbiAgICAgICAgZGVzY3JpcHRvcjoge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBnZXQodGhpczogQ3VzdG9tRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IuZGVzY3JpcHRvci5nZXQuYXBwbHkodGhpcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogQ3VzdG9tRWxlbWVudCwgdmFsdWU6IGFueSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgICAgaWYgKHRoaXMuX3Byb3BlcnR5U3RhdGUgPT09IFBST1BFUlRZX1NUQVRFLlVQREFURV9QUk9QRVJUWSkge1xuICAgICAgICAgICAgICBkZXNjcmlwdG9yLmRlc2NyaXB0b3Iuc2V0LmFwcGx5KHRoaXMsIFt2YWx1ZV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEN1c3RvbUVsZW1lbnQpLl9mcm9tUHJvcGVydHkoZGVzY3JpcHRvci5rZXkudG9TdHJpbmcoKSwgKDxJbmRleGFibGVFbGVtZW50PnRoaXMpW2Rlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCldLCB2YWx1ZSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBkZXNjcmlwdG9yLmtleSxcbiAgICAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgZmluaXNoZXI6ICh0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKCFDdXN0b21FbGVtZW50LmlzUHJvdG90eXBlT2YodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldC5uYW1lfSB0aGUgcHJvcGVydHkgbXVzdCBiZSB3aXRoaW4gYSBjbGFzcyB3aGljaCBleHRlbmRzIEN1c3RvbUVsZW1lbnRgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFfb3B0aW9ucykge1xuICAgICAgICAgICAgX29wdGlvbnMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZ2V0Q2xhc3NQcm9wZXJ0aWVzKHRhcmdldCkuc2V0KGRlc2NyaXB0b3Iua2V5LCBfb3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogRmllbGREZWNvcmF0b3JEZXNjcmlwdG9yXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGREZWNvcmF0b3JEZXNjcmlwdG9yIHtcbiAga2luZDogJ2ZpZWxkJyB8ICdtZXRob2QnO1xuICBrZXk6IHN0cmluZyB8IHN5bWJvbDtcbiAgcGxhY2VtZW50OiAnc3RhdGljJyB8ICdwcm90b3R5cGUnIHwgJ293bic7XG4gIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcjtcbiAgaW5pdGlhbGl6ZXI6ICgpID0+IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIgfCBPYmplY3QgfCBzeW1ib2w7XG4gIGluaXRpYWxpemUoKTogKCkgPT4gc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlciB8IE9iamVjdCB8IHN5bWJvbDtcbn1cblxuLyoqXG4gKiBNZXRob2REZWNvcmF0b3JEZXNjaXB0b3JcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXRob2REZWNvcmF0b3JEZXNjaXB0b3Ige1xuICBraW5kOiAnbWV0aG9kJztcbiAga2V5OiBzdHJpbmcgfCBzeW1ib2w7XG4gIHBsYWNlbWVudDogJ3N0YXRpYycgfCAncHJvdG90eXBlJyB8ICdvd24nO1xuICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3I7XG59XG5cbi8qKlxuICogQ2xhc3NEZWNvcmF0b3JEZXNjcmlwdG9yXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NEZWNvcmF0b3JEZXNjcmlwdG9yIHtcbiAga2luZDogJ2NsYXNzJztcbiAgZWxlbWVudHM6IEFycmF5PEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvciB8IE1ldGhvZERlY29yYXRvckRlc2NpcHRvcj47XG59XG5cbi8qKlxuICogRmllbGREZWNvcmF0b3JSZXN1bHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWVsZERlY29yYXRvclJlc3VsdDxULCBDPiB7XG4gIGtpbmQ6ICdmaWVsZCcgfCAnbWV0aG9kJztcbiAga2V5OiBzdHJpbmcgfCBzeW1ib2w7XG4gIHBsYWNlbWVudDogJ3N0YXRpYycgfCAncHJvdG90eXBlJyB8ICdvd24nO1xuICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3I7XG4gIGluaXRpYWxpemVyPzogKCkgPT4gYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueSBvbGQgaW1wbGVtZW50YXRpb25cbiAgaW5pdGlhbGl6ZT86ICgpID0+IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgZXh0cmFzPzogQXJyYXk8RmllbGREZWNvcmF0b3JSZXN1bHQ8VCwgQz4+O1xuICBmaW5pc2hlcj86ICh0YXJnZXQ6IEMpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogTWV0aG9kRGVjb3JhdG9yUmVzdWx0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWV0aG9kRGVjb3JhdG9yUmVzdWx0PFQsIEM+IHtcbiAga2luZDogJ21ldGhvZCc7XG4gIGtleTogc3RyaW5nIHwgc3ltYm9sO1xuICBwbGFjZW1lbnQ6ICdzdGF0aWMnIHwgJ3Byb3RvdHlwZScgfCAnb3duJztcbiAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yO1xuICBleHRyYXM/OiBBcnJheTxGaWVsZERlY29yYXRvclJlc3VsdDxULCBDPj47XG4gIGZpbmlzaGVyPzogKHRhcmdldDogQykgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBDbGFzc0RlY29yYXRvclJlc3VsdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENsYXNzRGVjb3JhdG9yUmVzdWx0PFQ+IHtcbiAgZWxlbWVudHM6IEFycmF5PEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvciB8IE1ldGhvZERlY29yYXRvckRlc2NpcHRvcj47XG4gIGNvbnN0cnVjdG9yPzogVDtcbiAga2luZDogJ2NsYXNzJztcbiAgZmluaXNoZXI/OiAodGFyZ2V0OiBUKSA9PiB2b2lkIHwgKG5ldyAoKSA9PiBhbnkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxufVxuXG4vKipcbiAqIFN0YWdlMkZpZWxkRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCB0eXBlIFN0YWdlMkZpZWxkRGVjb3JhdG9yPFQsIEM+ID0gKGRlc2NyaXB0b3I6IEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvcikgPT4gRmllbGREZWNvcmF0b3JSZXN1bHQ8VCwgQz4gfCBNZXRob2REZWNvcmF0b3JSZXN1bHQ8VCwgQz47XG4vKipcbiAqIFN0YWdlMk1ldGhvZERlY29yYXRvclxuICovXG5leHBvcnQgdHlwZSBTdGFnZTJNZXRob2REZWNvcmF0b3I8VCwgQz4gPSAoZGVzY3JpcHRvcjogTWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yKSA9PiBNZXRob2REZWNvcmF0b3JSZXN1bHQ8VCwgQz47XG4vKipcbiAqIFN0YWdlMkNsYXNzRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCB0eXBlIFN0YWdlMkNsYXNzRGVjb3JhdG9yPFQ+ID0gKGRlc2NyaXB0b3I6IENsYXNzRGVjb3JhdG9yRGVzY3JpcHRvcikgPT4gQ2xhc3NEZWNvcmF0b3JSZXN1bHQ8VD47XG5cbi8qKlxuICogaXNTdGFnZTJDbGFzc0RlY29yYXRvclxuICogQHBhcmFtIGVsZW1lbnQgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0YWdlMkNsYXNzRGVjb3JhdG9yKGVsZW1lbnQ6IGFueSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICByZXR1cm4gZWxlbWVudCEua2luZCA9PT0gJ2NsYXNzJzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxufVxuXG4vKipcbiAqIGlzU3RhZ2UyRmllbGREZWNvcmF0b3JcbiAqIEBwYXJhbSBlbGVtZW50IFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdGFnZTJGaWVsZERlY29yYXRvcihlbGVtZW50OiBhbnkpIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgcmV0dXJuIGVsZW1lbnQhLmtpbmQgPT09ICdmaWVsZCcgfHwgZWxlbWVudCEua2luZCA9PT0gJ21ldGhvZCc7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbn1cblxuLyoqXG4gKiBpc1N0YWdlMk1ldGhvZERlY29yYXRvclxuICogQHBhcmFtIGVsZW1lbnQgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0YWdlMk1ldGhvZERlY29yYXRvcihlbGVtZW50OiBhbnkpIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgcmV0dXJuIGVsZW1lbnQhLmtpbmQgPT09ICdtZXRob2QnOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG59XG5cbi8qKlxuICogYXBwbHlMZWdhY3lUb1N0YWdlMkNsYXNzRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0YWdlMnRvTGVnYWN5Q2xhc3NEZWNvcmF0b3I8Qz4odGFyZ2V0OiBDLCBkZWNvcmF0b3I6IFN0YWdlMkNsYXNzRGVjb3JhdG9yPEM+KTogQyB8IG51bGwge1xuICBjb25zdCBjbGFzc0Rlc2NyaXB0b3I6IENsYXNzRGVjb3JhdG9yRGVzY3JpcHRvciA9IHtcbiAgICBraW5kOiAnY2xhc3MnLFxuICAgIGVsZW1lbnRzOiBbXSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgfTtcbiAgY29uc3QgcmVzdWx0ID0gZGVjb3JhdG9yKGNsYXNzRGVzY3JpcHRvcik7XG4gIGxldCBuZXdDb25zdHJ1Y3RvcjogYW55ID0gdW5kZWZpbmVkOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIGlmIChyZXN1bHQuZmluaXNoZXIpIHtcbiAgICBpZiAocmVzdWx0LmNvbnN0cnVjdG9yKSB7XG4gICAgICBuZXdDb25zdHJ1Y3RvciA9IHJlc3VsdC5maW5pc2hlcigoPGFueT5yZXN1bHQuY29uc3RydWN0b3IpKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29uc3RydWN0b3IgPSByZXN1bHQuZmluaXNoZXIoPGFueT50YXJnZXQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdDb25zdHJ1Y3RvciB8fCByZXN1bHQuY29uc3RydWN0b3IgfHwgdGFyZ2V0OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG59XG5cbi8qKlxuICogYXBwbHlMZWdhY3lUb1N0YWdlMkZpZWxkRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0YWdlMlRvTGVnYWN5RmllbGREZWNvcmF0b3I8VCwgQz4odGFyZ2V0OiBDLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsIGRlY29yYXRvcjogU3RhZ2UyRmllbGREZWNvcmF0b3I8VCwgQz4pOiBQcm9wZXJ0eURlc2NyaXB0b3Ige1xuICBjb25zdCBmaWVsZERlY29yYXRvckRlc2NyaXB0b3I6IEZpZWxkRGVjb3JhdG9yRGVzY3JpcHRvciA9IHtcbiAgICBrZXk6IHByb3BlcnR5S2V5LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIGluaXRpYWxpemVyOiBkZXNjcmlwdG9yID8gKDxhbnk+ZGVzY3JpcHRvcilbJ2luaXRpYWxpemVyJ10gOiB1bmRlZmluZWQsIC8vIGluIGJhYmVsIGNhc2UgdGhlcmUgaXMgYW4gaW5pdGlhbGl6ZXJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpbml0aWFsaXplOiBkZXNjcmlwdG9yID8gKDxhbnk+ZGVzY3JpcHRvcilbJ2luaXRpYWxpemVyJ10gOiB1bmRlZmluZWQsIC8vIGluIGJhYmVsIGNhc2UgdGhlcmUgaXMgYW4gaW5pdGlhbGl6ZXJcbiAgICBraW5kOiBkZXNjcmlwdG9yID8gZGVzY3JpcHRvci5nZXQgfHwgZGVzY3JpcHRvci5zZXQgfHwgdHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicgPyAnbWV0aG9kJyA6ICdmaWVsZCcgOiAnZmllbGQnLFxuICAgIGRlc2NyaXB0b3I6IGRlc2NyaXB0b3IgPyBkZXNjcmlwdG9yIDogeyBjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogbnVsbCB9LFxuICAgIHBsYWNlbWVudDogJ293bicsXG4gIH07XG4gIGNvbnN0IHJlc3VsdCA9IGRlY29yYXRvcihmaWVsZERlY29yYXRvckRlc2NyaXB0b3IpO1xuXG4gIGlmIChyZXN1bHQuZXh0cmFzICYmIHJlc3VsdC5leHRyYXMubGVuZ3RoID4gMCkge1xuICAgIHJlc3VsdC5leHRyYXMuZm9yRWFjaCgodmFsdWUpID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgoPGFueT50YXJnZXQpLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgdmFsdWUua2V5LCB7Ly8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZmllbGREZWNvcmF0b3JEZXNjcmlwdG9yLmluaXRpYWxpemUgPyBmaWVsZERlY29yYXRvckRlc2NyaXB0b3IuaW5pdGlhbGl6ZSgpIDogdW5kZWZpbmVkLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSkpO1xuICB9XG4gIGlmIChyZXN1bHQuZmluaXNoZXIpIHtcbiAgICByZXN1bHQuZmluaXNoZXIoPGFueT50YXJnZXQuY29uc3RydWN0b3IpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5kZXNjcmlwdG9yO1xufVxuXG4vKipcbiAqIGFwcGx5TGVnYWN5VG9TdGFnZTJNZXRob2REZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3RhZ2UyVG9MZWdhY3lNZXRob2REZWNvcmF0b3I8VCwgQz4odGFyZ2V0OiBDLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPGFueT4sIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvcmF0b3I6IFN0YWdlMk1ldGhvZERlY29yYXRvcjxULCBDPik6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPGFueT4gfCB2b2lkIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgY29uc3QgbWV0aG9kRGVjb3JhdG9yRGVzY3JpcHRvcjogTWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yID0ge1xuICAgIGRlc2NyaXB0b3I6IDxhbnk+ZGVzY3JpcHRvciwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICBrZXk6IHByb3BlcnR5S2V5LFxuICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgIHBsYWNlbWVudDogJ3Byb3RvdHlwZScsXG4gIH07XG4gIGNvbnN0IHJlc3VsdCA9IGRlY29yYXRvcihtZXRob2REZWNvcmF0b3JEZXNjcmlwdG9yKTtcblxuICBpZiAocmVzdWx0LmV4dHJhcyAmJiByZXN1bHQuZXh0cmFzLmxlbmd0aCA+IDApIHtcbiAgICByZXN1bHQuZXh0cmFzLmZvckVhY2goKHZhbHVlKSA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkoKDxhbnk+dGFyZ2V0KS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHZhbHVlLmtleSwgdmFsdWUuZGVzY3JpcHRvcikpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIH1cblxuICBpZiAocmVzdWx0LmZpbmlzaGVyKSB7XG4gICAgcmVzdWx0LmZpbmlzaGVyKDxhbnk+dGFyZ2V0LmNvbnN0cnVjdG9yKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgfVxuICByZXR1cm4gcmVzdWx0LmRlc2NyaXB0b3I7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBTdGFnZTJGaWVsZERlY29yYXRvciwgRmllbGREZWNvcmF0b3JEZXNjcmlwdG9yIH0gZnJvbSAnLi9zdGFnZTJkZWNvcmF0b3JzJztcblxuLyoqXG4gKiB0cmFjZSBzdGFnZS0yIGRlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gVHJhY2UoKTogU3RhZ2UyRmllbGREZWNvcmF0b3I8T2JqZWN0LCB0eXBlb2YgT2JqZWN0PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgcmV0dXJuIChkZXNjcmlwdG9yOiBGaWVsZERlY29yYXRvckRlc2NyaXB0b3IpID0+IHtcbiAgICBpZiAoZGVzY3JpcHRvci5raW5kID09PSAnZmllbGQnKSB7XG4gICAgICBjb25zdCBrZXkgPSBTeW1ib2woKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGV4dHJhczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGtpbmQ6ICdmaWVsZCcsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgICAgaW5pdGlhbGl6ZXI6IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIsXG4gICAgICAgICAgICBpbml0aWFsaXplOiBkZXNjcmlwdG9yLmluaXRpYWxpemUsXG4gICAgICAgICAgICBkZXNjcmlwdG9yOiB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBrZXk6IGRlc2NyaXB0b3Iua2V5LFxuICAgICAgICBraW5kOiAnbWV0aG9kJyxcbiAgICAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgZGVzY3JpcHRvcjoge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBnZXQodGhpczogT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW0xPR10gWyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfV0gZ2V0dGVyIGNhbGxlZCBvbiBwcm9wZXJ0eSAke2Rlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCl9YCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIHJldHVybiAoPGFueT50aGlzKVtrZXldOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IE9iamVjdCwgdmFsdWU6IGFueSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtMT0ddIFske3RoaXMuY29uc3RydWN0b3IubmFtZX1dIHNldHRlciBjYWxsZWQgb24gcHJvcGVydHkgJHtkZXNjcmlwdG9yLmtleS50b1N0cmluZygpfSB3aXRoIHZhbHVlICR7dmFsdWV9YCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICg8YW55PnRoaXMpW2tleV0gPSB2YWx1ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogJ21ldGhvZCcsXG4gICAgICAgIGRlc2NyaXB0b3I6IGRlc2NyaXB0b3IuZGVzY3JpcHRvci52YWx1ZSA/IHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWUoLi4uYXJnczogQXJyYXk8YW55PikgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtMT0ddIFske3RoaXMuY29uc3RydWN0b3IubmFtZX1dIG1ldGhvZCAke2Rlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCl9IGNhbGxlcyB3aXRoIGFyZ3NgLCBbLi4uYXJnc10pOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgICAgICBkZXNjcmlwdG9yLmRlc2NyaXB0b3IudmFsdWUuYXBwbHkodGhpcywgWy4uLmFyZ3NdKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgIH0sXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIGdldCh0aGlzOiBPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbTE9HXSBbJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9XSBnZXR0ZXIgY2FsbGVkIG9uIHByb3BlcnR5ICR7ZGVzY3JpcHRvci5rZXkudG9TdHJpbmcoKX1gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IuZGVzY3JpcHRvci5nZXQuYXBwbHkodGhpcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogT2JqZWN0LCB2YWx1ZTogYW55KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW0xPR10gWyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfV0gc2V0dGVyIGNhbGxlZCBvbiBwcm9wZXJ0eSAke2Rlc2NyaXB0b3Iua2V5LnRvU3RyaW5nKCl9IHdpdGggdmFsdWUgJHt2YWx1ZX1gKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgICAgZGVzY3JpcHRvci5kZXNjcmlwdG9yLnNldC5hcHBseSh0aGlzLCBbdmFsdWVdKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBrZXk6IGRlc2NyaXB0b3Iua2V5LFxuICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICBleHRyYXM6IFtdIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggTWF0aGlzIFplaWhlclxuICpcbiAqIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICogcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZCB0aGF0IHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXIgaW4gYWxsIGNvcGllcy5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuICogV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbiAqIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbiAqIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuICogQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0ZcbiAqIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgU3RhZ2UyTWV0aG9kRGVjb3JhdG9yLCBNZXRob2REZWNvcmF0b3JEZXNjaXB0b3IsIE1ldGhvZERlY29yYXRvclJlc3VsdCB9IGZyb20gJy4vc3RhZ2UyZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50IH0gZnJvbSAnLi4vY3VzdG9tZWxlbWVudCc7XG5pbXBvcnQgeyBnZXRDbGFzc1Byb3BlcnR5V2F0Y2hlciB9IGZyb20gJy4uL2NsYXNzcHJvcGVydHl3YXRjaGVyJztcblxuLyoqXG4gKiBzdGFnZSAyIHByb3BlcnR5IHdhdGNoIGRlY29yYXRvclxuICogQHBhcmFtIHByb3BlcnR5S2V5IFxuICovXG5leHBvcnQgZnVuY3Rpb24gV2F0Y2gocHJvcGVydHlLZXk6IHN0cmluZyk6IFN0YWdlMk1ldGhvZERlY29yYXRvcjxDdXN0b21FbGVtZW50LCB0eXBlb2YgQ3VzdG9tRWxlbWVudD4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIHJldHVybiAoZGVzY3JpcHRvcjogTWV0aG9kRGVjb3JhdG9yRGVzY2lwdG9yKTogTWV0aG9kRGVjb3JhdG9yUmVzdWx0PEN1c3RvbUVsZW1lbnQsIHR5cGVvZiBDdXN0b21FbGVtZW50PiA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlc2NyaXB0b3IsXG4gICAgICBmaW5pc2hlcjogKHRhcmdldDogdHlwZW9mIEN1c3RvbUVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKCFDdXN0b21FbGVtZW50LmlzUHJvdG90eXBlT2YodGFyZ2V0KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YXJnZXQubmFtZX0gdGhlIHByb3BlcnR5IG11c3QgYmUgd2l0aGluIGEgY2xhc3Mgd2hpY2ggZXh0ZW5kcyBDdXN0b21FbGVtZW50YCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0Q2xhc3NQcm9wZXJ0eVdhdGNoZXIodGFyZ2V0LCBwcm9wZXJ0eUtleSkucHVzaChkZXNjcmlwdG9yLmRlc2NyaXB0b3IudmFsdWUpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IGlzU3RhZ2UyTWV0aG9kRGVjb3JhdG9yLCBpc1N0YWdlMkZpZWxkRGVjb3JhdG9yLCBhcHBseVN0YWdlMlRvTGVnYWN5RmllbGREZWNvcmF0b3IgfSBmcm9tICcuL3N0YWdlMi9zdGFnZTJkZWNvcmF0b3JzJztcbmltcG9ydCB7IFRyYWNlIGFzIFRyYWNlUzIgfSBmcm9tICcuL3N0YWdlMi90cmFjZSc7XG5pbXBvcnQgeyBGaXhlZFByb3BlcnR5RGVjb3JhdG9yIH0gZnJvbSAnLi9wcm9wJztcblxuLyoqXG4gKiBEaXNwbGF5cyB0cmFjZSBtZXNzYWdlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gVHJhY2UoKTogRml4ZWRQcm9wZXJ0eURlY29yYXRvciB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgcmV0dXJuICh0YXJnZXQ6IHR5cGVvZiBPYmplY3QsXG4gICAgICAgICAgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCxcbiAgICAgICAgICBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+KTogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55PiB8IGFueSB8IHZvaWQgPT4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIGlmIChpc1N0YWdlMk1ldGhvZERlY29yYXRvcih0YXJnZXQpIHx8IGlzU3RhZ2UyRmllbGREZWNvcmF0b3IodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIFRyYWNlUzIoKSg8YW55PnRhcmdldCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcHBseVN0YWdlMlRvTGVnYWN5RmllbGREZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvciwgVHJhY2VTMigpKTtcbiAgICB9XG4gIH07XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOCBNYXRoaXMgWmVpaGVyXG4gKlxuICogUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gKiBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4gKiBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuICogQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuICogV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4gKiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuICogT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBQcm9wZXJ0eVR5cGUgfSBmcm9tICcuL3Byb3BlcnR5b3B0aW9ucyc7XG5cbi8qKlxuICogZGVzZXJpYWxpemVzIGEgc3RyaW5nIHRvIGEgdHlwZWQgdmFsdWVcbiAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSBzdHJpbmcgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB0eXBlIHR5cGUgdHJhbnNmb3JtZXIgdHlwZSBmb3Igc3RyaW5nIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZVZhbHVlKHZhbHVlOiBzdHJpbmcsIHR5cGU6IFByb3BlcnR5VHlwZSk6IG51bGwgfCBzdHJpbmcgfCBvYmplY3QgfCBudW1iZXIgfCBib29sZWFuIHwgYW55W10geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIGlmICgodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgJiYgdHlwZSAhPT0gQm9vbGVhbikge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IEJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSBOdW1iZXIpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gU3RyaW5nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFJlZ0V4cCkge1xuICAgIGNvbnN0IFssICwgXzIsIF8zLCBfNCBdID0gIEFycmF5LmZyb20oLyhcXC8oLiopXFwvKFthLXpdKikpfCguKykvLmV4ZWModmFsdWUpKTtcbiAgICBpZiAoXzQpIHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKF80KTtcbiAgICB9IGVsc2UgaWYgKF8yKSB7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChfMiwgXzMgfHwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gRnVuY3Rpb24pIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGV2YWwoJyggZnVuY3Rpb24oKSB7JyArIHZhbHVlICsgJ30gKScpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIGNhbGxiYWNrO1xuICB9IGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBzZXJpYWxpemVzIGEgdmFsdWUgdG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB2YWx1ZSB2YWx1ZVxuICogQHBhcmFtIHR5cGUgdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplVmFsdWUodmFsdWU6IGFueSwgdHlwZTogUHJvcGVydHlUeXBlKTogc3RyaW5nIHwgbnVsbCB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBTdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgfSBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgfVxufVxuXG4vKipcbiAqIHRyYW5zZm9ybSBhIHN0cmluZyBmcm9tIGNhbWVsIGNhc2UgdG8gbG93ZXItY2FzZSBrZWJhcCBjYXNlXG4gKiBAcGFyYW0gc3RyIGlucHV0IHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0tlYmFwQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiB0cmFuc2Zvcm0gYSBzdHJpbmcgZnJvbSBrZWJhcCB0byBjYW1lbCBjYXNlXG4gKiBAcGFyYW0gc3RyIGlucHV0IHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24ga2ViYXBUb0NhbWVsQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFthLXpBLVpdKS9nLCAoLi4uYXJnczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIGFyZ3NbMV0udG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogY3JlYXRlIGEgdGVtcGxhdGUgc3RyaW5nIGFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVGVtcGxhdGVTdHJpbmcodGVtcGxhdGU6IEFycmF5PHN0cmluZz4sIHJhdzogQXJyYXk8c3RyaW5nPik6IFRlbXBsYXRlU3RyaW5nc0FycmF5IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRlbXBsYXRlLCAncmF3JywgeyB2YWx1ZTogcmF3IH0pO1xuXG4gIHJldHVybiA8YW55PnRlbXBsYXRlOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxufVxuXG4vKipcbiAqIGhlbHBlciBmb3Igc2hhZHlkb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lZWRTaGFkeURPTSgpOiBib29sZWFuIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICByZXR1cm4gKDxhbnk+d2luZG93KS5TaGFkeUNTUyAmJiAhd2luZG93LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdztcbn1cblxuLyoqXG4gKiBzdXBwb3J0IGZvciBuZXcgYWRvcHRpbmcgc3R5bGVzaGVldCBmdW5jdGlvbmFsaXR5XG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHM6IGJvb2xlYW4gPSAoJ2Fkb3B0ZWRTdHlsZVNoZWV0cycgaW4gRG9jdW1lbnQucHJvdG90eXBlKSAmJiAoJ3JlcGxhY2UnIGluIENTU1N0eWxlU2hlZXQucHJvdG90eXBlKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IE1hdGhpcyBaZWloZXJcbiAqXG4gKiBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAqIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbiAqIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4gKiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4gKiBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbiAqIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4gKiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL2N1c3RvbWVsZW1lbnQnO1xuaW1wb3J0IHsgaXNTdGFnZTJNZXRob2REZWNvcmF0b3IsIGFwcGx5U3RhZ2UyVG9MZWdhY3lNZXRob2REZWNvcmF0b3IgfSBmcm9tICcuL3N0YWdlMi9zdGFnZTJkZWNvcmF0b3JzJztcbmltcG9ydCB7IFdhdGNoIGFzIFdhdGNoUzIgfSBmcm9tICcuL3N0YWdlMi93YXRjaCc7XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgd2F0Y2hlciBmb3IgcHJvcGVydHkgY2hhbmdlc1xuICpcbiAqIEBwYXJhbSBwcm9wZXJ0eSBwcm9wZXJ0eSB0byB3YXRjaFxuICovXG5leHBvcnQgZnVuY3Rpb24gV2F0Y2gocHJvcGVydHk6IHN0cmluZyk6IE1ldGhvZERlY29yYXRvciB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgcmV0dXJuICh0YXJnZXQ6IHR5cGVvZiBDdXN0b21FbGVtZW50LFxuICAgICAgICAgIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsXG4gICAgICAgICAgZGVzY3JpcHRvcjogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55Pik6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPGFueT4gfCBhbnkgfCB2b2lkID0+IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICBpZiAoaXNTdGFnZTJNZXRob2REZWNvcmF0b3IodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIFdhdGNoUzIocHJvcGVydHkpKDxhbnk+dGFyZ2V0KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFwcGx5U3RhZ2UyVG9MZWdhY3lNZXRob2REZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvciwgV2F0Y2hTMihwcm9wZXJ0eSkpO1xuICAgIH1cbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7Y3JlYXRlTWFya2VyLCBkaXJlY3RpdmUsIE5vZGVQYXJ0LCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCByZW5kZXJzIHRoZSBpdGVtcyBvZiBhbiBhc3luYyBpdGVyYWJsZVsxXSwgYXBwZW5kaW5nIG5ld1xuICogdmFsdWVzIGFmdGVyIHByZXZpb3VzIHZhbHVlcywgc2ltaWxhciB0byB0aGUgYnVpbHQtaW4gc3VwcG9ydCBmb3IgaXRlcmFibGVzLlxuICpcbiAqIEFzeW5jIGl0ZXJhYmxlcyBhcmUgb2JqZWN0cyB3aXRoIGEgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSBtZXRob2QsIHdoaWNoXG4gKiByZXR1cm5zIGFuIGl0ZXJhdG9yIHdobydzIGBuZXh0KClgIG1ldGhvZCByZXR1cm5zIGEgUHJvbWlzZS4gV2hlbiBhIG5ld1xuICogdmFsdWUgaXMgYXZhaWxhYmxlLCB0aGUgUHJvbWlzZSByZXNvbHZlcyBhbmQgdGhlIHZhbHVlIGlzIGFwcGVuZGVkIHRvIHRoZVxuICogUGFydCBjb250cm9sbGVkIGJ5IHRoZSBkaXJlY3RpdmUuIElmIGFub3RoZXIgdmFsdWUgb3RoZXIgdGhhbiB0aGlzXG4gKiBkaXJlY3RpdmUgaGFzIGJlZW4gc2V0IG9uIHRoZSBQYXJ0LCB0aGUgaXRlcmFibGUgd2lsbCBubyBsb25nZXIgYmUgbGlzdGVuZWRcbiAqIHRvIGFuZCBuZXcgdmFsdWVzIHdvbid0IGJlIHdyaXR0ZW4gdG8gdGhlIFBhcnQuXG4gKlxuICogWzFdOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hc3luYy1pdGVyYXRpb25cbiAqXG4gKiBAcGFyYW0gdmFsdWUgQW4gYXN5bmMgaXRlcmFibGVcbiAqIEBwYXJhbSBtYXBwZXIgQW4gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCBtYXBzIGZyb20gKHZhbHVlLCBpbmRleCkgdG8gYW5vdGhlclxuICogICAgIHZhbHVlLiBVc2VmdWwgZm9yIGdlbmVyYXRpbmcgdGVtcGxhdGVzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGl0ZXJhYmxlLlxuICovXG5leHBvcnQgY29uc3QgYXN5bmNBcHBlbmQgPSBkaXJlY3RpdmUoXG4gICAgPFQ+KHZhbHVlOiBBc3luY0l0ZXJhYmxlPFQ+LFxuICAgICAgICBtYXBwZXI/OiAodjogVCwgaW5kZXg/OiBudW1iZXIpID0+IHVua25vd24pID0+IGFzeW5jIChwYXJ0OiBQYXJ0KSA9PiB7XG4gICAgICBpZiAoIShwYXJ0IGluc3RhbmNlb2YgTm9kZVBhcnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXN5bmNBcHBlbmQgY2FuIG9ubHkgYmUgdXNlZCBpbiB0ZXh0IGJpbmRpbmdzJyk7XG4gICAgICB9XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHNldCB1cCB0aGlzIHBhcnRpY3VsYXIgaXRlcmFibGUsIHdlIGRvbid0IG5lZWRcbiAgICAgIC8vIHRvIGRvIGFueXRoaW5nLlxuICAgICAgaWYgKHZhbHVlID09PSBwYXJ0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhcnQudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgLy8gV2Uga2VlcCB0cmFjayBvZiBpdGVtIFBhcnRzIGFjcm9zcyBpdGVyYXRpb25zLCBzbyB0aGF0IHdlIGNhblxuICAgICAgLy8gc2hhcmUgbWFya2VyIG5vZGVzIGJldHdlZW4gY29uc2VjdXRpdmUgUGFydHMuXG4gICAgICBsZXQgaXRlbVBhcnQ7XG4gICAgICBsZXQgaSA9IDA7XG5cbiAgICAgIGZvciBhd2FpdCAobGV0IHYgb2YgdmFsdWUpIHtcbiAgICAgICAgLy8gQ2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgdmFsdWUgaXMgdGhlIHN0aWxsIHRoZSBjdXJyZW50IHZhbHVlIG9mXG4gICAgICAgIC8vIHRoZSBwYXJ0LCBhbmQgaWYgbm90IGJhaWwgYmVjYXVzZSBhIG5ldyB2YWx1ZSBvd25zIHRoaXMgcGFydFxuICAgICAgICBpZiAocGFydC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gd2UgZ2V0IHRoZSBmaXJzdCB2YWx1ZSwgY2xlYXIgdGhlIHBhcnQuIFRoaXMgbGV0cyB0aGVcbiAgICAgICAgLy8gcHJldmlvdXMgdmFsdWUgZGlzcGxheSB1bnRpbCB3ZSBjYW4gcmVwbGFjZSBpdC5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICBwYXJ0LmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcyBhIGNvbnZlbmllbmNlLCBiZWNhdXNlIGZ1bmN0aW9uYWwtcHJvZ3JhbW1pbmctc3R5bGVcbiAgICAgICAgLy8gdHJhbnNmb3JtcyBvZiBpdGVyYWJsZXMgYW5kIGFzeW5jIGl0ZXJhYmxlcyByZXF1aXJlcyBhIGxpYnJhcnksXG4gICAgICAgIC8vIHdlIGFjY2VwdCBhIG1hcHBlciBmdW5jdGlvbi4gVGhpcyBpcyBlc3BlY2lhbGx5IGNvbnZlbmllbnQgZm9yXG4gICAgICAgIC8vIHJlbmRlcmluZyBhIHRlbXBsYXRlIGZvciBlYWNoIGl0ZW0uXG4gICAgICAgIGlmIChtYXBwZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgc2FmZSBiZWNhdXNlIFQgbXVzdCBvdGhlcndpc2UgYmUgdHJlYXRlZCBhcyB1bmtub3duIGJ5XG4gICAgICAgICAgLy8gdGhlIHJlc3Qgb2YgdGhlIHN5c3RlbS5cbiAgICAgICAgICB2ID0gbWFwcGVyKHYsIGkpIGFzIFQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaWtlIHdpdGggc3luYyBpdGVyYWJsZXMsIGVhY2ggaXRlbSBpbmR1Y2VzIGEgUGFydCwgc28gd2UgbmVlZFxuICAgICAgICAvLyB0byBrZWVwIHRyYWNrIG9mIHN0YXJ0IGFuZCBlbmQgbm9kZXMgZm9yIHRoZSBQYXJ0LlxuICAgICAgICAvLyBOb3RlOiBCZWNhdXNlIHRoZXNlIFBhcnRzIGFyZSBub3QgdXBkYXRhYmxlIGxpa2Ugd2l0aCBhIHN5bmNcbiAgICAgICAgLy8gaXRlcmFibGUgKGlmIHdlIHJlbmRlciBhIG5ldyB2YWx1ZSwgd2UgYWx3YXlzIGNsZWFyKSwgaXQgbWF5XG4gICAgICAgIC8vIGJlIHBvc3NpYmxlIHRvIG9wdGltaXplIGF3YXkgdGhlIFBhcnRzIGFuZCBqdXN0IHJlLXVzZSB0aGVcbiAgICAgICAgLy8gUGFydC5zZXRWYWx1ZSgpIGxvZ2ljLlxuXG4gICAgICAgIGxldCBpdGVtU3RhcnROb2RlID0gcGFydC5zdGFydE5vZGU7XG5cbiAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSBwcmV2aW91cyBpdGVtIGFuZCBQYXJ0XG4gICAgICAgIGlmIChpdGVtUGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IG5vZGUgdG8gc2VwYXJhdGUgdGhlIHByZXZpb3VzIGFuZCBuZXh0IFBhcnRzXG4gICAgICAgICAgaXRlbVN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpO1xuICAgICAgICAgIC8vIGl0ZW1QYXJ0IGlzIGN1cnJlbnRseSB0aGUgUGFydCBmb3IgdGhlIHByZXZpb3VzIGl0ZW0uIFNldFxuICAgICAgICAgIC8vIGl0J3MgZW5kTm9kZSB0byB0aGUgbm9kZSB3ZSdsbCB1c2UgZm9yIHRoZSBuZXh0IFBhcnQnc1xuICAgICAgICAgIC8vIHN0YXJ0Tm9kZS5cbiAgICAgICAgICBpdGVtUGFydC5lbmROb2RlID0gaXRlbVN0YXJ0Tm9kZTtcbiAgICAgICAgICBwYXJ0LmVuZE5vZGUucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKGl0ZW1TdGFydE5vZGUsIHBhcnQuZW5kTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbVBhcnQgPSBuZXcgTm9kZVBhcnQocGFydC5vcHRpb25zKTtcbiAgICAgICAgaXRlbVBhcnQuaW5zZXJ0QWZ0ZXJOb2RlKGl0ZW1TdGFydE5vZGUpO1xuICAgICAgICBpdGVtUGFydC5zZXRWYWx1ZSh2KTtcbiAgICAgICAgaXRlbVBhcnQuY29tbWl0KCk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtkaXJlY3RpdmUsIE5vZGVQYXJ0LCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCByZW5kZXJzIHRoZSBpdGVtcyBvZiBhbiBhc3luYyBpdGVyYWJsZVsxXSwgcmVwbGFjaW5nXG4gKiBwcmV2aW91cyB2YWx1ZXMgd2l0aCBuZXcgdmFsdWVzLCBzbyB0aGF0IG9ubHkgb25lIHZhbHVlIGlzIGV2ZXIgcmVuZGVyZWRcbiAqIGF0IGEgdGltZS5cbiAqXG4gKiBBc3luYyBpdGVyYWJsZXMgYXJlIG9iamVjdHMgd2l0aCBhIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gbWV0aG9kLCB3aGljaFxuICogcmV0dXJucyBhbiBpdGVyYXRvciB3aG8ncyBgbmV4dCgpYCBtZXRob2QgcmV0dXJucyBhIFByb21pc2UuIFdoZW4gYSBuZXdcbiAqIHZhbHVlIGlzIGF2YWlsYWJsZSwgdGhlIFByb21pc2UgcmVzb2x2ZXMgYW5kIHRoZSB2YWx1ZSBpcyByZW5kZXJlZCB0byB0aGVcbiAqIFBhcnQgY29udHJvbGxlZCBieSB0aGUgZGlyZWN0aXZlLiBJZiBhbm90aGVyIHZhbHVlIG90aGVyIHRoYW4gdGhpc1xuICogZGlyZWN0aXZlIGhhcyBiZWVuIHNldCBvbiB0aGUgUGFydCwgdGhlIGl0ZXJhYmxlIHdpbGwgbm8gbG9uZ2VyIGJlIGxpc3RlbmVkXG4gKiB0byBhbmQgbmV3IHZhbHVlcyB3b24ndCBiZSB3cml0dGVuIHRvIHRoZSBQYXJ0LlxuICpcbiAqIFsxXTogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtYXN5bmMtaXRlcmF0aW9uXG4gKlxuICogQHBhcmFtIHZhbHVlIEFuIGFzeW5jIGl0ZXJhYmxlXG4gKiBAcGFyYW0gbWFwcGVyIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgbWFwcyBmcm9tICh2YWx1ZSwgaW5kZXgpIHRvIGFub3RoZXJcbiAqICAgICB2YWx1ZS4gVXNlZnVsIGZvciBnZW5lcmF0aW5nIHRlbXBsYXRlcyBmb3IgZWFjaCBpdGVtIGluIHRoZSBpdGVyYWJsZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzeW5jUmVwbGFjZSA9IGRpcmVjdGl2ZShcbiAgICA8VD4odmFsdWU6IEFzeW5jSXRlcmFibGU8VD4sIG1hcHBlcj86ICh2OiBULCBpbmRleD86IG51bWJlcikgPT4gdW5rbm93bikgPT5cbiAgICAgICAgYXN5bmMgKHBhcnQ6IFBhcnQpID0+IHtcbiAgICAgICAgICBpZiAoIShwYXJ0IGluc3RhbmNlb2YgTm9kZVBhcnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FzeW5jUmVwbGFjZSBjYW4gb25seSBiZSB1c2VkIGluIHRleHQgYmluZGluZ3MnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBzZXQgdXAgdGhpcyBwYXJ0aWN1bGFyIGl0ZXJhYmxlLCB3ZSBkb24ndCBuZWVkXG4gICAgICAgICAgLy8gdG8gZG8gYW55dGhpbmcuXG4gICAgICAgICAgaWYgKHZhbHVlID09PSBwYXJ0LnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2UgbmVzdCBhIG5ldyBwYXJ0IHRvIGtlZXAgdHJhY2sgb2YgcHJldmlvdXMgaXRlbSB2YWx1ZXMgc2VwYXJhdGVseVxuICAgICAgICAgIC8vIG9mIHRoZSBpdGVyYWJsZSBhcyBhIHZhbHVlIGl0c2VsZi5cbiAgICAgICAgICBjb25zdCBpdGVtUGFydCA9IG5ldyBOb2RlUGFydChwYXJ0Lm9wdGlvbnMpO1xuICAgICAgICAgIHBhcnQudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICAgIGZvciBhd2FpdCAobGV0IHYgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGF0IHZhbHVlIGlzIHRoZSBzdGlsbCB0aGUgY3VycmVudCB2YWx1ZSBvZlxuICAgICAgICAgICAgLy8gdGhlIHBhcnQsIGFuZCBpZiBub3QgYmFpbCBiZWNhdXNlIGEgbmV3IHZhbHVlIG93bnMgdGhpcyBwYXJ0XG4gICAgICAgICAgICBpZiAocGFydC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4gd2UgZ2V0IHRoZSBmaXJzdCB2YWx1ZSwgY2xlYXIgdGhlIHBhcnQuIFRoaXMgbGV0J3MgdGhlXG4gICAgICAgICAgICAvLyBwcmV2aW91cyB2YWx1ZSBkaXNwbGF5IHVudGlsIHdlIGNhbiByZXBsYWNlIGl0LlxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgcGFydC5jbGVhcigpO1xuICAgICAgICAgICAgICBpdGVtUGFydC5hcHBlbmRJbnRvUGFydChwYXJ0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXMgYSBjb252ZW5pZW5jZSwgYmVjYXVzZSBmdW5jdGlvbmFsLXByb2dyYW1taW5nLXN0eWxlXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm1zIG9mIGl0ZXJhYmxlcyBhbmQgYXN5bmMgaXRlcmFibGVzIHJlcXVpcmVzIGEgbGlicmFyeSxcbiAgICAgICAgICAgIC8vIHdlIGFjY2VwdCBhIG1hcHBlciBmdW5jdGlvbi4gVGhpcyBpcyBlc3BlY2lhbGx5IGNvbnZlbmllbnQgZm9yXG4gICAgICAgICAgICAvLyByZW5kZXJpbmcgYSB0ZW1wbGF0ZSBmb3IgZWFjaCBpdGVtLlxuICAgICAgICAgICAgaWYgKG1hcHBlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgc2FmZSBiZWNhdXNlIFQgbXVzdCBvdGhlcndpc2UgYmUgdHJlYXRlZCBhcyB1bmtub3duIGJ5XG4gICAgICAgICAgICAgIC8vIHRoZSByZXN0IG9mIHRoZSBzeXN0ZW0uXG4gICAgICAgICAgICAgIHYgPSBtYXBwZXIodiwgaSkgYXMgVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbVBhcnQuc2V0VmFsdWUodik7XG4gICAgICAgICAgICBpdGVtUGFydC5jb21taXQoKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4uL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlfSBmcm9tICcuLi9saWIvdGVtcGxhdGUuanMnO1xuaW1wb3J0IHtkaXJlY3RpdmUsIE5vZGVQYXJ0LCBQYXJ0LCByZXBhcmVudE5vZGVzLCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG50eXBlIENhY2hlZFRlbXBsYXRlID0ge1xuICBpbnN0YW5jZTogVGVtcGxhdGVJbnN0YW5jZSxcbiAgbm9kZXM6IERvY3VtZW50RnJhZ21lbnRcbn07XG5jb25zdCB0ZW1wbGF0ZUNhY2hlcyA9XG4gICAgbmV3IFdlYWtNYXA8Tm9kZVBhcnQsIFdlYWtNYXA8VGVtcGxhdGUsIENhY2hlZFRlbXBsYXRlPj4oKTtcblxuLyoqXG4gKiBFbmFibGVzIGZhc3Qgc3dpdGNoaW5nIGJldHdlZW4gbXVsdGlwbGUgdGVtcGxhdGVzIGJ5IGNhY2hpbmcgdGhlIERPTSBub2Rlc1xuICogYW5kIFRlbXBsYXRlSW5zdGFuY2VzIHByb2R1Y2VkIGJ5IHRoZSB0ZW1wbGF0ZXMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBcbiAqIGxldCBjaGVja2VkID0gZmFsc2U7XG4gKlxuICogaHRtbGBcbiAqICAgJHtjYWNoZShjaGVja2VkID8gaHRtbGBpbnB1dCBpcyBjaGVja2VkYCA6IGh0bWxgaW5wdXQgaXMgbm90IGNoZWNrZWRgKX1cbiAqIGBcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgY2FjaGUgPSBkaXJlY3RpdmUoKHZhbHVlOiB1bmtub3duKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAoIShwYXJ0IGluc3RhbmNlb2YgTm9kZVBhcnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjYWNoZSBjYW4gb25seSBiZSB1c2VkIGluIHRleHQgYmluZGluZ3MnKTtcbiAgfVxuXG4gIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHBhcnQpO1xuXG4gIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICB0ZW1wbGF0ZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocGFydCwgdGVtcGxhdGVDYWNoZSk7XG4gIH1cblxuICBjb25zdCBwcmV2aW91c1ZhbHVlID0gcGFydC52YWx1ZTtcblxuICAvLyBGaXJzdCwgY2FuIHdlIHVwZGF0ZSB0aGUgY3VycmVudCBUZW1wbGF0ZUluc3RhbmNlLCBvciBkbyB3ZSBuZWVkIHRvIG1vdmVcbiAgLy8gdGhlIGN1cnJlbnQgbm9kZXMgaW50byB0aGUgY2FjaGU/XG4gIGlmIChwcmV2aW91c1ZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVJbnN0YW5jZSkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVzdWx0ICYmXG4gICAgICAgIHByZXZpb3VzVmFsdWUudGVtcGxhdGUgPT09IHBhcnQub3B0aW9ucy50ZW1wbGF0ZUZhY3RvcnkodmFsdWUpKSB7XG4gICAgICAvLyBTYW1lIFRlbXBsYXRlLCBqdXN0IHRyaWdnZXIgYW4gdXBkYXRlIG9mIHRoZSBUZW1wbGF0ZUluc3RhbmNlXG4gICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm90IHRoZSBzYW1lIFRlbXBsYXRlLCBtb3ZlIHRoZSBub2RlcyBmcm9tIHRoZSBET00gaW50byB0aGUgY2FjaGUuXG4gICAgICBsZXQgY2FjaGVkVGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldChwcmV2aW91c1ZhbHVlLnRlbXBsYXRlKTtcbiAgICAgIGlmIChjYWNoZWRUZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNhY2hlZFRlbXBsYXRlID0ge1xuICAgICAgICAgIGluc3RhbmNlOiBwcmV2aW91c1ZhbHVlLFxuICAgICAgICAgIG5vZGVzOiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgIH07XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUuc2V0KHByZXZpb3VzVmFsdWUudGVtcGxhdGUsIGNhY2hlZFRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICAgIHJlcGFyZW50Tm9kZXMoXG4gICAgICAgICAgY2FjaGVkVGVtcGxhdGUubm9kZXMsIHBhcnQuc3RhcnROb2RlLm5leHRTaWJsaW5nLCBwYXJ0LmVuZE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5leHQsIGNhbiB3ZSByZXVzZSBub2RlcyBmcm9tIHRoZSBjYWNoZT9cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHBhcnQub3B0aW9ucy50ZW1wbGF0ZUZhY3RvcnkodmFsdWUpO1xuICAgIGNvbnN0IGNhY2hlZFRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5nZXQodGVtcGxhdGUpO1xuICAgIGlmIChjYWNoZWRUZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBNb3ZlIG5vZGVzIG91dCBvZiBjYWNoZVxuICAgICAgcGFydC5zZXRWYWx1ZShjYWNoZWRUZW1wbGF0ZS5ub2Rlcyk7XG4gICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgLy8gU2V0IHRoZSBQYXJ0IHZhbHVlIHRvIHRoZSBUZW1wbGF0ZUluc3RhbmNlIHNvIGl0J2xsIHVwZGF0ZSBpdC5cbiAgICAgIHBhcnQudmFsdWUgPSBjYWNoZWRUZW1wbGF0ZS5pbnN0YW5jZTtcbiAgICB9XG4gIH1cbiAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG59KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGVQYXJ0LCBkaXJlY3RpdmUsIFBhcnQsIFByb3BlcnR5UGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5cbi8vIE9uIElFMTEsIGNsYXNzTGlzdC50b2dnbGUgZG9lc24ndCBhY2NlcHQgYSBzZWNvbmQgYXJndW1lbnQuXG4vLyBTaW5jZSB0aGlzIGlzIHNvIG1pbm9yLCB3ZSBqdXN0IHBvbHlmaWxsIGl0LlxuaWYgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKCdUcmlkZW50JykpIHtcbiAgRE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbihcbiAgICAgIHRva2VuOiBzdHJpbmcsIGZvcmNlPzogYm9vbGVhbnx1bmRlZmluZWQpIHtcbiAgICBpZiAoZm9yY2UgPT09IHVuZGVmaW5lZCB8fCBmb3JjZSkge1xuICAgICAgdGhpcy5hZGQodG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZSh0b2tlbik7XG4gICAgfVxuICAgIHJldHVybiBmb3JjZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZvcmNlO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsYXNzSW5mbyB7XG4gIFtuYW1lOiBzdHJpbmddOiBzdHJpbmd8Ym9vbGVhbnxudW1iZXI7XG59XG5cbi8qKlxuICogU3RvcmVzIHRoZSBDbGFzc0luZm8gb2JqZWN0IGFwcGxpZWQgdG8gYSBnaXZlbiBBdHRyaWJ1dGVQYXJ0LlxuICogVXNlZCB0byB1bnNldCBleGlzdGluZyB2YWx1ZXMgd2hlbiBhIG5ldyBDbGFzc0luZm8gb2JqZWN0IGlzIGFwcGxpZWQuXG4gKi9cbmNvbnN0IGNsYXNzTWFwQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4vKipcbiAqIFN0b3JlcyBBdHRyaWJ1dGVQYXJ0cyB0aGF0IGhhdmUgaGFkIHN0YXRpYyBjbGFzc2VzIGFwcGxpZWQgKGUuZy4gYGZvb2AgaW5cbiAqIGNsYXNzPVwiZm9vICR7Y2xhc3NNYXAoKX1cIikuIFN0YXRpYyBjbGFzc2VzIGFyZSBhcHBsaWVkIG9ubHkgdGhlIGZpcnN0IHRpbWVcbiAqIHRoZSBkaXJlY3RpdmUgaXMgcnVuIG9uIGEgcGFydC5cbiAqL1xuLy8gTm90ZSwgY291bGQgYmUgYSBXZWFrU2V0LCBidXQgcHJlZmVyIG5vdCByZXF1aXJpbmcgdGhpcyBwb2x5ZmlsbC5cbmNvbnN0IGNsYXNzTWFwU3RhdGljcyA9IG5ldyBXZWFrTWFwKCk7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBhcHBsaWVzIENTUyBjbGFzc2VzLiBUaGlzIG11c3QgYmUgdXNlZCBpbiB0aGUgYGNsYXNzYFxuICogYXR0cmlidXRlIGFuZCBtdXN0IGJlIHRoZSBvbmx5IHBhcnQgdXNlZCBpbiB0aGUgYXR0cmlidXRlLiBJdCB0YWtlcyBlYWNoXG4gKiBwcm9wZXJ0eSBpbiB0aGUgYGNsYXNzSW5mb2AgYXJndW1lbnQgYW5kIGFkZHMgdGhlIHByb3BlcnR5IG5hbWUgdG8gdGhlXG4gKiBlbGVtZW50J3MgYGNsYXNzTGlzdGAgaWYgdGhlIHByb3BlcnR5IHZhbHVlIGlzIHRydXRoeTsgaWYgdGhlIHByb3BlcnR5IHZhbHVlXG4gKiBpcyBmYWxzZXksIHRoZSBwcm9wZXJ0eSBuYW1lIGlzIHJlbW92ZWQgZnJvbSB0aGUgZWxlbWVudCdzIGBjbGFzc0xpc3RgLiBGb3JcbiAqIGV4YW1wbGVcbiAqIGB7Zm9vOiBiYXJ9YCBhcHBsaWVzIHRoZSBjbGFzcyBgZm9vYCBpZiB0aGUgdmFsdWUgb2YgYGJhcmAgaXMgdHJ1dGh5LlxuICogQHBhcmFtIGNsYXNzSW5mbyB7Q2xhc3NJbmZvfVxuICovXG5leHBvcnQgY29uc3QgY2xhc3NNYXAgPSBkaXJlY3RpdmUoKGNsYXNzSW5mbzogQ2xhc3NJbmZvKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAoIShwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkgfHwgKHBhcnQgaW5zdGFuY2VvZiBQcm9wZXJ0eVBhcnQpIHx8XG4gICAgICBwYXJ0LmNvbW1pdHRlci5uYW1lICE9PSAnY2xhc3MnIHx8IHBhcnQuY29tbWl0dGVyLnBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgYGNsYXNzTWFwYCBkaXJlY3RpdmUgbXVzdCBiZSB1c2VkIGluIHRoZSBgY2xhc3NgIGF0dHJpYnV0ZSAnICtcbiAgICAgICAgJ2FuZCBtdXN0IGJlIHRoZSBvbmx5IHBhcnQgaW4gdGhlIGF0dHJpYnV0ZS4nKTtcbiAgfVxuICAvLyBoYW5kbGUgc3RhdGljIGNsYXNzZXNcbiAgaWYgKCFjbGFzc01hcFN0YXRpY3MuaGFzKHBhcnQpKSB7XG4gICAgcGFydC5jb21taXR0ZXIuZWxlbWVudC5jbGFzc05hbWUgPSBwYXJ0LmNvbW1pdHRlci5zdHJpbmdzLmpvaW4oJyAnKTtcbiAgICBjbGFzc01hcFN0YXRpY3Muc2V0KHBhcnQsIHRydWUpO1xuICB9XG4gIC8vIHJlbW92ZSBvbGQgY2xhc3NlcyB0aGF0IG5vIGxvbmdlciBhcHBseVxuICBjb25zdCBvbGRJbmZvID0gY2xhc3NNYXBDYWNoZS5nZXQocGFydCk7XG4gIGZvciAoY29uc3QgbmFtZSBpbiBvbGRJbmZvKSB7XG4gICAgaWYgKCEobmFtZSBpbiBjbGFzc0luZm8pKSB7XG4gICAgICBwYXJ0LmNvbW1pdHRlci5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG4gICAgfVxuICB9XG4gIC8vIGFkZCBuZXcgY2xhc3Nlc1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gY2xhc3NJbmZvKSB7XG4gICAgaWYgKCFvbGRJbmZvIHx8IChvbGRJbmZvW25hbWVdICE9PSBjbGFzc0luZm9bbmFtZV0pKSB7XG4gICAgICAvLyBXZSBleHBsaWNpdGx5IHdhbnQgYSBsb29zZSB0cnV0aHkgY2hlY2sgaGVyZSBiZWNhdXNlXG4gICAgICAvLyBpdCBzZWVtcyBtb3JlIGNvbnZlbmllbnQgdGhhdCAnJyBhbmQgMCBhcmUgc2tpcHBlZC5cbiAgICAgIHBhcnQuY29tbWl0dGVyLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShuYW1lLCBCb29sZWFuKGNsYXNzSW5mb1tuYW1lXSkpO1xuICAgIH1cbiAgfVxuICBjbGFzc01hcENhY2hlLnNldChwYXJ0LCBjbGFzc0luZm8pO1xufSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7ZGlyZWN0aXZlLCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbmNvbnN0IHByZXZpb3VzVmFsdWVzID0gbmV3IFdlYWtNYXA8UGFydCwgdW5rbm93bj4oKTtcblxuLyoqXG4gKiBQcmV2ZW50cyByZS1yZW5kZXIgb2YgYSB0ZW1wbGF0ZSBmdW5jdGlvbiB1bnRpbCBhIHNpbmdsZSB2YWx1ZSBvciBhbiBhcnJheSBvZlxuICogdmFsdWVzIGNoYW5nZXMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogaHRtbGBcbiAqICAgPGRpdj5cbiAqICAgICAke2d1YXJkKFt1c2VyLmlkLCBjb21wYW55LmlkXSwgKCkgPT4gaHRtbGAuLi5gKX1cbiAqICAgPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBJbiB0aGlzIGNhc2UsIHRoZSB0ZW1wbGF0ZSBvbmx5IHJlbmRlcnMgaWYgZWl0aGVyIGB1c2VyLmlkYCBvciBgY29tcGFueS5pZGBcbiAqIGNoYW5nZXMuXG4gKlxuICogZ3VhcmQoKSBpcyB1c2VmdWwgd2l0aCBpbW11dGFibGUgZGF0YSBwYXR0ZXJucywgYnkgcHJldmVudGluZyBleHBlbnNpdmUgd29ya1xuICogdW50aWwgZGF0YSB1cGRhdGVzLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIGh0bWxgXG4gKiAgIDxkaXY+XG4gKiAgICAgJHtndWFyZChbaW1tdXRhYmxlSXRlbXNdLCAoKSA9PiBpbW11dGFibGVJdGVtcy5tYXAoaSA9PiBodG1sYCR7aX1gKSl9XG4gKiAgIDwvZGl2PlxuICogYGBgXG4gKlxuICogSW4gdGhpcyBjYXNlLCBpdGVtcyBhcmUgbWFwcGVkIG92ZXIgb25seSB3aGVuIHRoZSBhcnJheSByZWZlcmVuY2UgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIGNoZWNrIGJlZm9yZSByZS1yZW5kZXJpbmdcbiAqIEBwYXJhbSBmIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZ3VhcmQgPVxuICAgIGRpcmVjdGl2ZSgodmFsdWU6IHVua25vd24sIGY6ICgpID0+IHVua25vd24pID0+IChwYXJ0OiBQYXJ0KTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNWYWx1ZXMuZ2V0KHBhcnQpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIC8vIERpcnR5LWNoZWNrIGFycmF5cyBieSBpdGVtXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByZXZpb3VzVmFsdWUpICYmXG4gICAgICAgICAgICBwcmV2aW91c1ZhbHVlLmxlbmd0aCA9PT0gdmFsdWUubGVuZ3RoICYmXG4gICAgICAgICAgICB2YWx1ZS5ldmVyeSgodiwgaSkgPT4gdiA9PT0gcHJldmlvdXNWYWx1ZVtpXSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgcHJldmlvdXNWYWx1ZSA9PT0gdmFsdWUgJiZcbiAgICAgICAgICAodmFsdWUgIT09IHVuZGVmaW5lZCB8fCBwcmV2aW91c1ZhbHVlcy5oYXMocGFydCkpKSB7XG4gICAgICAgIC8vIERpcnR5LWNoZWNrIG5vbi1hcnJheXMgYnkgaWRlbnRpdHlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwYXJ0LnNldFZhbHVlKGYoKSk7XG4gICAgICAvLyBDb3B5IHRoZSB2YWx1ZSBpZiBpdCdzIGFuIGFycmF5IHNvIHRoYXQgaWYgaXQncyBtdXRhdGVkIHdlIGRvbid0IGZvcmdldFxuICAgICAgLy8gd2hhdCB0aGUgcHJldmlvdXMgdmFsdWVzIHdlcmUuXG4gICAgICBwcmV2aW91c1ZhbHVlcy5zZXQoXG4gICAgICAgICAgcGFydCwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBBcnJheS5mcm9tKHZhbHVlKSA6IHZhbHVlKTtcbiAgICB9KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGVQYXJ0LCBkaXJlY3RpdmUsIFBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuLyoqXG4gKiBGb3IgQXR0cmlidXRlUGFydHMsIHNldHMgdGhlIGF0dHJpYnV0ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZCBhbmQgcmVtb3Zlc1xuICogdGhlIGF0dHJpYnV0ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLlxuICpcbiAqIEZvciBvdGhlciBwYXJ0IHR5cGVzLCB0aGlzIGRpcmVjdGl2ZSBpcyBhIG5vLW9wLlxuICovXG5leHBvcnQgY29uc3QgaWZEZWZpbmVkID0gZGlyZWN0aXZlKCh2YWx1ZTogdW5rbm93bikgPT4gKHBhcnQ6IFBhcnQpID0+IHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgcGFydCBpbnN0YW5jZW9mIEF0dHJpYnV0ZVBhcnQpIHtcbiAgICBpZiAodmFsdWUgIT09IHBhcnQudmFsdWUpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwYXJ0LmNvbW1pdHRlci5uYW1lO1xuICAgICAgcGFydC5jb21taXR0ZXIuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICB9XG59KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmVGbn0gZnJvbSAnLi4vbGliL2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQge2NyZWF0ZU1hcmtlciwgZGlyZWN0aXZlLCBOb2RlUGFydCwgUGFydCwgcmVtb3ZlTm9kZXMsIHJlcGFyZW50Tm9kZXN9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuZXhwb3J0IHR5cGUgS2V5Rm48VD4gPSAoaXRlbTogVCwgaW5kZXg6IG51bWJlcikgPT4gdW5rbm93bjtcbmV4cG9ydCB0eXBlIEl0ZW1UZW1wbGF0ZTxUPiA9IChpdGVtOiBULCBpbmRleDogbnVtYmVyKSA9PiB1bmtub3duO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgcGFydHNcbi8vIFRPRE8oa3NjaGFhZik6IFJlZmFjdG9yIGludG8gUGFydCBBUEk/XG5jb25zdCBjcmVhdGVBbmRJbnNlcnRQYXJ0ID1cbiAgICAoY29udGFpbmVyUGFydDogTm9kZVBhcnQsIGJlZm9yZVBhcnQ/OiBOb2RlUGFydCk6IE5vZGVQYXJ0ID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclBhcnQuc3RhcnROb2RlLnBhcmVudE5vZGUgYXMgTm9kZTtcbiAgICAgIGNvbnN0IGJlZm9yZU5vZGUgPSBiZWZvcmVQYXJ0ID09PSB1bmRlZmluZWQgPyBjb250YWluZXJQYXJ0LmVuZE5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVBhcnQuc3RhcnROb2RlO1xuICAgICAgY29uc3Qgc3RhcnROb2RlID0gY29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgYmVmb3JlTm9kZSk7XG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBiZWZvcmVOb2RlKTtcbiAgICAgIGNvbnN0IG5ld1BhcnQgPSBuZXcgTm9kZVBhcnQoY29udGFpbmVyUGFydC5vcHRpb25zKTtcbiAgICAgIG5ld1BhcnQuaW5zZXJ0QWZ0ZXJOb2RlKHN0YXJ0Tm9kZSk7XG4gICAgICByZXR1cm4gbmV3UGFydDtcbiAgICB9O1xuXG5jb25zdCB1cGRhdGVQYXJ0ID0gKHBhcnQ6IE5vZGVQYXJ0LCB2YWx1ZTogdW5rbm93bikgPT4ge1xuICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgcGFydC5jb21taXQoKTtcbiAgcmV0dXJuIHBhcnQ7XG59O1xuXG5jb25zdCBpbnNlcnRQYXJ0QmVmb3JlID1cbiAgICAoY29udGFpbmVyUGFydDogTm9kZVBhcnQsIHBhcnQ6IE5vZGVQYXJ0LCByZWY/OiBOb2RlUGFydCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyUGFydC5zdGFydE5vZGUucGFyZW50Tm9kZSBhcyBOb2RlO1xuICAgICAgY29uc3QgYmVmb3JlTm9kZSA9IHJlZiA/IHJlZi5zdGFydE5vZGUgOiBjb250YWluZXJQYXJ0LmVuZE5vZGU7XG4gICAgICBjb25zdCBlbmROb2RlID0gcGFydC5lbmROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgaWYgKGVuZE5vZGUgIT09IGJlZm9yZU5vZGUpIHtcbiAgICAgICAgcmVwYXJlbnROb2Rlcyhjb250YWluZXIsIHBhcnQuc3RhcnROb2RlLCBlbmROb2RlLCBiZWZvcmVOb2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG5jb25zdCByZW1vdmVQYXJ0ID0gKHBhcnQ6IE5vZGVQYXJ0KSA9PiB7XG4gIHJlbW92ZU5vZGVzKFxuICAgICAgcGFydC5zdGFydE5vZGUucGFyZW50Tm9kZSEsIHBhcnQuc3RhcnROb2RlLCBwYXJ0LmVuZE5vZGUubmV4dFNpYmxpbmcpO1xufTtcblxuLy8gSGVscGVyIGZvciBnZW5lcmF0aW5nIGEgbWFwIG9mIGFycmF5IGl0ZW0gdG8gaXRzIGluZGV4IG92ZXIgYSBzdWJzZXRcbi8vIG9mIGFuIGFycmF5ICh1c2VkIHRvIGxhemlseSBnZW5lcmF0ZSBgbmV3S2V5VG9JbmRleE1hcGAgYW5kXG4vLyBgb2xkS2V5VG9JbmRleE1hcGApXG5jb25zdCBnZW5lcmF0ZU1hcCA9IChsaXN0OiB1bmtub3duW10sIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgbWFwLnNldChsaXN0W2ldLCBpKTtcbiAgfVxuICByZXR1cm4gbWFwO1xufTtcblxuLy8gU3RvcmVzIHByZXZpb3VzIG9yZGVyZWQgbGlzdCBvZiBwYXJ0cyBhbmQgbWFwIG9mIGtleSB0byBpbmRleFxuY29uc3QgcGFydExpc3RDYWNoZSA9IG5ldyBXZWFrTWFwPE5vZGVQYXJ0LCAoTm9kZVBhcnQgfCBudWxsKVtdPigpO1xuY29uc3Qga2V5TGlzdENhY2hlID0gbmV3IFdlYWtNYXA8Tm9kZVBhcnQsIHVua25vd25bXT4oKTtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHJlcGVhdHMgYSBzZXJpZXMgb2YgdmFsdWVzICh1c3VhbGx5IGBUZW1wbGF0ZVJlc3VsdHNgKVxuICogZ2VuZXJhdGVkIGZyb20gYW4gaXRlcmFibGUsIGFuZCB1cGRhdGVzIHRob3NlIGl0ZW1zIGVmZmljaWVudGx5IHdoZW4gdGhlXG4gKiBpdGVyYWJsZSBjaGFuZ2VzIGJhc2VkIG9uIHVzZXItcHJvdmlkZWQgYGtleXNgIGFzc29jaWF0ZWQgd2l0aCBlYWNoIGl0ZW0uXG4gKlxuICogTm90ZSB0aGF0IGlmIGEgYGtleUZuYCBpcyBwcm92aWRlZCwgc3RyaWN0IGtleS10by1ET00gbWFwcGluZyBpcyBtYWludGFpbmVkLFxuICogbWVhbmluZyBwcmV2aW91cyBET00gZm9yIGEgZ2l2ZW4ga2V5IGlzIG1vdmVkIGludG8gdGhlIG5ldyBwb3NpdGlvbiBpZlxuICogbmVlZGVkLCBhbmQgRE9NIHdpbGwgbmV2ZXIgYmUgcmV1c2VkIHdpdGggdmFsdWVzIGZvciBkaWZmZXJlbnQga2V5cyAobmV3IERPTVxuICogd2lsbCBhbHdheXMgYmUgY3JlYXRlZCBmb3IgbmV3IGtleXMpLiBUaGlzIGlzIGdlbmVyYWxseSB0aGUgbW9zdCBlZmZpY2llbnRcbiAqIHdheSB0byB1c2UgYHJlcGVhdGAgc2luY2UgaXQgcGVyZm9ybXMgbWluaW11bSB1bm5lY2Vzc2FyeSB3b3JrIGZvciBpbnNlcnRpb25zXG4gKiBhbWQgcmVtb3ZhbHMuXG4gKlxuICogSU1QT1JUQU5UOiBJZiBwcm92aWRpbmcgYSBga2V5Rm5gLCBrZXlzICptdXN0KiBiZSB1bmlxdWUgZm9yIGFsbCBpdGVtcyBpbiBhXG4gKiBnaXZlbiBjYWxsIHRvIGByZXBlYXRgLiBUaGUgYmVoYXZpb3Igd2hlbiB0d28gb3IgbW9yZSBpdGVtcyBoYXZlIHRoZSBzYW1lIGtleVxuICogaXMgdW5kZWZpbmVkLlxuICpcbiAqIElmIG5vIGBrZXlGbmAgaXMgcHJvdmlkZWQsIHRoaXMgZGlyZWN0aXZlIHdpbGwgcGVyZm9ybSBzaW1pbGFyIHRvIG1hcHBpbmdcbiAqIGl0ZW1zIHRvIHZhbHVlcywgYW5kIERPTSB3aWxsIGJlIHJldXNlZCBhZ2FpbnN0IHBvdGVudGlhbGx5IGRpZmZlcmVudCBpdGVtcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGVhdCA9XG4gICAgZGlyZWN0aXZlKFxuICAgICAgICA8VD4oaXRlbXM6IEl0ZXJhYmxlPFQ+LFxuICAgICAgICAgICAga2V5Rm5PclRlbXBsYXRlOiBLZXlGbjxUPnxJdGVtVGVtcGxhdGU8VD4sXG4gICAgICAgICAgICB0ZW1wbGF0ZT86IEl0ZW1UZW1wbGF0ZTxUPik6XG4gICAgICAgICAgICBEaXJlY3RpdmVGbiA9PiB7XG4gICAgICAgICAgICAgIGxldCBrZXlGbjogS2V5Rm48VD47XG4gICAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSBrZXlGbk9yVGVtcGxhdGU7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Rm5PclRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBrZXlGbiA9IGtleUZuT3JUZW1wbGF0ZSBhcyBLZXlGbjxUPjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAoY29udGFpbmVyUGFydDogUGFydCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGNvbnRhaW5lclBhcnQgaW5zdGFuY2VvZiBOb2RlUGFydCkpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVwZWF0IGNhbiBvbmx5IGJlIHVzZWQgaW4gdGV4dCBiaW5kaW5ncycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPbGQgcGFydCAmIGtleSBsaXN0cyBhcmUgcmV0cmlldmVkIGZyb20gdGhlIGxhc3QgdXBkYXRlXG4gICAgICAgICAgICAgICAgLy8gKGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFydCBmb3IgdGhpcyBpbnN0YW5jZSBvZiB0aGUgZGlyZWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFBhcnRzID0gcGFydExpc3RDYWNoZS5nZXQoY29udGFpbmVyUGFydCkgfHwgW107XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkS2V5cyA9IGtleUxpc3RDYWNoZS5nZXQoY29udGFpbmVyUGFydCkgfHwgW107XG5cbiAgICAgICAgICAgICAgICAvLyBOZXcgcGFydCBsaXN0IHdpbGwgYmUgYnVpbHQgdXAgYXMgd2UgZ28gKGVpdGhlciByZXVzZWQgZnJvbVxuICAgICAgICAgICAgICAgIC8vIG9sZCBwYXJ0cyBvciBjcmVhdGVkIGZvciBuZXcga2V5cyBpbiB0aGlzIHVwZGF0ZSkuIFRoaXMgaXNcbiAgICAgICAgICAgICAgICAvLyBzYXZlZCBpbiB0aGUgYWJvdmUgY2FjaGUgYXQgdGhlIGVuZCBvZiB0aGUgdXBkYXRlLlxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BhcnRzOiBOb2RlUGFydFtdID0gW107XG5cbiAgICAgICAgICAgICAgICAvLyBOZXcgdmFsdWUgbGlzdCBpcyBlYWdlcmx5IGdlbmVyYXRlZCBmcm9tIGl0ZW1zIGFsb25nIHdpdGggYVxuICAgICAgICAgICAgICAgIC8vIHBhcmFsbGVsIGFycmF5IGluZGljYXRpbmcgaXRzIGtleS5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZXM6IHVua25vd25bXSA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0tleXM6IHVua25vd25bXSA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICBuZXdLZXlzW2luZGV4XSA9IGtleUZuID8ga2V5Rm4oaXRlbSwgaW5kZXgpIDogaW5kZXg7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZXNbaW5kZXhdID0gdGVtcGxhdGUgIShpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1hcHMgZnJvbSBrZXkgdG8gaW5kZXggZm9yIGN1cnJlbnQgYW5kIHByZXZpb3VzIHVwZGF0ZTsgdGhlc2VcbiAgICAgICAgICAgICAgICAvLyBhcmUgZ2VuZXJhdGVkIGxhemlseSBvbmx5IHdoZW4gbmVlZGVkIGFzIGEgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAvLyBvcHRpbWl6YXRpb24sIHNpbmNlIHRoZXkgYXJlIG9ubHkgcmVxdWlyZWQgZm9yIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgLy8gbm9uLWNvbnRpZ3VvdXMgY2hhbmdlcyBpbiB0aGUgbGlzdCwgd2hpY2ggYXJlIGxlc3MgY29tbW9uLlxuICAgICAgICAgICAgICAgIGxldCBuZXdLZXlUb0luZGV4TWFwITogTWFwPHVua25vd24sIG51bWJlcj47XG4gICAgICAgICAgICAgICAgbGV0IG9sZEtleVRvSW5kZXhNYXAhOiBNYXA8dW5rbm93biwgbnVtYmVyPjtcblxuICAgICAgICAgICAgICAgIC8vIEhlYWQgYW5kIHRhaWwgcG9pbnRlcnMgdG8gb2xkIHBhcnRzIGFuZCBuZXcgdmFsdWVzXG4gICAgICAgICAgICAgICAgbGV0IG9sZEhlYWQgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBvbGRUYWlsID0gb2xkUGFydHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3SGVhZCA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1RhaWwgPSBuZXdWYWx1ZXMubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIC8vIE92ZXJ2aWV3IG9mIE8obikgcmVjb25jaWxpYXRpb24gYWxnb3JpdGhtIChnZW5lcmFsIGFwcHJvYWNoXG4gICAgICAgICAgICAgICAgLy8gYmFzZWQgb24gaWRlYXMgZm91bmQgaW4gaXZpLCB2dWUsIHNuYWJiZG9tLCBldGMuKTpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogV2Ugc3RhcnQgd2l0aCB0aGUgbGlzdCBvZiBvbGQgcGFydHMgYW5kIG5ldyB2YWx1ZXMgKGFuZFxuICAgICAgICAgICAgICAgIC8vIGFycmF5cyBvZlxuICAgICAgICAgICAgICAgIC8vICAgdGhlaXIgcmVzcGVjdGl2ZSBrZXlzKSwgaGVhZC90YWlsIHBvaW50ZXJzIGludG8gZWFjaCwgYW5kXG4gICAgICAgICAgICAgICAgLy8gICB3ZSBidWlsZCB1cCB0aGUgbmV3IGxpc3Qgb2YgcGFydHMgYnkgdXBkYXRpbmcgKGFuZCB3aGVuXG4gICAgICAgICAgICAgICAgLy8gICBuZWVkZWQsIG1vdmluZykgb2xkIHBhcnRzIG9yIGNyZWF0aW5nIG5ldyBvbmVzLiBUaGUgaW5pdGlhbFxuICAgICAgICAgICAgICAgIC8vICAgc2NlbmFyaW8gbWlnaHQgbG9vayBsaWtlIHRoaXMgKGZvciBicmV2aXR5IG9mIHRoZSBkaWFncmFtcyxcbiAgICAgICAgICAgICAgICAvLyAgIHRoZSBudW1iZXJzIGluIHRoZSBhcnJheSByZWZsZWN0IGtleXMgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgb2xkIHBhcnRzIG9yIG5ldyB2YWx1ZXMsIGFsdGhvdWdoIGtleXMgYW5kIHBhcnRzL3ZhbHVlcyBhcmVcbiAgICAgICAgICAgICAgICAvLyAgIGFjdHVhbGx5IHN0b3JlZCBpbiBwYXJhbGxlbCBhcnJheXMgaW5kZXhlZCB1c2luZyB0aGUgc2FtZVxuICAgICAgICAgICAgICAgIC8vICAgaGVhZC90YWlsIHBvaW50ZXJzKTpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgb2xkSGVhZCB2ICAgICAgICAgICAgICAgICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgMiwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbICwgICwgICwgICwgICwgICwgIF1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl0gPC0gcmVmbGVjdHMgdGhlIHVzZXIncyBuZXdcbiAgICAgICAgICAgICAgICAvLyAgIGl0ZW0gb3JkZXJcbiAgICAgICAgICAgICAgICAvLyAgICAgIG5ld0hlYWQgXiAgICAgICAgICAgICAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEl0ZXJhdGUgb2xkICYgbmV3IGxpc3RzIGZyb20gYm90aCBzaWRlcywgdXBkYXRpbmcsXG4gICAgICAgICAgICAgICAgLy8gc3dhcHBpbmcsIG9yXG4gICAgICAgICAgICAgICAgLy8gICByZW1vdmluZyBwYXJ0cyBhdCB0aGUgaGVhZC90YWlsIGxvY2F0aW9ucyB1bnRpbCBuZWl0aGVyXG4gICAgICAgICAgICAgICAgLy8gICBoZWFkIG5vciB0YWlsIGNhbiBtb3ZlLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBrZXlzIGF0IGhlYWQgcG9pbnRlcnMgbWF0Y2gsIHNvIHVwZGF0ZSBvbGRcbiAgICAgICAgICAgICAgICAvLyBwYXJ0IDAgaW4tXG4gICAgICAgICAgICAgICAgLy8gICBwbGFjZSAobm8gbmVlZCB0byBtb3ZlIGl0KSBhbmQgcmVjb3JkIHBhcnQgMCBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGBuZXdQYXJ0c2AgbGlzdC4gVGhlIGxhc3QgdGhpbmcgd2UgZG8gaXMgYWR2YW5jZSB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGBvbGRIZWFkYCBhbmQgYG5ld0hlYWRgIHBvaW50ZXJzICh3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIG5leHQgZGlhZ3JhbSkuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgIG9sZEhlYWQgdiAgICAgICAgICAgICAgICAgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIDIsIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsICAsICAsICAsICAsICAsICBdIDwtIGhlYWRzIG1hdGNoZWQ6IHVwZGF0ZSAwXG4gICAgICAgICAgICAgICAgLy8gICBhbmQgbmV3S2V5czogIFswLCAyLCAxLCA0LCAzLCA3LCA2XSAgICBhZHZhbmNlIGJvdGggb2xkSGVhZFxuICAgICAgICAgICAgICAgIC8vICAgJiBuZXdIZWFkXG4gICAgICAgICAgICAgICAgLy8gICAgICBuZXdIZWFkIF4gICAgICAgICAgICAgICAgIF4gbmV3VGFpbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBoZWFkIHBvaW50ZXJzIGRvbid0IG1hdGNoLCBidXQgdGFpbCBwb2ludGVyc1xuICAgICAgICAgICAgICAgIC8vIGRvLCBzb1xuICAgICAgICAgICAgICAgIC8vICAgdXBkYXRlIHBhcnQgNiBpbiBwbGFjZSAobm8gbmVlZCB0byBtb3ZlIGl0KSwgYW5kIHJlY29yZFxuICAgICAgICAgICAgICAgIC8vICAgcGFydCA2IGluIHRoZSBgbmV3UGFydHNgIGxpc3QuIExhc3QsIGFkdmFuY2UgdGhlIGBvbGRUYWlsYFxuICAgICAgICAgICAgICAgIC8vICAgYW5kIGBvbGRIZWFkYCBwb2ludGVycy5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2xkSGVhZCB2ICAgICAgICAgICAgICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgMiwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgICwgICwgICwgICwgICwgNl0gPC0gdGFpbHMgbWF0Y2hlZDogdXBkYXRlIDZcbiAgICAgICAgICAgICAgICAvLyAgIGFuZCBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgIGFkdmFuY2UgYm90aCBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICAmIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld0hlYWQgXiAgICAgICAgICAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIElmIG5laXRoZXIgaGVhZCBub3IgdGFpbCBtYXRjaDsgbmV4dCBjaGVjayBpZiBvbmUgb2YgdGhlXG4gICAgICAgICAgICAgICAgLy8gb2xkIGhlYWQvdGFpbFxuICAgICAgICAgICAgICAgIC8vICAgaXRlbXMgd2FzIHJlbW92ZWQuIFdlIGZpcnN0IG5lZWQgdG8gZ2VuZXJhdGUgdGhlIHJldmVyc2VcbiAgICAgICAgICAgICAgICAvLyAgIG1hcCBvZiBuZXcga2V5cyB0byBpbmRleCAoYG5ld0tleVRvSW5kZXhNYXBgKSwgd2hpY2ggaXNcbiAgICAgICAgICAgICAgICAvLyAgIGRvbmUgb25jZSBsYXppbHkgYXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24sIHNpbmNlIHdlXG4gICAgICAgICAgICAgICAgLy8gICBvbmx5IGhpdCB0aGlzIGNhc2UgaWYgbXVsdGlwbGUgbm9uLWNvbnRpZ3VvdXMgY2hhbmdlcyB3ZXJlXG4gICAgICAgICAgICAgICAgLy8gICBtYWRlLiBOb3RlIHRoYXQgZm9yIGNvbnRpZ3VvdXMgcmVtb3ZhbCBhbnl3aGVyZSBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGxpc3QsIHRoZSBoZWFkIGFuZCB0YWlscyB3b3VsZCBhZHZhbmNlIGZyb20gZWl0aGVyIGVuZCBhbmRcbiAgICAgICAgICAgICAgICAvLyAgIHBhc3MgZWFjaCBvdGhlciBiZWZvcmUgd2UgZ2V0IHRvIHRoaXMgY2FzZSBhbmQgcmVtb3ZhbHNcbiAgICAgICAgICAgICAgICAvLyAgIHdvdWxkIGJlIGhhbmRsZWQgaW4gdGhlIGZpbmFsIHdoaWxlIGxvb3Agd2l0aG91dCBuZWVkaW5nIHRvXG4gICAgICAgICAgICAgICAgLy8gICBnZW5lcmF0ZSB0aGUgbWFwLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBUaGUga2V5IGF0IGBvbGRUYWlsYCB3YXMgcmVtb3ZlZCAobm8gbG9uZ2VyXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gICBgbmV3S2V5VG9JbmRleE1hcGApLCBzbyByZW1vdmUgdGhhdCBwYXJ0IGZyb20gdGhlIERPTSBhbmRcbiAgICAgICAgICAgICAgICAvLyAgIGFkdmFuY2UganVzdCB0aGUgYG9sZFRhaWxgIHBvaW50ZXIuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9sZEhlYWQgdiAgICAgICAgICAgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIDIsIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsICAsICAsICAsICAsICAsIDZdIDwtIDUgbm90IGluIG5ldyBtYXA7IHJlbW92ZVxuICAgICAgICAgICAgICAgIC8vICAgNSBhbmQgbmV3S2V5czogIFswLCAyLCAxLCA0LCAzLCA3LCA2XSAgICBhZHZhbmNlIG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld0hlYWQgXiAgICAgICAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIE9uY2UgaGVhZCBhbmQgdGFpbCBjYW5ub3QgbW92ZSwgYW55IG1pc21hdGNoZXMgYXJlIGR1ZSB0b1xuICAgICAgICAgICAgICAgIC8vIGVpdGhlciBuZXcgb3JcbiAgICAgICAgICAgICAgICAvLyAgIG1vdmVkIGl0ZW1zOyBpZiBhIG5ldyBrZXkgaXMgaW4gdGhlIHByZXZpb3VzIFwib2xkIGtleSB0b1xuICAgICAgICAgICAgICAgIC8vICAgb2xkIGluZGV4XCIgbWFwLCBtb3ZlIHRoZSBvbGQgcGFydCB0byB0aGUgbmV3IGxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIC8vICAgb3RoZXJ3aXNlIGNyZWF0ZSBhbmQgaW5zZXJ0IGEgbmV3IHBhcnQuIE5vdGUgdGhhdCB3aGVuXG4gICAgICAgICAgICAgICAgLy8gICBtb3ZpbmcgYW4gb2xkIHBhcnQgd2UgbnVsbCBpdHMgcG9zaXRpb24gaW4gdGhlIG9sZFBhcnRzXG4gICAgICAgICAgICAgICAgLy8gICBhcnJheSBpZiBpdCBsaWVzIGJldHdlZW4gdGhlIGhlYWQgYW5kIHRhaWwgc28gd2Uga25vdyB0b1xuICAgICAgICAgICAgICAgIC8vICAgc2tpcCBpdCB3aGVuIHRoZSBwb2ludGVycyBnZXQgdGhlcmUuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEV4YW1wbGUgYmVsb3c6IG5laXRoZXIgaGVhZCBub3IgdGFpbCBtYXRjaCwgYW5kIG5laXRoZXJcbiAgICAgICAgICAgICAgICAvLyB3ZXJlIHJlbW92ZWQ7XG4gICAgICAgICAgICAgICAgLy8gICBzbyBmaW5kIHRoZSBgbmV3SGVhZGAga2V5IGluIHRoZSBgb2xkS2V5VG9JbmRleE1hcGAsIGFuZFxuICAgICAgICAgICAgICAgIC8vICAgbW92ZSB0aGF0IG9sZCBwYXJ0J3MgRE9NIGludG8gdGhlIG5leHQgaGVhZCBwb3NpdGlvblxuICAgICAgICAgICAgICAgIC8vICAgKGJlZm9yZSBgb2xkUGFydHNbb2xkSGVhZF1gKS4gTGFzdCwgbnVsbCB0aGUgcGFydCBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGBvbGRQYXJ0YCBhcnJheSBzaW5jZSBpdCB3YXMgc29tZXdoZXJlIGluIHRoZSByZW1haW5pbmdcbiAgICAgICAgICAgICAgICAvLyAgIG9sZFBhcnRzIHN0aWxsIHRvIGJlIHNjYW5uZWQgKGJldHdlZW4gdGhlIGhlYWQgYW5kIHRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIHBvaW50ZXJzKSBzbyB0aGF0IHdlIGtub3cgdG8gc2tpcCB0aGF0IG9sZCBwYXJ0IG9uIGZ1dHVyZVxuICAgICAgICAgICAgICAgIC8vICAgaXRlcmF0aW9ucy5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2xkSGVhZCB2ICAgICAgICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgLSwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgMiwgICwgICwgICwgICwgNl0gPC0gc3R1Y2s7IHVwZGF0ZSAmIG1vdmUgMlxuICAgICAgICAgICAgICAgIC8vICAgaW50byBwbGFjZSBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgIGFuZCBhZHZhbmNlXG4gICAgICAgICAgICAgICAgLy8gICBuZXdIZWFkXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdIZWFkIF4gICAgICAgICAgIF4gbmV3VGFpbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBOb3RlIHRoYXQgZm9yIG1vdmVzL2luc2VydGlvbnMgbGlrZSB0aGUgb25lIGFib3ZlLCBhIHBhcnRcbiAgICAgICAgICAgICAgICAvLyBpbnNlcnRlZCBhdFxuICAgICAgICAgICAgICAgIC8vICAgdGhlIGhlYWQgcG9pbnRlciBpcyBpbnNlcnRlZCBiZWZvcmUgdGhlIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAvLyAgIGBvbGRQYXJ0c1tvbGRIZWFkXWAsIGFuZCBhIHBhcnQgaW5zZXJ0ZWQgYXQgdGhlIHRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIHBvaW50ZXIgaXMgaW5zZXJ0ZWQgYmVmb3JlIGBuZXdQYXJ0c1tuZXdUYWlsKzFdYC4gVGhlXG4gICAgICAgICAgICAgICAgLy8gICBzZWVtaW5nIGFzeW1tZXRyeSBsaWVzIGluIHRoZSBmYWN0IHRoYXQgbmV3IHBhcnRzIGFyZSBtb3ZlZFxuICAgICAgICAgICAgICAgIC8vICAgaW50byBwbGFjZSBvdXRzaWRlIGluLCBzbyB0byB0aGUgcmlnaHQgb2YgdGhlIGhlYWQgcG9pbnRlclxuICAgICAgICAgICAgICAgIC8vICAgYXJlIG9sZCBwYXJ0cywgYW5kIHRvIHRoZSByaWdodCBvZiB0aGUgdGFpbCBwb2ludGVyIGFyZSBuZXdcbiAgICAgICAgICAgICAgICAvLyAgIHBhcnRzLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBXZSBhbHdheXMgcmVzdGFydCBiYWNrIGZyb20gdGhlIHRvcCBvZiB0aGUgYWxnb3JpdGhtLFxuICAgICAgICAgICAgICAgIC8vIGFsbG93aW5nIG1hdGNoaW5nXG4gICAgICAgICAgICAgICAgLy8gICBhbmQgc2ltcGxlIHVwZGF0ZXMgaW4gcGxhY2UgdG8gY29udGludWUuLi5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzogdGhlIGhlYWQgcG9pbnRlcnMgb25jZSBhZ2FpbiBtYXRjaCwgc29cbiAgICAgICAgICAgICAgICAvLyBzaW1wbHkgdXBkYXRlXG4gICAgICAgICAgICAgICAgLy8gICBwYXJ0IDEgYW5kIHJlY29yZCBpdCBpbiB0aGUgYG5ld1BhcnRzYCBhcnJheS4gIExhc3QsXG4gICAgICAgICAgICAgICAgLy8gICBhZHZhbmNlIGJvdGggaGVhZCBwb2ludGVycy5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2xkSGVhZCB2ICAgICAgICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgLSwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgMiwgMSwgICwgICwgICwgNl0gPC0gaGVhZHMgbWF0Y2hlZDsgdXBkYXRlIDFcbiAgICAgICAgICAgICAgICAvLyAgIGFuZCBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgIGFkdmFuY2UgYm90aCBvbGRIZWFkXG4gICAgICAgICAgICAgICAgLy8gICAmIG5ld0hlYWRcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIG5ld0hlYWQgXiAgICAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEFzIG1lbnRpb25lZCBhYm92ZSwgaXRlbXMgdGhhdCB3ZXJlIG1vdmVkIGFzIGEgcmVzdWx0IG9mXG4gICAgICAgICAgICAgICAgLy8gYmVpbmcgc3R1Y2tcbiAgICAgICAgICAgICAgICAvLyAgICh0aGUgZmluYWwgZWxzZSBjbGF1c2UgaW4gdGhlIGNvZGUgYmVsb3cpIGFyZSBtYXJrZWQgd2l0aFxuICAgICAgICAgICAgICAgIC8vICAgbnVsbCwgc28gd2UgYWx3YXlzIGFkdmFuY2Ugb2xkIHBvaW50ZXJzIG92ZXIgdGhlc2Ugc28gd2UncmVcbiAgICAgICAgICAgICAgICAvLyAgIGNvbXBhcmluZyB0aGUgbmV4dCBhY3R1YWwgb2xkIHZhbHVlIG9uIGVpdGhlciBlbmQuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEV4YW1wbGUgYmVsb3c6IGBvbGRIZWFkYCBpcyBudWxsIChhbHJlYWR5IHBsYWNlZCBpblxuICAgICAgICAgICAgICAgIC8vIG5ld1BhcnRzKSwgc29cbiAgICAgICAgICAgICAgICAvLyAgIGFkdmFuY2UgYG9sZEhlYWRgLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBvbGRIZWFkIHYgICAgIHYgb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgb2xkS2V5czogIFswLCAxLCAtLCAzLCA0LCA1LCA2XSAvLyBvbGQgaGVhZCBhbHJlYWR5IHVzZWQ7XG4gICAgICAgICAgICAgICAgLy8gICBhZHZhbmNlIG5ld1BhcnRzOiBbMCwgMiwgMSwgICwgICwgICwgNl0gLy8gb2xkSGVhZCBuZXdLZXlzOlxuICAgICAgICAgICAgICAgIC8vICAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBuZXdIZWFkIF4gICAgIF4gbmV3VGFpbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBOb3RlIGl0J3Mgbm90IGNyaXRpY2FsIHRvIG1hcmsgb2xkIHBhcnRzIGFzIG51bGwgd2hlbiB0aGV5XG4gICAgICAgICAgICAgICAgLy8gYXJlIG1vdmVkXG4gICAgICAgICAgICAgICAgLy8gICBmcm9tIGhlYWQgdG8gdGFpbCBvciB0YWlsIHRvIGhlYWQsIHNpbmNlIHRoZXkgd2lsbCBiZVxuICAgICAgICAgICAgICAgIC8vICAgb3V0c2lkZSB0aGUgcG9pbnRlciByYW5nZSBhbmQgbmV2ZXIgdmlzaXRlZCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzogSGVyZSB0aGUgb2xkIHRhaWwga2V5IG1hdGNoZXMgdGhlIG5ldyBoZWFkXG4gICAgICAgICAgICAgICAgLy8ga2V5LCBzb1xuICAgICAgICAgICAgICAgIC8vICAgdGhlIHBhcnQgYXQgdGhlIGBvbGRUYWlsYCBwb3NpdGlvbiBhbmQgbW92ZSBpdHMgRE9NIHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgbmV3IGhlYWQgcG9zaXRpb24gKGJlZm9yZSBgb2xkUGFydHNbb2xkSGVhZF1gKS4gTGFzdCxcbiAgICAgICAgICAgICAgICAvLyAgIGFkdmFuY2UgYG9sZFRhaWxgIGFuZCBgbmV3SGVhZGAgcG9pbnRlcnMuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIG9sZEhlYWQgdiAgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIC0sIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsIDIsIDEsIDQsICAsICAsIDZdIDwtIG9sZCB0YWlsIG1hdGNoZXMgbmV3XG4gICAgICAgICAgICAgICAgLy8gICBoZWFkOiB1cGRhdGUgbmV3S2V5czogIFswLCAyLCAxLCA0LCAzLCA3LCA2XSAgICYgbW92ZSA0LFxuICAgICAgICAgICAgICAgIC8vICAgYWR2YW5jZSBvbGRUYWlsICYgbmV3SGVhZFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgbmV3SGVhZCBeICAgICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzogT2xkIGFuZCBuZXcgaGVhZCBrZXlzIG1hdGNoLCBzbyB1cGRhdGUgdGhlXG4gICAgICAgICAgICAgICAgLy8gb2xkIGhlYWRcbiAgICAgICAgICAgICAgICAvLyAgIHBhcnQgaW4gcGxhY2UsIGFuZCBhZHZhbmNlIHRoZSBgb2xkSGVhZGAgYW5kIGBuZXdIZWFkYFxuICAgICAgICAgICAgICAgIC8vICAgcG9pbnRlcnMuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIG9sZEhlYWQgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIC0sIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsIDIsIDEsIDQsIDMsICAgLDZdIDwtIGhlYWRzIG1hdGNoOiB1cGRhdGUgM1xuICAgICAgICAgICAgICAgIC8vICAgYW5kIGFkdmFuY2UgbmV3S2V5czogIFswLCAyLCAxLCA0LCAzLCA3LCA2XSAgICBvbGRIZWFkICZcbiAgICAgICAgICAgICAgICAvLyAgIG5ld0hlYWRcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgIG5ld0hlYWQgXiAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIE9uY2UgdGhlIG5ldyBvciBvbGQgcG9pbnRlcnMgbW92ZSBwYXN0IGVhY2ggb3RoZXIgdGhlbiBhbGxcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlXG4gICAgICAgICAgICAgICAgLy8gICBsZWZ0IGlzIGFkZGl0aW9ucyAoaWYgb2xkIGxpc3QgZXhoYXVzdGVkKSBvciByZW1vdmFscyAoaWZcbiAgICAgICAgICAgICAgICAvLyAgIG5ldyBsaXN0IGV4aGF1c3RlZCkuIFRob3NlIGFyZSBoYW5kbGVkIGluIHRoZSBmaW5hbCB3aGlsZVxuICAgICAgICAgICAgICAgIC8vICAgbG9vcHMgYXQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzogYG9sZEhlYWRgIGV4Y2VlZGVkIGBvbGRUYWlsYCwgc28gd2UncmUgZG9uZVxuICAgICAgICAgICAgICAgIC8vIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgLy8gICBtYWluIGxvb3AuICBDcmVhdGUgdGhlIHJlbWFpbmluZyBwYXJ0IGFuZCBpbnNlcnQgaXQgYXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gICBuZXcgaGVhZCBwb3NpdGlvbiwgYW5kIHRoZSB1cGRhdGUgaXMgY29tcGxldGUuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAob2xkSGVhZCA+IG9sZFRhaWwpXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIC0sIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsIDIsIDEsIDQsIDMsIDcgLDZdIDwtIGNyZWF0ZSBhbmQgaW5zZXJ0IDdcbiAgICAgICAgICAgICAgICAvLyAgIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWQgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIE5vdGUgdGhhdCB0aGUgb3JkZXIgb2YgdGhlIGlmL2Vsc2UgY2xhdXNlcyBpcyBub3QgaW1wb3J0YW50XG4gICAgICAgICAgICAgICAgLy8gdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gICBhbGdvcml0aG0sIGFzIGxvbmcgYXMgdGhlIG51bGwgY2hlY2tzIGNvbWUgZmlyc3QgKHRvIGVuc3VyZVxuICAgICAgICAgICAgICAgIC8vICAgd2UncmUgYWx3YXlzIHdvcmtpbmcgb24gdmFsaWQgb2xkIHBhcnRzKSBhbmQgdGhhdCB0aGUgZmluYWxcbiAgICAgICAgICAgICAgICAvLyAgIGVsc2UgY2xhdXNlIGNvbWVzIGxhc3QgKHNpbmNlIHRoYXQncyB3aGVyZSB0aGUgZXhwZW5zaXZlXG4gICAgICAgICAgICAgICAgLy8gICBtb3ZlcyBvY2N1cikuIFRoZSBvcmRlciBvZiByZW1haW5pbmcgY2xhdXNlcyBpcyBpcyBqdXN0IGFcbiAgICAgICAgICAgICAgICAvLyAgIHNpbXBsZSBndWVzcyBhdCB3aGljaCBjYXNlcyB3aWxsIGJlIG1vc3QgY29tbW9uLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBUT0RPKGtzY2hhYWYpIE5vdGUsIHdlIGNvdWxkIGNhbGN1bGF0ZSB0aGUgbG9uZ2VzdFxuICAgICAgICAgICAgICAgIC8vIGluY3JlYXNpbmdcbiAgICAgICAgICAgICAgICAvLyAgIHN1YnNlcXVlbmNlIChMSVMpIG9mIG9sZCBpdGVtcyBpbiBuZXcgcG9zaXRpb24sIGFuZCBvbmx5XG4gICAgICAgICAgICAgICAgLy8gICBtb3ZlIHRob3NlIG5vdCBpbiB0aGUgTElTIHNldC4gSG93ZXZlciB0aGF0IGNvc3RzIE8obmxvZ24pXG4gICAgICAgICAgICAgICAgLy8gICB0aW1lIGFuZCBhZGRzIGEgYml0IG1vcmUgY29kZSwgYW5kIG9ubHkgaGVscHMgbWFrZSByYXJlXG4gICAgICAgICAgICAgICAgLy8gICB0eXBlcyBvZiBtdXRhdGlvbnMgcmVxdWlyZSBmZXdlciBtb3Zlcy4gVGhlIGFib3ZlIGhhbmRsZXNcbiAgICAgICAgICAgICAgICAvLyAgIHJlbW92ZXMsIGFkZHMsIHJldmVyc2FsLCBzd2FwcywgYW5kIHNpbmdsZSBtb3ZlcyBvZlxuICAgICAgICAgICAgICAgIC8vICAgY29udGlndW91cyBpdGVtcyBpbiBsaW5lYXIgdGltZSwgaW4gdGhlIG1pbmltdW0gbnVtYmVyIG9mXG4gICAgICAgICAgICAgICAgLy8gICBtb3Zlcy4gQXMgdGhlIG51bWJlciBvZiBtdWx0aXBsZSBtb3ZlcyB3aGVyZSBMSVMgbWlnaHQgaGVscFxuICAgICAgICAgICAgICAgIC8vICAgYXBwcm9hY2hlcyBhIHJhbmRvbSBzaHVmZmxlLCB0aGUgTElTIG9wdGltaXphdGlvbiBiZWNvbWVzXG4gICAgICAgICAgICAgICAgLy8gICBsZXNzIGhlbHBmdWwsIHNvIGl0IHNlZW1zIG5vdCB3b3J0aCB0aGUgY29kZSBhdCB0aGlzIHBvaW50LlxuICAgICAgICAgICAgICAgIC8vICAgQ291bGQgcmVjb25zaWRlciBpZiBhIGNvbXBlbGxpbmcgY2FzZSBhcmlzZXMuXG5cbiAgICAgICAgICAgICAgICB3aGlsZSAob2xkSGVhZCA8PSBvbGRUYWlsICYmIG5ld0hlYWQgPD0gbmV3VGFpbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKG9sZFBhcnRzW29sZEhlYWRdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGBudWxsYCBtZWFucyBvbGQgcGFydCBhdCBoZWFkIGhhcyBhbHJlYWR5IGJlZW4gdXNlZFxuICAgICAgICAgICAgICAgICAgICAvLyBiZWxvdzsgc2tpcFxuICAgICAgICAgICAgICAgICAgICBvbGRIZWFkKys7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9sZFBhcnRzW29sZFRhaWxdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGBudWxsYCBtZWFucyBvbGQgcGFydCBhdCB0YWlsIGhhcyBhbHJlYWR5IGJlZW4gdXNlZFxuICAgICAgICAgICAgICAgICAgICAvLyBiZWxvdzsgc2tpcFxuICAgICAgICAgICAgICAgICAgICBvbGRUYWlsLS07XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9sZEtleXNbb2xkSGVhZF0gPT09IG5ld0tleXNbbmV3SGVhZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT2xkIGhlYWQgbWF0Y2hlcyBuZXcgaGVhZDsgdXBkYXRlIGluIHBsYWNlXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhcnRzW25ld0hlYWRdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcnQob2xkUGFydHNbb2xkSGVhZF0hLCBuZXdWYWx1ZXNbbmV3SGVhZF0pO1xuICAgICAgICAgICAgICAgICAgICBvbGRIZWFkKys7XG4gICAgICAgICAgICAgICAgICAgIG5ld0hlYWQrKztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkS2V5c1tvbGRUYWlsXSA9PT0gbmV3S2V5c1tuZXdUYWlsXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbGQgdGFpbCBtYXRjaGVzIG5ldyB0YWlsOyB1cGRhdGUgaW4gcGxhY2VcbiAgICAgICAgICAgICAgICAgICAgbmV3UGFydHNbbmV3VGFpbF0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFydChvbGRQYXJ0c1tvbGRUYWlsXSEsIG5ld1ZhbHVlc1tuZXdUYWlsXSk7XG4gICAgICAgICAgICAgICAgICAgIG9sZFRhaWwtLTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFpbC0tO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRLZXlzW29sZEhlYWRdID09PSBuZXdLZXlzW25ld1RhaWxdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9sZCBoZWFkIG1hdGNoZXMgbmV3IHRhaWw7IHVwZGF0ZSBhbmQgbW92ZSB0byBuZXcgdGFpbFxuICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdUYWlsXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJ0KG9sZFBhcnRzW29sZEhlYWRdISwgbmV3VmFsdWVzW25ld1RhaWxdKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UGFydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclBhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRQYXJ0c1tvbGRIZWFkXSEsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdUYWlsICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICBvbGRIZWFkKys7XG4gICAgICAgICAgICAgICAgICAgIG5ld1RhaWwtLTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkS2V5c1tvbGRUYWlsXSA9PT0gbmV3S2V5c1tuZXdIZWFkXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbGQgdGFpbCBtYXRjaGVzIG5ldyBoZWFkOyB1cGRhdGUgYW5kIG1vdmUgdG8gbmV3IGhlYWRcbiAgICAgICAgICAgICAgICAgICAgbmV3UGFydHNbbmV3SGVhZF0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFydChvbGRQYXJ0c1tvbGRUYWlsXSEsIG5ld1ZhbHVlc1tuZXdIZWFkXSk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydFBhcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJQYXJ0LCBvbGRQYXJ0c1tvbGRUYWlsXSEsIG9sZFBhcnRzW29sZEhlYWRdISk7XG4gICAgICAgICAgICAgICAgICAgIG9sZFRhaWwtLTtcbiAgICAgICAgICAgICAgICAgICAgbmV3SGVhZCsrO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0tleVRvSW5kZXhNYXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIExhemlseSBnZW5lcmF0ZSBrZXktdG8taW5kZXggbWFwcywgdXNlZCBmb3IgcmVtb3ZhbHMgJlxuICAgICAgICAgICAgICAgICAgICAgIC8vIG1vdmVzIGJlbG93XG4gICAgICAgICAgICAgICAgICAgICAgbmV3S2V5VG9JbmRleE1hcCA9IGdlbmVyYXRlTWFwKG5ld0tleXMsIG5ld0hlYWQsIG5ld1RhaWwpO1xuICAgICAgICAgICAgICAgICAgICAgIG9sZEtleVRvSW5kZXhNYXAgPSBnZW5lcmF0ZU1hcChvbGRLZXlzLCBvbGRIZWFkLCBvbGRUYWlsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld0tleVRvSW5kZXhNYXAuaGFzKG9sZEtleXNbb2xkSGVhZF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gT2xkIGhlYWQgaXMgbm8gbG9uZ2VyIGluIG5ldyBsaXN0OyByZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQYXJ0KG9sZFBhcnRzW29sZEhlYWRdISk7XG4gICAgICAgICAgICAgICAgICAgICAgb2xkSGVhZCsrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFuZXdLZXlUb0luZGV4TWFwLmhhcyhvbGRLZXlzW29sZFRhaWxdKSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIE9sZCB0YWlsIGlzIG5vIGxvbmdlciBpbiBuZXcgbGlzdDsgcmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUGFydChvbGRQYXJ0c1tvbGRUYWlsXSEpO1xuICAgICAgICAgICAgICAgICAgICAgIG9sZFRhaWwtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBBbnkgbWlzbWF0Y2hlcyBhdCB0aGlzIHBvaW50IGFyZSBkdWUgdG8gYWRkaXRpb25zIG9yXG4gICAgICAgICAgICAgICAgICAgICAgLy8gbW92ZXM7IHNlZSBpZiB3ZSBoYXZlIGFuIG9sZCBwYXJ0IHdlIGNhbiByZXVzZSBhbmQgbW92ZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGludG8gcGxhY2VcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRJbmRleCA9IG9sZEtleVRvSW5kZXhNYXAuZ2V0KG5ld0tleXNbbmV3SGVhZF0pO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZFBhcnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRJbmRleCAhPT0gdW5kZWZpbmVkID8gb2xkUGFydHNbb2xkSW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkUGFydCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gb2xkIHBhcnQgZm9yIHRoaXMgdmFsdWU7IGNyZWF0ZSBhIG5ldyBvbmUgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnNlcnQgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BhcnQgPSBjcmVhdGVBbmRJbnNlcnRQYXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclBhcnQsIG9sZFBhcnRzW29sZEhlYWRdISk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJ0KG5ld1BhcnQsIG5ld1ZhbHVlc1tuZXdIZWFkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdIZWFkXSA9IG5ld1BhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldXNlIG9sZCBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdIZWFkXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFydChvbGRQYXJ0LCBuZXdWYWx1ZXNbbmV3SGVhZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UGFydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJQYXJ0LCBvbGRQYXJ0LCBvbGRQYXJ0c1tvbGRIZWFkXSEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBtYXJrcyB0aGUgb2xkIHBhcnQgYXMgaGF2aW5nIGJlZW4gdXNlZCwgc28gdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgd2lsbCBiZSBza2lwcGVkIGluIHRoZSBmaXJzdCB0d28gY2hlY2tzIGFib3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRQYXJ0c1tvbGRJbmRleCBhcyBudW1iZXJdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCBwYXJ0cyBmb3IgYW55IHJlbWFpbmluZyBuZXcgdmFsdWVzXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld0hlYWQgPD0gbmV3VGFpbCkge1xuICAgICAgICAgICAgICAgICAgLy8gRm9yIGFsbCByZW1haW5pbmcgYWRkaXRpb25zLCB3ZSBpbnNlcnQgYmVmb3JlIGxhc3QgbmV3XG4gICAgICAgICAgICAgICAgICAvLyB0YWlsLCBzaW5jZSBvbGQgcG9pbnRlcnMgYXJlIG5vIGxvbmdlciB2YWxpZFxuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGFydCA9IGNyZWF0ZUFuZEluc2VydFBhcnQoXG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyUGFydCwgbmV3UGFydHNbbmV3VGFpbCArIDFdISk7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVQYXJ0KG5ld1BhcnQsIG5ld1ZhbHVlc1tuZXdIZWFkXSk7XG4gICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdIZWFkKytdID0gbmV3UGFydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFueSByZW1haW5pbmcgdW51c2VkIG9sZCBwYXJ0c1xuICAgICAgICAgICAgICAgIHdoaWxlIChvbGRIZWFkIDw9IG9sZFRhaWwpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZFBhcnQgPSBvbGRQYXJ0c1tvbGRIZWFkKytdO1xuICAgICAgICAgICAgICAgICAgaWYgKG9sZFBhcnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUGFydChvbGRQYXJ0KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBvcmRlciBvZiBuZXcgcGFydHMgZm9yIG5leHQgcm91bmRcbiAgICAgICAgICAgICAgICBwYXJ0TGlzdENhY2hlLnNldChjb250YWluZXJQYXJ0LCBuZXdQYXJ0cyk7XG4gICAgICAgICAgICAgICAga2V5TGlzdENhY2hlLnNldChjb250YWluZXJQYXJ0LCBuZXdLZXlzKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pIGFzXG4gICAgPFQ+KGl0ZW1zOiBJdGVyYWJsZTxUPixcbiAgICAgICAga2V5Rm5PclRlbXBsYXRlOiBLZXlGbjxUPnxJdGVtVGVtcGxhdGU8VD4sXG4gICAgICAgIHRlbXBsYXRlPzogSXRlbVRlbXBsYXRlPFQ+KSA9PiBEaXJlY3RpdmVGbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGVQYXJ0LCBkaXJlY3RpdmUsIFBhcnQsIFByb3BlcnR5UGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlSW5mbyB7XG4gIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbi8qKlxuICogU3RvcmVzIHRoZSBTdHlsZUluZm8gb2JqZWN0IGFwcGxpZWQgdG8gYSBnaXZlbiBBdHRyaWJ1dGVQYXJ0LlxuICogVXNlZCB0byB1bnNldCBleGlzdGluZyB2YWx1ZXMgd2hlbiBhIG5ldyBTdHlsZUluZm8gb2JqZWN0IGlzIGFwcGxpZWQuXG4gKi9cbmNvbnN0IHN0eWxlTWFwQ2FjaGUgPSBuZXcgV2Vha01hcDxBdHRyaWJ1dGVQYXJ0LCBTdHlsZUluZm8+KCk7XG5cbi8qKlxuICogU3RvcmVzIEF0dHJpYnV0ZVBhcnRzIHRoYXQgaGF2ZSBoYWQgc3RhdGljIHN0eWxlcyBhcHBsaWVkIChlLmcuIGBoZWlnaHQ6IDA7YFxuICogaW4gc3R5bGU9XCJoZWlnaHQ6IDA7ICR7c3R5bGVNYXAoKX1cIikuIFN0YXRpYyBzdHlsZXMgYXJlIGFwcGxpZWQgb25seSB0aGVcbiAqIGZpcnN0IHRpbWUgdGhlIGRpcmVjdGl2ZSBpcyBydW4gb24gYSBwYXJ0LlxuICovXG4vLyBOb3RlLCBjb3VsZCBiZSBhIFdlYWtTZXQsIGJ1dCBwcmVmZXIgbm90IHJlcXVpcmluZyB0aGlzIHBvbHlmaWxsLlxuY29uc3Qgc3R5bGVNYXBTdGF0aWNzID0gbmV3IFdlYWtNYXA8QXR0cmlidXRlUGFydCwgdHJ1ZT4oKTtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFwcGxpZXMgQ1NTIHByb3BlcnRpZXMgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBgc3R5bGVNYXBgIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGBzdHlsZWAgYXR0cmlidXRlIGFuZCBtdXN0IGJlIHRoZSBvbmx5XG4gKiBleHByZXNzaW9uIGluIHRoZSBhdHRyaWJ1dGUuIEl0IHRha2VzIHRoZSBwcm9wZXJ0eSBuYW1lcyBpbiB0aGUgYHN0eWxlSW5mb2BcbiAqIG9iamVjdCBhbmQgYWRkcyB0aGUgcHJvcGVydHkgdmFsdWVzIGFzIENTUyBwcm9wZXJ0ZXMuIFByb3BlcnR5IG5hbWVzIHdpdGhcbiAqIGRhc2hlcyAoYC1gKSBhcmUgYXNzdW1lZCB0byBiZSB2YWxpZCBDU1MgcHJvcGVydHkgbmFtZXMgYW5kIHNldCBvbiB0aGVcbiAqIGVsZW1lbnQncyBzdHlsZSBvYmplY3QgdXNpbmcgYHNldFByb3BlcnR5KClgLiBOYW1lcyB3aXRob3V0IGRhc2hlcyBhcmVcbiAqIGFzc3VtZWQgdG8gYmUgY2FtZWxDYXNlZCBKYXZhU2NyaXB0IHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlIGVsZW1lbnQnc1xuICogc3R5bGUgb2JqZWN0IHVzaW5nIHByb3BlcnR5IGFzc2lnbm1lbnQsIGFsbG93aW5nIHRoZSBzdHlsZSBvYmplY3QgdG9cbiAqIHRyYW5zbGF0ZSBKYXZhU2NyaXB0LXN0eWxlIG5hbWVzIHRvIENTUyBwcm9wZXJ0eSBuYW1lcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSBgc3R5bGVNYXAoe2JhY2tncm91bmRDb2xvcjogJ3JlZCcsICdib3JkZXItdG9wJzogJzVweCcsICctLXNpemUnOlxuICogJzAnfSlgIHNldHMgdGhlIGBiYWNrZ3JvdW5kLWNvbG9yYCwgYGJvcmRlci10b3BgIGFuZCBgLS1zaXplYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSBzdHlsZUluZm8ge1N0eWxlSW5mb31cbiAqL1xuZXhwb3J0IGNvbnN0IHN0eWxlTWFwID0gZGlyZWN0aXZlKChzdHlsZUluZm86IFN0eWxlSW5mbykgPT4gKHBhcnQ6IFBhcnQpID0+IHtcbiAgaWYgKCEocGFydCBpbnN0YW5jZW9mIEF0dHJpYnV0ZVBhcnQpIHx8IChwYXJ0IGluc3RhbmNlb2YgUHJvcGVydHlQYXJ0KSB8fFxuICAgICAgcGFydC5jb21taXR0ZXIubmFtZSAhPT0gJ3N0eWxlJyB8fCBwYXJ0LmNvbW1pdHRlci5wYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIGBzdHlsZU1hcGAgZGlyZWN0aXZlIG11c3QgYmUgdXNlZCBpbiB0aGUgc3R5bGUgYXR0cmlidXRlICcgK1xuICAgICAgICAnYW5kIG11c3QgYmUgdGhlIG9ubHkgcGFydCBpbiB0aGUgYXR0cmlidXRlLicpO1xuICB9XG5cbiAgLy8gSGFuZGxlIHN0YXRpYyBzdHlsZXMgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIGEgUGFydFxuICBpZiAoIXN0eWxlTWFwU3RhdGljcy5oYXMocGFydCkpIHtcbiAgICAocGFydC5jb21taXR0ZXIuZWxlbWVudCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgIHBhcnQuY29tbWl0dGVyLnN0cmluZ3Muam9pbignICcpO1xuICAgIHN0eWxlTWFwU3RhdGljcy5zZXQocGFydCwgdHJ1ZSk7XG4gIH1cbiAgY29uc3Qgc3R5bGUgPSAocGFydC5jb21taXR0ZXIuZWxlbWVudCBhcyBIVE1MRWxlbWVudCkuc3R5bGU7XG5cbiAgLy8gUmVtb3ZlIG9sZCBwcm9wZXJ0aWVzIHRoYXQgbm8gbG9uZ2VyIGV4aXN0IGluIHN0eWxlSW5mb1xuICBjb25zdCBvbGRJbmZvID0gc3R5bGVNYXBDYWNoZS5nZXQocGFydCk7XG4gIGZvciAoY29uc3QgbmFtZSBpbiBvbGRJbmZvKSB7XG4gICAgaWYgKCEobmFtZSBpbiBzdHlsZUluZm8pKSB7XG4gICAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgKHN0eWxlIGFzIGFueSlbbmFtZV0gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIG9yIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZUluZm8pIHtcbiAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAoc3R5bGUgYXMgYW55KVtuYW1lXSA9IHN0eWxlSW5mb1tuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgc3R5bGVJbmZvW25hbWVdKTtcbiAgICB9XG4gIH1cbiAgc3R5bGVNYXBDYWNoZS5zZXQocGFydCwgc3R5bGVJbmZvKTtcbn0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge2lzUHJpbWl0aXZlfSBmcm9tICcuLi9saWIvcGFydHMuanMnO1xuaW1wb3J0IHtkaXJlY3RpdmUsIE5vZGVQYXJ0LCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbmludGVyZmFjZSBQcmV2aW91c1ZhbHVlIHtcbiAgdmFsdWU6IHVua25vd247XG4gIGZyYWdtZW50OiBEb2N1bWVudEZyYWdtZW50O1xufVxuXG4vLyBGb3IgZWFjaCBwYXJ0LCByZW1lbWJlciB0aGUgdmFsdWUgdGhhdCB3YXMgbGFzdCByZW5kZXJlZCB0byB0aGUgcGFydCBieSB0aGVcbi8vIHVuc2FmZUhUTUwgZGlyZWN0aXZlLCBhbmQgdGhlIERvY3VtZW50RnJhZ21lbnQgdGhhdCB3YXMgbGFzdCBzZXQgYXMgYSB2YWx1ZS5cbi8vIFRoZSBEb2N1bWVudEZyYWdtZW50IGlzIHVzZWQgYXMgYSB1bmlxdWUga2V5IHRvIGNoZWNrIGlmIHRoZSBsYXN0IHZhbHVlXG4vLyByZW5kZXJlZCB0byB0aGUgcGFydCB3YXMgd2l0aCB1bnNhZmVIVE1MLiBJZiBub3QsIHdlJ2xsIGFsd2F5cyByZS1yZW5kZXIgdGhlXG4vLyB2YWx1ZSBwYXNzZWQgdG8gdW5zYWZlSFRNTC5cbmNvbnN0IHByZXZpb3VzVmFsdWVzID0gbmV3IFdlYWtNYXA8Tm9kZVBhcnQsIFByZXZpb3VzVmFsdWU+KCk7XG5cbi8qKlxuICogUmVuZGVycyB0aGUgcmVzdWx0IGFzIEhUTUwsIHJhdGhlciB0aGFuIHRleHQuXG4gKlxuICogTm90ZSwgdGhpcyBpcyB1bnNhZmUgdG8gdXNlIHdpdGggYW55IHVzZXItcHJvdmlkZWQgaW5wdXQgdGhhdCBoYXNuJ3QgYmVlblxuICogc2FuaXRpemVkIG9yIGVzY2FwZWQsIGFzIGl0IG1heSBsZWFkIHRvIGNyb3NzLXNpdGUtc2NyaXB0aW5nXG4gKiB2dWxuZXJhYmlsaXRpZXMuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNhZmVIVE1MID0gZGlyZWN0aXZlKCh2YWx1ZTogdW5rbm93bikgPT4gKHBhcnQ6IFBhcnQpOiB2b2lkID0+IHtcbiAgaWYgKCEocGFydCBpbnN0YW5jZW9mIE5vZGVQYXJ0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5zYWZlSFRNTCBjYW4gb25seSBiZSB1c2VkIGluIHRleHQgYmluZGluZ3MnKTtcbiAgfVxuXG4gIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1ZhbHVlcy5nZXQocGFydCk7XG5cbiAgaWYgKHByZXZpb3VzVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBpc1ByaW1pdGl2ZSh2YWx1ZSkgJiZcbiAgICAgIHZhbHVlID09PSBwcmV2aW91c1ZhbHVlLnZhbHVlICYmIHBhcnQudmFsdWUgPT09IHByZXZpb3VzVmFsdWUuZnJhZ21lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IHZhbHVlIGFzIHN0cmluZzsgIC8vIGlubmVySFRNTCBjYXN0cyB0byBzdHJpbmcgaW50ZXJuYWxseVxuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gIHBhcnQuc2V0VmFsdWUoZnJhZ21lbnQpO1xuICBwcmV2aW91c1ZhbHVlcy5zZXQocGFydCwge3ZhbHVlLCBmcmFnbWVudH0pO1xufSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7aXNQcmltaXRpdmV9IGZyb20gJy4uL2xpYi9wYXJ0cy5qcyc7XG5pbXBvcnQge2RpcmVjdGl2ZSwgUGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5pbnRlcmZhY2UgQXN5bmNTdGF0ZSB7XG4gIC8qKlxuICAgKiBUaGUgbGFzdCByZW5kZXJlZCBpbmRleCBvZiBhIGNhbGwgdG8gdW50aWwoKS4gQSB2YWx1ZSBvbmx5IHJlbmRlcnMgaWYgaXRzXG4gICAqIGluZGV4IGlzIGxlc3MgdGhhbiB0aGUgYGxhc3RSZW5kZXJlZEluZGV4YC5cbiAgICovXG4gIGxhc3RSZW5kZXJlZEluZGV4PzogbnVtYmVyO1xuXG4gIHZhbHVlczogdW5rbm93bltdO1xufVxuXG5jb25zdCBfc3RhdGUgPSBuZXcgV2Vha01hcDxQYXJ0LCBBc3luY1N0YXRlPigpO1xuXG4vKipcbiAqIFJlbmRlcnMgb25lIG9mIGEgc2VyaWVzIG9mIHZhbHVlcywgaW5jbHVkaW5nIFByb21pc2VzLCB0byBhIFBhcnQuXG4gKlxuICogVmFsdWVzIGFyZSByZW5kZXJlZCBpbiBwcmlvcml0eSBvcmRlciwgd2l0aCB0aGUgZmlyc3QgYXJndW1lbnQgaGF2aW5nIHRoZVxuICogaGlnaGVzdCBwcmlvcml0eSBhbmQgdGhlIGxhc3QgYXJndW1lbnQgaGF2aW5nIHRoZSBsb3dlc3QgcHJpb3JpdHkuIElmIGFcbiAqIHZhbHVlIGlzIGEgUHJvbWlzZSwgbG93LXByaW9yaXR5IHZhbHVlcyB3aWxsIGJlIHJlbmRlcmVkIHVudGlsIGl0IHJlc29sdmVzLlxuICpcbiAqIFRoZSBwcmlvcml0eSBvZiB2YWx1ZXMgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIHBsYWNlaG9sZGVyIGNvbnRlbnQgZm9yIGFzeW5jXG4gKiBkYXRhLiBGb3IgZXhhbXBsZSwgYSBQcm9taXNlIHdpdGggcGVuZGluZyBjb250ZW50IGNhbiBiZSB0aGUgZmlyc3QsXG4gKiBoaWdoZXN0LXByaW9yaXR5LCBhcmd1bWVudCwgYW5kIGEgbm9uX3Byb21pc2UgbG9hZGluZyBpbmRpY2F0b3IgdGVtcGxhdGUgY2FuXG4gKiBiZSB1c2VkIGFzIHRoZSBzZWNvbmQsIGxvd2VyLXByaW9yaXR5LCBhcmd1bWVudC4gVGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdpbGxcbiAqIHJlbmRlciBpbW1lZGlhdGVseSwgYW5kIHRoZSBwcmltYXJ5IGNvbnRlbnQgd2lsbCByZW5kZXIgd2hlbiB0aGUgUHJvbWlzZVxuICogcmVzb2x2ZXMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgY29udGVudCA9IGZldGNoKCcuL2NvbnRlbnQudHh0JykudGhlbihyID0+IHIudGV4dCgpKTtcbiAqICAgICBodG1sYCR7dW50aWwoY29udGVudCwgaHRtbGA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPmApfWBcbiAqL1xuZXhwb3J0IGNvbnN0IHVudGlsID0gZGlyZWN0aXZlKCguLi5hcmdzOiB1bmtub3duW10pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGxldCBzdGF0ZSA9IF9zdGF0ZS5nZXQocGFydCkhO1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXRlID0ge1xuICAgICAgdmFsdWVzOiBbXSxcbiAgICB9O1xuICAgIF9zdGF0ZS5zZXQocGFydCwgc3RhdGUpO1xuICB9XG4gIGNvbnN0IHByZXZpb3VzVmFsdWVzID0gc3RhdGUudmFsdWVzO1xuICBzdGF0ZS52YWx1ZXMgPSBhcmdzO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIC8vIElmIHdlJ3ZlIHJlbmRlcmVkIGEgaGlnaGVyLXByaW9yaXR5IHZhbHVlIGFscmVhZHksIHN0b3AuXG4gICAgaWYgKHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ICE9PSB1bmRlZmluZWQgJiYgaSA+IHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4KSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3NbaV07XG5cbiAgICAvLyBSZW5kZXIgbm9uLVByb21pc2UgdmFsdWVzIGltbWVkaWF0ZWx5XG4gICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSB8fFxuICAgICAgICB0eXBlb2YgKHZhbHVlIGFzIHt0aGVuPzogdW5rbm93bn0pLnRoZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBpO1xuICAgICAgLy8gU2luY2UgYSBsb3dlci1wcmlvcml0eSB2YWx1ZSB3aWxsIG5ldmVyIG92ZXJ3cml0ZSBhIGhpZ2hlci1wcmlvcml0eVxuICAgICAgLy8gc3luY2hyb25vdXMgdmFsdWUsIHdlIGNhbiBzdG9wIHByb2Nlc3NzaW5nIG5vdy5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBQcm9taXNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCwgc2tpcCBpdC5cbiAgICBpZiAoc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0eXBlb2YgKHZhbHVlIGFzIHt0aGVuPzogdW5rbm93bn0pLnRoZW4gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgdmFsdWUgPT09IHByZXZpb3VzVmFsdWVzW2ldKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBXZSBoYXZlIGEgUHJvbWlzZSB0aGF0IHdlIGhhdmVuJ3Qgc2VlbiBiZWZvcmUsIHNvIHByaW9yaXRpZXMgbWF5IGhhdmVcbiAgICAvLyBjaGFuZ2VkLiBGb3JnZXQgd2hhdCB3ZSByZW5kZXJlZCBiZWZvcmUuXG4gICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSB1bmRlZmluZWQ7XG5cbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oKHJlc29sdmVkVmFsdWU6IHVua25vd24pID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgLy8gSWYgc3RhdGUudmFsdWVzIGRvZXNuJ3QgY29udGFpbiB0aGUgdmFsdWUsIHdlJ3ZlIHJlLXJlbmRlcmVkIHdpdGhvdXRcbiAgICAgIC8vIHRoZSB2YWx1ZSwgc28gZG9uJ3QgcmVuZGVyIGl0LiBUaGVuLCBvbmx5IHJlbmRlciBpZiB0aGUgdmFsdWUgaXNcbiAgICAgIC8vIGhpZ2hlci1wcmlvcml0eSB0aGFuIHdoYXQncyBhbHJlYWR5IGJlZW4gcmVuZGVyZWQuXG4gICAgICBpZiAoaW5kZXggPiAtMSAmJlxuICAgICAgICAgIChzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgIGluZGV4IDwgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpKSB7XG4gICAgICAgIHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHBhcnQuc2V0VmFsdWUocmVzb2x2ZWRWYWx1ZSk7XG4gICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQge0F0dHJpYnV0ZUNvbW1pdHRlciwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyfSBmcm9tICcuL3BhcnRzLmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBQYXJ0cyB3aGVuIGEgdGVtcGxhdGUgaXMgaW5zdGFudGlhdGVkLlxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIGltcGxlbWVudHMgVGVtcGxhdGVQcm9jZXNzb3Ige1xuICAvKipcbiAgICogQ3JlYXRlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUtcG9zaXRpb24gYmluZGluZywgZ2l2ZW4gdGhlIGV2ZW50LCBhdHRyaWJ1dGVcbiAgICogbmFtZSwgYW5kIHN0cmluZyBsaXRlcmFscy5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgYmluZGluZ1xuICAgKiBAcGFyYW0gbmFtZSAgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSBzdHJpbmdzIFRoZSBzdHJpbmcgbGl0ZXJhbHMuIFRoZXJlIGFyZSBhbHdheXMgYXQgbGVhc3QgdHdvIHN0cmluZ3MsXG4gICAqICAgZXZlbnQgZm9yIGZ1bGx5LWNvbnRyb2xsZWQgYmluZGluZ3Mgd2l0aCBhIHNpbmdsZSBleHByZXNzaW9uLlxuICAgKi9cbiAgaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMoXG4gICAgICBlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdLFxuICAgICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyk6IFBhcnRbXSB7XG4gICAgY29uc3QgcHJlZml4ID0gbmFtZVswXTtcbiAgICBpZiAocHJlZml4ID09PSAnLicpIHtcbiAgICAgIGNvbnN0IGNvbWl0dGVyID0gbmV3IFByb3BlcnR5Q29tbWl0dGVyKGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpO1xuICAgICAgcmV0dXJuIGNvbWl0dGVyLnBhcnRzO1xuICAgIH1cbiAgICBpZiAocHJlZml4ID09PSAnQCcpIHtcbiAgICAgIHJldHVybiBbbmV3IEV2ZW50UGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBvcHRpb25zLmV2ZW50Q29udGV4dCldO1xuICAgIH1cbiAgICBpZiAocHJlZml4ID09PSAnPycpIHtcbiAgICAgIHJldHVybiBbbmV3IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpXTtcbiAgICB9XG4gICAgY29uc3QgY29taXR0ZXIgPSBuZXcgQXR0cmlidXRlQ29tbWl0dGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgIHJldHVybiBjb21pdHRlci5wYXJ0cztcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIHBhcnRzIGZvciBhIHRleHQtcG9zaXRpb24gYmluZGluZy5cbiAgICogQHBhcmFtIHRlbXBsYXRlRmFjdG9yeVxuICAgKi9cbiAgaGFuZGxlVGV4dEV4cHJlc3Npb24ob3B0aW9uczogUmVuZGVyT3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgTm9kZVBhcnQob3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciA9IG5ldyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IoKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuXG5jb25zdCBkaXJlY3RpdmVzID0gbmV3IFdlYWtNYXA8b2JqZWN0LCB0cnVlPigpO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgdHlwZSBEaXJlY3RpdmVGYWN0b3J5ID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBvYmplY3Q7XG5cbmV4cG9ydCB0eXBlIERpcmVjdGl2ZUZuID0gKHBhcnQ6IFBhcnQpID0+IHZvaWQ7XG5cbi8qKlxuICogQnJhbmRzIGEgZnVuY3Rpb24gYXMgYSBkaXJlY3RpdmUgc28gdGhhdCBsaXQtaHRtbCB3aWxsIGNhbGwgdGhlIGZ1bmN0aW9uXG4gKiBkdXJpbmcgdGVtcGxhdGUgcmVuZGVyaW5nLCByYXRoZXIgdGhhbiBwYXNzaW5nIGFzIGEgdmFsdWUuXG4gKlxuICogQHBhcmFtIGYgVGhlIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uLiBNdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIGZ1bmN0aW9uIG9mIHRoZSBzaWduYXR1cmUgYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC4gVGhlIHJldHVybmVkIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIGNhbGxlZCB3aXRoIHRoZSBwYXJ0IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge2RpcmVjdGl2ZSwgaHRtbH0gZnJvbSAnbGl0LWh0bWwnO1xuICpcbiAqIGNvbnN0IGltbXV0YWJsZSA9IGRpcmVjdGl2ZSgodikgPT4gKHBhcnQpID0+IHtcbiAqICAgaWYgKHBhcnQudmFsdWUgIT09IHYpIHtcbiAqICAgICBwYXJ0LnNldFZhbHVlKHYpXG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSA8RiBleHRlbmRzIERpcmVjdGl2ZUZhY3Rvcnk+KGY6IEYpOiBGID0+XG4gICAgKCguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgIGNvbnN0IGQgPSBmKC4uLmFyZ3MpO1xuICAgICAgZGlyZWN0aXZlcy5zZXQoZCwgdHJ1ZSk7XG4gICAgICByZXR1cm4gZDtcbiAgICB9KSBhcyBGO1xuXG5leHBvcnQgY29uc3QgaXNEaXJlY3RpdmUgPSAobzogdW5rbm93bik6IG8gaXMgRGlyZWN0aXZlRm4gPT4ge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdmdW5jdGlvbicgJiYgZGlyZWN0aXZlcy5oYXMobyk7XG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbnRlcmZhY2UgTWF5YmVQb2x5ZmlsbGVkQ2UgZXh0ZW5kcyBDdXN0b21FbGVtZW50UmVnaXN0cnkge1xuICBwb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrPzogb2JqZWN0O1xufVxuXG4vKipcbiAqIFRydWUgaWYgdGhlIGN1c3RvbSBlbGVtZW50cyBwb2x5ZmlsbCBpcyBpbiB1c2UuXG4gKi9cbmV4cG9ydCBjb25zdCBpc0NFUG9seWZpbGwgPSB3aW5kb3cuY3VzdG9tRWxlbWVudHMgIT09IHVuZGVmaW5lZCAmJlxuICAgICh3aW5kb3cuY3VzdG9tRWxlbWVudHMgYXMgTWF5YmVQb2x5ZmlsbGVkQ2UpLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2sgIT09XG4gICAgICAgIHVuZGVmaW5lZDtcblxuLyoqXG4gKiBSZXBhcmVudHMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0Tm9kZWAgKGluY2x1c2l2ZSkgdG8gYGVuZE5vZGVgXG4gKiAoZXhjbHVzaXZlKSwgaW50byBhbm90aGVyIGNvbnRhaW5lciAoY291bGQgYmUgdGhlIHNhbWUgY29udGFpbmVyKSwgYmVmb3JlXG4gKiBgYmVmb3JlTm9kZWAuIElmIGBiZWZvcmVOb2RlYCBpcyBudWxsLCBpdCBhcHBlbmRzIHRoZSBub2RlcyB0byB0aGVcbiAqIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGFyZW50Tm9kZXMgPVxuICAgIChjb250YWluZXI6IE5vZGUsXG4gICAgIHN0YXJ0OiBOb2RlfG51bGwsXG4gICAgIGVuZDogTm9kZXxudWxsID0gbnVsbCxcbiAgICAgYmVmb3JlOiBOb2RlfG51bGwgPSBudWxsKTogdm9pZCA9PiB7XG4gICAgICBsZXQgbm9kZSA9IHN0YXJ0O1xuICAgICAgd2hpbGUgKG5vZGUgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gbm9kZSEubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobm9kZSEsIGJlZm9yZSBhcyBOb2RlKTtcbiAgICAgICAgbm9kZSA9IG47XG4gICAgICB9XG4gICAgfTtcblxuLyoqXG4gKiBSZW1vdmVzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydE5vZGVgIChpbmNsdXNpdmUpIHRvIGBlbmROb2RlYFxuICogKGV4Y2x1c2l2ZSksIGZyb20gYGNvbnRhaW5lcmAuXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVOb2RlcyA9XG4gICAgKGNvbnRhaW5lcjogTm9kZSwgc3RhcnROb2RlOiBOb2RlfG51bGwsIGVuZE5vZGU6IE5vZGV8bnVsbCA9IG51bGwpOlxuICAgICAgICB2b2lkID0+IHtcbiAgICAgICAgICBsZXQgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICB3aGlsZSAobm9kZSAhPT0gZW5kTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5vZGUhLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5vZGUhKTtcbiAgICAgICAgICAgIG5vZGUgPSBuO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIHNoYWR5LXJlbmRlclxuICovXG5cbmltcG9ydCB7aXNUZW1wbGF0ZVBhcnRBY3RpdmUsIFRlbXBsYXRlLCBUZW1wbGF0ZVBhcnR9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG5jb25zdCB3YWxrZXJOb2RlRmlsdGVyID0gMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovO1xuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGxpc3Qgb2Ygbm9kZXMgZnJvbSBhIFRlbXBsYXRlIHNhZmVseS4gSW4gYWRkaXRpb24gdG8gcmVtb3ZpbmdcbiAqIG5vZGVzIGZyb20gdGhlIFRlbXBsYXRlLCB0aGUgVGVtcGxhdGUgcGFydCBpbmRpY2VzIGFyZSB1cGRhdGVkIHRvIG1hdGNoXG4gKiB0aGUgbXV0YXRlZCBUZW1wbGF0ZSBET00uXG4gKlxuICogQXMgdGhlIHRlbXBsYXRlIGlzIHdhbGtlZCB0aGUgcmVtb3ZhbCBzdGF0ZSBpcyB0cmFja2VkIGFuZFxuICogcGFydCBpbmRpY2VzIGFyZSBhZGp1c3RlZCBhcyBuZWVkZWQuXG4gKlxuICogZGl2XG4gKiAgIGRpdiMxIChyZW1vdmUpIDwtLSBzdGFydCByZW1vdmluZyAocmVtb3Zpbmcgbm9kZSBpcyBkaXYjMSlcbiAqICAgICBkaXZcbiAqICAgICAgIGRpdiMyIChyZW1vdmUpICA8LS0gY29udGludWUgcmVtb3ZpbmcgKHJlbW92aW5nIG5vZGUgaXMgc3RpbGwgZGl2IzEpXG4gKiAgICAgICAgIGRpdlxuICogZGl2IDwtLSBzdG9wIHJlbW92aW5nIHNpbmNlIHByZXZpb3VzIHNpYmxpbmcgaXMgdGhlIHJlbW92aW5nIG5vZGUgKGRpdiMxLFxuICogcmVtb3ZlZCA0IG5vZGVzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUoXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlLCBub2Rlc1RvUmVtb3ZlOiBTZXQ8Tm9kZT4pIHtcbiAgY29uc3Qge2VsZW1lbnQ6IHtjb250ZW50fSwgcGFydHN9ID0gdGVtcGxhdGU7XG4gIGNvbnN0IHdhbGtlciA9XG4gICAgICBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGNvbnRlbnQsIHdhbGtlck5vZGVGaWx0ZXIsIG51bGwsIGZhbHNlKTtcbiAgbGV0IHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cyk7XG4gIGxldCBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgbGV0IG5vZGVJbmRleCA9IC0xO1xuICBsZXQgcmVtb3ZlQ291bnQgPSAwO1xuICBjb25zdCBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZSA9IFtdO1xuICBsZXQgY3VycmVudFJlbW92aW5nTm9kZTogTm9kZXxudWxsID0gbnVsbDtcbiAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgbm9kZUluZGV4Kys7XG4gICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZSBhcyBFbGVtZW50O1xuICAgIC8vIEVuZCByZW1vdmFsIGlmIHN0ZXBwZWQgcGFzdCB0aGUgcmVtb3Zpbmcgbm9kZVxuICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gY3VycmVudFJlbW92aW5nTm9kZSkge1xuICAgICAgY3VycmVudFJlbW92aW5nTm9kZSA9IG51bGw7XG4gICAgfVxuICAgIC8vIEEgbm9kZSB0byByZW1vdmUgd2FzIGZvdW5kIGluIHRoZSB0ZW1wbGF0ZVxuICAgIGlmIChub2Rlc1RvUmVtb3ZlLmhhcyhub2RlKSkge1xuICAgICAgbm9kZXNUb1JlbW92ZUluVGVtcGxhdGUucHVzaChub2RlKTtcbiAgICAgIC8vIFRyYWNrIG5vZGUgd2UncmUgcmVtb3ZpbmdcbiAgICAgIGlmIChjdXJyZW50UmVtb3ZpbmdOb2RlID09PSBudWxsKSB7XG4gICAgICAgIGN1cnJlbnRSZW1vdmluZ05vZGUgPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBXaGVuIHJlbW92aW5nLCBpbmNyZW1lbnQgY291bnQgYnkgd2hpY2ggdG8gYWRqdXN0IHN1YnNlcXVlbnQgcGFydCBpbmRpY2VzXG4gICAgaWYgKGN1cnJlbnRSZW1vdmluZ05vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgfVxuICAgIHdoaWxlIChwYXJ0ICE9PSB1bmRlZmluZWQgJiYgcGFydC5pbmRleCA9PT0gbm9kZUluZGV4KSB7XG4gICAgICAvLyBJZiBwYXJ0IGlzIGluIGEgcmVtb3ZlZCBub2RlIGRlYWN0aXZhdGUgaXQgYnkgc2V0dGluZyBpbmRleCB0byAtMSBvclxuICAgICAgLy8gYWRqdXN0IHRoZSBpbmRleCBhcyBuZWVkZWQuXG4gICAgICBwYXJ0LmluZGV4ID0gY3VycmVudFJlbW92aW5nTm9kZSAhPT0gbnVsbCA/IC0xIDogcGFydC5pbmRleCAtIHJlbW92ZUNvdW50O1xuICAgICAgLy8gZ28gdG8gdGhlIG5leHQgYWN0aXZlIHBhcnQuXG4gICAgICBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMsIHBhcnRJbmRleCk7XG4gICAgICBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgICB9XG4gIH1cbiAgbm9kZXNUb1JlbW92ZUluVGVtcGxhdGUuZm9yRWFjaCgobikgPT4gbi5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChuKSk7XG59XG5cbmNvbnN0IGNvdW50Tm9kZXMgPSAobm9kZTogTm9kZSkgPT4ge1xuICBsZXQgY291bnQgPSAobm9kZS5ub2RlVHlwZSA9PT0gMTEgLyogTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICovKSA/IDAgOiAxO1xuICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIHdhbGtlck5vZGVGaWx0ZXIsIG51bGwsIGZhbHNlKTtcbiAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgY291bnQrKztcbiAgfVxuICByZXR1cm4gY291bnQ7XG59O1xuXG5jb25zdCBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMgPVxuICAgIChwYXJ0czogVGVtcGxhdGVQYXJ0W10sIHN0YXJ0SW5kZXg6IG51bWJlciA9IC0xKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleCArIDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIGlmIChpc1RlbXBsYXRlUGFydEFjdGl2ZShwYXJ0KSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcblxuLyoqXG4gKiBJbnNlcnRzIHRoZSBnaXZlbiBub2RlIGludG8gdGhlIFRlbXBsYXRlLCBvcHRpb25hbGx5IGJlZm9yZSB0aGUgZ2l2ZW5cbiAqIHJlZk5vZGUuIEluIGFkZGl0aW9uIHRvIGluc2VydGluZyB0aGUgbm9kZSBpbnRvIHRoZSBUZW1wbGF0ZSwgdGhlIFRlbXBsYXRlXG4gKiBwYXJ0IGluZGljZXMgYXJlIHVwZGF0ZWQgdG8gbWF0Y2ggdGhlIG11dGF0ZWQgVGVtcGxhdGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Tm9kZUludG9UZW1wbGF0ZShcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGUsIG5vZGU6IE5vZGUsIHJlZk5vZGU6IE5vZGV8bnVsbCA9IG51bGwpIHtcbiAgY29uc3Qge2VsZW1lbnQ6IHtjb250ZW50fSwgcGFydHN9ID0gdGVtcGxhdGU7XG4gIC8vIElmIHRoZXJlJ3Mgbm8gcmVmTm9kZSwgdGhlbiBwdXQgbm9kZSBhdCBlbmQgb2YgdGVtcGxhdGUuXG4gIC8vIE5vIHBhcnQgaW5kaWNlcyBuZWVkIHRvIGJlIHNoaWZ0ZWQgaW4gdGhpcyBjYXNlLlxuICBpZiAocmVmTm9kZSA9PT0gbnVsbCB8fCByZWZOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB3YWxrZXIgPVxuICAgICAgZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gIGxldCBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMpO1xuICBsZXQgaW5zZXJ0Q291bnQgPSAwO1xuICBsZXQgd2Fsa2VySW5kZXggPSAtMTtcbiAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgd2Fsa2VySW5kZXgrKztcbiAgICBjb25zdCB3YWxrZXJOb2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlIGFzIEVsZW1lbnQ7XG4gICAgaWYgKHdhbGtlck5vZGUgPT09IHJlZk5vZGUpIHtcbiAgICAgIGluc2VydENvdW50ID0gY291bnROb2Rlcyhub2RlKTtcbiAgICAgIHJlZk5vZGUucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZk5vZGUpO1xuICAgIH1cbiAgICB3aGlsZSAocGFydEluZGV4ICE9PSAtMSAmJiBwYXJ0c1twYXJ0SW5kZXhdLmluZGV4ID09PSB3YWxrZXJJbmRleCkge1xuICAgICAgLy8gSWYgd2UndmUgaW5zZXJ0ZWQgdGhlIG5vZGUsIHNpbXBseSBhZGp1c3QgYWxsIHN1YnNlcXVlbnQgcGFydHNcbiAgICAgIGlmIChpbnNlcnRDb3VudCA+IDApIHtcbiAgICAgICAgd2hpbGUgKHBhcnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBwYXJ0c1twYXJ0SW5kZXhdLmluZGV4ICs9IGluc2VydENvdW50O1xuICAgICAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMsIHBhcnRJbmRleCk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbi8qKlxuICogVGhlIFBhcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBkeW5hbWljIHBhcnQgb2YgYSB0ZW1wbGF0ZSBpbnN0YW5jZSByZW5kZXJlZFxuICogYnkgbGl0LWh0bWwuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFydCB7XG4gIHZhbHVlOiB1bmtub3duO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHBhcnQgdmFsdWUsIGJ1dCBkb2VzIG5vdCB3cml0ZSBpdCB0byB0aGUgRE9NLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRoYXQgd2lsbCBiZSBjb21taXR0ZWQuXG4gICAqL1xuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENvbW1pdHMgdGhlIGN1cnJlbnQgcGFydCB2YWx1ZSwgY2F1c2UgaXQgdG8gYWN0dWFsbHkgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuICAgKi9cbiAgY29tbWl0KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZTogb2JqZWN0ID0ge307XG5cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBOb2RlUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSB7fTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtpc0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtub0NoYW5nZSwgbm90aGluZywgUGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHtjcmVhdGVNYXJrZXJ9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10eXBlb2Ytb3BlcmF0b3JcbmV4cG9ydCB0eXBlIFByaW1pdGl2ZSA9IG51bGx8dW5kZWZpbmVkfGJvb2xlYW58bnVtYmVyfHN0cmluZ3xTeW1ib2x8YmlnaW50O1xuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgUHJpbWl0aXZlID0+IHtcbiAgcmV0dXJuIChcbiAgICAgIHZhbHVlID09PSBudWxsIHx8XG4gICAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSk7XG59O1xuXG4vKipcbiAqIFNldHMgYXR0cmlidXRlIHZhbHVlcyBmb3IgQXR0cmlidXRlUGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBuYW1lOiBzdHJpbmc7XG4gIHN0cmluZ3M6IHN0cmluZ1tdO1xuICBwYXJ0czogQXR0cmlidXRlUGFydFtdO1xuICBkaXJ0eSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB0aGlzLnBhcnRzW2ldID0gdGhpcy5fY3JlYXRlUGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc2luZ2xlIHBhcnQuIE92ZXJyaWRlIHRoaXMgdG8gY3JlYXRlIGEgZGlmZmVybnQgdHlwZSBvZiBwYXJ0LlxuICAgKi9cbiAgcHJvdGVjdGVkIF9jcmVhdGVQYXJ0KCk6IEF0dHJpYnV0ZVBhcnQge1xuICAgIHJldHVybiBuZXcgQXR0cmlidXRlUGFydCh0aGlzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0VmFsdWUoKTogdW5rbm93biB7XG4gICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICBjb25zdCBsID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgIGxldCB0ZXh0ID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdGV4dCArPSBzdHJpbmdzW2ldO1xuICAgICAgY29uc3QgcGFydCA9IHRoaXMucGFydHNbaV07XG4gICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHYgPSBwYXJ0LnZhbHVlO1xuICAgICAgICBpZiAodiAhPSBudWxsICYmXG4gICAgICAgICAgICAoQXJyYXkuaXNBcnJheSh2KSB8fFxuICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICAgICB0eXBlb2YgdiAhPT0gJ3N0cmluZycgJiYgKHYgYXMgYW55KVtTeW1ib2wuaXRlcmF0b3JdKSkge1xuICAgICAgICAgIGZvciAoY29uc3QgdCBvZiB2IGFzIEl0ZXJhYmxlPHVua25vd24+KSB7XG4gICAgICAgICAgICB0ZXh0ICs9IHR5cGVvZiB0ID09PSAnc3RyaW5nJyA/IHQgOiBTdHJpbmcodCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHYgPT09ICdzdHJpbmcnID8gdiA6IFN0cmluZyh2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRleHQgKz0gc3RyaW5nc1tsXTtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGNvbW1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIHRoaXMuX2dldFZhbHVlKCkgYXMgc3RyaW5nKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZVBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgY29tbWl0dGVyOiBBdHRyaWJ1dGVDb21taXR0ZXI7XG4gIHZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGNvbWl0dGVyOiBBdHRyaWJ1dGVDb21taXR0ZXIpIHtcbiAgICB0aGlzLmNvbW1pdHRlciA9IGNvbWl0dGVyO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgIT09IG5vQ2hhbmdlICYmICghaXNQcmltaXRpdmUodmFsdWUpIHx8IHZhbHVlICE9PSB0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGEgbm90IGEgZGlyZWN0aXZlLCBkaXJ0eSB0aGUgY29tbWl0dGVyIHNvIHRoYXQgaXQnbGxcbiAgICAgIC8vIGNhbGwgc2V0QXR0cmlidXRlLiBJZiB0aGUgdmFsdWUgaXMgYSBkaXJlY3RpdmUsIGl0J2xsIGRpcnR5IHRoZVxuICAgICAgLy8gY29tbWl0dGVyIGlmIGl0IGNhbGxzIHNldFZhbHVlKCkuXG4gICAgICBpZiAoIWlzRGlyZWN0aXZlKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmNvbW1pdHRlci5kaXJ0eSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLnZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29tbWl0dGVyLmNvbW1pdCgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb2RlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICBvcHRpb25zOiBSZW5kZXJPcHRpb25zO1xuICBzdGFydE5vZGUhOiBOb2RlO1xuICBlbmROb2RlITogTm9kZTtcbiAgdmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG4gIF9wZW5kaW5nVmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogUmVuZGVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyB0aGlzIHBhcnQgaW50byBhIGNvbnRhaW5lci5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBhcHBlbmRJbnRvKGNvbnRhaW5lcjogTm9kZSkge1xuICAgIHRoaXMuc3RhcnROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICB0aGlzLmVuZE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgdGhpcyBwYXJ0IGJldHdlZW4gYHJlZmAgYW5kIGByZWZgJ3MgbmV4dCBzaWJsaW5nLiBCb3RoIGByZWZgIGFuZFxuICAgKiBpdHMgbmV4dCBzaWJsaW5nIG11c3QgYmUgc3RhdGljLCB1bmNoYW5naW5nIG5vZGVzIHN1Y2ggYXMgdGhvc2UgdGhhdCBhcHBlYXJcbiAgICogaW4gYSBsaXRlcmFsIHNlY3Rpb24gb2YgYSB0ZW1wbGF0ZS5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBpbnNlcnRBZnRlck5vZGUocmVmOiBOb2RlKSB7XG4gICAgdGhpcy5zdGFydE5vZGUgPSByZWY7XG4gICAgdGhpcy5lbmROb2RlID0gcmVmLm5leHRTaWJsaW5nITtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoaXMgcGFydCBpbnRvIGEgcGFyZW50IHBhcnQuXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgYXBwZW5kSW50b1BhcnQocGFydDogTm9kZVBhcnQpIHtcbiAgICBwYXJ0Ll9pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgcGFydC5faW5zZXJ0KHRoaXMuZW5kTm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoaXMgcGFydCBhZnRlciBgcmVmYFxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGluc2VydEFmdGVyUGFydChyZWY6IE5vZGVQYXJ0KSB7XG4gICAgcmVmLl9pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgdGhpcy5lbmROb2RlID0gcmVmLmVuZE5vZGU7XG4gICAgcmVmLmVuZE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICAgIHRoaXMuX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgdGhpcy5fY29tbWl0Tm9kZSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAodmFsdWUgYXMgYW55KVtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICB0aGlzLl9jb21taXRJdGVyYWJsZSh2YWx1ZSBhcyBJdGVyYWJsZTx1bmtub3duPik7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgdGhpcy52YWx1ZSA9IG5vdGhpbmc7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbnNlcnQobm9kZTogTm9kZSkge1xuICAgIHRoaXMuZW5kTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1pdE5vZGUodmFsdWU6IE5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuX2luc2VydCh2YWx1ZSk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tbWl0VGV4dCh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZyE7XG4gICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICBpZiAobm9kZSA9PT0gdGhpcy5lbmROb2RlLnByZXZpb3VzU2libGluZyAmJlxuICAgICAgICBub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiB0aGlzLnZhbHVlIGlzIHByaW1pdGl2ZT9cbiAgICAgIChub2RlIGFzIFRleHQpLmRhdGEgPSB2YWx1ZSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKSkpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZTogVGVtcGxhdGVSZXN1bHQpOiB2b2lkIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy50ZW1wbGF0ZUZhY3RvcnkodmFsdWUpO1xuICAgIGlmICh0aGlzLnZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVJbnN0YW5jZSAmJlxuICAgICAgICB0aGlzLnZhbHVlLnRlbXBsYXRlID09PSB0ZW1wbGF0ZSkge1xuICAgICAgdGhpcy52YWx1ZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTWFrZSBzdXJlIHdlIHByb3BhZ2F0ZSB0aGUgdGVtcGxhdGUgcHJvY2Vzc29yIGZyb20gdGhlIFRlbXBsYXRlUmVzdWx0XG4gICAgICAvLyBzbyB0aGF0IHdlIHVzZSBpdHMgc3ludGF4IGV4dGVuc2lvbiwgZXRjLiBUaGUgdGVtcGxhdGUgZmFjdG9yeSBjb21lc1xuICAgICAgLy8gZnJvbSB0aGUgcmVuZGVyIGZ1bmN0aW9uIG9wdGlvbnMgc28gdGhhdCBpdCBjYW4gY29udHJvbCB0ZW1wbGF0ZVxuICAgICAgLy8gY2FjaGluZyBhbmQgcHJlcHJvY2Vzc2luZy5cbiAgICAgIGNvbnN0IGluc3RhbmNlID1cbiAgICAgICAgICBuZXcgVGVtcGxhdGVJbnN0YW5jZSh0ZW1wbGF0ZSwgdmFsdWUucHJvY2Vzc29yLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUoKTtcbiAgICAgIGluc3RhbmNlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgICAgdGhpcy5fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICB0aGlzLnZhbHVlID0gaW5zdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tbWl0SXRlcmFibGUodmFsdWU6IEl0ZXJhYmxlPHVua25vd24+KTogdm9pZCB7XG4gICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuXG4gICAgLy8gSWYgX3ZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgLy8gaXRlcmFibGUgYW5kIF92YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgIC8vIHJlbmRlci4gSWYgX3ZhbHVlIGlzIG5vdCBhbiBhcnJheSwgY2xlYXIgdGhpcyBwYXJ0IGFuZCBtYWtlIGEgbmV3XG4gICAgLy8gYXJyYXkgZm9yIE5vZGVQYXJ0cy5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy52YWx1ZSBhcyBOb2RlUGFydFtdO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGxldCBpdGVtUGFydDogTm9kZVBhcnR8dW5kZWZpbmVkO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAvLyBUcnkgdG8gcmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcblxuICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgaWYgKGl0ZW1QYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaXRlbVBhcnQgPSBuZXcgTm9kZVBhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgICAgaXRlbVBhcnRzLnB1c2goaXRlbVBhcnQpO1xuICAgICAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgaXRlbVBhcnQuYXBwZW5kSW50b1BhcnQodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVBhcnQuaW5zZXJ0QWZ0ZXJQYXJ0KGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGl0ZW1QYXJ0LnNldFZhbHVlKGl0ZW0pO1xuICAgICAgaXRlbVBhcnQuY29tbWl0KCk7XG4gICAgICBwYXJ0SW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgIHRoaXMuY2xlYXIoaXRlbVBhcnQgJiYgaXRlbVBhcnQhLmVuZE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKHN0YXJ0Tm9kZTogTm9kZSA9IHRoaXMuc3RhcnROb2RlKSB7XG4gICAgcmVtb3ZlTm9kZXMoXG4gICAgICAgIHRoaXMuc3RhcnROb2RlLnBhcmVudE5vZGUhLCBzdGFydE5vZGUubmV4dFNpYmxpbmchLCB0aGlzLmVuZE5vZGUpO1xuICB9XG59XG5cbi8qKlxuICogSW1wbGVtZW50cyBhIGJvb2xlYW4gYXR0cmlidXRlLCByb3VnaGx5IGFzIGRlZmluZWQgaW4gdGhlIEhUTUxcbiAqIHNwZWNpZmljYXRpb24uXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIHRydXRoeSwgdGhlbiB0aGUgYXR0cmlidXRlIGlzIHByZXNlbnQgd2l0aCBhIHZhbHVlIG9mXG4gKiAnJy4gSWYgdGhlIHZhbHVlIGlzIGZhbHNleSwgdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgZWxlbWVudDogRWxlbWVudDtcbiAgbmFtZTogc3RyaW5nO1xuICBzdHJpbmdzOiBzdHJpbmdbXTtcbiAgdmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG4gIF9wZW5kaW5nVmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBzdHJpbmdbXSkge1xuICAgIGlmIChzdHJpbmdzLmxlbmd0aCAhPT0gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdCb29sZWFuIGF0dHJpYnV0ZXMgY2FuIG9ubHkgY29udGFpbiBhIHNpbmdsZSBleHByZXNzaW9uJyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gISF0aGlzLl9wZW5kaW5nVmFsdWU7XG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICB9XG59XG5cbi8qKlxuICogU2V0cyBhdHRyaWJ1dGUgdmFsdWVzIGZvciBQcm9wZXJ0eVBhcnRzLCBzbyB0aGF0IHRoZSB2YWx1ZSBpcyBvbmx5IHNldCBvbmNlXG4gKiBldmVuIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBwYXJ0cyBmb3IgYSBwcm9wZXJ0eS5cbiAqXG4gKiBJZiBhbiBleHByZXNzaW9uIGNvbnRyb2xzIHRoZSB3aG9sZSBwcm9wZXJ0eSB2YWx1ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiBhc3NpZ25lZCB0byB0aGUgcHJvcGVydHkgdW5kZXIgY29udHJvbC4gSWYgdGhlcmUgYXJlIHN0cmluZyBsaXRlcmFscyBvclxuICogbXVsdGlwbGUgZXhwcmVzc2lvbnMsIHRoZW4gdGhlIHN0cmluZ3MgYXJlIGV4cHJlc3Npb25zIGFyZSBpbnRlcnBvbGF0ZWQgaW50b1xuICogYSBzdHJpbmcgZmlyc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUNvbW1pdHRlciBleHRlbmRzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gIHNpbmdsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgdGhpcy5zaW5nbGUgPVxuICAgICAgICAoc3RyaW5ncy5sZW5ndGggPT09IDIgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jcmVhdGVQYXJ0KCk6IFByb3BlcnR5UGFydCB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVBhcnQodGhpcyk7XG4gIH1cblxuICBfZ2V0VmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuc2luZ2xlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJ0c1swXS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLl9nZXRWYWx1ZSgpO1xuICB9XG5cbiAgY29tbWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAodGhpcy5lbGVtZW50IGFzIGFueSlbdGhpcy5uYW1lXSA9IHRoaXMuX2dldFZhbHVlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHt9XG5cbi8vIERldGVjdCBldmVudCBsaXN0ZW5lciBvcHRpb25zIHN1cHBvcnQuIElmIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkgaXMgcmVhZFxuLy8gZnJvbSB0aGUgb3B0aW9ucyBvYmplY3QsIHRoZW4gb3B0aW9ucyBhcmUgc3VwcG9ydGVkLiBJZiBub3QsIHRoZW4gdGhlIHRocmlkXG4vLyBhcmd1bWVudCB0byBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lciBpcyBpbnRlcnByZXRlZCBhcyB0aGUgYm9vbGVhbiBjYXB0dXJlXG4vLyB2YWx1ZSBzbyB3ZSBzaG91bGQgb25seSBwYXNzIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkuXG5sZXQgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gZmFsc2U7XG5cbnRyeSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgZ2V0IGNhcHR1cmUoKSB7XG4gICAgICBldmVudE9wdGlvbnNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMgYXMgYW55LCBvcHRpb25zKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMgYXMgYW55LCBvcHRpb25zKTtcbn0gY2F0Y2ggKF9lKSB7XG59XG5cblxudHlwZSBFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyA9XG4gICAgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCZQYXJ0aWFsPEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zPjtcbmV4cG9ydCBjbGFzcyBFdmVudFBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgZWxlbWVudDogRWxlbWVudDtcbiAgZXZlbnROYW1lOiBzdHJpbmc7XG4gIGV2ZW50Q29udGV4dD86IEV2ZW50VGFyZ2V0O1xuICB2YWx1ZTogdW5kZWZpbmVkfEV2ZW50SGFuZGxlcldpdGhPcHRpb25zID0gdW5kZWZpbmVkO1xuICBfb3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zO1xuICBfcGVuZGluZ1ZhbHVlOiB1bmRlZmluZWR8RXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIF9ib3VuZEhhbmRsZUV2ZW50OiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBldmVudENvbnRleHQ/OiBFdmVudFRhcmdldCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgdGhpcy5ldmVudENvbnRleHQgPSBldmVudENvbnRleHQ7XG4gICAgdGhpcy5fYm91bmRIYW5kbGVFdmVudCA9IChlKSA9PiB0aGlzLmhhbmRsZUV2ZW50KGUpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVuZGVmaW5lZHxFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9wZW5kaW5nVmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9wZW5kaW5nVmFsdWU7XG4gICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSBub0NoYW5nZSBhcyBFdmVudEhhbmRsZXJXaXRoT3B0aW9ucztcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdMaXN0ZW5lciA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMudmFsdWU7XG4gICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciA9PSBudWxsIHx8XG4gICAgICAgIG9sZExpc3RlbmVyICE9IG51bGwgJiZcbiAgICAgICAgICAgIChuZXdMaXN0ZW5lci5jYXB0dXJlICE9PSBvbGRMaXN0ZW5lci5jYXB0dXJlIHx8XG4gICAgICAgICAgICAgbmV3TGlzdGVuZXIub25jZSAhPT0gb2xkTGlzdGVuZXIub25jZSB8fFxuICAgICAgICAgICAgIG5ld0xpc3RlbmVyLnBhc3NpdmUgIT09IG9sZExpc3RlbmVyLnBhc3NpdmUpO1xuICAgIGNvbnN0IHNob3VsZEFkZExpc3RlbmVyID1cbiAgICAgICAgbmV3TGlzdGVuZXIgIT0gbnVsbCAmJiAob2xkTGlzdGVuZXIgPT0gbnVsbCB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG5cbiAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHRoaXMuZXZlbnROYW1lLCB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9vcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHNob3VsZEFkZExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gZ2V0T3B0aW9ucyhuZXdMaXN0ZW5lcik7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICB0aGlzLmV2ZW50TmFtZSwgdGhpcy5fYm91bmRIYW5kbGVFdmVudCwgdGhpcy5fb3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSBub0NoYW5nZSBhcyBFdmVudEhhbmRsZXJXaXRoT3B0aW9ucztcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBFdmVudCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy52YWx1ZS5jYWxsKHRoaXMuZXZlbnRDb250ZXh0IHx8IHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAodGhpcy52YWx1ZSBhcyBFdmVudExpc3RlbmVyT2JqZWN0KS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFdlIGNvcHkgb3B0aW9ucyBiZWNhdXNlIG9mIHRoZSBpbmNvbnNpc3RlbnQgYmVoYXZpb3Igb2YgYnJvd3NlcnMgd2hlbiByZWFkaW5nXG4vLyB0aGUgdGhpcmQgYXJndW1lbnQgb2YgYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIuIElFMTEgZG9lc24ndCBzdXBwb3J0IG9wdGlvbnNcbi8vIGF0IGFsbC4gQ2hyb21lIDQxIG9ubHkgcmVhZHMgYGNhcHR1cmVgIGlmIHRoZSBhcmd1bWVudCBpcyBhbiBvYmplY3QuXG5jb25zdCBnZXRPcHRpb25zID0gKG86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zfHVuZGVmaW5lZCkgPT4gbyAmJlxuICAgIChldmVudE9wdGlvbnNTdXBwb3J0ZWQgP1xuICAgICAgICAge2NhcHR1cmU6IG8uY2FwdHVyZSwgcGFzc2l2ZTogby5wYXNzaXZlLCBvbmNlOiBvLm9uY2V9IDpcbiAgICAgICAgIG8uY2FwdHVyZSBhcyBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7cmVtb3ZlTm9kZXN9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7Tm9kZVBhcnR9IGZyb20gJy4vcGFydHMuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7dGVtcGxhdGVGYWN0b3J5fSBmcm9tICcuL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuXG5leHBvcnQgY29uc3QgcGFydHMgPSBuZXcgV2Vha01hcDxOb2RlLCBOb2RlUGFydD4oKTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgdGVtcGxhdGUgdG8gYSBjb250YWluZXIuXG4gKlxuICogVG8gdXBkYXRlIGEgY29udGFpbmVyIHdpdGggbmV3IHZhbHVlcywgcmVldmFsdWF0ZSB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBhbmRcbiAqIGNhbGwgYHJlbmRlcmAgd2l0aCB0aGUgbmV3IHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gcmVzdWx0IGEgVGVtcGxhdGVSZXN1bHQgY3JlYXRlZCBieSBldmFsdWF0aW5nIGEgdGVtcGxhdGUgdGFnIGxpa2VcbiAqICAgICBgaHRtbGAgb3IgYHN2Z2AuXG4gKiBAcGFyYW0gY29udGFpbmVyIEEgRE9NIHBhcmVudCB0byByZW5kZXIgdG8uIFRoZSBlbnRpcmUgY29udGVudHMgYXJlIGVpdGhlclxuICogICAgIHJlcGxhY2VkLCBvciBlZmZpY2llbnRseSB1cGRhdGVkIGlmIHRoZSBzYW1lIHJlc3VsdCB0eXBlIHdhcyBwcmV2aW91c1xuICogICAgIHJlbmRlcmVkIHRoZXJlLlxuICogQHBhcmFtIG9wdGlvbnMgUmVuZGVyT3B0aW9ucyBmb3IgdGhlIGVudGlyZSByZW5kZXIgdHJlZSByZW5kZXJlZCB0byB0aGlzXG4gKiAgICAgY29udGFpbmVyLiBSZW5kZXIgb3B0aW9ucyBtdXN0ICpub3QqIGNoYW5nZSBiZXR3ZWVuIHJlbmRlcnMgdG8gdGhlIHNhbWVcbiAqICAgICBjb250YWluZXIsIGFzIHRob3NlIGNoYW5nZXMgd2lsbCBub3QgZWZmZWN0IHByZXZpb3VzbHkgcmVuZGVyZWQgRE9NLlxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyID1cbiAgICAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCxcbiAgICAgY29udGFpbmVyOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnQsXG4gICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFJlbmRlck9wdGlvbnM+KSA9PiB7XG4gICAgICBsZXQgcGFydCA9IHBhcnRzLmdldChjb250YWluZXIpO1xuICAgICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgcGFydHMuc2V0KGNvbnRhaW5lciwgcGFydCA9IG5ldyBOb2RlUGFydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgcGFydC5hcHBlbmRJbnRvKGNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgICBwYXJ0LnNldFZhbHVlKHJlc3VsdCk7XG4gICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgIH07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogTW9kdWxlIHRvIGFkZCBzaGFkeSBET00vc2hhZHkgQ1NTIHBvbHlmaWxsIHN1cHBvcnQgdG8gbGl0LWh0bWwgdGVtcGxhdGVcbiAqIHJlbmRlcmluZy4gU2VlIHRoZSBbW3JlbmRlcl1dIG1ldGhvZCBmb3IgZGV0YWlscy5cbiAqXG4gKiBAbW9kdWxlIHNoYWR5LXJlbmRlclxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKlxuICogRG8gbm90IHJlbW92ZSB0aGlzIGNvbW1lbnQ7IGl0IGtlZXBzIHR5cGVkb2MgZnJvbSBtaXNwbGFjaW5nIHRoZSBtb2R1bGVcbiAqIGRvY3MuXG4gKi9cbmltcG9ydCB7cmVtb3ZlTm9kZXN9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7aW5zZXJ0Tm9kZUludG9UZW1wbGF0ZSwgcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGV9IGZyb20gJy4vbW9kaWZ5LXRlbXBsYXRlLmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge3BhcnRzLCByZW5kZXIgYXMgbGl0UmVuZGVyfSBmcm9tICcuL3JlbmRlci5qcyc7XG5pbXBvcnQge3RlbXBsYXRlQ2FjaGVzfSBmcm9tICcuL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZUluc3RhbmNlfSBmcm9tICcuL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcbmltcG9ydCB7bWFya2VyLCBUZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbmV4cG9ydCB7aHRtbCwgc3ZnLCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG4vLyBHZXQgYSBrZXkgdG8gbG9va3VwIGluIGB0ZW1wbGF0ZUNhY2hlc2AuXG5jb25zdCBnZXRUZW1wbGF0ZUNhY2hlS2V5ID0gKHR5cGU6IHN0cmluZywgc2NvcGVOYW1lOiBzdHJpbmcpID0+XG4gICAgYCR7dHlwZX0tLSR7c2NvcGVOYW1lfWA7XG5cbmxldCBjb21wYXRpYmxlU2hhZHlDU1NWZXJzaW9uID0gdHJ1ZTtcblxuaWYgKHR5cGVvZiB3aW5kb3cuU2hhZHlDU1MgPT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gPSBmYWxzZTtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5TaGFkeUNTUy5wcmVwYXJlVGVtcGxhdGVEb20gPT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbnNvbGUud2FybihcbiAgICAgIGBJbmNvbXBhdGlibGUgU2hhZHlDU1MgdmVyc2lvbiBkZXRlY3RlZC5gICtcbiAgICAgIGBQbGVhc2UgdXBkYXRlIHRvIGF0IGxlYXN0IEB3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqc0AyLjAuMiBhbmRgICtcbiAgICAgIGBAd2ViY29tcG9uZW50cy9zaGFkeWNzc0AxLjMuMS5gKTtcbiAgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiA9IGZhbHNlO1xufVxuXG4vKipcbiAqIFRlbXBsYXRlIGZhY3Rvcnkgd2hpY2ggc2NvcGVzIHRlbXBsYXRlIERPTSB1c2luZyBTaGFkeUNTUy5cbiAqIEBwYXJhbSBzY29wZU5hbWUge3N0cmluZ31cbiAqL1xuY29uc3Qgc2hhZHlUZW1wbGF0ZUZhY3RvcnkgPSAoc2NvcGVOYW1lOiBzdHJpbmcpID0+XG4gICAgKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IGNhY2hlS2V5ID0gZ2V0VGVtcGxhdGVDYWNoZUtleShyZXN1bHQudHlwZSwgc2NvcGVOYW1lKTtcbiAgICAgIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KGNhY2hlS2V5KTtcbiAgICAgIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGVtcGxhdGVDYWNoZSA9IHtcbiAgICAgICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwPFRlbXBsYXRlU3RyaW5nc0FycmF5LCBUZW1wbGF0ZT4oKSxcbiAgICAgICAgICBrZXlTdHJpbmc6IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZT4oKVxuICAgICAgICB9O1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQoY2FjaGVLZXksIHRlbXBsYXRlQ2FjaGUpO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgICAgaWYgKHRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG4gICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLmdldChrZXkpO1xuICAgICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlc3VsdC5nZXRUZW1wbGF0ZUVsZW1lbnQoKTtcbiAgICAgICAgaWYgKGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24pIHtcbiAgICAgICAgICB3aW5kb3cuU2hhZHlDU1MhLnByZXBhcmVUZW1wbGF0ZURvbShlbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgZWxlbWVudCk7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLnNldChrZXksIHRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICAgIHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH07XG5cbmNvbnN0IFRFTVBMQVRFX1RZUEVTID0gWydodG1sJywgJ3N2ZyddO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIHN0eWxlIGVsZW1lbnRzIGZyb20gVGVtcGxhdGVzIGZvciB0aGUgZ2l2ZW4gc2NvcGVOYW1lLlxuICovXG5jb25zdCByZW1vdmVTdHlsZXNGcm9tTGl0VGVtcGxhdGVzID0gKHNjb3BlTmFtZTogc3RyaW5nKSA9PiB7XG4gIFRFTVBMQVRFX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoZ2V0VGVtcGxhdGVDYWNoZUtleSh0eXBlLCBzY29wZU5hbWUpKTtcbiAgICBpZiAodGVtcGxhdGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRlbXBsYXRlcy5rZXlTdHJpbmcuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgICAgY29uc3Qge2VsZW1lbnQ6IHtjb250ZW50fX0gPSB0ZW1wbGF0ZTtcbiAgICAgICAgLy8gSUUgMTEgZG9lc24ndCBzdXBwb3J0IHRoZSBpdGVyYWJsZSBwYXJhbSBTZXQgY29uc3RydWN0b3JcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gbmV3IFNldDxFbGVtZW50PigpO1xuICAgICAgICBBcnJheS5mcm9tKGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3R5bGUnKSkuZm9yRWFjaCgoczogRWxlbWVudCkgPT4ge1xuICAgICAgICAgIHN0eWxlcy5hZGQocyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZSh0ZW1wbGF0ZSwgc3R5bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzaGFkeVJlbmRlclNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4vKipcbiAqIEZvciB0aGUgZ2l2ZW4gc2NvcGUgbmFtZSwgZW5zdXJlcyB0aGF0IFNoYWR5Q1NTIHN0eWxlIHNjb3BpbmcgaXMgcGVyZm9ybWVkLlxuICogVGhpcyBpcyBkb25lIGp1c3Qgb25jZSBwZXIgc2NvcGUgbmFtZSBzbyB0aGUgZnJhZ21lbnQgYW5kIHRlbXBsYXRlIGNhbm5vdFxuICogYmUgbW9kaWZpZWQuXG4gKiAoMSkgZXh0cmFjdHMgc3R5bGVzIGZyb20gdGhlIHJlbmRlcmVkIGZyYWdtZW50IGFuZCBoYW5kcyB0aGVtIHRvIFNoYWR5Q1NTXG4gKiB0byBiZSBzY29wZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudFxuICogKDIpIHJlbW92ZXMgc3R5bGUgZWxlbWVudHMgZnJvbSBhbGwgbGl0LWh0bWwgVGVtcGxhdGVzIGZvciB0aGlzIHNjb3BlIG5hbWUuXG4gKlxuICogTm90ZSwgPHN0eWxlPiBlbGVtZW50cyBjYW4gb25seSBiZSBwbGFjZWQgaW50byB0ZW1wbGF0ZXMgZm9yIHRoZVxuICogaW5pdGlhbCByZW5kZXJpbmcgb2YgdGhlIHNjb3BlLiBJZiA8c3R5bGU+IGVsZW1lbnRzIGFyZSBpbmNsdWRlZCBpbiB0ZW1wbGF0ZXNcbiAqIGR5bmFtaWNhbGx5IHJlbmRlcmVkIHRvIHRoZSBzY29wZSAoYWZ0ZXIgdGhlIGZpcnN0IHNjb3BlIHJlbmRlciksIHRoZXkgd2lsbFxuICogbm90IGJlIHNjb3BlZCBhbmQgdGhlIDxzdHlsZT4gd2lsbCBiZSBsZWZ0IGluIHRoZSB0ZW1wbGF0ZSBhbmQgcmVuZGVyZWRcbiAqIG91dHB1dC5cbiAqL1xuY29uc3QgcHJlcGFyZVRlbXBsYXRlU3R5bGVzID1cbiAgICAocmVuZGVyZWRET006IERvY3VtZW50RnJhZ21lbnQsIHRlbXBsYXRlOiBUZW1wbGF0ZSwgc2NvcGVOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHNoYWR5UmVuZGVyU2V0LmFkZChzY29wZU5hbWUpO1xuICAgICAgLy8gTW92ZSBzdHlsZXMgb3V0IG9mIHJlbmRlcmVkIERPTSBhbmQgc3RvcmUuXG4gICAgICBjb25zdCBzdHlsZXMgPSByZW5kZXJlZERPTS5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpO1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHN0eWxlcywgc2tpcCB1bm5lY2Vzc2FyeSB3b3JrXG4gICAgICBpZiAoc3R5bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBFbnN1cmUgcHJlcGFyZVRlbXBsYXRlU3R5bGVzIGlzIGNhbGxlZCB0byBzdXBwb3J0IGFkZGluZ1xuICAgICAgICAvLyBzdHlsZXMgdmlhIGBwcmVwYXJlQWRvcHRlZENzc1RleHRgIHNpbmNlIHRoYXQgcmVxdWlyZXMgdGhhdFxuICAgICAgICAvLyBgcHJlcGFyZVRlbXBsYXRlU3R5bGVzYCBpcyBjYWxsZWQuXG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUyEucHJlcGFyZVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLmVsZW1lbnQsIHNjb3BlTmFtZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbmRlbnNlZFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIC8vIENvbGxlY3Qgc3R5bGVzIGludG8gYSBzaW5nbGUgc3R5bGUuIFRoaXMgaGVscHMgdXMgbWFrZSBzdXJlIFNoYWR5Q1NTXG4gICAgICAvLyBtYW5pcHVsYXRpb25zIHdpbGwgbm90IHByZXZlbnQgdXMgZnJvbSBiZWluZyBhYmxlIHRvIGZpeCB1cCB0ZW1wbGF0ZVxuICAgICAgLy8gcGFydCBpbmRpY2VzLlxuICAgICAgLy8gTk9URTogY29sbGVjdGluZyBzdHlsZXMgaXMgaW5lZmZpY2llbnQgZm9yIGJyb3dzZXJzIGJ1dCBTaGFkeUNTU1xuICAgICAgLy8gY3VycmVudGx5IGRvZXMgdGhpcyBhbnl3YXkuIFdoZW4gaXQgZG9lcyBub3QsIHRoaXMgc2hvdWxkIGJlIGNoYW5nZWQuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlc1tpXTtcbiAgICAgICAgc3R5bGUucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuICAgICAgICBjb25kZW5zZWRTdHlsZS50ZXh0Q29udGVudCEgKz0gc3R5bGUudGV4dENvbnRlbnQ7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgc3R5bGVzIGZyb20gbmVzdGVkIHRlbXBsYXRlcyBpbiB0aGlzIHNjb3BlLlxuICAgICAgcmVtb3ZlU3R5bGVzRnJvbUxpdFRlbXBsYXRlcyhzY29wZU5hbWUpO1xuICAgICAgLy8gQW5kIHRoZW4gcHV0IHRoZSBjb25kZW5zZWQgc3R5bGUgaW50byB0aGUgXCJyb290XCIgdGVtcGxhdGUgcGFzc2VkIGluIGFzXG4gICAgICAvLyBgdGVtcGxhdGVgLlxuICAgICAgaW5zZXJ0Tm9kZUludG9UZW1wbGF0ZShcbiAgICAgICAgICB0ZW1wbGF0ZSwgY29uZGVuc2VkU3R5bGUsIHRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgIC8vIE5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgU2hhZHlDU1MgZ2V0cyB0aGUgdGVtcGxhdGUgdGhhdCBgbGl0LWh0bWxgXG4gICAgICAvLyB3aWxsIGFjdHVhbGx5IHJlbmRlciBzbyB0aGF0IGl0IGNhbiB1cGRhdGUgdGhlIHN0eWxlIGluc2lkZSB3aGVuXG4gICAgICAvLyBuZWVkZWQgKGUuZy4gQGFwcGx5IG5hdGl2ZSBTaGFkb3cgRE9NIGNhc2UpLlxuICAgICAgd2luZG93LlNoYWR5Q1NTIS5wcmVwYXJlVGVtcGxhdGVTdHlsZXModGVtcGxhdGUuZWxlbWVudCwgc2NvcGVOYW1lKTtcbiAgICAgIGlmICh3aW5kb3cuU2hhZHlDU1MhLm5hdGl2ZVNoYWRvdykge1xuICAgICAgICAvLyBXaGVuIGluIG5hdGl2ZSBTaGFkb3cgRE9NLCByZS1hZGQgc3R5bGluZyB0byByZW5kZXJlZCBjb250ZW50IHVzaW5nXG4gICAgICAgIC8vIHRoZSBzdHlsZSBTaGFkeUNTUyBwcm9kdWNlZC5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3R5bGUnKSE7XG4gICAgICAgIHJlbmRlcmVkRE9NLmluc2VydEJlZm9yZShzdHlsZS5jbG9uZU5vZGUodHJ1ZSksIHJlbmRlcmVkRE9NLmZpcnN0Q2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2hlbiBub3QgaW4gbmF0aXZlIFNoYWRvdyBET00sIGF0IHRoaXMgcG9pbnQgU2hhZHlDU1Mgd2lsbCBoYXZlXG4gICAgICAgIC8vIHJlbW92ZWQgdGhlIHN0eWxlIGZyb20gdGhlIGxpdCB0ZW1wbGF0ZSBhbmQgcGFydHMgd2lsbCBiZSBicm9rZW4gYXMgYVxuICAgICAgICAvLyByZXN1bHQuIFRvIGZpeCB0aGlzLCB3ZSBwdXQgYmFjayB0aGUgc3R5bGUgbm9kZSBTaGFkeUNTUyByZW1vdmVkXG4gICAgICAgIC8vIGFuZCB0aGVuIHRlbGwgbGl0IHRvIHJlbW92ZSB0aGF0IG5vZGUgZnJvbSB0aGUgdGVtcGxhdGUuXG4gICAgICAgIC8vIE5PVEUsIFNoYWR5Q1NTIGNyZWF0ZXMgaXRzIG93biBzdHlsZSBzbyB3ZSBjYW4gc2FmZWx5IGFkZC9yZW1vdmVcbiAgICAgICAgLy8gYGNvbmRlbnNlZFN0eWxlYCBoZXJlLlxuICAgICAgICB0ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgY29uZGVuc2VkU3R5bGUsIHRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgcmVtb3Zlcy5hZGQoY29uZGVuc2VkU3R5bGUpO1xuICAgICAgICByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZSh0ZW1wbGF0ZSwgcmVtb3Zlcyk7XG4gICAgICB9XG4gICAgfTtcblxuZXhwb3J0IGludGVyZmFjZSBTaGFkeVJlbmRlck9wdGlvbnMgZXh0ZW5kcyBQYXJ0aWFsPFJlbmRlck9wdGlvbnM+IHtcbiAgc2NvcGVOYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRXh0ZW5zaW9uIHRvIHRoZSBzdGFuZGFyZCBgcmVuZGVyYCBtZXRob2Qgd2hpY2ggc3VwcG9ydHMgcmVuZGVyaW5nXG4gKiB0byBTaGFkb3dSb290cyB3aGVuIHRoZSBTaGFkeURPTSAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHlkb20pXG4gKiBhbmQgU2hhZHlDU1MgKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3NoYWR5Y3NzKSBwb2x5ZmlsbHMgYXJlIHVzZWRcbiAqIG9yIHdoZW4gdGhlIHdlYmNvbXBvbmVudHNqc1xuICogKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcykgcG9seWZpbGwgaXMgdXNlZC5cbiAqXG4gKiBBZGRzIGEgYHNjb3BlTmFtZWAgb3B0aW9uIHdoaWNoIGlzIHVzZWQgdG8gc2NvcGUgZWxlbWVudCBET00gYW5kIHN0eWxlc2hlZXRzXG4gKiB3aGVuIG5hdGl2ZSBTaGFkb3dET00gaXMgdW5hdmFpbGFibGUuIFRoZSBgc2NvcGVOYW1lYCB3aWxsIGJlIGFkZGVkIHRvXG4gKiB0aGUgY2xhc3MgYXR0cmlidXRlIG9mIGFsbCByZW5kZXJlZCBET00uIEluIGFkZGl0aW9uLCBhbnkgc3R5bGUgZWxlbWVudHMgd2lsbFxuICogYmUgYXV0b21hdGljYWxseSByZS13cml0dGVuIHdpdGggdGhpcyBgc2NvcGVOYW1lYCBzZWxlY3RvciBhbmQgbW92ZWQgb3V0XG4gKiBvZiB0aGUgcmVuZGVyZWQgRE9NIGFuZCBpbnRvIHRoZSBkb2N1bWVudCBgPGhlYWQ+YC5cbiAqXG4gKiBJdCBpcyBjb21tb24gdG8gdXNlIHRoaXMgcmVuZGVyIG1ldGhvZCBpbiBjb25qdW5jdGlvbiB3aXRoIGEgY3VzdG9tIGVsZW1lbnRcbiAqIHdoaWNoIHJlbmRlcnMgYSBzaGFkb3dSb290LiBXaGVuIHRoaXMgaXMgZG9uZSwgdHlwaWNhbGx5IHRoZSBlbGVtZW50J3NcbiAqIGBsb2NhbE5hbWVgIHNob3VsZCBiZSB1c2VkIGFzIHRoZSBgc2NvcGVOYW1lYC5cbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBET00gc2NvcGluZywgU2hhZHlDU1MgYWxzbyBzdXBwb3J0cyBhIGJhc2ljIHNoaW0gZm9yIGNzc1xuICogY3VzdG9tIHByb3BlcnRpZXMgKG5lZWRlZCBvbmx5IG9uIG9sZGVyIGJyb3dzZXJzIGxpa2UgSUUxMSkgYW5kIGEgc2hpbSBmb3JcbiAqIGEgZGVwcmVjYXRlZCBmZWF0dXJlIGNhbGxlZCBgQGFwcGx5YCB0aGF0IHN1cHBvcnRzIGFwcGx5aW5nIGEgc2V0IG9mIGNzc1xuICogY3VzdG9tIHByb3BlcnRpZXMgdG8gYSBnaXZlbiBsb2NhdGlvbi5cbiAqXG4gKiBVc2FnZSBjb25zaWRlcmF0aW9uczpcbiAqXG4gKiAqIFBhcnQgdmFsdWVzIGluIGA8c3R5bGU+YCBlbGVtZW50cyBhcmUgb25seSBhcHBsaWVkIHRoZSBmaXJzdCB0aW1lIGEgZ2l2ZW5cbiAqIGBzY29wZU5hbWVgIHJlbmRlcnMuIFN1YnNlcXVlbnQgY2hhbmdlcyB0byBwYXJ0cyBpbiBzdHlsZSBlbGVtZW50cyB3aWxsIGhhdmVcbiAqIG5vIGVmZmVjdC4gQmVjYXVzZSBvZiB0aGlzLCBwYXJ0cyBpbiBzdHlsZSBlbGVtZW50cyBzaG91bGQgb25seSBiZSB1c2VkIGZvclxuICogdmFsdWVzIHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UsIGZvciBleGFtcGxlIHBhcnRzIHRoYXQgc2V0IHNjb3BlLXdpZGUgdGhlbWVcbiAqIHZhbHVlcyBvciBwYXJ0cyB3aGljaCByZW5kZXIgc2hhcmVkIHN0eWxlIGVsZW1lbnRzLlxuICpcbiAqICogTm90ZSwgZHVlIHRvIGEgbGltaXRhdGlvbiBvZiB0aGUgU2hhZHlET00gcG9seWZpbGwsIHJlbmRlcmluZyBpbiBhXG4gKiBjdXN0b20gZWxlbWVudCdzIGBjb25zdHJ1Y3RvcmAgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCByZW5kZXJpbmcgc2hvdWxkXG4gKiBlaXRoZXIgZG9uZSBhc3luY2hyb25vdXNseSwgZm9yIGV4YW1wbGUgYXQgbWljcm90YXNrIHRpbWluZyAoZm9yIGV4YW1wbGVcbiAqIGBQcm9taXNlLnJlc29sdmUoKWApLCBvciBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZmlyc3QgdGltZSB0aGUgZWxlbWVudCdzXG4gKiBgY29ubmVjdGVkQ2FsbGJhY2tgIHJ1bnMuXG4gKlxuICogVXNhZ2UgY29uc2lkZXJhdGlvbnMgd2hlbiB1c2luZyBzaGltbWVkIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIGBAYXBwbHlgOlxuICpcbiAqICogV2hlbmV2ZXIgYW55IGR5bmFtaWMgY2hhbmdlcyBhcmUgbWFkZSB3aGljaCBhZmZlY3RcbiAqIGNzcyBjdXN0b20gcHJvcGVydGllcywgYFNoYWR5Q1NTLnN0eWxlRWxlbWVudChlbGVtZW50KWAgbXVzdCBiZSBjYWxsZWRcbiAqIHRvIHVwZGF0ZSB0aGUgZWxlbWVudC4gVGhlcmUgYXJlIHR3byBjYXNlcyB3aGVuIHRoaXMgaXMgbmVlZGVkOlxuICogKDEpIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byBhIG5ldyBwYXJlbnQsICgyKSBhIGNsYXNzIGlzIGFkZGVkIHRvIHRoZVxuICogZWxlbWVudCB0aGF0IGNhdXNlcyBpdCB0byBtYXRjaCBkaWZmZXJlbnQgY3VzdG9tIHByb3BlcnRpZXMuXG4gKiBUbyBhZGRyZXNzIHRoZSBmaXJzdCBjYXNlIHdoZW4gcmVuZGVyaW5nIGEgY3VzdG9tIGVsZW1lbnQsIGBzdHlsZUVsZW1lbnRgXG4gKiBzaG91bGQgYmUgY2FsbGVkIGluIHRoZSBlbGVtZW50J3MgYGNvbm5lY3RlZENhbGxiYWNrYC5cbiAqXG4gKiAqIFNoaW1tZWQgY3VzdG9tIHByb3BlcnRpZXMgbWF5IG9ubHkgYmUgZGVmaW5lZCBlaXRoZXIgZm9yIGFuIGVudGlyZVxuICogc2hhZG93Um9vdCAoZm9yIGV4YW1wbGUsIGluIGEgYDpob3N0YCBydWxlKSBvciB2aWEgYSBydWxlIHRoYXQgZGlyZWN0bHlcbiAqIG1hdGNoZXMgYW4gZWxlbWVudCB3aXRoIGEgc2hhZG93Um9vdC4gSW4gb3RoZXIgd29yZHMsIGluc3RlYWQgb2YgZmxvd2luZyBmcm9tXG4gKiBwYXJlbnQgdG8gY2hpbGQgYXMgZG8gbmF0aXZlIGNzcyBjdXN0b20gcHJvcGVydGllcywgc2hpbW1lZCBjdXN0b20gcHJvcGVydGllc1xuICogZmxvdyBvbmx5IGZyb20gc2hhZG93Um9vdHMgdG8gbmVzdGVkIHNoYWRvd1Jvb3RzLlxuICpcbiAqICogV2hlbiB1c2luZyBgQGFwcGx5YCBtaXhpbmcgY3NzIHNob3J0aGFuZCBwcm9wZXJ0eSBuYW1lcyB3aXRoXG4gKiBub24tc2hvcnRoYW5kIG5hbWVzIChmb3IgZXhhbXBsZSBgYm9yZGVyYCBhbmQgYGJvcmRlci13aWR0aGApIGlzIG5vdFxuICogc3VwcG9ydGVkLlxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyID1cbiAgICAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCxcbiAgICAgY29udGFpbmVyOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnQsXG4gICAgIG9wdGlvbnM6IFNoYWR5UmVuZGVyT3B0aW9ucykgPT4ge1xuICAgICAgY29uc3Qgc2NvcGVOYW1lID0gb3B0aW9ucy5zY29wZU5hbWU7XG4gICAgICBjb25zdCBoYXNSZW5kZXJlZCA9IHBhcnRzLmhhcyhjb250YWluZXIpO1xuICAgICAgY29uc3QgbmVlZHNTY29waW5nID0gY29udGFpbmVyIGluc3RhbmNlb2YgU2hhZG93Um9vdCAmJlxuICAgICAgICAgIGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gJiYgcmVzdWx0IGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQ7XG4gICAgICAvLyBIYW5kbGUgZmlyc3QgcmVuZGVyIHRvIGEgc2NvcGUgc3BlY2lhbGx5Li4uXG4gICAgICBjb25zdCBmaXJzdFNjb3BlUmVuZGVyID0gbmVlZHNTY29waW5nICYmICFzaGFkeVJlbmRlclNldC5oYXMoc2NvcGVOYW1lKTtcbiAgICAgIC8vIE9uIGZpcnN0IHNjb3BlIHJlbmRlciwgcmVuZGVyIGludG8gYSBmcmFnbWVudDsgdGhpcyBjYW5ub3QgYmUgYSBzaW5nbGVcbiAgICAgIC8vIGZyYWdtZW50IHRoYXQgaXMgcmV1c2VkIHNpbmNlIG5lc3RlZCByZW5kZXJzIGNhbiBvY2N1ciBzeW5jaHJvbm91c2x5LlxuICAgICAgY29uc3QgcmVuZGVyQ29udGFpbmVyID1cbiAgICAgICAgICBmaXJzdFNjb3BlUmVuZGVyID8gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpIDogY29udGFpbmVyO1xuICAgICAgbGl0UmVuZGVyKFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICByZW5kZXJDb250YWluZXIsXG4gICAgICAgICAge3RlbXBsYXRlRmFjdG9yeTogc2hhZHlUZW1wbGF0ZUZhY3Rvcnkoc2NvcGVOYW1lKSwgLi4ub3B0aW9uc30gYXNcbiAgICAgICAgICAgICAgUmVuZGVyT3B0aW9ucyk7XG4gICAgICAvLyBXaGVuIHBlcmZvcm1pbmcgZmlyc3Qgc2NvcGUgcmVuZGVyLFxuICAgICAgLy8gKDEpIFdlJ3ZlIHJlbmRlcmVkIGludG8gYSBmcmFnbWVudCBzbyB0aGF0IHRoZXJlJ3MgYSBjaGFuY2UgdG9cbiAgICAgIC8vIGBwcmVwYXJlVGVtcGxhdGVTdHlsZXNgIGJlZm9yZSBzdWItZWxlbWVudHMgaGl0IHRoZSBET01cbiAgICAgIC8vICh3aGljaCBtaWdodCBjYXVzZSB0aGVtIHRvIHJlbmRlciBiYXNlZCBvbiBhIGNvbW1vbiBwYXR0ZXJuIG9mXG4gICAgICAvLyByZW5kZXJpbmcgaW4gYSBjdXN0b20gZWxlbWVudCdzIGBjb25uZWN0ZWRDYWxsYmFja2ApO1xuICAgICAgLy8gKDIpIFNjb3BlIHRoZSB0ZW1wbGF0ZSB3aXRoIFNoYWR5Q1NTIG9uZSB0aW1lIG9ubHkgZm9yIHRoaXMgc2NvcGUuXG4gICAgICAvLyAoMykgUmVuZGVyIHRoZSBmcmFnbWVudCBpbnRvIHRoZSBjb250YWluZXIgYW5kIG1ha2Ugc3VyZSB0aGVcbiAgICAgIC8vIGNvbnRhaW5lciBrbm93cyBpdHMgYHBhcnRgIGlzIHRoZSBvbmUgd2UganVzdCByZW5kZXJlZC4gVGhpcyBlbnN1cmVzXG4gICAgICAvLyBET00gd2lsbCBiZSByZS11c2VkIG9uIHN1YnNlcXVlbnQgcmVuZGVycy5cbiAgICAgIGlmIChmaXJzdFNjb3BlUmVuZGVyKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0cy5nZXQocmVuZGVyQ29udGFpbmVyKSE7XG4gICAgICAgIHBhcnRzLmRlbGV0ZShyZW5kZXJDb250YWluZXIpO1xuICAgICAgICBpZiAocGFydC52YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlSW5zdGFuY2UpIHtcbiAgICAgICAgICBwcmVwYXJlVGVtcGxhdGVTdHlsZXMoXG4gICAgICAgICAgICAgIHJlbmRlckNvbnRhaW5lciBhcyBEb2N1bWVudEZyYWdtZW50LFxuICAgICAgICAgICAgICBwYXJ0LnZhbHVlLnRlbXBsYXRlLFxuICAgICAgICAgICAgICBzY29wZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZU5vZGVzKGNvbnRhaW5lciwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQ29udGFpbmVyKTtcbiAgICAgICAgcGFydHMuc2V0KGNvbnRhaW5lciwgcGFydCk7XG4gICAgICB9XG4gICAgICAvLyBBZnRlciBlbGVtZW50cyBoYXZlIGhpdCB0aGUgRE9NLCB1cGRhdGUgc3R5bGluZyBpZiB0aGlzIGlzIHRoZVxuICAgICAgLy8gaW5pdGlhbCByZW5kZXIgdG8gdGhpcyBjb250YWluZXIuXG4gICAgICAvLyBUaGlzIGlzIG5lZWRlZCB3aGVuZXZlciBkeW5hbWljIGNoYW5nZXMgYXJlIG1hZGUgc28gaXQgd291bGQgYmVcbiAgICAgIC8vIHNhZmVzdCB0byBkbyBldmVyeSByZW5kZXI7IGhvd2V2ZXIsIHRoaXMgd291bGQgcmVncmVzcyBwZXJmb3JtYW5jZVxuICAgICAgLy8gc28gd2UgbGVhdmUgaXQgdXAgdG8gdGhlIHVzZXIgdG8gY2FsbCBgU2hhZHlDU1NTLnN0eWxlRWxlbWVudGBcbiAgICAgIC8vIGZvciBkeW5hbWljIGNoYW5nZXMuXG4gICAgICBpZiAoIWhhc1JlbmRlcmVkICYmIG5lZWRzU2NvcGluZykge1xuICAgICAgICB3aW5kb3cuU2hhZHlDU1MhLnN0eWxlRWxlbWVudCgoY29udGFpbmVyIGFzIFNoYWRvd1Jvb3QpLmhvc3QpO1xuICAgICAgfVxuICAgIH07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcbmltcG9ydCB7bWFya2VyLCBUZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0eXBlIHRoYXQgY3JlYXRlcyBhIFRlbXBsYXRlIGZyb20gYSBUZW1wbGF0ZVJlc3VsdC5cbiAqXG4gKiBUaGlzIGlzIGEgaG9vayBpbnRvIHRoZSB0ZW1wbGF0ZS1jcmVhdGlvbiBwcm9jZXNzIGZvciByZW5kZXJpbmcgdGhhdFxuICogcmVxdWlyZXMgc29tZSBtb2RpZmljYXRpb24gb2YgdGVtcGxhdGVzIGJlZm9yZSB0aGV5J3JlIHVzZWQsIGxpa2UgU2hhZHlDU1MsXG4gKiB3aGljaCBtdXN0IGFkZCBjbGFzc2VzIHRvIGVsZW1lbnRzIGFuZCByZW1vdmUgc3R5bGVzLlxuICpcbiAqIFRlbXBsYXRlcyBzaG91bGQgYmUgY2FjaGVkIGFzIGFnZ3Jlc3NpdmVseSBhcyBwb3NzaWJsZSwgc28gdGhhdCBtYW55XG4gKiBUZW1wbGF0ZVJlc3VsdHMgcHJvZHVjZWQgZnJvbSB0aGUgc2FtZSBleHByZXNzaW9uIG9ubHkgZG8gdGhlIHdvcmsgb2ZcbiAqIGNyZWF0aW5nIHRoZSBUZW1wbGF0ZSB0aGUgZmlyc3QgdGltZS5cbiAqXG4gKiBUZW1wbGF0ZXMgYXJlIHVzdWFsbHkgY2FjaGVkIGJ5IFRlbXBsYXRlUmVzdWx0LnN0cmluZ3MgYW5kXG4gKiBUZW1wbGF0ZVJlc3VsdC50eXBlLCBidXQgbWF5IGJlIGNhY2hlZCBieSBvdGhlciBrZXlzIGlmIHRoaXMgZnVuY3Rpb25cbiAqIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZS5cbiAqXG4gKiBOb3RlIHRoYXQgY3VycmVudGx5IFRlbXBsYXRlRmFjdG9yaWVzIG11c3Qgbm90IGFkZCwgcmVtb3ZlLCBvciByZW9yZGVyXG4gKiBleHByZXNzaW9ucywgYmVjYXVzZSB0aGVyZSBpcyBubyB3YXkgdG8gZGVzY3JpYmUgc3VjaCBhIG1vZGlmaWNhdGlvblxuICogdG8gcmVuZGVyKCkgc28gdGhhdCB2YWx1ZXMgYXJlIGludGVycG9sYXRlZCB0byB0aGUgY29ycmVjdCBwbGFjZSBpbiB0aGVcbiAqIHRlbXBsYXRlIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0IHR5cGUgVGVtcGxhdGVGYWN0b3J5ID0gKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQpID0+IFRlbXBsYXRlO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IFRlbXBsYXRlRmFjdG9yeSB3aGljaCBjYWNoZXMgVGVtcGxhdGVzIGtleWVkIG9uXG4gKiByZXN1bHQudHlwZSBhbmQgcmVzdWx0LnN0cmluZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZUZhY3RvcnkocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkge1xuICBsZXQgdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGVzLmdldChyZXN1bHQudHlwZSk7XG4gIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICB0ZW1wbGF0ZUNhY2hlID0ge1xuICAgICAgc3RyaW5nc0FycmF5OiBuZXcgV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+KCksXG4gICAgICBrZXlTdHJpbmc6IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZT4oKVxuICAgIH07XG4gICAgdGVtcGxhdGVDYWNoZXMuc2V0KHJlc3VsdC50eXBlLCB0ZW1wbGF0ZUNhY2hlKTtcbiAgfVxuXG4gIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LmdldChyZXN1bHQuc3RyaW5ncyk7XG4gIGlmICh0ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgLy8gSWYgdGhlIFRlbXBsYXRlU3RyaW5nc0FycmF5IGlzIG5ldywgZ2VuZXJhdGUgYSBrZXkgZnJvbSB0aGUgc3RyaW5nc1xuICAvLyBUaGlzIGtleSBpcyBzaGFyZWQgYmV0d2VlbiBhbGwgdGVtcGxhdGVzIHdpdGggaWRlbnRpY2FsIGNvbnRlbnRcbiAgY29uc3Qga2V5ID0gcmVzdWx0LnN0cmluZ3Muam9pbihtYXJrZXIpO1xuXG4gIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIFRlbXBsYXRlIGZvciB0aGlzIGtleVxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLmdldChrZXkpO1xuICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIElmIHdlIGhhdmUgbm90IHNlZW4gdGhpcyBrZXkgYmVmb3JlLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVcbiAgICB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShyZXN1bHQsIHJlc3VsdC5nZXRUZW1wbGF0ZUVsZW1lbnQoKSk7XG4gICAgLy8gQ2FjaGUgdGhlIFRlbXBsYXRlIGZvciB0aGlzIGtleVxuICAgIHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLnNldChrZXksIHRlbXBsYXRlKTtcbiAgfVxuXG4gIC8vIENhY2hlIGFsbCBmdXR1cmUgcXVlcmllcyBmb3IgdGhpcyBUZW1wbGF0ZVN0cmluZ3NBcnJheVxuICB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5zZXQocmVzdWx0LnN0cmluZ3MsIHRlbXBsYXRlKTtcbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vKipcbiAqIFRoZSBmaXJzdCBhcmd1bWVudCB0byBKUyB0ZW1wbGF0ZSB0YWdzIHJldGFpbiBpZGVudGl0eSBhY3Jvc3MgbXVsdGlwbGVcbiAqIGNhbGxzIHRvIGEgdGFnIGZvciB0aGUgc2FtZSBsaXRlcmFsLCBzbyB3ZSBjYW4gY2FjaGUgd29yayBkb25lIHBlciBsaXRlcmFsXG4gKiBpbiBhIE1hcC5cbiAqXG4gKiBTYWZhcmkgY3VycmVudGx5IGhhcyBhIGJ1ZyB3aGljaCBvY2Nhc2lvbmFsbHkgYnJlYWtzIHRoaXMgYmVoYXZpb3VyLCBzbyB3ZVxuICogbmVlZCB0byBjYWNoZSB0aGUgVGVtcGxhdGUgYXQgdHdvIGxldmVscy4gV2UgZmlyc3QgY2FjaGUgdGhlXG4gKiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgYW5kIGlmIHRoYXQgZmFpbHMsIHdlIGNhY2hlIGEga2V5IGNvbnN0cnVjdGVkIGJ5XG4gKiBqb2luaW5nIHRoZSBzdHJpbmdzIGFycmF5LlxuICovXG5leHBvcnQgdHlwZSB0ZW1wbGF0ZUNhY2hlID0ge1xuICBzdHJpbmdzQXJyYXk6IFdlYWtNYXA8VGVtcGxhdGVTdHJpbmdzQXJyYXksIFRlbXBsYXRlPjtcbiAga2V5U3RyaW5nOiBNYXA8c3RyaW5nLCBUZW1wbGF0ZT47XG59O1xuXG5leHBvcnQgY29uc3QgdGVtcGxhdGVDYWNoZXMgPSBuZXcgTWFwPHN0cmluZywgdGVtcGxhdGVDYWNoZT4oKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtpc0NFUG9seWZpbGx9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7UGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5pbXBvcnQge2lzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYSBgVGVtcGxhdGVgIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBET00gYW5kIHVwZGF0ZWRcbiAqIHdpdGggbmV3IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICBfcGFydHM6IEFycmF5PFBhcnR8dW5kZWZpbmVkPiA9IFtdO1xuICBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yO1xuICBvcHRpb25zOiBSZW5kZXJPcHRpb25zO1xuICB0ZW1wbGF0ZTogVGVtcGxhdGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICB0ZW1wbGF0ZTogVGVtcGxhdGUsIHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3IsXG4gICAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICB1cGRhdGUodmFsdWVzOiB1bmtub3duW10pIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX3BhcnRzKSB7XG4gICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWVzW2ldKTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX3BhcnRzKSB7XG4gICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2Nsb25lKCk6IERvY3VtZW50RnJhZ21lbnQge1xuICAgIC8vIFdoZW4gdXNpbmcgdGhlIEN1c3RvbSBFbGVtZW50cyBwb2x5ZmlsbCwgY2xvbmUgdGhlIG5vZGUsIHJhdGhlciB0aGFuXG4gICAgLy8gaW1wb3J0aW5nIGl0LCB0byBrZWVwIHRoZSBmcmFnbWVudCBpbiB0aGUgdGVtcGxhdGUncyBkb2N1bWVudC4gVGhpc1xuICAgIC8vIGxlYXZlcyB0aGUgZnJhZ21lbnQgaW5lcnQgc28gY3VzdG9tIGVsZW1lbnRzIHdvbid0IHVwZ3JhZGUgYW5kXG4gICAgLy8gcG90ZW50aWFsbHkgbW9kaWZ5IHRoZWlyIGNvbnRlbnRzIGJ5IGNyZWF0aW5nIGEgcG9seWZpbGxlZCBTaGFkb3dSb290XG4gICAgLy8gd2hpbGUgd2UgdHJhdmVyc2UgdGhlIHRyZWUuXG4gICAgY29uc3QgZnJhZ21lbnQgPSBpc0NFUG9seWZpbGwgP1xuICAgICAgICB0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRGcmFnbWVudCA6XG4gICAgICAgIGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQsIHRydWUpO1xuXG4gICAgY29uc3QgcGFydHMgPSB0aGlzLnRlbXBsYXRlLnBhcnRzO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgIGNvbnN0IF9wcmVwYXJlSW5zdGFuY2UgPSAoZnJhZ21lbnQ6IERvY3VtZW50RnJhZ21lbnQpID0+IHtcbiAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmVcbiAgICAgIC8vIG51bGxcbiAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgZmFsc2UpO1xuICAgICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIG5vZGVzIGFuZCBwYXJ0cyBvZiBhIHRlbXBsYXRlXG4gICAgICB3aGlsZSAocGFydEluZGV4IDwgcGFydHMubGVuZ3RoICYmIG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgIC8vIENvbnNlY3V0aXZlIFBhcnRzIG1heSBoYXZlIHRoZSBzYW1lIG5vZGUgaW5kZXgsIGluIHRoZSBjYXNlIG9mXG4gICAgICAgIC8vIG11bHRpcGxlIGJvdW5kIGF0dHJpYnV0ZXMgb24gYW4gZWxlbWVudC4gU28gZWFjaCBpdGVyYXRpb24gd2UgZWl0aGVyXG4gICAgICAgIC8vIGluY3JlbWVudCB0aGUgbm9kZUluZGV4LCBpZiB3ZSBhcmVuJ3Qgb24gYSBub2RlIHdpdGggYSBwYXJ0LCBvciB0aGVcbiAgICAgICAgLy8gcGFydEluZGV4IGlmIHdlIGFyZS4gQnkgbm90IGluY3JlbWVudGluZyB0aGUgbm9kZUluZGV4IHdoZW4gd2UgZmluZCBhXG4gICAgICAgIC8vIHBhcnQsIHdlIGFsbG93IGZvciB0aGUgbmV4dCBwYXJ0IHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudFxuICAgICAgICAvLyBub2RlIGlmIG5lY2Nlc3Nhc3J5LlxuICAgICAgICBpZiAoIWlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgICAgdGhpcy5fcGFydHMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGVJbmRleCA9PT0gcGFydC5pbmRleCkge1xuICAgICAgICAgIGlmIChwYXJ0LnR5cGUgPT09ICdub2RlJykge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucHJvY2Vzc29yLmhhbmRsZVRleHRFeHByZXNzaW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICBwYXJ0Lmluc2VydEFmdGVyTm9kZShub2RlLnByZXZpb3VzU2libGluZyEpO1xuICAgICAgICAgICAgdGhpcy5fcGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGFydHMucHVzaCguLi50aGlzLnByb2Nlc3Nvci5oYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhcbiAgICAgICAgICAgICAgICBub2RlIGFzIEVsZW1lbnQsIHBhcnQubmFtZSwgcGFydC5zdHJpbmdzLCB0aGlzLm9wdGlvbnMpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICAgIF9wcmVwYXJlSW5zdGFuY2UoKG5vZGUgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCkuY29udGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgX3ByZXBhcmVJbnN0YW5jZShmcmFnbWVudCk7XG4gICAgaWYgKGlzQ0VQb2x5ZmlsbCkge1xuICAgICAgZG9jdW1lbnQuYWRvcHROb2RlKGZyYWdtZW50KTtcbiAgICAgIGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUoZnJhZ21lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtyZXBhcmVudE5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5pbXBvcnQge2JvdW5kQXR0cmlidXRlU3VmZml4LCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LCBtYXJrZXIsIG5vZGVNYXJrZXJ9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vKipcbiAqIFRoZSByZXR1cm4gdHlwZSBvZiBgaHRtbGAsIHdoaWNoIGhvbGRzIGEgVGVtcGxhdGUgYW5kIHRoZSB2YWx1ZXMgZnJvbVxuICogaW50ZXJwb2xhdGVkIGV4cHJlc3Npb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVSZXN1bHQge1xuICBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheTtcbiAgdmFsdWVzOiB1bmtub3duW107XG4gIHR5cGU6IHN0cmluZztcbiAgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3NvcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCB2YWx1ZXM6IHVua25vd25bXSwgdHlwZTogc3RyaW5nLFxuICAgICAgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3Nvcikge1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIEhUTUwgdXNlZCB0byBjcmVhdGUgYSBgPHRlbXBsYXRlPmAgZWxlbWVudC5cbiAgICovXG4gIGdldEhUTUwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbmRJbmRleCA9IHRoaXMuc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmRJbmRleDsgaSsrKSB7XG4gICAgICBjb25zdCBzID0gdGhpcy5zdHJpbmdzW2ldO1xuICAgICAgLy8gVGhpcyBleGVjKCkgY2FsbCBkb2VzIHR3byB0aGluZ3M6XG4gICAgICAvLyAxKSBBcHBlbmRzIGEgc3VmZml4IHRvIHRoZSBib3VuZCBhdHRyaWJ1dGUgbmFtZSB0byBvcHQgb3V0IG9mIHNwZWNpYWxcbiAgICAgIC8vIGF0dHJpYnV0ZSB2YWx1ZSBwYXJzaW5nIHRoYXQgSUUxMSBhbmQgRWRnZSBkbywgbGlrZSBmb3Igc3R5bGUgYW5kXG4gICAgICAvLyBtYW55IFNWRyBhdHRyaWJ1dGVzLiBUaGUgVGVtcGxhdGUgY2xhc3MgYWxzbyBhcHBlbmRzIHRoZSBzYW1lIHN1ZmZpeFxuICAgICAgLy8gd2hlbiBsb29raW5nIHVwIGF0dHJpYnV0ZXMgdG8gY3JlYXRlIFBhcnRzLlxuICAgICAgLy8gMikgQWRkcyBhbiB1bnF1b3RlZC1hdHRyaWJ1dGUtc2FmZSBtYXJrZXIgZm9yIHRoZSBmaXJzdCBleHByZXNzaW9uIGluXG4gICAgICAvLyBhbiBhdHRyaWJ1dGUuIFN1YnNlcXVlbnQgYXR0cmlidXRlIGV4cHJlc3Npb25zIHdpbGwgdXNlIG5vZGUgbWFya2VycyxcbiAgICAgIC8vIGFuZCB0aGlzIGlzIHNhZmUgc2luY2UgYXR0cmlidXRlcyB3aXRoIG11bHRpcGxlIGV4cHJlc3Npb25zIGFyZVxuICAgICAgLy8gZ3VhcmFudGVlZCB0byBiZSBxdW90ZWQuXG4gICAgICBjb25zdCBtYXRjaCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAvLyBXZSdyZSBzdGFydGluZyBhIG5ldyBib3VuZCBhdHRyaWJ1dGUuXG4gICAgICAgIC8vIEFkZCB0aGUgc2FmZSBhdHRyaWJ1dGUgc3VmZml4LCBhbmQgdXNlIHVucXVvdGVkLWF0dHJpYnV0ZS1zYWZlXG4gICAgICAgIC8vIG1hcmtlci5cbiAgICAgICAgaHRtbCArPSBzLnN1YnN0cigwLCBtYXRjaC5pbmRleCkgKyBtYXRjaFsxXSArIG1hdGNoWzJdICtcbiAgICAgICAgICAgIGJvdW5kQXR0cmlidXRlU3VmZml4ICsgbWF0Y2hbM10gKyBtYXJrZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXZSdyZSBlaXRoZXIgaW4gYSBib3VuZCBub2RlLCBvciB0cmFpbGluZyBib3VuZCBhdHRyaWJ1dGUuXG4gICAgICAgIC8vIEVpdGhlciB3YXksIG5vZGVNYXJrZXIgaXMgc2FmZSB0byB1c2UuXG4gICAgICAgIGh0bWwgKz0gcyArIG5vZGVNYXJrZXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBodG1sICsgdGhpcy5zdHJpbmdzW2VuZEluZGV4XTtcbiAgfVxuXG4gIGdldFRlbXBsYXRlRWxlbWVudCgpOiBIVE1MVGVtcGxhdGVFbGVtZW50IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy5nZXRIVE1MKCk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG5cbi8qKlxuICogQSBUZW1wbGF0ZVJlc3VsdCBmb3IgU1ZHIGZyYWdtZW50cy5cbiAqXG4gKiBUaGlzIGNsYXNzIHdyYXBzIEhUTWwgaW4gYW4gYDxzdmc+YCB0YWcgaW4gb3JkZXIgdG8gcGFyc2UgaXRzIGNvbnRlbnRzIGluIHRoZVxuICogU1ZHIG5hbWVzcGFjZSwgdGhlbiBtb2RpZmllcyB0aGUgdGVtcGxhdGUgdG8gcmVtb3ZlIHRoZSBgPHN2Zz5gIHRhZyBzbyB0aGF0XG4gKiBjbG9uZXMgb25seSBjb250YWluZXIgdGhlIG9yaWdpbmFsIGZyYWdtZW50LlxuICovXG5leHBvcnQgY2xhc3MgU1ZHVGVtcGxhdGVSZXN1bHQgZXh0ZW5kcyBUZW1wbGF0ZVJlc3VsdCB7XG4gIGdldEhUTUwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxzdmc+JHtzdXBlci5nZXRIVE1MKCl9PC9zdmc+YDtcbiAgfVxuXG4gIGdldFRlbXBsYXRlRWxlbWVudCgpOiBIVE1MVGVtcGxhdGVFbGVtZW50IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHN1cGVyLmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQhO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XG4gICAgcmVwYXJlbnROb2Rlcyhjb250ZW50LCBzdmdFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcmtlciA9IGB7e2xpdC0ke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSgyKX19fWA7XG5cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgdXNlZCB0ZXh0LXBvc2l0aW9ucywgbXVsdGktYmluZGluZyBhdHRyaWJ1dGVzLCBhbmRcbiAqIGF0dHJpYnV0ZXMgd2l0aCBtYXJrdXAtbGlrZSB0ZXh0IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vZGVNYXJrZXIgPSBgPCEtLSR7bWFya2VyfS0tPmA7XG5cbmV4cG9ydCBjb25zdCBtYXJrZXJSZWdleCA9IG5ldyBSZWdFeHAoYCR7bWFya2VyfXwke25vZGVNYXJrZXJ9YCk7XG5cbi8qKlxuICogU3VmZml4IGFwcGVuZGVkIHRvIGFsbCBib3VuZCBhdHRyaWJ1dGUgbmFtZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG5cbi8qKlxuICogQW4gdXBkYXRlYWJsZSBUZW1wbGF0ZSB0aGF0IHRyYWNrcyB0aGUgbG9jYXRpb24gb2YgZHluYW1pYyBwYXJ0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIHtcbiAgcGFydHM6IFRlbXBsYXRlUGFydFtdID0gW107XG4gIGVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCwgZWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgY29uc3Qgbm9kZXNUb1JlbW92ZTogTm9kZVtdID0gW107XG4gICAgY29uc3QgX3ByZXBhcmVUZW1wbGF0ZSA9ICh0ZW1wbGF0ZTogSFRNTFRlbXBsYXRlRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlXG4gICAgICAvLyBudWxsXG4gICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgZmFsc2UpO1xuICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGxhc3QgaW5kZXggYXNzb2NpYXRlZCB3aXRoIGEgcGFydC4gV2UgdHJ5IHRvIGRlbGV0ZVxuICAgICAgLy8gdW5uZWNlc3Nhcnkgbm9kZXMsIGJ1dCB3ZSBuZXZlciB3YW50IHRvIGFzc29jaWF0ZSB0d28gZGlmZmVyZW50IHBhcnRzXG4gICAgICAvLyB0byB0aGUgc2FtZSBpbmRleC4gVGhleSBtdXN0IGhhdmUgYSBjb25zdGFudCBub2RlIGJldHdlZW4uXG4gICAgICBsZXQgbGFzdFBhcnRJbmRleCA9IDA7XG4gICAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZSBhcyBFbGVtZW50IHwgQ29tbWVudCB8IFRleHQ7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5vZGUuRUxFTUVOVF9OT0RFICovKSB7XG4gICAgICAgICAgaWYgKChub2RlIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IChub2RlIGFzIEVsZW1lbnQpLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAvLyBQZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9OYW1lZE5vZGVNYXAsXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGFyZSBub3QgZ3VhcmFudGVlZCB0byBiZSByZXR1cm5lZCBpbiBkb2N1bWVudCBvcmRlci5cbiAgICAgICAgICAgIC8vIEluIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90XG4gICAgICAgICAgICAvLyBhc3N1bWUgYSBjb3JyZXNwb25kYW5jZSBiZXR3ZWVuIHBhcnQgaW5kZXggYW5kIGF0dHJpYnV0ZSBpbmRleC5cbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNbaV0udmFsdWUuaW5kZXhPZihtYXJrZXIpID49IDApIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoY291bnQtLSA+IDApIHtcbiAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIHNlY3Rpb24gbGVhZGluZyB1cCB0byB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICBjb25zdCBzdHJpbmdGb3JQYXJ0ID0gcmVzdWx0LnN0cmluZ3NbcGFydEluZGV4XTtcbiAgICAgICAgICAgICAgLy8gRmluZCB0aGUgYXR0cmlidXRlIG5hbWVcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzdHJpbmdGb3JQYXJ0KSFbMl07XG4gICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlXG4gICAgICAgICAgICAgIC8vIEFsbCBib3VuZCBhdHRyaWJ1dGVzIGhhdmUgaGFkIGEgc3VmZml4IGFkZGVkIGluXG4gICAgICAgICAgICAgIC8vIFRlbXBsYXRlUmVzdWx0I2dldEhUTUwgdG8gb3B0IG91dCBvZiBzcGVjaWFsIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAvLyBoYW5kbGluZy4gVG8gbG9vayB1cCB0aGUgYXR0cmlidXRlIHZhbHVlIHdlIGFsc28gbmVlZCB0byBhZGRcbiAgICAgICAgICAgICAgLy8gdGhlIHN1ZmZpeC5cbiAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTG9va3VwTmFtZSA9XG4gICAgICAgICAgICAgICAgICBuYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeDtcbiAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPVxuICAgICAgICAgICAgICAgICAgKG5vZGUgYXMgRWxlbWVudCkuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpITtcbiAgICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IGF0dHJpYnV0ZVZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnYXR0cmlidXRlJywgaW5kZXgsIG5hbWUsIHN0cmluZ3N9KTtcbiAgICAgICAgICAgICAgKG5vZGUgYXMgRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpO1xuICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoKG5vZGUgYXMgRWxlbWVudCkudGFnTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgICAgX3ByZXBhcmVUZW1wbGF0ZShub2RlIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IChub2RlIGFzIFRleHQpLmRhdGEhO1xuICAgICAgICAgIGlmIChkYXRhLmluZGV4T2YobWFya2VyKSA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUhO1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IGRhdGEuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgKHN0cmluZ3NbaV0gPT09ICcnKSA/IGNyZWF0ZU1hcmtlcigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHJpbmdzW2ldKSxcbiAgICAgICAgICAgICAgICAgIG5vZGUpO1xuICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdub2RlJywgaW5kZXg6ICsraW5kZXh9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gdGV4dCwgd2UgbXVzdCBpbnNlcnQgYSBjb21tZW50IHRvIG1hcmsgb3VyIHBsYWNlLlxuICAgICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHRydXN0IGl0IHdpbGwgc3RpY2sgYXJvdW5kIGFmdGVyIGNsb25pbmcuXG4gICAgICAgICAgICBpZiAoc3RyaW5nc1tsYXN0SW5kZXhdID09PSAnJykge1xuICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBub2RlKTtcbiAgICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgKG5vZGUgYXMgVGV4dCkuZGF0YSA9IHN0cmluZ3NbbGFzdEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBwYXJ0IGZvciBlYWNoIG1hdGNoIGZvdW5kXG4gICAgICAgICAgICBwYXJ0SW5kZXggKz0gbGFzdEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIE5vZGUuQ09NTUVOVF9OT0RFICovKSB7XG4gICAgICAgICAgaWYgKChub2RlIGFzIENvbW1lbnQpLmRhdGEgPT09IG1hcmtlcikge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlITtcbiAgICAgICAgICAgIC8vIEFkZCBhIG5ldyBtYXJrZXIgbm9kZSB0byBiZSB0aGUgc3RhcnROb2RlIG9mIHRoZSBQYXJ0IGlmIGFueSBvZlxuICAgICAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBhcmUgdHJ1ZTpcbiAgICAgICAgICAgIC8vICAqIFdlIGRvbid0IGhhdmUgYSBwcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICAgIC8vICAqIFRoZSBwcmV2aW91c1NpYmxpbmcgaXMgYWxyZWFkeSB0aGUgc3RhcnQgb2YgYSBwcmV2aW91cyBwYXJ0XG4gICAgICAgICAgICBpZiAobm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IG51bGwgfHwgaW5kZXggPT09IGxhc3RQYXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgbm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0UGFydEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdub2RlJywgaW5kZXh9KTtcbiAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBuZXh0U2libGluZywga2VlcCB0aGlzIG5vZGUgc28gd2UgaGF2ZSBhbiBlbmQuXG4gICAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gcmVtb3ZlIGl0IHRvIHNhdmUgZnV0dXJlIGNvc3RzLlxuICAgICAgICAgICAgaWYgKG5vZGUubmV4dFNpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgKG5vZGUgYXMgQ29tbWVudCkuZGF0YSA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICB3aGlsZSAoKGkgPSAobm9kZSBhcyBDb21tZW50KS5kYXRhIS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT1cbiAgICAgICAgICAgICAgICAgICAtMSkge1xuICAgICAgICAgICAgICAvLyBDb21tZW50IG5vZGUgaGFzIGEgYmluZGluZyBtYXJrZXIgaW5zaWRlLCBtYWtlIGFuIGluYWN0aXZlIHBhcnRcbiAgICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogY29uc2lkZXIgd2hldGhlciBpdCdzIGV2ZW4gd29ydGggaXQgdG9cbiAgICAgICAgICAgICAgLy8gbWFrZSBiaW5kaW5ncyBpbiBjb21tZW50cyB3b3JrXG4gICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleDogLTF9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIF9wcmVwYXJlVGVtcGxhdGUoZWxlbWVudCk7XG4gICAgLy8gUmVtb3ZlIHRleHQgYmluZGluZyBub2RlcyBhZnRlciB0aGUgd2FsayB0byBub3QgZGlzdHVyYiB0aGUgVHJlZVdhbGtlclxuICAgIGZvciAoY29uc3QgbiBvZiBub2Rlc1RvUmVtb3ZlKSB7XG4gICAgICBuLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG4pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEEgcGxhY2Vob2xkZXIgZm9yIGEgZHluYW1pYyBleHByZXNzaW9uIGluIGFuIEhUTUwgdGVtcGxhdGUuXG4gKlxuICogVGhlcmUgYXJlIHR3byBidWlsdC1pbiBwYXJ0IHR5cGVzOiBBdHRyaWJ1dGVQYXJ0IGFuZCBOb2RlUGFydC4gTm9kZVBhcnRzXG4gKiBhbHdheXMgcmVwcmVzZW50IGEgc2luZ2xlIGR5bmFtaWMgZXhwcmVzc2lvbiwgd2hpbGUgQXR0cmlidXRlUGFydHMgbWF5XG4gKiByZXByZXNlbnQgYXMgbWFueSBleHByZXNzaW9ucyBhcmUgY29udGFpbmVkIGluIHRoZSBhdHRyaWJ1dGUuXG4gKlxuICogQSBUZW1wbGF0ZSdzIHBhcnRzIGFyZSBtdXRhYmxlLCBzbyBwYXJ0cyBjYW4gYmUgcmVwbGFjZWQgb3IgbW9kaWZpZWRcbiAqIChwb3NzaWJseSB0byBpbXBsZW1lbnQgZGlmZmVyZW50IHRlbXBsYXRlIHNlbWFudGljcykuIFRoZSBjb250cmFjdCBpcyB0aGF0XG4gKiBwYXJ0cyBjYW4gb25seSBiZSByZXBsYWNlZCwgbm90IHJlbW92ZWQsIGFkZGVkIG9yIHJlb3JkZXJlZCwgYW5kIHBhcnRzIG11c3RcbiAqIGFsd2F5cyBjb25zdW1lIHRoZSBjb3JyZWN0IG51bWJlciBvZiB2YWx1ZXMgaW4gdGhlaXIgYHVwZGF0ZSgpYCBtZXRob2QuXG4gKlxuICogVE9ETyhqdXN0aW5mYWduYW5pKTogVGhhdCByZXF1aXJlbWVudCBpcyBhIGxpdHRsZSBmcmFnaWxlLiBBXG4gKiBUZW1wbGF0ZUluc3RhbmNlIGNvdWxkIGluc3RlYWQgYmUgbW9yZSBjYXJlZnVsIGFib3V0IHdoaWNoIHZhbHVlcyBpdCBnaXZlc1xuICogdG8gUGFydC51cGRhdGUoKS5cbiAqL1xuZXhwb3J0IHR5cGUgVGVtcGxhdGVQYXJ0ID0ge1xuICB0eXBlOiAnbm9kZScsXG4gIGluZGV4OiBudW1iZXJcbn18e3R5cGU6ICdhdHRyaWJ1dGUnLCBpbmRleDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdfTtcblxuZXhwb3J0IGNvbnN0IGlzVGVtcGxhdGVQYXJ0QWN0aXZlID0gKHBhcnQ6IFRlbXBsYXRlUGFydCkgPT4gcGFydC5pbmRleCAhPT0gLTE7XG5cbi8vIEFsbG93cyBgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJylgIHRvIGJlIHJlbmFtZWQgZm9yIGFcbi8vIHNtYWxsIG1hbnVhbCBzaXplLXNhdmluZ3MuXG5leHBvcnQgY29uc3QgY3JlYXRlTWFya2VyID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cbi8qKlxuICogVGhpcyByZWdleCBleHRyYWN0cyB0aGUgYXR0cmlidXRlIG5hbWUgcHJlY2VkaW5nIGFuIGF0dHJpYnV0ZS1wb3NpdGlvblxuICogZXhwcmVzc2lvbi4gSXQgZG9lcyB0aGlzIGJ5IG1hdGNoaW5nIHRoZSBzeW50YXggYWxsb3dlZCBmb3IgYXR0cmlidXRlc1xuICogYWdhaW5zdCB0aGUgc3RyaW5nIGxpdGVyYWwgZGlyZWN0bHkgcHJlY2VkaW5nIHRoZSBleHByZXNzaW9uLCBhc3N1bWluZyB0aGF0XG4gKiB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhbiBhdHRyaWJ1dGUtdmFsdWUgcG9zaXRpb24uXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTBcbiAqXG4gKiBcIlxcMC1cXHgxRlxceDdGLVxceDlGXCIgYXJlIFVuaWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzXG4gKlxuICogXCIgXFx4MDlcXHgwYVxceDBjXFx4MGRcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZnJhc3RydWN0dXJlLmh0bWwjc3BhY2UtY2hhcmFjdGVyXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgY29udHJvbCBjaGFyYWN0ZXIsIHNwYWNlIGNoYXJhY3RlciwgKCcpLFxuICogICAgKFwiKSwgXCI+XCIsIFwiPVwiLCBvciBcIi9cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuZXhwb3J0IGNvbnN0IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXggPVxuICAgIC8oWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0pKFteXFwwLVxceDFGXFx4N0YtXFx4OUYgXFx4MDlcXHgwYVxceDBjXFx4MGRcIic+PS9dKykoWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qPVsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKig/OlteIFxceDA5XFx4MGFcXHgwY1xceDBkXCInYDw+PV0qfFwiW15cIl0qfCdbXiddKikpJC87XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICpcbiAqIE1haW4gbGl0LWh0bWwgbW9kdWxlLlxuICpcbiAqIE1haW4gZXhwb3J0czpcbiAqXG4gKiAtICBbW2h0bWxdXVxuICogLSAgW1tzdmddXVxuICogLSAgW1tyZW5kZXJdXVxuICpcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKipcbiAqIERvIG5vdCByZW1vdmUgdGhpcyBjb21tZW50OyBpdCBrZWVwcyB0eXBlZG9jIGZyb20gbWlzcGxhY2luZyB0aGUgbW9kdWxlXG4gKiBkb2NzLlxuICovXG5pbXBvcnQge2RlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHtTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbmV4cG9ydCB7RGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7ZGlyZWN0aXZlLCBEaXJlY3RpdmVGbiwgaXNEaXJlY3RpdmV9IGZyb20gJy4vbGliL2RpcmVjdGl2ZS5qcyc7XG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiByZW1vdmUgbGluZSB3aGVuIHdlIGdldCBOb2RlUGFydCBtb3ZpbmcgbWV0aG9kc1xuZXhwb3J0IHtyZW1vdmVOb2RlcywgcmVwYXJlbnROb2Rlc30gZnJvbSAnLi9saWIvZG9tLmpzJztcbmV4cG9ydCB7bm9DaGFuZ2UsIG5vdGhpbmcsIFBhcnR9IGZyb20gJy4vbGliL3BhcnQuanMnO1xuZXhwb3J0IHtBdHRyaWJ1dGVDb21taXR0ZXIsIEF0dHJpYnV0ZVBhcnQsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIGlzUHJpbWl0aXZlLCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIsIFByb3BlcnR5UGFydH0gZnJvbSAnLi9saWIvcGFydHMuanMnO1xuZXhwb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL2xpYi9yZW5kZXItb3B0aW9ucy5qcyc7XG5leHBvcnQge3BhcnRzLCByZW5kZXJ9IGZyb20gJy4vbGliL3JlbmRlci5qcyc7XG5leHBvcnQge3RlbXBsYXRlQ2FjaGVzLCB0ZW1wbGF0ZUZhY3Rvcnl9IGZyb20gJy4vbGliL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IHtUZW1wbGF0ZUluc3RhbmNlfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5leHBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuZXhwb3J0IHtTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQge2NyZWF0ZU1hcmtlciwgaXNUZW1wbGF0ZVBhcnRBY3RpdmUsIFRlbXBsYXRlfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgbGl0SHRtbFZlcnNpb25zOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIGxpdC1odG1sIHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbih3aW5kb3dbJ2xpdEh0bWxWZXJzaW9ucyddIHx8ICh3aW5kb3dbJ2xpdEh0bWxWZXJzaW9ucyddID0gW10pKS5wdXNoKCcxLjAuMCcpO1xuXG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IChzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4udmFsdWVzOiB1bmtub3duW10pID0+XG4gICAgbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuXG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSAoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogdW5rbm93bltdKSA9PlxuICAgIG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCB7IEN1c3RvbUVsZW1lbnQsIFByb3AsIGh0bWwgfSBmcm9tICdjZS1kZWNvcmF0b3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0Q29tcG9uZW50IGV4dGVuZHMgQ3VzdG9tRWxlbWVudCB7XHJcblxyXG4gICAgQFByb3AoKVxyXG4gICAgdGVzdDpzdHJpbmcgPSAnJztcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gaHRtbGB0ZXN0YDtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi9jb21wb25lbnRzL3Rlc3Rjb21wb25lbnQnOyJdLCJzb3VyY2VSb290IjoiIn0=