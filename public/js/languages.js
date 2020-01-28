// DEPRECATED --- USING BACKEND NOW
const renderLang = (item) => {
    return `<li title="click to expand" class="langpopup"> ${item.language} <i class="fas fa-chevron-down thin"></i> </li>
    <p class="popup hidden"> ${item.desc} </p>`;
};

axios.get('../data//skills.json')
    .then(({
        data
    }) => {
        const parent = document.querySelector('.langlist');
        data.forEach((item) => {
            parent.innerHTML += renderLang(item);
        });
    });