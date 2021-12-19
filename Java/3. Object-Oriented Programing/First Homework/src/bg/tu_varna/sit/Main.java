// main.java
package bg.tu_varna.sit;

        import java.util.ArrayList;
        import java.util.Collection;

public class Main {

    public static void main(String[] args) {
        Collection animals = new ArrayList();
        Farm farm = new Farm(animals);

        Dog tuffy = new Dog("Tuffy", 3, 2.3);
        Dog beethoven = new Dog("Beethoven", 6, 6.8);

        Bird zazu = new Bird("Zazu", 1, 0.4);
        Bird zippy = new Bird("Zippy", 1.5, 0.6);

        Sheep barry = new Sheep("Barry", 1.2, 2.2);
        Sheep annabel = new Sheep("Annabel", 2, 1.4);

        Bird daffy = new Bird("Daffy", 1.5, 0.7);

        animals.add(tuffy);
        animals.add(beethoven);
        animals.add(zazu);
        animals.add(zippy);
        animals.add(barry);
        animals.add(annabel);

        System.out.println("Pets: " + farm.returnPets(animals));
        System.out.println("Tamelies: " + farm.returnTamelies(animals));

        farm.addAnimal(daffy);
        farm.removeAnimal(zazu);
        farm.removeAnimal(annabel);
        farm.feedAnimal(zazu, 1);
        farm.feedAnimal(beethoven, 2);
        farm.soundOfTheAnimal(daffy);
        farm.soundOfTheAnimal(tuffy);
        farm.soundOfTheAnimal(annabel);
    }
}
