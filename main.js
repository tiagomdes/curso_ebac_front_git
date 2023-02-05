const form= document.getElementById('form-number');


formValido = false;

function numberValido (varA, varB){
    return varB > varA;
}

form.addEventListener('submit',function(e){
    let varA =parseFloat(document.getElementById('campoA').value);
    let varB =parseFloat(document.getElementById('campoB').value);
    e.preventDefault();
    const messSucesso =`Valor B é maior que o valor A.` 


    formValido = numberValido(varA,varB);
    
    if (formValido){              
        alert(messSucesso);
        varA.value ='';
        varB.value ='';
    }
    else{
        alert('Valor B não é maior que o valor A.');
    }
});