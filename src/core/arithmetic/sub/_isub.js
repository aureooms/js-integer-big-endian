import assert from 'assert';

/**
 * Subtracts B from A, |A| >= |B|.
 * Wraps.
 *
 * @param {Number} r base (radix)
 * @param {array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 */

export default function _isub(r, a, ai, aj, b, bi, bj) {
	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(aj - ai >= bj - bi);

	let C = 0;

	while (--bj >= bi) {
		--aj;
		const T = C;
		C = (a[aj] < b[bj] + T) | 0;
		a[aj] = a[aj] - b[bj] + (C * r - T);
	}

	if (C !== 0) {
		while (--aj >= ai && a[aj] === 0) a[aj] = r - 1;
		if (aj >= ai) --a[aj];
	}
}
