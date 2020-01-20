const init = token => {

    const checkToken = token => {
        $.getJSON(`/api/token/${token}`)
        .done(result => {
            if (result) {
                getData(result.id);
            } else {
                location.href = "/";
            }
        })
        .fail(err => {
            alert("token check failed");
            location.href = "/";
        });
    };

    const getData = id => {
        $.when(
            $.getJSON(`/api/users/${id}`),
            $.getJSON(`/api/characters/${id}`),
            $.getJSON(`/api/locations`)
        )
        .done((user, characters, locations) => {
            main({
                user: user[0],
                characters: characters[0],
                locations: locations[0]
            });
        })
        .fail(err => {
            alert("unable to fetch data");
            location.href = "/";

            // for testing
            /*
            main({
                user: { id: 1, name: "Winson", token: "43n895n4y39432"},
                characters: [
                    { id: 1, name: "CharA", points: 100 },
                    { id: 2, name: "CharB", points: 120 }
                ],
                locations: [
                    { id: 1, name: "LocA", image: "", category: "film" },
                    { id: 2, name: "LocB", image: "", category: "videogames" }
                ]
            });
            */
        });
    };

    const main = data => {

        const scene = $('#game');

        console.log(data);

        const loadCharacterScene = () => {
            scene.empty();
            scene.append(`
                <div id="welcomeText">
                    <div class="container">
                        <h1>Welcome, ${data.user.name}!</h1>
                    </div>
                </div>
            `);
            scene.append(`
                <div id="menuCharacterSelect">
                    <div class="container">
                        <div class="row">
            `);
            for (character of data.characters)
                $('#menuCharacterSelect .row').append(`
                    <div class="col-6 col-lg-4">
                        <div class="character" data-id="${character.id}" data-name="${character.name}" data-points="${character.points}">
                            ${character.name}<br>
                            ${character.points} pts
                        </div>
                    </div>
                `);
            scene.append(`
                <div id="menuCharacterAdd">
                    <div class="container">
                        <input type="text" id="name">
                        <button>Add Character</button>
                    </div>
                </div>
                <div id="saveCodeLink">
                    <div class="container">
                        Bookmark this link to load your game<br>
                        <input type="text" value="${location.href}" readonly>
                        <button>Copy Link</button>
                    </div>
                </div>
            `);
            $('#menuCharacterSelect .character').click(function() {
                alert($(this).data('name'));
            });
            $('#menuCharacterAdd button').click(function() {
                let newCharacter = {
                    name: $('#menuCharacterAdd input').val(),
                    user_id: data.user.id
                };
                console.log(newCharacter);
                $.post("/api/characters", newCharacter)
                .done(result => {
                    console.log(result);
                    data.characters.push({
                        id: result.id,
                        name: result.name,
                        points: result.points
                    });
                    loadCharacterScene();
                })
                .fail(() => {
                    alert("unable to add character");
                });
            });
            $('#saveCodeLink input').click(function() {
                $(this).select();
            });
            $('#saveCodeLink button').click(function() {
                $('#saveCodeLink input').select();
                document.execCommand("copy");
                alert("Link has been copied to the clipboard.");
            });


        }

        loadCharacterScene();

    };


    checkToken(token);
};
