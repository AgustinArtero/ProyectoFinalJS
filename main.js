document.addEventListener("DOMContentLoaded", () => {
  // Variables
  let carrito = [];
  const divisa = "$";
  const DOMitems = document.querySelector("#items");
  const DOMcarrito = document.querySelector("#carrito");
  const DOMtotal = document.querySelector("#total");
  const DOMbotonVaciar = document.querySelector("#botonVaciar");
  const DOMbotonComprar = document.querySelector("#botonComprar");
  const miLocalStorage = window.localStorage;

  // Funciones
  function renderizarProductos() {
    productos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement("div");
      miNodo.classList.add("card", "col-sm-4", "text-center");
      // Body
      const miNodoCardBody = document.createElement("div");
      miNodoCardBody.classList.add("card-body", "align-content-around");
      // Titulo
      const miNodoTitle = document.createElement("h5");
      miNodoTitle.classList.add("card-title");
      miNodoTitle.textContent = info.nombre;
      // Imagen
      const miNodoImagen = document.createElement("img");
      miNodoImagen.classList.add("img-fluid");
      miNodoImagen.setAttribute("src", info.imagen);
      // Precio
      const miNodoPrecio = document.createElement("p");
      miNodoPrecio.classList.add("card-text");
      miNodoPrecio.textContent = `${divisa}${info.precio}`;
      // Boton
      const miNodoBoton = document.createElement("button");
      miNodoBoton.classList.add("btn", "Example-btn8");
      miNodoBoton.textContent = "Añadir al carrito";
      miNodoBoton.setAttribute("marcador", info.id);
      miNodoBoton.addEventListener("click", anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
    });
  }

  function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute("marcador"));
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
  }

  function renderizarCarrito() {
    DOMcarrito.textContent = "";
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
      const miItem = productos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        return itemId === item ? (total += 1) : total;
      }, 0);
      const miNodo = document.createElement("li");
      miNodo.classList.add("list-group-item", "text-center", "mx-1");
      miNodo.textContent = `Elegiste ${miItem[0].nombre} x ${numeroUnidadesItem} = ${divisa} ${miItem[0].precio}`;
      const miBoton = document.createElement("button");
      miBoton.classList.add("btn", "Example-btn2", "mx-5");
      miBoton.textContent = "Eliminar";
      miBoton.style.marginLeft = "1rem";
      miBoton.dataset.item = item;
      miBoton.addEventListener("click", borrarItemCarrito);
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = calcularTotal();
  }

  function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
  }

  function calcularTotal() {
    return carrito
      .reduce((total, item) => {
        const miItem = productos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
      }, 0)
      .toFixed(2);
  }

  function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    localStorage.clear();
  }

  function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage() {
    if (miLocalStorage.getItem("carrito") !== null) {
      carrito = JSON.parse(miLocalStorage.getItem("carrito"));
    }
  }

  function comprarBotonClick() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Desea comprar los productos seleccionados?",
        text: "Puedes cancelar o modificar los productos dando en Cancelar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Terminar compra",
        cancelButtonText: "Cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Hecho!",
            "Tu compra resultó exitosa.",
            "success"
          );
          carrito = [];
          renderizarCarrito();
          localStorage.clear();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "Pero puedes modificar los productos aún!",
            "error"
          );
        }
      });
  }

  DOMbotonVaciar.addEventListener("click", vaciarCarrito);
  DOMbotonComprar.addEventListener("click", comprarBotonClick);

  cargarCarritoDeLocalStorage();
  renderizarProductos();
  renderizarCarrito();
});
