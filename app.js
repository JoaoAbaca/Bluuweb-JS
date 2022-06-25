const cards = document.getElementById("card-dinamicas")
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment();
document.addEventListener("DOMContentLoaded",() => {
    fetchData();
});

const fetchData= async () => {
    try{
        loadingData(true);

        const res = await fetch("https://rickandmortyapi.com/api/character"); 
        const data = await res.json();


    }   catch (error){
        console.log(error);
    } finally{
        loadingData(false);
    }

};

const pintarCard = (data) =>{
    data.result.array.forEach(item => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent=item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector(".card-img-top").setAttribute("src", item.image); 
         
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}   

const loadingData = estado => {
    const loading = document.querySelector("loading");
    if(estado){
    loading.classList.remove('d-none');
    } else{
        loading.classList.add("d-none");
    }
}