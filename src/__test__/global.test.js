const text = 'Hola Mundo';

const Json = ['Leonardo', 'Andrea', 'Modesto', 'Laura'];

test('Prueba test inicial', () => {
  expect(text).toMatch(/o/);
});

test('prueba nombres', () => {
  expect(Json).toContain('Laura');
});

