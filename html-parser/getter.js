const start = document.querySelector('#get-btn');
const res = document.querySelector('#res');

const addItems = () => {
    const catalog=[];
    const items = document.querySelectorAll('.set');
    items.forEach((item, i) => {
        const meta = item.querySelector('.meta');
        const year = item.querySelector('.year');
        const name = item.querySelector('.name');
        const code = meta.querySelector('span');
        const setsCount = item.querySelector('.insets').firstElementChild;
        const setCodeParent = item.querySelector('dd.tags');
        const setCode = setCodeParent ? setCodeParent.firstElementChild : null;

        const data = {};
        data.img = item.firstElementChild.href.toLowerCase();
        data.year = year ? year.innerHTML : '0';
        data.name = name ? name.innerHTML : 'Незнакомец';
        data.code = code ? code.innerHTML.match(/\w+/g)[0].toLowerCase() : '0000';
        data.setsCount = setsCount ? setsCount.innerHTML.toLowerCase() : '1 set';
        data.setCode = setCode ? setCode.innerHTML.toLowerCase() : '';
        data.checked = 'false';
        data.imgLocalSource = './assets/images/' + data.code.toLowerCase() + '.png';

        catalog.push(data);
    })

    /** Различные способы вывода парсинга *****************************************************************************/

    /** Стандартный парсинг для json */
    const htmlStrings1 = catalog.map(item =>`{"img": "${item.img}", "name": "${item.name}", "code": "${item.code}", "year": "${item.year}", "setsCount": "${item.setsCount}", "checked": "false", "imgLocalSource": "${item.imgLocalSource}", "setCode": "${item.setCode}"},`
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
                <p>code: ${item.code}</p>
                <p>Set Code: ${item.setCode}</p>
                <p>Sets Count: ${item.setsCount}</p>
                <p>Year: ${item.year}</p>
                <p>Checked: ${item.checked}</p>
        </div>`
    );

    res.innerHTML = htmlStrings1.reverse().join('');
    console.log(catalog)
}

start.addEventListener('click', addItems);
