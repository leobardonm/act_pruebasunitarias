const { clasificarTriangulo, MAX_SIDE } = require('./triangle');

// ─────────────────────────────────────────────
// CLASES DE EQUIVALENCIA VÁLIDAS
// ─────────────────────────────────────────────
describe('Clases de equivalencia válidas', () => {
  test('EC1 – Equilátero (todos los lados iguales)', () => {
    // Arrange
    const a = 5, b = 5, c = 5;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Equilátero');
  });

  test('EC2 – Isósceles permutación a=b (primer y segundo lado iguales)', () => {
    // Arrange
    const a = 5, b = 5, c = 3;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Isósceles');
  });

  test('EC3 – Isósceles permutación b=c (segundo y tercer lado iguales)', () => {
    // Arrange
    const a = 3, b = 5, c = 5;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Isósceles');
  });

  test('EC4 – Isósceles permutación a=c (primer y tercer lado iguales)', () => {
    // Arrange
    const a = 5, b = 3, c = 5;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Isósceles');
  });

  test('EC5 – Escaleno (todos los lados diferentes)', () => {
    // Arrange
    const a = 4, b = 5, c = 6;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Escaleno');
  });
});

// ─────────────────────────────────────────────
// CLASES DE EQUIVALENCIA INVÁLIDAS
// ─────────────────────────────────────────────
describe('Clases de equivalencia inválidas', () => {
  test('EC6 – Imposible: no cumple la desigualdad triangular (a >= b+c)', () => {
    // Arrange
    const a = 10, b = 3, c = 4;
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('No es un triángulo');
  });

  test('EC7 – Un lado de longitud 0', () => {
    // Arrange
    const a = 0, b = 4, c = 4;
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('Longitudes no válidas');
  });

  test('EC8 – Un lado negativo', () => {
    // Arrange
    const a = -1, b = 4, c = 4;
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('Longitudes no válidas');
  });

  test('EC9 – Longitud con punto flotante', () => {
    // Arrange
    const a = 2.5, b = 4, c = 4;
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('Las longitudes deben ser enteros');
  });

  test('EC10 – Longitud no numérica (string)', () => {
    // Arrange
    const a = '3', b = 4, c = 5;
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('Las longitudes deben ser enteros');
  });

  test('EC11 – Número de parámetros incorrecto: menos de 3', () => {
    // Arrange / Act
    const act = () => clasificarTriangulo(3, 4);
    // Assert
    expect(act).toThrow('Se requieren exactamente 3 parámetros');
  });

  test('EC12 – Número de parámetros incorrecto: más de 3', () => {
    // Arrange / Act
    const act = () => clasificarTriangulo(3, 4, 5, 6);
    // Assert
    expect(act).toThrow('Se requieren exactamente 3 parámetros');
  });
});

// ─────────────────────────────────────────────
// CONDICIONES DE BORDE
// ─────────────────────────────────────────────
describe('Condiciones de borde', () => {
  // BC1 – Isósceles casi equilátero
  test('BC1a – Isósceles casi equilátero (a=b, c difiere por 1)', () => {
    // Arrange
    const a = 5, b = 5, c = 4;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Isósceles');
  });

  test('BC1b – Isósceles casi equilátero (b=c, a difiere por 1)', () => {
    // Arrange
    const a = 4, b = 5, c = 5;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Isósceles');
  });

  // BC2 – Escaleno casi isósceles
  test('BC2 – Escaleno cuyos dos lados menores difieren por 1 (casi isósceles)', () => {
    // Arrange
    const a = 5, b = 6, c = 8;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Escaleno');
  });

  // BC3 – Triángulo muy pequeño
  test('BC3 – Triángulo mínimo válido con enteros positivos (1,1,1)', () => {
    // Arrange
    const a = 1, b = 1, c = 1;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Equilátero');
  });

  // BC4 – Triángulo muy grande
  test('BC4 – Triángulo muy grande dentro del rango permitido (MAX_SIDE)', () => {
    // Arrange
    const a = MAX_SIDE, b = MAX_SIDE, c = MAX_SIDE;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Equilátero');
  });

  // BC5 – Combinaciones lado muy largo y muy corto
  test('BC5a – Combinación largo-largo-corto (isósceles): (MAX_SIDE, MAX_SIDE, 1)', () => {
    // Arrange
    const a = MAX_SIDE, b = MAX_SIDE, c = 1;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Isósceles');
  });

  test('BC5b – Combinación corto-largo-largo: (1, MAX_SIDE, MAX_SIDE)', () => {
    // Arrange
    const a = 1, b = MAX_SIDE, c = MAX_SIDE;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Isósceles');
  });

  test('BC5c – Combinación largo-corto-largo: (MAX_SIDE, 1, MAX_SIDE)', () => {
    // Arrange
    const a = MAX_SIDE, b = 1, c = MAX_SIDE;
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Isósceles');
  });

  // BC6 – Longitud fuera de rango
  test('BC6 – Lado mayor que MAX_SIDE lanza error', () => {
    // Arrange
    const a = MAX_SIDE + 1, b = 5, c = 5;
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('Longitud fuera de rango');
  });

  // BC7 – Un lado igual a la suma de los otros dos (las 3 permutaciones)
  test('BC7a – c = a + b (degenerate, no es triángulo)', () => {
    // Arrange
    const a = 3, b = 2, c = 5;   // 3+2=5
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('No es un triángulo');
  });

  test('BC7b – b = a + c (degenerate, no es triángulo)', () => {
    // Arrange
    const a = 3, b = 5, c = 2;   // 3+2=5
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('No es un triángulo');
  });

  test('BC7c – a = b + c (degenerate, no es triángulo)', () => {
    // Arrange
    const a = 5, b = 3, c = 2;   // 3+2=5
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('No es un triángulo');
  });

  // BC8 – Un lado apenas menor que la suma de los otros dos (las 3 permutaciones)
  test('BC8a – c = (a+b) − 1 (válido, apenas por debajo del límite)', () => {
    // Arrange
    const a = 5, b = 4, c = 8;   // c=8 = 5+4-1
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Escaleno');
  });

  test('BC8b – b = (a+c) − 1 (válido, apenas por debajo del límite)', () => {
    // Arrange
    const a = 5, b = 8, c = 4;   // b=8 = 5+4-1
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Escaleno');
  });

  test('BC8c – a = (b+c) − 1 (válido, apenas por debajo del límite)', () => {
    // Arrange
    const a = 8, b = 5, c = 4;   // a=8 = 5+4-1
    // Act
    const resultado = clasificarTriangulo(a, b, c);
    // Assert
    expect(resultado).toBe('Escaleno');
  });

  // BC9 – Un lado apenas mayor que la suma de los otros dos (las 3 permutaciones)
  test('BC9a – c = (a+b) + 1 (inválido, supera la desigualdad triangular)', () => {
    // Arrange
    const a = 3, b = 4, c = 8;   // c=8 > 3+4=7
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('No es un triángulo');
  });

  test('BC9b – b = (a+c) + 1 (inválido, supera la desigualdad triangular)', () => {
    // Arrange
    const a = 3, b = 8, c = 4;   // b=8 > 3+4=7
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('No es un triángulo');
  });

  test('BC9c – a = (b+c) + 1 (inválido, supera la desigualdad triangular)', () => {
    // Arrange
    const a = 8, b = 3, c = 4;   // a=8 > 3+4=7
    // Act
    const act = () => clasificarTriangulo(a, b, c);
    // Assert
    expect(act).toThrow('No es un triángulo');
  });
});
