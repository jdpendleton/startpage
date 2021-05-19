console.log('loaded');

const f = document.getElementById("form");
const q = document.getElementById("query");
const search = "https://duckduckgo.com/?t=ffab&q=";

function submitted(event) {
    event.preventDefault();
    const url = search + q.value + "&ia=web";
    window.open(url, "_self");
}

f.addEventListener("submit", submitted);

var req = new XMLHttpRequest();
req.open("GET", 'data.json', false);
req.send();

var data = req.status == 200 ? JSON.parse(req.responseText) : [];

data.forEach(group => {
    var nav = $('<nav>');
    var list = $('<ul>');
    var head = $('<h2>').text(group['group']);

    list.append(head);

    group.sites.forEach(site => {
        var dat = $('<li>');
        var a = $('<a>').text(site['name']).attr('href', site['url']);

        dat.append(a);
        list.append(dat);
    });

    nav.append(list);

    $('#sites').append(nav);
});
