galaxyApp.directive('features', function(){
  var appendFeatures = function($scope, $element, $attributes){
    var svg = d3.select($element[0])
      .append('svg')
      .attr('width', 50)
      .attr('height', 50)
      .attr('class', 'feature')
      .append('svg:g');
    svg.append('circle')
      .attr('r', 20)
      .attr('cx', 25)
      .attr('cy', 25)
      .style('fill', 'white')
      .style('stroke', 'black')
      .style('stroke-width', 1);
  };

  var select = function(){
    setTimeout(function(){
      var features = d3.selectAll('.feature circle')[0];
      var selected = [];
      for (var i = 0; i < Math.sqrt(features.length); i++) {
        var randomIndex = Math.floor(Math.random()*features.length-1);
        var feature = d3.select(features[randomIndex]);
        selected.push(feature);
        // feature.style('fill', 'white');
        feature.transition()
          .duration(500)
          .style('fill', 'red')
      }
      deselect(selected);
    }
    ,1000);
  };

  var deselect = function(features){
    setTimeout(function(){
      for (var i = 0; i < features.length; i++) {
        var feature = features[i];
        // feature.style('fill', 'white');
        feature.transition()
          .duration(500)
          .style('fill', 'white')
      }
      select();
    }
    ,2000);
  };

  var move = function(){
    var selected = d3.selectAll('.selected')[0];
    for (var i = 0; i < selected.length; i++) {
      selected[i].transition()
        .attr()
    }
    console.log('selected: ', selected)
  };

  return {
    restrict: 'E',
    link: function($scope, $element, $attributes){
      for (var i = 0; i < 40; i++) {
        appendFeatures($scope, $element, $attributes);
      }
      select();
    }
  };
});