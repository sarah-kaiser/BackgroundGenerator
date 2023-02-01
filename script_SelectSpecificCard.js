function questionList(questionsArray) {
  let listHtml = "";
  questionsArray.forEach((item) => {
    listHtml += `<li>${item}</li>`;
  });
  return listHtml;
}

let cardNum = Math.floor(Math.random() * 10);
let cardNum1 = Math.floor(Math.random() * 10);
let cardNum2 = Math.floor(Math.random() * 10);
let cardNum3 = Math.floor(Math.random() * 10);

fetch("backgrounds.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (backgrounds) {
    let placeholder = document.querySelector("#container");
    placeholder.innerHTML = `
    <div class="card" style="background-image: url(img/Paint_${
      backgrounds.Origin[cardNum].Color
    }.svg); -webkit-animation: tilt-in-top-1 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.6s backwards;
    animation: tilt-in-top-1 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.2s backwards;" >
        <h1> ${backgrounds.Origin[cardNum].Title}</h1>
        <h2>Origin</h2>
        <p> ${backgrounds.Origin[cardNum].Content}</p>
        <hr>
        <ul>${questionList(backgrounds.Origin[cardNum].Questions)}</ul>
        
    </div>
    <div class="card" style="background-image: url(img/Paint_${
      backgrounds.Twist[cardNum1].Color
    }.svg); -webkit-animation: tilt-in-top-1 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.6s backwards;
    animation: tilt-in-top-1 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.6s backwards;">
        <h1> ${backgrounds.Twist[cardNum1].Title}</h1>
        <h2>Twist</h2>
        <p> ${backgrounds.Twist[cardNum1].Content}</p>
        <hr>
        <ul>${questionList(backgrounds.Twist[cardNum1].Questions)}</ul>
    </div>
    <div class="card" style="background-image: url(img/Paint_${
      backgrounds.Motivation[cardNum2].Color
    }.svg); -webkit-animation: tilt-in-top-1 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.6s backwards;
    animation: tilt-in-top-1 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s backwards;" >
        <h1> ${backgrounds.Motivation[cardNum2].Title}</h1>
        <h2>Motivation</h2>
        <p> ${backgrounds.Motivation[cardNum2].Content}</p>
        <hr>
        <ul>${questionList(backgrounds.Motivation[cardNum2].Questions)}</ul>
    </div>
    <div class="card" style="background-image: url(img/Paint_${
      backgrounds.Complication[cardNum3].Color
    }.svg); -webkit-animation: tilt-in-top-1 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.6s backwards;
    animation: tilt-in-top-1 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1.4s backwards;" >
        <h1> ${backgrounds.Complication[cardNum3].Title}</h1>
        <h2>Complication</h2>
        <p> ${backgrounds.Complication[cardNum3].Content}</p>
        <hr>
        <ul>${questionList(backgrounds.Complication[cardNum3].Questions)}</ul>
    </div>
    `;
  });

function pickACard() {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  let cardNum = Math.floor(Math.random() * 10);
  let cardNum1 = Math.floor(Math.random() * 10);
  let cardNum2 = Math.floor(Math.random() * 10);
  let cardNum3 = Math.floor(Math.random() * 10);

  fetch("backgrounds.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (backgrounds) {
      let placeholder = document.querySelector("#container");
      placeholder.innerHTML = `
    <div class="card" style="background-image: url(img/Paint_${
      backgrounds.Origin[cardNum].Color
    }.svg); -webkit-animation: tilt-in-top-1 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.6s backwards;
    animation: tilt-in-top-1 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.2s backwards;" >
        <h1> ${backgrounds.Origin[cardNum].Title}</h1>
        <h2>Origin</h2>
        <p> ${backgrounds.Origin[cardNum].Content}</p>
        <hr>
        <ul>${questionList(backgrounds.Origin[cardNum].Questions)}</ul>
        
    </div>
    <div class="card" style="background-image: url(img/Paint_${
      backgrounds.Twist[cardNum1].Color
    }.svg); -webkit-animation: tilt-in-top-1 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.6s backwards;
    animation: tilt-in-top-1 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.6s backwards;">
        <h1> ${backgrounds.Twist[cardNum1].Title}</h1>
        <h2>Twist</h2>
        <p> ${backgrounds.Twist[cardNum1].Content}</p>
        <hr>
        <ul>${questionList(backgrounds.Twist[cardNum1].Questions)}</ul>
    </div>
    <div class="card" style="background-image: url(img/Paint_${
      backgrounds.Motivation[cardNum2].Color
    }.svg); -webkit-animation: tilt-in-top-1 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.6s backwards;
    animation: tilt-in-top-1 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s backwards;" >
        <h1> ${backgrounds.Motivation[cardNum2].Title}</h1>
        <h2>Motivation</h2>
        <p> ${backgrounds.Motivation[cardNum2].Content}</p>
        <hr>
        <ul>${questionList(backgrounds.Motivation[cardNum2].Questions)}</ul>
    </div>
    <div class="card" style="background-image: url(img/Paint_${
      backgrounds.Complication[cardNum3].Color
    }.svg); -webkit-animation: tilt-in-top-1 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.6s backwards;
    animation: tilt-in-top-1 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1.4s backwards;" >
        <h1> ${backgrounds.Complication[cardNum3].Title}</h1>
        <h2>Complication</h2>
        <p> ${backgrounds.Complication[cardNum3].Content}</p>
        <hr>
        <ul>${questionList(backgrounds.Complication[cardNum3].Questions)}</ul>
    </div>
    `;
    });
}
