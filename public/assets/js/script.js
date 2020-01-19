const game = id => {

    const init = id => {
        $.when(
            $.getJSON(`/api/users/${id}`),
            $.getJSON(`/api/characters/${id}`),
            $.getJSON(`/api/locations`),
        ).done((user, characters, locations) => {
            start(user[0], characters[0], locations[0]);
        }).fail(err => {
            alert("Unable to fetch data.\n" + "Error code: " + err.status);
        });
    };

    const start = (user, characters, locations) => {
        console.log(user);
        console.log(characters);
        console.log(locations);
    };

    init(id);
};


let test = () => {
    alert("test");
};
