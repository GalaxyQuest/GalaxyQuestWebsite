galaxyApp.directive('features', function(){
  var appendFeatures = function($scope, $element, $attributes){
    var svg = d3.select($element[0])
      .append('svg')
      .attr('width', 50)
      .attr('height', 50)
      .append('svg:g');
    svg.append('circle')
      .attr('r', 20)
      .attr('cx', 25)
      .attr('cy', 25)
      .attr('class', 'feature')
      .style('fill', 'white')
      .style('stroke', 'black')
      .style('stroke-width', 1);
    svg.append('image')
      .attr('height', 50)
      .attr('width', 50)
      .attr('href', '../../images/pinkie_pie.png')
  };

  var randomlySelect = function(){
    var features = d3.selectAll('.feature')[0];
    for (var i = 0; i < Math.sqrt(features.length); i++) {
      var randomIndex = Math.floor(Math.random()*features.length-1);
      var feature = d3.select(features[randomIndex]);
      feature.style('fill', 'white');
      feature.transition()
        .duration(300)
        .style('fill', 'red')
        .attr('class', 'selected');
    };
  };

  var move = function(){
    var selected = d3.selectAll('.selected')[0];
    for (var i = 0; i < selected.length; i++) {
      selected[i].transition()
        .attr()
    };
    console.log('selected: ', selected)
  }

  return {
    restrict: 'E',
    link: function($scope, $element, $attributes){
      for (var i = 0; i < 40; i++) {
        appendFeatures($scope, $element, $attributes);
      }
      setTimeout(function(){
        randomlySelect();
        setTimeout(function(){
          move();
        },1000)
      }, 1000);
    }
  };
});