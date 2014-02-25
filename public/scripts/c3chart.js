var chart = c3.generate({
  bindto: '.errorChart',
  data: {
    columns: [
      ['Real Means Squared Error', 0.16, 0.14, 0.132, 0.13]
    ]
  },
  axis: {
    x: {
      type: 'categorized',
      categories: ['1st Iteration', '2nd Iteration', '3rd Iteration', '4th Iteration']
    }
  }
});