// Define the jfkApp module
var jfkApp = angular.module('jfkApp', []);

// Define the `LanguageController` controller
jfkApp.controller('LanguageController', function LanguageController($scope) {
    $scope.selectedLang = "english";

    $scope.selectLang = function (newLang) {
        $scope.selectedLang = newLang;
    };


});


// Define the `FlightController` controller
jfkApp.controller('FlightController', function FlightController($scope, $http) {

    $http.get('./assets/arrivals.json')
        .then(function (res) {
            $scope.flights = res.data;
        });

    $scope.flightType = "arrivals";

    $scope.airline = '';
    $scope.flightNumber = '';

    $scope.airlines = ["Delta Air Line", "Air France", "American Airlines", "Korean Air"];

    $scope.filterFlight = function (flight) {
        if ($scope.airline == '' && $scope.flightNumber == '') {
            return true;
        }
        if ($scope.airline == '') {
            return flight.flightNumber.toString().indexOf($scope.flightNumber) != -1;
        }
        if ($scope.flightNumber == '') {
            return flight.airline == $scope.airline;
        } else {
            return flight.flightNumber.toString().indexOf($scope.flightNumber) != -1 && flight.airline == $scope.airline;
        }
    }

    $scope.updateData = function () {
        if ($scope.flightType == "arrivals") {
            
            $http.get('./assets/arrivals.json')
                .then(function (res) {
                    $scope.flights = res.data;
                });
        }
        if ($scope.flightType == "departures") {
            
            $http.get('./assets/departures.json')
                .then(function (res) {
                    $scope.flights = res.data;
                });
        }
    };



});