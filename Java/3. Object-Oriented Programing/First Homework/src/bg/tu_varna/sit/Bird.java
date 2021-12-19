// bird.java
package bg.tu_varna.sit;

public class Bird extends Animal implements Tamely {
    public Bird(String name, double age, double weight) {
        super(name, age, weight);
    }

    @Override
    public String move() {
        return "Flying..";
    }

    @Override
    public String sound() {
        return "Chirp, chirp";
    }

    @Override
    public String eats(int count) {
        String eating = "Eating...\n ";

        for (int i = 0; i < count; i++) {
            eating = eating + eating;
        }

        return eating;
    }
}
