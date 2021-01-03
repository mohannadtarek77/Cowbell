/**********************************************************************************************************************
 * This file contains the Test Cases for the Login Page
 ***********************************************************************************************************************/
import Login from "../../pages/loginPage";
//importing Login from ""../../pages/loginPage"

let loginPage = new Login();

describe("Test Cases for the Login Page", function () {
  beforeEach(function () {
    loginPage.visitUrl()
    //visiting the login's page url
  })
  it("User Logs In with Valid UserName and Password", function () {
    loginPage.submitValidNamePassword()
  });

  it("User Logs In with Invalid UserName and Password", function () {
    loginPage.submitInValidNamePassword()
  });

  it("User Logs In with Invalid Email and Password", function () {
    loginPage.submitInValidEmailPassword()
  });

  it("User Logs In with Empty Credentials", function () {
    loginPage.submitEmptyCredentials()
  });

  it("User Logs In with UserName only", function () {
    loginPage.submitUserNameOnly()
  });

  it("User Logs In with Password only", function () {
    loginPage.submitPasswordOnly()
  });

  it("User Logs In with an Email only", function () {
    loginPage.submitEmailOnly()
  });

  it("User Logs In with an Invalid Password format", function () {
    loginPage.submitInvalidPasswordFormat()
  });

  it("User Logs In with an Invalid UserName format", function () {
    loginPage.submitInvalidUsernameFormat()
  });


});
