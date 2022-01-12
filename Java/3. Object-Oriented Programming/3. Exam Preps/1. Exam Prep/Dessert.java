package bg.tu_varna.sit;

import java.util.List;

public class Dessert extends Food implements SweetFood {
    private int sweetness;

    @Override
    public boolean isSalad() {
        return false;
    }

    @Override
    public boolean isSoup() {
        return false;
    }

    @Override
    public boolean isDessert() {
        return true;
    }

    @Override
    public void putTemperature(double newTemperature) {
        try {
            double temperature = getTemperature();
            temperature = newTemperature;
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public Dessert(String foodName, List<String> products, double price, int temperature, int sweetness) throws InvalidTemperature {
        super(foodName, products, price, temperature);
        this.sweetness = sweetness;
        if (temperature < (-15) || temperature > 35) {
            throw new InvalidTemperature(-15, 35);
        }
    }

    public void changeSweetness (int newSweetness) {
        try {
            sweetness = newSweetness;
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @Override
    public String toString() {
        return super.toString();
    }

}
