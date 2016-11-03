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
    $scope.flights = [
        {   "flightNumber": 322, 
            "airline": "Delta",
            "location": "Atlanta, GA", 
            "terminal": "B", 
            "gate": 22, 
            "status": "On-Time",
            "scheduled": "4:25 PM",
        },
        {   "flightNumber": 5733, 
            "airline": "American Airlines",
            "location": "Boston, MA", 
            "terminal": "G", 
            "gate": 3, 
            "status": "On-Time",
            "scheduled": "7:25 PM",
        },
    ];
    
    $scope.flightType = "arrivals";
    
    $scope.airlines = ["Delta", "American Airlines", "Jet Blue"];
    
    $scope.filterFlight = function(flight) {
        if ($scope.airline == null && $scope.flighNumber == null) {
            return true;
        }
        if ($scope.airline == null) {
            return flight.flightNumber == $scope.flightNumber;
        }
        if ($scope.flightNumber == null) {
            return flight.airline == $scope.airline;
        }
        else {
            return flight.flightNumber == $scope.flightNumber && flight.airline == $scope.airline;
        }
    }
    
    
    
});