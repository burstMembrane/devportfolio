// function to embed for different websites based on data

const embed = (item) => {
	// PROCESS JSON DATA AND RENDER HTML TEMPLATES
	if (item.gifHash) {
		return `<iframe scrollable="no" src="https://giphy.com/embed/${item.gifHash}" width="100%" height="100%" style="overflow: hidden; width: 100%; box-sizing: border-box; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 1em 0; padding: 1em;" frameBorder="0" class="giphy-embed"  allowFullScreen></iframe>`;
	}
	if (item.penHash) {
		return `<p class="codepen-later" data-height="100%" data-theme-id="dark" data-default-tab="result" data-user="burstmembrane" data-preview="true" data-slug-hash="${item.penHash}" style="width: 100%; box-sizing: border-box; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 1em 0; padding: 1em;" data-pen-title="${item.name}">
        <span>See the Pen <a href="https://codepen.io/burstmembrane/pen/${item.penHash}">
        ${item.name}</a> by Liam Power (<a href="https://codepen.io/burstmembrane">@burstmembrane</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://static.codepen.io/assets/embed/ei.js"></script>`;
	} else {
		return `<iframe class="externalsite" scrollable="no" src="${item.url}"></iframe>`;
	}
};

// template for project
const makeProject = (item) => {
	const divId = item.name.split(' ')[0].toLowerCase();

	// .card padded border > projectbuttons > expandproject
	return `<div class="card padded border" id="${divId}">

    <div class="projectbuttons">
        <a title="Expand" class="expand" href="#${divId}"><i class="fas fa-expand thin"></i></a>
        <a title="Demo" class="" target="_blank" href="${item.url}"><i class="fas fa-external-link-alt thin"></i></a>
        <a title="GitHub" class="" target="_blank" href="${item.repo}"><i class="fas fa-code thin"></i></a>
      
        </div> 
        <h2 class="centered"> ${item.name} </h2>
    <hr>

    ${embed(item)}
    
    <p class="small">${item.caption} </p>
    <p class="tags">${item.languages.join(', ')}</p>
</div>`;
};

// ADD PROJECTS TO PAGE

const grid = document.querySelector('.grid');
axios
	.get('../data/projects.json')
	.then(function({data}) {
		const items = data;
		items.forEach((item) => {
			if (item.show === 'true') {
				grid.innerHTML += makeProject(item);
			}
		});

		window.__CPEmbed('.codepen-later');
	})
	.catch((err) => {
		renderError(err);
	});
