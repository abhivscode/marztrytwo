describe('checkbox Home Page', function() {
    it('Get title of Facebook Home page', function() {
        browser.navigateTo('https://en-gb.facebook.com/')
        $("//a[text()='Create a Page']").click();
       browser.back()
       browser.pause(2000)
        browser.forward();
        browser.pause(2000)
        browser.refresh();
        
    })
   
})