function changeMap(mapNumber) {
    const mapFrame = document.getElementById("mapFrame");

    if (mapNumber === 1) {
      mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.8717183303866!2d49.87491350222398!3d40.38363528319779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d1f13d226ef%3A0x17db22462af0db9b!2sAGA%20Business%20Center!5e1!3m2!1sen!2saz!4v1745169951732!5m2!1sen!2saz+"; // Xəritə 1
    } else if (mapNumber === 2) {
      mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.446945917608!2d55.283796253108!3d25.220471008023665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42ecb37a8cdb%3A0x8fee193757673aab!2sThe%20Offices%202%2C%20One%20Central!5e1!3m2!1sen!2saz!4v1745170181418!5m2!1sen!2saz"; // Xəritə 2
    }
  }