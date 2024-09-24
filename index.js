const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeCryptoData() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const valorBitcoinBase = 'Bitcoin'
        const valorBitcoinFinal = 'Real'
        const URLbit = `https://www.google.com.br/search?q=${valorBitcoinBase}+para+${valorBitcoinFinal}&sca_esv=a132f53bdbf2e8af&sca_upv=1&sxsrf=ADLYWIIHpeNk1YroQgjjA1Zjqf5avJWLew%3A1727135626989&ei=iv_xZpb4O8j41sQPzIzeiQk&ved=0ahUKEwiW5ZnModqIAxVIvJUCHUyGN5EQ4dUDCA8&uact=5&oq=${valorBitcoinBase}+para+${valorBitcoinFinal}&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWJpdGNvaW4gcGFyYSByZWFsMhAQABiABBixAxiDARhGGIICMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yHBAAGIAEGLEDGIMBGEYYggIYlwUYjAUY3QTYAQFIw2RQohJY2FdwBHgBkAEAmAHPAaABsBWqAQYzLjIwLjG4AQPIAQD4AQGYAhygAoMWwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgYQABgHGB7CAhMQLhiABBixAxiDARjHARgKGK8BwgIIEAAYExgHGB7CAgoQIxiABBgnGIoFwgIQEAAYgAQYsQMYQxiDARiKBcICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgQQIxgnwgIKEAAYgAQYQxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIQEC4YgAQY0QMYQxjHARiKBcICEBAuGIAEGLEDGEMYgwEYigXCAg0QLhiABBixAxhDGIoFwgIQEAAYgAQYsQMYgwEYFBiHAsICFBAuGIAEGLEDGNEDGIMBGMcBGIoFwgILEC4YgAQYsQMYgwHCAgoQABiABBgUGIcCwgIIEAAYgAQYywGYAwCIBgGQBgq6BgYIARABGBOSBwY1LjIyLjGgB9q1AQ&sclient=gws-wiz-serp`
        const URLsite = `https://www.google.com/finance/quote/BTC-BRL?sa=X&ved=2ahUKEwi0msGLq9qIAxXcqZUCHfHbB14Q-fUHegQIGhAf`
        await page.goto(URLbit);
        await page.goto(URLsite);
        
        const convertBit = await page.evaluate (() => { 
            return document.querySelector('.cilsF.a61j6').textContent
        });
        const variationBIT24h = await page.evaluate (() => {
            return document.querySelector('.JwB6zf').textContent
        });

        console.log(`O preço atual do Bitcoin em reais é ${convertBit}`);
        console.log(`A variação do Bitcoin nas últimas 24h foi de ${variationBIT24h}`);

        await browser.close();
    } catch (error) {
        console.log('Ocorreu um erro.', error);
    }
}

async function scrapeDollarData() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const valorDolarBase = 'Dolar'
        const valorDolarFinal = 'Real'
        const URLdol = `https://www.google.com.br/search?q=${valorDolarBase}+para+${valorDolarFinal}&sca_esv=a132f53bdbf2e8af&sca_upv=1&sxsrf=ADLYWIKhgSzdGsAX9FmCxnxTA92euBmJ6A%3A1727135743651&ei=___xZtK8J7Dw1sQPy56E8A0&oq=${valorDolarBase}+para+${valorDolarFinal}&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2RvbGFyIHBhcmEgcmVhbCoCCAAyEBAAGIAEGLEDGEMYgwEYigUyChAAGIAEGEMYigUyBRAAGIAEMgYQABgHGB4yBRAAGIAEMgYQABgHGB4yBRAAGIAEMgUQABiABDIGEAAYBxgeMgUQABiABEjYC1AAWKgEcAB4AZABAJgBdqABrwSqAQMwLjW4AQHIAQD4AQGYAgWgAr4EwgINEAAYgAQYsQMYgwEYDcICBxAAGIAEGA3CAggQABgTGAcYHpgDAJIHAzAuNaAHvR8&sclient=gws-wiz-serp` 
        const URLsite = `https://www.google.com/finance/quote/USD-BRL?sa=X&ved=2ahUKEwiF89n-qdqIAxXKvJUCHfUPPXMQmY0JegQIJxAw`
        await page.goto(URLdol);
        await page.goto(URLsite);

        const converDOL = await page.evaluate (() => { 
            return document.querySelector('.lWzCpb.a61j6').textContent
        });
        const variationDOL24h = await page.evaluate (() => {
            return document.querySelector('.JwB6zf').textContent
        });

        console.log(`O preço atual do dólar em reais é R$ ${converDOL}`);
        console.log(`A variação do dólar nas últimas 24h é de ${variationDOL24h}`);
    
        await browser.close();
    } catch (error) {
        console.log('Ocorreu um erro.', error);
    }
}

async function main() {
    await scrapeCryptoData();
    await scrapeDollarData();
}

//TODO fix errors

main();