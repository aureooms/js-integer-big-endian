'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._div = _div;

var _core = require('../core');

/**
 * |A| = |C|
 */
function _div(r, a, ai, aj, b, bi, bj, c, ci, cj) {

	var n = bj - bi;

	if (n === 1) {
		return (0, _core._div_limb)(r, b[bi], a, ai, aj, c, ci);
	} else if (n < _core.THRESHOLD_DIV_DC) {
		return (0, _core.schoolbook_div)(r, a, ai, aj, b, bi, bj, c, ci);
	} else {
		return (0, _core._dc_div)(r, a, ai, aj, b, bi, bj, c, ci, cj);
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvX2Rpdi5qcyJdLCJuYW1lcyI6WyJfZGl2IiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJjIiwiY2kiLCJjaiIsIm4iXSwibWFwcGluZ3MiOiI7Ozs7O1FBS2dCQSxJLEdBQUFBLEk7O0FBTGhCOztBQUVBOzs7QUFHTyxTQUFTQSxJQUFULENBQWdCQyxDQUFoQixFQUFvQkMsQ0FBcEIsRUFBd0JDLEVBQXhCLEVBQTZCQyxFQUE3QixFQUFrQ0MsQ0FBbEMsRUFBc0NDLEVBQXRDLEVBQTJDQyxFQUEzQyxFQUFnREMsQ0FBaEQsRUFBb0RDLEVBQXBELEVBQXlEQyxFQUF6RCxFQUE4RDs7QUFFcEUsS0FBTUMsSUFBSUosS0FBS0QsRUFBZjs7QUFFQSxLQUFLSyxNQUFNLENBQVgsRUFBZTtBQUNkLFNBQU8scUJBQVdWLENBQVgsRUFBZUksRUFBRUMsRUFBRixDQUFmLEVBQXVCSixDQUF2QixFQUEyQkMsRUFBM0IsRUFBZ0NDLEVBQWhDLEVBQXFDSSxDQUFyQyxFQUF5Q0MsRUFBekMsQ0FBUDtBQUNBLEVBRkQsTUFJSyxJQUFLRSwwQkFBTCxFQUE0QjtBQUNoQyxTQUFPLDBCQUFnQlYsQ0FBaEIsRUFBb0JDLENBQXBCLEVBQXdCQyxFQUF4QixFQUE2QkMsRUFBN0IsRUFBa0NDLENBQWxDLEVBQXNDQyxFQUF0QyxFQUEyQ0MsRUFBM0MsRUFBZ0RDLENBQWhELEVBQW9EQyxFQUFwRCxDQUFQO0FBQ0EsRUFGSSxNQUlBO0FBQ0osU0FBTyxtQkFBU1IsQ0FBVCxFQUFhQyxDQUFiLEVBQWlCQyxFQUFqQixFQUFzQkMsRUFBdEIsRUFBMkJDLENBQTNCLEVBQStCQyxFQUEvQixFQUFvQ0MsRUFBcEMsRUFBeUNDLENBQXpDLEVBQTZDQyxFQUE3QyxFQUFrREMsRUFBbEQsQ0FBUDtBQUNBO0FBRUQiLCJmaWxlIjoiX2Rpdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kaXZfbGltYiAsIHNjaG9vbGJvb2tfZGl2ICwgX2RjX2RpdiB9IGZyb20gJy4uL2NvcmUnIDtcbmltcG9ydCB7IFRIUkVTSE9MRF9ESVZfREMgfSBmcm9tICcuLi9jb3JlJyA7XG4vKipcbiAqIHxBfCA9IHxDfFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2RpdiAoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgYyAsIGNpICwgY2ogKSB7XG5cblx0Y29uc3QgbiA9IGJqIC0gYmkgO1xuXG5cdGlmICggbiA9PT0gMSApIHtcblx0XHRyZXR1cm4gX2Rpdl9saW1iKCByICwgYltiaV0gLCBhICwgYWkgLCBhaiAsIGMgLCBjaSApIDtcblx0fVxuXG5cdGVsc2UgaWYgKCBuIDwgVEhSRVNIT0xEX0RJVl9EQyApIHtcblx0XHRyZXR1cm4gc2Nob29sYm9va19kaXYoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgYyAsIGNpICkgO1xuXHR9XG5cblx0ZWxzZSB7XG5cdFx0cmV0dXJuIF9kY19kaXYoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgYyAsIGNpICwgY2ogKSA7XG5cdH1cblxufVxuIl19