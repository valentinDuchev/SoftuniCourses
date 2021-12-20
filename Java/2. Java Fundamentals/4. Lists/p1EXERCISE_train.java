package bg.tu_varna.sit;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class p1EXERCISE_train {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] passengersString = scanner.nextLine().split(" ");
        List<Integer> passengers = new ArrayList<>();

        for (int i = 0; i < passengersString.length; i++) {
            passengers.add(Integer.parseInt(passengersString[i]));
        }

        String next = scanner.nextLine();

        while (!next.equals("end")) {
            Character firstLetter = new Character(next.toCharArray()[0]);

            if (firstLetter == 'A') {
                String[] nextAsArr = next.split(" ");
                int vagoonToAdd = Integer.parseInt(nextAsArr[1]);
                passengers.add(vagoonToAdd);
            } else {
                System.out.println(next);
                int difference = 0;
                for (int i = 0; i < passengers.size(); i++) {
                    if (passengers.get(i) < 76) {
                        int currentVagoon = passengers.get(i);
                        int result = currentVagoon + Integer.parseInt(next) + difference;
                        passengers.set(i, result);
                        difference = 0;
                        result = 0;
                    }
                    if (passengers.get(i) > 75) {
                        difference = passengers.get(i) - 75;
                        passengers.set(i, passengers.get(i) - difference);
                    }
                }
            }
            next = scanner.nextLine();
        }

        for (int i = 0; i < passengers.size(); i++) {
            System.out.println(passengers.get(i));
        }

    }
}
