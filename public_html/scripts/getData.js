mainApp.controller('actualContentCtrl', function($scope, $http){		
		//$http({method:'GET', url:'php/getDataPHP.php'})
		$http.get('php/getDataPHP.php')
		.then(function(data){
			console.log(data);	
					
			var receivedData=data;
			$scope.message1 = receivedData['data'];					
		});
		/*.error(function(error){
			console.error(error);		
		});
		var baseobject = Restangular.all('php/getData.php');
	    baseobject.getList().then(function (obj){
	    	$scope.message = obj;
	    });console.log($scope.message);*/
	$scope.getDataNews=function(){
    
	};
	//$scope.message1="nix";
});    