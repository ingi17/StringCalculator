function add(numberStr) {
	if (!numberStr) return 0; // Skip everything and return 0 if String is empty.

	var splitStr = numberStr.split(/,|\n/),
		sum = 0;
	
	for (i = 0; i < splitStr.length; i++) {
		sum += parseInt(splitStr[i]);
	}
	return sum;
}
module.exports = add;