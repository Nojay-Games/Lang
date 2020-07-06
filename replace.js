// @ts-check

/**
 * A function to replace wildcard (%string) strings with information from lang
 * @param {string} string The string from lang
 * @param {{[x: string]: any}} properties example: `{ "username": "PapiOphidian" }`
 * @returns {string}
 */
function replace(string, properties = {}) {
	let value = string.slice(0, string.length)
	Object.keys(properties).forEach(item => {
		let index
		while ((index = value.indexOf(`%${item}`)) !== -1) {
			value = value.slice(0, index) + properties[item] + value.slice(index + item.length + 1)
		}
	})
	return value
}

module.exports = replace
