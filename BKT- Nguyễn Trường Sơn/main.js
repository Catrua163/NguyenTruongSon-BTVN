function getOppositeNumber(a, b) {
    if (b > (a / 2))
        return (b - (a / 2));

    return (b + (a / 2));
}

let a = 12;
let b = 5;
console.log(getOppositeNumber(a, b));




function interleaveStrings(n, m) {
    let i;
    let c = Math.min(n.length, m.length);
    let d = '';

    for (i = 0; i < c; i++) {
        d += n[i] + m[i];
    }
    return d + n.slice(i) + m.slice(i);
}

console.log(interleaveStrings('abc', '123'));
console.log(interleaveStrings('abc', '0123'));
console.log(interleaveStrings('abcd', '123'));




let randomNum = Math.floor(Math.random() * 5 + 1);

document.getElementById("submit").onclick = function () {
    let x = document.getElementById("box").value;

    if (x == randomNum) {
        alert(x + " là kết quả trúng thưởng xin chúc mừng!!!");
    }
    else (x != randomNum)
    {
        alert("Sai rồi kết quả đúng là: " + randomNum);
    }
}