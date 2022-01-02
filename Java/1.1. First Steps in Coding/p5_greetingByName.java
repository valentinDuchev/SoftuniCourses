package bg.tu_varna.sit;

import java.util.Scanner;

public class p5_greetingByName {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        System.out.println("Hello, " + input + "!");
    }
}
