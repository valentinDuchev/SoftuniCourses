package bg.tu_varna.sit;

public class ExternalComponent extends Stock{

    private double inch;

    public ExternalComponent(String manifacturer, int count, double price, double inch) throws InvalidPrice {
        super(manifacturer, count, price, inch);
        this.inch = inch;
    }

    @Override
    public String toString() {
        return (super.toString() + "\n" + "Inches: " + inch);
    }
}
