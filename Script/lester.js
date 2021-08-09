// Web Scraping made simple with JAVASCRIPT tutorial
// https://www.youtube.com/watch?v=TzZ3YOUhCxo
const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // If object is image
  const [el] = await page.$x('InsertScrapingElement');
  const src = await el.getProperty('src');
  const imgURL = await src.jsonValue();

  // if object is text
  const [el2] = await page.$x('InsertScrapingElement');
  const txt = await el2.getProperty('textContent');
  const title = await txt.jsonValue();

  // if object is price
  const [el3] = await page.$x('InsertScrapingElement');
  const txt2 = await el3.getProperty('textContent');
  const price = await txt2.jsonValue();
  console.log({ imgURL, title, price });
  browser.close();
}

scrapeProduct('InsertWebAdress');
