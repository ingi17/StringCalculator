function add(numberStr) {
	if (!numberStr) return 0; // Skip everything and return 0 if String is empty.

	if (numberStr.indexOf("//") == 0) {
		var delim = new RegExp("\n|,|" + numberStr.substring(2, numberStr.indexOf('\n'))),
			subStr = numberStr.substring(numberStr.indexOf('\n') + 1, numberStr.length),
			splitStr = subStr.split(delim);
    console.log(splitStr);
	} else {
		var splitStr = numberStr.split(/,|\n/);
	}

	var sum = 0,
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