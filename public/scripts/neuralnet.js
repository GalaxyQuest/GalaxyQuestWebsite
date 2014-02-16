var margin = {top: 20, right: 20, bottom: 30, left: 40}

var width = 700 - margin.left - margin.right
var height = 450 - margin.top - margin.bottom
var radius = 20
var padding = radius*4
// var fvectors = 100
// var classes = 4

var svg = d3.select('.neuralnet')
  .append('svg')
  .attr('width', width)
  .attr('height', height)

svg.selectAll('circle')
  .data([1,2,3])
  .enter().append('circle')
  .attr({'r': radius, 'class': 'input'})
  .attr('cx', function() { return 100;})
  .attr('cy', function() { return d3.select(this).data()[0]*100;})

svg.selectAll('circle')
  .data([1,2,3,4,5,6,7])
  .enter().append('circle')
  .attr({'r': radius, 'class': 'input'})
  .attr('cx', function() {return 250;})
  .attr('cy', function() { return (d3.select(this).data()[0]-3.5)*100;})

svg.selectAll('circle')
  .data([1,2,3,4,5,6,7,8,9])
  .enter().append('circle')
  .attr({'r': radius, 'class': 'input'})
  .attr('cx', function() {return 400;})
  .attr('cy', function() { return (d3.select(this).data()[0]-6.5)*100;})