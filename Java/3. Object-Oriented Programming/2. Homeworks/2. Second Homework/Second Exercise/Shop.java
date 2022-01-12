package bg.tu_varna.sit;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class Shop {
    private Set<Stock> wareHouse;

    private double firstFrequency = 0;
    Stock stockToReturn;


    public Shop(Set<Stock> wareHouse) {
        this.wareHouse = wareHouse;
    }

    @Override
    public String toString() {
        return "Shop{" +
                "stock=" + wareHouse +
                '}';
    }

    public void addInternal(String manifacturer, int count, double price, double frequency) {
        try {
            Stock stockToAdd = new Stock(manifacturer, count, price, frequency);
            wareHouse.add(stockToAdd);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void addExternal(String manifacturer, int count, double price, double inch) {
        try {
            Stock stockToAdd = new Stock(manifacturer, count, price, inch);
            wareHouse.add(stockToAdd);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public String getManifacturerWithMostProducts() {
        //TO DO --> to return the name of the manifacturer with most Products
        return "To Do";
    }

    public Stock getStockWithBestFrequency() {
        List<Stock> stockList = new ArrayList<>(wareHouse);
        for (int i = 0; i < stockList.size(); i++) {
            if (stockList.get(i).getFrequency() > firstFrequency) {
                double newFreq = stockList.get(i).getFrequency();
                firstFrequency = newFreq;
            }
        }
        for (int i = 0; i < stockList.size(); i++) {
            if (stockList.get(i).getFrequency() == firstFrequency) {
                stockToReturn = stockList.get(i);
            }
        }
        return stockToReturn;
    }
}
