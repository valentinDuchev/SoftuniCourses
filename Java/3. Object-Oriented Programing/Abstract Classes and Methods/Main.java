package bg.tu_varna.sit;

public class Main {

    public static void main(String[] args) {
        Chihuahua c = new Chihuahua();
        c.poop();
        c.bark();

        System.out.println("--------------------------");

        Pincher p = new Pincher();
        p.eat();
        p.sleep();
    }
}
