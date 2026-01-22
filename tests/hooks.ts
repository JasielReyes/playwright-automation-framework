import { Before, After, AfterStep } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import fs from 'fs';
import path from 'path';
import { logger } from '../core/Logger';
import { generatePdfReport } from '../core/PdfReport';

const stepEvidences: {
  index: number;
  status: string;
  imagePath: string;
}[] = [];


const executionMetadata = {
  scenarioName: '',
  executionDate: '',
  browser: 'Chromium',
  environment: 'QA'
};

let scenarioName: string;
let browser: Browser;
let page: Page;
let stepIndex = 0;

Before(async function (scenario) {
  scenarioName = scenario.pickle.name.replace(/\s+/g, '_');
  stepIndex = 0;
  stepEvidences.length = 0;

  executionMetadata.scenarioName = scenarioName;
  executionMetadata.executionDate = new Date().toLocaleString();


  const scenarioDir = path.join('reports', 'screenshots', scenarioName);

  // Limpia evidencias previas (sobrescribe ejecución)
  if (fs.existsSync(scenarioDir)) {
    fs.rmSync(scenarioDir, { recursive: true, force: true });
  }

  fs.mkdirSync(scenarioDir, { recursive: true });

  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();

  //PAGES
  this.page = page;
  this.browser = browser;
  this.context = context;

});

AfterStep(async function ({ pickleStep, result }) {
  stepIndex++;

  const status = result?.status || 'UNKNOWN';

  const imagePath = path.join(
    'reports',
    'screenshots',
    scenarioName,
    `step-${String(stepIndex).padStart(2, '0')}-${status}.png`
  );

  await page.screenshot({ path: imagePath });

  stepEvidences.push({
    index: stepIndex,
    status,
    imagePath
  });


  logger.info(`Step - ${stepIndex}: ${pickleStep.text} | STATUS: ${status}`);
});



After({ timeout: 20000 }, async function () {
  generatePdfReport(executionMetadata, stepEvidences);
  await page.pause();
  await browser.close();
});

export { page };
