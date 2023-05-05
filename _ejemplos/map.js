const courses = [
  {
    title: "Introduction to Python",
    id: 1,
    details:
      "Learn the fundamentals of Python programming language, including variables, data types, loops, and functions.",
    tags: ["Python", "Programming", "Beginner"],
    teacher: "John Smith",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Web Development Bootcamp",
    id: 2,
    details:
      "Learn the basics of web development, including HTML, CSS, and JavaScript, and build your own web applications.",
    tags: ["Web Development", "HTML", "CSS", "JavaScript", "Beginner"],
    teacher: "Jane Doe",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Data Science with R",
    id: 3,
    details:
      "Learn how to use R for data analysis, visualization, and machine learning.",
    tags: ["Data Science", "R", "Programming", "Intermediate"],
    teacher: "Bob Johnson",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Full Stack Web Development",
    id: 4,
    details:
      "Learn how to build full stack web applications using popular frameworks and technologies such as React, Node.js, and MongoDB.",
    tags: ["Web Development", "React", "Node.js", "MongoDB", "Intermediate"],
    teacher: "Sara Lee",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Machine Learning with Python",
    id: 5,
    details:
      "Learn how to build machine learning models using Python and popular libraries such as scikit-learn and TensorFlow.",
    tags: ["Machine Learning", "Python", "Data Science", "Intermediate"],
    teacher: "Mark Thompson",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Learn React",
    id: 6,
    details:
      "Learn how to build web applications with React, a popular JavaScript library for building user interfaces.",
    tags: ["React", "Web Development", "JavaScript", "Intermediate"],
    teacher: "Alex Rodriguez",
    image: "https://via.placeholder.com/300x200",
  },
];

const courseTitles = courses.map((curso) => {
  /* .... */
  return `<a href="/">Registrate al curso de: ${curso.title}</a>`;
});

console.log(courseTitles);

/* 
const numeros = [10, 5, 50];

const numerosAlCuadrado = numeros.map(function (num) {
  return num * num;
});
 */
