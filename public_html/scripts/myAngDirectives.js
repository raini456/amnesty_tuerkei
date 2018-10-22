//funktioniert offenbar nicht innerhalb ng-repeat;
mainApp.directive('showMore', function(){
 var showFn;
   showFn=function(scope, element, attrs){
    var showMoreInfo, hideMoreInfo;
    btnMore=element.children()[0];
    infoMore=element.children()[1];
    showMoreInfo = function(){
      $(infoMore).animate({
        opacity:0.3,
        top:'+=50'
        //display:'block'
      });      
    }/*
    hideMoreInfo = function(){
      $(this).animate(function(){
        display:'none'
      });
    }*/
    $(btnMore).click(showMoreInfo);
  };
  return{
      restrict:'E',
      link:showFn
  }
});
mainApp.directive('myWidget',function(){
  var linkFn1;
  linkFn1 = function(scope, element, attrs){
    var animateDown, animateUp;
    box0=element.children()[0];
    box1=element.children()[1];
    animateLink1 = function(){
      $(box0).animate({
         opacity:0.3,
         top:'+=50',
         left:'+=40'
      });
    }
    $(box1).click(animateLink1);
    };
  return{
    restrict:'E',
    link:linkFn1
  }
});


