$(function(){
	$("a").click(function() {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
	$(window).scroll(function() {
    	$('.left').each(function(){
        	var imagePos = $(this).offset().top;

        	var topOfWindow = $(window).scrollTop();
        	if (imagePos < topOfWindow+650) {
            	$(this).addClass("fadeInLeft");
       	 }
    	});
			$('.right').each(function(){
        	var imagePos = $(this).offset().top;

        	var topOfWindow = $(window).scrollTop();
        	if (imagePos < topOfWindow+650) {
            	$(this).addClass("fadeInRight");
       	 }
    	});
			$('.top').each(function(){
        	var imagePos = $(this).offset().top;

        	var topOfWindow = $(window).scrollTop();
        	if (imagePos < topOfWindow+650) {
            	$(this).addClass("fadeInDown");
       	 }
    	});
			$('.stat').each(function(){
        	var imagePos = $(this).offset().top;

        	var topOfWindow = $(window).scrollTop();
        	if (imagePos < topOfWindow+650) {
            	$(this).addClass("fadeIn");
       	 }
    	});
		});

});
$(function(){
  $("a").click(function() {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
      $("body,html").animate({scrollTop: destination }, 800);
     });
   });
      $('.carts').slick({
         dots: true,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         adaptiveHeight: true
      });
function preloader (){
	$(() => {
		setInterval(() =>{
			let p = $('.preloader');
			p.css('opacity',0);

			setInterval(
				() => p.remove(),
				parseInt(p.css('--duration')) * 1000
			);
		}, 1000)
	});
}
setInterval(() => preloader(), 2500)
