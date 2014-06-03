'use strict';

testAngularApp
  .controller('MainCtrl', function ($scope,simpleFactory) {
    $scope.awesomeThings =[];
    init();
    function init(){
    	$scope.awesomeThings=simpleFactory.getThings();
    }

    $scope.addThing=function (){
    	$scope.awesomeThings.push($scope.newThing);
    };

  });
