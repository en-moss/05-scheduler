let now = moment().format('H');
let hourBlock = $('.textarea');

$('#currentDay').text(moment().format('dddd, MMMM Do'));

$('button').on('click', saveTask)

function popTask() {
    for (var i = 0; i < hourBlock.length; i++) {

    }
}

function saveTask() {
    let key = $(this).attr('id')
    let task = $(this).parent().children('input').val()
    localStorage.setItem(key, task);
}

function timeKeep() {
    for (var i = 0; i < hourBlock.length; i++) {
        if (now < parseInt($(hourBlock[i]).attr('data-time'))) {
            $(hourBlock[i]).addClass('future')
        }
        else if (now > parseInt($(hourBlock[i]).attr('data-time'))) {
            $(hourBlock[i]).addClass('past')
        }
        else {
            $(hourBlock[i]).addClass('present')
        }
    }
}

$(document).ready(timeKeep)