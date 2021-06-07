describe('checkbox Home Page', function() {
    it('Get title of Facebook Home page', function() {
        browser.url('https://the-internet.herokuapp.com/checkboxes')
        const title = browser.getTitle()
        console.log('Title is: ' + title)       
        
    })
    it('check for checkboxes', function() {
        
    })
})