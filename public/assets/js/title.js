

const init = () => {

    const newGame = () => {
        let name = prompt("Enter your name");
        $.post("/api/users", { name: name })
        .done(result => {
            location.href = `/${result.token}`;
        })
        .fail(() => {
            alert("error");
        })
    };

    const loadGame = () => {
        let token = prompt("Enter your save code");
        $.get(`/api/token/${token}`)
        .done(result => {
            location.href = `/${result.token}`;
        })
        .fail(() => {
            alert("error");
        })
    };

    $('#btnNewGame').click(newGame);
    $('#btnLoadGame').click(loadGame);

};
