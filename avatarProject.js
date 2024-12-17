const clickCircle = document.querySelector(".circle");
const popUpFirst = document.querySelector(".popUpFirst");

const cancelMark = document.querySelector(".crossMark .fa-regular");
const cancelButton = document.querySelector(".cancel");
const submitButton = document.querySelector(".submit");

const input = document.querySelector("#nameInput");
const contentBox = document.querySelector("#contentBox");

let arr = [
    { backgroundColor: "red", color: "white" },
    { backgroundColor: "yellow", color: "black" },
    { backgroundColor: "#8DECB4", color: "#A34343" },
    { backgroundColor: "grey", color: "#00224D" },
    { backgroundColor: "blue", color: "white" },
    { backgroundColor: "green", color: "yellow" },
    { backgroundColor: "black", color: "white" },
]

function selectColor() {
    return Math.floor(Math.random() * arr.length);
}
// console.log(selectColor());




clickCircle.addEventListener("click", ()=> {
    popUpFirst.style.display ="block";
})
cancelMark.addEventListener("click", () => {
    popUpFirst.style.display ="none";

})
cancelButton.addEventListener("click", () => {
    popUpFirst.style.display ="none";

})
submitButton.addEventListener("click", () => {
    if(!input.value || !input.value.trim()){
        alert("please create a user first")
    }
    else{
        popUpFirst.style.display ="none";
        const span = document.createElement("span");
        span.classList.add("userName");
        span.textContent = input.value.at(0).toUpperCase()
        let givingColor = arr[selectColor()];
        span.style.color = givingColor.color;
        span.style.backgroundColor = givingColor.backgroundColor;
        contentBox.append(span);
        input.value = "";
        const deleteButton = document.createElement('button');
            deleteButton.classList.add('deleteButton');
            deleteButton.textContent = 'x';
            deleteButton.addEventListener('click', () => {
            span.remove();

    })
    span.appendChild(deleteButton);
    }
})

  
  
