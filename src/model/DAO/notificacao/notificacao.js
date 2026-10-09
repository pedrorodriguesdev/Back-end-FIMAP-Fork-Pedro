// Acesso à tabela tbl_notificacao do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_notificacao',

  findAll: (filters = {}) => db('tbl_notificacao').where(filters).select('*'),
  findById: (id) => db('tbl_notificacao').where({ id }).first(),
  create: (data) => db('tbl_notificacao').insert(data),
  updateById: (id, data) => db('tbl_notificacao').where({ id }).update(data),
  deleteById: (id) => db('tbl_notificacao').where({ id }).del(),
});
