
var questApp = angular.module('questApp', ['ngRoute']);

questApp.config(function ($routeProvider) {
    $routeProvider.when('/question', {
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

questApp.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if(typeof(current) !== undefined) {
            $templateCache.removeAll();
            // $templateCache.remove(current.$$route.templateUrl);
        }
    });
});