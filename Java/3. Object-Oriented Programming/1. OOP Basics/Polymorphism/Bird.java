package bg.tu_varna.sit;

class Bird {
    public void sing() {
        System.out.println("Bird: tweet tweet tweet");
    }
}

class Robin extends Bird {
    public void sing() {
        System.out.println("Robin: twiddledeedee"); //If it also has sing method, it uses the one in the current class
                                                    //only if it doesn't have unused parameters (sign(currentSong)) for example
    }
}

class Pelikan extends Bird {

    //If it doesn't have different sign methods, it uses the one in the main bird class
}

class Cock extends Bird {
    public void sing(String song) {
        System.out.println("Cock: Kukuriguuu");
    }
}

class Pigeon extends Bird {
    public void sing(String song) {
        System.out.println(song); // If it has the right parameter in the method used (not like cock), it uses the method here
    }
}

