'use strict';
module.exports = (sequelize, DataTypes) => {
  const todoCard = sequelize.define('TodoCard', {
    title: DataTypes.STRING,
    contents: DataTypes.STRING,
    createDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
		type: DataTypes.STRING
  }, {});
  todoCard.associate = function(models) {
    // associations can be defined here
  };
  return todoCard;
};
