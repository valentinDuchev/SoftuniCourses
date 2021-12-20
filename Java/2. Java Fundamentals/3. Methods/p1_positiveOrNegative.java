package bg.tu_varna.sit;

import java.util.Scanner;

public class p1_positiveOrNegative {
    public static void main (String [] args) {
        Scanner scanner = new Scanner (System.in);
        int num = Integer.parseInt(scanner.nextLine());
        sign(num);

    }
    public static void sign (int num) {
        if (num < 0) {
            System.out.println("The number " + num + " is negative.");
        } else if (num > 0) {
            System.out.println("The number " + num + " is positive.");
        } else {
            System.out.println("The number " + num + " is zero.");
        }
    }
}
