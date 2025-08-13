import Dcpage from "../../Pages/Dcpage";

describe('Page Object Model', () => {
    it("Dynamic content", () => {
        
   let prev;
   Dcpage.DcpageUrl()
      Dcpage.getTextBlocks().then((text1) => {
      prev = text1;
      Dcpage.reloadPage();
      Dcpage.getTextBlocks().then((text2) => {
      Dcpage.compareTexts(prev, text2);
      });
    });

  });     
})
        

