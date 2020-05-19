export function ex136 (){
    let t = 1200/50+24*125-3600/25+456*99

    return "t = " + t
}

export function ex137 (){
    //let p = 

let cels_ = {y: 1741, m: 12, d:0}
let now_ = {y: 2020, m: 5, d:17}
let cels = dateToDays(cels_)
let now = dateToDays(now_)

let diff = now - cels // 

return  daysToDate( diff)

}


function dateToDays ({y,m,d})
{
    let days = y * 365 + m * 30 + d
    return days
}

function daysToDate (days)
{
    let y = Math.floor(days/ 365)
    let m = Math.floor((days - y*365)/30)
    let d = (days - y*365 - m*30)

    return {y, m, d}
}

