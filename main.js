
async function loadLevels() {
  const response = await fetch("levels.json");
  const levels = await response.json();

  const container = document.getElementById("levels");
  for (let level of levels) {
    const levelDiv = document.createElement("div");
    levelDiv.className = "level";
    const title = document.createElement("h3");
    title.textContent = level.title;
    levelDiv.appendChild(title);

    if (level.unlocked) {
      const content = await fetch(level.filename).then(res => res.text());
      const pre = document.createElement("pre");
      pre.textContent = content;
      levelDiv.appendChild(pre);
    } else {
      const locked = document.createElement("p");
      locked.textContent = "🔒 Рівень ще не розблоковано";
      levelDiv.appendChild(locked);
    }

    container.appendChild(levelDiv);
  }
}

loadLevels();
