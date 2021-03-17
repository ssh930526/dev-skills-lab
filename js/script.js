const myList = [];
let $input = $('input');
let $button = $('.add-button');
let $ulEl = $('ul');

// event listener

// $button.on('click', function(){
//     let addSkill =$input.val();
//     myList.push(addSkill);
//     $input.val('');
//     displaymyList();
// });


// id="myList"
$('#myList').on('click', '#remove', function(){
    $(this).closest('li').remove();
});

$('button').click(function() {
    console.log("click");
    let myList = $('input').val();
    $('input').val("");
    const $li = $('<li>'+myList+'</li>')
    const $deleteButton = $('<button id="remove">'+ 'X' + ' </button>');
    $li.append($deleteButton)
    $('#myList').append($li);
});


