

const init = () => {

    const scene = $('#game');

    const renderTitleScreen = () => {
        scene.empty();
        scene.append(`
            <div class="jumbotron text-center">
                <h1>Quiz Journey</h1>
            </div>
            <div class="text-center">
                <button id="btnNewGame" class="btn btn-primary">New Game</button>
                <button id="btnLoadGame" class="btn btn-primary">Load Game</button>
            </div>
        `);
        $('#btnNewGame').click(newGame);
        $('#btnLoadGame').click(loadGame);
    };

    const newGame = () => {
        let name = prompt("Enter your name").trim();
        if (!name) return alert("Please enter a name.");
        $.post("/api/users", { name: name })
        .done(result => {
            location.href = `/${result.token}`;
        })
        .fail(() => {
            alert("Error: Unable to create user.");
        });
    };

    const loadGame = () => {
        let token = prompt("Enter your save code").trim();
        if (!token) return alert("Game not loaded.");
        $.get(`/api/token/${token}`)
        .done(result => {
            result ? location.href = `/${result.token}`
            : alert("Saved game not found.");
        })
        .fail(() => {
            alert("Error: Unable to fetch data.");
        });
    };

    renderTitleScreen();

};
