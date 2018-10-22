/*mainApp.factory('loginFactory', function($http){
	return{
		login:function(member){
			var $promise=$http.post('php/dataPHP.php', member);//sendet Daten nach php/dataPHP.php
			$promise.then(function(msg){
				if(msg.data == 'success'){
					console.log('success login');
				}
				else{
					console.log('error login');										
				}
			});
		}
	};
});

mainApp.controller('loginCtrl',function($scope, loginService){
	$scope.login=function(member){
		loginService.login(member);//ruft den loginService
	};
	$scope.URLloginForm='templates/formulars/loginFormular.html';
	$scope.URLmbInputForm='templates/formulars/mbInputFormularDB.html';
	$scope.ou=function(){
		console.log("Ja");
	};
});*/
mainApp.service('loginService',["$scope", "$http", function($scope, $http){
	$scope.holeNachricht=function(member){
		$http.post('php/getDataForChange.php',member)
		success(function(response){
			var receivedData=response;
			$scope.dataForChange=receivedData['data'];
		});
	};

}]);
mainApp.controller('loginCtrl',function($scope, $http){	
	var loginMessage="Willkommen";
	var noLogin="Keine Zugangsberechtigung";
	var sendMsg="Daten nicht gesendet";
	$scope.date =  new Date(Date.now());	
	$scope.login=function(member){
		$scope.selectedForm=true;
		var user=member.user;	
		var userE=member.user + "E";	
		$scope.lgUser=user;				
		$http.post('php/dataPHP.php', member)
		.success(function(response){
			var splitResponse=response.split(',')[0];			
			var splitResponse2=response.split(',')[1];
			$scope.halloMember=splitResponse2;
			console.log(splitResponse, splitResponse2);
			if(splitResponse==user && user!=""){
				alert("Willkommen im internen Bereich, "+ splitResponse2 +"!");				
				angular.element(document.querySelector('#internSection')).css({
					display:'block'
				});	
			}
			 else if(splitResponse==userE && userE!=""){
			 	alert("Willkommen im internen Bereich, "+ splitResponse2 +"!");										
			 	angular.element(document.querySelector("#inputAktuelles")).css({
			 		display:'block'
			 	});	
			  }
			  else{
				$scope.loginMessage=noLogin;
			 }
		})
		.error(function(error){
			console.error(error);		
		});			
    };

	$scope.holeNachricht=function(member){
		console.log(member);
		$http.post('php/getDataForChange.php',member)
		.then(function(data){
			var receivedData=data;
			$scope.dataForChange=receivedData['data'];				
			if(data!=""){				
				console.log(data);
			}		
		});
	};
	$scope.sendDataNews=function(member){
		$http.post('php/dataPHP.php', member)
		.success(function(response){
			console.log(response);
			if(response=="match"){
				alert("Daten gesendet!");
				angular.element( document.querySelector( '#inputAktuelles' )).css({
					display:'none'
				});		
			}				
			else{
				$scope.sendMessage=sendMsg;
			}
		})
		.error(function(error){
			console.error(error);		
		}
	)}
    //update:	
	$scope.updateData=function(dtaChg){				    			
		$http.post('php/updateDataPHP.php', dtaChg)
		.success(function(response){
			console.log(response);
			if(response=="match"){
				alert("Daten gesendet!");				
			}				
			else{
				$scope.loginMessage=noLogin;
			}
		})
		.error(function(error){
			console.error(error);		
		});
		$scope.dataForChange="";
	}
	//delete:
	$scope.deleteData=function(dtaDel){
		$http.post('php/deleteDataPHP.php', dtaDel)
		.success(function(response){
			if(response=="deleted"){
				alert("Datensatz gelöscht!");
				angular.element(document.querySelector("#updateForm").css({
					display:'none'
				}));
			}
			else{
				alert("Datensatz nicht gelöscht, versuche es nochmal!");
			}
		});

		
	}
	

	$scope.uploadFile = function(files){
		var fd = new FormData();
		fd.append('file',files[0]);		
		$http.post('php/filesUpload.php',fd,{
			withCredentials:true,			
			transformRequest:angular.identity,
			headers:{'Content-Type':undefined}
			}).success('geklappt').error('shit');		
	};
	$scope.showMoreNews=function(){
		angular.element( document.querySelector( '.hiddenNews' )).css({
			display:'block'
		});		
	};
	$scope.formAusblenden=function(){
		angular.element( document.querySelector( '#inputAktuelles' )).css({
			display:'none'
		});		
	};
	$scope.dtaChgAusblenden=function(){
		angular.element(document.querySelector('#updateForm')).css({
			display:'none'
		});
	}
	$scope.internAusblenden=function(){
		angular.element( document.querySelector( '#internSection' )).css({
			display:'none'
		});		
	};
	$scope.selectedForm=true;
	$scope.changeInput=function(){
		$scope.selectedForm=!$scope.selectedForm;
		/*angular.element( document.querySelector( '#internSection' )).css({
			display:'none'
		});*/
		angular.element(document.querySelector('#changeForm')).css({
			display:'block'
		});
	};
	$scope.URLloginForm='templates/formulars/loginFormular.html';
	$scope.URLmbInputForm='templates/formulars/mbInputFormularDB.html';	
	$scope.URLinternSection='templates/formulars/internSection.html';	
	$scope.URLchangeForm='templates/formulars/mbChangeFormularDB.html';
});