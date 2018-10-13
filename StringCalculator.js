function add(numberStr) {
	if (!numberStr) return 0; // Skip everything and return 0 if String is empty.

	var splitStr = numberStr.split(','),
		sum = 0;
	
	for (i = 0; i < splitStr.length; i++) {
    	//if (i >= 2) return sum; // Stop adding and return if input has more than 2 numbers.
		sum += parseInt(splitStr[i]);
	}
	return sum;
}
module.exports = add;