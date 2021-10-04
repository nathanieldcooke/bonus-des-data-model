'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    text: DataTypes.STRING,
    categoryId: {
      type: DataTypes.INTEGER,
      // references: { model: 'Categories' }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    type: DataTypes.STRING,
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.Category, { foreignKey: 'categoryId' });
  };
  return Item;
};