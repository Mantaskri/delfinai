//pakeicia array ir nieko negrazina, todel reikia kopijuotis
//pvz: sudeda eiles tvarka :

const namas1 = [1, 0, 10, 5, 77]

namas1.sort();

console.log(namas1);

console.log('-------------------------------------------');
//ima random reiksmes todel mum reikia pawsakyt ar gerai rusiuoja, ar sukeist vietom :
//kad sukeist, reikia duoti neigiama skaiciu, jei duosi teigiama skaiciu, arba nuli, jis reiksmiu nekeicia
//veikia ir kaip su stringais, pagal 'ASCII table'
const namas = [1, 0, 10, 5, 77]
namas.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0
});
//stringus pavercia i skaiciu jei stringe yra skaiciai :
/*
const namas = ['1', '0', '10', '5', '77']
namas.sort((a, b) => a - b);
//vietoj 0  -> a - b bus nuo maziausio iki didziausio
//b - a nuo didziausio iki maziausio
*/
console.log(namas);

console.log('-------------------------------------------');