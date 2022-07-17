console.log('-----------------------------------Testas------------------------------------');
const girls = ['Brigita', 'Edita', 'Deimante', 'Juste', 'Ona', 'Brone',
 'Ramune', 'Kastone', 'Meilute'];
console.log(girls);
 // 1
 console.log('----------1-----------');
 
 function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
    const cats = [...Array(10)].map(_ => rand(2, 12));
    const owners = [...Array(10)].map(_ => girls[rand(0, 8)])
    console.log(cats, owners);