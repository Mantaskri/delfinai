//veikia kaip map, kuria nauja array, paimdamas po viena nari ir grazina nebutinai visus narius
//map grazina visus :
/*
const fi = [1, 5, 77].filter(a => (a));

console.log(fi);
*/

console.log('-------------------------------------------');

//jeigu bus tuscias stringas, arba kintamasis nieko neduos :
/*
const fi = [1, 0, 5, 77].filter(a => a);

console.log(fi);
*/
console.log('-------------------------------------------');
//jeigu reikia prafiltruot ir atlikt veiksma (r - rezultatas):

const fi = [1, 0, 5, 77].filter(a => a).map(r => r * 10);

console.log(fi);
