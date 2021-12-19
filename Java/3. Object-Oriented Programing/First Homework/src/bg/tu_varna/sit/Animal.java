package bg.tu_varna.sit;

abstract class Animal implements Movement {
    private String name;
    private double age;
    private double weight;

    public Animal(String name, double age, double weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    public String getName() {
        return name;
    }

    public double getAge() {
        return age;
    }

    public double getWeight() {
        return weight;
    }

    @Override
    public String move() {
        return "Moving..";
    }

    public abstract String sound();
    public abstract String eats(int count);

    @Override
    public String toString() {
        return "Animal{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", weight=" + weight +
                '}';
    }
}
