var dateEl = $("#currentDay")
var saveBtnEl = $('.saveBtn')
var textboxEl = $('.textbox')
var timeEl = $('.time-block')
var containerEl = $('.container')

//Global variables
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

//Getting values from local storage, if any
var getItemFromSet = JSON.parse(localStorage.getItem('tasks'))
if(getItemFromSet) {
    tasks = getItemFromSet
    $.each(tasks, function(index, values) {
        var i=index-9;
        $(textboxEl[i]).val(values)
    })
}

//Displaying the current date in the header
setInterval(() => {
    var displayDate = moment().format("dddd, MMMM Do")
    dateEl.text(displayDate)
}, 1000);

//Displaying the background color in the text area according to the time of the day
setInterval(() => {
    var currentTime = moment().format("HH")
    for(i=0; i<timeEl.length; i++){
        if(timeEl[i].dataset.hour == Number(currentTime)){
            textboxEl[i].className = "present"
        }
        else if(timeEl[i].dataset.hour < Number(currentTime)){
            textboxEl[i].className = "past"
        }
        else if (timeEl[i].dataset.hour > Number(currentTime)){
            textboxEl[i].className = "future"
        }
    }
}, 1000);

//Logic when save button is clicked
function save(event){
    //Selecting the nearest class
    var taskInfo = $(event.target).closest(".first")
    //Selecting the textarea in the class found in the previous step
    var textArea = taskInfo.find("textarea");
    //Find the dataset value in the class found and use it as the time
    var time = taskInfo.attr("data-block")
    //Fetch the text user has entered in the textarea
    var text = textArea.val().trim();
    setTasks(time, text);
}

//Logic to set task in local storage
var setTasks = function(time, text) {
    tasks[time] = [text];
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

containerEl.on('click', '.saveBtn', save)

