const rss = "https://kun.uz/news/rss"; // RSS manzilini saytdan tekshiring
const url = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rss);

fetch(url)
  .then(res => res.json())
  .then(data => {
    const box = document.getElementById("yangiliklar");
    box.innerHTML = "";
    data.items.slice(0, 6).forEach(item => {
      box.innerHTML += `
        <a class="karta" href="${item.link}" target="_blank" rel="noopener">
          <h3>${item.title}</h3>
          <small>${item.pubDate.slice(0, 10)}</small>
        </a>`;
    });
  })
  .catch(() => {
    document.getElementById("yangiliklar").textContent = "Yangiliklarni yuklab bo'lmadi.";
  });