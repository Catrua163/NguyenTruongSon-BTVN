//Bài 1:
let person = {
    name:       "Bob",
    occupation: "web developer",
    hobbies:    "painting",
};
//Cách 1: Object.proprety
console.log(person.name);
console.log(person.occupation);
console.log(person.hobbies);

//Cách 2: Object["property"]
console.log(person["name"]);
console.log(person["occupation"]);
console.log(person["hobbies"]);

//Bài 2:
let obj = {
    b: 2,
    a: 1,
    c: 3,
};
let objKey = Object.keys(obj);
for (let i = 0; i < objKey.length; i++) {
    objKey[i] = objKey[i].toUpperCase();
}
console.log(objKey);

//Bài 3:
let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
};
let family = {};
Object.setPrototypeOf(family,myFamily);
console.log(family)

//Bài 4:
let obj2 = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};

//Cách 1:
obj2.bar[3].xyz = 606;
console.log(obj2.bar);

//Cách 2:
function changeValue(object) {
    object.xyz = 606;
}
changeValue(obj2.bar[3]);
console.log(obj2.bar);