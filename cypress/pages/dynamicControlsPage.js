/**********************************************************************************************************************
 * This page object file is used for the Dynamic Controls Page
 * It contains all needed functions to interact with the Dynamic Controls Page
 ***********************************************************************************************************************/
import PageInteractions from "../utilities/page-interactions";
// import PageInteractions from '..utilities/page-interactions.js;

let data = require("../fixtures/dynamicControls.json")
// this requires all the data needed inside the dynamic controls json file 
let page = new PageInteractions()

class DynamicControls {
    visitUrl() {
        page.visit(data.url);
        //visiting the url of login page
    }
    removeCheckbox() {
        this.checkForRemovedCheckBox()
        page.clickBtn(data.removeAddBtn.selector);
        //clicking on the remove button to remove the checkbox
        page.btnNotVisible(data.checkbox.selector);
        // asserting that the checkbox is removed 
        page.isTxtVisible(data.checkbox.removedCheckboxValidation);
        //asserting on the removed checkbox validation message

    }
    addCheckbox() {
        this.checkForAddedCheckbox()
        for (let i = 0; i < 2; i++) {
        // this loop returns back to the initial state of the app,which is  neither addition nor removal was done for the checkbox    
            page.clickBtn(data.removeAddBtn.selector);
        //clicking on the add button to add the checkbox
        }
        cy.wait(3000);
        page.isTxtVisible(data.checkbox.selector)
        // asserting that the checkbox is added 
        page.isTxtVisible(data.checkbox.addedCheckboxValidation);
        //asserting on the added checkbox validation message

    }
    enablesTextField() {
        this.checkForEnabledTextField()
        page.clickBtn(data.enableBtn.selector);
        //clicking on the disable button to enable the textfield
        cy.wait(3000);
        page.enable(data.textField.selector);
        // asserting that the textfield is enabled 
        page.isTxtVisible(data.textField.enabledFieldValidation);
        //asserting on the enabled textfield validation message

    }
    disablesTextField() {
        this.checkForDisabledTextField()
        page.clickBtn(data.enableBtn.selector);
        //clicking on the enable button to enable the textfield
        cy.wait(3000);
        page.enable(data.textField.selector);
        // asserting that the textfield is enabled 
        page.clickBtn(data.enableBtn.selector);
        //clicking on the disable button to disable the textfield
        page.disable(data.textField.selector);
        // asserting that the textfield is disabled 
        page.isTxtVisible(data.textField.disabledFieldValidation);
        //asserting on the disabled textfield validation message
    }

    checkForRemovedCheckBox() {
        return assert.isOk(data.checkbox.expectedRemovedCheckBox)
        // readable assertion for the removed checkbox validation message
    }
    checkForAddedCheckbox() {
        return assert.isOk(data.checkbox.expectedAddedCheckBox)
        // readable assertion for the added checkbox validation message
    }
    checkForEnabledTextField(){
        return assert.isOk(data.textField.expectedEnabledField)
        // readable assertion for the enabled textfield validation message
    }
    checkForDisabledTextField(){
        return assert.isOk(data.textField.expectedDisabledField)
        // readable assertion for the disabled textfield validation message
    }
}
export default DynamicControls
