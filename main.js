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
    const messFailure =`Valor B não é maior que o valor A.`


    formValido = numberValido(varA,varB);
    
    if (formValido){              
        const containerSucesso = document.querySelector('.sucess');
        containerSucesso.innerHTML = messSucesso;
        containerSucesso.style.display = 'block';
        const containerFailure = document.querySelector('.failure');
        containerFailure.style.display = 'none';
        varA.value ='';
        varB.value ='';
    }
    else{
        const containerFailure = document.querySelector('.failure');
        containerFailure.innerHTML = messFailure;
        containerFailure.style.display = 'block';
        const containerSucesso = document.querySelector('.sucess');
        containerSucesso.style.display = 'none';
    }
});