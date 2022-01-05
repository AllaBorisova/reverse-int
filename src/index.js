module.exports = function reverse (n) {
	let str = String(Math.abs(n));
	let strReverse = '';
	for (let i = str.length-1; i >= 0; i--){
		strReverse += str[i];
	}
	return Number(strReverse);
}
