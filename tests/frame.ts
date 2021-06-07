describe('checkbox frame', function() {
    it('frame', function() {
        browser.url('https://demoqa.com/frames')
        browser.switchToFrame(0);
        const checktext = $('#sampleHeading').getText()
        console.log('checkingtext is ===' + checktext)
        
    })
   
})