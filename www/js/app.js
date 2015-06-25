(function() {
    'use strict';

    angular.module('noteTaker', ['ionic', 'noteTaker.filters', 'noteTaker.controllers', 'noteTaker.services'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
            }
            if (window.StatusBar) {
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('notes', {
                url: '/notes',
                templateUrl: 'templates/tab-notes.html',
                controller: 'NotesCtrl'
            })
            .state('notes-detail', {
                url: '/notes/:noteId',
                templateUrl: 'templates/note-detail.html',
                controller: 'NoteDetailCtrl'
            })
            .state('notes-add', {
                url: '/notes/add',
                templateUrl: 'templates/note-add.html',
                controller: 'NoteAddCtrl'
            })
            .state('notes-about', {
                url: '/notes/about',
                templateUrl: 'templates/about.html'
            });

        $urlRouterProvider.otherwise('/notes');

    });
})();
