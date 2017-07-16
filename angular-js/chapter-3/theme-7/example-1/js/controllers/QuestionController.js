questApp.controller('QuestionController',
    function QuestionController($scope, dataService, $timeout) {
        var promise = $timeout(function () {
            return dataService.getData();
        }, 3000);

        promise = promise.then(function (value) {
            $scope.question = value;
        });

        $scope.voteUp = function (answer) {
            answer.rate++;
        };

        $scope.voteDown = function (answer) {
            answer.rate--;
        };
    }
);