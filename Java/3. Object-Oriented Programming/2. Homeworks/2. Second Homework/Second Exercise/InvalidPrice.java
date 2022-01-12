package bg.tu_varna.sit;

public class InvalidPrice extends Exception{
    public InvalidPrice () {
        super("The price must be positive number.");
    }
}
