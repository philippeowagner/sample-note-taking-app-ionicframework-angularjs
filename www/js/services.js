angular.module('noteTaker.services', [])

.factory('Notes', function() {

    var notes = [{
        id: 0,
        body: 'A note 1\n content long long text F',
        modified_date: "6/24/2015"
    }, {
        id: 1,
        body: 'C note 2\n content',
        modified_date: "6/23/2015"
    }, {
        id: 2,
        body: 'B note 3\n content',
        modified_date: "6/22/2015"
    }, {
        id: 3,
        body: 'E note 4\n content',
        modified_date: "6/21/2015"
    }, {
        id: 4,
        body: 'D note 5\n content',
        modified_date: "6/20/2015"
    }];

    // for (var i = 0; i < 1000; i++) {
    //     notes.push({
    //         id: i,
    //         body: 'A note ' + i + ' \n content',
    //         modified_date: "6/23/2015"
    //     });
    // }

    return {
        all: function() {
            return notes;
        },
        remove: function(note) {
            notes.splice(notes.indexOf(note), 1);
        },
        get: function(noteId) {
            for (var i = 0; i < notes.length; i++) {
                if (notes[i].id === parseInt(noteId)) {
                    return notes[i];
                }
            }
            return null;
        }
    };
});
