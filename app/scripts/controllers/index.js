'use strict';

window.angular.module('app.controllers',[])
.controller('homeCtrl', [function(){
	
	console.log('@home/');

}])
.controller('welcomeCtrl', ['appService', function(appService){
        appService.ready(function(){
            window.modal.hide();
        });
}])
.controller('infoCtrl', [function(){

	console.log('@infoCtrl/');	

}])
.controller('settingsCtrl', [function(){

	console.log('@settingsCtrl/');	

}])
.controller('locationCtrl', [function(){

	console.log('@locationCtrl/');	

}])
.controller('placeCtrl', [function(){

	console.log('@placeCtrl/');	

}]);
