var suma= function(){
    console.log('probando sumar')
    var valor1= document.getElementById('n1').value
    var valor2= document.getElementById('n2').value
    var resultado= (parseInt(valor1)+parseInt(valor2))
    document.getElementById('res').innerHTML='El resultado de la suma es '+resultado;
}

var resta= function(){
    console.log('probando resta')
    var valor1= document.getElementById('n1').value
    var valor2= document.getElementById('n2').value
    var resultado=(parseInt(valor1)-parseInt(valor2))
    document.getElementById('res').innerHTML='El resultado de la resta es '+resultado;
}

var multiplicacion= function(){
    console.log('probado multi')
    var valor1= document.getElementById('n1').value
    var valor2= document.getElementById('n2').value
    var resultado=(parseInt(valor1)*parseInt(valor2))
    document.getElementById('res').innerHTML='El resultado de la multiplicación es '+resultado;

}

var division =function(){
    console.log('probando division')
    var valor1= document.getElementById('n1').value
    var valor2= document.getElementById('n2').value
    var resultado=(parseInt(valor1)/parseInt(valor2))
    document.getElementById('res').innerHTML='El resultado de la división es '+resultado;
}