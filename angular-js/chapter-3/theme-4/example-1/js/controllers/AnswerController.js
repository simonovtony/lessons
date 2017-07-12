questApp.controller('AnswerController', ['$scope', '$http',
    function AnswerController($scope, $http) {
        $scope.response = {};
        $scope.save = function (answer, answerForm) {
            if(answerForm.$valid) {
                var url = 'postAnswer.php';
                $http.post(url, answer).then(
                    function success(response) {
                        $scope.response = response.data;
                    }
                );
            }
        }
    }
]);