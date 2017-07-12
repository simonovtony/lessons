questApp.controller('QuestionController',
    function QuestionController ($scope, dataService) {

        $scope.question = dataService.question;

        $scope.voteUp = function (answer) {
            answer.rate++;
        };

        $scope.voteDown = function (answer) {
            answer.rate--;
        };
    }
);