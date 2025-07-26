import dbConfig from '../config/db.config.js';
import Sequelize from 'sequelize';
import TutorialModel from './tutorial.model.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: false, // Desativa logs de SQL (opcional)
});

const db = {
  Sequelize,
  sequelize,
  tutorials: TutorialModel(sequelize, Sequelize),
};

export default db;
