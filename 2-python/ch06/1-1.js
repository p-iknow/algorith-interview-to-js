/**
 * @param {string} s
 * @return {boolean}
 */
 const isPalindrome = (s) => {
	const regex = /[^A-Za-z0-9]/g // /[\W_]/g
	const preProcessedStr =  s.toLowerCase().replace(regex, '');
	return preProcessedStr === preProcessedStr.split('').reverse().join('');
};
