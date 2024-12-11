# GitHub Blog
Projeto **GitHub Blog**! Esse projeto foi desenvolvido como parte do terceiro desafio da trilha de **ReactJS** do **Ignite**, utilizando a API do GitHub para criar um blog pessoal com issues.

![GitHub Blog Capa](/src/assets/Capa.svg)
<br>

## Índice

1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Funcionalidades](#-funcionalidades)
3. [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
4. [Melhorias Futuras](#-melhorias-futuras)
5. [Configuração e Execução](#-configuração-e-execução)
6. [API Utilizada](#-api-utilizada)
7. [Layout](#️-layout)
<br>

## 📝 Sobre o Projeto

Este projeto utiliza a API do GitHub para:

- Exibir informações do perfil do usuário, como imagem, nome, bio, número de seguidores e outras informações disponíveis na API.
- Listar e filtrar issues de um repositório GitHub com um resumo do conteúdo.
- Exibir o conteúdo completo de uma issue em uma página dedicada, funcionando como posts de um blog.
<br>

## 🚀 Funcionalidades

1. **Perfil do GitHub**:
   - Visualização de informações do perfil, incluindo imagem, bio e estatísticas de seguidores.

2. **Listagem de Issues**:
   - Exibição de uma lista de issues do repositório com um resumo.
   - Filtragem de issues por palavras-chave.

3. **Visualização de Post (Issue Completa)**:
   - Exibição detalhada de uma issue, formatada como um post de blog.
<br>     

## 🛠️ Tecnologias Utilizadas

- **React** com **Vite** e **TypeScript**
- **Axios** para requisições HTTP
- **React Router DOM** para roteamento dinâmico
- **react-markdown** para converter e renderizar conteúdo Markdown
<br> 

## 🚀 Melhorias Futuras

- **Design responsivo**: Adaptação da interface para dispositivos móveis e diferentes tamanhos de tela.
<br>

## 🔧 Configuração e Execução

### Pré-requisitos

- Node.js
- Gerenciador de pacotes (npm ou yarn)

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o projeto:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
<br>

## 🌐 API Utilizada

As seguintes APIs do GitHub foram utilizadas no projeto:

- **[GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user)**: Para buscar informações do perfil do usuário.
- **[GitHub Search API](https://docs.github.com/pt/rest/search)**: Para buscar e filtrar issues do repositório.
- **[GitHub Issues API](https://docs.github.com/pt/rest/issues/issues#get-an-issue)**: Para exibir detalhes de uma issue específica.

> ⚠️ **Atenção**: A API do GitHub possui limites de requisições. Para ampliar o limite, configure uma chave de autenticação. Consulte a [documentação](https://docs.github.com/pt/rest/search#rate-limit) para mais informações.
<br>

## 🖼️ Layout

O layout da aplicação foi baseado no design disponibilizado no Figma. Você pode acessá-lo [aqui](https://www.figma.com/community/file/1138814951106121051).


