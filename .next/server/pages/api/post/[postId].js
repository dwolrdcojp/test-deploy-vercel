"use strict";
(() => {
var exports = {};
exports.id = 424;
exports.ids = [424];
exports.modules = {

/***/ 9980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4611);

async function handler(req, res) {
    const { postId  } = req.query;
    const selectedPost = _data_posts__WEBPACK_IMPORTED_MODULE_0__/* ["default"].result.find */ .Z.result.find((x)=>x.id === postId);
    const { id , title , date  } = selectedPost;
    res.status(200).json({
        id,
        title,
        date
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [611], () => (__webpack_exec__(9980)));
module.exports = __webpack_exports__;

})();