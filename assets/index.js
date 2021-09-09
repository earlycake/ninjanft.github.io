


// Set the date we're counting down to
var countDownDate = new Date("Jul 28, 2021 12:37:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  // // Output the result in an element with id="demo"
  // document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("demo").innerHTML = "LAUNCH!!!";
  // }

  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("demo1").innerHTML = "LAUNCH!!!";
  // }
}, 1000);

var circle = document.querySelectorAll('.coin')
circle.forEach( (e, i) => {
	
	e.addEventListener('mouseenter', function(){
		this.style.transform = 'translateY(150px)'
		this.style.transition = 'all 1s ease'
		this.style.opacity = '0.5'
	})
 
	e.addEventListener('mouseleave', function(){
		this.style.transform = 'translateY(0)'
		this.style.transition = 'all 1s ease'
		this.style.opacity = '1'
	})
	
})

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function myFunction() {
  var x = document.getElementById("popup");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}