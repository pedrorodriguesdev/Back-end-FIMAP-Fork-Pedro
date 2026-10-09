// Acesso à tabela tbl_curtida_comentario do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_curtida_comentario',

  findAll: (filters = {}) => db('tbl_curtida_comentario').where(filters).select('*'),
  findById: (id) => db('tbl_curtida_comentario').where({ id }).first(),
  create: (data) => db('tbl_curtida_comentario').insert(data),
  updateById: (id, data) => db('tbl_curtida_comentario').where({ id }).update(data),
  deleteById: (id) => db('tbl_curtida_comentario').where({ id }).del(),
});
