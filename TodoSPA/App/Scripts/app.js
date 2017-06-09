'use strict';
angular.module('todoApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/TodoList", {
        controller: "todoListCtrl",
        templateUrl: "/App/Views/TodoList.html",
        requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
        requireADLogin: true,
    }).otherwise({ redirectTo: "/Home" });

    var endpoints = {
        "https://graph.windows.net/": "https://graph.windows.net/",
    };


    adalProvider.init(
        {
                instance: 'https://login.microsoftonline.com/', 
            tenant: 'testbasic1.onmicrosoft.com',
            clientId: '4bcce6e0-1d19-4235-93be-9026a3f0c2e3',
            extraQueryParameter: 'nux=1',
            endpoints: endpoints,
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );
   
}]);
