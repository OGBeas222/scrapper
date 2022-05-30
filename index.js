import cherio from 'cherio'
import chalk from 'chalk'
import {slugify} from "transliteration";
import {arrayFromLength} from './helpers/common.js'
import {getPageContent} from './helpers/puppeteer.js'



const SITE = 'http://anekdotov.net/anekdot/today.html'
const pages = 1;

(async function main(){
    try{
        for(const page of arrayFromLength(pages)){
            const url = `${SITE}${page}`
            const pageContent = await getPageContent(url);
            const $ = cherio.load(pageContent);
            const anekdotItems = [];
            const authorItems = [];

            $('.anekdot').each((i,header)=>{

             var phrase = $(header).text()

                var arr = [i];

                for(let index = 0 ; index < arr.length;index++)
                {

                    arr[index] +=  `${phrase}`;
                }

                // arr[i] = authorItems[i];
                console.log(arr)

            })
            // $('#main > .author').each((i,header)=>{
            //     const url = $(header).attr('name')
            //     const author = $(header).text()
            //     authorItems.push({
            //         author,
            //         url,
            // })
            // })
            console.log(anekdotItems);
        }
    }catch (err){
        console.log(chalk.red('An error has occured \n'))
        console.log(err)
    }
})()