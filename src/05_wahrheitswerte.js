
/*  Berechnung Alter    */

    //  Deklaration
    let ageJohn, ageMark;
    const birthYearJohn = 2000;
    const birthYearMark = 1990;

    //  Berechung Alter
    let date = new Date(); // Systemfunktion Datum
    let year = date.getFullYear();  // Daten liefern lassen!
    ageJohn = year - birthYearJohn;
    ageMark = year - birthYearMark;

    // Ausgabe
    console.log("John: " + ageJohn);
    console.log("Mark: " + ageMark);
    console.log("Datum: " + date);