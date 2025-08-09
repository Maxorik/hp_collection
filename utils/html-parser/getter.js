const start = document.querySelector('#get-btn');
const copy = document.querySelector('#copy-btn');
const res = document.querySelector('#res');

const addItems = () => {
    const catalog=[];
    const items = document.querySelectorAll('.set');
    console.clear();
    items.forEach((item, i) => {
        const meta = item.querySelector('.meta');
        const year = item.querySelector('.year');
        const name = item.querySelector('.name');
        const code = meta.querySelector('span');
        const setCodeParent = item.querySelector('dd.tags');
        const setCode = setCodeParent ?  Array.from(setCodeParent.querySelectorAll('a')).map(item => item.innerHTML) : null;

        // проверка на корректное имя
        const data = {};
        data.img = item.querySelector('a').href.toLowerCase();
        data.year = year ? year.innerHTML : '0';
        data.name = name ? name.innerHTML : 'Незнакомец';
        data.id = code ? code.innerHTML.match(/\w+/g)[0].toLowerCase() : null;
        data.setCode = setCode || [];
        data.checked = 'false';

        // отсекаем не персонажей
        const invalidNameSymbols = /[^a-z\-'"\s]+/gi
        if (!invalidNameSymbols.test(data.name) && data.id && data.id.includes('hp')) {
            catalog.push(data);
        }
    })

    /** Различные способы вывода парсинга *****************************************************************************/

    /** Стандартный парсинг для json */
    const htmlStrings1 = catalog.map(item =>`{"img": "${item.img}", "name": "${item.name}", "id": "${item.id}", "year": "${item.year}", "checked": "false", "setCode": "${item.setCode.join(' ')}"},`
    );
    /** Парсинг для сброса отмеченных */
    const htmlStrings2 = catalog.map(item =>`{"code": "${item.code}", "checked": "false"},`
    );
    /** Парсинг для списка импорта (устарел) */
    const htmlStrings3 = catalog.map(item => `
        <div>import ${item.code} from "./catalog/${item.code}.png"</div>
    `);
    /** Парсинг для списка id */
    const htmlStrings4 = catalog.map(item => `<div>${item.code},</div>`);
    /** Парсинг html-представления */
    const htmlStrings5 = catalog.map(item =>`
        <div class="item">
            <img src="${item.img}" alt="${item.name}" class="item-image">
                <h3>${item.name}</h3>
                <p>code: ${item.id}</p>
                <p>Set Code: ${item.setCode}</p>
                <p>Sets Count: ${item.setsCount}</p>
                <p>Year: ${item.year}</p>
                <p>Checked: ${item.checked}</p>
        </div>`
    );

    // res.innerHTML = `const catalog = [${htmlStrings1.join('')}]\n\n export default catalog;`;  // FULL export
    res.innerHTML = htmlStrings1.join('');
    console.log(catalog)
}

start.addEventListener('click', addItems);
copy.addEventListener('click', () => navigator.clipboard.writeText(res.innerHTML).then(() => console.log('done!')));
