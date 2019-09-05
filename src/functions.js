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
    $("#moretext").css("display", "none");
    var moreToggler = true;
    $scope.lessmore = function() {

        if (moreToggler) {
            $("#dots").css("display", "none");
            $("#moretext").css("display", "block");
            $("#readMore").text("Read less");
            moreToggler = false;

        } else {
            $("#dots").css("display", "inline-block");
            $("#moretext").css("display", "none");
            $("#readMore").text("Read more");
            moreToggler = true;
        }
    };

});


app.controller('sobremiController', function($scope) {

    $("#accordion").accordion();
});

//window height - device height

var deviceHeight = document.body.clientHeight;




$('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    adaptiveHeight: true

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
        console.log("TCL: browser", browser, "................. ",
            "Continue working of next generation imgs for each browser")

        break;
    }

}