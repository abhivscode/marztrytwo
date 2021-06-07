describe('paytm', function() {
    it('Get title of paytm Home page', function() {
        browser.url('https://paytm.com/')
        browser.maximizeWindow()
        const title = browser.getTitle()
        console.log('Title is: ' + title)       
    })
    it('check move to ', function() {
       const broadband = $("//span[text()='DTH']");
       broadband.moveTo();   
       browser.pause(5000);
    })
})