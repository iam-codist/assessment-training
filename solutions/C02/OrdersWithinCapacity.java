import java.util.Scanner;

public class OrdersWithinCapacity {
    static int[] acceptOrders(int[] orders, int capacity) {
        int count = 0;
        int remaining = capacity;
        for (int size : orders) {
            if (size > remaining) {
                break;
            }
            remaining -= size;
            count++;
        }
        return new int[] {count, remaining};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int capacity = sc.nextInt();
        int[] orders = new int[n];
        for (int i = 0; i < n; i++) {
            orders[i] = sc.nextInt();
        }
        int[] result = acceptOrders(orders, capacity);
        System.out.println(result[0] + " " + result[1]);
    }
}
