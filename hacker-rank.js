function getSecondLargest(nums) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    let elements = nums[i];
    if (temp.indexOf(elements) == -1) {
      temp.push(elements);
    }
  }
  let update = temp.sort(function (a, b) {
    return a - b;
  });
  console.log(update[update.length - 2]);
}
getSecondLargest([5, 2, 3, 6, 6, 5]);
