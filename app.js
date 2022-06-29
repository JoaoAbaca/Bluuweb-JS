const formulario = document.querySelector('#formulario');
const pintarTodoHTML = document.querySelector('#pintarTodo');
const templateTodo= document.querySelector('#templateTodo').content;
const alert = document.querySelector('.alert');

let todos = [];

formulario.addEventListener('submit', e => {
    e.preventDefault();
    alert.classList.add('d-none');
    const data = new FormData(formulario);
    const [todo] = [...data.values()];
    
    if(!todo.trim()){
        alert.classList.remove('d-none');
        return;
    }
    agregarTodo(todo);
    pintarTodo()
});

const agregarTodo = (todo) => {
    const objetoTodo = {
        nombre: todo,
        id: `${Date.now()}`
    };

    todos.push(objetoTodo);
}

const pintarTodo = () => {

    localStorage.setItem('todos', JSON.stringify(todos));

    pintarTodoHTML.textContent = "";
    const fragment = document.createDocumentFragment();

    todos.forEach(item => {
        const clone= templateTodo.cloneNode(true);
        clone.querySelector(".lead").textContent = item.nombre;

        clone.querySelector(".btn").dataset.id = item.id;

        fragment.appendChild(clone);
    })

    pintarTodoHTML.appendChild(fragment);
}

document.addEventListener('click', e => {
    
    if (e.target.matches(".btn-danger")){
        todos = todos.filter(item => item.id !== e.target.dataset.id);
        pintarTodo();
    }
})

document.addEventListener('DOMContentLoaded', (e) =>{
    if(localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'))
        pintarTodo();
    }
    
});