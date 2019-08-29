var app = angular.module("evalApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "content.html",
            controller: "contentController"
        })
        .when("/about", {
            templateUrl: "sobremi.html",
            controller: "sobremiController"
        });

});

app.controller('contentController', function($scope) {
    $scope.message = 'AngularJS: Exito cargando el html principal';

});

app.controller('sobremiController', function($scope) {
    $scope.message = 'AngularJS: Exito cargando el About';

    $("#accordion").accordion();
});


$('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,

});



$(".goUp").click(function(e) {
    e.preventDefault();

    $("html,body").animate({
        scrollTop: 0
    }, 500);
});

$(".modais").iziModal({ history: false, fullscreen: true, loop: true, zindex: 99999, focusInput: true });