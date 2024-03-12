


function onSubmit() {

    let result = 0;
    let number1 = Number(document.getElementById('firstnumber').value)
    let number2 = Number(document.getElementById('secondnumber').value)

    
        if (document.getElementById('box1').checked) {
            result = number1 + number2;
        } else if (document.getElementById('box2').checked) {
            result = number1 - number2;
        }else if (document.getElementById('box3').checked) {
            result = number1 * number2;
        }else if (document.getElementById('box4').checked) {
            result = number1 / number2;
        }else{
            alert("Escolha a opção que deseja entre +, -, *, -")
        }
    

    document.getElementById('result').innerHTML = result;
}
