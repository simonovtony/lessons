var questApp = angular.module('questApp', []);

questApp.config(function () {

});

questApp.run(function () {
    // навигация по странице
    var elem = angular.element(document.querySelector('body'));
    console.log(elem);

    var quest = angular.element(document.querySelector('.quest'));
    var questHeader = quest.find('h3');
    console.log(questHeader.text());

    var quests = angular.element(document.querySelectorAll('.quest'));
    console.log(quests);

    // манипуляция элементами
    var quest = angular.element(document.querySelector('.quest'));
    var questHeader = quest.find('h3');
    questHeader.text('Заголовок h3');
    questHeader.css('color', 'blue');
    questHeader.addClass('header');

    // Создание и удаление элементов
    var quest = angular.element(document.querySelector('.quest'));
    var questHeader = quest.find('h3');
    questHeader.remove();

    var newDiv = angular.element('<div>');
    newDiv.css('width', '80px');
    newDiv.css('height', '50px');
    newDiv.css('background-color', 'blue');
    quest.append(newDiv);

    // Регистрация событий
    newDiv.on('click', function (e) {
        var w = parseInt(newDiv.css('width')) + 10;
        newDiv.css('width', w + 'px');
    });
});