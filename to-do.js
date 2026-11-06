let inp = document.querySelector("input");
let btn1 = document.querySelector(".btn1");
let ul = document.querySelector("ul");



btn1.addEventListener("click", function () {

    let item = document.createElement("li");


    item.innerText = inp.value;

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";

    item.appendChild(dltbtn);
    ul.appendChild(item);
    dltbtn.classList.add("delete");
    inp.value = "";

});
// let delt = document.querySelectorAll(".delete");
// for(aa of delt) {
//     aa.addEventListener("click", function () {
//         let para = this.parentElement;
//         console.log(para);
//         para.remove();
//     }
//     );
// }
ul.addEventListener("click", function (event) {
    console.log(event.target.nodeName);

    if (event.target.nodeName == "BUTTON") {
        let listitem = event.target.parentElement;
        console.log(listitem);
        listitem.remove();
    }
    else {
        console.log("do not delete");
    }
})