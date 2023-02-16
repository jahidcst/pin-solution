function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
    }
    else{
        const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMassge = document.getElementById('pin-success');
    const pinWrongMassge = document.getElementById('pin-wrong');

    if(typedNumber === currentPin){
        pinSuccessMassge.style.display = 'block';
        pinWrongMassge.style.display = 'none';
    }
    else{
        pinWrongMassge.style.display = 'block';
        pinSuccessMassge.style.display = 'none';
    }
})