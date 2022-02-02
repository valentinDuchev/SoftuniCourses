package bg.tu_varna.sit;

import java.util.ArrayList;
import java.util.List;

public class Event {
    private Mentor eventOrganizer;
    private List<Mentor> mentors;
    private Mentor mentor;
    private int workAbility;

    public Event(Mentor eventOrganizer, List<Mentor> mentors, Mentor mentor, int workAbility) {
        this.eventOrganizer = eventOrganizer;
        this.mentors = mentors;
        this.mentor = mentor;
        this.workAbility = workAbility;
    }

    public void addMentor (Mentor newMentor) {
        mentors.add(newMentor);
    }

    public void addMember (Member member) {
        //TO DO
    }

    public void training () {
        for (int i = 0; i<mentors.size(); i++) {
            for (int j = 0; j <= 5; j++) {
                // TO DO ::::: mentors.get(i).
            }
        }
    }

    public Mentor getEventOrganizer() {
        return eventOrganizer;
    }

    public void setEventOrganizer(Mentor eventOrganizer) {
        this.eventOrganizer = eventOrganizer;
    }

    public List<Mentor> getMentors() {
        return mentors;
    }

    public void setMentors(List<Mentor> mentors) {
        this.mentors = mentors;
    }

    public Mentor getMentor() {
        return mentor;
    }

    public void setMentor(Mentor mentor) {
        this.mentor = mentor;
    }

    public int getWorkAbility() {
        return workAbility;
    }

    public void setWorkAbility(int workAbility) {
        this.workAbility = workAbility;
    }
}
