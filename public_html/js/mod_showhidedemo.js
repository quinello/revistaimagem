var showHideDemo = angular.module('showHideDemo',[]);
showHideDemo.controller('showHideController', function($scope){
	$scope.libs = [
		{name: 'Gastronomia', checked: true},
		{name: 'Construção', checked: true},
		{name: 'Moda', checked: true}
	];
	
	$scope.markIt = function(s){
		s.checked = !s.checked;
	}
	
	$scope.allMarked = function(){
		var checkedItem = 0;
		angular.forEach($scope.libs, function(s){
			if(s.checked == true){
				checkedItem += 1;
			}
		});
		if (checkedItem == $scope.libs.length){
				return true;
		}
	}
        $scope.SegmentoMarkIt = function(segmento){           
                var mostra = false;
		
                angular.forEach($scope.libs, function(sa){
			if(sa.name == segmento){

                            if(sa.checked == true){                              
                               mostra = true;

                            } else {

                                mostra = false;
                            }                          
			}
		});

                return mostra;
	}
});

