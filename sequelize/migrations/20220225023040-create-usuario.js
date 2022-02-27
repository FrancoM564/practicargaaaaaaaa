'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
//creamos nueva columna en tabla proyecto (idusuario)
    await queryInterface.addColumn("Proyecto","idusuario",{
      type: sequelize.INTEGER,
      allowNull : true
    })

    //agregar el constraint foreign key
    await queryInterface.addConstraint("Proyecto",{
      type:"FOREIGN KEY",
      fields:["idusuario"],
      references:{
        table:"Usuario",
        field:"id"
      },
      name:"FK_PROYECTO_USUARIO"
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Proyecto","FK_PROYECTO_USUARIO")
    await queryInterface.removeColumn("Proyecto","idusuario")
    await queryInterface.dropTable('Usuario');
  }
};