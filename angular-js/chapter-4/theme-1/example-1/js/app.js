
var questApp = angular.module('questApp', ['ngRoute']);

questApp.config(function ($locationProvider, $routeProvider) {
    // HTML 5 Mode
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false,
    //    rewriteLinks: true,
    //}).hashPrefix('!');
    $routeProvider.when('question', {
        templateUrl: '/views/question.html',
        controller: 'QuestionController'
    });

    $routeProvider.when('/answer', {
        templateUrl: '/views/answer.html',
        controller: 'AnswerController'
    });

    $routeProvider.otherwise({
        redirectTo: '/question'
    });
});