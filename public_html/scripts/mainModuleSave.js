var mainApp=angular.module("mainApp",['ngRoute']);

mainApp.config(function($routeProvider){
   $routeProvider
   		.when('/aktuelles',{
   			templateUrl:'templates/actualContentTable.html',
   			controller:'actualCtrl'
   		})
   		.when('/gruppe',{
   			templateUrl:'templates/gruppe.php',
   			controller:'groupCtrl'
   		})
   		.when('/termine',{
   			templateUrl:'templates/termine.html',
   			controller:'datesCtrl'
   		})
   		.when('/aktionen',{
   			templateUrl:'templates/aktionen.html',
   			controller:'actionCtrl'
   		})
   		.when('/aiAllg',{
   			templateUrl:'templates/aiAllg.html',
   			controller:'aiAllglCtrl'
   		})
   		.when('/kontakt',{
   			templateUrl:'templates/kontakt.html',
   			controller:'contactCtrl'
   		})
   		.when('/impressum',{
   			templateUrl:'templates/impressum.html',
   			controller:'impressumCtrl'
   		})
   		/*.when('/aktuelles',{
   			templateUrl:'templates/aktuelles.html',
   			controller:'actualCtrl'
   		})
   		.when('/aktuelles',{
   			templateUrl:'templates/aktuelles.html',
   			controller:'actualCtrl'
   		})*/
   		;
});

mainApp.controller('mainCtrl', function($scope, stringService, $location, $anchorScroll){
	$scope.tblTh={
		subtitle:"allg. Thema",
		news:"Kurzinfo",
		subnews:"mehr",
		date:"Datum",
		source:"Quelle",	
		eval:"Wertung",
		action:"bewerten"			
	};
	$scope.message=[		
	 	{
		subtitle:"Ganz was Furchtbares",
		news:"Ab und zu etwas anderes",
		subnews:"genaueres hierzu",
		date:"18.08.2016",
		source:2,
		likes:0,
		dislikes:0
		},
		{
		subtitle:"Hier auch noch was Arges",
		news:"Dann wieder etwas spezieller anderes",
		subnews:"genaueres spezielleres hierzu",
		date:"19.08.2016",
		source:3,
		likes:0,
		dislikes:0
		},
		{
		subtitle:"mal was Positives",
		news:"Gerüchteküche",
		subnews:"was man so hört und liest",
		date:"20.08.2016",
		source:5,
		likes:0,
		dislikes:0
		},
		{
		subtitle:"noch was Schlimmes",	
		news:"Klatsch und Tratsch",
		subnews:"stille Post und unwichtiges",
		date:"22.08.2016",
		source:7,
		likes:0,
		dislikes:0
		},
		{
		subtitle:"wichtiges in Kürze",	
		news:"Was sich gerade so eklatant verändert",
		subnews:"Bewegungen, Strömungen und Tendenzen",
		date:"27.08.2016",
		source:4,
		likes:0,
		dislikes:0
		}
	];
	$scope.flag = {
		"flag":"assets/aiTuerkeiFlagge.png",
		"altName":"Flagge Tuerkei mit Amnesty-Kerze"
	};
	$scope.loupe={
		"src":"assets/lupe.png",
		"altName":"Suchlupe"
	};
	$scope.indexHeaderImg1={
		"src":"assets/facebookIcon.png",
		"altName":"Facebook-Icon"
	};
	$scope.indexHeaderImg2={
		"src":"assets/twitterIcon.png",
		"altName":"Twitter-Icon"
	};
	$scope.indexHeaderImg3={
		"src":"assets/rssIcon.png",
		"altName":"RSS-Icon"
	};
	$scope.indexSideImg0={
		"src":"assets/TuerkeiFrauen.jpg",
		"altName":"Bild Frauen Türkei"
	};
	$scope.indexSideImg1={
		"src":"assets/TuerkeiGruppeBerlin2016.jpg",
		"altName":"Bild Indexseite links"
	};
	$scope.indexSideImg2={
		"src":"assets/AI_TuerkeiStand2016.jpg",
		"altName":"Bild2 Indexseite links"
	};
	$scope.indexSideImg3={
		"src":"assets/TuerkeiDemo.jpg",
		"altName":"Bild3 Indexseite links Demo Türkei"
	};
	
	$scope.meetings=[
		{
		date:"20.05.2900",
		time:"20 h",
		place:"wo auch immer"
		},
		{
		date:"10.12.2500",
		time:"10 h",
		place:"wo noch immer"
		}
	];

	$scope.incremLikes=function(msg){
		msg.likes++;		
	};
	$scope.decremLikes=function(msg){
		msg.dislikes++;		
	};       
	$scope.rowLimit='3';
	$scope.sortColumn="date";
	$scope.directSort=false;

	$scope.sortData=function(column){
		$scope.directSort=($scope.sortColumn==column) ? !$scope.directSort : false;
		$scope.sortColumn=column;
	};

	$scope.getSortArrows=function(column){
		if($scope.sortColumn == column){
			return $scope.directSort ? 'arrow-up' : 'arrow-down';
		}
		return '';
	};
	$scope.search=function(item){
		if($scope.keyword == undefined){
			return true;
		}
		else{
			if(item.news.toLowerCase().indexOf($scope.news.toLowerCase())!=-1 ||
			   item.subtitle.toLowerCase().indexOf($scope.subtitle.toLowerCase())!=-1 ||
			   item.subnews.toLowerCase().indexOf($scope.subnews.toLowerCase())!=-1)
			{
				return true;
			}

		}
		return false;
	};
});

mainApp.controller('actualCtrl',function($scope){
	$scope.selectedURL="templates/tables.html";	
	$scope.transformString = function(input){
		$scope.output=stringService.transformString(input);
	};	
	
	$scope.scrollTo=function(scrollLocation){
		$location.hash(scrollLocation);
		$anchorScroll.yOffset=20;
		$anchorScroll();
	};

});	

mainApp.controller('groupCtrl',function($scope){
	

});	
mainApp.controller('contactCtrl',function($scope){
	

});	
mainApp.controller('datesCtrl',function($scope){

});
mainApp.controller('actionCtrl',function($scope){
	

});	
mainApp.controller('impressumCtrl',function($scope){

});	