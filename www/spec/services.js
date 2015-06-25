describe("NoteTaker: Testing Services", function() {

    beforeEach(module('noteTaker.services'));

    describe("The Note Factory:", function() {

        var Note, aNote;

        beforeEach(function() {
            inject(function($injector) {
                Note = $injector.get('Note');
                aNote = Note.new("This is body of a note");
            });
        });

        it('should contain a new method', function() {
            expect(Note.new).not.toBeUndefined();
        });

        describe('Note Model', function() {

            it('should contain a unique id', function() {
                var anotherNote = Note.new("This is another note");
                expect(aNote.id).not.toBeUndefined();
                expect(anotherNote.id).not.toBeUndefined();
                expect(aNote.id !== anotherNote.id).toBeTruthy();
            });

            it('should contain a body', function() {
                expect(aNote.body).not.toBeUndefined();
                expect(aNote.body).toEqual("This is body of a note");
            });

            it('should contain a modification date', function() {
                expect(aNote.modified_date).not.toBeUndefined();
                expect(aNote.modified_date > 0).toBeTruthy();
            });
        });
    });

    describe("The Notes Factory:", function() {

        var Notes;

        beforeEach(function() {
            inject(function($injector) {
                Notes = $injector.get('Notes');
            });
        });

        it('should contain a getAll method', function() {
            expect(Notes.getAll).not.toBeUndefined();
        });

        it('should contain a add method', function() {
            expect(Notes.add).not.toBeUndefined();
        });

        describe('Add Method', function() {
            it('should increment the number of notes', function() {
                var count = Notes.getAll().length;
                Notes.add("This is a new note 1");
                Notes.add("This is a new note 2");
                expect(Notes.getAll().length).toEqual(count + 2);
            });
        });

        it('should contain a get method', function() {
            expect(Notes.get).not.toBeUndefined();
        });

        describe('Get Method', function() {
            it('should return the correct note item', function() {
                var note = Notes.add("This is a new note");
                expect(Notes.get(note.id).id).toEqual(note.id);
                expect(Notes.get()).toBeNull();
            });
        });

        it('should contain a remove method', function() {
            expect(Notes.remove).not.toBeUndefined();
        });

        describe('Remove Method', function() {
            it('should remove the correct note item', function() {
                var note = Notes.add("This is a new note");
                var count = Notes.getAll().length;
                expect(Notes.remove(note.id)).toBeTruthy();
                expect(Notes.getAll().length).toEqual(count - 1);
            });
        });

        it('should contain a reset method', function() {
            expect(Notes.reset).not.toBeUndefined();
        });

        describe('Reset Method', function() {
            it('should return an empty array', function() {
                Notes.reset();
                expect(Notes.getAll().length).toEqual(0);
            });
        });
    });
});
