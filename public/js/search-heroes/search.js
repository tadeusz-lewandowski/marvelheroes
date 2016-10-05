const heroesSearchForm = document.getElementById("search");
let description        = document.getElementById("description");
let heroImage          = document.getElementById("herophoto");
let notFound           = document.getElementById("result-notfound");
let result             = document.getElementById("result");

notFound.classList.add("hide");

heroesSearchForm.onsubmit = function(event){
    event.preventDefault();
    const inputValue = heroesSearchForm.elements.item(0).value;

    qwest.get('/heroes/' + inputValue)
     .then(function(xhr, response) {
        let hero = JSON.parse(response)
        if(hero.data.results.length > 0){
            result.classList.remove("hide");
            notFound.classList.add("hide");

            description.textContent = hero.data.results[0].description;
            heroImage.src = hero.data.results[0].thumbnail.path+'/portrait_xlarge.'+hero.data.results[0].thumbnail.extension;
        } else{
            result.classList.add("hide");
            notFound.classList.remove("hide");
        }
     });
}
