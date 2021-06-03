import java.util.Arrays;

class WhichAreIn { 
    public static String[] inArray(String[] array1, String[] array2) {
        return Arrays.stream(array1)
            .filter(subString -> 
                Arrays.stream(array2).anyMatch(word -> word.contains(subString)))
            .sorted()
            .toArray(String[]::new);
    }
}