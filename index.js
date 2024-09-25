const puppeteer = require('puppeteer');
const fs = require('fs');

const moedas = [
    {
        "cod": "BRL", "nome": "real"
    },
    {
        "cod": "USD", "nome": "dolar"
    },
    {
        "cod": "EUR", "nome": "euro"
    },
    {
        "cod": "BTC", "nome": "bitcoin"
    },
]

const getCurrencyUrl = (moeda) => {
    const url = `https://www.google.com.br/search?q=${moeda}+para+real&sca_esv=2ffed2e4f72d7567&sca_upv=1&sxsrf=ADLYWIKxyP0HUdrmB-oSNt40h5pBTCTAAg%3A1727215359785&ei=_zbzZr_GL_eq1sQPqI2N-A8&ved=0ahUKEwj_weHPytyIAxV3lZUCHahGA_8Q4dUDCA8&uact=5&oq=${moeda}+para+real&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWJpdGNvaW4gcGFyYSByZWFsMgoQIxiABBgnGIoFMgQQIxgnMgUQABiABDIFEAAYgAQyBhAAGAcYHjIGEAAYBxgeMgUQABiABDIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHkiEDFAAWK0KcAd4AJABAJgBAKABAKoBALgBA8gBAPgBAZgCB6ACEsICBxAjGLECGCfCAgcQABiABBgKwgIIEAAYBRgHGB7CAgcQABiABBgNwgIJEAAYgAQYChgNwgIIEAAYChgNGB7CAgwQIxiwAhgnGEYYggLCAgcQIxiwAhgnwgIWEAAYsAIYRhiCAhiXBRiMBRjdBNgBAZgDALoGBggBEAEYE5IHATegBwA&sclient=gws-wiz-serp`

    return url
}

const getVariationUrl = (moedaPercent) => {
    const urlPorcentagem = `https://br.tradingview.com/symbols/${moedaPercent}BRL/`

    return urlPorcentagem
}

async function scrapeCryptoData() {
    try {

        //Seleciona o valor do Bitcoin em Reais
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();

        const URLconversorBit = getCurrencyUrl(moedas[3].nome)
        
        await page.goto(URLconversorBit);
        
        const bitcoinValue = await page.$eval('.pclqee', el => el.textContent);
        console.log(`O preço atual do Bitcoin em Reais é ${bitcoinValue}`);

        //Seleciona a porcentagem de variação do Bitcoin do dia
        const URLporcentagemBit = getVariationUrl(moedas[3].cod)
        await page.goto(URLporcentagemBit);
        
        const bitcoinVariation = await page.$eval('.js-symbol-change-pt', el => el.textContent);
        console.log(`A variação do Bitcoin nas últimas 24h foi de ${bitcoinVariation}`);

        await browser.close();
    } catch (error) {
        console.error('Ocorreu um erro ao obter dados do Bitcoin:', error);
    }
}



const getVariationUrlDOL = (moedaPercent) => {
    const urlPorcentagem = `https://br.tradingview.com/symbols/${moedaPercent}BRL/`

    return urlPorcentagem
}

async function scrapeDollarData() {
    try {

        //Seleciona o valor do Dólar em Reais
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();

        const URLconversorDOL = getCurrencyUrl(moedas[1].nome)
        
        await page.goto(URLconversorDOL);
        
        const dollarValue = await page.$eval('.DFlfde.SwHCTb', el => el.textContent);
        console.log(`O preço atual do Dólar em Reais é ${dollarValue}`);

        //Seleciona a porcentagem de variação do Dólar do dia
        const URLporcentagemDOL = getVariationUrlDOL(moedas[1].cod)
        await page.goto(URLporcentagemDOL);
        
        const dollarVariation = await page.$eval('.js-symbol-change-pt', el => el.textContent);
        console.log(`A variação do Dólar nas últimas 24h foi de ${dollarVariation}`);
    
        await browser.close();
    } catch (error) {
        console.error('Ocorreu um erro ao obter dados do Dólar:', error);
    }
}

async function main() {
    await scrapeCryptoData();
    await scrapeDollarData();
}

//TODO try to apply TypeScript

main();