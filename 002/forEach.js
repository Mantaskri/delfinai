//kintamuju ispausdinimas su forEach :

[1,5,77].forEach(a => console.log(a));

console.log('-------------------------------------------');

//jei norim skaiciaus didesnio uz 4 :

[1,5,77].forEach(a => {
    if (a > 4) {
        console.log(a);
    }
});

console.log('-------------------------------------------');

// i - indexas (masyve esancio kintamojo vieta) :

[1,5,77].forEach((a, i) => console.log(a, i));

console.log('-------------------------------------------');

// t - visas masyvas per kuri pereidinejam kiek kartu elementu yra, tiek kartu pereis
// ir rodys nurodyta nari
// [1(0), 5(1), 77(2)]

[1, 5, 77].forEach((a, i, t) => console.log(t[2]));

console.log('-------------------------------------------');

//spausdinimas is kitos puses, apverciant

[1, 5, 77].forEach((a, i, t) => console.log(t[t.length - i - 1]));