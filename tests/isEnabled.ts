describe('check for wait untill function', function() {
    it('check wait until', function() {
        browser.url('https://the-internet.herokuapp.com/dynamic_controls');
        browser.maximizeWindow();
       //let check = $('//input[@type="text"]').isDisplayed(); // it wil print true
        let checkd = $('//input[@type="text"]').isEnabled();
        console.log("check is enabled first ==>" , checkd) ; 
  
        browser.pause(1000);
        $('//button[text()="Enable"]').click();
        browser.pause(5000);
        let checke = $('//input[@type="text"]').isEnabled();
        console.log("check is enabled second ==>" , checke) ; 
        browser.pause(5000);  
      })
  })