describe('amazon Home Page', function() {
   
    it('Get title of amazon Home page', function() {
        browser.url('https://www.amazon.in/')
        const title = browser.getTitle()
        console.log('Title is: ' + title)               
    }) 
    it('search box', function() {
       const textbox = $('#twotabsearchtextbox');
        textbox.setValue('apple');
        textbox.doubleClick();
    })
    
}) 