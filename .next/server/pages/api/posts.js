"use strict";
(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 8591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4611);

//comment
async function handler(req, res) {
    res.status(200).json({
        posts: _data_posts__WEBPACK_IMPORTED_MODULE_0__/* ["default"].result */ .Z.result
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [611], () => (__webpack_exec__(8591)));
module.exports = __webpack_exports__;

})();