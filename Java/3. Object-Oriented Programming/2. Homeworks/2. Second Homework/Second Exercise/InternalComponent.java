package bg.tu_varna.sit;

public class InternalComponent extends Stock{

    private double frequency;


    public InternalComponent(String manifacturer, int count, double price, double frequency) throws InvalidPrice {
        super(manifacturer, count, price, frequency);
    }

    @Override
    public String toString() {
        return (super.toString() + "\n" + "Frequency: " + frequency);
    }




}
