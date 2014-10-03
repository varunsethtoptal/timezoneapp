var socketio = require('socket.io');

var entries = require('../routes/entries');
var Entry = require('./entry');
var User = require('./user');

exports.listen = function(server) {
  io = socketio.listen(server);

  io.sockets.on('connection', function(socket) {
      
      socket.on('GetPost', function() {
       /* var username = entries.getUserName();
        Entry.getRange(0, -1, username, function(err, entries) {
          if (err) return err;
          socket.emit('Posts', {Entries: entries});
        });*/
      });
      
      socket.on('RegisterForm', function(Post) {

        console.log('In Registration Form');

        User.getByName(Post.username, function(err, user){
          if (err) return next(err);

          if (user.id) {
            res.error("Username already taken!");
            res.redirect('back');
          } else {
            user = new User({
                  name: data.name,
                  pass: data.pass
                  });

              user.save(function(err){
                  if (err) return next(err);
                  console.log('Username assigned');
                  //req.session.uid = user.id;
                  //res.redirect('/');
              });
          }
        });

      });

      socket.on('AddPost', function(Post) {
          /*var username = entries.getUserName();
          var entry = new Entry({
            "username": username,
            "timezonename": Post.timezonename,
            "cityname": Post.cityname,
            "utcoffset": Post.utcoffset
          });
          entry.save(function(err) {
            if (err) return next(err);
            socket.emit('PostAdded', { success: true , entry: entry});
          });*/
      });    
  });

}