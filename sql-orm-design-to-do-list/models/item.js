'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    text: DataTypes.STRING,
    categoryId: {
      type: DataTypes.INTEGER,
      // references: { model: 'Categories' }
    },
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.Category, { foreignKey: 'categoryId' });
  };
  return Item;
};