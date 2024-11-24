let a = [
    {
      jokeno: 0,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      jokeno: 1,
      joke: "Why don't skeletons fight each other? They don't have the guts!",
    },
    {
      jokeno: 2,
      joke: "Why don't skeletons fight each other? They don't have the guts!",
    },
    {
      jokeno: 3,
      joke: "Why did the bicycle fall over? Because it was two-tired!",
    },
    {
      jokeno: 4,
      joke: "Why don't oysters donate to charity? Because they are shellfish!",
    },
    {
      jokeno: 5,
      joke: "Why don't oysters donate to charity? Because they are shellfish!",
    },
    {
      jokeno: 6,
      joke: "What do you call fake spaghetti? An impasta!",
    },
  ];

  let container = document.getElementById("contain");
  let jokenum = "";
  a.forEach(function (item) {
    let joke = `
      <div class="row mt-2">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="https://source.unsplash.com/1600x900/?joker" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.jokeno}</h5>
              <p class="card-text">${item.joke}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    console.log(item.joke);
    jokenum += joke;
  });
container.innerHTML = jokenum;


