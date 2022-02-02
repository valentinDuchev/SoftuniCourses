package bg.tu_varna.sit;

import java.util.Objects;

public class CollegeStudent extends Person implements Member, Education {

    private String facultyNumber;
    private double educationPercentage;

    public CollegeStudent(String name, String surname, String lastName, String facultyNumber) {
        super(name, surname, lastName);
        this.facultyNumber = facultyNumber;
    }

    @Override
    public String toString() {
        return super.toString() + ", student with faculty Number: " + facultyNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CollegeStudent that = (CollegeStudent) o;
        return facultyNumber.equals(that.facultyNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(facultyNumber);
    }

    @Override
    public void training(int UM) {
        educationPercentage = (UM*9)/100;
    }

    public String getFacultyNumber() {
        return facultyNumber;
    }

    public void setFacultyNumber(String facultyNumber) {
        this.facultyNumber = facultyNumber;
    }

    public double getEducationPercentage() {
        return educationPercentage;
    }
}
