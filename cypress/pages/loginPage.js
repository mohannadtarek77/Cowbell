/**********************************************************************************************************************
 * This page object file is used for the Login Page
 * It contains all needed functions to interact with the Login Page
 ***********************************************************************************************************************/
import PageInteractions from "../utilities/page-interactions";
// import PageInteractions from '..utilities/page-interactions.js;

let data = require("../fixtures/login.json")
// this requires all the data needed inside the login's json file 
let page = new PageInteractions()

class Login {
    visitUrl() {
        page.visit(data.url);
        //visiting the url of login page
    }
    submitValidNamePassword() {
        this.checkForValidCredentials()
        page.writeTxt(
            data.username.selector,
            data.username.validName
        );
        //typing the valid username
        page.writeTxt(
            data.password.selector,
            data.password.passwordValue
        );
        //typing the valid password
        page.clickBtn(data.loginButton);
        //clicking on the login button
        page.isTxtVisible(data.validCredentialsValidation);
        //asserting on the valid credentials validation message
    }
    submitInValidNamePassword() {
        this.checkForInValidCredentials()
        page.writeTxt(
            data.username.selector,
            data.username.invalidName
        );
        //typing the invalid username
        page.writeTxt(
            data.password.selector,
            data.password.invalidPassword
        );
        //typing the invalid password
        page.clickBtn(data.loginButton);
        //clicking on the login button
        page.isTxtVisible(data.invalidCredentialsValidation);
        //asserting on the invalid credentials validation message
    }
    submitInValidEmailPassword() {
        this.checkForInValidCredentials()
        page.writeTxt(
            data.username.selector,
            data.username.invalidEmail
        );
        //typing the invalid username
        page.writeTxt(
            data.password.selector,
            data.password.invalidPassword
        );
        //typing the invalid password
        page.clickBtn(data.loginButton);
        //clicking on the login button
        page.isTxtVisible(data.invalidCredentialsValidation);
        //asserting on the invalid credentials validation message
    }
    submitEmptyCredentials() {
        this.checkForInValidCredentials()
        page.clickBtn(data.loginButton);
        //clicking on the login button
        page.isTxtVisible(data.invalidCredentialsValidation);
        //asserting on the validation message
    }
    submitUserNameOnly() {
        this.checkForInValidPassword()
        page.writeTxt(
            data.username.selector,
            data.username.validName
        );
        //typing the valid username
        page.clickBtn(data.loginButton);
        //clicking on the login button
        page.isTxtVisible(data.invalidPasswordValidation);
        //asserting on the invalid validation message
    }
    submitPasswordOnly() {
        this.checkForInValidCredentials()
        page.writeTxt(
            data.password.selector,
            data.password.passwordValue
        );
        //typing the valid password
        page.clickBtn(data.loginButton);
        //clicking on the login button
        page.isTxtVisible(data.invalidCredentialsValidation);
        //asserting on the valid credentials validation message

    }
    submitEmailOnly() {
        this.checkForInValidCredentials()
        page.writeTxt(
            data.username.selector,
            data.username.email
        );
        //typing the email 

        page.clickBtn(data.loginButton);
        //clicking on the login button
        page.isTxtVisible(data.invalidCredentialsValidation);
        //asserting on the validation message
    }
    submitInvalidPasswordFormat() {
        this.checkForInValidCredentials()
        page.nameGen(data.username.selector);
        //typing the username
        page.nameGen(data.password.selector);
        //typing several characters without any symbols in the password field as a wrong format for the password
        page.clickBtn(data.loginButton);
        //clicking on the login button
        page.isTxtVisible(data.invalidCredentialsValidation);
        //asserting on the validation message
    }
    submitInvalidUsernameFormat() {
        this.checkForInValidCredentials()
        page.numberGen(data.username.selector);
        //typing a number in the username field as a wrong format for the username
        page.passwordGen(data.password.selector);
        //typing the password
        page.clickBtn(data.loginButton);
        //clicking on the login button
        page.isTxtVisible(data.invalidCredentialsValidation);
        //asserting on the validation message
    }
    checkForValidCredentials() {
        return assert.isOk(data.expectedValidValidation)
        // Product Owner's readable assertion for the expected valid validation message
    }
    checkForInValidCredentials() {
        return assert.isOk(data.expectedInValidValidation)
        // Product Owner's readable assertion for the expected invalid validation message
    }
    checkForInValidPassword() {
        return assert.isOk(data.expectedInValidPasswordValidation)
        // Product Owner's readable assertion for the expected invalid validation message
    }
}
export default Login
