package bg.tu_varna.sit;

import java.util.Date;
import java.util.List;

public class Reader extends Student implements IReader, Comparable{

    private List<String> LibraryBook;

    public Reader(String name, Date birthDate, double success, String f_num) {
        super(name, birthDate, success, f_num);
    }


    @Override
    public void get(bg.tu_varna.sit.LibraryBook book) {
        super.get(book);
    }

    @Override
    public void ret(bg.tu_varna.sit.LibraryBook book) {
        super.ret(book);
    }

    @Override
    public int compareTo(Object o) {
        return super.compareTo(o);
    }

    @Override
    public boolean equals(Object o) {
        return super.equals(o);
    }

    @Override
    public int hashCode() {
        return super.hashCode();
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

    @Override
    public String getF_num() {
        return super.getF_num();
    }

    @Override
    public void setF_num(String f_num) {
        super.setF_num(f_num);
    }
}
