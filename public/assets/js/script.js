const init = id => {

    const getData = id => {
        $.when(
            $.getJSON(`/api/users/${id}`),
            $.getJSON(`/api/characters/${id}`),
            $.getJSON(`/api/locations`),
        ).done((user, characters, locations) => {
            let data = {
                user: user[0],
                characters: characters[0],
                locations: locations[0]
            };
            main(data);
        }).fail(err => {
            alert("Unable to fetch data.\n" + "Error code: " + err.status);
        });
    };

    const main = data => {
        console.log(data);
    };

    getData(id);
};


let test = () => {
    alert("test");
};
