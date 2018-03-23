module.exports = function(sequelize, DataTypes){
  var Answer = sequelize.define("Answer", {
    0: DataTypes.STRING,
    1: DataTypes.STRING,
  2: DataTypes.STRING,
    3: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'),
    },
    updatedAt:{
      type:DataTypes.DATE(),
      defaultValue:sequelize.literal('CURRENT_TIMESTAMP()'),
    }
  });
  Answer.associate = function(models){
    Answer.belongsTo(models.User,{
      foreignKey:{
        allowNull:false
      }
    });
  };
  return Answer;
}
