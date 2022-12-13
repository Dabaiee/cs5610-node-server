import * as dao from './group-dao.js'

const GroupController = (app) => {
    const findAllGroups = async (req, res) => {
        const groups = await dao.findAllGroups()
        res.json(groups)
    }

    const joinGroup = async (req, res) => {
        const user = req.params.uid
        const game = req.params.gid
        const actualJoin = await dao.joinGroup({
            user: user,
            joined: game
        })
        res.json(actualJoin)
    }
    // const findFollowers = async (req, res) => {
    //     const followed = req.params.followed
    //     const followers = await dao.findFollowers(followed)
    //     res.json(followers)
    // }
    const findJoined = async (req, res) => {
        const user = req.params.uid
        const Joined = await dao.findJoined(user)
        res.json(Joined)
    }

    app.get('/group', findAllGroups)
    app.post('/group/:uid/:gid', joinGroup)
    app.get('/users/:uid', findJoined)
    // app.get('/users/:follower/following', findFollowing)
}

export default GroupController