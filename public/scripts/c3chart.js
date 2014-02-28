var chart = c3.generate({
  bindto: '.errorChart',
  data: {
    columns: [
      ['Root Mean Squared Error', 0.1672, 0.1413, 0.1269, 0.1247, 0.1248, 0.1233]
    ], 
    type: 'area-spline'
  },
  axis: {
    x: {
      type: 'categorized',
      categories: ['1st Iteration', '2nd Iteration', '3rd Iteration', '4th Iteration', '5th Iteration', '6th Iteration']
    }
  }
});