"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.var14Undefined = exports.var13Null = exports.var11ArrayOfAny = exports.var10Enum = exports.var9Tuple = exports.var8NumericsArray = exports.var7Array = exports.var6String = exports.var5Octal = exports.var4Binary = exports.var3Hex = exports.var2Decimal = exports.var1Boolean = void 0;
exports.var12VoidFunction = var12VoidFunction;
exports.var15NeverFunction = var15NeverFunction;
exports.var1Boolean = true;
// Numbers
exports.var2Decimal = 13;
exports.var3Hex = "f00d";
exports.var4Binary = 111111;
exports.var5Octal = 744;
// Strings
exports.var6String = "Hello, world!";
//Arrays
exports.var7Array = [1, 'test', { a: 3 }, 4, 5];
exports.var8NumericsArray = [1, 2, 3, 4, 5];
//Tuple
exports.var9Tuple = ['key', 12345];
//Enums
var var10Enum;
(function (var10Enum) {
    var10Enum[var10Enum["Red"] = 1] = "Red";
    var10Enum[var10Enum["Green"] = 2] = "Green";
    var10Enum[var10Enum["Blue"] = 4] = "Blue";
})(var10Enum || (exports.var10Enum = var10Enum = {}));
// Any
exports.var11ArrayOfAny = [1, 'test', { a: 3 }, 4, 5];
// Void
function var12VoidFunction() {
    console.log("Void Function");
}
// Null and Undefined
exports.var13Null = null;
exports.var14Undefined = undefined;
//Never
function var15NeverFunction() {
    throw new Error("This function never returns");
}
