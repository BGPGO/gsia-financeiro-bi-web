module.exports = {
  cliente: {
    nome: "Azul Mob",
    subdomain: "azulmob-bi",
    coolify_app_uuid: "usy43v8ncaj6zlw1q9mnf94u",
    cor_primaria: "#3b82f6",
  },

  fontes: {
    adapters: ["omie"],
    omie: {
      bancos_ok: [],
    },
    drive: {
      base_path: "G:/Meu Drive/BGP/CLIENTES/BI/Azul Mob",
    },
  },

  pages: {
    geral: {
      overview: "active",
      receita: "active",
      despesa: "active",
      fluxo: "active",
      tesouraria: "active",
      comparativo: "active",
      relatorio_ia: "hidden",
      valuation: "hidden",
    },
    outros: {
      fluxo_projetado: "hidden",
      indicators: "hidden",
      faturamento_produto: "hidden",
      cmv: "active",
      curva_abc: "hidden",
      marketing: "hidden",
      hierarquia: "hidden",
      detalhado: "hidden",
      profunda_cliente: "hidden",
      crm: "hidden",
    },
  },

  meta: {
    ano_corrente: 2026,
    metas_crm: { mes: 1_000_000, ano: 12_000_000 },
    valuation_premissas: { wacc: 25, growth_year2: 20, growth_year3: 20, ipca: 4.5, perpetuity_growth: 10 },
  },

  template: {
    version_when_created: "1.1.0",
    version_last_synced: "1.1.0",
  },
};
