package bg.tu_varna.sit;

public class Main {

    public static void main(String[] args) {
	    Bird bird = new Bird();
        bird.sing();

        Robin robin = new Robin();
        robin.sing();

        Pelikan pelikan = new Pelikan();
        pelikan.sing();

        String song = "Pigeon: gargargar";
        Cock cock = new Cock();
        cock.sing(song);
    }
}
