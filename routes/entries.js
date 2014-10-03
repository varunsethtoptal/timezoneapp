

exports.list = function(req, res, next){
  console.log('Hello World !');
  res.render('main', { title: 'Main Form' });
};
