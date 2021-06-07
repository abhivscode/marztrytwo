describe('keys', function() {
    it('keys action perform', function() {
        browser.url('https://the-internet.herokuapp.com/key_presses')
        const title = browser.getTitle()
        console.log('Title is: ' + title)       
    })
    it.skip('check keys ', function() {
       const enterKey = $('#target');
       enterKey.setValue("Enter"); // https://w3c.github.io/webdriver/#keyboard-actions
       const result = $('#result').getText();
       browser.pause(3000);
       console.log('check getText : ' , result);
       browser.pause(5000);
       
    })
    it('check keys ', function() {
        browser.pause(5000)
        browser.keys('Enter');
        browser.pause(5000);
        browser.keys('Space');
        browser.pause(2000);
        
     })
})