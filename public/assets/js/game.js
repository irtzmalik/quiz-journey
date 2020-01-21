const init = token => {

    let data, activeCharacter, activeLocation;

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
            data = {
                user: user[0],
                characters: characters[0],
                locations: locations[0]
            };
            console.log(data);
            main(data);
        })
        .fail(err => {
            alert("unable to fetch data");
            location.href = "/";
        });
    };

    const main = data => {

        const scene = $('#game');

        const sceneCharacters = () => {
            scene.empty();
            scene.append(`
                <h1>Welcome, ${data.user.name}!</h1>
                <div id="menuCharacterSelect">
                    <div class="container">
                        <div class="row">
            `);
            for (character of data.characters)
                $('#menuCharacterSelect .row').append(`
                    <div class="col-6 col-lg-4">
                        <div class="character" data-id="${character.id}">
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
                let id = $(this).data('id');
                activeCharacter = data.characters.find(e => e.id == id);
                console.log(activeCharacter);
                sceneLocations();
            });
            $('#menuCharacterAdd button').click(function() {
                let newCharacter = {
                    name: $('#menuCharacterAdd input').val(),
                    user_id: data.user.id
                };
                if (!newCharacter.name) return;
                console.log(newCharacter);
                $.post("/api/characters", newCharacter)
                .done(result => {
                    console.log(result);
                    data.characters.push(result);
                    sceneCharacters();
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

        };

        const sceneLocations = () => {
            scene.empty();
            scene.append(`
                <div id="menuLocationSelect" class="container">
                    <h2>Where do you want to go today?</h2>
                    <div class="row">
            `);
            for (place of data.locations)
                $('#game .row').append(`
                    <div class="col-6">
                        <div class="location" data-id="${place.id}" style="background-image: url('${place.image}')">
                            ${place.name}
                        </div>
                    </div>
                `);
            $('.location').click(function() {
                let id = $(this).data('id');
                activeLocation = data.locations.find(e => e.id == id);
                console.log(activeLocation);
                sceneDifficulty();
            });
        };

        const sceneDifficulty = () => {
            scene.empty();
            scene.append(`
                <div id="menuDifficulty" class="container text-center">
                    <h2>Pick a difficulty</h2>
                    <button data-difficulty="easy">Easy</button>
                    <button data-difficulty="medium">Medium</button>
                    <button data-difficulty="hard">Hard</button>
                </div>
            `);
            $('#menuDifficulty button').click(function() {
                activeLocation['difficulty'] = $(this).data('difficulty');
                console.log(activeLocation);
                sceneQuiz();
            });
        };

        const sceneQuiz = () => {
            scene.empty();
            scene.append(`
                <div id="quiz" style="background-image: url('${activeLocation.image}')">
                    <div id="questions" class="container">
            `);

            let current = 0;
            let questions;

            const showQuestion = question => {
                let choices = [ ...question.incorrect_answers ];
                let pointsEarned = 0;
                let points = {
                    easy: 5,
                    medium: 10,
                    hard: 20
                };
                choices.push(question.correct_answer);
                if (question.type === "multiple")
                    choices.sort(() => Math.random() - 0.5);
                if (question.type === "boolean")
                    choices.sort().reverse();
                let q = $('#questions');
                q.empty();
                q.append(`
                    <h2>${question.question}</h2>
                `);
                for (choice of choices)
                    q.append(`<div class="choice" data-choice="${choice}">${choice}</div>`);
                $('#questions .choice').click(function() {
                    if ($(this).data('choice') === question.correct_answer) {
                        alert('Correct');
                        pointsEarned += points[question.difficulty];
                    } else {
                        alert('Incorrect');
                        pointsEarned -= points[question.difficulty];
                    }
                    current++;
                    if (current < questions.length) {
                        showQuestion(questions[current]);
                    } else {
                        endQuiz(pointsEarned);
                    }
                });
            };

            const endQuiz = (pointsEarned) => {
                scene.empty();
                scene.append(`
                    <div id="ending">
                        <p>You earned ${pointsEarned} points.</p>
                        <button class="return">Return Home</button>
                    </div>
                `);
                $('#ending .return').click(function() {
                    sceneCharacters();
                });
            };

            $.getJSON(`/api/questions/${activeLocation.category}/${activeLocation.difficulty}`)
            .done(result => {
                questions = result;
                console.log(questions);
                showQuestion(questions[current]);
            })
            .fail(() => {
                alert('Unable to retrieve questions.');
                location.reload();
            });



        };

        sceneCharacters();

    };


    checkToken(token);
};
