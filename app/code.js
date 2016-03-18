'use strict';

angular.module('MapDirectives', [])
.controller('MapCtrl', function () {
	var mapctrl = this;
	mapctrl.mapOptions = {
		centr:{
			lat: 48.508742,
        	lng: 32.120850,
		},
    	zoom: 5,
    	mapTypeId:google.maps.MapTypeId.ROADMAP
 		};
 		mapctrl.zoomChangeApplyUp = function () {
 			mapctrl.mapOptions.zoom = mapctrl.mapOptions.zoom + 1;
 		}
 		mapctrl.zoomChangeApplyDown = function () {
 			 mapctrl.mapOptions.zoom = mapctrl.mapOptions.zoom - 1;
 			}
 			
 		}
	
)
.directive('map', function () {
		return {
			restrict: 'E',
			scope: {
				center: '=',
				zoom: '='
			},
			link: function (scope, element, attrs) {

				var map = new google.maps.Map(document.getElementById(attrs.id), scope.mapOptions);

				scope.$watch('center', function(){
                    map.setCenter(new google.maps.LatLng(scope.center.lat,scope.center.lng));
             
                })
                scope.$watch('zoom', function(){
                    map.setZoom(parseInt(scope.zoom));
             
                })


			}
}
});