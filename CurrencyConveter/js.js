const button =document.getElementById('convert-button')

const dolar=5.2

const convertValues=()=>{
    const inputReais=document.getElementById('input-real').value
    const realValue=document.getElementById('real-value')
    const currencyValue=document.getElementById('currency-value')

    realValue.innerHTML= new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReais);
    
    
    currencyValue.innerHTML= new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(inputReais/dolar);
}

button.addEventListener('click', convertValues)