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

function pitagoras(a, b) {
    return Math.sqrt(a * a + b * b);
}


let input = prompt('Digite os valores dos catetos a e b separados por vírgulas (ex: 3, 4)');

let valores = input.split(',').map(Number);
let [a, b] = valores;

let hipotenusa = pitagoras(a, b);
document.write(`meu pau tem esses cm: ${hipotenusa.toFixed(2)}`);



let nomes=['Shelly','Colt','Tick','Darryl','Stu','Crow','Brock','Edgar','Colette','Emz','Buzz','Mortis','Rosa','Nita','Carl','Bo','Poco','Frank','Eugenio','Bibi']
    let i=0; 
     while(i<nomes.length){
        console.log(i);
        console.log(nomes[i]);
         i=i+1;
        }