const { clasificarTriangulo } = require('./triangle');

describe('clasificarTriangulo - clases válidas', () => {
  test('clasifica triángulo equilátero', () => {
    // Arrange
    const a = 5;
    const b = 5;
    const c = 5;

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe('Equilátero');
  });

  test('clasifica triángulo isósceles', () => {
    // Arrange
    const a = 5;
    const b = 5;
    const c = 3;

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe('Isósceles');
  });

  test('clasifica triángulo escaleno', () => {
    // Arrange
    const a = 4;
    const b = 5;
    const c = 6;

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe('Escaleno');
  });
});

describe('clasificarTriangulo - clases inválidas', () => {
  test('lanza error si una longitud es cero', () => {
    // Arrange
    const a = 0;
    const b = 4;
    const c = 4;

    // Act
    const act = () => clasificarTriangulo(a, b, c);

    // Assert
    expect(act).toThrow('Longitudes no válidas');
  });

  test('lanza error si una longitud es negativa', () => {
    // Arrange
    const a = -1;
    const b = 4;
    const c = 4;

    // Act
    const act = () => clasificarTriangulo(a, b, c);

    // Assert
    expect(act).toThrow('Longitudes no válidas');
  });

  test('lanza error si una longitud no es entera', () => {
    // Arrange
    const a = 2.5;
    const b = 4;
    const c = 4;

    // Act
    const act = () => clasificarTriangulo(a, b, c);

    // Assert
    expect(act).toThrow('Las longitudes deben ser enteros');
  });

  test('lanza error si una longitud no es numérica', () => {
    // Arrange
    const a = '3';
    const b = 4;
    const c = 5;

    // Act
    const act = () => clasificarTriangulo(a, b, c);

    // Assert
    expect(act).toThrow('Las longitudes deben ser enteros');
  });

  test('lanza error si no cumple desigualdad triangular', () => {
    // Arrange
    const a = 1;
    const b = 2;
    const c = 3;

    // Act
    const act = () => clasificarTriangulo(a, b, c);

    // Assert
    expect(act).toThrow('No es un triángulo');
  });
});

describe('clasificarTriangulo - condiciones de borde', () => {
  test('rechaza caso límite a + b = c', () => {
    // Arrange
    const a = 2;
    const b = 3;
    const c = 5;

    // Act
    const act = () => clasificarTriangulo(a, b, c);

    // Assert
    expect(act).toThrow('No es un triángulo');
  });

  test('acepta justo por encima del límite a + b > c', () => {
    // Arrange
    const a = 2;
    const b = 4;
    const c = 5;

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe('Escaleno');
  });

  test('acepta el mínimo triángulo válido con enteros positivos', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const c = 1;

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe('Equilátero');
  });
});
