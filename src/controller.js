angular.module("toDoList", ["LocalStorageModule"])
    .controller("toDoController", function($scope, localStorageService) {

        if (localStorageService.get("angular-todolist")) {
            $scope.todo = localStorageService.get("angular-todolist")
            console.log("TCL: $scope.todo ", $scope.todo)

        } else {
            $scope.todo = [];
        }

        $scope.newTask = {};

        $scope.addAct = function() {
            $scope.todo.push($scope.newTask);
            $scope.newTask = {};
            localStorageService.set("angular-todolist", $scope.todo);
        };

    });