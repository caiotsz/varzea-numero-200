function soma(number1,number2){
    return number1+number2;
}
console.log(soma(10,10));
function areaQuadrado(number1){
return number1*number1;
}
console.log(areaQuadrado(10))
let areaTrapezio=function(base1,base2,altura){
    return (base1+base2)*altura/2;
}
console.log(areaTrapezio(10,10,10));


function media(number1,number2,number3){
    return(number1+number2+number3)/3;
}

let input = prompt ('Digite 3 numeros separados por virgulas');
let resultadoMedia = media(numeros[0], numeros[1], numeros[2]);
document.write(resultadoMedia)

