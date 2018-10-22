var mainApp=angular.module("mainApp",['ngRoute', 'ngSanitize','toggles']);

mainApp.config(['$routeProvider', function($routeProvider){
   $routeProvider
                   .when('/',{
                           templateUrl:'templates/gruppe.html',
                           controller:'actualContentCtrl'
                   })
                   .when('/aktuelles',{
                           templateUrl:'templates/actualContentTable.html',
                           controller:'actualContentCtrl'
                   })
                   .when('/gruppe',{
                           templateUrl:'templates/gruppe.html',
                           controller:'groupCtrl'
                   })
                   .when('/termine',{
                           templateUrl:'templates/termine.html',
                           controller:'datesCtrl'
                   })
                   .when('/actions',{
                           templateUrl:'templates/actions.html',
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
                   .when('/archive',{
                           templateUrl:'templates/archive.html',
                           controller:'archiveCtrl'
                   })
                   .when('/impressum',{
                           templateUrl:'templates/impressum.html',
                           controller:'impressumCtrl'
                   })
                   .when('/links',{
                           templateUrl:'templates/links.html',
                           controller:'linkCtrl'
                   })/*
                   .when('/aktuelles',{
                           templateUrl:'templates/aktuelles.html',
                           controller:'actualCtrl'
                   })
                   */
                   .otherwise({
                           redirectTo:'/'
                   });
                
    
  }],
  ['$stateProvider',function($stateProvider){
      $stateProvider.state("login",{
                    url:"/",
                    controller:"loginCtrl",
                    templateURL:'templates/formulars/mbInputFormularDB.html'
                   });
  }]);

mainApp.controller('mainCtrl', function($scope, stringService, $location, $anchorScroll, $http){
        $scope.insertData = function(){
                $http.post("php/dataPHP.php",{
                  'datum':$scope.inputDate,
                  'verfasser':$scope.inputAuthor,
                  'passwort':$scope.inputPassword, 
                  'thema':$scope.inputTheme,
                  'nachricht':$scope.inputNews,
                  'mehrInfos':$scope.inputMoreInfo})
                        .success(function(data, status, headers, config){
                          console.log("Daten erfolgreich eingetragen!");
                });
        };
        $scope.tblTh={
                subtitle:"Thema",
                news:"Kurzinfo",
                subnews:"mehr",
                date:"Datum",
                pic:"assets/TuerkeiDemo.jpg",
                picAlt:"Tuerkei Demo"
        };
        var breite = document.documentElement.clientWidth +19;
        
        $scope.breite = "Breite: " + breite + " px";
        $scope.angezBreite = "Angezeigt durch JS:" + document.documentElement.clientWidth + "px";
        $scope.geraetebreite="Gerätebreite: " + window.screen.width + " px";     
        
        
        $scope.flag = {
                "flag":"assets/aiTuerkeiFlagge.png",
                "altName":"Flagge Tuerkei mit Amnesty-Kerze"
        };
        $scope.loupe={
                "src":"assets/lupe.png",
                "altName":"Suchlupe"
        };
        $scope.indexHeaderImgFlag={
                "src":"assets/aiTuerkeiFlagge.png",
                "altName":"Türkei-Flagge mit AI-Kerze"
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
                "src":"assets/TuerkeiDemo2.jpg",
                "altName":"Bild Indexseite links"
        };
        $scope.indexSideImg2={
                "src":"assets/TuerkeiMR.jpg",
                "altName":"Bild2 Indexseite links"
        };
        $scope.indexSideImg3={
                "src":"assets/TuerkeiDemo.jpg",
                "altName":"Bild3 Indexseite links Demo Türkei"
        };
        $scope.meetings=[                
                
                /*{
                "date":"Mittwoch, 03.Mai",
                "time":"18.15 h",
                "action":"Filmvorführung: Premiere 'Yilmaz Güney' und anschließende Diskussion mit Mustafa Demir",
                "place":"Moviemento\nKottbusser Damm 22\n10967 Berlin",
                "src1":"assets/AI_YG_Plakat.jpg",
                "src2":"assets/AI_YG_vor.jpg",
                "src3":"assets/AI_YG_rueck.jpg",
                "imgTxt1":"Plakat Filmvorführung Yilmaz Güney",
                "imgTxt2":"Flyer Filmvorführung Yilmaz Güney Vorderseite",
                "imgTxt3":"Flyer Filmvorführung Yilmaz Güney Rückseite",
                },*/
                {
                "date":"Mittwoch, 17.10.2018",
                "time":"20.00 h ",
                "action":"Gruppentreffen",
                "place":"über stephan4ai@yahoo.com, 0179 6793678 erfragen"
                }/*,
                {
                date:"16.Dezember 2016",
                time:"19 h, Weihnachtsfeier",
                place:"Café Ulrichs"
                }*/
        ];
        $scope.actions=[
                {
                date:"Donnerstag, 04.Oktober",
                time:"19 h",
                action:"Kurzfilm über Erin Keskin, türkische Menschenrechtlerin und Anwältin, \nDiskussion und Vortrag",
                place:"Südblock\nAdmiralstraße 1-2 \n10999 Berlin"
                }/*,
                {
                date:"Mittwoch, 03.Mai",
                time:"wird noch bekannt gegeben",
                action:"Demonstration",
                place:"Türkische Botschaft\nTiergartenstr. 19-21\n10785 Berlin"
                },
                {
                date:"Mittwoch, 03.Mai",
                time:"18.15 h",
                action:"Filmvorführung: Premiere 'Yilmaz Güney' und anschließende Diskussion mit Mustafa Demir",
                place:"Moviemento\nKottbusser Damm 22\n10967 Berlin"
                },
                {
                date:"Samstag, 27.Mai",
                time:"tagsüber",
                action:"Stand beim ev. Kirchentag",
                place:"Messegelände Berlin"
                }*/
        ];
        $scope.incremLikes=function(msg){
                msg.likes++;
        };
        $scope.decremLikes=function(msg){
                msg.dislikes++;
        };
        $scope.rowLimit='10';
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
        
        $scope.showMoreNews = function(){                  
                var close="^";
                var more= "v";
                var showHiddenNews=true;
                $scope.showHiddenNews=false;
                if($('.linkMoreNews').text()==more){
                  $('.linkMoreNews').text(close);
                }
                else{
                  $('.linkMoreNews').text(more); 
                }                
                $('.moreInfo').toggle();
                $scope=showHiddenNews = ! showHiddenNews;
                                             
        };                
        
        $scope.hideMoreNews = function(){
                angular.element(document.querySelector('.hiddenNews')).css({
                        display:"none"
                });                 
        }; 
        /*if(ngShow=='showHiddenNews'){
          $('.linkMoreNews').text("mehr");
        }
         else{
          $('.linkMoreNews').text("schließen");
         }
        */
        $scope.open=true;
        $scope.toggleThis = function() {
            $scope.open = $scope.open === false ? true: false;            
        };
        $scope.changeLinkMoreNews=function(){
          if($(".linkMoreNews").text()=="mehr"){
            $(".linkMoreNews").text("schließen");
          }
          else{
            $(".linkMoreNews").text("mehr");
          }
        }
});


mainApp.controller('actualContentCtrl',function($scope){

});

mainApp.controller('groupCtrl',function($scope){
        $scope.insertData = function(){
                $http.post("../php/dataPHP.php",{'datum':$scope.inputDate,'verfasser':$scope.inputAuthor,
                        'passwort':$scope.inputPassword, 'thema':$scope.inputTheme,'nachricht':
                        $scope.inputNews,'mehrInfos':$scope.inputMoreInfo})
                        .success(function(data, status, headers, config){
                                console.log("Daten erfolgreich eingetragen!");
                });
        };

});
mainApp.controller('naviCtrl',function($scope){
        
        /*$scope.changeClass=function(){
          $('.Navi1').css({
            display:"none"
          });
          $('.Navi2').css({
            display:"block"
          });
        };       
        $scope.changeClass1=function(){
          $('.Navi1').css({
            display:"block"
          });
          $('.Navi2').css({
            display:"none"
          });
        }; */
});  
mainApp.controller('contactCtrl',function($scope){
});
mainApp.controller('linkCtrl',function($scope){
      $scope.links=[
                 {
                url:"http://amnesty-tuerkei.de",
                linkAnzeige:"amnesty-tuerkei.de", 
                beschreibung:"Seite der deutschlandweiten AI-Türkeigruppe (Koordinationsgruppe)"               
                }
                ,
                {
                url:"http://www.amnesty.org.tr",
                linkAnzeige:"amnesty.org.tr", 
                beschreibung:"Seite von Amnesty in der Türkei"               
                }
      ];
});
mainApp.controller('actionCtrl',function($scope){
  $scope.uActions=[
                {
                date:"15.November 2016",                
                header:"Unterschreibt unsere Urgent Action für Pressefreiheit in der Türkei!",
                message:"Neun Journalisten und Vorstandsmitglieder der oppositionellen türkischen Tageszeitung Cumhuriyet sind am 4. November in Untersuchungshaft genommen worden. Mindestens 112 Journalist_innen und Medienschaffende befinden sich seit dem Putschversuch am 15. Juli und der Verhängung des Ausnahmezustands am 21. Juli in Untersuchungshaft. Insgesamt 169 Medienbetriebe sind im selben Zeitraum per Regierungserlass geschlossen worden.",
                URL:"http://action.amnesty.de/l/ger/p/dia/action3/common/public/?action_KEY=10364&d=1"                
                }
                ,
                {
                date:"17.November 2016",                
                header:"NGOs und Vereine geschlossen",
                message:"Das türkische Innenministerium kündigte am 11. November die flächendeckende und willkürliche Schließung von 370 NGOs für die Dauer von drei Monaten an. ",
                URL:"http://www.amnesty.de/urgent-action/ua-258-2016/ngos-und-vereine-geschlossen?destination=node%2F2800"                
                }/*,                
                {
                date:"06.Dezember 2016",                
                header:"Zivilgesellschaft unter Druck     Russland Türkei",
                message:"",
                URL:""                
                }*/
        ];
});
mainApp.controller('datesCtrl',function($scope){});
mainApp.controller('impressumCtrl',function($scope){});
mainApp.controller('naviTopCtrl',function($scope){
    $('#sandwich').click(function(){
        $('#subNavi').slideToggle('slow');
    });
    $('#subNavi').click(function(){
        $(this).slideUp('slow');
    });
});

mainApp.controller('picsTopCtrl',function($scope){});
