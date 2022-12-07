// 

function addTask(task, completed = false) {
    const liTaskItem = document.createElement('li');
    liTaskItem.className = 'li-task-item';
    
    liTaskItem.innerHTML = task;
    document.getElementById("taskList").appendChild(liTaskItem);
    
}


// add task when summit form

var form1 = document.getElementById("inputForm");
form1.addEventListener('submit', function(event) {
    var x = form1.elements[0].value;
    if (x === "") {
        alert("Input again")
    }
    else {
        addTask(x);
        event.preventDefault();
        
    }
})


// saved task

var todo = [];

var saveButton = document.getElementById("save_button");
saveButton.addEventListener('click', function() {
    // select all li with class li-task-item
    var lis = document.querySelectorAll('li.li-task-item'); 
    
    for (let i = 0; i < lis.length; i++) {
        todo.push(lis[i].innerHTML); 
    }
    console.log(todo);

    // Storing data
    // Application -> storage/local storage
    const myJSON = JSON.stringify(todo);
    localStorage.setItem("taskJSON", myJSON);
    alert("Saved " + lis.length + " task")
})


// Retrieving data from local Storage
    // Step 1: getdata , using local Storage.getItem, and Json.parse -> todo array
    // Step 2: using function addTask(), add li to web

    // Step 1: getdata , using local Storage.getItem, and Json.parse -> todo array
    let todoJSON = localStorage.getItem("taskJSON");
    var todo1 = JSON.parse(todoJSON);
    console.log(todo1);

    // Step 2: using function addTask(), add li to web
    if (todo1 != null) {
        for (let i = 0; i < todo1.length; i++) {
            addTask(todo1[i])
        }
    }