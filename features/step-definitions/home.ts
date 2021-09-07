import { Given, Then } from "@cucumber/cucumber";

Given(/^I am open the Internet page (.+)$/, async function (homepageurl) {
    await browser.url(homepageurl)
    await browser.maximizeWindow()
});

Then(/^I should see a header message (.+)$/, async function (headermessage) {
    const header = await $('.heading')
    expect(await header.getText()).toEqual(headermessage)

});