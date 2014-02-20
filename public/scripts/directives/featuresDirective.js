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
      .style('stroke-width', 1)
      .style("fill", "url(#image)");
  };

  var randomlySelect = function(){
    var features = d3.selectAll('.feature')[0];
    console.log(Math.sqrt(features.length))
    for (var i = 0; i < Math.sqrt(features.length); i++) {
      var randomIndex = Math.floor(Math.random()*features.length-1);
      var feature = d3.select(features[randomIndex]);
      feature.style('fill', 'white')
              .transition().duration(300)
              .style('fill', 'red')
              .attr('class', 'selected');
    };
  };

  var move = function(){
    var selected = d3.selectAll('.selected')[0];
    selected.transition()
      .attr()
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