var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width-50]);

var y = d3.scale.linear()
    .range([height-50, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .tickValues([])
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .tickValues([])
    .orient("left");

var svgclass = d3.select(".classification").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var datablue = [
// {x: width-50, y: height-50},
{x: 20, y: height-50},
{x: 70, y: height-120},
{x: 70, y: height-250},
{x: 95, y: height-70},
{x: 105, y: height-260},
{x: 115, y: height-140},
{x: 120, y: height-180},
{x: 180, y: height-70},
{x: 220, y: height-130},
{x: 300, y: height-250},
{x: 310, y: height-250}
];

var datared = [
// {x: width-50, y: height-50},
{x: 200, y: height-170},
{x: 200, y: 200},
{x: 210, y: 210},
{x: 220, y: 170},
{x: 250, y: 230},
{x: 270, y: 240},
{x: 300, y: 200},
{x: 275, y: 240},
{x: 400, y: 300},
{x: 350, y: 240}
];


svgclass.selectAll('circle')
  .data(datablue)
  .enter().append('circle')
  .attr({'r': 3, 'class': 'datapoint'})
  .attr('cx', function(d) { return d.x; })
  .attr('cy', function(d) { return d.y; })
  .style('fill', 'blue');

svgclass.selectAll('circle')
  .data(datablue.concat(datared))
  .enter().append('circle')
  .attr({'r': 3, 'class': 'datapoint'})
  .attr('cx', function(d) { return d.x; })
  .attr('cy', function(d) { return d.y; })
  .style('fill', 'red');


svgclass.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + 400 + ")")
    .call(xAxis)
  .append('text')
    .attr("x", width-66)
    .attr("dx", ".71em")
    .style("text-anchor", "end")
    .text('Tumor Size');

svgclass.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Age");


svgclass.append('circle')
  .attr({'r': 3, 'class': 'datapoint'})
  .attr('cx', 40)
  .attr('cy', 10)
  .attr('fill', 'blue');

svgclass.append('circle')
  .attr({'r': 3, 'class': 'datapoint'})
  .attr('cx', 40)
  .attr('cy', 20)
  .attr('fill', 'red');

svgclass.append('text')
  .attr('x', 50)
  .attr('y', 12)
  .text('observed benign tumor');

svgclass.append('text')
  .attr('x', 50)
  .attr('y', 23)
  .text('observed malignant tumor');

