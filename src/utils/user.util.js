export const formatUser = (user) => {
    return {
        email: user.email,
        name: user.name,
    }
}

export const formatUsers = (users) => {
    return users.map(formatUser)
}

export const formatWithProfileUser = (user) => {
    return {
        email: user.email,
        name: user.name,
        profile: {
            identityType: user.profile.identityType,
            identityNumber: user.profile.identityNumber,
            address: user.profile.address
        }
    }
}