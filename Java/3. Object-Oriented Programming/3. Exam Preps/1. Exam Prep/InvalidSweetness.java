package bg.tu_varna.sit;

public class InvalidSweetness extends Exception {
    public InvalidSweetness (int minSweetness, int maxSweetness) {
        super("The sweetness is not in the range from " + minSweetness + " to " + maxSweetness);
    }
}
