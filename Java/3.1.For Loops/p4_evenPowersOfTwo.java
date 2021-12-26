package bg.tu_varna.sit;

import java.util.Scanner;

public class p4_evenPowersOfTwo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int power = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i<=power; i+=2) {
            System.out.println(Math.pow(2, i));
        }
    }
}
