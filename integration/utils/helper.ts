export class Helpers {
   
    //function to get current year
    public getCurrentYear(){
   
        const getDate = new Date();
        const getCurrentYear = getDate.getFullYear().toString();

        return getCurrentYear;
    };

    //get random numbers between a range
    public getRandomNumber(min:number, max:number):number{
   
        min = Math.ceil(min);
        max = Math.ceil(max);

        return Math.floor(Math.random() * (max-min) + min);
    };

    //get currency format
    public getCurrency(locale:string, currency:string, amount:number):string{
           return Intl.NumberFormat(locale,{style:'currency', currency:currency}).format(amount);
    };

    //Parse a message
    public parseString(locator:string, splitter:string): string[] {
        const stringArr = locator.split(splitter);
        return stringArr;

    }

    

}