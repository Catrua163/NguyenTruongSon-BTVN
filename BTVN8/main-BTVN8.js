// # Coersion - Truthy & Falsy
// 1.
var a = 10;
var b = Number(a);
var c = a * 1;
 console.log(a,b,c);
// 2.
var a = 10;
var b = '';
if (a) {
    console.log('a is truthy');
}
if (b) {
    console.log('b is truthy');
}
// # Logical Operators & Conditional
// 1.
let q = "mindX";
let w = '';
if (q || w) {
    console.log("hello")
}
// 2.
let e = "mindX";
let r = '';
if (e && true && !r) {
    console.log("hello")
}
// 3.
let t = -1;
let y = 1;
if (t<1 && y>1);
    console.log("Kết quả đúng")
//4. 
let number = prompt("Nhập số bất kỳ để chia cho 3")
let u = number % 3;
let i = number / 3;
if (u === 0){
  console.log("Kết quả phép tính là " + i)
}
else {
  console.log(number + " không chia hết cho 3 và dư " + u)
}
// # Tạo máy tính cơ bản với các chức năng: +, -, * và /.
// máy tính cơ bản
// phép tính
// cách 1: if...else
const operator = prompt("Nhập phép tính (+, -, *, hoặc /): ");
let number1 = parseFloat(prompt("Nhập số thứ nhất: "));
let number2 = parseFloat(prompt("Nhập số thứ hai: "));
let result;

if (operator=="+") {
    result = number1 + number2;
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
else if (operator=="-") {
    result = number1 - number2;
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
else if (operator=="*") {
    result = number1 * number2;
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
else if (operator=="/") {
    result = number1 / number2;
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
else {
    console.log("Tải lại trang và nhập lại.");
}
// cách 2: switch
switch(operator) {
    case "+":
        result = number1 + number2
        break

    case "-":
        result = number1 - number2
        break

    case "*":
        result = number1 * number2
        break

    case "/":
        result = number1 / number2
        break
}

console.log(`\t${number1} ${operator} ${number2} = ${result}`);

// # Viết chương trình tìm số nguyên tố
// chương trình tìm số nguyên tố
const num = parseInt(prompt("Nhập một số dương: "));
            let isPrime = true;
            if (num < 1) {
                console.log("Số bạn nhập âm");
                isPrime = false;
            }
            else if (num == 1) {
                isPrime = false;
            }
            else if (num == 2) {
                isPrime = true;
            }
            else {
                for (let i = 2; i <= num/2; i++){
                    if (num % i == 0) {
                        isPrime = false;
                        break;
                    }
                    else {
                        isPrime = true;
                    }
                }
            }
            if (isPrime==true) {
                console.log("Số vừa nhập là số nguyên tố.");
            }
            else {
                console.log("Số vừa nhập không phải là số nguyên tố.")
            }