# Desenvolvendo uma Web Acessível

Este projeto é um exemplo prático de como desenvolver uma web acessível, utilizando **Next.js**, **TypeScript**, **CSS Modules** e **Radix UI**. Ele aborda conceitos importantes de acessibilidade e segue as melhores práticas para garantir que pessoas com diferentes habilidades possam utilizar a aplicação de forma inclusiva.

## 💡 Objetivo

Prover um guia prático sobre acessibilidade na web, destacando:
- A importância de desenvolver tecnologias inclusivas.
- O uso de boas práticas de design acessível.
- Implementações técnicas para garantir conformidade com os princípios básicos da web definidos pela W3C.

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React para renderização server-side e criação de aplicações web modernas.
- **TypeScript**: Linguagem de tipagem estática que melhora a experiência de desenvolvimento e evita bugs.
- **CSS Modules**: Estilização modular e isolada para componentes.
- **Radix UI**: Biblioteca de componentes acessíveis para React.
- **Head**: Gerenciamento de metadados para SEO e usabilidade.

## 📑 Estrutura do Código

O código contém os seguintes elementos:

### Header
- Um logotipo com descrição `alt` para leitores de tela.
- Um link para o GitHub com atributo `aria-label` para identificar a ação de forma clara.

### Main
- Um artigo explicativo com cabeçalhos estruturados (`<h1>`, `<h2>`, `<h3>`).
- Parágrafos que promovem o entendimento do tema e destacam a acessibilidade como parte essencial do desenvolvimento web.

### Footer
- Um botão para abrir um modal com os termos de uso.
- Componente acessível utilizando o **Radix UI** para diálogos, com foco gerenciado e conteúdo descritivo.

## 🛠️ Funcionalidades

- **Imagem com descrição**: Todas as imagens possuem o atributo `alt`, garantindo que leitores de tela possam identificar o conteúdo.
- **Links claros**: Uso do atributo `aria-label` para descrever a funcionalidade dos links.
- **Modal acessível**: Gerenciado por teclado e leitor de tela com suporte a sobreposição e fechamento seguro.
- **Estrutura semântica**: Utilização de tags HTML apropriadas (`<header>`, `<main>`, `<footer>`) para organizar o conteúdo.

## 📖 Sobre Acessibilidade

Acessibilidade é a prática de tornar a web utilizável por todas as pessoas, independentemente de suas capacidades. Este projeto aborda aspectos técnicos e culturais para garantir que a experiência do usuário seja inclusiva.

### O que é acessibilidade?
A acessibilidade vai além da conformidade com diretrizes técnicas. Ela envolve:
- Inclusão de pessoas com deficiência em todas as fases do desenvolvimento.
- Implementação de práticas recomendadas, como contraste de cores, navegação por teclado e descrição textual.
- Promoção de uma filosofia de design que coloca as pessoas no centro da experiência.

### Benefícios
- **Legal**: Cumprimento de leis como o WCAG.
- **Social**: Inclusão de um público mais amplo.
- **Técnico**: Melhor SEO e desempenho geral.

## 🖥️ Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/danilobarros3/acessibilidade-reactjs.git
