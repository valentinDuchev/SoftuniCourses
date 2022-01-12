// sheep.java
package bg.tu_varna.sit;

public class Sheep extends Animal implements Tamely {
    public Sheep(String name, double age, double weight) {
        super(name, age, weight);
    }

    @Override
    public String move() {
        return "Moving..";
    }

    @Override
    public String sound() {
        return "Bleat, bleeeeat";
    }

    @Override
    public String eats(int count) {
        String eating = "Eating... \n";

        for (int i = 0; i < count; i++) {
            eating = eating + eating;
        }

        return eating;
    }
}