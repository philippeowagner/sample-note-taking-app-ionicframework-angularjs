(function() {
    'use strict';

    angular.module('noteTaker.controllers', [])

    .controller('NotesCtrl', ["$scope", "$filter", "Notes",
        function($scope, $filter, Notes) {

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
        }
    ])

    .controller('NoteDetailCtrl', ["$scope", "$state", "$stateParams", "$ionicActionSheet", "Notes",
        function($scope, $state, $stateParams, $ionicActionSheet, Notes) {

            $scope.note = Notes.get($stateParams.noteId);
            $scope.prev = Notes.getPrev($stateParams.noteId);
            $scope.next = Notes.getNext($stateParams.noteId);

            $scope.update = function () {
                if ($scope.note.body.trim() !== "") {
                    Notes.save();
                } else {
                    Notes.remove($scope.note.id)
                }
                $state.go("notes");
            };

            $scope.confirmRemove = function() {
                var hideSheet = $ionicActionSheet.show({
                    destructiveText: 'Delete',
                    titleText: 'Delete this note?',
                    cancelText: 'Cancel',
                    cancel: function() {
                        console.log("cancel");
                    },
                    destructiveButtonClicked: function() {
                        Notes.remove($stateParams.noteId);
                        $state.go("notes");
                        return true;
                    }
                });
            };

            $scope.go = function(direction) {
                console.log(direction);
                var note = $scope[direction];
                if (note !== null) {
                     $state.go("notes-detail", { noteId: note.id });
                }
            };
        }
    ])

    .controller('NoteAddCtrl', ["$scope", "Notes",
        function($scope, Notes) {

            $scope.note = {
                body: ""
            };

            $scope.save = function() {
                var body = $scope.note.body.trim();
                if (body !== "") {
                    Notes.add(body);
                }
                $scope.note.body = "";
            };

            $scope.cancel = function() {
                $scope.note.body = "";
            };
        }
    ]);
})();
