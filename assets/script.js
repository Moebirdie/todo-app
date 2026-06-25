// Wrap all code to execute after DOM load - a document ready shortcut function
$(function () {

  var timeBlock = document.querySelectorAll('.time-block');
  var calendarItem = document.getElementsByClassName("description");


  setInterval(function () {
    now12Hour = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    $('#currentDay').text(now12Hour)
  }, 1000);


  function saveItem() {
    var idName = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    localStorage.setItem(idName, text)

    console.log(idName, text)
  }

  // on page load add items from storage
  function loadSavedItems() {
    console.log(timeBlock); //nodeList
    for (i = 0; i < timeBlock.length; i++) {
      var blockId = $(timeBlock[i]).attr('id');
      var items = localStorage.getItem(blockId);
      $(calendarItem[i]).text(items);
      console.log("loadSaved: " + blockId, items, calendarItem[i]);

    }
  }
  // update colors on page load or refresh of page
  function addRemoveClass() {
    now24HourTime = dayjs().format('H');
    for (i = 0; i < timeBlock.length; i++) {
      var idTime = $(timeBlock[i]).attr('id').split('hour-');
      var idName = $(timeBlock[i]).attr('id');
      var numberSign = "#";
      id = `${numberSign}${idName}`
      if (Number(idTime[1]) < now24HourTime) {
        $(id).removeClass('present', 'future');
        $(id).addClass('past');
        console.log(idTime[1]);
      }
      if (Number(idTime[1]) == now24HourTime) {
        $(id).removeClass('past', 'future');
        $(id).addClass('present');
        console.log(idTime[1]);
      }
      if (Number(idTime[1]) > now24HourTime) {
        $(id).removeClass('present', 'past');
        $(id).addClass('future');
        console.log(idTime[1]);
      }
      console.log(idTime[1], idName, id, now24HourTime);
    }
  }

  function refresh() {
    window.location.reload();
  }

  setInterval(function () {
    refresh();
  }, 600000);

  function clearAll() {
    localStorage.clear();
    refresh();
  }

  $('.saveBtn').on("click", saveItem);
  $('#clearBtn').on("click", clearAll);

  addRemoveClass();
  loadSavedItems();
});
