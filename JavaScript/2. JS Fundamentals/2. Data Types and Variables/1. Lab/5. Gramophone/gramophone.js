function gramophone (bandName, album, song){
    let songDuration = (album.length*bandName.length*song.length)/2;
    let rotationsNumber = songDuration/2.5;
    console.log(`The plate was rotated ${Math.ceil(rotationsNumber)} times.`);
    

}