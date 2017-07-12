questApp.controller('QuestionController',
    function QuestionController($scope, dataService) {
        $scope.question = {};

        var promiseObj = dataService.getData();

        promiseObj.then(function (value) {
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

function q() {
    function asyncGreet(name) {
        var deferred = $q.defer();

        setTimeout(function() {
            deferred.notify('About to greet ' + name + '.');

            if (okToGreet(name)) {
                deferred.resolve('Hello, ' + name + '!');
            } else {
                deferred.reject('Greeting ' + name + ' is not allowed.');
            }
        }, 1000);

        return deferred.promise;
    }

    var promise = asyncGreet('Robin Hood');
    promise.then(
        function success(greeting) {
            alert('Success: ' + greeting);
        },
        function error(reason) {
            alert('Failed: ' + reason);
        },
        function notify(update) {
            alert('Got notification: ' + update);
        }
    );
}