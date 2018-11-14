var app = angular.module('ajaxApp');

app.controller('HomeCtrl', ['$scope' , '$http', function($scope, $http){
$scope.name = 'Ola';
$scope.names = ['Ola','Razan','Sara'];

$scope.show = function(){
    console.log('Hej allihoppa !!!!!');

}
   
$scope.showData = function(){
    var url ='http://jsonplaceholder.typicode.com/posts';
    $http.get(url)
    .then(function(data){
        $scope.recievedData = data ;
    })
    .catch(function(err){
        console.log(err);
    })
};

}]);
app.controller('ResultsCtrl', ['$scope' ,  function($scope){ 
    
}]);