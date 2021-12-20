package bg.tu_varna.sit;

import java.util.Scanner;

public class p2_reverseArr {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int arrLength = Integer.parseInt(scanner.nextLine());
        int [] numbers = new int [arrLength];
        for (int i = 0; i < arrLength; i++) {
            int currentScan = Integer.parseInt(scanner.nextLine());
            numbers[i] = currentScan;
        }
        for (int i = numbers.length - 1; i >= 0;i--) {
            System.out.print(numbers[i] + " ");
        }

    }
}

