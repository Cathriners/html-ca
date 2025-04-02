const baseUrl =
  "https://v2.api.noroff.dev/rainy-days/07a7655a-7927-421b-ba6a-b6742d5a75b8";

async function getItem() {
  try {
    const response = await fetch(baseUrl);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.data;
  } catch (error) {
    console.error(error);
    alert("There was a problem while fetching the item you requested.");
  } finally {
    console.log("Request is done");
  }
}

async function generateItemHTML() {
  const item = await getItem();
  const htmlText = `
    <img src="${item.image.url}" alt="${item.image.alt}" />
    <div class="jacket-item-content">
      <h1>${item.title}</h1>
      <p>EUR ${item.price}</p>
      <p>
       ${item.description}
      </p>
      <button class="primary-button">Add to cart</button>
    </div>
    `;

  const itemsContainer = document.getElementById("item-container");
  itemsContainer.innerHTML = htmlText;
}

generateItemHTML();

async function generateItemsHTML() {
  let htmlText = "";
  const items = await getItems();
  items.forEach((item) => {
    htmlText += `
      <div>
          <img
              src="${item.image.url}"
              alt="${item.image.alt}"
          />
          <h2>${item.title}</h2>
          <h3>EUR ${item.price}</h3>
          <a href="/product/index.html?id=${item.id}" class="primary-button">View</a>
      </div>
      `;
  });

  const itemsContainer = document.getElementById("items-container");
  itemsContainer.innerHTML = htmlText;
}

generateItemsHTML();
