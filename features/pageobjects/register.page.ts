import Page from "./page";

class ChaiRegister extends Page{
    private get header(){return $('//h1')}
    private get fname(){ return $('[name=firstname]')}
    private get lname(){ return $('[name=lastname]')}
    private get gender(){ return $$('[name=sex]')}
    private get experience(){ return $$('[name=exp]')}
    private get favchai(){ return $$('[name*="Tea"]')}
    private get whychai(){ return $$('[name=tool]')}

    private get continents(){ return $('#continents')}
    private get selcommands() { return $('#selenium_commands')}

    private get submit(){ return $('#submit')}

    async selectDropdown(element:WebdriverIO.ElementArray,value:string){
        for (let i = 0; i < element.length; i++) {
            const elem = await (element[i]).getAttribute('value');
            if(elem===value){
              await(element[i]).click()
              break;
            }  
        }
    }

    async getHeader(){
        return this.header
    }
    async enterFirstName(firstname:string){
        await (await this.fname).setValue(firstname)
    }

    async enterLastName(lastname:string){
        await (await this.lname).setValue(lastname)
    }

    async selectGender(gender:string){
        await this.selectDropdown(await this.gender,gender)
    }

    async selectExperience(yrs:string){
        await this.selectDropdown(await this.experience,yrs)
    }

    async selectFavChai(favchai:string){
        await this.selectDropdown(await this.favchai,favchai)
    }

    async selectWhyChai(reason:string){
        await this.selectDropdown(await this.whychai,reason)
    }

    async selectContinent(continent:string){
        await (await this.continents).selectByVisibleText(continent)
    }
    async selectCommand(command:string){
        await (await this.selcommands).selectByVisibleText(command)
    }

    async clickOnSubmitBtn(){
        await (this.submit).click()
    }

}
export default new ChaiRegister()