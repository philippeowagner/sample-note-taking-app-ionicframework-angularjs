describe('NoteTaker: Testing Controllers', function() {

    beforeEach(function() {
        module('ionic');
        module('noteTaker.services');
        module('noteTaker.controllers');
    });

    describe('Notes Controller', function() {

        var $scope, NotesCtrl, Notes;

        beforeEach(function() {
            inject(function($controller, $rootScope) {
                $scope = $rootScope.$new();
                NotesCtrl = $controller('NotesCtrl', {
                    $scope: $scope
                });
            });
            inject(function($injector) {
                Notes = $injector.get('Notes');
            });
        });

        describe('Initialization', function() {
            it('should get the all the notes', function() {
                expect($scope.notes).toBe(Notes.getAll());
            });
        });

        describe('Notes Ordering', function() {
            it('should order notes by modification date', function() {
                $scope.notes = [
                    { modified_date: 1 },
                    { modified_date: 3 },
                    { modified_date: 2 },
                    { modified_date: 2 }
                ];
                $scope.sortByDate();
                console.log($scope.notes);
                var result = true;
                for (var i = 0; i < $scope.notes.length-1; i++) {
                    if ($scope.notes[i].modified_date > $scope.notes[i+1].modified_date) {
                        result = false;
                        break;
                    }
                }
                expect(result).toBeTruthy();
            });
            it('should order notes by first line', function() {
                $scope.notes = [
                    { body: "Samsung" },
                    { body: "Nokia" },
                    { body: "Nikkon" },
                    { body: "Apple" }
                ];
                $scope.sortByTitle();
                console.log($scope.notes);
                var result = true;
                for (var i = 0; i < $scope.notes.length-1; i++) {
                    if ($scope.notes[i].body.substr(0,1) > $scope.notes[i+1].body.substr(0,1)) {
                        result = false;
                        break;
                    }
                }
                expect(result).toBeTruthy();
            });
        });


    });
});
