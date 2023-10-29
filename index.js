const fieldSets = document.querySelectorAll('.fieldset');

for(const fieldSet of fieldSets){
    fieldSet.addEventListener('click', function(){
        fieldSet.classList.toggle('show');
    })
}