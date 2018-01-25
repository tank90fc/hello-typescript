const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(999999);
  await page.goto('https://s.taobao.com');
  //await page.goto('http://www.baidu.com');
  //await page.type('#kw', 'puppeteer', {delay: 100});
  //page.click('#su')
  //const inputElement = await page.$('input[type=submit]');
  //await inputElement.click();
  //const html = await page.mainFrame().$('.page-info');
  //const html = await page.mainFrame().$eval('.page-info', e => e.outerHTML);

  //const pageinfo = document.querySelector('.page-info');
  //for (let child of html)
 //   console.log(child)

  //await page.waitFor(1000);
  //const body = await page.mainFrame().$('body');
  //await page.mainFrame().executionContext
  //fs.writeFileSync('test.txt', html, 'utf8');
 /*let str = await page.evaluate(() => {
    const pageinfo = document.querySelector('.page-info');
    const pageinfoParent = pageinfo.parentElement;
    //console.log(pageinfo.outerHTML)
    return pageinfoParent.outerHTML;
    //const pageinfo = document.querySelector('.page-info');
    //console.log(pageinfo);
    //for (let child of pageinfo.children)
    //  console.log(child)
   //   dumpFrameTree(child, indent + '  ');    /*return [...document.querySelectorAll('.result a')].filter(item => {
   //   return item.innerText && item.innerText.includes('Puppeteer的入门和实践')
   // }).toString()
  });*/

  //fs.writeFileSync('test.txt', str, 'utf8');
  //const pageinfo = myDoc.querySelector('.page-info');
  //await page.goto(targetLink);
  await page.waitFor(999999);
  browser.close();
})()
