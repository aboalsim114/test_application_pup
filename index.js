const puppeteer = require('puppeteer');

(async () => {
    // Lance le navigateur Chrome
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 60,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--disable-gpu',
            '--window-size=1920,1080',
            '--disable-infobars',
            '--hide-scrollbars',
            '--enable-logging',
            '--log-level=0',
            '--v=99',
            '--single-process',
            '--ignore-certificate-errors',
            '--homedir=/tmp',
            '--disk-cache-dir=/tmp',
            '--disable-application-cache',
            '--disable-offline-load-stale-cache',
            '--disk-cache-size=0',
        ],
    });

    // Ouvre une nouvelle page
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });

    // Navigue vers le site web à tester
    await page.goto('https://pup.staging.hieraug.fr/login');

    // Remplir le champ 'username'
    await page.type('#username', 'upr');

    // Remplir le champ 'password'
    await page.type('#password', 'upr');

    // Cliquer sur le bouton de connexion
    await page.click('#\\:r2\\:');

    await page.click('#root > div > main > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div > div > div > div > button');

    await page.type('#\\:r1k\\:-label', '12/31/2023');

    await page.type('#\\:r1l\\:', '8 - Ardennes');

    await page.keyboard.press('ArrowDown');


    await page.keyboard.press('Enter');

    await page.keyboard.press('Tab');

    await page.keyboard.type('Creteil');

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await page.keyboard.press('Tab');

    await page.keyboard.type('tester application');


    await page.click('#root > div > main > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.css-nwqe9y > div.MuiCardContent-root.css-1qw96cp > div > form > div.MuiStack-root.css-ikzlcq > div:nth-child(3) > button');

    await page.type("#\\:r1t\\:", "2");

    await page.keyboard.press('Tab');

    await page.keyboard.type('1');

    await page.keyboard.press('Tab');

    await page.type('.MuiCardContent-root .MuiStack-root > div:nth-child(3) > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-3.css-oow7cb', 'sav');

})();
