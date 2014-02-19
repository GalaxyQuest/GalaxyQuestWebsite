angular.module('galaxyApp', ['ngRoute'])
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
  .controller('MLIntroController', function($scope) {
    $scope.drawLine = function() {
      svgreg.append('line')
        .data([1])
        .attr('x1', 0)
        .attr('y1', height - 80)
        .attr('x2', width)
        .attr('y2', 130)
        .attr('stroke-width', 4)
        .attr('stroke', 'red');
    };
    $scope.clearLine = function() {
      svgreg.selectAll('line')
        .data([])
        .exit()
        .remove();
    };
    $scope.classify = function() {
      svgclass.append('line')
        .data([1])
        .attr('x1', 0)
        .attr('y1', 100)
        .attr('x2', width)
        .attr('y2', height - 50)
        .attr('stroke-width', 4)
        .attr('stroke', 'red');

      svgclass.append('text')
        .text('class 1')
        .attr('x', 30)
        .attr('y', 30)
        .attr('fill', 'red');

      svgclass.append('text')
        .text('class 2')
        .attr('x', width-100)
        .attr('y', height-50)
        .attr('fill', 'blue');

    };
    $scope.clearClassify = function() {
      svgclass.selectAll('line')
        .data([])
        .exit()
        .remove();

      svgclass.selectAll('text')
        .text('')
        .exit()
        .remove();
    };


  })
  .controller('NeuralNetController', function($scope) {
  })
  .controller('RandomForestsController', function($scope) {
  })
  .directive("randomForest", randomForestsDirective);
