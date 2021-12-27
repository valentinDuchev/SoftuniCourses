package bg.tu_varna.sit;

import java.util.Scanner;

public class p3_oddOrEven {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = Integer.parseInt(scanner.nextLine());
        if (num % 2 == 0) {
            System.out.print("even");
        } else {
            System.out.print("odd");
        }
    }
}
