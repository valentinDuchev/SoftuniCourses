package bg.tu_varna.sit;

public class Main {

    public static void main(String[] args) {
        Student s = new Student();

        System.out.println(s.getAge());
        s.setAge(21);
        System.out.println(s.getAge());

        System.out.println("----");

        System.out.println(s.getName());
        s.setName("Gosho");
        System.out.println(s.getName());
    }
}
