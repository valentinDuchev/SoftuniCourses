package bg.tu_varna.sit;

//---------------------------------------------------------------------------
//Abstract classes and Methods
abstract class Dog {
    public void bark () {
        System.out.println("Chihuahua: Bark!");
    }
    public abstract void poop (); //Abstract methods are just as list here, you cannot make it do something in the abstract class,
                                  //you type what you want it to do in the extended class
}

class Chihuahua extends Dog {
    public void poop () {
        System.out.println("Chihuahua pooped!"); //Here is written what should do the abstract method
    }
}

//----------------------------------------------------------------------------
//Interface

interface DogInterface {
    void sleep();
    void eat();
}

class Pincher implements DogInterface {
    public void sleep() {
        System.out.println("Pincher is sleeping");
    }

    public void eat() {
        System.out.println("Pincher is eating");
    }
}






