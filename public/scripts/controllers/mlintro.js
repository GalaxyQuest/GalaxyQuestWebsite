galaxyApp.controller('MLIntroController', function($scope) {
    $scope.drawLine = function() {
      svgreg.append('line')
        .data([1])
        .attr('x1', 0)
        .attr('y1', height - 80)
        .attr('x2', width)
        .attr('y2', 110)
        .attr('stroke-width', 4)
        .attr('stroke', 'green');
    };

    $scope.predictData = function() {
      svgreg.append('circle')
        .attr({'r': 5, 'class': 'newdatapoint'})
        .attr('cx', 40)
        .attr('cy', 20)
        .attr('fill', 'green');

      svgreg.append('text')
        .attr({'class': 'newdatapoint'})
        .attr('x', 50)
        .attr('y', 23)
        .text('new data - predicted $175k');

      svgreg.append('circle')
        .attr({'r': 5, 'class': 'newdatapoint'})
        .attr('cx', 250)
        .attr('cy', 222)
        .attr('fill', 'green');

      svgreg.append('line')
        .data([1,2,3])
        .attr('x1', 0)
        .attr('y1', 222)
        .attr('x2', 250)
        .attr('y2', 222)
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', (10,10))
        .attr('stroke', 'green');

      svgreg.append('line')
        .data([1,2,3])
        .attr('x1', 250)
        .attr('y1', height-50)
        .attr('x2', 250)
        .attr('y2', 222)
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', (10,10))
        .attr('stroke', 'green');

    };

    $scope.clearLine = function() {
      svgreg.selectAll('line')
        .data([])
        .exit()
        .remove();

      svgreg.selectAll('.newdatapoint')
        .data([])
        .exit()
        .remove();

    };
    
    $scope.classify = function() {
      svgclass.append('line')
        .data([1])
        .attr('x1', 0)
        .attr('y1', 100)
        .attr('x2', width)
        .attr('y2', height - 50)
        .attr('stroke-width', 4)
        .attr('stroke', 'green');

      svgclass.append('text')
        .attr('class', 'newdatatext')
        .text('class: malignant')
        .attr('x', 30)
        .attr('y', 80)
        .attr('fill', 'red');

      svgclass.append('text')
        .attr('class', 'newdatatext')
        .text('class: benign')
        .attr('x', width-200)
        .attr('y', height-80)
        .attr('fill', 'blue');

    };

    $scope.predictClass = function() {
      svgclass.append('circle')
        .attr({'r': 5, 'class': 'newdatatext'})
        .attr('cx', 40)
        .attr('cy', 32)
        .attr('fill', 'green');

      svgclass.append('text')
        .attr('class', 'newdatatext')
        .attr('x', 50)
        .attr('y', 36)
        .text('new data - predict malignant');

      svgclass.append('circle')
        .attr({'r': 5, 'class': 'newdatatext'})
        .attr('cx', 250)
        .attr('cy', 202)
        .attr('fill', 'green');

    };

    $scope.clearClassify = function() {
      svgclass.selectAll('line')
        .data([])
        .exit()
        .remove();

      svgclass.selectAll('.newdatatext')
        .data([])
        .text('')
        .exit()
        .remove();
    };

  });
