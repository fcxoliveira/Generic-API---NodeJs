const sequelize = require('sequelize');

// class Fato extends Model {}
// Fato.init({
//   key_infracao:      Sequelize.INTEGER,
//   key_logradouro:    Sequelize.INTEGER,
//   key_bairro:        Sequelize.INTEGER,
//   key_data:          Sequelize.INTEGER,
//   key_hora:          Sequelize.INTEGER,
//   key_orgao:         Sequelize.INTEGER,
//   key_equipamento:   Sequelize.INTEGER,
//   key_infrator:      Sequelize.INTEGER,
//   valor_ponto:       Sequelize.INTEGER,
//   valor_multa:       Sequelize.DECIMAL(2, 10),
//   quantidade:        Sequelize.INTEGER
// }, { sequelize, modelName: 'fatoinfracao' });

class Fato extends Model {}
Fato.init({
  key_infracao:     { type: Sequelize.INTEGER, references: { model: diminfracao,       key: 'key_infracao' } },
  key_logradouro:   { type: Sequelize.INTEGER, references: { model: dimlogradouro,     key: 'key_logradouro' } },
  key_bairro:       { type: Sequelize.INTEGER, references: { model: dimbairro,         key: 'key_bairro' } },
  key_data:         { type: Sequelize.INTEGER, references: { model: dimdata,           key: 'key_data' } },
  key_hora:         { type: Sequelize.INTEGER, references: { model: dimhora,           key: 'key_hora' } },
  key_orgao:        { type: Sequelize.INTEGER, references: { model: dimorgao,          key: 'key_orgao' } },
  key_equipamento:  { type: Sequelize.INTEGER, references: { model: dimequipamento,    key: 'key_equipamento' } },
  key_infrator:     { type: Sequelize.INTEGER, references: { model: diminfrator,       key: 'key_infrator' } },
  valor_ponto:      Sequelize.INTEGER,
  valor_multa:      Sequelize.DECIMAL(2, 10),
  quantidade:       Sequelize.INTEGER
}, { sequelize, modelName: 'fatoinfracao' });

class Infracao extends Model {}
Infracao.init({
  key_infracao: Sequelize.INTEGER,
  infracao_id:  Sequelize.INTEGER,
  descricao:    Sequelize.STRING,
  amparo:       Sequelize.STRING,
  penalidade:   Sequelize.STRING,
  version:      Sequelize.INTEGER,
  date_from:    Sequelize.DATE,
  date_to:      Sequelize.DATE
}, { sequelize, modelName: 'diminfracao' });

class Logradouro extends Model {}
Logradouro.init({
  key_logradouro:       Sequelize.INTEGER,
  logradouro_id:        Sequelize.INTEGER,
  logradouro:           Sequelize.STRING,
  logradouro_formatado: Sequelize.STRING,
  latitude:             Sequelize.DOUBLE,
  longitude:            Sequelize.DOUBLE,
  version:              Sequelize.INTEGER,
  date_from:            Sequelize.DATE,
  date_to: Sequelize.DATE
}, { sequelize, modelName: 'dimlogradouro' });

class Bairro extends Model {}
Bairro.init({
  key_bairro:   Sequelize.INTEGER,
  bairro_id:    Sequelize.INTEGER,
  nome:         Sequelize.STRING,
  municipio:    Sequelize.STRING,
  estado:       Sequelize.STRING,
  version:      Sequelize.INTEGER,
  date_from:    Sequelize.DATE,
  date_to:      Sequelize.DATE
}, { sequelize, modelName: 'dimbairro' });

class Data extends Model {}
Data.init({
  key_data:                 Sequelize.INTEGER,
  data_id:                  Sequelize.INTEGER,
  dia_ehdiautil:            Sequelize.INTEGER,
  dia_numeronasemana:       Sequelize.INTEGER,
  dia_numeronomes:          Sequelize.INTEGER,
  dia_numeronoano:          Sequelize.INTEGER,
  semana_id:                Sequelize.INTEGER,
  semana_nome:              Sequelize.STRING,
  semana_texto:             Sequelize.STRING,
  semana_numeronoano:       Sequelize.INTEGER,
  mes_id:                   Sequelize.INTEGER,
  mes_nome:                 Sequelize.STRING,
  mes_texto:                Sequelize.STRING,
  mes_numeronoano:          Sequelize.STRING,
  trimestre_id:             Sequelize.INTEGER,
  trimestre_nome:           Sequelize.STRING,
  trimestre_texto:          Sequelize.STRING,
  trimestre_numeronoano:    Sequelize.STRING,
  semestre_id:              Sequelize.INTEGER,
  semestre_nome:            Sequelize.STRING,
  semestre_texto:           Sequelize.STRING,
  semestre_numeronoano:     Sequelize.STRING,
  ano_id:                   Sequelize.INTEGER,
  ano_nome:                 Sequelize.STRING,
  ano_texto:                Sequelize.STRING,
  version:                  Sequelize.INTEGER,
  date_from:                Sequelize.DATE,
  date_to:                  Sequelize.DATE
}, { sequelize, modelName: 'dimdata' });

class Hora extends Model {}
Hora.init({
  key_hora:     Sequelize.INTEGER,
  hora_id:      Sequelize.INTEGER,
  hora:         Sequelize.INTEGER,
  periodo:      Sequelize.STRING,
  version:      Sequelize.INTEGER,
  date_from:    Sequelize.DATE,
  date_to:      Sequelize.DATE
}, { sequelize, modelName: 'dimhora' });

class Orgao extends Model {}
Orgao.init({
  key_orgao:    Sequelize.INTEGER,
  orgao_id:     Sequelize.INTEGER,
  descricao:    Sequelize.STRING,
  version:      Sequelize.INTEGER,
  date_from:    Sequelize.DATE,
  date_to:      Sequelize.DATE
}, { sequelize, modelName: 'dimorgao' });

class Equipamento extends Model {}
Equiamento.init({
  key_equipamento:  Sequelize.INTEGER,
  equipamento_id:   Sequelize.INTEGER,
  descricao:        Sequelize.STRING,
  version:          Sequelize.INTEGER,
  date_from:        Sequelize.DATE,
  date_to:          Sequelize.DATE
}, { sequelize, modelName: 'dimequipamento' });

class Infrator extends Model {}
Infrator.init({
  key_infrator:     Sequelize.INTEGER,
  infrator_id:      Sequelize.INTEGER,
  descricao:        Sequelize.STRING,
  version:          Sequelize.INTEGER,
  date_from:        Sequelize.DATE,
  date_to:          Sequelize.DATE
}, { sequelize, modelName: 'diminfrator' });
// 