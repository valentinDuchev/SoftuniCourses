package bg.tu_varna.sit;

import java.util.List;

public class Soup extends Food implements WarmFood{

    @Override
    public boolean isSalad() {
        return false;
    }

    @Override
    public boolean isSoup() {
        return true;
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

    public Soup(String foodName, List<String> products, double price, int temperature) throws InvalidTemperature {
        super(foodName, products, price, temperature);
        if (temperature < 15 || temperature > 30) {
            throw new InvalidTemperature(15, 30);
        }
    }



    @Override
    public String toString() {
        return super.toString();
    }
}
