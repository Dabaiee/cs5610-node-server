import groupModel from "./group-model.js";


export const findAllGroups = async () =>
    await groupModel.find()

export const joinGroup = (join) =>
    groupModel.create(join)

export const findJoined = (user) =>
    groupModel.find({user})
        .populate('joined')
        .exec()

// export const findFollowing = (follower) =>
//     followsModel.find({follower})
//         .populate('followed')
//         .exec()