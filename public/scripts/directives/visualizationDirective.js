var viz = {};
galaxyApp.directive('visualization', function($scope, $element, $attributes){
  viz = d3.selection($element[0])
    .append('svg')
});