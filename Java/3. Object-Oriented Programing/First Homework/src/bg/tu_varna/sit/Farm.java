// farm.java
package bg.tu_varna.sit;

import java.util.ArrayList;
import java.util.Collection;

public class Farm {
    private Collection<Animal> animals = new ArrayList<Animal>();
    private final Collection<Animal> pets = new ArrayList<Animal>();
    private final Collection<Animal> tamelies = new ArrayList<Animal>();

    public Farm(Collection<Animal> animals) {
        this.animals = animals;
    }

    public Object returnPets(Collection<Animal> animals) {
        for(Animal currentAnimal : animals) {
            if(currentAnimal instanceof Pet) {
                pets.add(currentAnimal);
            }
        }

        return pets;
    }

    public Object returnTamelies(Collection<Animal> animals) {
        for(Animal currentAnimal : animals) {
            if(currentAnimal instanceof Tamely) {
                tamelies.add(currentAnimal);
            }
        }

        return tamelies;
    }

    public void addAnimal(Animal animal) {
        animals.add(animal);
        System.out.println(animal.getName() + " was added to the collection of animals!");
        System.out.println("New collection is: ");

        System.out.println(animals);
    }

    public void removeAnimal(Animal animal) {
        animals.remove(animal);
        System.out.println(animal.getName() + " was removed to the collection of animals!");
        System.out.println("New collection is: ");

        System.out.println(animals);
    }

    public void feedAnimal(Animal animal, int count) {
        System.out.println(animal.getName() + " is " + animal.eats(count));
    }

    public void soundOfTheAnimal(Animal animal) {
        System.out.println("{ " + animal.getName() + " } => " + animal.sound());
    }
}
