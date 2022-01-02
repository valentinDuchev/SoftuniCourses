package bg.tu_varna.sit;

import java.util.Scanner;

public class p7_areaOfFigures {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String figure = scanner.nextLine();
        double side = Double.parseDouble(scanner.nextLine());
        double result;
        switch(figure) {
            case "square":
                result = side*side;
                System.out.println(String.format("%.3f", result)); break;
            case "rectangle":
                double secondSide = Double.parseDouble(scanner.nextLine());
                result = secondSide*side;
                System.out.println(String.format("%.3f", result)); break;
            case "triangle":
                double height = Double.parseDouble(scanner.nextLine());
                result = side * (height)/2;
                System.out.println(String.format("%.3f", result)); break;
            case "circle":
                result = side*side*3.14;
                System.out.println(String.format("%.3f", result)); break;
        }

    }
}
