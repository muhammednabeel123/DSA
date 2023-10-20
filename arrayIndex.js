const set = new Set('aeiou')
let names = "nabeel"
let other = ""

for(let i =0  ;i < names.length; i++){
    if(!set.has(names[i])){
        other += names
    }
} 



