package bg.tu_varna.sit;

import java.util.List;

public class FoodTray {

    private List<Portion> portions;
    private int overallPrice;
    private int overallQty;

    List<Food> soups;
    List<Food> salads;
    List<Food> desserts;

    List<Food> allFoods;

    public FoodTray() {

    }

    public void addPortion (Food foodToAdd, int quantityToAdd) {
        Portion newPortion = new Portion(quantityToAdd, foodToAdd);
        portions.add(newPortion);
    }

    public void getOverallPrice () {
        for (int i = 0; i < portions.size(); i++) {
            overallPrice += portions.get(i).overallPortionPrice;
        }
    }

    public void getOverallQuantity () {
        for (int i = 0; i < portions.size(); i++) {
            overallQty += portions.get(i).getQuantity();
        }
    }

    public void findSoups () {
        for (int i = 0; i < portions.size(); i++) {
            if (portions.get(i).getFood().isSalad()) {
                salads.add(portions.get(i).getFood());
            }
        }
    }

    public void findDesserts () {
        for (int i = 0; i < portions.size(); i++) {
            if (portions.get(i).getFood().isSoup()) {
                soups.add(portions.get(i).getFood());
            }
        }
    }

    public void findSalads () {
        for (int i = 0; i < portions.size(); i++) {
            if (portions.get(i).getFood().isDessert()) {
                desserts.add(portions.get(i).getFood());
            }
        }
    }

    public List getAllFoods () {
        for (int i = 0; i < portions.size(); i++) {
            allFoods.add(portions.get(i).getFood());
        }
        return allFoods;
    }

    @Override
    public String toString() {
        return "FoodTray{" +
                "portions=" + portions +
                ", overallPrice=" + overallPrice +
                ", overallQty=" + overallQty +
                ", soups=" + soups +
                ", salads=" + salads +
                ", desserts=" + desserts +
                ", allFoods=" + allFoods +
                '}';
    }
}
