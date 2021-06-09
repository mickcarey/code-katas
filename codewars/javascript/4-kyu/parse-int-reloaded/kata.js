const parseInt = (string) => {
  return string
    .split(" ")
    .filter((s) => s !== "and")
    .reduce(
      (output, strNum) => {
        let lastIndex = output.length - 1;
        let num = numberLookup(strNum);

        if (!!num) {
          output[lastIndex] += num;
          return output;
        } else if ((idx = strNum.indexOf("teen")) > -1) {
          num = numberLookup(strNum.slice(0, idx));
          output[lastIndex] += num + 10;
          return output;
        } else if ((idx = strNum.indexOf("ty-")) > -1) {
          num = numberLookup(strNum.slice(0, idx));
          output[lastIndex] += num * 10;

          num = numberLookup(strNum.slice(idx + 3));
          output[lastIndex] += num;

          return output;
        } else if ((idx = strNum.indexOf("ty")) > -1) {
          num = numberLookup(strNum.slice(0, idx));
          output[lastIndex] += num * 10;
          return output;
        } else if (strNum === "hundred") {
          output[lastIndex] *= 100;
          return output;
        } else if (strNum === "thousand") {
          output[lastIndex] *= 1000;
          output.push(0);
          return output;
        } else if (strNum === "million") {
          output[lastIndex] *= 1000000;
          return output;
        }

        if (num != undefined) {
          output.push(num);
          return output;
        }

        return output;
      },
      [0]
    )
    .reduce((output, value) => output + value, 0);
};

const numberLookup = (strNum) => {
  switch (strNum) {
    case "zero":
      return 0;
    case "one":
      return 1;
    case "two":
    case "twen":
      return 2;
    case "three":
    case "thir":
      return 3;
    case "four":
    case "for":
      return 4;
    case "five":
    case "fif":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
    case "eigh":
      return 8;
    case "nine":
      return 9;
    case "ten":
      return 10;
    case "eleven":
      return 11;
    case "twelve":
      return 12;
    default:
      return undefined;
  }
};
