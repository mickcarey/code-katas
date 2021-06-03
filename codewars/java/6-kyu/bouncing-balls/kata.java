class BouncingBall {
    public static int bouncingBall(double h, double bounce, double window) {
        if (
            h <= 0 || 
            (bounce <= 0 || bounce >= 1) ||
            window >= h
        ) return -1;

        var timesSeen = 0;

        while (h > window) {
            timesSeen++;
            h *= bounce;
            if (h > window) {
                timesSeen++;
            }
        }

        return timesSeen;
    }
}