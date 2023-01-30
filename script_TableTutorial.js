function questionList(questionsArray) {
  let listHtml = "";
  questionsArray.forEach((item) => {
    listHtml += `<li>${item}</li>`;
  });
  return listHtml;
}

fetch("backgrounds_wrk.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (backgrounds) {
    let placeholder = document.querySelector("#container");
    let out = "";
    for (let snippet of backgrounds.Origin) {
      out += `
        <div class="card">
            <!--<td> <img src='${snippet.Img}'> </td>-->
            <h1> ${snippet.Title}</h1>
            <p> ${snippet.Content}</p>
            <hr>
            <ul>${questionList(snippet.Questions)}</ul>
        </div>
        `;
    }
    placeholder.innerHTML = out;
  });
