package bg.tu_varna.sit;

import java.util.Objects;

public class Teacher extends Person implements Mentor, Education{

    private String schoolName;
    private HighSchoolStudent[] highSchoolStudents;

    public Teacher(String name, String surname, String lastName, String schoolName, HighSchoolStudent[] highSchoolStudents) throws InvalidValueException {
        super(name, surname, lastName);
        this.schoolName = schoolName;
        this.highSchoolStudents = highSchoolStudents;
        if (highSchoolStudents.length > 5) {
            throw new InvalidValueException("Teacher", "setHighSchoolStudents", "highSchoolStudents");
        }
    }

    @Override
    public void training(int UM) {
        for (int i = 0; i <= 5; i++) {
            highSchoolStudents[i].training(UM);
        }
    }

    @Override
    public String toString() {
        return super.toString() + ", teacher in " + schoolName;
    }

    public String getSchoolName() {
        return schoolName;
    }

    public void setSchoolName(String schoolName) {
        this.schoolName = schoolName;
    }

    public HighSchoolStudent[] getHighSchoolStudents() {
        return highSchoolStudents;
    }

    public void setHighSchoolStudents(HighSchoolStudent[] highSchoolStudents) {
        this.highSchoolStudents = highSchoolStudents;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Teacher teacher = (Teacher) o;
        return schoolName.equals(teacher.schoolName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(schoolName);
    }
}
