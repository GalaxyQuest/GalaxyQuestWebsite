var margin = {top: 20, right: 20, bottom: 30, left: 40}

var width = 500 - margin.left - margin.right
var height = 500 - margin.top - margin.bottom
var radius = 3
var padding = radius*4
var fvectors = 100
var classes = 4

var svgreg = d3.select('.regression')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// var x = d3.scale.linear()
//   .domain([0, 2500])
//   .range([0, width-100]);

// var y = d3.scale.linear()
//   .domain([0, 400])
//   .range([height-100, 0]);

// var xAxis = d3.svg.axis()
//   .scale(x)
//   .orient('bottom');

// var yAxis = d3.svg.axis()
//   .scale(y)
//   .orient('left');

svgreg.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 100)
  .attr('cy', height - 100);

svgreg.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 120)
  .attr('cy', height - 120);

svgreg.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 125)
  .attr('cy', height - 200);

svgreg.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 175)
  .attr('cy', height - 220);

svgreg.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 200)
  .attr('cy', height - 260);

svgreg.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 250)
  .attr('cy', height - 250);

svgreg.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 280)
  .attr('cy', height - 280);

svgreg.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 320)
  .attr('cy', height - 260);

svgreg.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 350)
  .attr('cy', height - 300);

svgreg.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 400)
  .attr('cy', height - 280);

svgreg.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 420)
  .attr('cy', height - 300);

