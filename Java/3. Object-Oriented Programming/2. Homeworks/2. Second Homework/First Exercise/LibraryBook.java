package bg.tu_varna.sit;

import java.util.Date;
import java.util.Objects;

public class LibraryBook implements ILibraryBook, Comparable{

    private Reader reader;
    private String bookName;
    private boolean status;

    @Override
    public void get(Reader rdr, LibraryBook book) {
        System.out.println(rdr.getName() + " Got the book >>> " + book.bookName + " <<< now.");
        book.setStatus(false);
        book.setReader(rdr);
    }

    @Override
    public void ret() {
        System.out.println(bookName + " >>> Was returned");
        status = true;
        reader = null;
    }

    @Override
    public int compareTo(Object o) {
        return 0;
    }

    public LibraryBook(String bookName) {
        this.bookName = bookName;
    }

    public LibraryBook(String bookName, boolean status) {
        this.bookName = bookName;
        this.status = status;
    }

    public Reader getReader() {
        return reader;
    }

    public void setReader(Reader reader) {
        this.reader = reader;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "LibraryBook{" +
                "reader=" + reader +
                ", bookName='" + bookName + '\'' +
                ", status=" + status +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
         else if (o == null || getClass() != o.getClass()) {
             return false;
        }
        LibraryBook that = (LibraryBook) o;
        return status == that.status && Objects.equals(reader, that.reader) && Objects.equals(bookName, that.bookName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(reader, bookName, status);
    }
}
