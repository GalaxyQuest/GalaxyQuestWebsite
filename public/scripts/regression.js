var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width-50]);

var y = d3.scale.linear()
    .range([height-50, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

// var line = d3.svg.line()
//     .x(function(d) { return x(d.sqfeet); })
//     .y(function(d) { return y(d.price); });

var svgreg = d3.select(".regression").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data = [
{sqfeet: 0,  price: 0, x:width-50, y:height-50},
{sqfeet: 400,  price: 100, x: 80, y: height-100},
{sqfeet: 600, price: 140, x: 120, y: height-120},
{sqfeet: 650, price: 210, x: 125, y: height-200},
{sqfeet: 850, price: 230, x: 175, y: height-220},
{sqfeet: 950, price: 280, x: 200, y: height-260},
{sqfeet: 1400, price: 270, x: 250, y: height-250},
{sqfeet: 1700, price: 285, x: 280, y: height-280},
{sqfeet: 1800, price: 320, x: 320, y: height-260},
{sqfeet: 1950, price: 300, x: 350, y: height-300},
{sqfeet: 2200, price: 280, x: 400, y: height-280},
{sqfeet: 2500,  price: 400, x: 420, y: height-300},
];


svgreg.selectAll('circle')
  .data(data)
  .enter().append('circle')
  .attr({'r': 3, 'class': 'datapoint'})
  .attr('cx', function(d) { return d.x; })
  .attr('cy', function(d) { return d.y; })

// x.domain(d3.extent(data, function(d) { return d.sqfeet; }));
// y.domain(d3.extent(data, function(d) { return d.price; }));

  x.domain([0,2500]);
  y.domain([0,400]);

svgreg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + 400 + ")")
    .call(xAxis)
  .append('text')
    .attr("x", width-66)
    .attr("dx", ".71em")
    .style("text-anchor", "end")
    .text('Square Feet');

svgreg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Price ($1000s)");


svgreg.append('circle')
  .attr({'r': 3, 'class': 'datapoint'})
  .attr('cx', 40)
  .attr('cy', 10)
  .attr('fill', 'black');


svgreg.append('text')
  .attr('x', 50)
  .attr('y', 12)
  .text('observed data');


// //original
// var margin = {top: 20, right: 20, bottom: 30, left: 40}

// var width = 500 - margin.left - margin.right
// var height = 500 - margin.top - margin.bottom
// var radius = 3
// var padding = radius*4

// var svgreg = d3.select('.regression')
//   .append('svg')
//   .attr('width', width)
//   .attr('height', height);

// svgreg.append('circle')
//   .attr({'r': radius, 'class': 'datapoint'})
//   .attr('cx', 100)
//   .attr('cy', height - 100);

// svgreg.append('circle')
//   .attr({'r': radius, 'class': 'datapoint'})
//   .attr('cx', 120)
//   .attr('cy', height - 120);

// svgreg.append('circle')
//   .attr({'r': radius, 'class': 'datapoint'})
//   .attr('cx', 125)
//   .attr('cy', height - 200);

// svgreg.append('circle')
//   .attr({'r': radius, 'class': 'datapoint'})
//   .attr('cx', 175)
//   .attr('cy', height - 220);

// svgreg.append('circle')
//   .attr({'r': radius, 'class': 'datapoint'})
//   .attr('cx', 200)
//   .attr('cy', height - 260);

// svgreg.append('circle')
//   .attr({'r': radius, 'class': 'datapoint'})
//   .attr('cx', 250)
//   .attr('cy', height - 250);

// svgreg.append('circle')
//   .attr({'r': radius, 'class': 'datapoint'})
//   .attr('cx', 280)
//   .attr('cy', height - 280);

// svgreg.append('circle')
//   .attr({'r': radius, 'class': 'datapoint'})
//   .attr('cx', 320)
//   .attr('cy', height - 260);

// svgreg.append('circle')
//   .attr({'r': radius, 'class': 'datapoint'})
//   .attr('cx', 350)
//   .attr('cy', height - 300);

// svgreg.append('circle')
//   .attr({'r': radius, 'class': 'datapoint'})
//   .attr('cx', 400)
//   .attr('cy', height - 280);

// svgreg.append('circle')
//   .attr({'r': radius, 'class': 'datapoint'})
//   .attr('cx', 420)
//   .attr('cy', height - 300);

