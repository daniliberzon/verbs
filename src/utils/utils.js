export function getRandomN(n, min, max){
    let res = []
    while(res.length < n){
        let i = Math.round(Math.random()*(max-min)) + min
        if (!res.includes(i)){
            res.push(i)
        }
    }
    return res
}

export function shuffle(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

export function decodeForm(s){
    let arr = s.split('/')
    let tense = arr[2]+','
    let person
    switch (arr[3]) {
        case '0':
            person = ''
            break;
        case '1':
            person = ' first person,'
            break;
        case '2':
            person = ' second person,'
            break;
        case '3':
            person = ' third person,'
            break;
        default:
            person = ''
            break;
    }
    let number = ' '+arr[4]
    let gender = arr[5] === '0'?'':(', '+arr[5])
    return(tense+person+number+gender)
}