const text = 'Hola Mundo';

const Json = ['Leonardo', 'Andrea', 'Modesto', 'Laura'];

test('Prueba test inicial', () => {
  expect(text).toMatch(/o/);
});

test('prueba nombres', () => {
  expect(Json).toContain('Laura');
});

test('Mayor que', () => {
  expect(9.1).toBeGreaterThan(9); 
})

test('Verdadero', () => {
  expect(true).toBeTruthy();
});

const reverTring = (valor, callback) => {
  callback(valor.split("").reverse().join(""));
}

test('Test Callback', () => {
  reverTring('Hello', (valor) => {
    expect(valor).toBe('olleH')
  })
});

const reverseString2 = () => {
  return new Promise((resolve, reject) => {
    if(!str) {
      reject(Error('Error'));
    }
    resolve(str.split("").reverse().join(""));
  })
};

test('Prueba Callback', () => {
  reverseString2('Hola')
  .then(string => {
    expect(string).toBe('aloH');
  })
})