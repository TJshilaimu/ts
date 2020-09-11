//创建一副牌并打印出来（无大、小王）
function card() {
    var result = [];
    for (var i = 1; i <= 13; i++) {
        result.push({
            color: "♥",
            mark: i
        });
        result.push({
            color: "♠",
            mark: i
        });
        result.push({
            color: "♣",
            mark: i
        });
        result.push({
            color: "♦",
            mark: i
        });
    }
    return result;
}
function print(arr) {
    var str = '';
    arr.forEach(function (item, i) {
        if (i % 6 == 0) {
            str += '\n';
        }
        if (item.mark == 11) {
            str += item.color + 'J' + '\t';
        }
        else if (item.mark == 12) {
            str += item.color + 'Q' + '\t';
        }
        else if (item.mark == 13) {
            str += item.color + 'K' + '\t';
        }
        else {
            str += item.color + item.mark + '\t';
        }
    });
    console.log(str);
}
var data = card();
print(data);
// type Deck = NormalCard[]
// type Color = "♥" | "♠" | "♦" | "♣";
// type NormalCard = {
//     color: Color
//     mark: number
// }
// function createDeck(): Deck {
//     const deck: Deck = [];
//     for (let i = 1; i <= 13; i++) {
//         deck.push({
//             mark: i,
//             color: "♠"
//         })
//         deck.push({
//             mark: i,
//             color: "♣"
//         })
//         deck.push({
//             mark: i,
//             color: "♥"
//         })
//         deck.push({
//             mark: i,
//             color: "♦"
//         })
//     }
//     return deck;
// }
// function printDeck(deck: Deck) {
//     let result = "\n";
//     deck.forEach((card, i) => {
//         let str = card.color;
//         if (card.mark <= 10) {
//             str += card.mark;
//         }
//         else if (card.mark === 11) {
//             str += "J";
//         }
//         else if (card.mark === 12) {
//             str += "Q";
//         }
//         else {
//             str += "K";
//         }
//         result += str + "\t";
//         if ((i + 1) % 6 === 0) {
//             result += "\n";
//         }
//     })
//     console.log(result);
// }
// const deck = createDeck();
// printDeck(deck);
