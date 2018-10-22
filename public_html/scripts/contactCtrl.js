
mainApp.controller('contactCtrl',function($scope, $http){	
	$scope.sendMessage=function(contact){
		console.log(contact);
		$http.post('php/kontakt.php',contact)
		.success(function(response){
		     console.log(response);						
			if(response=="gesendet"){				
				alert("Danke für die Nachricht, die Anfrage wurde gesendet");

			}	
			else{
				alert("Anfrage unvollständig, bitte alle Felder ausfüllen ...");
			}	
		})
		.error(function(){
			console.log(error);
		});		
	};
	$scope.contact=[{
			kontaktName:"",
			kontaktEmail:"",
			kontaktMessage:"",
			checked:false
	}];
});