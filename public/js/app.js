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

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        console.log('Component mounted.');
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cv.vue":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {
            details: {
                personal: [{ title: 'Name', value: 'David Murray' }, { title: 'Nationality', value: 'South African' }, { title: 'Relationship', value: 'Married' }, { title: 'Birthday', value: '2 June 1972' }, { title: 'Languages', value: 'English, Afrikaans' }],
                contact: [{ title: 'Email', value: 'david.murray@ajarti.com' }, { title: 'Phone', value: '+27 (0)83 759 7724' }, { title: 'Skype', value: 'david.murray' }, { title: 'Address', value: '9 Regiment, Bellville<br/>Cape Town, 7530<br/>South Africa' }]
            }
        };
    },

    methods: {
        goLinkedIn: function goLinkedIn() {
            top.location.href = 'https://www.linkedin.com/in/davidseanmurray/';
        }
    },
    mounted: function mounted() {
        console.log('Component mounted.');
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
  return _c(
    "q-page",
    { staticClass: "q-pa-xl" },
    [
      _c(
        "q-card",
        { staticClass: "bg-white", staticStyle: { "max-width": "1000px" } },
        [
          _c("q-card-media", [
            _c(
              "div",
              {
                staticClass: "row items-stretch",
                staticStyle: {
                  background: "url('/header-bg/cv-header-bg.jpg') no-repeat",
                  height: "200px"
                }
              },
              [
                _c("div", { staticClass: "col-sm-2" }, [_vm._v(" ")]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-1" }, [
                  _c(
                    "div",
                    {
                      staticClass: "text-center position-relative",
                      staticStyle: {
                        height: "65%",
                        "background-color": "rgba(247,255,0, 0.75)"
                      }
                    },
                    [
                      _c("img", {
                        staticStyle: {
                          left: "0",
                          right: "0",
                          position: "absolute",
                          bottom: "10px",
                          margin: "auto"
                        },
                        attrs: {
                          src: "/full-stack-alt.png",
                          alt: "fullstack",
                          width: "60px",
                          height: "60px"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-6 q-pl-lg self-center text-white" },
                  [
                    _c("div", [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-family": "'Montserrat'",
                            "font-weight": "400",
                            "font-size": "2em",
                            "letter-spacing": "3px"
                          }
                        },
                        [_vm._v("DAVID")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-family": "'Montserrat'",
                            "font-weight": "800",
                            "font-size": "2em",
                            "letter-spacing": "3px",
                            "margin-left": "10px"
                          }
                        },
                        [_vm._v("MURRAY")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "font-weight": "500",
                          "font-style": "italic",
                          "font-size": "0.8em",
                          "letter-spacing": "1px",
                          margin: "5px 0 0 5px",
                          opacity: "0.45"
                        }
                      },
                      [_vm._v("FULLSTACK DEVELOPER")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3" }, [_vm._v(" ")])
              ]
            )
          ]),
          _vm._v(" "),
          _c("q-card-main", { staticClass: "q-pa-none" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-sm-4 q-pa-lg",
                  staticStyle: { "background-color": "rgb(69,166,245,0.05)" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "q-mb-xl" },
                    [
                      _c("div", { staticClass: "cv-title title-colour" }, [
                        _vm._v("PERSONAL")
                      ]),
                      _vm._v(" "),
                      _c("hr", {
                        staticStyle: {
                          height: "1px",
                          border: "none",
                          color: "#ccc",
                          "background-color": "#ccc"
                        }
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.details.personal, function(item) {
                        return [
                          _c("div", { staticClass: "row" }, [
                            _c("div", {
                              staticClass: "col-xs-5 text-weight-bold",
                              domProps: { textContent: _vm._s(item.title) }
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "whitespace-text col-xs-7 text-grey-6",
                              domProps: { innerHTML: _vm._s(item.value) }
                            })
                          ]),
                          _vm._v(" "),
                          _c("hr", {
                            staticStyle: {
                              height: "1px",
                              border: "none",
                              color: "#ccc",
                              "background-color": "#ccc"
                            }
                          })
                        ]
                      })
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8 q-pa-lg" }, [
                _c("div", { staticClass: "q-mb-xl" }, [
                  _c("div", { staticClass: "cv-title title-colour" }, [
                    _vm._v("PROFILE")
                  ]),
                  _vm._v(" "),
                  _c("hr", {
                    staticStyle: {
                      height: "1px",
                      border: "none",
                      color: "#ccc",
                      "background-color": "#ccc"
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-sm-4 q-pa-lg",
                  staticStyle: { "background-color": "rgb(69,166,245,0.05)" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "q-mb-xl" },
                    [
                      _c("div", { staticClass: "cv-title title-colour" }, [
                        _vm._v("CONTACT DETAILS")
                      ]),
                      _vm._v(" "),
                      _c("hr", {
                        staticStyle: {
                          height: "1px",
                          border: "none",
                          color: "#ccc",
                          "background-color": "#ccc"
                        }
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.details.contact, function(item) {
                        return [
                          _c("div", { staticClass: "row" }, [
                            _c("div", {
                              staticClass: "col-xs-5 text-weight-bold",
                              domProps: { textContent: _vm._s(item.title) }
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "whitespace-text col-xs-7 text-grey-6",
                              domProps: { innerHTML: _vm._s(item.value) }
                            })
                          ]),
                          _vm._v(" "),
                          _c("hr", {
                            staticStyle: {
                              height: "1px",
                              border: "none",
                              color: "#ccc",
                              "background-color": "#ccc"
                            }
                          })
                        ]
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "cv-title title-colour q-mt-xl q-pt-lg"
                        },
                        [_vm._v("REFERENCES")]
                      ),
                      _vm._v(" "),
                      _c("hr", {
                        staticStyle: {
                          height: "1px",
                          border: "none",
                          color: "#ccc",
                          "background-color": "#ccc"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "whitespace-text col-xs-7 text-grey-6" },
                        [_vm._v("Available on request")]
                      ),
                      _vm._v(" "),
                      _c("hr", {
                        staticStyle: {
                          height: "1px",
                          border: "none",
                          color: "#ccc",
                          "background-color": "#ccc"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "cv-title title-colour q-mt-xl q-pt-lg"
                        },
                        [_vm._v("Links")]
                      ),
                      _vm._v(" "),
                      _c("hr", {
                        staticStyle: {
                          height: "1px",
                          border: "none",
                          color: "#ccc",
                          "background-color": "#ccc"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "whitespace-text vertical-middle col-xs-7"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "text-primary pointer",
                              on: {
                                click: function($event) {
                                  _vm.goLinkedIn()
                                }
                              }
                            },
                            [
                              _c("q-btn", {
                                staticClass: "no-shadow",
                                attrs: {
                                  size: "sm",
                                  round: "",
                                  color: "primary",
                                  icon: "fab fa-linkedin-in"
                                }
                              }),
                              _vm._v(
                                "\n                                davidseanmurray\n                            "
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("hr", {
                        staticStyle: {
                          height: "1px",
                          border: "none",
                          color: "#ccc",
                          "background-color": "#ccc"
                        }
                      })
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8 q-pa-lg" }, [
                _c(
                  "div",
                  { staticClass: "q-mb-xl" },
                  [
                    _c("div", { staticClass: "cv-title title-colour" }, [
                      _vm._v("WORK")
                    ]),
                    _vm._v(" "),
                    _c("hr", {
                      staticStyle: {
                        height: "1px",
                        border: "none",
                        color: "#ccc",
                        "background-color": "#ccc"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "q-timeline",
                      { staticClass: "q-pl-md", attrs: { color: "secondary" } },
                      [
                        _c(
                          "q-timeline-entry",
                          {
                            attrs: {
                              title: "Managing Member",
                              subtitle: "Current",
                              side: "right"
                            }
                          },
                          [
                            _c("div", [
                              _c("div", [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-grey-7 text-weight-bolder q-timeline-place"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            Lodgestaff.com ·\n                                            "
                                    ),
                                    _c("span", { staticClass: "text-grey-5" }, [
                                      _vm._v(
                                        "Cape Town, Western Cape, South Africa"
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "q-mt-sm" }, [
                                _c("p", [
                                  _vm._v(
                                    "\n                                            Lodgestaff.com was started as a side project with latent staff time while IT Director / 50% Owner at Clickthinking.com (now iProspect South Africa). The primary purpose of the site was to service the recruiting needs of the lodge industry in Africa, but rapidly grew into the favourite job board of the hospitality industry.\n                                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "\n                                            I was initially responsible for the technical design and build of the job board and after taking it over full time in 2010 I have been responsible for the running of the business covering both technical management and general management.\n                                        "
                                  )
                                ])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "q-timeline-entry",
                          {
                            attrs: {
                              title: "Event Title",
                              subtitle: "February 22, 1986",
                              side: "right"
                            }
                          },
                          [
                            _c("div", [
                              _vm._v(
                                "\n                                    Lorem ipsum dolor sit amet.\n                                "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "q-timeline-entry",
                          {
                            attrs: {
                              title: "Event Title",
                              subtitle: "February 22, 1986",
                              side: "right"
                            }
                          },
                          [
                            _c("div", [
                              _vm._v(
                                "\n                                    Lorem ipsum dolor sit amet.\n                                "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "q-timeline-entry",
                          {
                            attrs: {
                              title: "Event Title",
                              subtitle: "February 22, 1986",
                              side: "right"
                            }
                          },
                          [
                            _c("div", [
                              _vm._v(
                                "\n                                    Lorem ipsum dolor sit amet.\n                                "
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
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
  return _c(
    "q-page",
    { staticClass: "q-pa-xl" },
    [
      _c(
        "q-card",
        { staticClass: "bg-white", staticStyle: { "max-width": "1000px" } },
        [
          _c("q-card-media", [
            _c(
              "div",
              {
                staticClass: "row items-stretch",
                staticStyle: {
                  background: "url('/header-bg/cv-header-bg.jpg') no-repeat",
                  height: "200px"
                }
              },
              [
                _c("div", { staticClass: "col-sm-2" }, [_vm._v(" ")]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-1" }, [
                  _c(
                    "div",
                    {
                      staticClass: "text-center position-relative",
                      staticStyle: {
                        height: "65%",
                        "background-color": "rgba(247,255,0, 0.75)"
                      }
                    },
                    [
                      _c("img", {
                        staticStyle: {
                          left: "0",
                          right: "0",
                          position: "absolute",
                          bottom: "10px",
                          margin: "auto"
                        },
                        attrs: {
                          src: "/full-stack-alt.png",
                          alt: "fullstack",
                          width: "60px",
                          height: "60px"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-6 q-pl-lg self-center text-white" },
                  [
                    _c("div", [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-family": "'Montserrat'",
                            "font-weight": "400",
                            "font-size": "2em",
                            "letter-spacing": "3px"
                          }
                        },
                        [_vm._v("DAVID")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-family": "'Montserrat'",
                            "font-weight": "800",
                            "font-size": "2em",
                            "letter-spacing": "3px",
                            "margin-left": "10px"
                          }
                        },
                        [_vm._v("MURRAY")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "font-weight": "500",
                          "font-style": "italic",
                          "font-size": "0.8em",
                          "letter-spacing": "1px",
                          margin: "5px 0 0 5px",
                          opacity: "0.45"
                        }
                      },
                      [_vm._v("FULLSTACK DEVELOPER")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3" }, [_vm._v(" ")])
              ]
            )
          ]),
          _vm._v(" "),
          _c("q-card-main", { staticClass: "q-pa-none" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-sm-4 q-pa-xl",
                  staticStyle: { "background-color": "rgb(69,166,245,0.05)" }
                },
                [
                  _c("div", { staticClass: "q-mb-xl" }, [
                    _c("div", { staticClass: "cv-title title-colour" }, [
                      _vm._v("TO")
                    ]),
                    _vm._v(" "),
                    _c("hr", {
                      staticStyle: {
                        height: "1px",
                        border: "none",
                        color: "#ccc",
                        "background-color": "#ccc"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "q-pt-sm text-weight-bold" }, [
                      _vm._v("BGBO Co")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "q-pt-sm text-weight-light text-faded" },
                      [_vm._v("Hiring Department")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "q-mb-xl" }, [
                    _c("div", { staticClass: "cv-title title-colour" }, [
                      _vm._v("POSITION")
                    ]),
                    _vm._v(" "),
                    _c("hr", {
                      staticStyle: {
                        height: "1px",
                        border: "none",
                        color: "#ccc",
                        "background-color": "#ccc"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "q-pt-sm text-weight-light text-faded" },
                      [_vm._v("Laravel Developer")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "q-mb-xl" }, [
                    _c("div", { staticClass: "cv-title title-colour" }, [
                      _vm._v("DATE")
                    ]),
                    _vm._v(" "),
                    _c("hr", {
                      staticStyle: {
                        height: "1px",
                        border: "none",
                        color: "#ccc",
                        "background-color": "#ccc"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "q-pt-sm text-weight-light text-faded" },
                      [_vm._v("5 August 2018")]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8" }, [
                _c("p", [_c("br"), _c("br")]),
                _vm._v(" "),
                _c("p", [_c("br"), _c("br")]),
                _vm._v(" "),
                _c("p", [_c("br"), _c("br")]),
                _vm._v(" "),
                _c("p", [_c("br"), _c("br")]),
                _vm._v(" "),
                _c("div", [
                  _c("img", {
                    attrs: {
                      src: "signature.png",
                      border: "0",
                      height: "89",
                      width: "150"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "q-mt-md q-mb-xs text-faded" }, [
                  _vm._v("Yours sincerely,")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-weight-bold" }, [
                  _vm._v("David Murray")
                ])
              ])
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
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
    routes: [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_1__components_cover_letter___default.a }, { path: '/cv', component: __WEBPACK_IMPORTED_MODULE_0__components_cv___default.a }]
});

var app = new Vue({
    el: '#app',
    data: function data() {
        return {
            showLeft: true
        };
    },

    router: router
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

// Setup Vuelidate (Validation)
// import Vuelidate from 'vuelidate'
//
// Vue.use(Vuelidate);

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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/app.js");


/***/ })

/******/ });