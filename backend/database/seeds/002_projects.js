
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          user_id: 1,
          title: 'Meu projeto teste 1'
        },
        {
          user_id: 2,
          title: 'projeto rhayza id:2'
        },
      ]);
    });
};
