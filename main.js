const productos = [
  {
    nombre: "hamburguesa simple",
    precio: 600,
    id: 1,
    imagen: "./img/hamburguesa.png",
  },
  {
    nombre: "hamburguesa con cheddar",
    precio: 800,
    id: 2,
    imagen: "./img/hamburguesa2.jpg",
  },
  {
    nombre: "hamburguesa con cheddar y bacon",
    precio: 1000,
    id: 3,
    imagen: "./img/papas1.jpg",
  },
  {
    nombre: "papas fritas",
    precio: 400,
    id: 4,
    imagen: "./img/papas1.jpg",
  },
  {
    nombre: "papas fritas con cheddar",
    precio: 600,
    id: 5,
    imagen: "./img/papas2.jpg",
  },
  {
    nombre: "ensalada completa",
    precio: 800,
    id: 6,
    imagen: "./img/ensalada.jpg",
  },
];

const createCards = () => {
  let contenedor = document.getElementById("container");
  productos.forEach((producto, posicion) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    card.innerHTML = `
    <img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.precio}</p>
    <a href="#" class="btn btn-primary" onClick="addtoCarrito()">Añadir al carrito</a> </div>`;
    contenedor.appendChild(card);
  });
};

createCards();

const addtoCarrito = () => {
  alert("Acabas de agregar el producto al carrito");
};

// Proyecto anterior a DOM
/*

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

alert(`Precio a pagar: $${total}`); */
