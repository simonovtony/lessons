var myApp = angular.module('hellosolarsystem', ['ui.router']);

myApp.config(function ($stateProvider) {
    var states = [
        {
            name: 'hello',
            url: '/hello',
            component: 'hello'
        }, {
            name: 'about',
            url: '/about',
            component: 'about'
        }, {
            name: 'people',
            url: '/people',
            component: 'people',
            resolve: {
                people: function (PeopleService) {
                    return PeopleService.getAllPeople();
                }
            }
        }, {
            name: 'person',
            url: '/people/{personId}',
            component: 'person',
            resolve: {
                person: function (PeopleService, $transition$) {
                    return PeopleService.getPerson($transition$.params().personId);
                }
            }
        }
    ];

    states.forEach(function (state) {
        $stateProvider.state(state);
    });
});

myApp.run(function ($http) {
    $http.get('data/people.json', { cache: true });
});

myApp.run(function ($uiRouter) {
    var StateTree = window['ui-router-visualizer'].StateTree;
    var el = StateTree.create($uiRouter, null, { height: 100, width: 300 });
    el.className = 'statevis';
});