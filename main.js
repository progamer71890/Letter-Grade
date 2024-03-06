// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById("eng-percent").value;
  let socPercent = +document.getElementById("soc-percent").value;
  let mathPercent = +document.getElementById("math-percent").value;
  let sciPercent = +document.getElementById("sci-percent").value;

  document.getElementById("eng-letter").innerHTML = letter(engPercent);
  document.getElementById("soc-letter").innerHTML = letter(socPercent);
  document.getElementById("math-letter").innerHTML = letter(mathPercent);
  document.getElementById("sci-letter").innerHTML = letter(sciPercent);
}

function letter(gradePercent) {
  let gradeLetter;
  if (gradePercent >= 80) {
    gradeLetter = "A";
  } else if (gradePercent >= 65) {
    gradeLetter = "B";
  } else if (gradePercent >= 55) {
    gradeLetter = "C";
  } else if (gradePercent >= 50) {
    gradeLetter = "D";
  } else {
    gradeLetter = "F";
  }
  return gradeLetter;
}
