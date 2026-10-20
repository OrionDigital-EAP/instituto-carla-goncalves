# Site — Instituto Carla Gonçalves (versão de avaliação)

Site institucional estático do **Instituto Carla Gonçalves**, preparado para publicar uma
**versão provisória de avaliação** na Vercel e enviar o link à Dra. Carla.

> Projeto independente. **Não** deve ser misturado com o site da Orion Digital.

---

## Tecnologia

- **HTML/CSS/JavaScript estático** — sem framework, sem etapa de build.
- Fontes: **Cormorant Garamond** e **Manrope** (carregadas do Google Fonts).
- Imagens e ícones locais na pasta `/_blob`.
- Analytics: **Google Analytics 4** preparado, porém com ID **placeholder** (`G-XXXXXXXXXX`) — ainda não mede dados reais.

Por ser estático, **não há `package.json`, build ou lockfile**: a Vercel publica os arquivos como estão.

---

## Estrutura

```
/
├── index.html              → página inicial (cópia da Home)
├── Main.dc.html            → Home
├── Sobre.dc.html           → Sobre a Dra. Carla
├── Especialidades.dc.html  → Especialidades
├── Biorressonancia.dc.html → Biorressonância
├── Desparasitacao.dc.html  → Desparasitação
├── Vibra.dc.html           → VIBRA Espaço Quântico
├── Precos.dc.html          → Preços (não ligada ao menu — ver pendências)
├── Contato.dc.html         → Contato (não ligada ao menu — ver pendências)
├── FAQ.dc.html             → Perguntas frequentes (não ligada ao menu — ver pendências)
├── support.js              → melhorias progressivas (animações; o site funciona sem ele)
├── robots.txt              → bloqueia indexação (versão provisória)
├── vercel.json             → cabeçalho X-Robots-Tag: noindex
└── _blob/                  → imagens, logotipos e ícones (66 arquivos)
```

---

## Rodar localmente

Não precisa instalar nada. Em um terminal, dentro desta pasta:

```bash
# opção 1 (Node)
npx serve .

# opção 2 (Python)
python3 -m http.server 8080
```

Depois abra `http://localhost:3000` (serve) ou `http://localhost:8080` (python).

> Abrir os arquivos com duplo clique (`file://`) **não** funciona bem porque os caminhos
> das imagens começam com `/`. Use um dos servidores acima.

## Build

Não há build. É um site estático: os arquivos já são a versão final.

---

## Publicar na Vercel (passo a passo)

1. **Suba este projeto para um repositório próprio do GitHub** (exclusivo do Instituto —
   não use o repositório da Orion). Veja a seção "GitHub" abaixo.
2. Em [vercel.com](https://vercel.com) → **Add New… → Project** → **Import** o repositório.
3. Configuração de build:
   - **Framework Preset:** `Other`
   - **Build Command:** *(deixe vazio)*
   - **Output Directory:** *(deixe vazio — a raiz já é o site)*
   - **Install Command:** *(deixe vazio)*
4. **Environment Variables:** nenhuma é necessária para esta versão.
5. Clique em **Deploy**. Ao final, a Vercel gera uma URL do tipo
   `https://<nome-do-projeto>.vercel.app` — é esse o link de avaliação.

### Gerar uma nova versão depois dos ajustes

Cada *commit/push* no GitHub gera automaticamente um novo **Preview Deployment** na Vercel,
com uma URL própria. Para atualizar a versão que a Dra. Carla vê:
faça as alterações → `git commit` → `git push`. A Vercel publica sozinha.

---

## GitHub (repositório exclusivo)

Dentro desta pasta:

```bash
git init
git add .
git commit -m "Site Instituto Carla Gonçalves — versão de avaliação"
git branch -M main
git remote add origin https://github.com/<SEU_USUARIO>/instituto-carla-goncalves.git
git push -u origin main
```

Crie o repositório vazio em `github.com/new` antes do `git push` (nome sugerido:
`instituto-carla-goncalves`). **Não** reutilize o repositório da Orion Digital.

---

## Evitar indexação e restringir acesso

Esta é uma versão provisória. Duas camadas foram incluídas:

- `robots.txt` com `Disallow: /`
- `vercel.json` com `X-Robots-Tag: noindex, nofollow`

> **Importante:** `noindex` evita que o site apareça no Google, mas **não protege o acesso** —
> qualquer pessoa com o link ainda consegue abrir. Para restringir de verdade, ative na Vercel:
> **Project → Settings → Deployment Protection → Vercel Authentication** (ou **Password Protection**,
> disponível em planos pagos). Assim só quem você autorizar abre o link de avaliação.

---

## Pendências (revisar antes de enviar à Dra. Carla)

Veja o arquivo **`PENDENCIAS-E-TESTES.md`**.
