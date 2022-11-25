

const User = require('./Person');

const Post = require('./New');

const Comment = require('./Scribble');

//this relates things together

Person.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Scribble.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Scribble.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
Person.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
New.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = {Person, New, Scribble};