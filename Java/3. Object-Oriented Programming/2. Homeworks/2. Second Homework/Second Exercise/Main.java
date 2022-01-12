package bg.tu_varna.sit;

import java.util.HashSet;
import java.util.Set;

public class Main {

    public static void main(String[] args) {
        try {
            Stock stock1 = new Stock("Intel", 2, 50, 3.4);
            Stock stock2 = new Stock("AMD", 4, 35, 2.2);

            Set<Stock> set = new HashSet<>();
            set.add(stock1);
            set.add(stock2);


            Shop shop = new Shop(set);

            System.out.println(" First time: " + shop.toString());

            shop.addExternal("AMD Radeon", 3, 12, 1.34);
            shop.addInternal("Intel2", 3, 79, 3.6);

            System.out.println("Second time: " + shop.toString());

            //TO DO

            System.out.println(shop.getStockWithBestFrequency());
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
