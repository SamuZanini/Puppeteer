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
    {
        "cod": "btc", "nome": "%bitcoin"
    },
]

const getCurrencyUrl = (moeda) => {
    const url = `https://www.google.com.br/search?q=${moeda}+para+real&sca_esv=2ffed2e4f72d7567&sca_upv=1&sxsrf=ADLYWIKxyP0HUdrmB-oSNt40h5pBTCTAAg%3A1727215359785&ei=_zbzZr_GL_eq1sQPqI2N-A8&ved=0ahUKEwj_weHPytyIAxV3lZUCHahGA_8Q4dUDCA8&uact=5&oq=${moeda}+para+real&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWJpdGNvaW4gcGFyYSByZWFsMgoQIxiABBgnGIoFMgQQIxgnMgUQABiABDIFEAAYgAQyBhAAGAcYHjIGEAAYBxgeMgUQABiABDIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHkiEDFAAWK0KcAd4AJABAJgBAKABAKoBALgBA8gBAPgBAZgCB6ACEsICBxAjGLECGCfCAgcQABiABBgKwgIIEAAYBRgHGB7CAgcQABiABBgNwgIJEAAYgAQYChgNwgIIEAAYChgNGB7CAgwQIxiwAhgnGEYYggLCAgcQIxiwAhgnwgIWEAAYsAIYRhiCAhiXBRiMBRjdBNgBAZgDALoGBggBEAEYE5IHATegBwA&sclient=gws-wiz-serp`

    // `https://www.google.com.br/search?q=bitcoin+para+real&sca_esv=2ffed2e4f72d7567&sca_upv=1&sxsrf=ADLYWIKxyP0HUdrmB-oSNt40h5pBTCTAAg%3A1727215359785&ei=_zbzZr_GL_eq1sQPqI2N-A8&ved=0ahUKEwj_weHPytyIAxV3lZUCHahGA_8Q4dUDCA8&uact=5&oq=bitcoin+para+real&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWJpdGNvaW4gcGFyYSByZWFsMgoQIxiABBgnGIoFMgQQIxgnMgUQABiABDIFEAAYgAQyBhAAGAcYHjIGEAAYBxgeMgUQABiABDIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHkiEDFAAWK0KcAd4AJABAJgBAKABAKoBALgBA8gBAPgBAZgCB6ACEsICBxAjGLECGCfCAgcQABiABBgKwgIIEAAYBRgHGB7CAgcQABiABBgNwgIJEAAYgAQYChgNwgIIEAAYChgNGB7CAgwQIxiwAhgnGEYYggLCAgcQIxiwAhgnwgIWEAAYsAIYRhiCAhiXBRiMBRjdBNgBAZgDALoGBggBEAEYE5IHATegBwA&sclient=gws-wiz-serp`

    //https://br.investing.com/crypto/bitcoin/btc-brl-converter
    //https://br.investing.com/currencies/usd-brl

    return url
}

const getVariationUrl = (moedaPercent) => {
    const urlPorcentagem = `https://br.investing.com/crypto/bitcoin/${moedaPercent}-brl-converter`

    return urlPorcentagem
}

async function scrapeCryptoData() {
    try {
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();

        const URLconversorBit = getCurrencyUrl(moedas[3].nome)
        
        await page.goto(URLconversorBit);
        
        // Corrigido o seletor e o método de obtenção do valor
        const bitcoinValue = await page.$eval('.pclqee', el => el.textContent);
        console.log(`O preço atual do Bitcoin em Reais é ${bitcoinValue}`);

        const URLporcentagemBit = getVariationUrl(moedas[4].cod)
        await page.goto(URLporcentagemBit);
        
        // Corrigido o seletor e o método de obtenção da variação
        const bitcoinVariation = await page.$eval('.arial_20.greenFont.pid-1024807-pcp.parentheses', el => el.textContent);
        console.log(`A variação do Bitcoin nas últimas 24h foi de ${bitcoinVariation}`);

        await browser.close();
    } catch (error) {
        console.error('Ocorreu um erro ao obter dados do Bitcoin:', error);
    }
}

/*
    //https://br.investing.com/crypto/bitcoin/btc-brl-converter
    //https://br.investing.com/currencies/usd-brl

const getVariationUrlDOL = (moedaPercent) => {
    const urlPorcentagem = `https://www.google.com/finance/quote/${moedaPercent}-BRL?sa=X&ved=2ahUKEwi0msGLq9qIAxXcqZUCHfHbB14Q-fUHegQIGhAf`

    return urlPorcentagem
}*/  //TODO need rework

async function scrapeDollarData() {
    try {
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();

        const URLconversorDOL = getCurrencyUrl(moedas[1].nome)
        
        await page.goto(URLconversorDOL);
        
        // Corrigido o seletor e o método de obtenção do valor
        const dollarValue = await page.$eval('.DFlfde.SwHCTb', el => el.textContent);
        console.log(`O preço atual do Dólar em Reais é ${dollarValue}`);

        const URLporcentagemDOL = getVariationUrlDOL(moedas[1].cod)
        await page.goto(URLporcentagemDOL);
        
        // Corrigido o seletor e o método de obtenção da variação
        const dollarVariation = await page.$eval('.JwB6zf', el => el.textContent);
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

//TODO fix errors
//TODO try to apply TypeScript
//TODO fix variation %

main();