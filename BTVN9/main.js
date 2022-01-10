//BÀI 1:
/**
 * @param {number} age: Đây là tuổi
 * @param {Text} return: Tuổi > 18 trả true, tuổi < 18 trả false và confirm
*/
//Toán tử dấu chấm hỏi
function checkAge(age) {
    return age > 18 ? true : confirm("Did your parents allow you?");
}

//Or ||
function checkAge(age) {
    return age > 18 || confirm("Did your parents allow you?")
}

//BÀI 2:
/**
 * @param {number} a: Giá trị của a
 * @param {number} b: Giá trị của b
 * @param {number} return: Giá trị của nhỏ nhất giữa a và b
 * 
 */
function minNumber(a, b) {
    return a < b ? a : b < a ? b : "2 số bằng nhau"
}


//Bài 3: 
/**
// Hàm mũi tên  Arrow function có chức năng đơn giản hóa việc khai
 báo hàm function trong JavaScript bằng cách bỏ đi từ khóa function 
 và thay thế bằng dấu mũi tên => 
 */

ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Do you agree?",
    () => { alert("You agreed!"); },
    () => { alert("You canceled the execution!"); }

);

//BÀI 4:

/**
 * 
 * @param {string} userNameValue : Tên đăng nhập người dùng
 * @param {void} canceled : Đầu vào là một dòng rỗng hoặc Esc
 * @param {void} accessDenied : Đầu vào là một chuỗi khác
 * @param {void} accessGranted : Đầu vào đúng với tên đăng nhập "Admin" và mật khẩu "mindx"
 */



function userName(userNameValue, canceled, accessDenied, accessGranted) {
    userNameValue = "" || userNameValue == null ? canceled() : userNameValue != "Admin" ? accessDenied() : accessGranted();
}
function passWord(passWordValue, canceled, accessDenied, accessGranted) {
    passWordValue = "" || passWordValue == null ? canceled() : passWordValue != "mindx" ? accessDenied() : accessGranted();
}

// userName(
//     prompt("Tên đăng nhập: "),
//     function() { alert("Canceled");},
//     function() { alert("Tôi không biết bạn");},
//     function() { passWord(
//         function() { alert("Đã hủy");},
//         function() { alert("Mật khẩu sai");},
//         function() { alert("Chào mừng!")}

//     )
//    }

// )
/**
 * Khúc này ban đầu e tính làm theo kiểu cũ như trên thì  
 * toàn bị lỗi từ cái function password. Nó không nhận 2 cái "Đã hủy" với
 * "Mật khẩu sai" mà accept luôn cái "Chào mừng" a xem hộ e với ạ e rất tiền đình
 */

userName(
    prompt("Tên đăng nhập: "),
    () => alert("Canceled"),
    () => alert("Tôi không biết bạn"),
    () => passWord(
        prompt("Mật khẩu: "),
        () => alert("Đã hủy"),
        () => alert("Mật khẩu sai"),
        () => alert("Chào mừng!")
    )
)
//Sau e mới thấy kiểu này ok hơn tại nó ngắn với cả nó point ra đang
// ở tham số đầu vào nào nên đỡ bị lú

//BÀI 5:

let newArray = [1, 2, 3, 4, 5, 6, 7, 8];

// Tính TBC của mảng

function avg() {
    let sum = 0;
    for (let i = 0; i < newArray.length; i++) {
        sum += parseInt(newArray[i]);
    }
    return sum / newArray.length;
}
console.log("Trung bình cộng của mảng là: ", avg());

//Tìm số lớn nhất

let max = newArray[0];
for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > max) {
        max = newArray[i]
    }
}
console.log("Số lớn nhất trong mảng là: ", max)

//Tìm số nhỏ nhất

let min = newArray[0];
for (let i = 0; i < newArray.length; i++) {
    if (newArray < min) {
        min = newArray[i]
    }
}
console.log("Số nhỏ nhất trong mảng là: ", min)

//Tính tổng các số chẵn trong mảng

let sumEvens = (newArray) => {
    let sum = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] % 2 === 0) {
            sum = sum + newArray[i];
        }
    }
    return sum;
}

console.log("Tổng các số chẵn trong mảng là: ", sumEvens(newArray));

//Tính tổng các số lẻ trong mảng

let sumOdds = (newArray) => {
    let sum = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] % 2 != 0) {
            sum = sum + newArray[i];
        }
    }
    return sum;
}

console.log("Tổng các số lẻ trong mảng là: ", sumOdds(newArray));

//Đếm các số chia hết cho 3

function countDivisibleBy3(newArray) {
    let counter = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] % 3 === 0) {
            counter++
        }
    }
    return counter;
}

console.log("Số các số chia hết cho 3 là: ", countDivisibleBy3(newArray));
