const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!

  // Can you add a single number to an existing row?
  arr[2].push(30)

  // Can you add a whole new row of numbers?
  arr.push([31,32,32,34,35,36,37,38,39,40])

  // Can you remove a single number from a single row?
  arr[0].splice(0,1)

  // Can you reverse one of the rows without affecting the others
  arr[1].reverse()
  console.log(arr)
  
  // Type your code above this line!