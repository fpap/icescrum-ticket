'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('MyCtrl1', [ function() {

} ]).controller('MyCtrl2', [ function() {

} ]).controller('LoginCtrl', [ '$scope', function($scope) {
    $scope.doLogin = function() {
        $.post("login", {
            user : $scope.user,
            password : $scope.password
        }, function(data, textStatus, jqXHR) {
            alert(JSON.stringify(data));
        }, 'json');
    };
} ]).controller('TicketsListCtrl', [ '$scope', function($scope) {
    $scope.tickets = [
        {'name': 'Testing',
        'description': 'First story.'},
        {'name': 'Hard',
        'description': 'Everything hardcoded.'}
        ];
} ]).controller('NewTicketCtrl', [ '$scope', function($scope) {
    $scope.createTicket = function() {
        $.post("newTicket", {
            name : $scope.name,
            description : $scope.description
        }, function(data, textStatus, jqXHR) {
            alert(JSON.stringify(data));
        }, 'json');
    };
    
    $scope.exampleData = {
            name: 'accounts',
            local: ['timtrueman', 'JakeHarding', 'vskarich']
          };
    
    $scope.states = ['Alabama', 'Alaska','California', 'Hawaii',  'Wisconsin', 'Wyoming'];
    

} ]);