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
    $scope.lessmore = function() {


        if ($("#more").html("Read more")) {
            $("#dots").css("display", "none")
            $("#moretext").css("display", "block")

        }





    };


});

app.controller('sobremiController', function($scope) {


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

var browsersArray = ["Chrome", "Firefox", "Safari", "Opera", "MSIE"];
var browser;

var ua = navigator.userAgent;

for (var index = 0; index < browsersArray.length; index++) {
    if (ua.indexOf(browsersArray[index]) > -1) {
        browser = browsersArray[index];
        break;
    }

}