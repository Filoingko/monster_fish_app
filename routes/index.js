var fishesJson = require('../fishes.json');

//home
exports.home = function (req, res) {

    var fishes = fishesJson.fishes;
    res.render('home', {
        title: "Monster Fish",
        fishes: fishes
    });
};

//Fishes
exports.single_fish = function (req, res) {
    var fish_no = req.params.fish_no;

    var fishes = fishesJson.fishes;
    if (0 < fish_no && fish_no < 7) {
        var fish = fishes[fish_no - 1];
        var title = fish.title;
        var main_characters = fish.main_characters;

        res.render('single_fish', {
            fishes: fishes,
            title: title,
            fish: fish,
            main_characters: main_characters
        });
    } else {
        res.render('notFound', {
            fishes: fishes,
            title: "This is not the Page your looking for"
        });
    }
};

//Not Found
exports.pagenotfound = function (req, res) {
    var fishes = fishesJson.fishes;
    res.render('notFound', {
        fishes: fishes,
        title: "This is not the Page your looking for"
    });
};