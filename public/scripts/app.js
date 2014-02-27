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
      .when('/team', {
        templateUrl: '../views/partials/team.html',
        controller: 'ContactController'
      })      
      .when('/theGuide', {
        templateUrl: '../views/partials/theguide.html',
        //controller: do we need something here?
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
      .when('/randomForestsVisual', {
        templateUrl: '../views/partials/randomForestsVisual.html',
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
    var galaxies = {
      "100380" : {
        "class1" : [0.03,0.97,0]
      },
      "100335" : {
        "class1" : [0.165002,0.834998,0]
      }
    };
    //test commit with global config changes
    var keys = Object.keys(galaxies);
    var currentIndex = Math.floor(Math.random()*keys.length);

    var setGalaxy = function(){
      $scope.galaxyID=keys[currentIndex];
      $scope.class1_1=(galaxies[keys[currentIndex]].class1[0]*100).toFixed(2);
      $scope.class1_2=(galaxies[keys[currentIndex]].class1[1]*100).toFixed(2);
      $scope.class1_3=(galaxies[keys[currentIndex]].class1[2]*100).toFixed(2);
      $scope.galaxyURL="../../images/"+keys[currentIndex]+".jpg";
    };

    setGalaxy();
    $scope.nextGalaxy= function(){
      if(currentIndex < keys.length-1){
        currentIndex++ ;
      }else{
        currentIndex = 0;
      }
      setGalaxy();
    };
  })
  .controller('AlgorithmsController', function($scope) {
  })
  .controller('ScatterController', function($scope) {
  })
  .controller('NeuralNetController', function($scope) {
  })
  .controller('RandomForestsController', function($scope) {
  });


