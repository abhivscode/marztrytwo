describe('checkbox Home Page', function() {
    it('Get title of Facebook Home page', function() {
        browser.url('https://en-gb.facebook.com/')
       const links = $$('class.uiList pageFooterLinkList _509- _4ki _703 _6-i');
        console.log('The number of links is ' + links.length);
      
    })
   
})