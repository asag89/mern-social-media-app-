// packages
import { StatusCodes } from "http-status-codes"

// errors
import BadRequestError from "../errors/badRequest.js"

// models
import Activity from "../models/Activity.js"

// no need try-catch or etc, because using express-async-errors

export const saveActivity = async (req, res) => {

    const { userId, osName, browserName } = req.body

    if (!osName || !browserName) {
        throw new BadRequestError("Please provide all values")
    }

    const newActivity = await Activity.create({
        osName,
        browserName,
        userId
    })

    res.status(StatusCodes.CREATED).json(newActivity)
}

export const getLoginActivity = async (req, res) => {

    const userId = req.user._id

    const loginActivities = await Activity.find({ userId }).sort("-createdAt")
    res.status(StatusCodes.OK).json(loginActivities)
}

export const confirmActivity = async (req, res) => {

    const { activityId, confirm } = req.body

    await Activity.findByIdAndUpdate(activityId,
        {
            isConfirmed: confirm
        }, {
        new: true
    })

    const activities = await Activity.find({ userId: req.user._id }).sort("-createdAt")
    res.status(StatusCodes.OK).json(activities)
}