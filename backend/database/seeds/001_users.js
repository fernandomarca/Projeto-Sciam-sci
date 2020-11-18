
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Fernando' },
        { username: 'Rhayza' },
        { username: 'Lailla' },
        { username: 'Rodrigo' },
        { username: 'Erotides' },
        { username: 'Jovilde' },
      ]);
    });
};
