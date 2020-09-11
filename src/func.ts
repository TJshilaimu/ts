import { Deck, Mark, Color } from "./myType";

export function myPrint(arr:Deck): void {
    let str: string = '';
    arr.forEach((item, i) => {
       str += item.color+item.mark +'\t'
       if((i+1)%6 ===0){
           str +='\n'
       }
        
    })
    console.log(str)
}
export function card(): Deck {
    let result: Deck = [];
    let mark =Object.values(Mark)
    let color = Object.values(Color)
    for (const m of mark) {
        for (const c of color) {
            result.push({
                color:c,
                mark:m
            })           
        }
    }
    return result
}
