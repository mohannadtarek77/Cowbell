/**********************************************************************************************************************
 * This file contains the Test Cases for the Adding and Removing Elements Page
 ***********************************************************************************************************************/

import AddRemoveElements from "../../pages/addRemoveElementsPage";
//importing AddRemoveElements from ""../../pages/addRemoveElementsPage"

let addRemoveElementsPage = new AddRemoveElements()

describe("Test Cases for the Adding and Removing Elements Page", function () {
    beforeEach(function () {
        addRemoveElementsPage.visitUrl()
        //visiting the add remove elements page url
    });

    it("User adds an element", function () {
        addRemoveElementsPage.addAnElement()
    });

    it("User deletes an element", function () {
        addRemoveElementsPage.deleteAnElement()
    });

    it("User adds several elements", function () {
        addRemoveElementsPage.addSeveralElements()
    });

    it("User deletes several elements", function () {
        addRemoveElementsPage.deleteSeveralElements()
    });
});
