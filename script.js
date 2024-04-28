//Declaration
const taskInput = document.querySelector("input");
const dataList = document.querySelector(".data");
const form = document.querySelector("form");

// If Json is false(not created it push to array else it push to the storage)
const  data = JSON.parse(localStorage.getItem("tasks")) || [] ;
//Form submit event

form.addEventListener("submit" , (e) =>{
    e.preventDefault() // remove default 
    if(!taskInput.value) return alert("Please type task");
    data.push(taskInput.value);
   // set task to the localstorage
   localStorage.setItem("tasks" , JSON.stringify(data));
   CreateNoteItem(taskInput.value);
   // reload page
   location.reload();
})

function CreateNoteItem(task){
    const ul = document.createElement("ul");
    ul.innerHTML += `
    <li class = 'item'>${task}</li>
    <div class = 'remove'><i class = 'ri-close-line'></i></div>`;
    dataList.appendChild(ul);
} 
data.forEach((item) =>{
    CreateNoteItem(item);
})

const removeIcon = document.querySelectorAll(".remove i");


removeIcon.forEach((item,id) =>{
    item.addEventListener("click" , () =>{
        let q = confirm("Are you sure?")
        if(!q) return ; // if q is false it aint delete 
        data.splice(id,1);
        // restore 
        localStorage.setItem("tasks" , JSON.stringify(data));
        item.parentElement.remove();
        location.reload();
    })
})

