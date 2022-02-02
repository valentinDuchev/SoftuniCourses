package bg.tu_varna.sit;

public class InvalidValueException extends Exception {
    public InvalidValueException (String className, String invalidMethod, String invalidVariable) {
        super("The value of the variable " + invalidVariable +  " is invalid in method " + invalidMethod + " of class " + className);
    }
}
