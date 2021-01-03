/**********************************************************************************************************************
 * This file contains the Test Cases for the Dynamic Controls Page
 ***********************************************************************************************************************/

import DynamicControls from "../../pages/dynamicControlsPage";
//importing DynamicControls from ""../../pages/dynamicControlsPage"

let dynamicControlsPage = new DynamicControls()

describe("Test Cases for the Dynamic Controls Page", function () {
  beforeEach(function () {
    dynamicControlsPage.visitUrl()
    //visiting the dynamic controls page url
  });

  it(" User removes a checkbox", function () {
    dynamicControlsPage.removeCheckbox()
  });

  it(" User adds a checkbox", function () {
    dynamicControlsPage.addCheckbox()
  });

  it(" User enables a textfield", function () {
    dynamicControlsPage.enablesTextField()
  });

  it(" User disables a textfield", function () {
    dynamicControlsPage.disablesTextField()
  });
});
