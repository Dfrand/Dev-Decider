module.exports = function(sequelize, DataTypes){
  var Answer = sequelize.define("Answer", {
    answer_numeric: DataTypes.STRING,
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
