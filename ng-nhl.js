angular.module('dmamills.ngNHL',[])
.directive('ngNhl',function() {
	return {
		link: function(scope,el,attr) {
			var img = angular.element('<img>');
			el.html('');
			el.append(img);
			scope.$watch(attr.ngNhl,function(team) {
				team = team.replace(/ /g,'');
				img.attr('src','http://yomills.com/misc/nhl-logos/'+team+'.gif');
			});
		}
	};
});
