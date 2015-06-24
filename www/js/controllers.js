angular.module('noteTaker.controllers', [])

.controller('NotesCtrl', function($scope, $filter, $stateParams, Notes) {

    var orderBy = $filter('orderBy');

    $scope.order = function(predicate, reverse) {
        $scope.notes = orderBy($scope.notes, predicate, reverse);
    };

    $scope.sortBy = "modified_date";
    $scope.reverse = true;

    $scope.order($scope.sortBy, $scope.reverse);

    $scope.sortByDate = function() {
        $scope.reverse = !$scope.reverse;
        $scope.sortBy = 'modified_date';
        $scope.order($scope.sortBy, $scope.reverse);
    }

    $scope.sortByTitle = function() {
        $scope.reverse = !$scope.reverse;
        $scope.sortBy = 'body';
        $scope.order($scope.sortBy, $scope.reverse);
    }

    $scope.search = "";

    $scope.notes = Notes.all();
})

.controller('NoteDetailCtrl', function($scope, $stateParams, $ionicActionSheet, $timeout, Notes) {
    $scope.note = Notes.get($stateParams.noteId);
    $scope.prev = function() {};
    $scope.next = function() {};
    $scope.save = function() {};
    $scope.remove = function() {
        Notes.remove($scope.note);
    };

    $scope.confirmRemove = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            destructiveText: 'Delete',
            titleText: 'Delete this note?',
            cancelText: 'Cancel',
            cancel: function() {
                console.log("cancel");
            },
            destructiveButtonClicked: function() {
                console.log("delete");
                return true;
            }
        });

    };
})

.controller('NoteAddCtrl', function($scope, $stateParams, Notes) {
    $scope.save = function() {};
    $scope.cancel = function() {};
});
