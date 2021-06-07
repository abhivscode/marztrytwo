describe('check for is displayed', function() {
    it('herokuapp for is displayed', function() {
      browser.url('https://the-internet.herokuapp.com/dynamic_controls');
      const email = $('//button[text()="Enable"]') 
      browser.pause(3000)  
      const checkemaildisp = email.isDisplayed()
      console.log('check email ========', checkemaildisp);
      browser.pause(3000)  

            const msg = $("//p[@id='message']") 
      browser.pause(3000)  
      const msgdisp = msg.isDisplayed()
      console.log('check message ========', msgdisp);
      browser.pause(3000)  
     })
    })