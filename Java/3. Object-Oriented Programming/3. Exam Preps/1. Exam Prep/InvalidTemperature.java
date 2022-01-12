package bg.tu_varna.sit;

public class InvalidTemperature extends Exception{
    public InvalidTemperature (int minTemp, int maxTemp) {
        super("The temperature is not in the range from " + minTemp + " to " + maxTemp);
    }
}
