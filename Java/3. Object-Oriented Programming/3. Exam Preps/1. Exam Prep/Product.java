package bg.tu_varna.sit;

public class Product {
    private String name;

    public Product(String name) {
        this.name = name;
    }

    public Product() {

    }

    public void changeName (Product oldProduct, String newProductName) {
        oldProduct.name = newProductName;
    }

    public void compareByName (Product productToCompare, String nameToCompare) {
        if (productToCompare.name.equals(nameToCompare)) {
            System.out.println("Both products are equal!");
        } else {
            System.out.println("Both products are NOT equal!");
        }
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                '}';
    }
}
