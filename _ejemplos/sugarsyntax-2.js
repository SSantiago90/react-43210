const simpsonsCharacters = [
  {
    name: "Homer Simpson",
    age: 39,
    occupation: "Nuclear safety inspector",
    favoriteFood: "Donuts",
    catchphrase: "D'oh!",
  },
  {
    name: "Marge Simpson",
    age: 34,
    occupation: "Housewife",
    favoriteFood: "Pretzels",
    catchphrase: "Mmm... donuts.",
  },
  {
    name: "Bart Simpson",
    age: 10,
    occupation: "Student",
    favoriteFood: "Butterfinger bars",
    catchphrase: "Ay caramba!",
  },
];

const user = simpsonsCharacters[0];

const campoAModificar = "occupation";
const nuevaFrase = "desmpleado";

user[campoAModificar] = nuevaFrase;
/* user.catchphrase */
console.log(user);
