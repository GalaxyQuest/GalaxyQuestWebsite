var galaxyApp = angular.module('galaxyApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '../views/mainindex.html',
        controller: 'FrameController'
      })
      .when('/galaxyclass', {
        templateUrl: '../views/partials/galaxyclass.html',
        controller: 'GalaxyClassController'
      })
      .when('/contact', {
        templateUrl: '../views/partials/contact.html',
        controller: 'ContactController'
      })      
      .when('/algorithms', {
        templateUrl: '../views/partials/algorithms.html',
        controller: 'AlgorithmsController'
      })      
      .when('/scatter', {
        templateUrl: '../views/partials/scatter.html',
        controller: 'ScatterController'
      })
      .when('/mlintro', {
        templateUrl: '../views/partials/mlintro.html',
        controller: 'MLIntroController'
      })
      .when('/randomForests', {
        templateUrl: '../views/partials/randomForests.html',
        controller: 'RandomForestsController'
      })
      .when('/neuralNet', {
        templateUrl: '../views/partials/neuralnet.html',
        controller: 'NeuralNetController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('FrameController', function($scope) {
  })
  .controller('MainController', function($scope) {
  })
  .controller('ContactController', function($scope) {
  })
  .controller('GalaxyClassController', function($scope) {
  })
  .controller('AlgorithmsController', function($scope) {
  })
  .controller('ScatterController', function($scope) {
  })
  .controller('NeuralNetController', function($scope) {
  })
  .controller('RandomForestsController', function($scope) {
  })
  // .directive("randomForest", randomForestsDirective)
  .directive('features', function(){
    return {
      restrict: 'E',
      link: function($scope, $element, $attributes){
              var svg = d3.select($element[0]).append('svg')
                .attr('width', 50)
                .attr('height', 50)
                .style("border","1px solid black")
                .append('svg:g')
            }
  }
});
