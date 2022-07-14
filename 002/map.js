//Map ir map (pagal didziaja ir mazaja raide) 2 skirtingi dalykai
//rezultatas gaunasi toks pat, kaip ir su forEach (budas eiti per masyva)


[1,5,77].map(a => console.log(a));

console.log('-------------------------------------------');
//forEach - atlieka viena veiksma kuris neduoda rezultato
//map - eina per kiekviena masyvo nari ir grazina nauja masyva su jam duotais kintamaisiais

const fe = [1,5,77].forEach(a => console.log(a));
//const map = [1,5,77].map(a => console.log(a));

console.log(fe);
//console.log(map);

console.log('-------------------------------------------');

//map - nekeiciant originalo keicia kintamuosius
/*
const map = [1,5,77].map(a => a * 100);
console.log(map);
*/

console.log('-------------------------------------------');

const map = [1, 5, 77].map((a, i) => {

    return a * i;

});   
console.log(map)