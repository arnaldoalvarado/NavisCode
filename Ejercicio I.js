console.log('Hola Mundo')

const nombre = 'Arnaldo'
const edad = 62
const mayorEdad = true

const direccion = {
  calle: 'Gregorio Albarracin',
  numero: 335
}

const coloresFavoritos = ['rojo', 'azul', 'verde', 'amarillo']
const lenguajesFavoritos = ['JavaScript', 'Python', 'C#', 'Visual Basic', 'Ruby']

const mejorLenguaje = lenguajesFavoritos[0]
console.log(mejorLenguaje);

const peorLenguaje = lenguajesFavoritos[lenguajesFavoritos.length - 1];
console.log(peorLenguaje);

const num1 = 22;
const num2 = 11;

const suma = num1 + num2
console.log({suma});

const resta = num1 - num2
console.log({resta});

const multiplicacion = num1 * num2
console.log({multiplicacion})

const division = num1 / num2
console.log({division})



const saludo = 'Hola'

if(saludo == 'Hola'){
  console.log('Ha saludado')
}

// Crea un array de 3 pokemons.

const pokemons = ['Arnaldo', 'Giacomo', 'Alonso', 'Sonia', 'Nicole']

console.log(pokemons[0])
console.log(pokemons[1])
console.log(pokemons[2])

// Bonus de investigación: ¿Cómo se puede mostrar el nombre de cada pokemon en una línea?
// Mostrar el array en una sola línea.

console.log(pokemons.join(' '));
console.log(pokemons[0], pokemons[1], pokemons[2])

// Bonus extra: ¿Cómo se pueda hacer esto con bucles?
// Primera forma:
for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i]);
  }

// Segunda forma:
  for (const pokemon of pokemons) {
    console.log(pokemon);
  }

// Tercera Forma:
  pokemons.forEach((pokemon) => {
    console.log(pokemon);
  });
   
  

/**
 * Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
 * Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.
 */

// Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.

const pokemones = [
    
    {   
        nombre: 'Arnaldo',
        tipo: 'agua',
    },

    {
        nombre: 'Giacomo',
        tipo: 'fuego',
    },

    {
        nombre: 'Alonso',
        tipo: 'ice',
    },
    
];


// SOLUCIÓNES CON BUCLES:
for (let index = 0; index < pokemones.length; index++) {
    const pokemon = pokemones[index];
    if (pokemon.tipo === 'fuego') {
      console.log(pokemon.nombre + ' ¡Es un pokemon de fuego! 🔥');
    }
  }

  
pokemones.forEach((pokemon) => {
    if (pokemon.tipo === 'fuego') {
      console.log(pokemon.nombre + ' ¡Es un pokemon de fuego! 🔥');
    }
  });


  for (const pokemon of pokemones) {
    if (pokemon.tipo === 'fuego') {
      console.log(pokemon.nombre + ' ¡Es un pokemon de fuego! 🔥');
    }
  }



  // SOLUCIÓN CON BUCLE Y DESTRUCTURING Y CONDICIONAL TERNARIA
pokemones.forEach(({ tipo }) => {
    tipo === 'fuego' ? console.log('¡Es un pokemon de fuego! 🔥') : null;
  });
  
  for (const { tipo } of pokemones) {
    tipo === 'fuego' ? console.log('¡Es un pokemon de fuego! 🔥') : null;
  }
  
  // SOLUCIÓN CON BUCLE Y DESTRUCTURING Y CONDICIONAL TERNARIA Y CONDICIONAL AND
  pokemones.forEach(({ tipo }) => {
    tipo === 'fuego' && console.log('¡Es un pokemon de fuego! 🔥');
  });
  
  for (const { tipo } of pokemones) {
    tipo === 'fuego' && console.log('¡Es un pokemon de fuego! 🔥');
  }
  
  // SOLUCION EN UNA LINEA
  pokemones.forEach(({ tipo }) => tipo === 'fuego' && console.log('¡Es un pokemon de fuego! 🔥'));

  