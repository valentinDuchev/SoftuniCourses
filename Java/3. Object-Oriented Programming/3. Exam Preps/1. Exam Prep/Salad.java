package bg.tu_varna.sit;

import java.util.List;

public class Salad extends Food implements ColdFood {



    @Override
    public boolean isSalad() {
        return true;
    }

    @Override
    public boolean isSoup() {
        return false;
    }

    @Override
    public boolean isDessert() {
        return false;
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

    public Salad(String foodName, List<String> products, double price, int temperature) throws InvalidTemperature {
        super(foodName, products, price, temperature);
        if (temperature < 1 || temperature > 10) {
            throw new InvalidTemperature(1, 10);
        }
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
