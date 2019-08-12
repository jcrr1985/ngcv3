var app = angular.module("evalApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "content.html",
            controller: "contentController"
        })
        .when("/about", {
            templateUrl: "sobremi.html",
            controller: "sobremiController"
        })

});

app.controller('contentController', function($scope) {
    $scope.message = 'AngularJS: Exito cargando el html principal';
});

app.controller('sobremiController', function($scope) {
    $scope.message = 'AngularJS: Exito cargando el About';
    $("#accordion").accordion();
});


$(document).ready(function() {

    date = new Date();

    var d = moment(date).format("dddd,MMMM Do YYYY")
    var startdate = moment().subtract(1, "days").format("dddd,MMMM Do YYYY");

    $(".postDate").html(d) // declarative with AngularJS -- Apply controller.
    $(".postDate2").html(startdate) // declarative with AngularJS -- Apply controller.

    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        responsive: true,
    });


    $("#change-theme div").click(function() {

        if (this.id == "to-green") {
            $("#themes").attr("href", "css/green.css")
        } else if (this.id == "to-blue") {
            $("#themes").attr("href", "css/blue.css")
        } else if (this.id == "to-red") {
            $("#themes").attr("href", "css/red.css")
        }

    })

    $(".goUp").click(function(e) {
        e.preventDefault();

        $("html,body").animate({
            scrollTop: 0
        }, 500)
    })

    $(".modais").iziModal({ history: false, fullscreen: true, loop: true, zindex: 99999, focusInput: true });

})