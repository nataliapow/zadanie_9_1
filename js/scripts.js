function getTriangleArea(a, h) {
	var triangleArea = a * h / 2;
	if ((a <= 0 ) || (h <= 0)) {
		console.log('Nieprawidłowe dane');
	}
	return triangleArea;
}
console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(8, 12);
var triangle2Area = getTriangleArea(7, 13);
var triangle3Area = getTriangleArea(4, 10);