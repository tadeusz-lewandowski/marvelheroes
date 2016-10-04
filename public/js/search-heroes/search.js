const heroesSearchForm = document.getElementById("search");

heroesSearchForm.onsubmit = function(event){
    event.preventDefault();
    const inputValue = heroesSearchForm.elements.item(0).value;
    console.log(inputValue);
    qwest.get('/heroes/' + inputValue)
     .then(function(xhr, response) {
        
     });
}
