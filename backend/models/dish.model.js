module.exports = (sequelize, Sequelize) => {
    const Dish = sequelize.define("dish", {
      name: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      }
    });  

    Dish.associate = function(models) {      
      Dish.belongsTo(models.restaurant, {
        onDelete: "CASCADE",
        foreignKey: 'restaurantId',
        as: 'restaurants',
      })
    }

    return Dish;
  };