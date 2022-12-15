import * as dao from './group-dao.js'

const GroupController = (app) => {
    const findAllGroups = async (req, res) => {
        const groups = await dao.findAllGroups()
        res.json(groups)
    }

    const findPopularGroups = async (req, res) => {
        const popular = await dao.findPopularGroups()
        res.json(popular)
    }

    const joinGroup = async (req, res) => {
        const user = req.params.uid
        const game = req.params.gid
        const name = req.body.name
        const toJoin = {
            user: user,
            joined: game,
            gameName: name
        }
        console.log(toJoin)
        const actualJoin = await dao.joinGroup(toJoin)
        res.json(actualJoin)
    }
    // const findFollowers = async (req, res) => {
    //     const followed = req.params.followed
    //     const followers = await dao.findFollowers(followed)
    //     res.json(followers)
    // }
    const checkJoined = async (req, res) => {
        const user = req.params.uid
        const game = req.params.gid
        const Joined = await dao.checkJoined(user, game)
        res.json(Joined)
    }
    const findJoined = async (req, res) => {
        const user = req.params.uid
        const Joined = await dao.findJoined(user)
        res.json(Joined)
    }
    app.get('/group', findAllGroups)
    app.get('/group/popular', findPopularGroups)
    app.post('/group/:uid/:gid', joinGroup)
    app.get('/group/:uid/:gid', checkJoined)
    app.get('/group/:uid', findJoined)
    // app.get('/users/:follower/following', findFollowing)
}

export default GroupController