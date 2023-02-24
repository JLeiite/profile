// Identifying language
const country = document.querySelector("html")
let lang = country.getAttribute('lang')

// Defining results
let indice;
let dropList;
let href = ['index.html', 'index_br.html', 'index_fr.html'];
let langItem = {
    en:['English', 'Portuguese', 'French', 'config/assets/en-flag.svg'],
    pt:['Português', 'Inglês', 'Francês', 'config/assets/pt-flag.svg'],
    fr:['François', 'Anglaise', 'Portugais', 'config/assets/fr-flag.svg']
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
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="${dropdown()[3]}" alt="${dropdown()[indice]} Flag" class="flag">
        ${dropdown()[indice]}
    </a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="${href[indice+1]}">${dropdown()[1]}</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="${href[indice+2]}">${dropdown()[2]}</a></li>
    </ul>
    `

