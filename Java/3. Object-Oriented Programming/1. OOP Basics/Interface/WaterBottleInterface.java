package bg.tu_varna.sit;

interface WaterBottleInterface {
    String color = "Blue";

    void fillUp();
    void pourOut();
}

class InterfaceExample implements WaterBottleInterface {
    @Override
    public void fillUp () {
        System.out.println("It is filled.");
    }

    @Override
    public void pourOut() {
        System.out.println("Poured Out.");
    }

}
