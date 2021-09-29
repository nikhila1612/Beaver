
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const checked=document.querySelector(".checked button");
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; 
  if(userEnteredValue.trim() != 0){ 
    addBtn.classList.add("active"); 
  }else{
    addBtn.classList.remove("active"); 
  }
}

showTasks(); 

addBtn.onclick = ()=>{ 
  let userEnteredValue = inputBox.value; 
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){ 
    listArray = []; 
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  listArray.push(userEnteredValue); 
  localStorage.setItem("New Todo", JSON.stringify(listArray)); 
  showTasks(); 
  addBtn.classList.remove("active"); 
}
 // Avoid scoping issues by encapsulating code inside anonymous function
        (function() {
          // variable to store our current state
          var cbstate;
          
          // bind to the onload event
          window.addEventListener('load', function() {
            // Get the current state from localstorage
            // State is stored as a JSON string
            cbstate = JSON.parse(localStorage['CBState'] || '{}');
          
            // Loop through state array and restore checked 
            // state for matching elements
            for(var i in cbstate) {
              var el = document.querySelector('input[name="' + i + '"]');
              if (el) el.checked = true;
            }
          
            // Get all checkboxes that you want to monitor state for
            var cb = document.getElementsByClassName('save-cb-state');
          
            // Loop through results and ...
            for(var i = 0; i < cb.length; i++) {
          
              //bind click event handler
              cb[i].addEventListener('click', function(evt) {
                // If checkboxe is checked then save to state
                if (this.checked) {
                  cbstate[this.name] = true;
                }
            
            // Else remove from state
                else if (cbstate[this.name]) {
                  delete cbstate[this.name];
                }
            
            // Persist state
                localStorage.CBState = JSON.stringify(cbstate);
              });
            }
          });
        })();
function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; 
 
  if(listArray.length > 0){ 
    deleteAllBtn.classList.add("active");
  }else{
    deleteAllBtn.classList.remove("active"); 
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; 
  inputBox.value = ""; 
  
}


var e = "checked";
localStorage.setItem("checked",e );
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false)

buildtask: functions()
{
  let taskListitem,taskCheckbox,taskValue,taskButton,taskTrash;
  taskListitem=document.createElement("li");
  taskListitem.setAttribute("class","task");
  taskCheckbox=document.createElement("input");
  taskCheckbox.setAttribute("type","checkbox");
  taskvalue=document.createTextNode(this.taskInput.value);

}





function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}
deleteAllBtn.onclick = ()=>{
  listArray = []; 
  localStorage.setItem("New Todo", JSON.stringify(listArray)); 
  showTasks(); 
}