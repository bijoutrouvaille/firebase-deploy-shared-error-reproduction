"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callMe = void 0;
const functions = require("firebase-functions");
const shared_test_1 = require("@root/shared/lib/shared-test");
exports.callMe = functions.https.onCall(async (data, ctx) => {
    return {
        req: data,
        testingThings: 'HELLO!',
        date: new Date(),
        x: shared_test_1.SHARED_CONST
    };
});
//# sourceMappingURL=index.js.map