# Estratégia de Produção e Comercial — Puro Marqueti

> Documento interno de planejamento técnico e comercial.
> Baseado no aprendizado do projeto Dom Vinho (set/2026 – out/2026).

---

## 1. Ambiente Técnico

| Componente | Função | Status |
|---|---|---|
| WSL 2 (Ubuntu) | Camada Linux sobre Windows | ✅ Ativo |
| Git + GitHub | Versionamento e backup remoto | ✅ Ativo |
| Node.js + npm | Build e CLI | ✅ Ativo |
| Cloudflare Workers | Hospedagem edge, SSL automático | ✅ Ativo |
| Wrangler CLI | Deploy automatizado | ✅ Ativo |
| HTML/CSS/JS puro | Stack dos cardápios | ✅ Padrão |
| SvelteKit | Reservado para projetos maiores | ⏸️ Standby |

**Nota técnica:** os cardápios digitais usam HTML/CSS/JS puro + Worker estático.
SvelteKit entra apenas em projetos com painel, banco de dados ou carrinho complexo.

---

## 2. Capacidade Real de Produção

### 2.1 Diagnóstico do Projeto Dom Vinho (real)

| Etapa | Tempo real |
|---|---|
| Briefing e alinhamento | 2–3 dias |
| Design e identidade | 2–3 dias |
| Desenvolvimento | 3–4 dias |
| Ajustes e revisões | 5–8 dias |
| Materiais físicos | 3–4 dias |
| **Total** | **~20 dias corridos** |

**Causas do tempo estendido:**
- Cliente não entregava conteúdo a tempo
- Alterações de preço recorrentes
- Escopo elástico, sem contrato fechado

### 2.2 Projeção por Cenário

| Cenário | Exigência | Sites/mês | Faturamento estimado |
|---|---|---|---|
| Reativo | Cliente desorganizado, escopo aberto | 1–2 | R$ 1.000–2.000 |
| Organizado | Briefing completo antes de começar | 3–4 | R$ 3.000–6.000 |
| Parametrizado | Template + checklist fixo | 5–6 | R$ 5.000–7.500 |
| Industrial | 100% template, conteúdo pronto | 8–10 | R$ 8.000–12.000 |

**Conclusão:** a diferença entre cenários não é técnica — é de processo.

---

## 3. Gargalos Reais

### 3.1 Coleta de Conteúdo
- 80% do atraso vem do cliente
- Lista de produtos, fotos e preços chegam tarde

**Solução:** só iniciar após 100% do material recebido. Contrato prevê isso.

### 3.2 Escopo Elástico
- Cada "adiciona isso" vira hora não paga

**Solução:** escopo fechado no contrato. Duas rodadas de ajuste inclusas.
A terceira é orçamento à parte.

### 3.3 Ausência de Pagamento Antecipado

**Solução:**
- 50% na assinatura do contrato
- 30% na entrega do preview
- 20% na publicação
- Sem sinal, sem início

---

## 4. Precificação

| Serviço | Faixa de mercado | Preço praticado |
|---|---|---|
| Cardápio digital V1 | R$ 1.500–3.000 | **R$ 1.800** |
| Cardápio + carta de vinhos | R$ 3.000–6.000 | **R$ 3.500** |
| Loja digital (Etapa 2) | R$ 4.000–8.000 | **R$ 3.500** |
| Manutenção mensal | R$ 200–500 | **R$ 300/mês** |
| QR Code + material físico | R$ 200–400 | Incluso no pacote |

**Regra mínima:** nunca cobrar menos de R$ 1.800 por cardápio com QR físico.

---

## 5. Contrato Mínimo Viável

Toda proposta futura precisa conter:

1. **Escopo detalhado** — o que está incluso e o que não está
2. **Prazo com marcos** — entrega de conteúdo, preview, publicação
3. **Duas rodadas de ajuste** — excedente é orçamento
4. **Pagamento parcelado** — 50/30/20
5. **Suporte definido** — prazo, escopo e limites
6. **Domínio no nome do cliente** — desde o dia zero
7. **Cláusula de rescisão** — atrasos do cliente estendem o prazo

---

## 6. Plano de Ação — 30 dias

| Semana | Entrega |
|---|---|
| 1 | Template parametrizado (config.json com nome, cores, produtos) |
| 2 | Formulário de briefing padronizado |
| 3 | Contrato modelo + proposta comercial |
| 4 | Fechar 2–3 clientes no novo modelo |

---

## 7. Conclusão

O ambiente técnico está pronto. A stack é adequada. O gargalo real nunca foi
produção — foi processo comercial e contratual.

O projeto Dom Vinho evidenciou, na prática:

- Fechar escopo **antes** de iniciar
- Cobrar 50% **antes** da primeira linha de código
- Limitar rodadas de ajuste
- Não entregar fora do escopo sem orçamento
- Documentar cada etapa

**Meta operacional:** 4 a 6 projetos/mês, com margem e previsibilidade.

---

*Documento vivo. Atualizar a cada projeto concluído.*
