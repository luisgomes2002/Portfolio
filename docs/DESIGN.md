# Design — Portfólio Luis Gomes

> Fonte de verdade para a interface do portfólio. Antes de criar um valor novo (cor, fonte, espaço, raio), procure aqui. Estas regras completam as regras pessoais em `~/.claude/CLAUDE.md` e nunca as contradizem.

## 1. Conceito

**Papel e tinta.** O portfólio parece um caderno técnico bem cuidado: fundo de papel claro, texto em tinta índigo (藍色, *ai-iro*) e um único acento vermelhão (朱色, *shu-iro*), a cor dos carimbos japoneses. O índigo domina; o vermelhão aparece pouco e sempre com intenção.

Princípios:

- **O projeto é o herói.** As prints dos sistemas são a principal imagem da página. Nada de ilustração genérica, foto de banco ou mockup inventado.
- **Contraste por superfície, não por efeito.** Hierarquia vem de papel × cartão × faixa escura, bordas finas e espaço. Sem gradiente, brilho ou transparência decorativa.
- **Voz própria.** Os textos são em primeira pessoa, curtos e diretos, como o Luis falaria. Detalhe concreto vale mais que adjetivo.
- **Um gesto humano por tela.** Uma nota escrita à mão, um carimbo ou um destaque em vermelhão, nunca vários disputando atenção.

---

## 2. Referência: AbacatePay

