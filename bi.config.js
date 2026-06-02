module.exports = {
  cliente: {
    nome: "Azul Mob",
    subdomain: "azulmob-bi",
    coolify_app_uuid: "ps8kq8nqn6jjuq2j6uhzhze0",
    cor_primaria: "#3b82f6",
  },

  fontes: {
    adapters: ["omie"],
    omie: {
      bancos_ok: [],
      categorias_excluir: [
        "0.01", "0.01.01", "0.01.02",           // Transferência entre contas
        "1.02.95", "1.04.71", "1.04.91",         // Resgate CDB / Automático / Invest Fácil
        "1.02.98",                                // Rendimento de Aplicação
        "1.03.91", "1.03.93",                     // Resgate Consórcio / Devolução empréstimo
        "1.04.03", "1.04.85", "1.04.98",         // Empréstimos Bancários (entrada)
        "1.04.89", "1.04.80",                     // Transferência Auto CX AVAL / Estorno juros
        "2.04.34", "2.04.70", "2.04.47",         // Empréstimo / Devolução / Laudo Transferência
        "2.05.01", "2.05.03",                     // Juros / Pagamento Empréstimos
        "2.05.86", "2.05.90",                     // Rendimento Aplicação / Aplicação CDB
        "2.05.92", "2.05.93", "2.05.94",         // Estorno Transf / Empréstimo CG / Bancário
        "2.07",                                   // Investimento
      ],
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
      relatorio_ia: "active",
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
