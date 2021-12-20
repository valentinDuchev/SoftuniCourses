package bg.tu_varna.sit;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner (System.in);
        int number = scanner.nextByte();
        for (int i = 1; i < 11; i++) {
            System.out.println(number + " X " + i + " = " + number*i);
        }
    }
}
