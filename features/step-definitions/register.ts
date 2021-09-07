import {Given,When,Then} from "@cucumber/cucumber";
import chaipage from "../pageobjects/register.page"

Given(/^I am on practice page \"([^\"]*)\"$/,async function (appurl:string) {
    await browser.url(appurl)
    await browser.maximizeWindow()
  });

Then(/^I validate page header \"([^\"]*)\"$/,async function (headertext:string) {
    expect(await chaipage.getHeader()).toHaveText(headertext)
  });

When(/^I enter firstname (.+) and lastname (.+)$/,async function (fname:string, lname:string ) {
    await chaipage.enterFirstName(fname)
    await chaipage.enterLastName(lname)
  });

When(/^I select gender (.+) years (.+) favourite chai (.+) and reason (.+)$/,async function (gender:string, yrs:string, favchai:string, reason:string) {
    await chaipage.selectGender(gender)
    await chaipage.selectExperience(yrs)
    await chaipage.selectFavChai(favchai)
    await chaipage.selectWhyChai(reason)
  });

When(/^I select continent (.+) and commands (.+)$/,async function (continent:string, command:string) {
  
    await browser.pause(3000)
    await chaipage.selectContinent(continent)
    await browser.pause(3000)
    await chaipage.selectCommand(command)
    await browser.pause(5000)

  });

When(/^I click on submit button$/,async function () {
    await chaipage.clickOnSubmitBtn()
  });