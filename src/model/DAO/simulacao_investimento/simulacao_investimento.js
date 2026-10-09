// Acesso à tabela tbl_simulacao_investimento do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_simulacao_investimento',

  findAll: (filters = {}) => db('tbl_simulacao_investimento').where(filters).select('*'),
  findById: (id) => db('tbl_simulacao_investimento').where({ id }).first(),
  create: (data) => db('tbl_simulacao_investimento').insert(data),
  updateById: (id, data) => db('tbl_simulacao_investimento').where({ id }).update(data),
  deleteById: (id) => db('tbl_simulacao_investimento').where({ id }).del(),
});
