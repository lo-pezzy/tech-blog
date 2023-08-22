const sequelize = require('../config/connection');
const { Blogger, Post, Comment } = require('../models');

const bloggerSeedData = require('./bloggerSeedData.json');
const postSeedData = require('./postSeedData.json');
const commentSeedData = require('./commentSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Blogger.bulkCreate(bloggerSeedData, {
        individualHooks: true,
        returning: true,
    });

    await Post.bulkCreate(postSeedData, {
        individualHooks: true,
        returning: true,
    });

    await Comment.bulkCreate(commentSeedData, {
        individualHooks: true,
        returning: true,
    });
    
    process.exit(0);
};

seedDatabase();