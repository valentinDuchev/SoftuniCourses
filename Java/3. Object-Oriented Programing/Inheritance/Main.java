package bg.tu_varna.sit;

public class Main {

    public static void main(String[] args) {
        Mouse1 m1 = new Mouse1();
        m1.rightClick();
        m1.scrollUp();
        m1.setColor("blue");

        System.out.println("-------");

        Mouse2 m2 = new Mouse2();
        m2.leftClick();
        m2.scrollDown();
        m2.connect();



    }
}
