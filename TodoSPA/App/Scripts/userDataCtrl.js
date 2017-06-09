'use strict';
angular.module('todoApp')
.controller('userDataCtrl', ['$scope', 'adalAuthenticationService','$http' ,function ($scope, adalService, $http, config) {
    $scope.message = 'Fetching data from the API:';
    //$scope.userInfo = adalAuthenticationService.userInfo;

    //$http.get('https://graph.windows.net/78033c5f-2680-48c1-a4c3-03756ea8d498/reports?api-version=beta').success(function (results) {

    //    var a = '';
    //}).error(function (results) {

    //    var b = ''
    //})


    var client = $http({
        method: 'GET',
        url: "https://graph.windows.net/testbasic1.onmicrosoft.com/me?api-version=1.6",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }

    });

    client.then(function (data) {
        console.log(data);
        $scope.message = "Data is fetched from the API with Access Token";

        $scope.apiData = data.data;
    }, function (data) {
        console.log(data)
        $scope.message = data.data;
    });

}]);