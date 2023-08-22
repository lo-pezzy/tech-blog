const Post = require('./Post');
const Blogger = require('./Blogger');
const Comment = require('./Comment');

Blogger.hasMany(Post, {
    foreignKey: 'blogger_id'
});

Post.belongsTo(Blogger, {
    foreignKey: 'blogger_id'
});

Comment.belongsTo(Blogger, {
    foreignKey: 'blogger_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Blogger.hasMany(Comment, {
    foreignKey: 'blogger_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { Blogger, Post, Comment };