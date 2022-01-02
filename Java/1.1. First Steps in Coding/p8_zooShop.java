package bg.tu_varna.sit;

import java.util.Scanner;

public class p8_zooShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int dogFoodQty = Integer.parseInt(scanner.nextLine());
        int catFoodQty = Integer.parseInt(scanner.nextLine());
        double dogPrice = dogFoodQty*2.5;
        int catPrice = catFoodQty*4;
        System.out.println(dogPrice+catPrice + " lv.");
    }
}
