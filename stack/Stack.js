"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = new Array();
    }
    Stack.prototype.push = function (element) {
        this.arr.push(element);
    };
    Stack.prototype.pop = function () {
        var len = this.arr.length;
        if (len != 0) {
            var top_1 = this.arr[len - 1];
            this.arr.splice(len - 1, 1);
            return top_1;
        }
        else {
            return undefined;
        }
    };
    Stack.prototype.size = function () {
        return this.arr.length;
    };
    return Stack;
}());
exports["default"] = Stack;
