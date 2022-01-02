package bg.tu_varna.sit;

import java.util.Scanner;

public class p5_schoolMaterials {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int pensQty = Integer.parseInt(scanner.nextLine());
        int markersQty = Integer.parseInt(scanner.nextLine());
        int cleanerQty = Integer.parseInt(scanner.nextLine());
        int discount = Integer.parseInt(scanner.nextLine());

        double pensPrice = pensQty * 5.80;
        double markersPrice = markersQty * 7.20;
        double cleanerPrice = cleanerQty * 1.20;

        double price = pensPrice + markersPrice + cleanerPrice;
        double finalPrice = price - ((price*discount)/100);

        System.out.println(finalPrice);



    }
}
