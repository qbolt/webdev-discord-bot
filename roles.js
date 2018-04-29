// Extracted ids to json file because they'll be different for every dev
const ROLE_IDS = require('./roles.json')

// Constants for commands
const FED = 'FED'
const BED = 'BED'
const FSD = 'FSD'
const FEN = 'FEN'
const BEN = 'BEN'
const FSN = 'FSN'

// Object to store command -> role mapping
const roleMap = {
    FED: {
        id: ROLE_IDS.FED,
        welcome: 'You have been added to the `frontEndDev` role!',
        goodbye: 'You have been removed from the `frontEndDev` role.',
    },
    BED: {
        id: ROLE_IDS.BED,
        welcome: 'You have been added to the `backEndDev` role!',
        goodbye: 'You have been removed from the `backEndDev` role.',
    },
    FSD: {
        id: ROLE_IDS.FSD,
        welcome: 'You have been added to the `fullStackDev`, `frontEndDev`, and `backEndDev` roles!',
        goodbye: 'You have been removed from the `fullStackDev` role.',
    },
    FEN: {
        id: ROLE_IDS.FEN,
        welcome: 'You have been added to the `frontEndNewbie` role!',
        goodbye: 'You have been remove from the `frontEndNewbie` role.',
    },
    BEN: {
        id: ROLE_IDS.BEN,
        welcome: 'You have been added to the `backEndNewbie` role!',
        goodbye: 'You have been removed from the `backEndNewbie` role!',
    },
    FSN: {
        id: ROLE_IDS.FSN,
        welcome: 'You have been added to the `fullSackNewbie`, `frontEndNewbie`, and `backEndNewbie` roles!',
        goodbye: 'You have been removed from the `fullStackNewbie` role.',
    },
}

// Object to store hierarchy map
const hierarchy = {
    FSD: [FED, BED],
    FSN: [FEN, BEN],
}


// Get roles from roleMap based on requestedRole
const getRoles = (role) => {
    const selectedRole = roleMap[role]
    return selectedRole
        ? getIncludedRoles(role).concat(selectedRole)
        : []
}

// Recursively get includedRoles
const getIncludedRoles = (role) => {
    const included = hierarchy[role]
    return included
        ? included.map(r => hierarchy[r] ? getIncludedRoles(r) : { ...roleMap[r], welcome: undefined })
        : []
}

const addRoles = (roles, message) => {
    // Need to manually add user to each role due to api throwing error if adding user to role it's already in.\
    roles.forEach(r => {

        // Determine if user is already in role
        const hasRole = message.member.roles.has(r.id)
        if (!hasRole) {
            // Add user to role
            message.member.addRole(r.id)
                .then(() => r.welcome ? message.reply(r.welcome) : false)
                .catch((error) => {
                    console.log(error)
                    message.reply('Error adding to role.')
                })
        }
    })
}

// Removes role
const removeRole = (role, message) => {
    message.member.removeRole(role.id)
        .then(() => message.reply(role.goodbye))
        .catch((error) => {
            console.log(error)
            message.reply('Error removing from role.')
        })
}

// Exported function to apply requestedRole + includedRoles to message object
const applyRoles = (requestedRole, message) => {
    const role = roleMap[requestedRole]
    if (role) {
        // Get hierarchy of roles based on requestedRole
        const roles = getRoles(requestedRole)

        // Determine if user is already in requestedRole
        const hasRole = message.member.roles.has(role.id)

        // If user is already in requested role, remove from single role
        // Else add user to hierarchy of roles
        hasRole
            ? removeRole(role, message)
            : addRoles(roles, message)
    }
}

module.exports = applyRoles
