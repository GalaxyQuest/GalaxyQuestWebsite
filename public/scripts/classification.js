var margin = {top: 20, right: 20, bottom: 30, left: 40}

var width = 500 - margin.left - margin.right
var height = 500 - margin.top - margin.bottom
var radius = 3
var padding = radius*4
var fvectors = 100
var classes = 4

var svgclass = d3.select('.classification')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 20)
  .attr('cy', height - 50)
  .style('fill', 'blue');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 70)
  .attr('cy', height - 120)
  .style('fill', 'blue');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 70)
  .attr('cy', height - 250)
  .style('fill', 'blue');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 95)
  .attr('cy', height - 70)
  .style('fill', 'blue');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 105)
  .attr('cy', height - 260)
  .style('fill', 'blue');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 115)
  .attr('cy', height - 140)
  .style('fill', 'blue');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 120)
  .attr('cy', height - 180)
  .style('fill', 'blue');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 180)
  .attr('cy', height - 70)
  .style('fill', 'blue');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 220)
  .attr('cy', height - 130)
  .style('fill', 'blue');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 300)
  .attr('cy', height - 250)
  .style('fill', 'blue');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 310)
  .attr('cy', 250)
  .style('fill', 'blue');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 200)
  .attr('cy', height - 170)
  .style('fill', 'red');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 200)
  .attr('cy', 200)
  .style('fill', 'red');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 210)
  .attr('cy', 210)
  .style('fill', 'red');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 220)
  .attr('cy', 170)
  .style('fill', 'red');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 250)
  .attr('cy', 230)
  .style('fill', 'red');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 270)
  .attr('cy', 240)
  .style('fill', 'red');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 300)
  .attr('cy', 200)
  .style('fill', 'red');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 275)
  .attr('cy', 240)
  .style('fill', 'red');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 400)
  .attr('cy', 300)
  .style('fill', 'red');

svgclass.append('circle')
  .attr({'r': radius, 'class': 'datapoint'})
  .attr('cx', 350)
  .attr('cy', 240)
  .style('fill', 'red');

