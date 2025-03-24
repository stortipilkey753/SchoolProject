function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num === 2 || num === 3) return true;

    let sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

function isPerfectSquare(num: number): boolean {
    const root = Math.sqrt(num);
    return root * root === num;
}
