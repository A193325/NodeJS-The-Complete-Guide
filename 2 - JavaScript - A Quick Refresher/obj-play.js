const person = {
  name: 'Adivair',
  age: 26,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

// person.greet();

const hobbies = ['Sports', 'Coocking', 'Sleep'];

// for(let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map(hobby => {
//   return hobby.toUpperCase();
// }));

// console.log(hobbies);

hobbies.push('Programming');

// const copiedArray = hobbies.slice();

// spread operator
const copiedArray = [...hobbies, 'More Programming'];
console.log(copiedArray);

const copiedObject = {...person};
console.log(copiedObject);

// rest operator
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4, 'String'));