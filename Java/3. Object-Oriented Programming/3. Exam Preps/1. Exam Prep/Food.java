package bg.tu_varna.sit;

import java.util.List;

public abstract class Food implements Comparable<Food>{
    private String foodName;
    private List<String> products;
    private double price;
    private int temperature;

    public abstract boolean isSalad ();
    public abstract boolean isSoup ();
    public abstract boolean isDessert ();

    public Food(String foodName, List<String> products, double price, int temperature) throws InvalidTemperature {
        this.foodName = foodName;
        this.products = products;
        this.price = price;
        this.temperature = temperature;
    }

    public abstract void putTemperature (double newTemperature);

    public String getFoodName() {
        return foodName;
    }

    public List<String> getProducts() {
        return products;
    }

    public double getPrice() {
        return price;
    }

    public int getTemperature() {
        return temperature;
    }

    public void changePrice (Food food, int newPrice) {
        food.price = newPrice;
    }

    public void changeName (Food food, String newName) {
        food.foodName = newName;
    }

    public void changeProduct (String productName, Product newProduct) {
        for (int i = 0; i < products.size(); i++) {
            if (productName.equals(products.get(i))) {
                products.set(i, newProduct.getName());
            }
        }
    }

    @Override
    public int compareTo(Food price) {
        return 0;
    }
}
