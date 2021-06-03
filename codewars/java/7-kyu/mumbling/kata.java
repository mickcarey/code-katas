import java.util.stream.IntStream;
import java.util.stream.Collectors;

class Accumul {
    public static String accum(String s) {
      var strArray = s.split("");
      
      return IntStream.range(0, s.length())
        .mapToObj(i -> strArray[i].repeat(i+1))
        .map(l -> l.substring(0,1).toUpperCase() + l.substring(1).toLowerCase())
        .collect(Collectors.joining("-"));
    }
}