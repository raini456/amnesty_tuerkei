mainApp.filter("sourceFilter",function(){
   	return function(source){
   		switch(source){
   			case 1: 
   				return "Quelle";
   			case 2: 
   				return "TAZ";
   			case 3: 
   				return "Tagesspiegel";
   			case 4: 
   				return "FAZ";
   			case 5: 
   				return "Bild";
   			case 6: 
   				return "Bunte";
   			case 7: 
   				return "Bild der Frau";
   		}

   	};
});

