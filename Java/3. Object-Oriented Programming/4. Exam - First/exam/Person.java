package bg.tu_varna.sit;

public abstract class Person {
    private String name;
    private String surname;
    private String lastName;

    public Person(String name, String surname, String lastName) {
        this.name = name;
        this.surname = surname;
        this.lastName = lastName;
    }

    public String fullName () {
        return name + " " + surname + " " + lastName;
    }

    @Override
    public String toString() {
        return "I am " + name + " " + surname + " " + lastName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
