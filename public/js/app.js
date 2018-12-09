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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cover-letter.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cv.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_mixins__ = __webpack_require__("./resources/assets/js/helper-mixins.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_mixins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helper_mixins__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__helper_mixins___default.a],
    data: function data() {
        return {
            courses: [],
            details: {
                personal: [{ title: 'Name', value: 'David Murray', icon: 'fa-user' }, { title: 'Nationality', value: 'South African', icon: 'fa-flag' }, { title: 'Relationship', value: '18 yrs Married (2 kids)', icon: 'fa-gem' }, { title: 'Birthday', value: '2 June 1972', icon: 'fa-birthday-cake' }, { title: 'Languages', value: 'English, Afrikaans', icon: 'fa-globe' }],
                contact: [{ title: 'Email', value: 'david.murray@ajarti.com', icon: 'fa-envelope' }, { title: 'Phone', value: '+27 (0)83 759 7724', icon: 'fa-mobile' }, { title: 'Skype', value: 'david.murray', icon: 'fab fa-skype' }, { title: 'Address', value: '9 Regiment, Bellville<br/>Cape Town, 7530<br/>South Africa', icon: 'fa-map-marked' }]
            },
            loadingcourses: false,
            loadingpositions: false,
            positions: [],
            strengths: [{ title: 'Backend', value: 90 }, { title: 'Frontend', value: 85 }, { title: 'UX', value: 80 }, { title: 'UI', value: 70 }, { title: 'Strategy', value: 90 }, { title: 'Management', value: 65 }]
        };
    },

    methods: {
        dateRange: function dateRange(item, yearsOnly) {
            var endDate = moment().unix();
            var item = item || null;
            var yearsOnly = yearsOnly || false;
            var self = this;
            var startDate = '';
            if (_.isNull(item)) return '';

            // From.
            if (_.has(item, 'start_date_ts') && self.isTimestamp(item.start_date_ts)) {
                startDate = item.start_date_ts;
            } else {
                return '';
            }

            // To.
            if (_.has(item, 'end_date_ts') && self.isTimestamp(item.end_date_ts)) {
                endDate = item.end_date_ts;
            }

            // Format.
            return yearsOnly ? moment.unix(startDate).format('YYYY') + ' - ' + (self.isTimestamp(item.end_date_ts) ? moment.unix(endDate).format('YYYY') : 'Current') : self.formatAsYearsMonths(startDate, endDate) + ' from ' + self.formatDate(startDate, true) + ' - ' + self.formatDate(endDate, true);
        },
        fetchData: function fetchData(type) {
            var self = this;
            var type = type || null;
            if (_.isNull(type)) return '';

            self.fetch({
                url: '/api/' + type,
                data: {},
                success: function success(response) {
                    var response = response || {};
                    if (_.has(response, 'data.' + type) && _.isArray(response.data[type]) && !_.isEmpty(response.data[type])) {
                        self.setValue(self, type, response.data[type]);
                    }
                },
                flag: 'loading' + type
            });
        },
        goLinkedIn: function goLinkedIn() {
            window.open('https://www.linkedin.com/in/davidseanmurray/', '_blank');
        }
    },
    mounted: function mounted() {
        var self = this;

        // Ajax load.
        self.fetchData('positions');

        // JS Injection load.
        self.setValue(self, 'courses', _.has(window, 'courses') ? _.clone(window.courses) : []);

        // Fire JQ plugins.
        $('.pie-chart').easyPieChart();
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ea89696c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cv.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row no-gutters" }, [
      _c(
        "div",
        {
          staticClass:
            "col-xs-12 col-md-7 col-lg-7 col-xl-8 bg-gray-lighter order-md-12"
        },
        [
          _c("div", { staticClass: "content" }, [
            _c("div", { staticClass: "block-content" }, [
              _c("h3", { staticClass: "block-title font-w700" }, [
                _vm._v("PROFILE")
              ]),
              _vm._v(" "),
              _c("hr", { staticClass: "mt-1" }),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        I have 30+ years of experience (25 commercial) in all aspect of IT. During this time I've performed roles covering the building of workstations/servers/clusters from bare metal, designing and constructing networks to WAN level and for the last 18 years, full stack development and web server sysops.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        I pride myself on avoiding fads and ensuring the correct development strategy is selected, utilizing the right tools to fit both the budget and fulfill the requirements, yet maintaining an eye on the future in order to allow for an upgrade path. I am a huge fan of the Lean Startup strategy, developing in small increments and pivoting when needed based on customer experience and feedback.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        Having been the IT Director / Lead Dev for an agency for 10 years I understand the importance of managing client expectations and ensuring clarity in communication. I have worked with many leading brands such as Xchanging, BNP Paribas, Mitsubishi, Vodacom, Johnson & Johnson, Taj Hotels, &Beyond (see below ..)\n                    "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        My preferred stack is Laravel/Vue and I have a preference for greenfield and product/SaaS based projects.\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "row",
                  attrs: { "data-aos": "fade-up", "data-aos-delay": "50" }
                },
                [
                  _vm._l(_vm.strengths, function(strength) {
                    return [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-2 text-center pt-3"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "js-pie-chart pie-chart js-pie-chart-enabled",
                              attrs: {
                                "data-percent": strength.value,
                                "data-line-width": "8",
                                "data-size": "110",
                                "data-bar-color": "#ef8a46",
                                "data-track-color": "#e9e9e9",
                                "data-scale-color": "#d9d9d9"
                              }
                            },
                            [
                              _c("span", [
                                _c("small", {
                                  staticStyle: { "font-size": "0.8em" },
                                  domProps: {
                                    textContent: _vm._s(strength.title)
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "text-gray",
                                  staticStyle: {
                                    "margin-top": "-3px",
                                    "font-size": "0.75em"
                                  },
                                  domProps: {
                                    textContent: _vm._s(strength.value + "%")
                                  }
                                })
                              ])
                            ]
                          )
                        ]
                      )
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("h3", { staticClass: "block-title font-w700 mt-5" }, [
                _vm._v("EXPERIENCE")
              ]),
              _vm._v(" "),
              _c("hr", { staticClass: "mt-1" }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "timeline" },
                [
                  _vm._l(_vm.positions, function(position) {
                    return [
                      _c(
                        "li",
                        {
                          staticClass: "timeline-event",
                          attrs: {
                            "data-aos": "fade-left",
                            "data-aos-delay": "50"
                          }
                        },
                        [
                          _vm._m(0, true),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "timeline-event-block block block-rounded "
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "block-header block-header-default",
                                  staticStyle: { overflow: "hidden" }
                                },
                                [
                                  _c("div", { staticClass: "block-options" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "timeline-event-time block-options-item font-w400"
                                      },
                                      [
                                        _c("small", {
                                          staticClass:
                                            "font-w700 text-warning-light",
                                          staticStyle: {
                                            "margin-left": "-7px"
                                          },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.dateRange(position, true)
                                            )
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", {
                                      staticClass: "font-w700",
                                      domProps: {
                                        textContent: _vm._s(position.title)
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("div", {
                                      staticClass:
                                        "font-size-sm text-black-50 font-w400 ",
                                      domProps: {
                                        textContent: _vm._s(position.company)
                                      }
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-content p-3" }, [
                                _c("div", { staticClass: "media " }, [
                                  _c("img", {
                                    staticClass:
                                      "img-thumb img-thumbnail mr-2 d-none d-sm-none d-md-none d-lg-block",
                                    attrs: {
                                      width: "96px",
                                      src: "/img/" + position.thumb,
                                      alt: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "media-body" }, [
                                    _c("div", {
                                      domProps: {
                                        innerHTML: _vm._s(position.description)
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "text-black-50 text-right mt-3"
                                      },
                                      [
                                        _c("small", [
                                          _c("i", {
                                            staticClass: "fas fa-calendar-alt"
                                          }),
                                          _vm._v(
                                            " " +
                                              _vm._s(_vm.dateRange(position))
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ])
                              ])
                            ]
                          )
                        ]
                      )
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("h3", { staticClass: "block-title font-w700 mt-5" }, [
                _vm._v("EDUCATION")
              ]),
              _vm._v(" "),
              _c("hr", { staticClass: "mt-1" }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "timeline" },
                [
                  _vm._l(_vm.courses, function(course) {
                    return [
                      _c(
                        "li",
                        {
                          staticClass: "timeline-event",
                          attrs: {
                            "data-aos": "fade-left",
                            "data-aos-delay": "50"
                          }
                        },
                        [
                          _vm._m(1, true),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "timeline-event-block block block-rounded"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "block-header block-header-default",
                                  staticStyle: { overflow: "hidden" }
                                },
                                [
                                  _c("div", { staticClass: "block-options" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "timeline-event-time block-options-item font-w400 mb-2"
                                      },
                                      [
                                        _c("small", {
                                          staticClass:
                                            "font-w700 text-warning-light",
                                          staticStyle: {
                                            "margin-left": "-7px"
                                          },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.dateRange(course, true)
                                            )
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", {
                                      staticClass: "font-w700",
                                      domProps: {
                                        textContent: _vm._s(
                                          course.qualification
                                        )
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "text-black-50 font-w400"
                                      },
                                      [
                                        _c("div", {
                                          domProps: {
                                            textContent: _vm._s(
                                              course.institution
                                            )
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("small", {
                                          staticClass: "font-w300",
                                          domProps: {
                                            textContent: _vm._s(course.location)
                                          }
                                        })
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "alert alert-warning d-flex align-items-center justify-content-between mt-6",
                  attrs: {
                    role: "alert",
                    "data-aos": "fade-up",
                    "data-aos-delay": "50"
                  }
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-fill ml-3" }, [
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "Need any more information, please don't hesitate to ask me on\n                                "
                      ),
                      _c(
                        "a",
                        {
                          staticClass: "link-fx text-warning",
                          attrs: { href: "mailto:david.murray@ajarti.com" }
                        },
                        [_vm._v("david.murray@ajarti.com")]
                      ),
                      _vm._v(
                        " or take a look at my\n                                "
                      ),
                      _c(
                        "a",
                        {
                          staticClass: "link-fx text-warning pointer",
                          attrs: { target: "_blank" },
                          on: { click: _vm.goLinkedIn }
                        },
                        [_vm._v("LinkedIn")]
                      ),
                      _vm._v(" profile.\n                            ")
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center my-3" },
                [
                  _vm._v(
                    "\n                        Back to my\n                        "
                  ),
                  _c(
                    "router-link",
                    { staticClass: "link-fx text-warning", attrs: { to: "/" } },
                    [_vm._v("covering letter")]
                  ),
                  _vm._v("\n                        .\n                    ")
                ],
                1
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-xs-12 col-md-5 col-lg-5 col-xl-4 bg-gray-light block-bordered order-md-1"
        },
        [
          _c("div", { staticClass: "row content" }, [
            _c(
              "div",
              {
                staticClass: "col-sm-12 pb-3",
                attrs: { "data-aos": "fade-right", "data-aos-delay": "50" }
              },
              [
                _c("div", { staticClass: "block block-rounded block-themed" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "block-content" }, [
                    _c(
                      "ul",
                      { staticClass: "nav-items push" },
                      [
                        _vm._l(_vm.details.personal, function(item) {
                          return [
                            _c("li", [
                              _c("div", { staticClass: "media py-2" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mr-3 ml-2 align-self-center overlay-container overlay-left"
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa text-warning-light",
                                      class: item.icon,
                                      staticStyle: {
                                        "font-size": "1.3em",
                                        "min-width": "25px"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "media-body" }, [
                                  _c("small", [
                                    _c("span", {
                                      staticClass: "font-w700",
                                      domProps: {
                                        textContent: _vm._s(item.title)
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "font-size-sm text-muted" },
                                    [
                                      _c("span", {
                                        domProps: {
                                          innerHTML: _vm._s(item.value)
                                        }
                                      })
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ]
                        })
                      ],
                      2
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-sm-12 pb-3",
                attrs: { "data-aos": "fade-right", "data-aos-delay": "50" }
              },
              [
                _c("div", { staticClass: "block block-rounded block-themed" }, [
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "block-content" }, [
                    _c(
                      "ul",
                      { staticClass: "nav-items push" },
                      [
                        _vm._l(_vm.details.contact, function(item) {
                          return [
                            _c("li", [
                              _c("div", { staticClass: "media py-2" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mr-3 ml-2 align-self-center overlay-container overlay-left"
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa text-warning-light",
                                      class: item.icon,
                                      staticStyle: { "font-size": "1.3em" }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "media-body" }, [
                                  _c("small", [
                                    _c("span", {
                                      staticClass: "font-w700",
                                      domProps: {
                                        textContent: _vm._s(item.title)
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  item.title != "Email"
                                    ? _c(
                                        "div",
                                        {
                                          staticClass: "font-size-sm text-muted"
                                        },
                                        [
                                          _c("span", {
                                            domProps: {
                                              innerHTML: _vm._s(item.value)
                                            }
                                          })
                                        ]
                                      )
                                    : _c(
                                        "div",
                                        {
                                          staticClass: "font-size-sm text-muted"
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "link-fx text-warning",
                                              attrs: {
                                                href: "mailto:" + item.value
                                              }
                                            },
                                            [_vm._v(_vm._s(item.value))]
                                          )
                                        ]
                                      )
                                ])
                              ])
                            ])
                          ]
                        })
                      ],
                      2
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-sm-12 pb-3",
                attrs: { "data-aos": "fade-right", "data-aos-delay": "50" }
              },
              [
                _c("div", { staticClass: "block block-rounded block-themed" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c("div", { staticClass: "block-content" }, [
                    _c("ul", { staticClass: "nav-items push" }, [
                      _c("li", [
                        _c("div", { staticClass: "media py-2" }, [
                          _vm._m(8),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body" }, [
                            _vm._m(9),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "link-fx text-warning pointer",
                                attrs: { target: "_blank" },
                                on: { click: _vm.goLinkedIn }
                              },
                              [_vm._v("davidseanmurray")]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(10),
            _vm._v(" "),
            _vm._m(11)
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-event-icon bg-gd-sun-op" }, [
      _c("i", { staticClass: "fas fa-calendar-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-event-icon bg-gd-sun-op" }, [
      _c("i", { staticClass: "fas fa-graduation-cap" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex-00-auto" }, [
      _c("i", { staticClass: "fas fa-2x fa-question-circle" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-header bg-gd-sun-op" }, [
      _c("h3", { staticClass: "block-title font-w700" }, [_vm._v("PERSONAL")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-sm-12 pb-3",
        attrs: { "data-aos": "fade-right", "data-aos-delay": "50" }
      },
      [
        _c("div", { staticClass: "block block-rounded block-themed" }, [
          _c("div", { staticClass: "block-header bg-gd-sun-op" }, [
            _c("h3", { staticClass: "block-title font-w700" }, [
              _vm._v("SKILLS")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "block-content" }, [
            _c("h6", { staticClass: "text-uppercase mb-0" }, [
              _c("small", [_vm._v("Javascript")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "progress push", staticStyle: { height: "10px" } },
              [
                _c("div", {
                  staticClass: "progress-bar bg-warning-light",
                  staticStyle: { width: "80%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "30",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("h6", { staticClass: "text-uppercase mb-0" }, [
              _c("small", [_vm._v("PHP")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "progress push", staticStyle: { height: "10px" } },
              [
                _c("div", {
                  staticClass: "progress-bar bg-warning-light",
                  staticStyle: { width: "90%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "30",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("h6", { staticClass: "text-uppercase mb-0" }, [
              _c("small", [_vm._v("CSS")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "progress push", staticStyle: { height: "10px" } },
              [
                _c("div", {
                  staticClass: "progress-bar bg-warning-light",
                  staticStyle: { width: "70%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "30",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("h6", { staticClass: "text-uppercase mb-0" }, [
              _c("small", [_vm._v("SQL")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "progress push", staticStyle: { height: "10px" } },
              [
                _c("div", {
                  staticClass: "progress-bar bg-warning-light",
                  staticStyle: { width: "80%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "30",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("h6", { staticClass: "text-uppercase mb-0" }, [
              _c("small", [_vm._v("NOSQL")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "progress push", staticStyle: { height: "10px" } },
              [
                _c("div", {
                  staticClass: "progress-bar bg-warning-light",
                  staticStyle: { width: "65%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "30",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("h6", { staticClass: "text-uppercase mb-0" }, [
              _c("small", [_vm._v("HTML")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "progress push", staticStyle: { height: "10px" } },
              [
                _c("div", {
                  staticClass: "progress-bar bg-warning-light",
                  staticStyle: { width: "100%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "30",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("h6", { staticClass: "text-uppercase mb-0" }, [
              _c("small", [_vm._v("Usability")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "progress push", staticStyle: { height: "10px" } },
              [
                _c("div", {
                  staticClass: "progress-bar bg-warning-light",
                  staticStyle: { width: "80%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "30",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                })
              ]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-sm-12 pb-3",
        attrs: { "data-aos": "fade-right", "data-aos-delay": "50" }
      },
      [
        _c("div", { staticClass: "block block-rounded block-themed" }, [
          _c("div", { staticClass: "block-header bg-gd-sun-op" }, [
            _c("h3", { staticClass: "block-title  font-w700" }, [
              _vm._v("TECHNOLOGIES")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "block-content pb-3" }, [
            _c("h6", { staticClass: "font-w400 text-gray mb-1 font-size-sm" }, [
              _vm._v("WEB")
            ]),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("PHP")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Javascript")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("HTML")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("CSS")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("MySql")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("NoSql")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Vue "), _c("small", [_vm._v("(primary)")])]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Laravel "), _c("small", [_vm._v("(primary)")])]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("API Integration")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("JS Frameworks")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("PHP Frameworks")]
            ),
            _vm._v(" "),
            _c(
              "h6",
              { staticClass: "font-w400 text-gray mt-3 mb-1 font-size-sm" },
              [_vm._v("SERVER")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Networking")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("SysOps")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Linux")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Redis")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Nginx")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Apache")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("GD")]
            ),
            _vm._v(" "),
            _c(
              "h6",
              { staticClass: "font-w400 text-gray mt-3 mb-1 font-size-sm" },
              [_vm._v("DESIGN")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("UX")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("UI")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Photoshop")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Canvas")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Basic 3D Modelling")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Basic CAD")]
            ),
            _vm._v(" "),
            _c(
              "h6",
              { staticClass: "font-w400 text-gray mt-3 mb-1 font-size-sm" },
              [_vm._v("MARKETING")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("SEO")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Adwords")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Facebook ADS")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Ad Delivery")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Google Analytics")]
            ),
            _vm._v(" "),
            _c(
              "h6",
              { staticClass: "font-w400 text-gray mt-3 mb-1 font-size-sm" },
              [_vm._v("VIDEO")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Editing")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Transcoding")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("FFMpeg")]
            ),
            _vm._v(" "),
            _c(
              "h6",
              { staticClass: "font-w400 text-gray mt-3 mb-1 font-size-sm" },
              [_vm._v("ELECTRONICS")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("Micro Controllers")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("SBC's")]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "badge text-gray-dark bg-gray-light p-2 mb-2" },
              [_vm._v("LUA")]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-header bg-gd-sun-op" }, [
      _c("h3", { staticClass: "block-title font-w700" }, [_vm._v("CONTACT")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-header bg-gd-sun-op" }, [
      _c("h3", { staticClass: "block-title font-w700" }, [_vm._v("LINKS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "mr-3 ml-2 align-self-center overlay-container overlay-left"
      },
      [
        _c("i", {
          staticClass: "fab text-warning-light fa-linkedin",
          staticStyle: { "font-size": "1.3em" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("small", [
        _c("span", { staticClass: "font-w700" }, [_vm._v("LinkedIn")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-sm-12 pb-3",
        attrs: { "data-aos": "fade-right", "data-aos-delay": "50" }
      },
      [
        _c("div", { staticClass: "block block-rounded block-themed" }, [
          _c("div", { staticClass: "block-header bg-gd-sun-op" }, [
            _c("h3", { staticClass: "block-title font-w700" }, [
              _vm._v("REFERENCES")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "block-content" }, [
            _c("ul", { staticClass: "nav-items push" }, [
              _c("li", [
                _c("div", { staticClass: "media py-2" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "mr-3 ml-2 align-self-center overlay-container overlay-left"
                    },
                    [
                      _c("i", {
                        staticClass: "fas text-warning-light fa-thumbs-up",
                        staticStyle: { "font-size": "1.3em" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("div", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v("On Request")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-sm-12 pb-3",
        attrs: { "data-aos": "fade-right", "data-aos-delay": "50" }
      },
      [
        _c("div", { staticClass: "block block-rounded block-themed" }, [
          _c("div", { staticClass: "block-header bg-gd-sun-op" }, [
            _c("h3", { staticClass: "block-title font-w700" }, [
              _vm._v("INTERESTS")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row block-content pb-2" }, [
            _c(
              "div",
              { staticClass: "col-sm-3 col-xs-12 col-md-12 col-lg-6" },
              [
                _c(
                  "a",
                  {
                    staticClass: "block block-rounded text-center bg-black-5",
                    attrs: { href: "javascript:void(0)" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "block-content block-content-full bg-image",
                        staticStyle: {
                          "background-image": "url('/img/iot.jpg')"
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-3x fa-microchip text-white-75"
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-content block-content-full p-1" },
                      [
                        _c("span", { staticClass: "font-w600 mb-0" }, [
                          _vm._v("IoT")
                        ])
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 col-xs-12 col-md-12 col-lg-6" },
              [
                _c(
                  "a",
                  {
                    staticClass: "block block-rounded bg-black-5 text-center",
                    attrs: { href: "javascript:void(0)" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "block-content block-content-full bg-image",
                        staticStyle: {
                          "background-image": "url('/img/rewild.jpg')"
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fab fa-pagelines fa-3x text-white-75"
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-content block-content-full p-1" },
                      [
                        _c("p", { staticClass: "font-w600 mb-0" }, [
                          _vm._v("Rewilding")
                        ])
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 col-xs-12 col-md-12 col-lg-6" },
              [
                _c(
                  "a",
                  {
                    staticClass: "block block-rounded bg-black-5 text-center",
                    attrs: { href: "javascript:void(0)" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "block-content block-content-full bg-image",
                        staticStyle: {
                          "background-image": "url('/img/space.jpg')"
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-atom fa-3x text-white-75"
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-content block-content-full p-1" },
                      [
                        _c("p", { staticClass: "font-w600 mb-0" }, [
                          _vm._v("Astrophysics")
                        ])
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 col-xs-12 col-md-12 col-lg-6" },
              [
                _c(
                  "a",
                  {
                    staticClass: "block block-rounded bg-black-5 text-center",
                    attrs: { href: "javascript:void(0)" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "block-content block-content-full bg-image",
                        staticStyle: {
                          "background-image": "url('/img/food.jpg')"
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-utensils fa-3x text-white-75"
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-content block-content-full p-1" },
                      [
                        _c("p", { staticClass: "font-w600 mb-0" }, [
                          _vm._v("Gastronomy")
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ea89696c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f7d842da\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cover-letter.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row no-gutters flex-md-10-auto" }, [
      _c(
        "div",
        { staticClass: "col-xs-12 col-sm-5 col-lg-4 col-xl-3 bg-gray-light" },
        [
          _c("div", { staticClass: "content" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "block block-rounded block-themed",
                attrs: { "data-aos": "fade-right", "data-aos-delay": "50" }
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "block-content" }, [
                  _c(
                    "p",
                    [
                      _vm._v("\n                            View my "),
                      _c(
                        "router-link",
                        {
                          staticClass: "link-fx text-warning",
                          attrs: { to: "/resume" }
                        },
                        [_vm._v("resume")]
                      ),
                      _vm._v(".\n                        ")
                    ],
                    1
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-12 col-sm-7 col-lg-8 col-xl-9" }, [
        _c("div", { staticClass: "content pb-5" }, [
          _c(
            "div",
            {
              staticClass: "block-content",
              attrs: { "data-aos": "fade-left", "data-aos-delay": "50" }
            },
            [
              _c("p", [
                _vm._v(
                  "\n                        To whom it may concern,\n                    "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        I am a Full Stack Developer with ~20 years of development experience. I currently specialise in Laravel coupled primarily with Vue on the frontend.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        I have 30+ years IT experience in total (25 commercial) having started at the early age of 9 as your typical nerd doing what he can to get games to work.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        In my career thus far, I have done everything from building computers/servers/clusters from bare metal and managing them, designing and constructing networks(to WAN level) and for the last 20 years, full stack online development utilizing cutting-edge backend/frontend frameworks.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        I was a partner and IT Director of a digital agency for 10 years and have an good understanding of client interaction from initial strategy to managing development and delivery, having said this my preference is development.\n                    "
                )
              ]),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        I found your advert very appealing as I feel very strongly about work-life balance. Balance was the driving force behind leaving my agency when my son was born, I believe well rested and happy developers are the most focused, productive and creative. I love to collaborate and share knowledge and believe in finding wonder in whatever you do.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        I am a native English speaker living in Cape Town (South Africa) UTC+2.\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "p",
                [
                  _vm._v(
                    "\n                        Please feel free to review my "
                  ),
                  _c(
                    "router-link",
                    {
                      staticClass: "link-fx text-warning",
                      attrs: { to: "/resume" }
                    },
                    [_vm._v("resume")]
                  ),
                  _vm._v(
                    " which is part of this simple SPA and contains more detail on my employment history and skill set. I developed this resume to serve as example code of a Lavavel/Vue app. It’s deployed live to a Digitalocean server via Forge. If you would like to review the source code, please send me an email address that I can add to the collaborators of this project.\n                    "
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", [_vm._v("Yours sincerely,")]),
              _vm._v(" "),
              _vm._m(4)
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "block block-rounded block-themed",
        attrs: { "data-aos": "fade-right", "data-aos-delay": "50" }
      },
      [
        _c("div", { staticClass: "block-header bg-gd-sun-op" }, [
          _c("h3", { staticClass: "block-title font-w700" }, [_vm._v("TO")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "block-content" }, [
          _c("p", [
            _vm._v(
              "\n                            HUMAN RESOURCES\n                            "
            ),
            _c("br"),
            _vm._v(" "),
            _c("small", { staticClass: "text-gray" }, [
              _vm._v("Hiring Manager")
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "block block-rounded block-themed",
        attrs: { "data-aos": "fade-right", "data-aos-delay": "50" }
      },
      [
        _c("div", { staticClass: "block-header bg-gd-sun-op" }, [
          _c("h3", { staticClass: "block-title font-w700" }, [
            _vm._v("POSITION")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "block-content" }, [
          _c("p", [
            _vm._v(
              "\n                            Senior Developer\n                            "
            ),
            _c("br"),
            _vm._v(" "),
            _c("small", { staticClass: "text-gray" }, [
              _vm._v("Laravel Focused")
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-header bg-gd-sun-op" }, [
      _c("h3", { staticClass: "block-title font-w700" }, [_vm._v("LINKS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "\n                        I have a deep understanding of the internet, it's core components and how everything hangs together. I have witnessed the Internet's evolution from the early ‘90s and as a result, I am able to select technologies and strategies that match the client’s needs and help maximize the project's probability of success.\n                        I pride myself on avoiding fads and ensuring that the correct strategy is selected, utilising the right tools that fit both the budget and fulfil the requirement.\n                        I am a fan of "
      ),
      _c(
        "a",
        {
          staticClass: "link-fx text-warning",
          attrs: { href: "http://theleanstartup.com/", target: "_blank" }
        },
        [_vm._v("The Lean Startup")]
      ),
      _vm._v(
        " methodology and strongly believe in small iterations to gauge feasibility as well as helping manage client expectations and budgets. I am also a huge fan of Basecamp's "
      ),
      _c(
        "a",
        {
          staticClass: "link-fx text-warning",
          attrs: { href: "https://basecamp.com/books/rework", target: "_blank" }
        },
        [_vm._v("Rework")]
      ),
      _vm._v(" principles.\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "my-2 d-inline-block" }, [
      _c("img", {
        attrs: { src: "signature.png", border: "0", height: "89", width: "150" }
      }),
      _vm._v(" "),
      _c("hr", { staticClass: "mb-1" }),
      _vm._v(" "),
      _c("div", [_vm._v("David Murray")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f7d842da", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cv__ = __webpack_require__("./resources/assets/js/components/cv.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_cv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cover_letter__ = __webpack_require__("./resources/assets/js/components/cover-letter.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cover_letter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_cover_letter__);
__webpack_require__("./resources/assets/js/bootstrap.js");

// Setup Router
Vue.use(VueRouter);

// Views.



var router = new VueRouter({
    routes: [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_1__components_cover_letter___default.a }, { path: '/resume', component: __WEBPACK_IMPORTED_MODULE_0__components_cv___default.a }, { path: '*', redirect: '/' }],
    scrollBehavior: function scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});

var app = new Vue({
    el: '#app',
    data: function data() {
        return {
            root: true,
            showLeft: true
        };
    },
    mounted: function mounted() {
        var self = this;
        self.$set(self, 'root', self.$route.path == '/');
        AOS.init();
    },

    router: router,
    watch: {
        '$route': function $route(to, from) {
            var self = this;
            self.$set(self, 'root', to.path == '/');
        }
    }
});

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, exports) {

// Setup Debugging.
window.debugLS = true;
/* usage: log('inside coolFunc',this,arguments); http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/ */
window.log = function () {
    if (!window.debugLS) return;
    log.history = log.history || []; // store logs to an array for reference
    log.history.push(arguments);
    if (this.console) {
        console.log(Array.prototype.slice.call(arguments));
    }
    // console.trace('callers ..'); // (if backtrace is needed.)
};

// Setup Namespace
var cv = cv || {};

// Setup CSRF with Axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

var token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/***/ }),

/***/ "./resources/assets/js/components/cover-letter.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cover-letter.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f7d842da\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cover-letter.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/cover-letter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f7d842da", Component.options)
  } else {
    hotAPI.reload("data-v-f7d842da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/cv.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cv.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ea89696c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cv.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/cv.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ea89696c", Component.options)
  } else {
    hotAPI.reload("data-v-ea89696c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/helper-mixins.js":
/***/ (function(module, exports) {

// N.B window.log() calls only for development as easy logging, vs devtools, and can be disabled in bootstrap or parsed out with webpack.

module.exports = {
    computed: {},
    data: function data() {
        return {
            serverReturned: true
        };
    },

    methods: {
        fetch: function fetch(configIn) {
            var self = this;
            var config = configIn || null;
            if (_.isNull(config)) return;

            window.log('helper-mixins.fetch: Calling server with data:', config);

            // Setup method
            var method = _.has(config, 'method') && !_.isEmpty(config.method) ? config.method : 'post';

            // Stop multi submissions.
            if (_.has(config, 'flag') && self[config.flag]) {
                return; // in-progress
            } else {
                self[config.flag] = true;
            }

            // Default success callback.
            var onSuccess = config.success || function (response) {};

            // Default error callback.
            var onError = config.error || function (response) {};

            // Call Server ...
            self.serverReturned = false;
            window.axios[method](config.url, config.data).then(function (success) {
                window.log('helper-mixins.fetch: Success Response:', success);
                if (_.has(success, 'data')) {
                    self.processMessages(success.data);
                }
                onSuccess(success);
            }).catch(function (error) {
                window.log('helper-mixins.fetch: Error Response:', error);
                if (_.has(error, 'response.data')) {
                    self.processMessages(error.response.data);
                }
                onError(error);
            }).then(function () {
                window.log('helper-mixins.fetch: Always');
                self[config.flag] = false;
                self.serverReturned = true;
            });
        },
        formatAsYearsMonths: function formatAsYearsMonths(startDate, endDate) {
            var a = moment.unix(endDate);
            var b = moment.unix(startDate);
            var years = a.diff(b, 'year');
            b.add(years, 'years');
            var months = a.diff(b, 'months');
            var str = years > 0 ? years + (years > 1 ? ' Years' : ' Year') : '';
            str += months > 0 ? (years > 0 ? ' ' : '') + months + (months > 1 ? ' Months' : ' Month') : '';
            return str;
        },
        formatDate: function formatDate(utsDate, short) {
            var short = short || false;
            var self = this;
            if (!self.isTimestamp(utsDate)) return '';
            return short ? moment.unix(utsDate).format('MMM \'YY') : moment.unix(utsDate).format('MMM YYYY');
        },
        getBooleanValue: function getBooleanValue(ref) {
            var self = this;
            var ref = ref || null;

            if (_.isNull(ref) || !_.isString(ref)) {
                window.log('getBooleanValue: bad string reference.');
                return '';
            }

            if (!_.has(self, ref)) {
                window.log('getBooleanValue: self.' + ref + ' does not exist.');
                return '';
            }

            return _.get(self, ref) == 'yes' ? 1 : 0;
        },
        getNumericValue: function getNumericValue(ref) {
            var self = this;
            var ref = ref || null;
            if (_.isNull(ref) || !_.isString(ref)) {
                window.log('getNumericValue: bad string reference.');
                return '';
            }
            if (!_.has(self, ref)) {
                window.log('getNumericValue: self.' + ref + ' does not exist.');
                return '';
            }
            return _.toNumber(_.get(self, ref));
        },
        getStringValue: function getStringValue(ref) {
            var self = this;
            var ref = ref || null;
            if (_.isNull(ref) || !_.isString(ref)) {
                window.log('getStringValue: bad string reference.');
                return '';
            }
            if (!_.has(self, ref)) {
                window.log('getStringValue: self.' + ref + ' does not exist.');
                return '';
            }
            return _.get(self, ref);
        },
        isTimestamp: function isTimestamp(timestamp) {
            var timestamp = timestamp || null;
            return !_.isNull(timestamp) && !isNaN(timestamp) && moment.unix(timestamp).isValid();
        },
        isYes: function isYes(value) {
            var self = this;
            var value = value || false;
            return _.isEqual(_.toLower(value), 'yes');
        },
        notify: function notify(message, detail, messageType) {
            var self = this;
            var message = message || '';
            var detail = detail || '';
            var messageType = messageType || 'info';
            if (_.isEmpty(message)) return false;
            self.$q.notify({
                message: message,
                timeout: 5000,
                type: messageType,
                detail: detail,
                position: 'top'

            });
        },
        processMessages: function processMessages(responseIn) {
            var self = this;

            // Default and check for data.
            var response = responseIn || null;
            if (_.isNull(response)) return;

            window.log('helper-mixins.processMessages: Running with:', response);

            // Check for general messages.
            if (_.has(response, 'messages')) {
                _.each(response.messages, function (messages, key) {
                    var message = _.isArray(messages) ? messages.join(', ') : messages;

                    switch (key) {
                        case 'alert-error':
                            self.notify(message, '', 'warning');
                            break;

                        case 'alert-info':
                            self.notify(message, '', 'info');
                            break;

                        case 'alert-success':
                            self.notify(message, '', 'positive');
                            break;
                    }
                });
            }
        },
        setValue: function setValue(obj, fields, value) {
            var self = this;
            var fields = fields || null;
            var obj = obj || self;
            var value = value || '';

            if (!_.isObject(obj)) {
                window.log('Cannot set fields to bad object.');
                return;
            }

            if (_.isNull(value) || _.isNull(fields)) {
                window.log('Cannot set fields with bad params.');
                return;
            }

            // Check for fields that is an index (collection update)
            if (_.isNumber(fields)) {
                var index = fields; // Just for readability.
                Vue.set(obj, index, value);
                return self;
            }

            // Check for multi-set.
            fields = _.isArray(fields) ? fields : [fields];
            _.each(fields, function (field) {
                if (_.isString(field)) {
                    Vue.set(obj, field, value);
                }
            });
            return self;
        },
        toggle: function toggle(ref) {
            var self = this;
            var ref = ref || null;
            if (_.isNull(ref)) return;
            if (_.has(self, ref)) {
                _.set(self, ref, !_.get(self, ref));
            }
        },

        updateList: function updateList(collection, item, compareKey) {
            var self = this;
            var key = compareKey || 'id';
            var found = false;
            window.log('helper-mixins:updateList called with ', collection, item, compareKey);
            _.forEach(collection, function (collectionItem, index) {
                if (_.isEqual(_.toString(collectionItem[key]), _.toString(item[key]))) {
                    self.setValue(collection, index, item);
                    found = true;
                }
            });

            // Add to collection if not found for update.
            if (!found) {
                collection.unshift(item);
            }
        }
    }
};

/***/ }),

/***/ "./resources/assets/sass/dashmix/themes/xmodern.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/sass/main.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
__webpack_require__("./resources/assets/sass/main.scss");
module.exports = __webpack_require__("./resources/assets/sass/dashmix/themes/xmodern.scss");


/***/ })

/******/ });