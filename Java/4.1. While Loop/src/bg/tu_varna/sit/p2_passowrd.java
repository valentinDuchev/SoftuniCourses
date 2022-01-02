package bg.tu_varna.sit;

import java.util.Scanner;

public class p2_passowrd {

        public static void main(String[] args) {
            Scanner scanner = new Scanner (System.in);
            String username = scanner.nextLine();
            String password = scanner.nextLine();
            String input = scanner.nextLine();
            while (!input.equals(password)) {
                input = scanner.nextLine();
            } if (input.equals(password)) {
                System.out.printf("Welcome %s!", username);
            }
    }
}
