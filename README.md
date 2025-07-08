# 🏨 Hotel Listing App

Aplicação front-end desenvolvida com [Vue 3](https://vuejs.org/) e [Quasar Framework](https://quasar.dev/), com foco em listagem paginada de hotéis, pesquisa por nome e filtro por cidade.

---

## 📦 Tecnologias e Ferramentas

- [Vue 3](https://vuejs.org/) + Composition API + TypeScript
- [Quasar Framework](https://quasar.dev/)
- [Pinia](https://pinia.vuejs.org/) — gerenciamento de estado
- [Axios](https://axios-http.com/) — requisições HTTP
- [Vite](https://vitejs.dev/) — dev server e build
- [Vitest](https://vitest.dev/) — testes unitários
- [Lodash](https://lodash.com/) — utilitários como debounce
- JSON Server — mock da API REST

## 📊 Funcionalidades
- Pesquisa de hotéis
- Filtro por cidade
- Paginação com scroll infinito
- API simulada com JSON Server

![image](https://github.com/user-attachments/assets/c18d04a6-333e-4092-bd9c-16b0c40827a5)
![image](https://github.com/user-attachments/assets/43c171e5-123c-4811-a6e2-d09b9e168a9a)


Foi feito o formulário para filtrar os hotéis, onde o usuário pode escolher um destino e também se quiser, utilizar o nome do hotel.
Esse formulário pode ser enviado ao pressionar a tecla enter ou ao clicar no botão de busca.

Adicionei uma ordenação de preço ou melhor avaliados, a ordenação padrão é por preços e está na ordem crescente, já busca por melhor avaliados foi ordenada por estrelas na ordem decrescente.

A listagem possui scroll infito, ou seja, quando chegar próximo ao final é feito a busca por mais resultados.

O usuário pode clicar em selecionar e será exibido um drawer com todas as informações do hotel.

### Parte técnica

#### Estrutura de pastas

Foi utilizado a estrutura padrão do quasar, os arquivos principais estão dentro da pasta src:

- boot -> Diretório do quasar para algumas configurações
- components -> Foi onde criei todos os componentes utilizados.
  - form -> Aqui foi onde deixei os componentes específicos utilizados somente no formulário
  - hotels -> Aqui são os componentes utilizados para exibir informações dos hotéis, tanto na listagem quanto no drawer.
  - main-page -> São os componentes utilizados na pagina principal, resolvi cria-los para deixar cada parte da pagina separada
- composables -> Estão algumas funções que utilizei para gerenciamento das stores, preferi colocar a lógica dentro de composables ao inves de deixar tudo na store.
- constants -> Criei esse diretório para adicionar constants que utilizaria ao longo do projeto.
- css -> Diretório do quasar, aqui é onde adiocionamos estilização global e variáveis no css do projeto.
- layouts -> Diretório do quasar, onde é possível criar um layout geral para a aplicação.
- pages -> Onde ficam as páginas do projeto, nesse caso utilizei somente uma página, não precisei de roteamento.
- router -> Onde é configurado o roteamento do projeto, não precisei mexer muito aqui pois só utilizei uma página.
- services -> É onde criei minhas classes com as funções para consumo de requisições REST.
- stores -> É o diretório onde ficam os arquivos para gerenciamento dos estados globais da aplicação.
- utils -> Onde deixei funções utilitárias, nesse caso, uma função para formatar valores.
- db.json é o arquivo que contem os dados dos hotéis, ele foi utilizado para simular uma api REST com o json-server.

#### Implementação

Como estou utilizando o quasar, não criei muitos componentes genéricos, ao invés disso dei preferencia para utilizar os que ele já disponibiliza e então criei componentes mais específicos. Para o formulário, utilizei os inputs, autocomplete e o button que criei customizando o componente button do quasar para que ficasse como eu precisava dele.
Para a listagem, utilizei o `infinite-scroll` do quasar, o carousel e o Drawer também foram do quasar.

Para gerenciamento dos filtros da listagem, optei por utilizar o `pinia`, uma biblioteca de gerenciamento de estados globais. É onde salvo as informações dos hotéis e os filtros.

Tive várias dificuldades nesse projeto mas isso me trouxe vários aprendizados também, o maior desafio foi utilizar o `quasar` que é uma tecnologia que ainda não tinha nenhum conhecimento e agora vi que existem um framework bem completo para vuejs, acredito que tenham formas melhores para fazer essa solução, configurações e padrões de utilizar o quasar, mas por enquanto estou bem satisfeito com essa implementação que consegui entregar e pretendo continuar evoluindo com essa tecnologia.

Para rodar o projeto, 
bata fazer o clone do repositório ou baixar os arquivos, é necessário ter o node acima da versão 16 instalado, abra a pasta do projeto no seu terminal e então rode alguns comandos, o comando `npm install` para instalar as dependencias e o comando `npm run dev` para rodar em modo de desenvolvimento, no terminal vai aparecer um link em localhost para que possa visualizar o projeto no seu navegador.
