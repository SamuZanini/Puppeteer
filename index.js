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