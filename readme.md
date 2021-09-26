# Use object

## The task

1) We already have a working application consisting of individual functions. Imagine that
you need to rewrite it so that all functions become methods of the personalMovieDB object
This happens in real products when you change technologies or approaches to the program architecture.

2) Create a method toggleVisibleMyDB, that checks privat property. If it's false - it
switch it to true, if true - switch it to false. Test it together with showMyDB.

3) In writeYourGenres method, prohibit the user to click "cancel" or leave a blank line. 
If he did - return him to the same question. After all genres are entered - 
using the forEach method, display a message in the console like this:
"Favorite genre #(number in order, starting with 1) is (name from array) ".
