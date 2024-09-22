# 🕷️ Desafio Chibas - Web Scraping com Puppeteer

## 📝 Descrição
Bem-vindo Samuca ao seu **segundo** Desafio Chibas🔥💵🏠! Este projeto é um web scraper simples usando a biblioteca Puppeteer. O scraper vai te ajudar a aprender sobre automação de navegadores e extração de dados da web, focando em informações sobre Bitcoin e o dólar.

## 🗓️ Data de Entrega
06 de outubro

## ⚠️ ATENÇÃO! EXTREMAMENTE IMPORTANTE! ⚠️

# UM DEV DEVE LER DOCUMENTAÇÃO E NÃO ENTRAR NO TUTORIAL HELL
# NÃO VEJA TUTORIAIS DO YOUTUBE
# APENAS DOCUMENTAÇÃO E STACKOVERFLOW

## ✨ O que você vai fazer
- 🌐 Criar um scraper que extrai informações sobre Bitcoin e o dólar de sites financeiros
- 📊 Processar e organizar os dados coletados
- 🖥️ Exibir as informações em uma página HTML simples

## 📋 O que você precisa
- Node.js (versão 14 ou mais nova)
- npm (geralmente vem junto com o Node.js)
- Vontade de aprender e pesquisar!

## 🛠️ Como começar

1. Primeiro, crie uma pasta para o projeto e entre nela:
   ```bash
   mkdir meu-scraper-financeiro
   cd meu-scraper-financeiro
   ```

2. Instale as coisas que o projeto precisa:
   ```bash
   npm init -y
   npm install puppeteer
   ```

## ⚙️ Configurando o scraper

1. Crie um arquivo chamado `index.js` e coloque esse código básico nele:

   ```javascript
   const puppeteer = require('puppeteer');
   const fs = require('fs');

   async function scrapeCryptoData() {
       const browser = await puppeteer.launch();
       const page = await browser.newPage();
       await page.goto('https://www.coingecko.com/pt/moedas/bitcoin');

       // Aqui é onde você vai adicionar a lógica para extrair dados do Bitcoin

       await browser.close();
   }

   async function scrapeDollarData() {
       const browser = await puppeteer.launch();
       const page = await browser.newPage();
       await page.goto('https://www.investing.com/currencies/usd-brl');

       // Aqui é onde você vai adicionar a lógica para extrair dados do dólar

       await browser.close();
   }

   async function main() {
       await scrapeCryptoData();
       await scrapeDollarData();
   }

   main();
   ```

2. Rode o scraper:
   ```bash
   node index.js
   ```

## 📚 Documentação

A habilidade mais importante de um desenvolvedor é saber pesquisar e ler documentações. Leia a documentação oficial do Puppeteer. É lá que você vai encontrar todas as informações necessárias para desenvolver seu scraper:

[Documentação do Puppeteer](https://pptr.dev/)

## 🧪 Seu desafio
Agora é com você! Use a documentação para adicionar funcionalidades ao seu scraper. Algumas ideias:

- Extrair o preço atual do Bitcoin em reais
- Obter a variação percentual do Bitcoin nas últimas 24 horas
- Coletar a cotação atual do dólar em reais
- Obter a variação do dólar no dia
- Salvar os dados extraídos em um arquivo JSON
- Criar uma página HTML simples para exibir os dados coletados

Exemplo de como os dados poderiam ser estruturados:

```json
{
  "bitcoin": {
    "preco": "R$ 150.000,00",
    "variacao24h": "+2.5%"
  },
  "dolar": {
    "cotacao": "R$ 5,20",
    "variacaoDia": "-0.3%"
  },
  "dataAtualizacao": "2023-09-25T14:30:00Z"
}
```

Lembre-se: a chave para o sucesso é a prática e a pesquisa. Boa sorte e divirta-se aprendendo!