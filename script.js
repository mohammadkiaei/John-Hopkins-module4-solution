(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Joe", "Frank", "Kyrie", "Bronny", "Kiaei", "Jim"];
  for (var name in names) {
    var firstLetter = names[name].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[name]);
    } else {
      helloSpeaker.speak(names[name]);
    }
  }

})();

// Developed by SeyedMohammadMahdi Kiaei