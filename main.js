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

function bhaskara(a, b, c) {
   
    let delta = b * b - 4 * a * c;

   
    if (delta < 0) {
        return "Não existem raízes reais";
    } else if (delta === 0) {
        
        let x = -b / (2 * a);
        return `Raiz única: x = ${x}`;
    } else {
       
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `As raízes são: x1 = ${x1}, x2 = ${x2}`;
    }
}


let input = prompt('Digite os valores de a, b e c separados por vírgulas (ex: 1, -3, 2)');


let valores = input.split(',').map(Number);

let [a, b, c] = valores; 
let resultado = bhaskara(a, b, c);
document.write(resultado);


