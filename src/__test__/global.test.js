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

reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if(!str) {
      reject(Error('Error'));
    }
    resolve(str.split("").reverse().join(""));
  })
};

it('Prueba Callback', () => {
  reverseString2('Hola')
  .then(string => expect(string).toBe('aloH'))
})
 
reverseString3 = (str) => {
  return new Promise((resolve, reject) => {
    if(!str) {
      reject(Error('Error'));
    }
    resolve(str.split("").reverse().join(""));
  });
}

it('Prueba con Asyn', async  () => {
  const result = await reverseString3('Hola');
  expect(result).toBe('aloH');
})


afterEach( () =>console.log('Despues de cada prueba') );
afterAll( () =>console.log('Despues de todas las pruebas') );
beforeEach( () =>console.log('antes de cada prueba') );
beforeAll( () =>console.log('antes de todas las pruebas') );
