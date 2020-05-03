let n = +prompt('Imput number n');



function faktorial(n) {

    if (n == 1) {
        return n
    } else {
        return n = n * faktorial(n - 1);
    }
}



while (isNaN(n)) {
    n = +prompt('Imput number n', n);
}

alert(`Factorial ${n} is ${faktorial(n)}`);
console.log(faktorial(n));