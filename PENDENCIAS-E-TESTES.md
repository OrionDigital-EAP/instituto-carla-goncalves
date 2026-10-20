# Relatório de testes e pendências

## Testes executados (local, Chromium headless)

Servidor estático local + navegação automatizada nas 10 páginas.

| Verificação | Resultado |
|---|---|
| Carregamento das 10 páginas | OK (HTTP 200) |
| Imagens locais (`/_blob`, 66 arquivos) | OK — **0 imagens quebradas** |
| Links internos entre páginas do menu | OK (arquivos existem e resolvem) |
| Menu mobile (hambúrguer) | OK — usa `<details>` nativo, funciona sem JS |
| FAQ — accordion e busca | OK (script próprio da página) |
| Preços e botões de WhatsApp (`wa.me`) | OK (links abrem o WhatsApp) |
| Responsividade (desktop 1366px e celular 390px) | OK |
| Erros de console (de código do site) | Nenhum |
| Overlay/lightbox com placeholder `{{…}}` | **Corrigido** (bloco do runtime removido) |

> Observação: no meu ambiente de teste, **Google Fonts** e **Google Tag Manager** não carregam
> (o ambiente não tem internet externa). Na Vercel, ambos carregam normalmente. Não é um
> problema do site.

## Correção aplicada

As páginas vinham de um editor que usa um *runtime* próprio. A Home e a página Sobre continham
um bloco de **galeria em tela cheia (lightbox)** com marcadores de template não preenchidos
(`{{lbSrc}}`, `{{lbOpen}}`…). Fora daquele editor, esse bloco deixava uma imagem quebrada e um
possível overlay escuro. O bloco foi **removido** — as miniaturas das galerias continuam
aparecendo normalmente; apenas o "abrir em tela cheia" não está ativo.

## Pendências — revisar antes de enviar o link

1. **Formulário de contato não envia mensagens.**
   Hoje ele apenas mostra "mensagem enviada" e guarda os dados **no navegador do visitante**
   (localStorage). **Nenhum e-mail é enviado e nada é salvo em servidor.** Para funcionar de
   verdade é preciso conectar um serviço (ex.: Formspree, Vercel Forms, ou Zapier/Google Sheets).
   *Enquanto isso, convém não divulgar o formulário como funcional.*

2. **Google Analytics com ID de exemplo.**
   O código usa `G-XXXXXXXXXX`. O site **não está medindo** nada até inserir o ID real da conta GA4.

3. **Preços sujeitos à confirmação da Dra. Carla.**
   - Detox Intensivo — 5 semanas — **R$ 2.490**
   - Detox Profundo — 10 semanas — **R$ 4.990**
   - Consultoria Única — 1 sessão — **R$ 490**
   - A página de Preços também traz afirmações a validar: *"reembolso de 100%"*,
     *"mais de 90% dos clientes relata melhora"* e *"garantia de resultado"*. Por ser conteúdo
     de uma profissional de saúde, recomendo revisar/ajustar essas frases com a Dra. Carla antes
     de publicar.

4. **Páginas Preços, Contato e FAQ não estão no menu.**
   Elas existem e abrem por link direto (`/Precos.dc.html`, `/Contato.dc.html`, `/FAQ.dc.html`),
   mas o menu de navegação ainda não aponta para elas. Definir com a cliente se entram no menu.

5. **Telefone com um dígito a menos em alguns links.**
   Alguns links `tel:` estão como `+551699345379` (falta um dígito do número
   `(16) 99345-3796`). Os links de WhatsApp estão corretos (`5516993453796`).

6. **Dados a conferir:** endereço, horários de funcionamento e credenciais profissionais
   exibidos nas páginas — confirmar com a Dra. Carla.

## O que NÃO foi feito (por decisão de segurança)

- Nada foi publicado em nenhum domínio. A publicação na Vercel é feita por você, seguindo o README.
- Nenhum repositório foi criado no GitHub em seu nome. As instruções estão no README.
- Nenhuma credencial, chave ou variável de ambiente foi inventada.
