describe('facebook Home Page', function() {
        it('Get title of Facebook Home page', function() {
        browser.url('https://en-gb.facebook.com/')
        const title = browser.getTitle()
        console.log('Title is: ' + title)  
        console.log('URL IS ', browser.getUrl());          
    })
    it('click on radio btn', function() {
        const link_createaccount_loginpage_facebook =  $('//a[text()="Create New Account"]')
         link_createaccount_loginpage_facebook.click();
    const radio = $('(//input[@type="radio"])[2]');
     console.log('check radio btn selected not warti ==',  radio.isSelected());    
     radio.click();
     browser.pause(5000);
     let checkselected = radio.isSelected();    
        console.log('check radio btn selected ==' ,checkselected);
     })
   })
