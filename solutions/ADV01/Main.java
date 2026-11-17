import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        String text = new BufferedReader(new InputStreamReader(System.in)).readLine();
        if (text == null) return;
        int[] stack = new int[text.length() + 1];
        int top = 0;
        int best = 0;
        stack[0] = -1;
        for (int index = 0; index < text.length(); index++) {
            if (text.charAt(index) == '(') {
                stack[++top] = index;
            } else {
                top--;
                if (top < 0) stack[++top] = index;
                else best = Math.max(best, index - stack[top]);
            }
        }
        System.out.println(best);
    }
}
