angular.module('hellosolarsystem')
    .service('PeopleService', function ($http) {
        var service = {
            getAllPeople: function () {
                return $http.get('data/people.json', { catch: true })
                    .then(function (resp) {
                        return resp.data;
                    });
            },
            getPerson: function (id) {
                function personMatchesParam(person) {
                    return person.id === id
                }

                return service.getAllPeople().then(function (people) {
                    return people.find(personMatchesParam);
                });
            }
        };
        return service;
    });