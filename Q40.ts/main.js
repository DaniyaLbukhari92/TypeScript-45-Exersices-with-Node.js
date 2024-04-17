//Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functiona and creating 3 variables with diffrent values
var album1 = make_album("Hamza", "Album title 1");
var album2 = make_album("Usman", "Album title 2");
var album3 = make_album("Ali", "Album title 3", 10);
//print values of our object crated my fnction
console.log(album1);
console.log(album2);
console.log(album3);
