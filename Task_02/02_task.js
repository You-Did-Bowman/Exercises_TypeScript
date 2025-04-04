"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorServerResult = exports.SuccessServerResult = void 0;
exports.getResult = getResult;
var SuccessServerResult = /** @class */ (function () {
    function SuccessServerResult(httpCode, resultObject) {
        this.httpCode = httpCode;
        this.resultObject = resultObject;
    }
    return SuccessServerResult;
}());
exports.SuccessServerResult = SuccessServerResult;
var ErrorServerResult = /** @class */ (function () {
    function ErrorServerResult(httpCode, message) {
        this.httpCode = httpCode;
        this.message = message;
    }
    return ErrorServerResult;
}());
exports.ErrorServerResult = ErrorServerResult;
function getResult(result) {
    if (result.httpCode === 200) {
        // Returning resultObject if everything is OK
        return result.resultObject;
    }
    else {
        // Returning result.message in case of error
        // FIXME: help TypeScript Compiler to understand that result here
        // is the instance of ErrorServerResult...
        return result.message;
    }
}
