var existingTasks = [ 
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

$("#add_task").on("click", function(){
    
    var taskName = $("#task_name").val();
    var taskDate = $("#task_date").val();
    var assignedTo = $("#assigned").val();

    if(taskName === undefined || taskName === ""){
        alert("Please enter task name.");
        return false;
    }else if(taskDate === undefined || taskDate === ""){
        alert("Please select the task date");
        return false;
    }else if(assignedTo === undefined || assignedTo === ""){
        alert("Please enter assigned to");
        return false;
    }else{
        var date = taskDate.split("-");
        taskDate = date[2]+"/"+date[1]+"/"+date[0];
        existingTasks.unshift({"name":taskName, "date":taskDate, "assigned":assignedTo});
        alert("Task has been added successfully.");
        clearTaskForm();
        loadExistingTasks();
    }
});

function clearTaskForm(){
    $("#task_name").val("");
    $("#task_date").val("");
    $("#assigned").val("")
}

function loadExistingTasks(){
    var tr = "";
    $.each(existingTasks, function( index, value ) {
        tr += "<tr><td><strong>"+value.name +"</strong> "+value.date+"</td><td><strong>"+value.assigned+"</strong></td></tr>"
      });
    $("#tasks > tbody").html(tr);
}

// Load task on document ready 
$(function(){
    loadExistingTasks();
});
