const embed = (item) => {
    // PROCESS JSON DATA AND RENDER HTML TEMPLATES
    if(item.url === "") {
        return `<iframe scrollable="no" src="${item.imagePath}"></iframe>`
    }

    if(item.penHash) {
        return `<p class="codepen" data-height="100%" data-theme-id="dark" data-default-tab="result" data-user="burstmembrane" data-preview="true" data-slug-hash="${item.penHash}" style="width: 100%; height: 100%; box-sizing: border-box; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 1em 0; padding: 1em;" data-pen-title="${item.name}">
        <span>See the Pen <a href="https://codepen.io/burstmembrane/pen/${item.penHash}">
        ${item.name}</a> by Liam Power (<a href="https://codepen.io/burstmembrane">@burstmembrane</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
        </p>`;
    } else {
        return `<iframe scrollable="no" src="${item.url}"></iframe>`
    }
}

const makeProject = (item) => {
    const divId = item.name.split(" ")[0];
    return `
            <div class="card border" id="${divId}">
            <h1 class="centered">  <a class="expandproject float-left" href="#${divId}"><i class="fas fa-expand"></i></a> ${item.name} <a class="float-right" target="_blank" href=${item.url}><i class="fas fa-external-link-alt"></i></a>
            <a class="float-right" target="_blank" href=${item.repo}><i class="fas fa-code"></i></a></h1> 
            <hr>
            <div class="thumbnail">
            ${embed(item)}
            </div>
            <p class="small">${item.caption}</p>
            <p class="tags">${item.languages.join(",")}</p>
            </div>
            `;
}


const grid = document.querySelector('.grid');
axios.get('../data//projects.json')
    .then(function(response) {
        const items = response.data;
        items.forEach((item) => {
            grid.innerHTML += makeProject(item);
        });
        grid.innerHTML = projectHTML;
    });