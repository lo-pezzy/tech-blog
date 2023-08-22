const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Blogger extends Model { }
checkPassword = (inputPassword) => {
    return bcrypt.compareSync(inputPassword, this.password);
}
Blogger.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: async (newBloggerData) => {
                newBloggerData.password = await bcrypt.hash(newBloggerData.password, 10);
                return newBloggerData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogger'
    }
);

module.exports = Blogger;