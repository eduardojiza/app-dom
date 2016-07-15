'use strict';

/**
 * @ngdoc function
 * @name appDomApp.controller:DevicesCtrl
 * @description
 * # DevicesCtrl
 * Controller of the appDomApp
 */
angular.module('appDomApp')
  .controller('DevicesCtrl', function ($scope) {  	
    $scope.listDevices = [
  	    {
  	    	name:'device1', 
  	    	uri:'http://localhost1',
  	    	type:"simple",
  	    	state: true,
  		},
  	    {
  	    	name:"device2", 
  	    	uri:"http://localhost2",
  	    	type:"simple",
  	    	state:false,
  		},
  	    {
  	    	name:"device3", 
  	    	uri:"http://localhost3",
  	    	type:"simple",
  	    	state:false,
  		},
  		{
  	    	name:"device4", 
  	    	uri:"http://localhost4",
  	    	type:"variable",
  	    	state:false,
  		},
  		{
  	    	name:"device5", 
  	    	uri:"http://localhost5",
  	    	type:"color",
  	    	state:true,
  		},
    ];

    $scope.turn = function( index ){
    	let device = $scope.listDevices[ index ];
		console.log( $scope.listDevices[ index ].uri );
		console.log( $scope.listDevices[ index ].state );
    }

  });
