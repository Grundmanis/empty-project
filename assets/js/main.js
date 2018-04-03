import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap/dist/js/bootstrap');
require('jquery-parallax.js');

require('./modules/requests');
require('./modules/animations');

require('slick-carousel');
// $('.slider').slick({
//     dots: true,
//     arrows: false,
//     autoplay: true,
//     responsive: [
//         {
//             breakpoint: 578,
//             settings: {
//                 autoplay: false,
//             }
//         }
//     ]
// });