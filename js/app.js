// Define the jfkApp module
var jfkApp = angular.module('jfkApp', []);

// Define the `LanguageController` controller
jfkApp.controller('LanguageController', function LanguageController($scope) {
    $scope.selectedLang = "english";
    
    $scope.selectLang = function(newLang) {
        $scope.selectedLang = newLang;
    };
    
    
});


// Define the `FlightController` controller
jfkApp.controller('FlightController', function FlightController($scope) {
    $scope.selectedLang = "english";
    
    $scope.selectLang = function(newLang) {
        $scope.selectedLang = newLang;
    };
    
    
});