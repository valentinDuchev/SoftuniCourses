package bg.tu_varna.sit;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        List<LibraryBook> books = new ArrayList<>();

        LibraryBook firstBook = new LibraryBook("The old man and the sea", false);
        LibraryBook secondBook = new LibraryBook("Rich Dad, Poor Dad", false);
        LibraryBook thirdBook = new LibraryBook("Harry Potter", false);

        books.add(firstBook);
        books.add(secondBook);
        books.add(thirdBook);

        Reader pesho = new Reader("Pesho", new Date(2001, 6, 20), 6.00, "206");
        Reader gosho = new Reader("Gosho", new Date(2001, 8, 11), 4.50,"200");

        firstBook.get(pesho, firstBook);

        firstBook.ret();

        pesho.get(secondBook);
        pesho.ret(secondBook);

        firstBook.equals(secondBook);
    }
}
