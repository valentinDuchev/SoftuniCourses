package bg.tu_varna.sit;

import java.util.Date;
import java.util.Objects;

public class Student extends Applicant implements IReader, Comparable{
    private String f_num;


    public Student(String name, Date birthDate, double success, String f_num) {
        super(name, birthDate, success);
        this.f_num = f_num;
    }

    public Student(String name, String f_num) {
        super(name);
        this.f_num = f_num;
    }

    @Override
    public int compareTo(Object o) {
        return 0;
    }

    @Override
    public void get(LibraryBook book) {
        book.setStatus(false);
        System.out.println(getName() + " took the book >>> " + book.getBookName() + " <<<");
    }

    @Override
    public void ret(LibraryBook book) {
        book.setStatus(true);
        System.out.println(book.getBookName() + " >>> was returned by " + getName());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return Objects.equals(f_num, student.f_num);
    }

    @Override
    public int hashCode() {
        return Objects.hash(f_num);
    }

    @Override
    public String getName() {
        return super.getName();
    }

    @Override
    public void setName(String name) {
        super.setName(name);
    }

    @Override
    public Date getBirthDate() {
        return super.getBirthDate();
    }

    @Override
    public void setBirthDate(Date birthDate) {
        super.setBirthDate(birthDate);
    }

    @Override
    public double getSuccess() {
        return super.getSuccess();
    }

    @Override
    public void setSuccess(double success) {
        super.setSuccess(success);
    }

    @Override
    public String toString() {
        return super.toString();
    }

    public String getF_num() {
        return f_num;
    }

    public void setF_num(String f_num) {
        this.f_num = f_num;
    }
}
