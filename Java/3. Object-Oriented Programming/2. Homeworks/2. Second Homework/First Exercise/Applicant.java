package bg.tu_varna.sit;

import java.util.Date;

public class Applicant {
    private String name;
    private Date birthDate;
    private double success;

    public Applicant(String name, Date birthDate, double success) {
        this.name = name;
        this.birthDate = birthDate;
        this.success = success;
    }

    public Applicant(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public double getSuccess() {
        return success;
    }

    public void setSuccess(double success) {
        this.success = success;
    }

    @Override
    public String toString() {
        return "Applicant{" +
                "name='" + name + '\'' +
                ", birthDate=" + birthDate +
                ", success=" + success +
                '}';
    }
}
