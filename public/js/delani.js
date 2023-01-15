
/*Hovering title on portfolio*/
$(document).ready(function () {
  $(".portfolio-img").hover(function (e) {
    const target = e.target;
    if (target.matches("img")) {
      const titlename = target.alt.toUpperCase();
      $(target).prop("title", titlename)
    }
  })
});
/*Toggle effect on the what we do page*/
$(".whatWeDo").click(function (e) {
  const clickpoint = e.target;
  if (clickpoint.matches("img")) {
    var narrative = clickpoint.previousElementSibling;
    $(clickpoint).toggle();
    $(narrative).toggle();
  }
  else if (clickpoint.matches("h3") || clickpoint.matches("p")) {
    var narrative = clickpoint.parentElement.nextElementSibling;
    $(clickpoint.parentElement).toggle();
    $(narrative).toggle();
  }
});

// Email alert message
$('.btn').click(function () {
  var Name = $('#your-name').val();
  var Email = $('#email').val();
  var Message = $('#comment');
  var key = 'https://formspree.io/f/myyvvqqj';
  if (Name == '' || Email == '' || Message == '') {
    alert('Please make sure you have filled in the form correctly!');
  } else {
    alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
  }
});

