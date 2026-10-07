// alert("Hola CH73");

//console.log("Esta es la consola")

// Ejercicio Saludo Integrantes equipo 3
const personas = [
  {
    nombre: "Andre",
    descripcion: `Estoy aquí para poder conseguir mi 
    primer empleo en el área TEC 
    y con el proyecto espero poner en práctica las habilidades 
    vistas en el bootcamp, así como agregar el proyecto a mi 
    portafolio de prácticas de código.`
  },
  {
    nombre: "Elizabeth",
    descripcion: `Espero obtener las herramientas necesarias 
    para la creación de un e - comerce y desarrollar mis 
    habilidades blandas en conjunto con el equipo.` 
  },
  {
    nombre: "Emanuel",
    descripcion: `Yo espero aprender mucho de este proyecto, 
    aprender a trabajar en equipo, y desarrollar 
    habilidades nuevas dentro del mundo de TI.`
  },
  {
    nombre: "Victor",
    descripcion: ` Y al finalizar con el proyecto espero 
    conocer cada una de las partes que lo conforman y 
    de igual manera aprender y dominar cada una. y mejorar 
    mis Soft skillis.`
  },
  {
    nombre: "Juan",
    descripcion: ``
  },
  {
    nombre: "Juan",
    descripcion: ``
  },
  {
    nombre: "Juan",
    descripcion: ``
  },
  {
    nombre: "Juan",
    descripcion: ``
  },
  {
    nombre: "Juan",
    descripcion: ``
  },
  {
    nombre: "Juan",
    descripcion: ``
  }
];

const nombreBuscado = prompt("¿Quién eres?: ")

const persona = personas.find(persona => persona.nombre === nombreBuscado);

if (persona) {
  alert(persona.descripcion);
} else {
  alert("No se encontró el nombre");
}






alert(`Bienvenido ${pregunta}`)