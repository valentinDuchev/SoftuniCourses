package bg.tu_varna.sit;

import java.util.Scanner;

public class p9_yardPlanting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int metersToPlant = Integer.parseInt(scanner.nextLine());
        double priceWithoutDiscount = metersToPlant * 7.61;
        double finalPrice = priceWithoutDiscount - (priceWithoutDiscount*0.18);
        double discount = priceWithoutDiscount - finalPrice;
        System.out.println("The final price is: " + Math.round(finalPrice*100.0)/100.0 + " lv.");
        System.out.println("The discount is: " + Math.round(discount*100.0)/100.0  + " lv.");
    }
}
