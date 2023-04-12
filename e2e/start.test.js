/* eslint-disable jest/expect-expect */
import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('page start', () => {
  let browser;
  let page;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    //открыть браузер
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 150,
      // devtools: true,
    });

    //просим браузер открыть новую страницу
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('testing count target elem', async () => {
    const arrpopover = await page.$$('[data-toggle="popover"]');
    expect(arrpopover.length).toBe(11);
  });

  test('testing click elem 1', async () => {
    const btn = await page.$('[data-toggle="popover"]');
    await btn.click();
    expect(await page.$eval('.tooltip', (e) => (e ? true : false))).toBe(true);
    await btn.click();
    expect(await page.$('.tooltip')).toBe(null);
  });

  test('testing click elem 2', async () => {
    const btn = await page.$$('[data-toggle="popover"]');
    await btn[1].click();
    expect(await page.$eval('.tooltip', (e) => (e ? true : false))).toBe(true);
    await btn[1].click();
    expect(await page.$eval('.tooltip', (e) => (e ? true : false))).toBe(true);
    const body = await page.$('body');
    await body.click();
    expect(await page.$('.tooltip')).toBe(null);
  });

  test('testing click elem 3', async () => {
    const btn = await page.$$('[data-toggle="popover"]');
    await btn[2].click();
    expect(await page.$eval('.tooltip', (e) => (e ? true : false))).toBe(true);
    await page.waitForTimeout(3100);
    expect(await page.$('.tooltip')).toBe(null);
  });
});
