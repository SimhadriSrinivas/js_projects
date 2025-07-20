const postsListcontainer = document.querySelector(".posts-list-container");

//fetch using XHR

function fetchusingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      displayResponse(xhr.response);
    } else {
      console.log("Some Error ocurred");
    }
  };
}

//fetch using fetch methord

function fetchUsingFetchMethord() {
  const ferchrequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  ferchrequest
    .then((response) => response.json())
    .then((result) => displayResponse(result))
    .catch((error) => console.log(error));
}

//fetch using async await methord

async function fetchUsingAsynCAwaitMethod() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const result = await response.json();
  displayResponse(result);

  console.log("====================================");
  console.log(result);
  console.log("====================================");
}

//fetch using XHR and async await methord
function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
  return promise;
}
async function fetchUsingXHRAndAsyncAwait() {
    const result = await helperMethod("GET", "https://jsonplaceholder.typicode.com/posts");
    displayResponse(result);
    console.log('====================================');
    console.log(result);
    console.log('====================================');
}

function displayResponse(posts) {
  postsListcontainer.innerHTML = posts
    .map(
      (postItem) => `
        <div class="post-item">
            <h2>${postItem.id}. ${postItem.title}</h2>
            <p>${postItem.body}</p>
        </div>
    `
    )
    .join("");
}

// fetchusingXHR();
// fetchUsingFetchMethord();
// fetchUsingXHRAndAsyncAwait()
fetchUsingXHRAndAsyncAwait();
