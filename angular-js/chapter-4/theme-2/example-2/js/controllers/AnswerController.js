
questApp.controller('AnswerController',
    function AnswerController($scope, $http, $location, $templateCache) {
        $scope.$on('$routeChangeStart', function (event, next, current) {
            if(typeof(current) !== undefined) {
                $templateCache.remove(next.$$route.templateUrl);
                console.log(next);
                console.log(current);
            }
        });
        $scope.save = function (answer, answerForm) {
            if (answerForm.$valid) {
                $http.post('postAnswer.php', answer)
                    .then(function success(response) {
                        $location.path('/question');
                    });
            }
        }
    }
);