// Acesso à tabela tbl_badge_usuario do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_badge_usuario',

  findAll: (filters = {}) => db('tbl_badge_usuario').where(filters).select('*'),
  findById: (id) => db('tbl_badge_usuario').where({ id }).first(),
  create: (data) => db('tbl_badge_usuario').insert(data),
  updateById: (id, data) => db('tbl_badge_usuario').where({ id }).update(data),
  deleteById: (id) => db('tbl_badge_usuario').where({ id }).del(),
});
