// Acesso à tabela tbl_mensagem do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_mensagem',

  findAll: (filters = {}) => db('tbl_mensagem').where(filters).select('*'),
  findById: (id) => db('tbl_mensagem').where({ id }).first(),
  create: (data) => db('tbl_mensagem').insert(data),
  updateById: (id, data) => db('tbl_mensagem').where({ id }).update(data),
  deleteById: (id) => db('tbl_mensagem').where({ id }).del(),
});
