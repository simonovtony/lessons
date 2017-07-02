var app = angular.module('myApp', []);

app.controller('phoneController', function ($scope) {
    $scope.phones = [
        {
            name: 'Nokia Lumia 630',
            year: 2014,
            price: 200,
            company: {
                name: 'Nokia',
                country: 'Финляндия'
            }
        },
        {
            name: 'Samsung',
            year: 2014,
            price: 400,
            company: {
                name: 'Samsung',
                country: 'Республика Корея'
            }
        },
        {
            name: 'Mi 5',
            year: 2015,
            price: 300,
            company: {
                name: 'Xiaomi',
                country: 'Китай'
            }
        }
    ];
});