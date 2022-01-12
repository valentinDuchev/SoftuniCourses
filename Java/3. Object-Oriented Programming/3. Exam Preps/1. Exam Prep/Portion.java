package bg.tu_varna.sit;

public class Portion {
    private int quantity;
    private Food food;
    double overallPortionPrice = quantity*food.getPrice();

    public Portion(int quantity, Food food) {
        this.quantity = quantity;
        this.food = food;
    }

    public int getQuantity() {
        return quantity;
    }

    public Food getFood() {
        return food;
    }

    public void changeQty (int newQuantity) {
        quantity = newQuantity;
    }

    public void changeFood (Food newFood) {
        food = newFood;
    }
}
