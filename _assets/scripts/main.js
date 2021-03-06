/* ==========================================================================
   #MAIN
   ========================================================================== */




/**
 * JS has loaded
 */

console.log('main.js loaded!');




/**
 * Load svg4everybody
 */

svg4everybody();




/**
 * Load LazyLoad
 */

//var myLazyLoad = new LazyLoad();




/**
 * Zoom image on click
 */

var zoomToggle = document.querySelectorAll('.js-zoom');

for (var i = 0; i < zoomToggle.length; i++) {
	zoomToggle[i].addEventListener('click', function() {
		this.classList.toggle("c-zoom?full-size");
	}, false);
}




/**
 * Load Disqus comments on button click
 * https://gist.github.com/nternetinspired/7482445
 */
/*
$(document).ready(function() {
	$('.js-load-comments').on('click', function(){
		var disqus_shortname = 'mikerockwood'; // Replace this value with *your* username.

		// ajax request to load the disqus javascript
		$.ajax({
			type: "GET",
			url: "https://" + disqus_shortname + ".disqus.com/embed.js",
			dataType: "script",
			cache: true
		});

		// hide the button once comments load
		$(this).fadeOut();
	});
});
*/
