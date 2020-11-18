const knex = require('knex');

exports.up = knex => {
    return knex.schema.createTable('projects', table => {
        table.increments('id')
        table.text('title').unique().notNullable()

        //relacionamento; 1 para muitos
        table.integer('user_id')
            .references('users.id')
            .notNullable()
            .onDelete('CASCADE')


        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    });
}

exports.down = knex => {
    return knex.schema.dropTable('projects');
}