questApp.directive('answerList', function () {
    return function (scope, element, attrs) {
        var data = scope[attrs['answerList']];
        if(angular.isArray(data.answers)) {
            var divElem = angular.element('<div>').addClass('answers');
            element.append(divElem);
            for(var i = 0; i < data.answers.length; i++) {
                var answerElem = angular.element('<div>').addClass('answer');
                var voteElem = angular.element('<div>').addClass('vote');

                var voteUpElem = angular.element('<a>').addClass('vote-up')
                voteUpElem.on('click', (function (answer) {
                    return function () {
                        angular.element(this).next().text(++answer.rate);
                    }
                })(data.answers[i]));
                voteElem.append(voteUpElem);
                var rateElem = angular.element('<span>').addClass('rate').text(data.answers[i].rate);
                voteElem.append(rateElem);
                var voteDownElem = angular.element('<a>').addClass('vote-down').attr('ng-click', 'voteDown(answer)');
                voteDownElem.on('click', (function (answer) {
                    return function () {
                        angular.element(this).parent().children().eq(1).text(--answer.rate);
                    }
                })(data.answers[i]));
                voteElem.append(voteDownElem);
                answerElem.append(voteElem);

                answerElem.append(angular.element('<b>').text(data.answers[i].text));
                answerElem.append(angular.element('<p>').text(data.answers[i].author));
                var iElem = angular.element('<i>').text(data.answers[i].date);
                var dateElem = angular.element('<p>').append(iElem);
                answerElem.append(dateElem);
                divElem.append(answerElem);
            }
        }
    };
});