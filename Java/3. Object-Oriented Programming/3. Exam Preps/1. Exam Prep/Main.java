package bg.tu_varna.sit;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        Product[] products = new Product[5];
        products[0] = new Product("Cheese");
        products[1] = new Product("Eggs");
        products[2] = new Product("Chicken");
        products[3] = new Product("Ham");
        products[4] = new Product("Bread");

        List<String> products1 = new ArrayList<>();
        products1.add("Cheese");
        products1.add("Bread");

        List<String> products2 = new ArrayList<>();
        products2.add("Cheese");
        products2.add("Tomatoes");

        List<String> products3 = new ArrayList<>();
        products3.add("Chicken");
        products3.add("Cheese");

        List<String> products4 = new ArrayList<>();
        products4.add("Potatoes");
        products4.add("Cheese");

        List<String> products5 = new ArrayList<>();
        products5.add("Cheese");
        products5.add("Jam");

        List<String> products6 = new ArrayList<>();
        products1.add("Cheese");

        List<Food> foods = new ArrayList<>();
        try {
            foods.add(new Salad("Caesar", products1, 1, 8));
            foods.add(new Salad("Shopska salad", products2, 2, 8));

            foods.add(new Soup("Chicken Soup", products3, 4.4, 22));
            foods.add(new Soup("Vegetables Soup", products4, 3, 22));

            foods.add(new Dessert("Cheesecake", products5, 4, 22, 23));
            foods.add(new Dessert("Tiramisu", products6, 5, 2, 24));

        } catch (Exception e) {
            System.out.println(e);
        }

        FoodTray foodTray = new FoodTray();
        try {
            Salad food1 = new Salad("Pizza", products1, 5, 9);
            Soup food2 = new Soup("Chicken Soup", products3, 4.4, 21);
            foodTray.addPortion(food1, 4);
            foodTray.addPortion(food2, 2);

            System.out.println(foodTray.toString());
        } catch(Exception e) {
            System.out.println(e);
        }
    }
}
