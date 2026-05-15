function findLargest(numbers) {
  let largest = numbers[0]

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]
    }
  }

  return largest
}

const nums = [3, 7, 2, 9, 5]

console.log(findLargest(nums))