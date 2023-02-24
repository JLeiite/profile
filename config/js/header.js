// Identifying language
const country = document.querySelector("html")
let lang = country.getAttribute('lang')

// Defining results
let indice;
let dropList;
let langItem = {
    en:['English', 'Portuguese', 'index_br.html', 'French', 'index_fr.html', 'config/assets/en-flag.svg'],
    pt:['Português', 'Inglês', 'index.html', 'Francês', 'index_fr.html','config/assets/pt-flag.svg'],
    fr:['François', 'Anglaise', 'index.html', 'Portugais', 'index_br.html', 'config/assets/fr-flag.svg']
};

// Selecting language
function selectLang() {
    if(lang == 'en'){
        return (indice = 0);
    } else if (lang == 'pt'){
        return (indice = 1);
    } else if (lang == 'fr'){
        return (indice = 2);
    }
}
function dropdown(){
    if (lang == 'en'){
        return(dropList = langItem.en)
    }else if (lang == 'pt'){
        return (dropList = langItem.pt);
    } else if (lang == 'fr'){
        return (dropList = langItem.fr);
    }
}
selectLang();

// Adding into HTML
let language = document.querySelector(".dropdown");
language.innerHTML = `
    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="${dropdown()[5]}" alt="${dropdown()[0]} Flag" class="flag">
        ${dropdown()[0]}
    </a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="${dropdown()[2]}">${dropdown()[1]}</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="${dropdown()[4]}">${dropdown()[3]}</a></li>
    </ul>
    `

