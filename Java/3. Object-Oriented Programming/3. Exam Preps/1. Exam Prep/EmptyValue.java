package bg.tu_varna.sit;

public class EmptyValue extends Exception {
    public EmptyValue (String invalidValue) {
        super("The value of " + invalidValue + " cannot be empty or null.");
    }
}
