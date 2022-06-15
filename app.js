const carrito = document.querySelector('#carrito');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll('.card .btn');

const carritoObjeto={};

const agregarAlCarrito = (e) => {
    
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }; 
    if (carritoObjeto.hasOwnProperty(producto.id)){
        producto.cantidad = carritoObjeto[producto.id].cantidad +1;    
    }    
    carritoObjeto[producto.titulo]=producto;
    pintarCarrito();
};


btnesBotones.forEach( (btn) => btn.addEventListener("click", agregarAlCarrito));

const pintarCarrito = () => {

    carrito.textContent= ""; 

    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent= item.titulo;
        clone.querySelector('.rounded-pill').textContent= item.cantidad;
        fragment.appendChild(clone);
    })
    carrito.appendChild(fragment);
};

