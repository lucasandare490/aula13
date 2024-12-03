# Documentação da aula 13/14 

## Informações Gerais
- **Data de Execução**: 02/12/2024
- **Aluno**: Pedro Lucas & Lucas André
# React Componentes

## Passos Realizados


# Exercício: Componentes em React

Este projeto faz parte da aula 13 de React, onde o objetivo foi criar e integrar componentes para exibir os detalhes de um prato selecionado, seus comentários, ingredientes e preço em um aplicativo React. Utilizamos Reactstrap e Bootstrap para estilização.

## Objetivo

Adicionar e configurar um novo componente chamado `DishdetailComponent` para exibir:

- Os detalhes do prato selecionado.
- Uma lista de comentários sobre o prato.
- Os ingredientes e o preço do prato.

## Tarefas Realizadas

### Tarefa 1: Criar e Integrar o `DishdetailComponent`
#### Criação do Componente:
- Criado o componente `DishDetail` no arquivo `DishdetailComponent.js` dentro da pasta `components`.
- Exportado o componente para ser usado em `MenuComponent.js`.

#### Integração com o Menu:
- Substituído o cartão de exibição do prato selecionado em `MenuComponent` pelo componente `DishDetail`.
- Passadas as informações do prato selecionado como `props` para o `DishDetail`.

#### Responsividade:
- Configurada a visualização do componente utilizando classes do **Bootstrap**:
  - Detalhes, comentários, ingredientes e preço ocupam toda a largura em telas pequenas (`xs`, `sm`).
  - Cada elemento ocupa 5 colunas em telas médias (`md`) ou maiores.

### Tarefa 2: Exibir os Detalhes do Prato com Reactstrap

#### Função `renderDish`:
- Implementada a função para exibir o prato em um cartão estilizado com **Reactstrap**.
- Configurado o cartão com os seguintes elementos:
  - **Título**: Nome do prato (usando `CardTitle`).
  - **Descrição**: Texto descritivo do prato (usando `CardText`).
  - **Ingredientes**: Lista dos ingredientes do prato.
  - **Preço**: Valor do prato exibido de forma destacada.

#### Verificação:
- Se o prato for `null`, retorna um `div` vazio.
- Caso contrário, renderiza o cartão com as informações.

### Tarefa 3: Exibir os Comentários

#### Função `renderComments`:
- Criada para exibir a lista de comentários do prato.
- Utilizada a classe `list-unstyled` do **Bootstrap** para estilizar.
- Cada comentário contém:
  - Texto do comentário.
  - Nome do autor e data.
- Comentários são agrupados dentro de um `div`, precedidos por um cabeçalho `<h4>Comments</h4>`.
- Se a lista de comentários for `null`, retorna um `div` vazio.

### Adição de Ingredientes e Preço
- Os **ingredientes** foram incluídos como uma lista exibida no cartão de detalhes do prato.
- O **preço** do prato foi adicionado como um elemento destacado no cartão, complementando as informações exibidas.

### Envio ao GitHub
- As alterações foram salvas e enviadas ao GitHub com o commit: `"Components Final"`.

## Resumo

O projeto agora possui:
1. Um componente `DishDetail` completamente funcional e responsivo.
2. Exibição de detalhes do prato usando cartões do **Reactstrap**.
3. Listagem dos comentários do prato em uma interface clara e organizada.
4. Adição dos ingredientes e preço, tornando a visualização mais completa.
