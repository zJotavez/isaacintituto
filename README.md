# Instituto Isaac Aboab da Fonseca

Portal institucional e revista digital dedicada à preservação, pesquisa e divulgação da história, memória e tradição do judaísmo hispano-português e sefardita.

---

## 🏛️ Sobre o Projeto

O **Instituto Isaac Aboab da Fonseca** é um espaço de salvaguarda cultural voltado para a sustentabilidade histórica da Nação Sefardita. O portal oferece acesso à revista digital do instituto, agenda de eventos, acervo de manuscritos e curadoria literária.

Este projeto foi projetado com uma experiência visual premium, utilizando tipografia clássica, texturas históricas (como pergaminho e papiro antigo), microinterações fluidas e total otimização para SEO e responsividade mobile.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações**: [Motion/React](https://motion.dev/) (Framer Motion)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Deploy**: [Vercel](https://vercel.com/)

---

## 🚀 Como Executar Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passos para Instalação

1. **Clonar o Repositório**
   ```bash
   git clone https://github.com/zJotavez/isaacintituto.git
   cd instituto-aboab-da-fonseca
   ```

2. **Instalar Dependências**
   ```bash
   npm install
   ```

3. **Executar em Ambiente de Desenvolvimento**
   ```bash
   npm run dev
   ```
   Acesse a aplicação localmente pelo endereço exibido no terminal (geralmente `http://localhost:3000`).

---

## 📦 Compilação para Produção

Para compilar a aplicação e prepará-la para o ambiente de produção:

```bash
npm run build
```

O build gerado será armazenado no diretório `dist/` e estará pronto para ser hospedado em servidores de arquivos estáticos.

---

## ☁️ Deploy na Vercel

O projeto está configurado para deploy automático na Vercel:
- **Configuração de Rotas**: O arquivo [vercel.json](vercel.json) na raiz gerencia as reescritas de rotas automáticas para evitar erros 404 ao atualizar rotas internas (Single Page Application).
- **Favicons & Metadados**: O cabeçalho HTML e os favicons estão estruturados na pasta `public/` para garantir carregamento eficiente de metadados Open Graph de compartilhamento social.
