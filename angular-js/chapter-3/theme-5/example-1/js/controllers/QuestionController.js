questApp.controller('QuestionController',
    function QuestionController($scope, $http) {
        $http.get('/question.json')
            .then(function success(response) {
                console.log(response.data);
                $scope.question = response.data.question;
            });

        $scope.voteUp = function (answer) {
            $http({method: 'GET', url: 'setAnswer.php', params: {id: answer.id, 'up': true}})
                .then(function success(response) {
                    answer.rate++;
                    console.log(response.data);
                }
            );
        }

        $scope.voteDown = function (answer) {
            $http({method: 'GET', url: 'setAnswer.php', params: {id: answer.id, 'up': false}})
                .then(function success(response) {
                    answer.rate--;
                    console.log(response.data);
                }
            );
        }
    }
);