const productos = [
  {nombre: "hamburguesa simple", precio: 600},
  {nombre: "hamburguesa con cheddar", precio: 800},
  {nombre: "hamburguesa con cheddar y bacon", precio: 1000},
  {nombre: "papas fritas", precio: 400},
  {nombre: "papas fritas con cheddar", precio: 600},
  {nombre: "ensalada completa", precio: 800},
];

let carrito = [];

let seleccion = prompt("Hola! Desea ver el catalogo de la tienda?");

while (seleccion != "si" && seleccion != "no") {
  alert("Por favor, ingrese SI o NO");
  seleccion = prompt("Desea comprar algo?");
}

if (seleccion == "si") {
  alert("A continuacion podra ver nuestro catalogo");
  let todosLosProductos = productos.map(
    (producto) => producto.nombre + " $" + producto.precio
  );
  alert(todosLosProductos.join(" \n "));
} else if (seleccion == "no") {
  alert("Gracias por venir, vuelva pronto!");
}

while (seleccion != "no") {
  let producto = prompt(
    "Agrega productos a tu carrito. \n hamburguesa simple \n hamburguesa con cheddar  \n hamburguesa con cheddar y bacon \n papas fritas \n papas fritas con cheddar \n ensalada completa"
  );
  let precio = 0;

  if (
    producto == "hamburguesa simple" ||
    producto == "hamburguesa con cheddar" ||
    producto == "hamburguesa con cheddar y bacon" ||
    producto == "papas fritas" ||
    producto == "papas fritas con cheddar" ||
    producto == "ensalada completa"
  ) {
    switch (producto) {
      case "hamburguesa simple":
        precio = 600;
        break;
      case "hamburguesa con cheddar":
        precio = 800;
        break;
      case "hamburguesa con cheddar y bacon":
        precio = 1000;
        break;
      case "papas fritas":
        precio = 400;
        break;
      case "papas fritas con cheddar":
        precio = 600;
        break;
      case "ensalada completa":
        precio = 800;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("Cuantas unidades desea?"));
    carrito.push({producto, unidades, precio});
    console.log(carrito);
  } else {
    alert("El producto que ingresaste no es valido o no esta disponible");
  }

  seleccion = prompt("Desea seguir comprando?");
  while (seleccion != "si" && seleccion != "no") {
    alert("Por favor, ingrese SI o NO");
    seleccion = prompt("Desea seguir comprando?");
    if (seleccion === "no") {
      alert("Gracias por la compra! Vuelva pronto");
      carrito.forEach((carritoFinal) => {
        console.log(
          `Producto: ${carritoFinal.producto}, cantidad de unidades: ${
            carritoFinal.unidades
          }, total a pagar por el producto: ${
            carritoFinal.unidades * carritoFinal.precio
          }`
        );
      });
      break;
    }
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`El total a pagar es: $${total}`);

alert(`Precio a pagar: $${total}`);
