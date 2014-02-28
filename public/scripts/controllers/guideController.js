galaxyApp.controller('GuideController', function($scope, $routeParams){
 var templates = {
    'undefined' : '../../views/partials/mlintro.html',
    'theBlueprint' : '../../views/partials/mlintro.html',
    'discoveringOurData' : '../../views/partials/dataExplanation.html',
    'researchingOurPath' : '../../views/partials/randomForests.html',
    'testFlight' : '../../views/partials/iterationAndTesting.html',
    'optimizing' : '../../views/partials/improvingYourAlgorithm.html'
  };
  $scope.subPage = templates[$routeParams.subpage];
});