const MAX_SIDE = 10000;

function clasificarTriangulo(a, b, c) {
  if (arguments.length !== 3) {
    throw new Error('Se requieren exactamente 3 parámetros');
  }

  if (![a, b, c].every(Number.isInteger)) {
    throw new Error('Las longitudes deben ser enteros');
  }

  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Longitudes no válidas');
  }

  if (a > MAX_SIDE || b > MAX_SIDE || c > MAX_SIDE) {
    throw new Error('Longitud fuera de rango');
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error('No es un triángulo');
  }

  if (a === b && b === c) {
    return 'Equilátero';
  }

  if (a === b || b === c || a === c) {
    return 'Isósceles';
  }

  return 'Escaleno';
}

module.exports = { clasificarTriangulo, MAX_SIDE };
