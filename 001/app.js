function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let array = [];

  for (let i = 0; i < 10; i++) {
      array.push(rand(7, 77))
  };
  
  /*
  const mas = [...array(10)].map(_ => rand(7,77));

  console.log(mas);
_ - zymimas nereikalingas kintamasis, kurio nenaudosim, bet naudojam tik sintakses reikiamybei
  */
  console.log(array); 