$(document).ready(function() {
    $('#fullpage').fullpage({
		anchors:['home', 'services', 'about', 'works', 'contacts'],
		menu: '.main-nav ul',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
	});
});