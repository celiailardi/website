// $(document).ready(function() {
//     var list_opening_query_builder = new ListOpeningQueryBuilder('linaro');
//     var query_params = list_opening_query_builder
//       .withTitle('Developer').withCity('Mumbai').buildParams();
//     //Sample JQuery code
//     $.ajax({
//       url: 'https:/jsapi.recruiterbox.com/v1/openings',
//       data: query_params,
//       success: function(response) {
//         $("#job-openings").html(JSON.stringify(response));
//       }
//     });
//   });


$(document).ready(function() {

  var careersCarousel = $(".careers-carousel");

  careersCarousel.owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots: false,
      lazyLoad: true,
      autoplay:false,
      autoplayHoverPause:true,
      responsiveClass: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
          0:{
              items:1,
              dots: false,
              nav: true
          }
      }
  });

});