O site da [AbacatePay](https://www.abacatepay.com/) é a referência de **composição e ritmo**, não de identidade.

| Adotar | Como aparece aqui |
| --- | --- |
| Produto grande dentro de moldura arredondada logo após o título | Prints em moldura de janela (barra superior com três pontos sólidos neutros) |
| Seções em duas colunas alternando texto e imagem | Estudos de caso alternam print à esquerda e à direita |
| Uma faixa escura de largura total no meio da página | Uma faixa índigo profundo (ex.: Stack ou trabalho profissional) |
| Menu em pílula flutuante | Barra de navegação em cápsula sobre o papel |
| Palavra-chave do título destacada em cor | Uma palavra por título em vermelhão |
| Nota manuscrita perto da ação principal | Até duas notas manuscritas na página inteira |
| Cantos bem arredondados, bordas finas, quase sem sombra | Raios de 16–28px em blocos grandes, borda de 1px |
| Tom informal e direto | Textos curtos em primeira pessoa |

Não copiar: verde/limão, fonte Fustat, ilustrações em gravura, linguagem de pagamentos, depoimentos em vídeo nem a calculadora.

---

## 3. Cores

Tema claro único. Todas as cores são sólidas.

### Base

| Token | Valor | Uso |
| --- | --- | --- |
| `--paper` | `#F5F3EE` | Fundo da página. |
| `--paper-2` | `#ECE9E2` | Faixas e áreas de apoio. |
| `--card` | `#FFFFFF` | Cartões, moldura das prints, menu. |
| `--line` | `#DEDAD1` | Bordas e divisores. |
| `--line-strong` | `#C9C4B8` | Borda em hover e campos. |
| `--dots` | `#E2DED4` | Pontos do padrão de fundo do topo. |

### Tinta (texto)

| Token | Valor | Uso |
| --- | --- | --- |
| `--ink` | `#1C2B45` | Títulos e texto principal. |
| `--ink-2` | `#4B5566` | Texto secundário. |
| `--ink-3` | `#5F6673` | Metadados, legendas. |

### Acentos

| Token | Valor | Uso |
| --- | --- | --- |
| `--ai` | `#2B4A7A` | Ação primária (fundo do botão, texto branco), links. |
| `--ai-hover` | `#223D66` | Hover da ação primária. |
| `--ai-deep` | `#1A2C4A` | Faixa escura de largura total. |
| `--ai-deep-2` | `#22385C` | Cartões dentro da faixa escura. |
| `--on-deep` | `#EEF1F6` | Texto sobre a faixa escura. |
| `--on-deep-2` | `#B7C1D3` | Texto secundário sobre a faixa escura. |
| `--shu` | `#B8472A` | Acento vermelhão: palavra destacada, nota manuscrita, carimbo, número de projeto. |

O vermelhão nunca é fundo de área grande nem cor de botão. Em texto pequeno (< 18px), usar só em números e marcadores curtos. Sobre a faixa escura ele não tem contraste: ali a palavra destacada fica em `--on-deep` com sublinhado de 4px em `--shu`.

### Estados

Estados aparecem como texto ou pequeno marcador sólido, sobre fundo neutro. Nunca fundo colorido.

| Estado | Cor |
| --- | --- |
| No ar | `#37704F` |
| Em desenvolvimento | `#875C0C` |
| Estudo | `#3F6F9F` |
| Arquivado | `--ink-3` |

Contraste mínimo: 4.5:1 para texto comum e 3:1 para texto grande e marcadores.

---

## 4. Tipografia

| Papel | Fonte | Observação |
| --- | --- | --- |
| Títulos e texto | **Schibsted Grotesk** (400, 500, 700) | Grotesca editorial, com personalidade sem ser excêntrica. |
| Japonês | **Zen Kaku Gothic New** (400, 500, 700) | Entra como fallback logo após a fonte principal. |
| Notas manuscritas | **Kalam** (400) | Só nas notas. Nunca em texto corrido ou botão. |

Não usar Inter, Roboto, Arial, Space Grotesk, IBM Plex, Bricolage ou fontes do sistema como escolha principal.

| Token | Desktop | Mobile | Peso | Linha |
| --- | ---: | ---: | ---: | ---: |
| `--t-display` | `64px` | `40px` | 700 | 1.05 |
| `--t-h2` | `40px` | `30px` | 700 | 1.1 |
| `--t-h3` | `28px` | `24px` | 700 | 1.2 |
| `--t-lead` | `20px` | `18px` | 400 | 1.55 |
| `--t-body` | `17px` | `16px` | 400 | 1.6 |
| `--t-small` | `14px` | `14px` | 500 | 1.5 |
| `--t-note` | `22px` | `20px` | 400 (Kalam) | 1.2 |

Títulos usam `letter-spacing: -0.03em`. Texto corrido em até `62ch`. Nada de rótulos em maiúsculas monoespaçadas acima dos títulos.

---

## 5. Espaço, raios e sombra

Base de 4px: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

- Container: `1200px`; gutter `16px` (mobile), `24px` (tablet), `32px` (desktop).
- Seções: `96–128px` de padding vertical no desktop, `64px` no mobile.
- Raios: `--r-sm 8px` (botões pequenos, miniaturas), `--r-md 16px` (cartões), `--r-lg 28px` (moldura de print, menu, faixa escura), `999px` (botões e pílulas).
- Sombra: não usar. Sombras dependem de cor translúcida; a separação vem da borda `1px solid --line` e da troca de superfície.

---

## 6. Componentes

### Navegação
Cápsula `--card` com borda `--line`, raio `999px`, presa ao topo com margem de 16px. Nome à esquerda; links e seletor PT/EN/JP à direita. Fundo sólido, sem blur.

### Botões
- **Primário:** fundo `--ai`, texto `#FFFFFF`, pílula, altura 48px. Um por bloco.
- **Secundário:** fundo `--card`, borda `--line-strong`, texto `--ink`.
- **Link:** texto `--ai` com sublinhado de 1px e offset de 4px.
- Foco: `outline 2px solid --ai`, offset 3px.

### Moldura de print
Cartão `--card`, raio `--r-lg`, borda `--line`, padding de 10px. Barra superior de 28px com três pontos sólidos `--line-strong`. A print fica dentro com raio `--r-sm`. Clicar abre a galeria.

### Estudo de caso
Duas colunas (`7/5`) alternando lado a cada projeto. Texto: número do projeto em `--shu`, título, período e categoria, descrição, "o que eu fiz", stack em uma linha de texto e links. Sem chips de tecnologia.

### Faixa escura
Largura total, fundo `--ai-deep`, raio `--r-lg` nas bordas superiores e inferiores dentro do container largo. Usar uma vez por página.

### Nota manuscrita
Texto em Kalam, cor `--shu`, com uma seta em SVG de traço sólido. Leve rotação (−3° a 3°). No máximo duas por página.

### Carimbo (hanko)
Quadrado de 40px, borda de 2px `--shu`, raio 6px, com um ideograma (ex.: 作 para "feito por mim") em `--shu`. Decorativo, com `aria-hidden`. No máximo um por página.

---

## 7. Fundo e decoração

- Fundo da página: `--paper` sólido.
- Só no topo: padrão de pontos de 1.5px em `--dots`, grade de 24px (`radial-gradient` com cores sólidas, sem transparência). Some antes da primeira seção de projetos.
- Sem gradientes de cor, glow, partículas, desfoque ou textura granulada.

---

## 8. Movimento

- Uma única entrada no carregamento: título, texto e primeira moldura sobem 8px e aparecem em sequência (`80ms` de intervalo, `400ms` de duração). Só uma vez.
- Hover: troca de borda ou cor em `120ms`; deslocamento máximo de 2px.
- Sem animação contínua, carrossel automático ou parallax.
- Com `prefers-reduced-motion`, nada se move.

---

## 9. Texto

- Primeira pessoa, frases curtas, termos concretos ("fiz a API em Spring Boot", não "soluções robustas").
- Descrições de projeto: o que é, para quem é, e o que eu fiz.
- Todo texto visível existe em PT, EN e JP em `src/content.js`.

---

## 10. Acessibilidade

- Funciona a partir de 320px sem rolagem horizontal.
- Alvos de toque de no mínimo 44 × 44px.
- Imagens clicáveis têm nome acessível; imagens decorativas usam `alt=""`.
- Estado nunca só por cor: sempre com o texto do estado.
- Foco visível em todos os controles.

---

## 11. Evitar

- Rótulos monoespaçados em maiúsculas, nome gigante com uma palavra colorida, fileira de números, chips em todo cartão, badge com bolinha piscando.
- Seção "Vamos conversar?" genérica.
- Gradiente, glow, sombra colorida, cores com opacidade baixa como preenchimento, neon.
- Mais de uma ação primária no mesmo bloco.
- Copiar cores, fonte ou ilustrações da AbacatePay.

---

## 12. Checklist de revisão

- [ ] Só usa tokens deste documento.
- [ ] Nenhuma cor com opacidade como preenchimento; transparência só no scrim do modal.
- [ ] Vermelhão aparece com intenção e em pouca área.
- [ ] Cada projeto tem print em moldura (ou o aviso de print pendente).
- [ ] Textos em primeira pessoa e nas três línguas.
- [ ] Testado em 375px e 1280px.
- [ ] `prefers-reduced-motion` desliga a entrada.
