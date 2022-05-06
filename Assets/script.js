let now = moment().format('H');
let hourBlock = $('.textarea');

$('#currentDay').text(moment().format('dddd, MMMM Do'));

$('button').on('click', saveTask)

let test = localStorage.getItem('9');

function getTask() {
    $('.time-block').each(function() {
        let time = $(this).children('input').attr('data-time');
        let desc = localStorage.getItem(time);
        let text = $(this).children('input');
        text.val(desc);
    })
}

function saveTask() {
    let icon = $(this).children('i')
    icon.removeClass('fa-solid').addClass('fa-regular');
    setTimeout(function() {
        icon.removeClass('fa-regular').addClass('fa-solid');
    }, 400);
    let key = $(this).attr('id')
    let task = $(this).parent().children('input').val()
    localStorage.setItem(key, task);
}

function timeKeep() {
    getTask();
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