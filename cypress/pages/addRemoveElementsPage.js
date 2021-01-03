/**********************************************************************************************************************
 * This page object file is used for the the Adding and Removing Elements Page
 * It contains all needed functions to interact with the the Adding and Removing Elements Page
 ***********************************************************************************************************************/
import PageInteractions from "../utilities/page-interactions";
// import PageInteractions from '..utilities/page-interactions.js;

let data = require("../fixtures/addRemoveElements.json")
// this requires all the data needed inside the add remove elements json file 
let page = new PageInteractions()

class AddRemoveElements {
    visitUrl() {
        page.visit(data.url);
        //visiting the url of add remove elements page
    }
    addAnElement() {
        page.clickText(data.addElement.selector, data.addElement.text);
        // clicking on the add button to add an element 
        page.btnIsVisible(data.firstElement);
        // asserting that the element was added 

    }
    deleteAnElement() {
        cy.reload()
        // reload the page to be in the initial behavior of the page
        page.clickText(data.addElement.selector, data.addElement.text);
        // click on the add button to add an element 
        page.clickBtn(data.firstElement);
        // click on the delete button to delete the added element 
        page.btnNotVisible(data.firstElement);
        // asserting that the element was deleted 
    }
    addSeveralElements() {
        cy.reload()
        // reload the page to be in the initial behavior of the page
        for (let i = 0; i < 3; i++) {
            page.clickText(data.addElement.selector, data.addElement.text);
        }
        // the upper loop clicks on the add button three times to add 3 elements
        page.btnIsVisible(data.thirdElement);
        // asserting that the third element was added 

        page.btnIsVisible(data.secondElement);
        // asserting that the second element was added 

        page.btnIsVisible(data.firstElement);
        // asserting that the first element was added 


    }
    deleteSeveralElements() {
        cy.reload()
        for (let i = 0; i < 3; i++) {
            page.clickText(data.addElement.selector, data.addElement.text);
        }
        // the upper loop clicks on the add button three times to add 3 elements
        page.clickBtn(data.thirdElement);
        // clicking on the third delete button to delete the third element 

        page.btnNotVisible(data.thirdElement);
        // asserting that the third element is deleted 

        page.clickBtn(data.secondElement);
        // clicking on the second delete button to delete the second element 

        page.btnNotVisible(data.secondElement);
        // asserting that the second element is deleted 

        page.clickBtn(data.firstElement);
        // clicking on the first delete button to delete the first element 

        page.btnNotVisible(data.firstElement);
        // asserting that the first element is deleted 

    }

}
export default AddRemoveElements