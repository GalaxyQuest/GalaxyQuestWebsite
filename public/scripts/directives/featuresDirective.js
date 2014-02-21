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
      .style('opacity', '0.2')
      .style("fill", "url(#image)");
  };

  var randomlySelect = function(){
    var features = d3.selectAll('.feature')[0];
    for (var i = 0; i < Math.sqrt(features.length); i++) {
      var randomIndex = Math.floor(Math.random()*features.length-1);
      var feature = d3.select(features[randomIndex]);
      feature.transition().duration(1000)
              .style("opacity", "1")
              .style('stroke', 'blue')
              .style('stroke-width', 2)
              .attr('class', 'selected')
              .transition().duration(1000)
                .style("stroke", "black")
                .style("stroke-width", "1")
                .style("opacity", "0.2");
    };
  };

  var move = function(){
    var selected = d3.selectAll('.selected')[0];
    for(var i = 0; i < selected.length; i++) {
      var circle = d3.select(selected[i]);
    }
  }

  return {
    restrict: 'E',
    link: function($scope, $element, $attributes){
      for (var i = 0; i < 10; i++) {
        appendFeatures($scope, $element, $attributes);
      }
      setInterval(function(){
          randomlySelect();
        setTimeout(function(){
          move();
        },1000)
      }, 2000);
    }
  };
});