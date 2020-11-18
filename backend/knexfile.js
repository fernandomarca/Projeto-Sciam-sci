const path = require('path');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database', 'database.sqlite')
    },
    migrations: {
      directory: path.resolve(__dirname, 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'database', 'seeds')
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'sqlite3',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
