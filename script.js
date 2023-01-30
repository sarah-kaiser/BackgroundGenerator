function questionList(questionsArray) {
  let listHtml = "";
  questionsArray.forEach((item) => {
    listHtml += `<li>${item}</li>`;
  });
  return listHtml;
}

function pickACard(bgType) {
  //Roll a die
  let cardNum = Math.floor(Math.random() * 10);
  //Append Card
  placeholder.innerHTML = `
    <div class="card">
        <h1> ${backgrounds.bgType[cardNum].Title}</h1>
        <p> ${backgrounds.bgType[cardNum].Content}</p>
        <hr>
        <ul>${questionList(backgrounds.bgType[cardNum].Questions)}</ul>
        
    </div>
    `;
}

function buildSet() {
  //Select Origin
  pickACard(Origin);
  //Select Twist
  //Select Motivation
  //Select Complication
  //Print
  placeholder.innerHTML = out;
}

fetch("backgrounds.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (backgrounds) {
    let placeholder = document.querySelector("#container");
  });
buildSet();
