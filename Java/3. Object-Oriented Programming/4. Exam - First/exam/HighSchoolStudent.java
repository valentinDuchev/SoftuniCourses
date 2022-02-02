package bg.tu_varna.sit;

import java.util.Objects;

public class HighSchoolStudent extends Person implements Member, Education{

    private String schoolName;
    private int studentBookNumber;
    private double educationPercentage;


    @Override
    public void training(int UM) {
        educationPercentage = (UM*6)/100;
    }



    public HighSchoolStudent(String name, String surname, String lastName, String schoolName, int studentBookNumber) throws InvalidValueException{
        super(name, surname, lastName);
        this.schoolName = schoolName;
        this.studentBookNumber = studentBookNumber;
        if (studentBookNumber < 100000 || studentBookNumber > 999999) {
            throw new InvalidValueException("HighSchoolStudent", "getSchoolName()", "studentBookNumber");
        }
    }

    @Override
    public String toString() {
        return super.toString() + ", student in " + schoolName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HighSchoolStudent that = (HighSchoolStudent) o;
        return studentBookNumber == that.studentBookNumber && Double.compare(that.educationPercentage, educationPercentage) == 0 && Objects.equals(schoolName, that.schoolName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(schoolName, studentBookNumber, educationPercentage);
    }

    public String getSchoolName() {
        return schoolName;
    }

    public void setSchoolName(String schoolName) {
        schoolName = schoolName;
    }

    public int getStudentBookNumber() {
        return studentBookNumber;
    }

    public void setStudentBookNumber(int studentBookNumber) {
        try {
            studentBookNumber = studentBookNumber;
        } catch (Exception e){
            System.out.println(e);
        }

    }

    public double getEducationPercentage() {
        return educationPercentage;
    }
}
