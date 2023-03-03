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
    let tense = arr[0]+','
    let number = ' '+arr[1]
    let person
    switch (arr[2]) {
        case '0':
            person = ''
            break;
        case '1':
            person = ', first person'
            break;
        case '2':
            person = ', second person'
            break;
        case '3':
            person = ', third person'
            break;
        default:
            person = ''
            break;
    }
    let gender = arr[3] === '0'?'':(', '+arr[3])
    return(tense+number+person+gender)
}

const PRESENT = []
for (let i = 4; i<=7; i++){
    PRESENT.push(i)
}

const PAST = []
for (let i = 8; i<=16; i++){
    PAST.push(i)
}

const FUTURE = []
for (let i = 17; i<=21; i++){
    FUTURE.push(i)
}
for (let i = 23; i<=25; i++){
    FUTURE.push(i)
}

const IMPERATIVE = []
for (let i = 27; i<=29; i ++){
    IMPERATIVE.push(i)
}


export const tensesForms = {'Past': PAST,'Present':PRESENT, 'Future':FUTURE, 'Imperative':IMPERATIVE}
export const tenses = ['Past','Present', 'Future', 'Imperative']
export const binyanim = ["PA'AL", "PI'EL", "HIF'IL", "HITPA'EL", "NIF'AL"]