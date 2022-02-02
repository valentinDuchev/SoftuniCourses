package bg.tu_varna.sit;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) throws InvalidValueException {
        CollegeStudent collegeStudent1 = new CollegeStudent("Marian", "Milenov", "Ivanov", "025221");
        CollegeStudent collegeStudent2 = new CollegeStudent("Milen", "Avramov", "Ivanski", "025222");
        CollegeStudent collegeStudent3 = new CollegeStudent("Gavrail", "Dimov", "Toshev", "025223");
        CollegeStudent collegeStudent4 = new CollegeStudent("Boris", "Benatov", "Tihomirov", "025224");
        CollegeStudent collegeStudent5 = new CollegeStudent("Yanik", "Yonchev", "Tishev", "025225");

        HighSchoolStudent highSchoolStudent1 = new HighSchoolStudent("Anton", "Antonov", "Antonov", "EG Geo Milev", 112345);
        HighSchoolStudent highSchoolStudent2 = new HighSchoolStudent("Mihail", "Chochev", "Ivanov", "OU H.Smirnenski", 112345);
        HighSchoolStudent highSchoolStudent3 = new HighSchoolStudent("Goshko", "Karavladislavski", "Ushev", "PMG Ivan Vazov", 112345);
        HighSchoolStudent highSchoolStudent4 = new HighSchoolStudent("Minzuhar", "Kokichev", "Latev", "HG Kiril i Metodii", 112345);
        HighSchoolStudent highSchoolStudent5 = new HighSchoolStudent("Marian", "Mashev", "Kamburov", "EG Geo Milev", 112345);

        HighSchoolStudent[] arr1 = new HighSchoolStudent[]{highSchoolStudent1};
        HighSchoolStudent[] arr2 = new HighSchoolStudent[]{highSchoolStudent2, highSchoolStudent3};
        HighSchoolStudent[] arr3 = new HighSchoolStudent[]{highSchoolStudent1, highSchoolStudent2, highSchoolStudent4};


        CollegeStudent[] arr4 = new CollegeStudent[]{collegeStudent1, collegeStudent2, collegeStudent3, collegeStudent4, collegeStudent5};
        CollegeStudent[] arr5 = new CollegeStudent[]{collegeStudent3};


        Mentor mentor1 = new Teacher("Georgi", "Ivanov", "Strashimirov", "EG Geo Milev", arr1);
        Mentor mentor2 = new Teacher("Haralambi", "Haralambev", "Haralambev", "EG Geo Milev", arr2);
        Mentor mentor3 = new Teacher("John", "Ivanov", "Highins", "EG Geo Milev", arr3);

        Mentor mentor4 = new Scientist("Charlie", "Adams", "Adams", arr4);
        Mentor mentor5 = new Scientist("Simeon", "Kostadinski", "Hazurov", arr5);

        List<Mentor> arrMentors = new ArrayList<>();
        arrMentors.add(mentor1);
        arrMentors.add(mentor2);
        arrMentors.add(mentor3);
        arrMentors.add(mentor4);
        arrMentors.add(mentor5);

        Event firstEv = new Event(mentor1, arrMentors, mentor5, 35);

        //System.out.println(collegeStudent1.toString());
        System.out.println(mentor1.toString());
    }
}
