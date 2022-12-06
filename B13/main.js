// 

function addTask(task, completed = false) {
    const liTaskItem = document.createElement('li');
    // liTaskItem.className = ''
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
// select ul
var allTasks = doc
