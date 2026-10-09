// Acesso à tabela tbl_simulacao_amortizacao do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_simulacao_amortizacao',

  findAll: (filters = {}) => db('tbl_simulacao_amortizacao').where(filters).select('*'),
  findById: (id) => db('tbl_simulacao_amortizacao').where({ id }).first(),
  create: (data) => db('tbl_simulacao_amortizacao').insert(data),
  updateById: (id, data) => db('tbl_simulacao_amortizacao').where({ id }).update(data),
  deleteById: (id) => db('tbl_simulacao_amortizacao').where({ id }).del(),
});
