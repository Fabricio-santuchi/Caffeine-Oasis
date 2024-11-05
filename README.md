# Caffeine Oasis

Veja o projeto em funcionamento: [Caffeine Oasis na Vercel](https://link-do-seu-projeto.vercel.app/)

Este projeto é um aplicativo para cafeteria, desenvolvido com React e estilizado com Tailwind CSS. O objetivo é criar uma experiência interativa e visualmente agradável para os usuários que desejam explorar opções de bebidas e snacks.

## 🛠 Tecnologias Utilizadas

- **React** (versão 18.3.1)
- **Tailwind CSS** (versão 3.4.14)
- **Vite** (versão 5.4.10)
- **React Icons** para ícones de interface
- **ESLint** para análise estática de código
- **Tailwind Scrollbar** para estilização da barra de rolagem

## 🌟 Funcionalidades Principais

- **Layout Responsivo**: O design se adapta para dispositivos móveis e desktops, garantindo uma experiência de usuário consistente.
- **Estilo Visual Atraente**: Interface projetada com foco em estética e usabilidade, com cores e tipografia agradáveis.
- **Animações e Transições**: Elementos da interface possuem animações suaves que melhoram a experiência do usuário.

## 📸 Imagens e Demonstração

Para melhor ilustrar o funcionamento do projeto, aqui estão algumas imagens prévias da interface principal:

![Tela Inicial](./public/home-preview.png)
![Catálogo de Produtos](./public/catalog-preview.png)
![Detalhes do Produto](./public/product-detail-preview.png)

## 🚀 Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Fabricio-santuchi/Caffeine-Oasis.git

   ```

2. Acesse o diretório do projeto:

   ```bash
   cd Caffeine-Oasis
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse o projeto no navegador:

   O projeto será aberto no endereço `http://localhost:5173`.

## 📜 Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Cria uma versão otimizada para produção.
- **`npm run lint`**: Executa o ESLint para verificar erros de código.
- **`npm run preview`**: Visualiza a versão de produção da aplicação.

## 📂 Estrutura de Pastas

Abaixo está a estrutura de diretórios e arquivos deste projeto:

```bash
caffeine-oasis/
│
├── node_modules/          # Dependências do Node.js
├── public/                # Arquivos públicos
│   ├── home-preview.png   # Imagem de preview da tela inicial
│   ├── catalog-preview.png # Imagem de preview do catálogo
│   └── product-detail-preview.png # Imagem de preview do detalhe do produto
│
├── src/                   # Diretório principal de código-fonte
│   ├── components/        # Componentes React do projeto
│   │   ├── ModalMaps/     # modal do mapa
│   │   ├── Main/          # Componente main
│   │   └── Header/        # Cabeçalho da aplicação
│   ├── context/   
│   ├── data/ 
│   ├── hooks/ 
│   ├── App.jsx            # Componente principal do App
│   ├── index.css          # Arquivo de estilos globais
│   └── main.jsx           # Ponto de entrada da aplicação React
│
├── .gitignore             # Arquivo Gitignore
├── eslint.config.js       # Configurações do ESLint
├── index.html             # Ponto de entrada HTML
├── package.json           # Configurações do projeto e dependências
├── postcss.config.js      # Configurações do PostCSS
├── tailwind.config.js     # Configurações do Tailwind CSS
└── vite.config.js         # Configurações do Vite (build tool)
```

## 📦 Dependências

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React DOM**: Pacote para renderizar componentes React no DOM.
- **Vite**: Ferramenta de build ultrarrápida para projetos front-end.
- **React Icons**: Biblioteca para ícones em projetos React.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.

### 🛠 Dependências de Desenvolvimento

- **@types/react** e **@types/react-dom**: Tipos TypeScript para React.
- **ESLint**: Ferramenta para identificar e corrigir problemas no código.
- **Vite Plugin React**: Suporte para React dentro do Vite.
- **Tailwind Scrollbar**: Estilização da barra de rolagem.

## 📚 Projeto Inspirado

Este projeto foi inspirado em um vídeo do **DevClub**, onde aprendi a implementar um aplicativo de cafeteria. Agradeço ao DevClub pelo excelente conteúdo que ajudou a aprimorar minhas habilidades em desenvolvimento. Embora tenha utilizado o vídeo como base, fiz alterações no código e design para personalizá-lo e aprimorá-lo conforme minha visão.

## ✍️ Autor

**Fabrício Santuchi**  
Estudante de **Sistemas de Informação** e desenvolvedor front-end. Apaixonado por criar soluções práticas e funcionais usando as mais recentes tecnologias.
