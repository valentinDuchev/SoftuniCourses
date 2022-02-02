package bg.tu_varna.sit;

import java.util.Arrays;

public class Scientist extends Person implements Mentor, Education{
    private CollegeStudent[] collegeStudents;
    //TO DO

    public Scientist(String name, String surname, String lastName, CollegeStudent[] collegeStudents) throws InvalidValueException {
        super(name, surname, lastName);
        this.collegeStudents = collegeStudents;
        if (collegeStudents.length > 5) {
            throw new InvalidValueException("Scientist", "setCollegeStudents()", "CollegeStudents");
        }
    }

    @Override
    public void training(int UM) {
        for (int i = 0; i <= 5; i++) {
            collegeStudents[i].training(UM);
        }
    }

    //TO DO --> to String override method

    public CollegeStudent[] getCollegeStudents() {
        return collegeStudents;
    }

    public void setCollegeStudents(CollegeStudent[] collegeStudents) {
        try {
            this.collegeStudents = collegeStudents;
        } catch (Exception e) {
            System.out.println(e);
        }

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Scientist scientist = (Scientist) o;
        return Arrays.equals(collegeStudents, scientist.collegeStudents);
    }

    @Override
    public int hashCode() {
        return Arrays.hashCode(collegeStudents);
    }
}
