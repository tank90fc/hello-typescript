const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  page.once('load', () => console.log('Page loaded!'));
  browser.on('targetcreated', async (target) => {
    //const pageList = await browser.pages();
    const page_n = await target.page();
    console.log('Browser opened new tab', page_n.url);
    //fs.writeFileSync('test1234.txt', 'Browser opened new tab', 'utf8');
    //const page_n = await new_page.page();
  });

  page.setDefaultNavigationTimeout(999999);
  await page.goto('https://s.taobao.com');
  var l1 = await page.frames().length;
  var l2 = await browser.pages.length;
  console.log(  l1 + ' ' + l2  );
  await page.type('#q', '显卡', {delay: 100});
  await page.waitFor(1000);
  await page.click('#J_SearchTab > li:nth-child(2) > a', {delay: 100});
  await page.waitFor(1000);

  await Promise.all([
    page.waitForNavigation() ,
    page.click('#J_SearchForm > div > div.search-button > button')
  ]);

  page.on('newpage', async (new_page) => {
    const url = new_page.url;
    //console.log('Browser opened new tab', url);
    fs.writeFileSync('test1234.txt', 'Browser opened new tab', 'utf8');
    const page_n = await new_page.page();
  });

  const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page())));
  await page.click('#list-container > li:nth-child(1) > ul > li.list-info.icon-5zhe > h4 > a.shop-name.J_shop_name');
  const newPage = await newPagePromise;
  await newPage.waitForNavigation();
  //await newPage.waitForSelector('#shop14980691901 > div > div > div > div > a > span');
  await newPage.click('#shop14980691901 > div > div > div > div > a > span', {delay: 2000})
  //await page.waitForNavigation({waitUntil:'networkidle0'});
  //await page.click('#list-container > li:nth-child(1) > ul > li.list-info.icon-5zhe > h4 > a.shop-name.J_shop_name',  {delay: 1000});
  //await page.waitForNavigation({waitUntil:'load'});
  //await page.waitForSelector('#list-container > li:nth-child(1) > ul > li.list-info.icon-5zhe > h4 > a.shop-name.J_shop_name');
  //await page.click('#list-container > li:nth-child(1) > ul > li.list-info.icon-5zhe > h4 > a.shop-name.J_shop_name', {delay: 2000});
  //await page.waitFor(1000);
  //const pages = await browser.pages();
 // await pages[2].waitForNavigation({waitUntil:'load'});
  //await pages[2].waitForSelector('#shop14980691901 > div > div > div > div > a > span');
  //await pages[2].click('#shop14980691901 > div > div > div > div > a > span', {delay: 2000})

  /*const pages = await browser.pages();
  let str = await pages[1].evaluate(() => {
    return document.querySelector('html').outerHTML;
  });
  fs.writeFileSync('test1111.txt', str, 'utf8');*、
  //console.log(str);


  //frameTemp.
  //await page.click('#J_SearchForm > div > div.search-button > button', {delay: 2000});
  //const iframe = page.frames()[1];

  //const temp = await iframe.$('#m-shoplist');  //var l3 = frameTemp
  //console.log(  l1 + ' ' + l2  );
  //await page.click('#list-container > li:nth-child(1) > ul > li.list-info.icon-5zhe > h4 > a.shop-name.J_shop_name', {delay: 2000})
  //const temp = await page.$('#m-shoplist');
  //console.log(  browser.pages.length  );

  //const temp = await page.$x('//*[@id="q"]');
  //temp[0].asElement().type("内存", {delay: 100});

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
  page.close();

  await browser.close();

})()
