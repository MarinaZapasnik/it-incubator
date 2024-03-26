
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: [
        { id: 1, title: 'Front' },
        { id: 2, title: 'Back' },
        { id: 3, title: 'DevOps' }
    ]
}


// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);


let selectElement = document.createElement("select");

const option1 = document.createElement("option");
option1.value = info.technologies[0].id;
option1.text = info.technologies[0].title;
selectElement.appendChild(option1);

// Создаем и добавляем второй option элемент
const option2 = document.createElement("option");
option2.value =info.technologies[1].id;
option2.text = info.technologies[1].title;
selectElement.appendChild(option2);

// Создаем и добавляем третий option элемент
const option3 = document.createElement("option");
option3.value = info.technologies[2].id;
option3.text = info.technologies[2].title;
selectElement.appendChild(option3);

// Добавляем select элемент на страницу
document.body.appendChild(selectElement);