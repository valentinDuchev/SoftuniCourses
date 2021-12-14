package bg.tu_varna.sit;

class Outside {
    int a = 0;

    class Inside {
        int b = 5;
    }
}

public class Main {

    public static void main(String[] args) {
        Outside o = new Outside();
        Outside.Inside i = o.new Inside();
        System.out.println(o.a + " " + i.b);
    }
}
