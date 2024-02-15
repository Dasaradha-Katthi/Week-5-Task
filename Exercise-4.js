function calculateSum(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Invalid input: Please provide an array.");
    }
  
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const result = calculateSum(numbers);
  console.log(result); 
  
