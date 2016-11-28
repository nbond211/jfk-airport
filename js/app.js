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
    
    $scope.sortType     = 'flightNumber';
    $scope.sortReverse  = false;

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


// Define the `CarController` controller
jfkApp.controller('CarController', function CarController($scope) {
    $scope.pickupLocation = "JFK International Airport";
    $scope.dropoffLocation = "JFK International Airport";
    
    $scope.carTypes = ["Compact", "Sedan", "Mid-size", "SUV", "Truck"];
    
    $scope.selectCar = function(car) {
        $scope.selectedCar = car;
    }
    
    $scope.filterCar = function(car) {
        if ($scope.pickupDate == undefined && $scope.carType == undefined) {
            return true;
        }
        if ($scope.pickupDate == undefined) {
            return car.type == $scope.carType;
        }
        if ($scope.carType == undefined) {
            return car.available.toDateString() == $scope.pickupDate.toDateString();
        }
        else {
            return car.type == $scope.carType && car.available.toDateString() == $scope.pickupDate.toDateString();
        }
    };
    
    $scope.carsToShow = function() {
        var count = 0;
        
        for (var i = 0; i < $scope.cars.length; i++) {
            if ($scope.filterCar($scope.cars[i])) {
                count++
            }
        }
        return (count == 0);
    }
    
    $scope.cars = [
        {
            name: "Honda Civic", 
            type: "Compact", 
            available: new Date("2017-01-05T05:00:00.000Z"), // 1/5/16
            image: "http://st.motortrend.com/uploads/sites/10/2016/10/2017-Honda-Civic-sedan-front-three-quarter.jpg",
            selected: false
        },
        {
            name: "Ford Focus", 
            type: "Compact", 
            available: new Date("2017-01-05T05:00:00.000Z"), 
            image: "https://carsintrend.com/wp-content/uploads/2016/01/2017-Ford-Focus.jpg",
            selected: false
        },
        {
            name: "Mazda3", 
            type: "Compact", 
            available: new Date("2017-01-05T05:00:00.000Z"), 
            image: "http://cms.kelleybluebookimages.com/content/dam/kbb-editorial/make/mazda/mazda3/2017/05-2017%20-mazda-mazda3.jpg",
            selected: false
        },
        {
            name: "Toyota Camry", 
            type: "Sedan", 
            available: new Date("2017-01-05T05:00:00.000Z"), 
            image: "http://o.aolcdn.com/commerce/autodata/images/USC60TOC021A021001.jpg",
            selected: false
        },
        {
            name: "Chevrolet Impala", 
            type: "Sedan",
            available: new Date("2017-01-05T05:00:00.000Z"), 
            image: "https://carsintrend.com/wp-content/uploads/2016/01/2017-Chevrolet-Impala-release-2-1.jpg",
            selected: false
        },
        {
            name: "Buick Verano", 
            type: "Mid-size", 
            available: new Date("2017-01-08T05:00:00.000Z"), 
            image: "http://gmauthority.com/blog/wp-content/gallery/2016-buick-verano-chinese-market/2016-buick-verano-china-01.jpg",
            selected: false
        },
        {
            name: "Ford Explorer", 
            type: "SUV", 
            available: new Date("2017-01-05T05:00:00.000Z"), 
            image: "http://www.ford.com/ngbs-services/resources/ford/explorer/2017/equipment/exp17_models_detailflip_platinumgrille.jpg",
            selected: false
        },
        {
            name: "Range Rover", 
            type: "SUV", 
            available: new Date("2017-01-05T05:00:00.000Z"), 
            image: "https://a.gaw.to/photos/8/2/82154_2017_landrover_Range_Rover.jpg?460x287",
            selected: false
        },
        {
            name: "Jeep Wrangler", 
            type: "SUV", 
            available: new Date("2017-01-05T05:00:00.000Z"), 
            image: "http://images.hgmsites.net/hug/2016-jeep-wrangler-unlimited-75th-anniversary-edition_100541633_h.jpg",
            selected: false
        },
        {
            name: "Nissan Titan", 
            type: "Truck", 
            available: new Date("2017-01-08T05:00:00.000Z"), 
            image: "http://assets.nydailynews.com/polopoly_fs/1.2751170.1471277640!/img/httpImage/image.jpg_gen/derivatives/article_750/2017-nissan-titan.jpg",
            selected: false
        }
    ];
    
});


// Define the `DirectionsController` controller
jfkApp.controller('DirectionsController', function DirectionsController($scope) {
    $scope.destination = "JFK International Airport";
    
    $scope.showDirections = false;
    
    $scope.getDirections = function() {
        $scope.showDirections = true;
    }
});







