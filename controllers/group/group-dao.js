import groupModel from "./group-model.js";


export const findAllGroups = async () =>
    await groupModel.find()

export const joinGroup = (join) =>
    groupModel.create(join)

export const findJoined = async (user) =>
    await groupModel.find({user:user})

export const checkJoined = async (user, game) =>
    await groupModel.exists({user:user, joined:game})

// export const findFollowing = (follower) =>
//     followsModel.find({follower})
//         .populate('followed')
//         .exec()