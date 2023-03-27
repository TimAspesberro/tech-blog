const User = require('./User');
const Post = require('./Project');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


module.exports = { User, Post };
