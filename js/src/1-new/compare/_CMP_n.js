
/**
 * Compares two big endian arrays, |a| = |b|
 *
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 *
 * @return {Number} 1 if a > b; 0 if a = b; -1 otherwise.
 */

const _CMP_n = function ( a , ai , aj , b , bi ) {

	for (; ai < aj; ++ai, ++bi) {
		if (a[ai] > b[bi]) return  1;
		if (a[ai] < b[bi]) return -1;
	}

	return 0;
};

exports._CMP_n = _CMP_n;
