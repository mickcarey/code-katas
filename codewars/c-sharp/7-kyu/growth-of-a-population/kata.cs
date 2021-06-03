using System;

public class Arge {
    public static int NbYear(int p0, double percent, int aug, int p) {
        var years = 0;
        var population = p0;

        while (population < p) {
            years += 1;
            population = (int) (population + (population * (percent / 100)) + aug);
        }

        return years;
    }
}