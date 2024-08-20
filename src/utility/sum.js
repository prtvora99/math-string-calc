const add = (numbers = "") => {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = new RegExp(
      numbers
        .substring(2, delimiterEndIndex)
        .replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
      "g"
    );
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  const numberArray = numbers.split(delimiter); // split using regex
  const parsedNumbers = numberArray.map((num) => parseInt(num, 10));

  // exception if negative numbers passed
  const negativeNumbers = parsedNumbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  // calc and return sum
  return parsedNumbers.reduce((sum, num) => sum + num, 0);
};

export default add;
