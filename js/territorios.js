// Mapa completo de territórios do jogo War
const territorios = {
  // ==================== AMÉRICA DO NORTE ====================
  'Ottawa': {
    id: 'v1_107',
    continente: 'America do Norte',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Vancouver', 'Labrador', 'Nova Iorque', 'Groenlândia']
  },
  'Vancouver': {
    id: 'v1_108',
    continente: 'America do Norte',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Ottawa', 'Mackenzie', 'Alaska', 'Califórnia']
  },
  'Mackenzie': {
    id: 'v1_109',
    continente: 'America do Norte',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Vancouver', 'Alaska', 'Groenlândia']
  },
  'Alaska': {
    id: 'v1_110',
    continente: 'America do Norte',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Vancouver', 'Mackenzie', 'Vladvostok'] // Alaska conecta com Vladvostok
  },
  'Labrador': {
    id: 'v1_111',
    continente: 'America do Norte',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Ottawa', 'Nova Iorque', 'Groenlândia']
  },
  'Califórnia': {
    id: 'v1_112',
    continente: 'America do Norte',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Vancouver', 'Mexico', 'Nova Iorque']
  },
  'Mexico': {
    id: 'v1_113',
    continente: 'America do Norte',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Califórnia', 'Nova Iorque', 'Colômbia'] // Mexico conecta com Colômbia
  },
  'Nova Iorque': {
    id: 'v1_114',
    continente: 'America do Norte',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Ottawa', 'Labrador', 'Califórnia', 'Mexico']
  },
  'Groenlândia': {
    id: 'v1_115',
    continente: 'America do Norte',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Ottawa', 'Mackenzie', 'Labrador', 'Islandia'] // Groenlândia conecta com Islandia
  },

  // ==================== AMÉRICA DO SUL ====================
  'Colômbia': {
    id: 'v1_117',
    continente: 'America do Sul',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Mexico', 'Brasil', 'Chile']
  },
  'Brasil': {
    id: 'v1_118',
    continente: 'America do Sul',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Colômbia', 'Argentina', 'Chile', 'Argélia'] // Brasil conecta com Argélia
  },
  'Argentina': {
    id: 'v1_119',
    continente: 'America do Sul',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Brasil', 'Chile']
  },
  'Chile': {
    id: 'v1_120',
    continente: 'America do Sul',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Colômbia', 'Brasil', 'Argentina']
  },

  // ==================== OCEANIA ====================
  'Borneo': {
    id: 'v1_122',
    continente: 'Oceania',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Australia', 'Sumatra', 'Nova Guiné']
  },
  'Australia': {
    id: 'v1_123',
    continente: 'Oceania',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Borneo', 'Nova Guiné']
  },
  'Sumatra': {
    id: 'v1_124',
    continente: 'Oceania',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Borneo', 'Vietnã', 'India'] // Sumatra conecta com Vietnã e India
  },
  'Nova Guiné': {
    id: 'v1_125',
    continente: 'Oceania',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Borneo', 'Australia']
  },

  // ==================== ÁSIA ====================
  'Japão': {
    id: 'v1_127',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['China', 'Vladvostok']
  },
  'Oriente Medio': {
    id: 'v1_128',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Aral', 'India', 'Argélia', 'Egito', 'Sudão'] // Conecta com Argélia, Egito, Sudão
  },
  'Aral': {
    id: 'v1_129',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Oriente Medio', 'China', 'India', 'Omsk']
  },
  'China': {
    id: 'v1_130',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Japão', 'Aral', 'Vietnã', 'Vladvostok', 'Mongólia', 'Sibéria', 'Thita']
  },
  'Vietnã': {
    id: 'v1_131',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Sumatra', 'China', 'India']
  },
  'India': {
    id: 'v1_132',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Sumatra', 'Oriente Medio', 'Aral', 'Vietnã']
  },
  'Vladvostok': {
    id: 'v1_133',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Alaska', 'Japão', 'China', 'Mongólia', 'Sibéria']
  },
  'Mongólia': {
    id: 'v1_134',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['China', 'Vladvostok', 'Sibéria', 'Thita']
  },
  'Omsk': {
    id: 'v1_135',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Aral', 'Dudinka', 'Sibéria', 'Russia'] // Omsk conecta com Russia
  },
  'Dudinka': {
    id: 'v1_136',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Omsk', 'Sibéria', 'Russia'] // Dudinka conecta com Russia
  },
  'Sibéria': {
    id: 'v1_137',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['China', 'Vladvostok', 'Mongólia', 'Omsk', 'Dudinka', 'Thita']
  },
  'Thita': {
    id: 'v1_138',
    continente: 'Asia',
    proprietario: null,
    tropas: 0,
    vizinhos: ['China', 'Mongólia', 'Sibéria']
  },

  // ==================== ÁFRICA ====================
  'Madagascar': {
    id: 'v1_140',
    continente: 'Africa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Sudão', 'Congo', 'Africa do Sul']
  },
  'Argélia': {
    id: 'v1_141',
    continente: 'Africa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Brasil', 'Oriente Medio', 'Egito', 'Sudão', 'Congo']
  },
  'Egito': {
    id: 'v1_142',
    continente: 'Africa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Oriente Medio', 'Argélia', 'Sudão', 'Polonia'] // Egito conecta com Polonia
  },
  'Sudão': {
    id: 'v1_143',
    continente: 'Africa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Oriente Medio', 'Madagascar', 'Argélia', 'Egito', 'Congo', 'Africa do Sul']
  },
  'Congo': {
    id: 'v1_144',
    continente: 'Africa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Madagascar', 'Argélia', 'Sudão', 'Africa do Sul']
  },
  'Africa do Sul': {
    id: 'v1_145',
    continente: 'Africa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Madagascar', 'Sudão', 'Congo']
  },

  // ==================== EUROPA ====================
  'Islandia': {
    id: 'v1_147',
    continente: 'Europa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Groenlândia', 'Inglaterra']
  },
  'Inglaterra': {
    id: 'v1_148',
    continente: 'Europa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Islandia', 'França', 'Alemanha', 'Suecia']
  },
  'França': {
    id: 'v1_149',
    continente: 'Europa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Inglaterra', 'Alemanha', 'Polonia']
  },
  'Alemanha': {
    id: 'v1_150',
    continente: 'Europa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Inglaterra', 'França', 'Suecia', 'Polonia']
  },
  'Suecia': {
    id: 'v1_151',
    continente: 'Europa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Inglaterra', 'Alemanha', 'Polonia', 'Russia']
  },
  'Polonia': {
    id: 'v1_152',
    continente: 'Europa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Egito', 'França', 'Alemanha', 'Suecia', 'Russia']
  },
  'Russia': {
    id: 'v1_153',
    continente: 'Europa',
    proprietario: null,
    tropas: 0,
    vizinhos: ['Omsk', 'Dudinka', 'Suecia', 'Polonia']
  }
};

