'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
  $routeProvider.when('/ticketsList', {templateUrl: 'partials/ticketsList.html', controller: 'TicketsListCtrl'});
  $routeProvider.when('/newTicket', {templateUrl: 'partials/newTicket.html', controller: 'NewTicketCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
