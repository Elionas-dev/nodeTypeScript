import {Error, Sequelize} from 'sequelize';

export const sequelize = new Sequelize('dvdrental', 'postgres', 'esFernando@3021', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
      freezeTableName: true,
      timestamps: false
    },
    logging: false
  });


export default () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Conexão com o postgres realizada com sucesso');
    })
    .catch((error: Error) => {
      console.log(`Conexão com o postgres não foi bem sucedida: ${error}`);
    });
};
