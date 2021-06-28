var dateEl = $("#currentDay")
var saveBtnEl = $('.saveBtn')
var textboxEl = $('.textbox')
var timeEl = $('.time-block')

var arrayList = []
var tasks = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []
};

var displayDate = moment().format("dddd, MMMM Do")
dateEl.text(displayDate)

var currentTime = moment().format("HH")
for(i=0; i<timeEl.length; i++){
    if(timeEl[i].dataset.hour === Number(currentTime)){
        textboxEl[i].className = "present"
    }
    if(timeEl[i].dataset.hour < Number(currentTime)){
        textboxEl[i].className = "past"
    }
    if(timeEl[i].dataset.hour > Number(currentTime)){
        textboxEl[i].className = "future"
    }
}

var task1 = localStorage.getItem("to-do")
textboxEl.append(task1)

$('.container').on('click', '.saveBtn', save)

function save(event){
    
    var taskInfo = $(event.target).closest(".first")
    var textArea = taskInfo.find("textarea");

    var time = taskInfo.attr("data-block")
    var text = textArea.val().trim();
    setTasks(time, text);
}

var setTasks = function(time, text) {
    tasks[time] = [text];
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
