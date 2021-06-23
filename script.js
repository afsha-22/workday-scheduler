console.log("enter js");

var dateEl = $("#currentDay")

var displayDate = moment().format("dddd, MMMM Do")
console.log(displayDate)
dateEl.text(displayDate)