//Câu 1:

const color = ["red","blue","white"];

const btnColor = document.querySelector("#changeColor")

btnColor.onclick = () => {
    const bgrColor = color[Math.floor(Math.random()*color.length)]
    document.body.style.backgroundColor = bgrColor;
}
//Câu 2:
//Câu này dài quá 2 hôm nay e hơi bận nên k làm  kịp được T_T
//Câu 3:
const input = document.querySelector("#input");
const btnAdd = document.querySelector("#btn-add");
const btnRemove = document.querySelector("#btn-remove")
const toDo = document.querySelector("#todo");

btnAdd.onclick = () => {
    let value = input.value
    let item = document.createElement("li")
    item.innerText = value
    toDo.appendChild(item)
}

btnRemove.onclick = () => {
    let item = document.querySelector("li")
    toDo.removeChild(item)
}