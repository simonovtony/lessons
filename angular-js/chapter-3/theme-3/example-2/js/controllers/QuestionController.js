questApp.controller('QuestionController',
    function QuestionController($scope, $http) {
        $scope.question = {};

        $scope.loaded = false;

        $scope.load = function () {
            var config = {
                timeout: 600
            };
            $http.get('/question.json', config)
                .then(function success(response) {
                    $scope.question = response.data.question;
                    console.log(response.config);
                });
            $scope.loaded = true;
        }

        $scope.voteUp = function (answer) {
            answer.rate++;
        };

        $scope.voteDown = function (answer) {
            answer.rate--;
        };
    }
);