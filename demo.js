angular.module('app',['dmamills.ngNHL'])
	.controller('TestCtrl',function($scope) {
	  
	  $scope.teams = ["Anaheim Ducks","Arizona Coyotes","Boston Bruins","Buffalo Sabres","Calgary Flames","Carolina Hurricanes","Chicago Blackhawks","Colorado Avalanche","Columbus Blue Jackets","Dallas Stars","Detroit Red Wings","Edmonton Oilers","Florida Panthers","Los Angeles Kings","Minnesota Wild","Montreal Canadiens","Nashville Predators","New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","Pittsburgh Penguins","Ottawa Senators","San Jose Sharks","St. Louis Blues","Tampa Bay Lightning","Toronto Maple Leafs","Vancouver Canucks","Washington Capitals","Winnipeg Jets"];
	  $scope.teamb = 'Anaheim Ducks';
   	  $scope.teama = 'Detroit Red Wings';
});
