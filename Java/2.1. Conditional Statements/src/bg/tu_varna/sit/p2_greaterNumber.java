package bg.tu_varna.sit;
import java.util.Scanner;

public class p2_greaterNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());

        if (a > b) {
            System.out.println(a);
        } else if (a < b) {
            System.out.println(b);
        } else if (a == b) {
            System.out.println("Both numbers are equal");
        }
    }
}
