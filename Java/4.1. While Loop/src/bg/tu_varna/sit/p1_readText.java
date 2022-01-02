package bg.tu_varna.sit;

import java.util.Scanner;

public class p1_readText {
    public static void main(String[] args) {
        Scanner scanner = new Scanner (System.in);
        String input = scanner.nextLine();
        while (!input.equals("Stop")) {
            System.out.println(input);
            input = scanner.nextLine();
        }
    }
}
