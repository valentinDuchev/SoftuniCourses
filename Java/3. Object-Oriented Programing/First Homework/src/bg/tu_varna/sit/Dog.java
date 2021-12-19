// dog.java
package bg.tu_varna.sit;

public class Dog extends Animal implements Pet {
    public Dog(String name, double age, double weight) {
        super(name, age, weight);
    }

    @Override
    public String move() {
        return "Running..";
    }

    @Override
    public String sound() {
        return "Woof, woof";
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
