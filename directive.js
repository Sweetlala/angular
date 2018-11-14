var app = angular.module('ajaxApp');
app.directive('max',function(){
    return{
        template : '<div> Ni Är Bäst</div>',
        restrict : 'E',
        link :function(scope, element, attrs){
           
        }
    }
})