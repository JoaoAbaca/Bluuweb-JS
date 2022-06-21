const carrito = document.querySelector('#carrito');
const template = document.querySelector('#template');
const footer = document.querySelector('#footer');
const templateFooter = document.querySelector('#templateFooter');
const fragment = document.createDocumentFragment();

document.addEventListener('click', (e) => {
    if(e.target.matches(".card .button")){
         agregarAlCarrito(e)
    }
    if(e.target.matches(".list-group-item .btn-success")){
        btnAumentar(e);
    }
    if(e.target.matches(".list-group-item .btn-danger")){
        btnDisminuir(e);
    }
})

let carritoObjeto=[];

const agregarAlCarrito = (e) => {
    
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio:parseInt(e.target.dataset.precio),
    }; 
    const indice = carritoObjeto.findIndex((item) => item.id === producto.id );

    if(indice === -1){
        carritoObjeto.push(producto);
    }
    else{
        carritoObjeto[indice].cantidad++;
        //carritoObjeto[indice].precio=carritoObjeto[indice].cantidad* producto.precio;
    }

   pintarCarrito();
};


//btnesBotones.forEach( (btn) => btn.addEventListener("click", agregarAlCarrito));

const pintarCarrito = () => {

    carrito.textContent= ""; 

    array.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.text-white .lead').textContent= item.titulo;
        clone.querySelector('.rounded-pill').textContent= item.cantidad;
        clone.querySelector('div .lead span').textContent= item.precio * item.cantidad;
        clone.querySelector('.btn-danger').dataset.id = item.id;
        clone.querySelector('.btn-success').dataset.id = item.id;
        fragment.appendChild(clone);
    })
    carrito.appendChild(fragment);
    pintarFooter();
};

pintarFooter= () =>{
    footer.textContent="";
    const total=carritoObjeto.reduce(
    (acc, current) => acc + current.precio * current.cantidad,
    0
    );
    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector("p span").textContent = total;
    footer.appendChild.apply(clone);
};

const btnAumentar = (e) => {
    carritoObjeto=carritoObjeto.map(item =>{
        if(item.id===e.target.dataset.id){
            item.cantidad++;
        }
        return item;
    })
    pintarCarrito();
};
const btnDisminuir = (e) => {
    carritoObjeto=carritoObjeto.filter(item =>{
        if(item.id===e.target.dataset.id){
            if(item.cantidad>0){
            item.cantidad--;
                if(item.cantidad===0) return;
                return item;
            }
        }
        else{return item;}
    })
    pintarCarrito();
}
