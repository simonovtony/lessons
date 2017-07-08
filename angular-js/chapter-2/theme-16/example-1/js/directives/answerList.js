
questApp.directive('answerList', function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs['answerList']];
        },
        restrict: 'A',
        template:
        '<div class="answers">' +
            '<div ng-repeat="answer in data.answers" class="answer">' +
                '<div class="vote">' +
                    '<a class="vote-up" ng-click="voteUp(answer)"></a>' +
                    '<span class="rate">{{ answer.rate }}</span>' +
                    '<a class="vote-down" ng-click="voteDown(answer)"></a>' +
                '</div>' +
                '<b>{{ answer.text}}</b>' +
                '<p>{{ answer.author }}</p>' +
                '<p><i>{{ answer.author }}</i></p>' +
            '</div>' +
        '</div>'
    }
});