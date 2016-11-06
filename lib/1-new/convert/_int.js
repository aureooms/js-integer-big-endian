'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._int = _int;
function _int(x) {

	if (x >= '0' && x <= '9') return x.charCodeAt(0) - 48;
	if (x >= 'A' && x <= 'Z') return x.charCodeAt(0) - 55;
	if (x >= 'a' && x <= 'z') return x.charCodeAt(0) - 87;

	throw 'invalid literal for _int: ' + x;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19pbnQuanMiXSwibmFtZXMiOlsiX2ludCIsIngiLCJjaGFyQ29kZUF0Il0sIm1hcHBpbmdzIjoiOzs7OztRQUNnQkEsSSxHQUFBQSxJO0FBQVQsU0FBU0EsSUFBVCxDQUFnQkMsQ0FBaEIsRUFBb0I7O0FBRTFCLEtBQUtBLEtBQUssR0FBTCxJQUFZQSxLQUFLLEdBQXRCLEVBQTRCLE9BQU9BLEVBQUVDLFVBQUYsQ0FBYyxDQUFkLElBQW9CLEVBQTNCO0FBQzVCLEtBQUtELEtBQUssR0FBTCxJQUFZQSxLQUFLLEdBQXRCLEVBQTRCLE9BQU9BLEVBQUVDLFVBQUYsQ0FBYyxDQUFkLElBQW9CLEVBQTNCO0FBQzVCLEtBQUtELEtBQUssR0FBTCxJQUFZQSxLQUFLLEdBQXRCLEVBQTRCLE9BQU9BLEVBQUVDLFVBQUYsQ0FBYyxDQUFkLElBQW9CLEVBQTNCOztBQUU1QixPQUFNLCtCQUErQkQsQ0FBckM7QUFFQSIsImZpbGUiOiJfaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gX2ludCAoIHggKSB7XG5cblx0aWYgKCB4ID49ICcwJyAmJiB4IDw9ICc5JyApIHJldHVybiB4LmNoYXJDb2RlQXQoIDAgKSAtIDQ4IDtcblx0aWYgKCB4ID49ICdBJyAmJiB4IDw9ICdaJyApIHJldHVybiB4LmNoYXJDb2RlQXQoIDAgKSAtIDU1IDtcblx0aWYgKCB4ID49ICdhJyAmJiB4IDw9ICd6JyApIHJldHVybiB4LmNoYXJDb2RlQXQoIDAgKSAtIDg3IDtcblxuXHR0aHJvdyAnaW52YWxpZCBsaXRlcmFsIGZvciBfaW50OiAnICsgeCA7XG5cbn1cbiJdfQ==