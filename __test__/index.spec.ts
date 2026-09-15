import ResembleHelper from "../src";
import helpers from '@codeceptjs/helper'

let helper = new ResembleHelper({	baseFolder: './__test__/screenshots/base/',
    diffFolder: './__test__/screenshots/diff/',
    screenshotFolder: './__test__/output',
    prepareBaseImage: true })

describe('_getHelper()', () => {
    test('should return error when no matching helper found', () => {
        try {
            helper._getHelper()
        } catch (e: any) {
            expect(e.message).toEqual('No matching helper found. Supported helpers: Playwright/Puppeteer/WebDriver/TestCafe/Appium')
        }
    });
})

describe('_getPrepareBaseImage()', () => {
    beforeAll(() => {
    })
    test('should return false when no prepareBaseImage is provided', () => {
        expect(helper._getPrepareBaseImage({ prepareBaseImage: false, tolerance: 1 })).toBeFalsy()
    });

    test('should return true when prepareBaseImage matched with config', () => {
        expect(helper._getPrepareBaseImage({ prepareBaseImage: true })).toBeTruthy()
    });
})

describe('_getDiffImagePath()', () => {
    beforeAll(() => {
    })
    test('should return diffImagePath', () => {
        expect(helper._getDiffImagePath('hello')).toContain('Diff_hello.png')
    });

})

describe('_getActualImagePath()', () => {
    beforeAll(() => {
    })
    test('should return ActualImagePath', () => {
        expect(helper._getActualImagePath('hello')).toContain('hello')
    });

})

describe('_getBaseImagePath()', () => {
    beforeAll(() => {
    })
    test('should return BaseImagePath', () => {
        expect(helper._getBaseImagePath('hello', {})).toContain('hello')
    });

})

describe('resolvePath()', () => {
    beforeAll(() => {
    })
    test('should return resolvePath', () => {
        expect(helper.resolvePath('hello')).toContain('hello')
    });
})
