module.exports = function(sequelize, DataTypes){
  var Answer = sequelize.define("Answer", {
    // id:{
    //   type:DataTypes.INTEGER,
    //   primaryKey:true,
    //   autoIncrement:true
    // },
name: DataTypes.STRING,
dessert: DataTypes.STRING,
food: DataTypes.STRING,
 snack: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'),
    },
    updatedAt:{
      type:DataTypes.DATE(),
      defaultValue:sequelize.literal('CURRENT_TIMESTAMP()'),
    }
  });

  return Answer;
}
