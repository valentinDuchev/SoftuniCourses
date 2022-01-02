package bg.tu_varna.sit;

import java.util.Scanner;

public class p5_characters {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        for (int i = 0; i<input.length(); i++) {
            char letter = input.charAt(i);
            System.out.println(letter);
        }
    }
}
