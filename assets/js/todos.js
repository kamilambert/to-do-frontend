// Check off specific to-dos by clicking. Second parameter: when an li is clicked inside this ul, run this code
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed')
})

// Click on X to delete to-do
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove()
  })
  event.stopPropagation()
})

$("input[type = 'text']").keypress(function(event) {
  if(event.which === 13) {
    // grabbing new to-do text from input
    let todoText = $(this).val()
    // clears input field after entering new to-do
    $(this).val('')
    // create a new li and add to ul with span tag
    $('ul').append('<li><span><i class="fa fa-check-circle-o" aria-hidden="true"></i></span> ' + todoText + '</li>')
  }
})

$('.fa-plus').click(function() {
  $('input[type="text"]').fadeToggle()
})
