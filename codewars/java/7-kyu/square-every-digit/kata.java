import java.util.Arrays;

class SquareDigit {
  public int squareDigits(int n) {
    return Integer.parseInt(Arrays.toString(
      Integer.toString(n).chars().map(a-> {
        var num = Integer.parseInt(String.valueOf((char) a));
        return num * num;
      }).toArray()
    ).replaceAll("[^\\d]",""));
  }
}