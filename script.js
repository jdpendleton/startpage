console.log('loaded');

$('#form').submit(event => {
    event.preventDefault();
    
    const query = $('#query')[0].value;
    window.open(`https://duckduckgo.com/?t=ffab&q=${query}`, '_self');
});

$.get('data.json', data => {

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
});
