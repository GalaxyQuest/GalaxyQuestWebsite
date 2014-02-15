var margin = {top: 20, right: 20, bottom: 30, left: 40}

var width = 700 - margin.left - margin.right
var height = 450 - margin.top - margin.bottom
var radius = 3
var padding = radius*4
// var fvectors = 100
// var classes = 4

var svg = d3.select('.scatter')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
