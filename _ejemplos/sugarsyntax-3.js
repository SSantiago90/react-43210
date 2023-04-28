const users = [
  {
    name: "John Doe",
    age: 30,
    email: "johndoe@gmail.com",
    occupation: "Software Engineer",
    hobbies: ["Playing guitar", "Hiking", "Reading"],
  },
  {
    name: "Jane Smith",
    age: 25,
    email: "janesmith@yahoo.com",
    occupation: "Graphic Designer",
    hobbies: ["Drawing", "Skiing", "Traveling"],
  },
  {
    name: "Bob Johnson",
    age: 40,
    email: "bob.johnson@hotmail.com",
    occupation: "Sales Manager",
    hobbies: ["Playing golf", "Fishing", "Watching movies"],
  },
  {
    name: "Sara Lee",
    age: 28,
    email: "saralee@gmail.com",
    occupation: "Marketing Specialist",
    hobbies: ["Photography", "Cooking", "Yoga"],
  },
  {
    name: "Diego",
    age: 35,
    email: "mark.thompson@outlook.com",
    occupation: "Product Manager",
    cursos: ["Playing basketball", "Traveling", "Listening to music","React"],
  },
];

const idLogedIn = 1;

/* const nameUser = users[idLogedIn].name;
const rolUser = users[idLogedIn].occupation; */
// desctructring//destructuración
const { userName, occupation, age: userAge } = users[idLogedIn];

const saludoUser = `Bienvenid@ ${userName}, tu rol es: ${occupation}. tu edad es: ${userAge}`;
console.log(saludoUser);

/* const saludoUser = "Bienvenid@ "+ nameUser */

function hacerAlgo() {
  return "hola"
}

const hacerAlgoArrow = () => "hola"