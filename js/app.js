var Candyland = angular.module('Candyland', []);

angular.module('Candyland', ['ngRoute', 'RouteControllers']);
 
angular.module('Candyland').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    })
    .when('/home', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    })
    .when('/packages', {
        templateUrl: '/templates/packages.html',
        controller: 'PackageController'
    })
    .when('/gallery', {
        templateUrl: '/templates/gallery.html',
        controller: 'GalleryController'
    })
    .when('/sweetlist', {
        templateUrl: '/templates/sweetlist.html',
        controller: 'SweetlistController'
    })
    .when('/bookme', {
        templateUrl: '/templates/bookme.html',
        controller: 'RegisterController'
    });
});

/*angular.module('Candyland', ['ngRoute', 'RouteControllers', 'UserService']);


angular.module('Candyland').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    })
    .when('/home', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    })
    .when('/packages', {
        templateUrl: '/templates/packages.html',
        controller: 'PackageController'
    })
    .when('/gallery', {
        templateUrl: '/templates/gallery.html',
        controller: 'GalleryController'
    })
    .when('/sweetlist', {
        templateUrl: '/templates/sweetlist.html',
        controller: 'SweetlistController'
    })
    .when('/bookingsuccess', {
        templateUrl: '/templates/bookingsuccess.html',
        controller: 'SuccessController'
    })
    .when('/bookus', {
        templateUrl: '/templates/bookus.html',
        controller: 'BookusController'
    });
});