// Funções auxiliares para manipulação do grafo territorial

/**
 * Retorna informações de um território pelo nome
 */
function getTerritorio(nome) {
  return territorios[nome];
}

/**
 * Retorna informações de um território pelo ID (classe CSS)
 */
function getTerritorioPorId(id) {
  return Object.entries(territorios).find(([nome, data]) => data.id === id);
}

/**
 * Verifica se dois territórios são vizinhos (têm fronteira)
 */
function ehVizinho(nome1, nome2) {
  return territorios[nome1]?.vizinhos.includes(nome2) || false;
}

/**
 * Verifica se um ataque é válido
 */
function podeAtacar(nomeAtacante, nomeDefensor) {
  const atacante = territorios[nomeAtacante];
  const defensor = territorios[nomeDefensor];
  
  if (!atacante || !defensor) return false;
  
  return atacante.vizinhos.includes(nomeDefensor) &&
         atacante.proprietario !== defensor.proprietario &&
         atacante.tropas > 1;
}

/**
 * Conquista um território
 */
function conquistarTerritorio(nomeTerritorio, jogador, tropasMovidas) {
  const territorio = territorios[nomeTerritorio];
  if (territorio) {
    territorio.proprietario = jogador;
    territorio.tropas = tropasMovidas;
  }
}

/**
 * Retorna todos os territórios de um continente
 */
function getTerritoriosContinente(continente) {
  return Object.entries(territorios)
    .filter(([nome, data]) => data.continente === continente)
    .map(([nome, data]) => ({ nome, ...data }));
}

/**
 * Retorna todos os territórios de um jogador
 */
function getTerritoriosJogador(jogador) {
  return Object.entries(territorios)
    .filter(([nome, data]) => data.proprietario === jogador)
    .map(([nome, data]) => ({ nome, ...data }));
}

/**
 * Verifica se um jogador domina um continente inteiro
 */
function dominaContinente(jogador, continente) {
  const territoriosContinente = getTerritoriosContinente(continente);
  return territoriosContinente.every(t => t.proprietario === jogador);
}

/**
 * Conta o número de territórios de um jogador
 */
function contarTerritorios(jogador) {
  return Object.values(territorios)
    .filter(t => t.proprietario === jogador)
    .length;
}

/**
 * Adiciona tropas a um território
 */
function adicionarTropas(nomeTerritorio, quantidade) {
  const territorio = territorios[nomeTerritorio];
  if (territorio) {
    territorio.tropas += quantidade;
  }
}

/**
 * Move tropas entre territórios vizinhos do mesmo jogador
 */
function moverTropas(nomeOrigem, nomeDestino, quantidade) {
  const origem = territorios[nomeOrigem];
  const destino = territorios[nomeDestino];
  
  if (!origem || !destino) return false;
  if (origem.proprietario !== destino.proprietario) return false;
  if (!ehVizinho(nomeOrigem, nomeDestino)) return false;
  if (origem.tropas <= quantidade) return false; // Deve deixar pelo menos 1 tropa
  
  origem.tropas -= quantidade;
  destino.tropas += quantidade;
  return true;
}

/**
 * Reseta o jogo (limpa proprietários e tropas)
 */
function resetarJogo() {
  Object.values(territorios).forEach(territorio => {
    territorio.proprietario = null;
    territorio.tropas = 0;
  });
}

/**
 * Exporta o estado do jogo
 */
function exportarEstado() {
  return JSON.stringify(territorios, null, 2);
}

/**
 * Importa o estado do jogo
 */
function importarEstado(estadoJSON) {
  const estado = JSON.parse(estadoJSON);
  Object.keys(territorios).forEach(nome => {
    if (estado[nome]) {
      territorios[nome].proprietario = estado[nome].proprietario;
      territorios[nome].tropas = estado[nome].tropas;
    }
  });
}

// Exportar para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    territorios,
    getTerritorio,
    getTerritorioPorId,
    ehVizinho,
    podeAtacar,
    conquistarTerritorio,
    getTerritoriosContinente,
    getTerritoriosJogador,
    dominaContinente,
    contarTerritorios,
    adicionarTropas,
    moverTropas,
    resetarJogo,
    exportarEstado,
    importarEstado
  };
}
