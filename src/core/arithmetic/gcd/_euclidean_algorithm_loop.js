import assert from 'assert';

import _imod from '../../../api/arithmetic/div/_imod.js';
import ge from '../../../api/compare/ge.js';
import _alloc from '../../array/_alloc.js';
import _trim_positive from '../../convert/_trim_positive.js';

/**
 * Euclidean algorithm. Computes the gcd of the two input numbers A and B,
 * A >= B. Input arrays are modified ___in-place___.
 *
 * Input
 * -----
 *
 *   - A >= B
 *   - No leading zeros
 *
 * @param {Number} r The radix.
 * @param {Array} a The first input number A.
 * @param {Number} ai Left of A.
 * @param {Number} aj Right of A.
 * @param {Array} b The second input number B.
 * @param {Number} bi Left of B.
 * @param {Number} bj Right of B.
 * @returns {Array} The array containing the gcd of A and B (one of A and B).
 * Return as [ d , di , dj ], where d is the array and di and dj are its left
 * and right bounds.
 */
export default function _euclidean_algorithm_loop(r, a, ai, aj, b, bi, bj) {
	assert(r >= 2);

	assert(ai >= 0 && aj <= a.length);
	assert(bi >= 0 && bj <= b.length);

	assert(aj - ai <= 0 || a[ai] !== 0);
	assert(bj - bi <= 0 || b[bi] !== 0);

	assert(ge(a, ai, aj, b, bi, bj));

	const _j = aj - ai;
	const _ = _alloc(_j);

	while (true) {
		if (bi === bj) return [a, ai, aj];

		_imod(r, a, ai, aj, b, bi, bj, _, _j - (aj - ai), _j);

		ai = _trim_positive(a, aj - (bj - bi), aj);

		if (ai === aj) return [b, bi, bj];

		_imod(r, b, bi, bj, a, ai, aj, _, _j - (bj - bi), _j);

		bi = _trim_positive(b, bj - (aj - ai), bj);
	}
}
