describe('crmpro Home Page', () => {
    it('check for forgotten password', async () => {
        await browser.url('https://www.crmpro.com/')
        browser.maximizeWindow();
        const title = await browser.getTitle()
        console.log('Title is: ' + title)  
        const investnow = await $('=Forgot Password?');
        await investnow.scrollIntoView();
        browser.pause(5000);
        
       
    })
   })