galaxyApp.directive('features', function(){
  var appendFeatures = function($scope, $element, $attributes){
    var svg = d3.select($element[0])
      .append('svg')
      .attr('width', 50)
      .attr('height', 50);
    svg.append('circle')
      .attr('r', 20)
      .attr('cx', 25)
      .attr('cy', 25)
      .attr('class', 'feature')
      .style('fill', 'transparent')
      .style('stroke', 'black')
      .style('stroke-width', 1);
  };

  var randomlySelect = function(){
    var features = d3.selectAll('.feature')[0];
    for (var i = 0; i < Math.sqrt(features.length); i++) {
      var randomIndex = Math.floor(Math.random()*features.length-1);
      d3.select(features[randomIndex])
        .style('fill', 'red');
    };
  }
  return {
    restrict: 'E',
    link: function($scope, $element, $attributes){
      for (var i = 0; i < 50; i++) {
        appendFeatures($scope, $element, $attributes);
      }
      setTimeout(2000,randomlySelect());
    }
  }
});