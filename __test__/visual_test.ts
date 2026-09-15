const { I } = inject()
Feature('visual tests');

Before(() => {
    I.amOnPage('https://codecept.io/playwright/')
})

Scenario('seeVisualDiff',  () => {
    I.saveScreenshot('Playwright_doc.png');
    I.seeVisualDiff('Playwright_doc.png', {prepareBaseImage: false, tolerance: 20})
});

Scenario('seeVisualDiffForElement',  () => {
    I.saveElementScreenshot('h1#_top','element.png');
    I.seeVisualDiffForElement('h1#_top','element.png', {prepareBaseImage: false, tolerance: 20})
});
