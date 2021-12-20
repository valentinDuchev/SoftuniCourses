package bg.tu_varna.sit;

import java.util.Scanner;

public class p6_equalArrays {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] numAsString1 = scanner.nextLine().split(" ");
        int[] numbers1 = new int [numAsString1.length];
        String[] numAsString2 = scanner.nextLine().split(" ");
        int[] numbers2 = new int [numAsString2.length];
        int arr1Sum = 0;
        int sum = 0;
        boolean foundDifference = false;

        for (int i = 0; i < numAsString1.length; i++) {
            numbers1[i] = Integer.parseInt(numAsString1[i]);
        }
        for (int i = 0; i < numAsString1.length; i++) {
            numbers2[i] = Integer.parseInt(numAsString2[i]);
        }

        for (int i = 0; i < numbers1.length; i++) {
            arr1Sum += numbers1[i];
            if (numbers1[i] != numbers2[i]) {
                if (foundDifference == false) {
                    System.out.println("Arrays are not identical. Found difference at " + i + " index." );
                    foundDifference = true;
                }
            } else {
                sum += numbers1[i];
            }

        }

        if (sum == arr1Sum) {
            System.out.println("Arrays are identical. Sum: " + arr1Sum);
        }



    }
}
