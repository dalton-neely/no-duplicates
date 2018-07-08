const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', input => {
    let str = input.split(' ')
    let dup = false
    str.forEach((word1,index1) => {
        let count = 0
        str.forEach((word2,index2) => {
            if(word1 === word2)
                count++
        })
        if(count > 1)
            dup = true
    })
    if(dup)
        console.log('no')
    else
        console.log('yes')
    rl.close()
})