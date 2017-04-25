'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.translate = translate;

var _ = require('.');

function translate(f, t, string) {

	var a = (0, _.parse)(f, t, string);
	return (0, _.stringify)(t, t, a, 0, a.length);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvdHJhbnNsYXRlLmpzIl0sIm5hbWVzIjpbInRyYW5zbGF0ZSIsImYiLCJ0Iiwic3RyaW5nIiwiYSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLFMsR0FBQUEsUzs7QUFGaEI7O0FBRU8sU0FBU0EsU0FBVCxDQUFxQkMsQ0FBckIsRUFBeUJDLENBQXpCLEVBQTZCQyxNQUE3QixFQUFzQzs7QUFFNUMsS0FBTUMsSUFBSSxhQUFPSCxDQUFQLEVBQVdDLENBQVgsRUFBZUMsTUFBZixDQUFWO0FBQ0EsUUFBTyxpQkFBV0QsQ0FBWCxFQUFlQSxDQUFmLEVBQW1CRSxDQUFuQixFQUF1QixDQUF2QixFQUEyQkEsRUFBRUMsTUFBN0IsQ0FBUDtBQUVBIiwiZmlsZSI6InRyYW5zbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlICwgc3RyaW5naWZ5IH0gZnJvbSAnLicgO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlICggZiAsIHQgLCBzdHJpbmcgKSB7XG5cblx0Y29uc3QgYSA9IHBhcnNlKCBmICwgdCAsIHN0cmluZyApIDtcblx0cmV0dXJuIHN0cmluZ2lmeSggdCAsIHQgLCBhICwgMCAsIGEubGVuZ3RoICkgO1xuXG59XG4iXX0=