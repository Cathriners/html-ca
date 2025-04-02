const baseUrl = "https://v2.api.noroff.dev/rainy-days";

async function getItems() {
  try {
    const response = await fetch(baseUrl);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Request is done");
  }
}

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
        <a href="/product/index.html" class="primary-button">View</a>
    </div>
    `;
  });

  const itemsContainer = document.getElementById("items-container");
  itemsContainer.innerHTML = htmlText;
}

generateItemsHTML();
