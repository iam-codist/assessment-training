import java.util.Scanner;

public class LongestRisingStretch {
    static int longestStretch(int[] readings) {
        int current = 1;
        int best = 1;
        for (int i = 1; i < readings.length; i++) {
            if (readings[i] > readings[i - 1]) {
                current++;
            } else {
                current = 1;
            }
            best = Math.max(best, current);
        }
        return best;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] readings = new int[n];
        for (int i = 0; i < n; i++) {
            readings[i] = sc.nextInt();
        }
        System.out.println(longestStretch(readings));
    }
}
