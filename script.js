let handmaid = ['june', 'emily', 'alma', 'moira', 'janine']
console.log(handmaid)

handmaid.unshift('serena')
console.log(handmaid)

handmaid.pop()
console.log(handmaid)

handmaid.splice(5,0, 'dolores', 'bethany')
console.log(handmaid)

handmaid.shift()
console.log(handmaid)

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a, b){
    return (a-b)
})
console.log(numbers)