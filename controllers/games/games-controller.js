import posts from "./games.js";
let games = posts;

const findGames = (req, res) => {
    res.json(games)
}

export default (app) => {

    app.get('/api/games', findGames);

}
