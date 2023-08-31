export default (sequelize, Sequelize) => {
  return sequelize.define(
    'user',
    {
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      currentRound: {
        type: Sequelize.INTEGER,
        references: {
          model: 'round',
          key: 'id',
        },
      },
      showRoundTotals: Sequelize.BOOLEAN,
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
};
