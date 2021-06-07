it('should switch to another window', () => {
    browser.url('https://google.com')
    browser.pause(2000)
    browser.newWindow('https://webdriver.io')
    browser.pause(2000)
    browser.switchWindow('google.com')
    browser.pause(2000)
});