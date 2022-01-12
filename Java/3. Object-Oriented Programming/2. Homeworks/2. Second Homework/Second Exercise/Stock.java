package bg.tu_varna.sit;

import java.util.Objects;

public class Stock implements Comparable{

    private String manifacturer;
    private int count;
    private double price;
    private double frequency;

    @Override
    public int compareTo(Object o) {
        return 0;
    }

    public Stock(String manifacturer, int count, double price, double frequency) throws InvalidPrice {
        this.manifacturer = manifacturer;
        this.count = count;
        this.price = price;
        this.frequency = frequency;
        if (price < 0) {
            throw new InvalidPrice();
        }
    }

    public Stock(String manifacturer, int count) {
        this.manifacturer = manifacturer;
        this.count = count;
    }

    public Stock(double price) {
        this.price = price;
    }

    public String getManifacturer() {
        return manifacturer;
    }

    public void setManifacturer(String manifacturer) {
        this.manifacturer = manifacturer;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getFrequency() {
        return frequency;
    }

    public void setFrequency(double frequency) {
        this.frequency = frequency;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Stock stock = (Stock) o;
        return count == stock.count && Double.compare(stock.price, price) == 0 && Objects.equals(manifacturer, stock.manifacturer);
    }

    @Override
    public int hashCode() {
        return Objects.hash(manifacturer, count, price);
    }

    @Override
    public String toString() {
        return "Stock{" +
                "manifacturer='" + manifacturer + '\'' +
                ", count=" + count +
                ", price=" + price +
                '}';
    }


}
