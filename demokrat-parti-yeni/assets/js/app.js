$('.top-carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:1000,
    center:true,
    margin:10,
    nav:true,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
})
$('.mid-carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    smartSpeed:1000,
    center:true,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


$(document).ready(function(){
    $(".mobile .btn .fa-times").hide();

    $(".mobile .btn .fa-bars").click(function(){
        $(this).hide();
        $(".mobile .btn .fa-times").show();
        $(".mobile ul.open").addClass("aktif");
        $(".mobile .btn .fa-bars").addClass("aktif");
        $(".mobile .btn .fa-times").addClass("aktif");
        $("body").addClass("aktif");
    });
    $(".mobile .btn .fa-times").click(function(){
        $(this).hide();
        $(".mobile .btn .fa-bars").show();
        $(".mobile ul.open").removeClass("aktif");
        $(".mobile .btn .fa-bars").removeClass("aktif");
        $(".mobile .btn .fa-times").removeClass("aktif");
        $("body").removeClass("aktif");
        $(".mobile ul li.active").removeClass("active")
    });

    $(".mobile ul li").click(function(){
        $(this).addClass("active");   
        $(this).siblings().removeClass("active");     
    });
});

// video dropdown
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("sidenavactive");
  $(".first-section .dropdown-btn .sidenav-bottom .top").toggle("topactive");
  $(".first-section .dropdown-btn .sidenav-bottom .bottom").toggle("bottomnone");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.maxHeight) {
  dropdownContent.style.maxHeight=null;
  } else {
  dropdownContent.style.maxHeight=dropdownContent.scrollHeight + "px";
  }
  });
}

/*section 3*/

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByClassName('img02');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
   images[i].onclick = function(){
       modal.style.display = "block";
       modalImg.src = this.src;
       modalImg.alt = this.alt;
       captionText.innerHTML = this.nextElementSibling.innerHTML;
       
   }
}

// myModal
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}