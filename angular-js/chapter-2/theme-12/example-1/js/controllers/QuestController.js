//var questApp = angular.module('questApp');

questApp.controller('QuestController',
    function QuestController ($rootScope, $scope, $log) {
        $scope.question = {
            text: 'Какой js-фреймворк лучше использовать?',
            author: 'Иван Иванов',
            date: '20/10/2013',
            answers: [
                {
                    text: 'AngularJS!',
                    author: 'Вова Сидоров',
                    date: '20/10/2013',
                    rate: 2,
                }, {
                    text: 'AngularJS лучше всех',
                    author: 'Олег Кузнецов',
                    date: '21/10/2013',
                    rate: 3,
                }, {
                    text: 'фигасе квестшен',
                    author: 'Неизвестный',
                    date: '22/10/2013',
                    rate: 0,
                }
            ],
        };
        $scope.voteUp = function (answer) {
            answer.rate++;
        };
        $scope.voteDown = function (answer) {
            answer.rate--;
        };

        //$rootScope.$on('save', function (event, data) {
        //    $log.log(data);
        //    $scope.question.answers.push({
        //        text: data.text,
        //        author: data.author,
        //        date: data.date,
        //        rate: 0,
        //    });
        //});

        $scope.$on('save', function (event, data) {
            $log.log(data);
            $scope.question.answers.push({
                text: data.text,
                author: data.author,
                date: data.date,
                rate: 0,
            });
        });
    }
);