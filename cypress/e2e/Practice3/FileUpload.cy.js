describe('My Test Suite',()=>{
    
    it("Single file upload", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.screenshot('screen1')
        cy.get('input#file-upload').attachFile('screen1.png')
        cy.get('input#file-submit').click()
        cy.wait(5000)
        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!', { timeout:20000 })
    
      })
      it("Rename the uploaded file", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('input#file-upload').attachFile({filePath:'screen1.png', fileName:'myfile.pdf'})
        cy.get('input#file-submit').click()
        cy.wait(5000)
        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')
    
      })

      // for multipe files upload we can write .attachFile[{'test1.pdf','test2.pdf'}]
      it("Drag and Drop a file", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('div#drag-drop-upload').last().attachFile('screen1.png', { subjectType: 'drag-n-drop' });
        cy.get('#drag-drop-upload  div[class*="filename"] > span').contains('screen1.png')
        cy.get('input#file-submit').click()
        cy.wait(5000)
    
      })

      //for shadowdom upload use  { includeShadowDom:true } inside the get method
      it.only("File Upload in Shadow Dom", ()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
    
        cy.get('input[class="smart-browse-input"]', {includeShadowDom:true}).attachFile('screen1.png')
        cy.wait(5000)
        cy.get('span[class="smart-item-name"]', { includeShadowDom:true }).contains('screen1.png')
       
        // cy.get('smart-ui-file-upload').shadow().find('smart-file-upload').find('div[class="smart-container"]').find('div[class="smart-file-upload-footer"]').find('smart-button[class*="smart-upload-all-button"]').click()
    
        cy.get('smart-button[class*="smart-upload-all-button"]', {includeShadowDom:true}).click()
      })
})