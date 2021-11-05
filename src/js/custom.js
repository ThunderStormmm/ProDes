import $ from 'jquery';
window.$ = window.jQuery = $;

$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);




// grafic

// $(function() {
   
    
//     var chart1 = new Highcharts.Chart({
//         chart: {
//             renderTo: 'container',
//             type: 'column'
//         },

//         xAxis: {
//             type: 'datetime'
//         },

//         series: [{
//             data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//             pointStart: Date.UTC(2010, 0, 1),
//             pointInterval: 3600 * 1000 // one hour
//         }]
//     });

//     var chart2 = new Highcharts.Chart({
//         chart: {
//             renderTo: 'container2',
//             type: 'column'
//         },

//         xAxis: {
//             type: 'datetime'
//         },
//         title: {
// 		    text: 'Example with bold text',
// 		    floating: true,
// 		    align: 'right',
// 		    x: -30,
// 		    y: 30
// 		},

//         series: [{
//             data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//             pointStart: Date.UTC(2010, 0, 1),
//             pointInterval: 3600 * 1000 // one hour
//         }]
//     });
//  });



// map



// $.getJSON('https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/australia.geo.json', function (geojson) {

//     // Prepare the geojson
//     var states = Highcharts.geojson(geojson, 'map'),
//         rivers = Highcharts.geojson(geojson, 'mapline'),
//         cities = Highcharts.geojson(geojson, 'mappoint'),
//         specialCityLabels = {
//             'Melbourne': {
//                 align: 'right'
//             },
//             'Canberra': {
//                 align: 'right',
//                 y: -5
//             },
//             'Wollongong': {
//                 y: 5
//             },
//             'Brisbane': {
//                 y: -5
//             }
//         };

//     // Skip or move some labels to avoid collision
//     $.each(states, function () {
//         // Disable data labels
//         if (this.properties.code_hasc === 'AU.CT' || this.properties.code_hasc === 'AU.JB') {
//             this.dataLabels = {
//                 enabled: false
//             };
//         }
//         if (this.properties.code_hasc === 'AU.TS') {
//             this.dataLabels = {
//                 style: {
//                     color: '#333333'
//                 }
//             };
//         }
//         // Move center for data label
//         if (this.properties.code_hasc === 'AU.SA') {
//             this.middleY = 0.3;
//         }
//         if (this.properties.code_hasc === 'AU.QL') {
//             this.middleY = 0.7;
//         }
//     });

//     $.each(cities, function () {
//         if (specialCityLabels[this.name]) {
//             this.dataLabels = specialCityLabels[this.name];
//         }
//     });

//     // Initiate the chart
//     Highcharts.mapChart('container', {
//         title: {
//             text: 'Highmaps from geojson with multiple geometry types'
//         },

//         mapNavigation: {
//             enabled: true,
//             buttonOptions: {
//                 verticalAlign: 'bottom'
//             }
//         },

//         series: [{
//             name: 'States and territories',
//             data: states,
//             color: Highcharts.getOptions().colors[2],
//             states: {
//                 hover: {
//                     color: Highcharts.getOptions().colors[4]
//                 }
//             },
//             dataLabels: {
//                 enabled: true,
//                 format: '{point.name}',
//                 style: {
//                     width: '80px' // force line-wrap
//                 }
//             },
//             tooltip: {
//                 pointFormat: '{point.name}'
//             }
//         }, {
//             name: 'Rivers',
//             type: 'mapline',
//             data: rivers,
//             states: {
//                 hover: {
//                     lineWidth: 3
//                 }
//             },
//             color: Highcharts.getOptions().colors[0],
//             tooltip: {
//                 pointFormat: '{point.properties.NAME}'
//             }
//         }, {
//             name: 'Cities',
//             type: 'mappoint',
//             data: cities,
//             color: 'black',
//             marker: {
//                 radius: 2
//             },
//             dataLabels: {
//                 align: 'left',
//                 verticalAlign: 'middle'
//             },
//             animation: false,
//             tooltip: {
//                 pointFormat: '{point.name}'
//             }
//         }]
//     });
// });


