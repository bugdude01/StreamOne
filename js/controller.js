angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "home";
    })
    .controller('PackageController', function($scope) {
        $scope.title = "packages";
    })
    .controller('Gallery', function($scope) {
        $scope.title = "gallery";
    })
    .controller('Sweetlist', function($scope) {
        $scope.title = "sweetlist";
    })
    .controller('RegisterController', function($scope, UserAPIService) {
        $scope.registrationUser = {};

        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
            }
 
            console.log($scope.registrationUser.username + " " + $scope.registrationUser.password);
        };
    });

/*angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "home";
    })
    .controller('PackageController', function($scope) {
        $scope.title = "packages";
    })
    .controller('SuccessController', function($scope) {
        $scope.title = "Thank You!";
    })
    .controller('Gallery', function($scope) {
        $scope.title = "gallery";
    })
    .controller('Sweetlist', function($scope) {
        $scope.title = "sweetlist";
    })
    .controller('BookusController', function($scope, UserAPIService) {
        
        $scope.bookUser = {};

        $scope.submitForm = function() {
            if ($scope.bookingForm.$valid) {
                $scope.bookUser.name = $scope.user.name;
                $scope.bookUser.email = $scope.user.email;
                $scope.bookUser.homePhone = $scope.user.homePhone;
                $scope.bookUser.mobilePhone = $scope.user.mobilePhone;
                $scope.bookUser.date = $scope.user.date;
                $scope.bookUser.eventType = $scope.user.eventType;
                $scope.bookUser.guestNumber = $scope.user.guestNumber;
            }
 
            console.log($scope.bookUser.name + " " + $scope.bookUser.email + " " + $scope.bookUser.homePhone + " " + $scope.bookUser.mobilePhone 
                + " " + $scope.bookUser.date + " " + $scope.bookUser.eventType + " " + $scope.bookUser.guestNumber);
        }
    });

