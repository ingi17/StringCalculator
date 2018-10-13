function add(numberStr) {
	if (!numberStr) return 0; // Skip everything and return 0 if String is empty.

	var splitStr = numberStr.split(/,|\n/),
		sum = 0,
		neg = [];
	
	for (i = 0; i < splitStr.length; i++) {
		if (parseInt(splitStr[i]) < 0) neg.push(splitStr[i]);
		else if (splitStr[i] < 1001) sum += parseInt(splitStr[i]);
	}
	if (neg.length > 0) {
		throw 'Negatives not allowed: ' + neg;
	}
	return sum;
}
module.exports = add;