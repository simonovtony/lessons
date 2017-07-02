questApp.controller('AnswerController',
    function AnswerController ($rootScope, $scope, $log) {
        $scope.save = function (answer, answerForm) {
            if (answerForm.$valid) {
                alert(answer.author + ', ваш ответ сохранен');
                $log.log(answer);
                //$rootScope.$emit('save', answer);
                $scope.$parent.$broadcast('save', answer);
            }
            if (answerForm.$invalid) {
                alert('Введите все поля по формату');
            }
        };
    }
);