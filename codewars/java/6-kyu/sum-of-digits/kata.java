class DRoot {
    public static int digital_root(int n) {
        var sum = 0;

        while (n != 0) {
            var num = n % 10;
            sum += num;
            n /= 10;
        }

        return sum < 10 ? sum : digital_root(sum);
    }
}