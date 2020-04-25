$(function() {


	var header = $("#header"),


	introH = $("#intro").innerHeight(),
	scrollOffset = $(window).scrollTop();

	/*Fixed Header*/

	checkscroll(scrollOffset);


	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();
		
		checkscroll(scrollOffset);

	});


function checkscroll(scrollOffset) {



		

		if (scrollOffset >=  introH) {
			header.addClass("fixed");

		} else { header.removeClass("fixed");

		}

};



/*Smooth Scroll*/
$("[data-scroll]").on("click", function(event) {
	event.preventDefault();

	var $this = $(this),
	blockId = $this.data('scroll'),
	blockOffset = $(blockId).offset().top;

	$("#nav a").removeClass("active");

	$this.addClass("active");

	/*console.log(blockOffset);*/

	$("html,body").animate({
		scrollTop: blockOffset 
	}, 500);



});



/*Meny nav toggle*/

$("#nav_toggle").on("click", function(event) {
	event.preventDefault();



	$(this).toggleClass("active");
	$("#nav").toggleClass("active");

});


/*Collapse*/


$("[data-collapse]").on("click", function(event) {
event.preventDefault();

var $this = $(this),
	blockId = $this.data('collapse');


/*$this.toggleClass("active");*/
$(blockId).slideToggle();

});


/*Slider*/

$("[data-slider]").slick({
	infinite: true,
	fade: false,
	slidesToShow: 1,
  	slidesToScroll: 1
});



});