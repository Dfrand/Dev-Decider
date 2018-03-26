module.exports = function(sequelize, DataTypes){
  var Devs = sequelize.define("Devs", {
    // id:{
    //   type:DataTypes.INTEGER,
    //   primaryKey:true,
    //   autoIncrement:true
    // },
name: DataTypes.STRING,
dessert: DataTypes.STRING,
food: DataTypes.STRING,
 snack: DataTypes.STRING,
 kitchen:DataTypes.STRING,
 drink:DataTypes.STRING,
 study:DataTypes.STRING,
 music:DataTypes.STRING,
 editor:DataTypes.STRING,
 programming:DataTypes.STRING,
 exercise:DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'),
    },
    updatedAt:{
      type:DataTypes.DATE(),
      defaultValue:sequelize.literal('CURRENT_TIMESTAMP()'),
    }
  });

  return Devs;
}
