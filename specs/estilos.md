## Objetivo
Estilizar o Quiz existente com uma identidade inspirada em
programas brasileiros de perguntas e respostas: fundo azul
escuro, detalhes dourados e alternativas bem destacadas.

## Antes de começar
Leia o HTML e o JavaScript existentes para compreender a
estrutura, os seletores e como os elementos aparecem e somem.
Não altere nenhum arquivo JavaScript.

## Alterações permitidas
- Criar um arquivo CSS externo para os estilos.
- Adicionar o link desse CSS no HTML.
- Aplicar classes BEM aos elementos existentes.
- Preservar o conteúdo, a estrutura funcional e todos os IDs,
  atributos e classes utilizados pelo JavaScript.

Não instale bibliotecas ou frameworks.

## Padrão CSS BEM
Use classes no formato:
- Bloco: quiz
- Elemento: quiz__title, quiz__score, quiz__option
- Modificador: quiz__option--correct, quiz__option--incorrect

Crie modificadores apenas quando houver necessidade.
Não implemente novas funcionalidades ou estados em JavaScript.

## Estilos
- Organize título, apresentação, pontuação, botão inicial,
  perguntas e alternativas com espaçamento consistente.
- Use uma fonte de sistema legível, sem downloads externos.
- Faça o layout funcionar em celulares e computadores,
  sem rolagem horizontal.
- Garanta contraste adequado e foco visível para navegação
  por teclado.
- Diferencie visualmente os estados hover, focus-visible
  e disabled dos botões.
- Não dependa somente de cores para comunicar informações.
- Adicione comentários curtos explicando cada seção do CSS.

## Integração com o Quiz
Respeite o mecanismo existente de mostrar e esconder elementos.
Não sobrescreva hidden ou estilos de visibilidade usados pela
lógica, nem force elementos ocultos a aparecer.

## Critérios de aceitação
- Todos os elementos visuais existentes estão estilizados.
- Todas as classes novas seguem BEM e estão aplicadas no HTML.
- Os seletores usados pelo JavaScript continuam funcionando.
- Nenhum arquivo .js foi criado ou modificado.
- Nenhuma funcionalidade nova foi adicionada.

## Verificação e entrega
Confira os caminhos dos arquivos e a correspondência entre
as classes do HTML e do CSS.
Se houver prévia disponível, confira o layout em tela estreita
e larga e o foco dos botões.
Explique os arquivos alterados, as principais decisões de CSS
e o que conseguiu verificar. Informe qualquer teste pendente.

Não faça commit: revisaremos o resultado antes de registrar.