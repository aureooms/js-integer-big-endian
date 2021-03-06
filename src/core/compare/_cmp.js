import assert from 'assert';

import _cmp_n from './_cmp_n.js';

/**
 * Compares two big endian arrays. The second operand cannot have more limbs
 * than the first.
 *
 * Input:
 *   - |A| >= |B| >= 0
 *
 * @param {number[]} a first operand
 * @param {number} ai a left
 * @param {number} aj a right
 * @param {number[]} b second operand
 * @param {number} bi b left
 * @param {number} bj b right
 *
 * @return {number} result 1 if a > b; 0 if a = b; -1 otherwise.
 */

export default function _cmp(a, ai, aj, b, bi, bj) {
	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);
	assert(aj - ai >= bj - bi);
	assert(bj - bi >= 0);

	const tmp = aj - bj + bi;

	for (; ai < tmp; ++ai) if (a[ai] > 0) return 1;

	assert(aj - ai === bj - bi);
	return _cmp_n(a, ai, aj, b, bi);
}
