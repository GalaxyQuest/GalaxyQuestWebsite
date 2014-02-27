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
      "249346" : {
        "class1" : [0.00877,0.95999,0.03124]
      },
      "169366" : {
        "class1" : [0.688,0.104,0.208]
      },
      "164564" : {
        "class1" : [0.0515,0.948191,0]
      },
      "144088" : {
        "class1" : [0.777609,0.202072,0.020319]
      },
      "391697" : {
        "class1" : [0,1,0]
      },
      "174959" :{
        "class1" : [0.037044,0.962956,0]
      },
      "465317" : {
        "class1" : [0.187099,0.803696,0.009205]
      },
      "438436" :{
        "class1" : [0,1,0]
      },
      "231148" :{
        "class1" : [0.207901,0.739151,0.052948]
      },
      "490026" : {
        "class1" : [0,0.991827,0.008173]
      },
      "100335" : {
        "class1" : [0.165002,0.834998,0]
      }
    };
    var galaxyKeys = Object.keys(galaxies);
    var currentIndex = Math.floor(Math.random()*galaxyKeys.length);

    var setGalaxy = function(){
      $scope.galaxyID=galaxyKeys[currentIndex];
      $scope.class1_1=(galaxies[galaxyKeys[currentIndex]].class1[0]*100).toFixed(2);
      $scope.class1_2=(galaxies[galaxyKeys[currentIndex]].class1[1]*100).toFixed(2);
      $scope.class1_3=(galaxies[galaxyKeys[currentIndex]].class1[2]*100).toFixed(2);
      $scope.galaxyURL="../../images/"+galaxyKeys[currentIndex]+".jpg";
    };

    setGalaxy();

    $scope.nextGalaxy= function(){
      if(currentIndex < galaxyKeys.length-1){
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


