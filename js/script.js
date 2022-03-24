$(document).ready(function()
{
    AOS.init();
 
var images = new Array ('images/italian-food.jpg', 'images/interior.jpg', 'images/ital3.jpg');
var slider = setInterval(function() {
    document.getElementsByClassName('img-background')[0].setAttribute('style', 'background : linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5)), url("'+images[0]+'") center/cover fixed');
    images.splice(images.length, 0, images[0]);
    images.splice(0, 1);
  }, 3000); 
  

$(window).scroll(function(){
  let pos = $(window).scrollTop();
  if(pos >= 60)
  {
    $('.navbar').addClass('bg-navbar');
  }
  else
  {
    $('.navbar').removeClass('bg-navbar');
  }
});


//slider
$('.review-slide').slick({
  dots: true,
  infinite : true,
  autoplay :true,
  speed: 300,
  slideToshow: 1,
  adaptiveHeight: true
});

$('#nav-bar').click(function()
    {
        $('.nav-list').slideToggle();
    });


$( "#datepicker" ).datepicker();
$("#timepicker").timepicker();

$("#reserve").click(function(){
  let x1 = document.getElementById("fullname").value;
  let x2 = document.getElementById("email").value;
  let x3 = document.getElementById("phnum").value;
  let x4 = document.getElementById("datepicker").value;
  let x5 = document.getElementById("timepicker").value;
  let x6 = document.getElementById("no-ppl").value;
  if(x1=="" && x2=="" && x3=="" && x4=="" && x5=="" && x6=="0")
  {
    alert("Required fields must be filled.")
    return false;
  }
  else if(x1=="" || x2=="" || x3=="" || x4=="" || x5=="" || x6=="0")
  {
    if(x1=="")
    {
      alert("Full name must be entered");
    }
    if(x2=="")
    {
      alert("Email must be entered");
    }
    if(x3=="")
    {
      alert("Phone number must be entered");
    }
    if(x4=="")
    {
      alert("Date must be entered");
    }
    if(x5=="")
    {
      alert("Time must be entered");
    }
    if(x6=="0")
    {
      alert("Number of people must be entered");
    }
    return false;
  }
  else
  {
    let x = document.getElementById("phnum").value.length;
      if(x>10 || x<10)
      {
      alert("Invalid Phone number");
      return false;
      }
      else
      {
        let r = confirm("Confirm Reservation?");
        if(r==false)
        {
          return false;
        }
        else{
          setTimeout(function(){
            document.getElementById('fullname').value=''; 
            document.getElementById('email').value='';
            document.getElementById('phnum').value='';
            document.getElementById('datepicker').value='';
            document.getElementById('timepicker').value='';
            document.getElementById('no-ppl').value='0';
            document.getElementById('msg').value='';
          },4000);
        }
        
      }  
  }
});

});

