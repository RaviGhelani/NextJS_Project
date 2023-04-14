(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 8725:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(1185);
const Schema = mongoose.Schema;
const meetupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
module.exports = mongoose.models.meetup || mongoose.model("meetup", meetupSchema);


/***/ }),

/***/ 2100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
// EXTERNAL MODULE: ./model/meetup.js
var model_meetup = __webpack_require__(8725);
var meetup_default = /*#__PURE__*/__webpack_require__.n(model_meetup);
;// CONCATENATED MODULE: ./pages/api/new-meetup.js



// /api/new-meetup
// POST /api/new-meetup
async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const MONGODB_URI = "mongodb+srv://Ravi1411:Ravi1411@nodejs.19qxclq.mongodb.net/meetup?retryWrites=true&w=majority";
        external_mongoose_default().connect(MONGODB_URI).then((result)=>{
            console.log("connected...");
        }).catch((err)=>{
            console.log(err);
        });
        try {
            const meetup = new (meetup_default())(data);
            await meetup.save();
            res.status(201).json({
                message: "Meetup inserted!"
            });
        } catch (err) {
            res.send(err);
        }
    }
}
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2100));
module.exports = __webpack_exports__;

})();