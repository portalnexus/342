
# Orientações para o Gemini CLI

Este documento serve como um guia para o Gemini CLI, detalhando as convenções de programação, estilo e estrutura a serem seguidas para garantir a consistência e a qualidade do código gerado.

## Estilo de Código e Formatação

### HTML

- **Framework CSS:** Utilize [Tailwind CSS](https://tailwindcss.com/) para a estilização principal. A estrutura de classes deve ser organizada e legível.
- **Fonte:** A fonte padrão é a [Inter](https://fonts.google.com/specimen/Inter), importada do Google Fonts.
- **Estrutura:** O HTML deve ser semântico, com o uso adequado de tags como `<header>`, `<main>`, `<footer>`, `<section>`, `<h1>`, `<h2>`, `<h3>`, etc.
- **Listas:** Para listas, utilize as classes `decimal-list` para listas ordenadas e `roman-list` para listas com numeração romana.
- **Links:** Links devem ter um estado `:hover` que altere sua aparência, como a cor de fundo ou o sublinhado.
- **Formatação:** O código deve ser bem formatado, com indentação consistente para facilitar a leitura.

### CSS

- **Complementar ao Tailwind:** O CSS customizado deve complementar o Tailwind, não o substituir. Utilize-o para estilizações mais complexas, como gradientes e sombras customizadas.
- **Paleta de Cores:**
  - **Roxo Principal:** `#6D28D9`
  - **Magenta:** `#EC4899`
  - **Amarelo:** `#FACC15`
  - **Roxo Secundário:** `#8B5CF6`
- **Design:** O design deve ser moderno, com o uso de:
  - **Sombras:** Para criar um efeito de profundidade e elevação nos elementos.
  - **Bordas Arredondadas:** Para um visual mais suave e amigável.
  - **Gradientes:** Para fundos de seções e cards.
- **Responsividade:** O layout deve ser responsivo, utilizando media queries para se adaptar a diferentes tamanhos de tela.
- **Efeitos de Hover:** Elementos interativos devem ter efeitos de `:hover` para fornecer feedback visual ao usuário.

### Arduino (Sketch)

- **Comentários:** O código deve ser bem comentado, explicando a função de cada bloco de código e de cada variável importante.
- **Estrutura:** O código deve seguir a estrutura padrão do Arduino, com as funções `setup()` e `loop()`.
- **Funções:** Utilize as funções padrão da API do Arduino, como `pinMode()`, `digitalWrite()`, `analogRead()`, `delay()`, `Serial.begin()`, `Serial.print()`, etc.
- **Nomenclatura:** Utilize nomes de variáveis e funções descritivos e em `camelCase`.

## Geração de Conteúdo

Ao gerar novos conteúdos, como páginas HTML ou guias, siga a estrutura e o estilo dos arquivos existentes no diretório `AUTOMAÇÃO RESIDENCIAL ARDUINO`. O conteúdo deve ser claro, bem organizado e seguir as mesmas diretrizes de design e formatação.

## Exemplo de Componente

Abaixo, um exemplo de um card de opção de produto, que deve ser seguido ao criar componentes similares:

```html
<a href="guide_option_a.html" class="product-option block">
    <h3 class="product-option-heading">Opção A: Projeto de Automação Simples e Funcional</h3>
    <p class="text-gray-600 mt-1">Desenvolva e construa um protótipo funcional de um sistema de automação residencial simples utilizando o Arduino. O projeto deve ser capaz de realizar uma tarefa específica de automação.</p>
    <ul class="list-disc list-inside text-sm text-gray-600 mt-2">
        <li><strong>Sugestões:</strong> Luz noturna automática (com LDR), alarme de porta/janela (com botão ou sensor magnético), controle de temperatura básico (com DHT11 e LED/ventilador).</li>
        <li><strong>Entrega:</strong> Protótipo funcionando, diagrama do circuito (desenho ou software), código comentado e um breve relatório (1 página) explicando o funcionamento, os componentes utilizados e os desafios encontrados.</li>
    </ul>
</a>
```

Ao seguir estas diretrizes, o Gemini CLI será capaz de gerar código e conteúdo que se alinham com o estilo e a qualidade do projeto.
