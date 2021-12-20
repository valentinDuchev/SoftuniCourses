package bg.tu_varna.sit;

import java.util.Scanner;

public class p1_dayOfWeek {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int day = Integer.parseInt( scanner.nextLine());
        String [] days = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};
        for (int i = 0; i<=days.length; i++) {
            if (day == i) {
                System.out.println(days[i - 1]);
            }
        }
        if (day > 7) {
            System.out.println("Invalid day!");
        }
    }
}
