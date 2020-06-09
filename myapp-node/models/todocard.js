'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoCard = sequelize.define('TodoCard', {
    title: DataTypes.STRING,
    contents: DataTypes.STRING,
    createDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
    type: DataTypes.STRING,
    updateDate: DataTypes.DATE,
    depth: DataTypes.INTEGER,
  }, {});
  TodoCard.associate = function(models) {
    // associations can be defined here
  };
  return TodoCard;
};
