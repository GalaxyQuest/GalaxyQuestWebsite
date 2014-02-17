
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Galaxy Quest' });
};

// exports.scatter = function(req, res) {
//   // var name = req.params.name;
//   // console.log('working');
//   // console.log('rendering views/partials/' + name);
//   // res.render('views/partials/' + name);
//   res.render('../public/views/scatter');

// }