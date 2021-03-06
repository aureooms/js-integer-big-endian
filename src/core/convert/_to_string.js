import _chr from './_chr.js';

/**
 * Convert an entire limb array to a string representation (without changing
 * the radix).
 *
 * @param {number[]} b The inpurt limb array.
 *
 * @return {string} The string representation.
 */
export default function _to_string(b) {
	const n = b.length;

	const data = [];

	for (let k = 0; k < n; ++k) data.push(_chr(b[k]));

	return data.join('');
}
