"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_AdminHome_vue"],{

/***/ "./resources/js/components/admin/AdminHome.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/AdminHome.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminHome_vue_vue_type_template_id_5e39c91a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminHome.vue?vue&type=template&id=5e39c91a& */ "./resources/js/components/admin/AdminHome.vue?vue&type=template&id=5e39c91a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _AdminHome_vue_vue_type_template_id_5e39c91a___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminHome_vue_vue_type_template_id_5e39c91a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminHome.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminHome.vue?vue&type=template&id=5e39c91a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminHome.vue?vue&type=template&id=5e39c91a& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHome_vue_vue_type_template_id_5e39c91a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHome_vue_vue_type_template_id_5e39c91a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminHome_vue_vue_type_template_id_5e39c91a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminHome.vue?vue&type=template&id=5e39c91a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminHome.vue?vue&type=template&id=5e39c91a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminHome.vue?vue&type=template&id=5e39c91a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/AdminHome.vue?vue&type=template&id=5e39c91a& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "page-inner" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { attrs: { id: "main-wrapper" } }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-8 col-md-12" }, [
            _c("div", { staticClass: "panel panel-white" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "panel-body" }, [
                _c("div", { attrs: { id: "chart1" } }, [_c("svg")]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-md-12" }, [
            _c("div", { staticClass: "panel panel-white" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "panel-body" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { attrs: { id: "chart2" } }, [_c("svg")]),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _vm._m(5),
        _vm._v(" "),
        _vm._m(6),
      ]),
      _vm._v(" "),
      _vm._m(7),
    ]),
    _vm._v(" "),
    _vm._m(8),
    _vm._v(" "),
    _vm._m(9),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title" }, [
      _c("h3", { staticClass: "breadcrumb-header" }, [_vm._v("Dashboard")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3 col-md-6" }, [
        _c("div", { staticClass: "panel panel-white stats-widget" }, [
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "pull-left" }, [
              _c("span", { staticClass: "stats-number" }, [_vm._v("$781,876")]),
              _vm._v(" "),
              _c("p", { staticClass: "stats-info" }, [_vm._v("Total Income")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pull-right" }, [
              _c("i", { staticClass: "icon-arrow_upward stats-icon" }),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-md-6" }, [
        _c("div", { staticClass: "panel panel-white stats-widget" }, [
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "pull-left" }, [
              _c("span", { staticClass: "stats-number" }, [_vm._v("578,100")]),
              _vm._v(" "),
              _c("p", { staticClass: "stats-info" }, [_vm._v("Downloads")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pull-right" }, [
              _c("i", { staticClass: "icon-arrow_downward stats-icon" }),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-md-6" }, [
        _c("div", { staticClass: "panel panel-white stats-widget" }, [
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "pull-left" }, [
              _c("span", { staticClass: "stats-number" }, [_vm._v("+23,356")]),
              _vm._v(" "),
              _c("p", { staticClass: "stats-info" }, [
                _vm._v("New Registrations"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pull-right" }, [
              _c("i", { staticClass: "icon-arrow_upward stats-icon" }),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-md-6" }, [
        _c("div", { staticClass: "panel panel-white stats-widget" }, [
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "pull-left" }, [
              _c("span", { staticClass: "stats-number" }, [_vm._v("58%")]),
              _vm._v(" "),
              _c("p", { staticClass: "stats-info" }, [
                _vm._v("Finished Tasks"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pull-right" }, [
              _c("i", { staticClass: "icon-arrow_upward stats-icon" }),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading clearfix" }, [
      _c("h4", { staticClass: "panel-title" }, [_vm._v("Total Revenue")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading clearfix" }, [
      _c("h4", { staticClass: "panel-title" }, [_vm._v("Server Status")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "server-load row" }, [
        _c("div", { staticClass: "server-stat col-sm-4" }, [
          _c("p", [_vm._v("167GB")]),
          _vm._v(" "),
          _c("span", [_vm._v("Usage")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "server-stat col-sm-4" }, [
          _c("p", [_vm._v("320GB")]),
          _vm._v(" "),
          _c("span", [_vm._v("ecaps")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "server-stat col-sm-4" }, [
          _c("p", [_vm._v("57.4%")]),
          _vm._v(" "),
          _c("span", [_vm._v("CPU")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-5 col-md-12" }, [
        _c("div", { staticClass: "panel panel-white" }, [
          _c("div", { staticClass: "panel-heading clearfix" }, [
            _c("h4", { staticClass: "panel-title" }, [_vm._v("Tasks")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "task-list" }, [
              _c("div", { staticClass: "task-item" }, [
                _c("span", { staticClass: "task-name" }, [
                  _vm._v("Download 'Alpha' admin template"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c(
                    "div",
                    {
                      staticClass: "progress-bar progress-bar-info",
                      staticStyle: { width: "80%" },
                      attrs: {
                        role: "progressbar",
                        "aria-valuenow": "60",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                      },
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("80% Complete"),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "task-item" }, [
                _c("span", { staticClass: "task-name" }, [
                  _vm._v("Create a new landing page"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c(
                    "div",
                    {
                      staticClass: "progress-bar progress-bar-info",
                      staticStyle: { width: "10%" },
                      attrs: {
                        role: "progressbar",
                        "aria-valuenow": "60",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                      },
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("10% Complete"),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "task-item" }, [
                _c("span", { staticClass: "task-name" }, [
                  _vm._v("Delete inactive users"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c(
                    "div",
                    {
                      staticClass: "progress-bar progress-bar-info",
                      staticStyle: { width: "50%" },
                      attrs: {
                        role: "progressbar",
                        "aria-valuenow": "60",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                      },
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("80% Complete"),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "task-item" }, [
                _c("span", { staticClass: "task-name" }, [
                  _vm._v("Update NVD3 chart plugin"),
                  _c("i", { staticClass: "fa fa-check" }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c(
                    "div",
                    {
                      staticClass: "progress-bar progress-bar-primary",
                      staticStyle: { width: "100%" },
                      attrs: {
                        role: "progressbar",
                        "aria-valuenow": "60",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                      },
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("100% Complete"),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "task-item" }, [
                _c("span", { staticClass: "task-name" }, [
                  _vm._v("Install 4 new layouts"),
                  _c("i", { staticClass: "fa fa-check" }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c(
                    "div",
                    {
                      staticClass: "progress-bar progress-bar-primary",
                      staticStyle: { width: "100%" },
                      attrs: {
                        role: "progressbar",
                        "aria-valuenow": "60",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                      },
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("100% Complete"),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-7 col-md-12" }, [
        _c("div", { staticClass: "panel panel-white" }, [
          _c("div", { staticClass: "panel-heading clearfix" }, [
            _c("h4", { staticClass: "panel-title" }, [_vm._v("Invoices")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "table-responsive invoice-table" }, [
              _c("table", { staticClass: "table" }, [
                _c("tbody", [
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [_vm._v("0567")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Kenny Highland")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticClass: "label label-success" }, [
                        _vm._v("Finished"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("$427")]),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [_vm._v("0186")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Darrell Price")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Twitter")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticClass: "label label-success" }, [
                        _vm._v("Finished"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("$1714")]),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [_vm._v("0712")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Richard Lunsford")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Facebook")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticClass: "label label-danger" }, [
                        _vm._v("Denied"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("$685")]),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [_vm._v("0095")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Amy Walker")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Youtube")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticClass: "label label-warning" }, [
                        _vm._v("Pending"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("$9900")]),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [_vm._v("1054")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Kathy Olson")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Youtube")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticClass: "label label-default" }, [
                        _vm._v("Upcoming"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("$1250")]),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [_vm._v("0043")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Susan Mabry")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Instagram")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { staticClass: "label label-default" }, [
                        _vm._v("Upcoming"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("$399")]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-4 col-md-6" }, [
        _c("div", { staticClass: "panel panel-white" }, [
          _c("div", { staticClass: "panel-heading clearfix" }, [
            _c("h4", { staticClass: "panel-title" }, [_vm._v("Browsers")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "browser-stats" }, [
              _c("ul", { staticClass: "list-unstyled" }, [
                _c("li", [
                  _c("i", { staticClass: "fa fa-chrome" }),
                  _vm._v("Google Chrome"),
                  _c("div", { staticClass: "text-success pull-right" }, [
                    _vm._v("32%"),
                    _c("i", { staticClass: "fa fa-level-up" }),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", { staticClass: "fa fa-firefox" }),
                  _vm._v("Firefox"),
                  _c("div", { staticClass: "text-success pull-right" }, [
                    _vm._v("25%"),
                    _c("i", { staticClass: "fa fa-level-up" }),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", { staticClass: "fa fa-internet-explorer" }),
                  _vm._v("Internet Explorer"),
                  _c("div", { staticClass: "text-success pull-right" }, [
                    _vm._v("16%"),
                    _c("i", { staticClass: "fa fa-level-up" }),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", { staticClass: "fa fa-safari" }),
                  _vm._v("Safari"),
                  _c("div", { staticClass: "text-danger pull-right" }, [
                    _vm._v("13%"),
                    _c("i", { staticClass: "fa fa-level-down" }),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", { staticClass: "fa fa-opera" }),
                  _vm._v("Opera"),
                  _c("div", { staticClass: "text-danger pull-right" }, [
                    _vm._v("7%"),
                    _c("i", { staticClass: "fa fa-level-down" }),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", { staticClass: "fa fa-tablet" }),
                  _vm._v("Mobile & tablet"),
                  _c("div", { staticClass: "text-success pull-right" }, [
                    _vm._v("4%"),
                    _c("i", { staticClass: "fa fa-level-up" }),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", { staticClass: "fa fa-hashtag" }),
                  _vm._v("Others"),
                  _c("div", { staticClass: "text-success pull-right" }, [
                    _vm._v("3%"),
                    _c("i", { staticClass: "fa fa-level-up" }),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4 col-md-6" }, [
        _c("div", { staticClass: "panel panel-white" }, [
          _c("div", { staticClass: "panel-heading clearfix" }, [
            _c("h4", { staticClass: "panel-title" }, [_vm._v("Projects")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "project-stats" }, [
              _c("ul", { staticClass: "list-unstyled" }, [
                _c("li", [
                  _vm._v("Alpha - Admin Template"),
                  _c(
                    "span",
                    { staticClass: "label label-default pull-right" },
                    [_vm._v("85%")]
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("Meteor - Landing Page"),
                  _c(
                    "span",
                    { staticClass: "label label-success pull-right" },
                    [_vm._v("Finished")]
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("Modern - Corporate Website"),
                  _c(
                    "span",
                    { staticClass: "label label-success pull-right" },
                    [_vm._v("Finished")]
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("ecaps - Admin Template"),
                  _c("span", { staticClass: "label label-danger pull-right" }, [
                    _vm._v("Rejected"),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("Backend UI"),
                  _c(
                    "span",
                    { staticClass: "label label-default pull-right" },
                    [_vm._v("27%")]
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("Personal Blog"),
                  _c(
                    "span",
                    { staticClass: "label label-default pull-right" },
                    [_vm._v("48%")]
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("E-mail Templates"),
                  _c(
                    "span",
                    { staticClass: "label label-default pull-right" },
                    [_vm._v("Pending")]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4 col-md-12" }, [
        _c("div", { staticClass: "panel panel-white" }, [
          _c("div", { staticClass: "panel-heading clearfix" }, [
            _c("h4", { staticClass: "panel-title" }, [_vm._v("Income")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("canvas", { attrs: { id: "chart3" } }),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-footer" }, [
      _c("p", [
        _vm._v("Made with "),
        _c("i", { staticClass: "fa fa-heart" }),
        _vm._v(" by skcats"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "page-right-sidebar",
        attrs: { id: "main-right-sidebar" },
      },
      [
        _c("div", { staticClass: "page-right-sidebar-inner" }, [
          _c("div", { staticClass: "right-sidebar-top" }, [
            _c("div", { staticClass: "right-sidebar-tabs" }, [
              _c(
                "ul",
                { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
                [
                  _c(
                    "li",
                    {
                      staticClass: "active",
                      attrs: { role: "presentation", id: "chat-tab" },
                    },
                    [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "#chat",
                            "aria-controls": "chat",
                            role: "tab",
                            "data-toggle": "tab",
                          },
                        },
                        [_vm._v("chat")]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { attrs: { role: "presentation", id: "settings-tab" } },
                    [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "#settings",
                            "aria-controls": "settings",
                            role: "tab",
                            "data-toggle": "tab",
                          },
                        },
                        [_vm._v("settings")]
                      ),
                    ]
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "right-sidebar-toggle right-sidebar-close",
                attrs: {
                  href: "javascript:void(0)",
                  "data-sidebar-id": "main-right-sidebar",
                },
              },
              [_c("i", { staticClass: "icon-close" })]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "right-sidebar-content" }, [
            _c("div", { staticClass: "tab-content" }, [
              _c(
                "div",
                {
                  staticClass: "tab-pane active",
                  attrs: { role: "tabpanel", id: "chat" },
                },
                [
                  _c("div", { staticClass: "chat-list" }, [
                    _c("span", { staticClass: "chat-title" }, [
                      _vm._v("Recent"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "right-sidebar-toggle chat-item unread",
                        attrs: {
                          href: "javascript:void(0);",
                          "data-sidebar-id": "chat-right-sidebar",
                        },
                      },
                      [
                        _c("div", { staticClass: "user-avatar" }, [
                          _c("img", {
                            attrs: {
                              src: "http://via.placeholder.com/40x40",
                              alt: "",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "chat-info" }, [
                          _c("span", { staticClass: "chat-author" }, [
                            _vm._v("David"),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "chat-text" }, [
                            _vm._v("where u at?"),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "chat-time" }, [
                            _vm._v("08:50"),
                          ]),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "right-sidebar-toggle chat-item unread active-user",
                        attrs: {
                          href: "javascript:void(0);",
                          "data-sidebar-id": "chat-right-sidebar",
                        },
                      },
                      [
                        _c("div", { staticClass: "user-avatar" }, [
                          _c("img", {
                            attrs: {
                              src: "http://via.placeholder.com/40x40",
                              alt: "",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "chat-info" }, [
                          _c("span", { staticClass: "chat-author" }, [
                            _vm._v("Daisy"),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "chat-text" }, [
                            _vm._v("Daisy sent a photo."),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "chat-time" }, [
                            _vm._v("11:34"),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "chat-list" }, [
                    _c("span", { staticClass: "chat-title" }, [
                      _vm._v("Older"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "right-sidebar-toggle chat-item",
                        attrs: {
                          href: "javascript:void(0);",
                          "data-sidebar-id": "chat-right-sidebar",
                        },
                      },
                      [
                        _c("div", { staticClass: "user-avatar" }, [
                          _c("img", {
                            attrs: {
                              src: "http://via.placeholder.com/40x40",
                              alt: "",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "chat-info" }, [
                          _c("span", { staticClass: "chat-author" }, [
                            _vm._v("Tom"),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "chat-text" }, [
                            _vm._v("You: ok"),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "chat-time" }, [
                            _vm._v("2d"),
                          ]),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "right-sidebar-toggle chat-item active-user",
                        attrs: {
                          href: "javascript:void(0);",
                          "data-sidebar-id": "chat-right-sidebar",
                        },
                      },
                      [
                        _c("div", { staticClass: "user-avatar" }, [
                          _c("img", {
                            attrs: {
                              src: "http://via.placeholder.com/40x40",
                              alt: "",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "chat-info" }, [
                          _c("span", { staticClass: "chat-author" }, [
                            _vm._v("Anna"),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "chat-text" }, [
                            _vm._v("asdasdasd"),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "chat-time" }, [
                            _vm._v("4d"),
                          ]),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "right-sidebar-toggle chat-item active-user",
                        attrs: {
                          href: "javascript:void(0);",
                          "data-sidebar-id": "chat-right-sidebar",
                        },
                      },
                      [
                        _c("div", { staticClass: "user-avatar" }, [
                          _c("img", {
                            attrs: {
                              src: "http://via.placeholder.com/40x40",
                              alt: "",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "chat-info" }, [
                          _c("span", { staticClass: "chat-author" }, [
                            _vm._v("Liza"),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "chat-text" }, [
                            _vm._v("asdasdasd"),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "chat-time" }, [
                            _vm._v(" "),
                          ]),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "load-more-messages",
                        attrs: {
                          href: "javascript:void(0);",
                          "data-toggle": "tooltip",
                          "data-placement": "bottom",
                          title: "Load More",
                        },
                      },
                      [_vm._v("•••")]
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-pane",
                  attrs: { role: "tabpanel", id: "settings" },
                },
                [
                  _c("div", { staticClass: "right-sidebar-settings" }, [
                    _c("span", { staticClass: "settings-title" }, [
                      _vm._v("General Settings"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "sidebar-setting-list list-unstyled" },
                      [
                        _c("li", [
                          _c("span", { staticClass: "settings-option" }, [
                            _vm._v("Notifications"),
                          ]),
                          _c("input", {
                            staticClass: "js-switch",
                            attrs: { type: "checkbox", checked: "" },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("span", { staticClass: "settings-option" }, [
                            _vm._v("Activity log"),
                          ]),
                          _c("input", {
                            staticClass: "js-switch",
                            attrs: { type: "checkbox", checked: "" },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("span", { staticClass: "settings-option" }, [
                            _vm._v("Automatic updates"),
                          ]),
                          _c("input", {
                            staticClass: "js-switch",
                            attrs: { type: "checkbox" },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("span", { staticClass: "settings-option" }, [
                            _vm._v("Allow backups"),
                          ]),
                          _c("input", {
                            staticClass: "js-switch",
                            attrs: { type: "checkbox" },
                          }),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "settings-title" }, [
                      _vm._v("Account Settings"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "sidebar-setting-list list-unstyled" },
                      [
                        _c("li", [
                          _c("span", { staticClass: "settings-option" }, [
                            _vm._v("Chat"),
                          ]),
                          _c("input", {
                            staticClass: "js-switch",
                            attrs: { type: "checkbox", checked: "" },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("span", { staticClass: "settings-option" }, [
                            _vm._v("Incognito mode"),
                          ]),
                          _c("input", {
                            staticClass: "js-switch",
                            attrs: { type: "checkbox" },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("span", { staticClass: "settings-option" }, [
                            _vm._v("Public profile"),
                          ]),
                          _c("input", {
                            staticClass: "js-switch",
                            attrs: { type: "checkbox" },
                          }),
                        ]),
                      ]
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "page-right-sidebar",
        attrs: { id: "chat-right-sidebar" },
      },
      [
        _c("div", { staticClass: "page-right-sidebar-inner" }, [
          _c("div", { staticClass: "right-sidebar-top" }, [
            _c("div", { staticClass: "chat-top-info" }, [
              _c("span", { staticClass: "chat-name" }, [_vm._v("Noah")]),
              _vm._v(" "),
              _c("span", { staticClass: "chat-state" }, [_vm._v("2h ago")]),
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "right-sidebar-toggle chat-sidebar-close pull-right",
                attrs: {
                  href: "javascript:void(0)",
                  "data-sidebar-id": "chat-right-sidebar",
                },
              },
              [_c("i", { staticClass: "icon-keyboard_arrow_right" })]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "right-sidebar-content" }, [
            _c("div", { staticClass: "right-sidebar-chat slimscroll" }, [
              _c("div", { staticClass: "chat-bubbles" }, [
                _c("div", { staticClass: "chat-start-date" }, [
                  _vm._v("02/06/2017 5:58PM"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "chat-bubble them" }, [
                  _c("div", { staticClass: "chat-bubble-img-container" }, [
                    _c("img", {
                      attrs: {
                        src: "http://via.placeholder.com/38x38",
                        alt: "",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "chat-bubble-text-container" }, [
                    _c("span", { staticClass: "chat-bubble-text" }, [
                      _vm._v("Hello"),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "chat-bubble me" }, [
                  _c("div", { staticClass: "chat-bubble-text-container" }, [
                    _c("span", { staticClass: "chat-bubble-text" }, [
                      _vm._v("Hello!"),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "chat-start-date" }, [
                  _vm._v("03/06/2017 4:22AM"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "chat-bubble me" }, [
                  _c("div", { staticClass: "chat-bubble-text-container" }, [
                    _c("span", { staticClass: "chat-bubble-text" }, [
                      _vm._v("lorem"),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "chat-bubble them" }, [
                  _c("div", { staticClass: "chat-bubble-img-container" }, [
                    _c("img", {
                      attrs: {
                        src: "http://via.placeholder.com/38x38",
                        alt: "",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "chat-bubble-text-container" }, [
                    _c("span", { staticClass: "chat-bubble-text" }, [
                      _vm._v("ipsum dolor sit amet"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "chat-write" }, [
              _c(
                "form",
                {
                  staticClass: "form-horizontal",
                  attrs: { action: "javascript:void(0);" },
                },
                [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Say something" },
                  }),
                ]
              ),
            ]),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);