galaxyApp.controller('GuideController', function($scope, $routeParams){
 var templates = {
    'undefined' : '../../views/partials/intro.html',
    'gettingStarted' : '../../views/partials/intro.html',
    'discoveringOurData' : '../../views/partials/dataExplanation.html',
    'plottingOurCourse' : '../../views/partials/randomForests.html',
    'testFlight' : '../../views/partials/iterationAndTesting.html',
    'optimizing' : '../../views/partials/improvingYourAlgorithm.html'
  };
  $scope.subPage = templates[$routeParams.subpage];
});