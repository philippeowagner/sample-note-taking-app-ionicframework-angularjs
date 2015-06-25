(function() {
    'use strict';

    angular.module('noteTaker.controllers', [])

    .controller('NotesCtrl', ["$scope", "$filter", "$stateParams", "Notes", function($scope, $filter, $stateParams, Notes) {

        var orderBy = $filter('orderBy');

        $scope.order = function(sortBy, reverse) {
            $scope.notes = orderBy($scope.notes, sortBy, reverse);
        };

        function sortNote(sortBy, reverse) {
            $scope.sortBy = sortBy;
            $scope.reverse = reverse;
            $scope.order($scope.sortBy, $scope.reverse);
        }

        sortNote("modified_date", true);

        $scope.sortByDate = function() {
            sortNote("modified_date", !$scope.reverse);
        };

        $scope.sortByTitle = function() {
            sortNote("body", !$scope.reverse);
        };

        $scope.search = "";

        $scope.notes = Notes.getAll();
    }])

    .controller('NoteDetailCtrl', ["$scope", "$stateParams", "$ionicActionSheet", "$timeout", "Notes", function($scope, $stateParams, $ionicActionSheet, $timeout, Notes) {
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
    }])

    .controller('NoteAddCtrl', ["$scope", "$stateParams", "Notes", function($scope, $stateParams, Notes) {
        $scope.save = function() {};
        $scope.cancel = function() {};
    }]);
})();
