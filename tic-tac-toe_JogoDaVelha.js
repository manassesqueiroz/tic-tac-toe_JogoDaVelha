/*con/*---------------------Testados-----------------------------st  variblesVictoy = [
    [a1,a2,a3],
    [b1,b2,b3],
    [c1,c2,c3]

  ]

console.log(structure);
var person1 = []
var person2 = []
*/


//let a1 = a2= a3= b1= b2 =b3= c1= c2 =c3 = null
//const Seach = sequence.forEach((array) => array);



/*
const testando = sequence.some(valor =>  Player1moves.includes(valor) )*/


 
const a1 = "a1",
  a2 = "a2",
  a3 = "a3",
  b1 = "b1",
  b2 = "b2",
  b3 = "b3",
  c1 = "c1",
  c2 = "c2",
  c3 = "c3";

const structure = [
  [a1, a2, a3],
  [b1, b2, b3],
  [c1, c2, c3],
]; 
let Player1moves = [a1, a2, a3];

let Player2moves = [a1,a2,]


let sequence = [
  [a1 ,a2, a3],
  [b1 ,b2, b3],
  [c1 ,c2, c3],
  [a1 ,b1, c1],
  [a2 ,b2, c2],
  [a3 ,b3, c3],
  [a1 ,b2, c3],
  [a3 ,b2, c1]
  
];
// função entra em cada array e verifica se os valores da sequence são iguais oa das playes
function seach1(value) {

  const saoIguais = value.every(elem => Player1moves.includes(elem));

    if (saoIguais != true) {
      return false;
    }
    return true;;
  }

const buscador1 = sequence.some(seach1);



function seach2(value) {

  const saoIguais = value.every(elem => Player2moves.includes(elem));

    if (saoIguais != true) {
      return false;
    }
    return true;;
  }

const buscador2 = sequence.some(seach2);




if (buscador2 == true) {
  console.log('Congratulations player 2')
}

if (buscador1 == true) {
  console.log('Congratulations player 1')
}
/*
-----------------Repositorio--------------------------
//Player1moves.includes(valor)*/


//console.log(person1moves);
//console.log(sequence);
