//var questApp = angular.module('questApp');

questApp.filter('formatText', function () {
    return function (text) {
        if(text.indexOf('фигасе') !== -1) {
            //return '***';
            return text.replace(/фигасе*/g, '***');
        } else {
            return 'text';
        }
    };
});