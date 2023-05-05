/* -------------- SERVICIO REMOTO ☁️-------------- */
function getData() {
  return new Promise((resolve, reject) => {
    let error = false;

    setTimeout(() => {
      console.log("Enviando respuesta...⌛");
      if (error) {
        reject("Error procesando la promesa");
      } else {
        resolve("Mis datos de mis productos");
      }
    }, 2000);
  });
}

/* -------------- FRONT-END (nuestra App de ⚛️React) -------------- */
console.log("App iniciada.▶");

async function leerDatosAsync() {
    let respuesta = await getData();
    console.log(respuesta);  
}

leerDatosAsync();

/* getData()
  .then((respuesta) => {
    console.log(getData());
    console.log(respuesta);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  }); */

console.log("Llegamos al final🛑.");
