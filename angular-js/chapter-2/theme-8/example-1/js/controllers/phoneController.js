var app = angular.module('myApp');

app.controller('phoneController', function ($scope) {
    $scope.somestyle = {
        background: '#eee',
        color: '#333',
    };
    $scope.someclass = 'myclass';
});