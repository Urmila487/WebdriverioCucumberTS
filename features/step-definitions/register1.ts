import {Given,When,Then} from "@cucumber/cucumber";

Given(/^I am on practice page \"([^\"]*)\"$/,async function (appurl:string) {
    await browser.url(appurl)
    await browser.maximizeWindow()
  });

Then(/^I validate page header \"([^\"]*)\"$/,async function (headertext:string) {
    const header = $('//h1')
    expect(await header).toHaveText(headertext)
  });

When(/^I enter firstname (.+) and lastname (.+)$/,async function (fname:string, lname:string ) {
    const fname_input =  $('[name=firstname]')
    const lname_input =  $('[name=lastname]')

    await(await fname_input).setValue(fname)
    await(await lname_input).setValue(lname)    
  });

When(/^I select gender (.+) years (.+) favourite chai (.+) and reason (.+)$/,async function (gender:string, yrs:string, favchai:string, reason:string) {
    const gender_radio = await $$('[name=sex]') 
    const experience_radio = await $$('[name=exp]')
    const favchai_checkbox = await $$('[name*=Tea]')
    const whychai_checkbox = await $$('[name=tool]')

    for (let i = 0; i < gender_radio.length; i++) {
      const element = await (gender_radio[i]).getAttribute('value');
      if(element === gender){
        await(gender_radio[i]).click()
        break;
      } 
    }

    for (let i = 0; i < experience_radio.length; i++) {
      const element = await (experience_radio[i]).getAttribute('value');
      if(element===yrs){
        await(experience_radio[i]).click()
        break;
      }  
    }

    for (let i = 0; i < favchai_checkbox.length; i++) {
      const element = await (favchai_checkbox[i]).getAttribute('value');
      if(element===favchai){
        await(favchai_checkbox[i]).click()
        break;
      }
    }

    for (let i = 0; i < whychai_checkbox.length; i++) {
      const element = await (whychai_checkbox[i]).getAttribute('value');
      if(element===reason){
        await(whychai_checkbox[i]).click()
        break;
      }
    }


  });

When(/^I select continent (.+) and commands (.+)$/,async function (continent:string, command:string) {
    const continent_dropdown = $('#continents')
    const selcommands_multiselect = $('#selenium_commands')

    await browser.pause(10000)
    await (await continent_dropdown).selectByVisibleText(continent)
    await browser.pause(10000)
    await (await selcommands_multiselect).selectByVisibleText(command)
    await browser.pause(10000)

  });

When(/^I click on submit button$/,async function () {
    const submit_btn = await $('#submit')
    await submit_btn.click()
  });