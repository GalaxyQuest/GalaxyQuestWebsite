var margin = {top: 20, right: 20, bottom: 30, left: 40}

var width = 700 - margin.left - margin.right
var height = 450 - margin.top - margin.bottom
var radius = 3
var padding = radius*4
var fvectors = 100
var classes = 4

var svg = d3.select('.scatter')
  .append('svg')
  .attr('width', width)
  .attr('height', height)

var dataq1 = d3.range(fvectors/classes+10)
var dataq2 = d3.range(fvectors/classes+1,fvectors/classes*2+10)
var dataq3 = d3.range(fvectors/classes*2+11,fvectors/classes*4)
// var dataq4 = d3.range(fvectors/classes)
// console.log(dataq1.concat(dataq2))

svg.selectAll('circle')
  .data(dataq1)
  .enter().append('circle')
  .attr({'r': radius, 'class': 'fvector class1'})
  .attr('cx', function() { return Math.random()*(width/3)-30})
  .attr('cy', function() { return Math.random()*(height) + height/2})

svg.selectAll('circle')
  .data(dataq1.concat(dataq2))
  .enter().append('circle')
  .attr({'r': radius, 'class': 'fvector class2'})
  .attr('cx', function() { return Math.random()*((width-width/3)-(width/3)-80) + width/3})
  .attr('cy', function() { return Math.random()*(height/2) - 100})

svg.selectAll('circle')
  .data((dataq1.concat(dataq2)).concat(dataq3))
  .enter().append('circle')
  .attr({'r': radius, 'class': 'fvector class3'})
  .attr('cx', function() { return Math.random()*(width-(width/2)-80) + width/2})
  .attr('cy', function() { return Math.random()*height + 60})

var currentIndex = 0;
var firstline = {x1: 0, y1: height/2-100, x2: width, y2: height/2+100}
var secondline = {x1: width/3, y1: height, x2: (width/3)*2, y2: 0}
var thirdline = {x1: 0, y1: (height/3)*2, x2: (width/5)*4, y2: 0}
var fourthline = {x1: 0, y1: (height/3), x2: (width/2), y2: height}
var finalline = {x1: width/5, y1: 0, x2: width/2, y2: height}
var alllines = [secondline, firstline, thirdline, fourthline, finalline]

svg.selectAll('line')
  .data([1])
  .enter().append('line')
  .attr('x1', alllines[currentIndex].x1)
  .attr('y1', alllines[currentIndex].y1)
  .attr('x2', alllines[currentIndex].x2)
  .attr('y2', alllines[currentIndex].y2)
  .attr('stroke-width', 4)
  .attr('stroke-dasharray', (20,20))
  .attr('stroke', 'black');

var timer = setInterval(function() {
  currentIndex++;
  if (currentIndex === alllines.length) {
    // currentIndex = 0;
    clearTimer();
  } else {  
    svg.selectAll('line')
      .transition()
        .attr('x1', alllines[currentIndex].x1)
        .attr('y1', alllines[currentIndex].y1)
        .attr('x2', alllines[currentIndex].x2)
        .attr('y2', alllines[currentIndex].y2);
  } 
}, 1000);

var nextline = {x1: 0, y1: (height/3)*2, x2: (width/5)*4, y2: 0}
var finalshortline = {x1: width/3-10, y1: (height/3)+30, x2: (width/5)*4, y2: 0}

var clearTimer = function() {
  clearInterval(timer);
  svg.selectAll('line')
    .attr('stroke-dasharray', (0,0))
    .attr('stroke', 'red')
    .data([1,2])
    .enter().append('line')
      .attr('class', 'change')
      .attr('x1', nextline.x1)
      .attr('y1', nextline.y1)
      .attr('x2', nextline.x2)
      .attr('y2', nextline.y2)
      .attr('stroke-width', 4)
      .attr('stroke-dasharray', (20,20))
      .attr('stroke', 'black');
  setTimeout(function() {
    svg.select('.change')
      .attr('x1', finalshortline.x1)
      .attr('y1', finalshortline.y1)
      .attr('x2', finalshortline.x2)
      .attr('y2', finalshortline.y2)
      .attr('stroke-width', 4)
      .attr('stroke-dasharray', (0,0))
      .attr('stroke', 'red');

  },1000);
};


