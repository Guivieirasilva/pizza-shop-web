# Pizza Shop - Dashboard de Administrador

Este projeto foi desenvolvido em ReactJS e utiliza diversas tecnologias modernas para criar um dashboard de administração para uma pizzaria. A aplicação visa exercitar conceitos avançados de React, comunicação com APIs via requisições HTTP e implementação de testes no frontend.

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Query**: Biblioteca JavaScript para otimizar o desempenho da aplicação ao lidar com dados dinâmicos e cache.
- **shacnUI**: Componentes UI para React que oferecem um design consistente e agradável.
- **React Hook Form**: Biblioteca para formulários no React com suporte a validação.
- **zod**: Biblioteca para validação de esquemas de dados em TypeScript.
- **Tailwind CSS**: Framework CSS utilizado para estilização rápida e responsiva.
- **Recharts**: Biblioteca para criação de gráficos responsivos em React.
- **Axios**: Cliente HTTP baseado em Promises para realizar requisições.
- **Vitest**: Ferramenta de testes para aplicações JavaScript baseadas em Vite.
- **@testing-library**: Conjunto de utilitários para testar componentes React de forma eficaz.
- **msw (Mock Service Worker)**: Biblioteca para simular APIs no ambiente de desenvolvimento.

## Funcionalidades

- **Dashboard Administrativo**: Interface principal com estatísticas e gráficos sobre as vendas e desempenho da pizzaria.
- **Gerenciamento de Pedidos**: Listagem, detalhamento e edição de pedidos realizados.
- **Gestão de Cardápio**: Adição, remoção e atualização de itens do cardápio.
- **Relatórios e Estatísticas**: Visualização detalhada de vendas diárias, semanais e mensais através de gráficos interativos.

## Configuração do Projeto

Para executar o projeto localmente, siga as etapas abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Guivieirasilva/pizza-shop-web.git
   ```

   Navegue até o diretório clonado:

   ```bash
   cd pizza-shop-web
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:

   Crie um arquivo `.env` na raiz do projeto e defina as variáveis necessárias, como a URL da API. Você pode encontrar a API deste projeto em [rocketseat/pizzashop-api](https://github.com/rocketseat-education/pizzashop-api).

4. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

5. **Acesse a aplicação**:

   Abra seu navegador e vá para `http://localhost:3000` para visualizar o dashboard da pizzaria.
## Testes

Os testes são essenciais para garantir a qualidade e o funcionamento correto da aplicação. Utilizamos Vitest e @testing-library para realizar testes unitários e de integração nos componentes React. Para executar os testes, utilize o seguinte comando:

```bash
npm run dev:test
```