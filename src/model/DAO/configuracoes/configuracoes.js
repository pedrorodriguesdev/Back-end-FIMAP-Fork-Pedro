// Acesso à tabela tbl_configuracoes do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_configuracoes',

  findAll: (filters = {}) => db('tbl_configuracoes').where(filters).select('*'),
  findById: (id) => db('tbl_configuracoes').where({ id }).first(),
  create: (data) => db('tbl_configuracoes').insert(data),
  updateById: (id, data) => db('tbl_configuracoes').where({ id }).update(data),
  deleteById: (id) => db('tbl_configuracoes').where({ id }).del(),
});
