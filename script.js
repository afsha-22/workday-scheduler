var dateEl = $("#currentDay")
var saveBtnEl = $('.saveBtn')
var textboxEl = $('.textbox')

var displayDate = moment().format("dddd, MMMM Do")
dateEl.text(displayDate)

var task1 = localStorage.getItem("to-do")
textboxEl.append(task1)

function saveList(){
    var listText = textboxEl.val();
    console.log(listText)
    localStorage.setItem("to-do", listText)
}

saveBtnEl.on('click', saveList)