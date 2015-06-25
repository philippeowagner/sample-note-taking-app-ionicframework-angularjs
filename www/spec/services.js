describe("NoteTaker: Testing Services", function() {

    describe("The Note Object:", function() {

        var Note, aNote;

        beforeEach(function() {

            module('noteTaker.services');

            inject(function ($injector) {
                Note = $injector.get('Note');
                aNote = Note.new("This is body of a note");
            });
        });

        it('should contain a new method', function () {
            expect(Note.new).not.toBeUndefined();
        });

        it('should contain a unique id', function () {
            var anotherNote = Note.new("This is another note");
            expect(aNote.id).not.toBeUndefined();
            expect(anotherNote.id).not.toBeUndefined();
            expect(aNote.id !== anotherNote.id).toBeTruthy();
        });

        it('should contain a body', function () {
            expect(aNote.body).not.toBeUndefined();
            expect(aNote.body).toEqual("This is body of a note");
        });

        it('should contain a modification Date', function () {
            expect(aNote.modified_date).not.toBeUndefined();
            expect(aNote.modified_date > 0).toBeTruthy();
        });

    });

    describe("The Notes Collection:", function() {

        var Notes;

        beforeEach(function() {

            module('noteTaker.services');

            inject(function ($injector) {
                Notes = $injector.get('Notes');
            });
        });

        it('should contain a getAll method', function () {
            expect(Notes.getAll).not.toBeUndefined();
        });

        it('should contain a add method', function () {
            expect(Notes.add).not.toBeUndefined();
        });

        it('should increase number of notes after calling add method', function () {
            var count = Notes.getAll().length;
            Notes.add("This is a new note 1");
            Notes.add("This is a new note 2");
            expect(Notes.getAll().length).toEqual(count+2);
        });

        it('should contain a get method', function () {
            expect(Notes.get).not.toBeUndefined();
        });

        it('should contain a return the correct note item', function () {
            var note = Notes.add("This is a new note");
            expect(Notes.get(note.id).id).toEqual(note.id);
            expect(Notes.get()).toBeNull();
        });

        it('should contain a remove method', function () {
            expect(Notes.remove).not.toBeUndefined();
        });

        it('should remove the correct note item', function () {
            var note = Notes.add("This is a new note");
            var count = Notes.getAll().length;
            expect(Notes.remove(note.id)).toBeTruthy();
            expect(Notes.getAll().length).toEqual(count-1);
        });

        it('should contain a reset method', function () {
            expect(Notes.reset).not.toBeUndefined();
        });

        it('should be empty after calling reset method', function () {
            Notes.reset();
            expect(Notes.getAll().length).toEqual(0);
        });

    });
});
