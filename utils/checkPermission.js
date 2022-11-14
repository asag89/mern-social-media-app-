import UnAuthenticatedError from "../errors/unAuthenticated.js";

const checkPermissions = (requestUserId, resourceUserId) => {
    if (requestUserId.toString() === resourceUserId.toString()) return

    throw new UnAuthenticatedError('Not authorized to access this route')
}

export default checkPermissions