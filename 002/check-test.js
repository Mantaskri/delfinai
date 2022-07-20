console.clear();
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

     // 2
 console.log('----------2-----------');

 console.log('masyvas', cats, 'turi', cats.length ,'nariu');
 console.log(cats.filter(n => !(n % 3)));

 // 3
 console.log('----------3-----------');

//The unshift() method adds one or more elements to the beginning 
// of an array and returns the new length of the array.
owners.unshift('Nauseda');
console.log(owners);

 // 4
 console.log('----------4-----------');

 var catOwners = [];
 for (let i=0; i<owners.length; i++ ) {
    catOwners.push(`${owners[i]} has ${cats[i]} cats`)
 }
 console.log(catOwners);

 // 5
 console.log('----------5-----------');
 
 for (let name of owners) {
   for (let i = 0; i < owners.length; i++) {
      if (name === owners[i + 1]) {
          console.log(name);
          break;
      }
      break;
   }
}