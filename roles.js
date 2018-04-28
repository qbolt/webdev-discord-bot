const FED = 'FED'
const BED = 'BED'
const FSD = 'FSD'
const FEN = 'FEN'
const BEN = 'BEN'
const FSN = 'FSN'

const roles = {
    FED: {
        id: '439613061725159424',
        welcome: 'You have been added to the Front-End Dev role!',
    },
    BED: {
        id: '439612764416245760',
        welcome: 'You have been added to the Back-End Dev role!',
    },
    FSD: {
        id: '439613218965422083',
        welcome: 'You have been added to the Full Stack Dev role!',
    },
    FEN: {
        id: '439613261470629889',
        welcome: 'You have been added to the Front-End Newbie role!',
    },
    BEN: {
        id: '439613357360807936',
        welcome: 'You have been added to the Back-End Newbie role!',
    },
    FSN: {
        id: '439613546083647489',
        welcome: 'You have been added to the Full Stack Newbie role!',
    },
}

const hierarchy = {
    FSD: [ FED, BED ],
    FSN: [ FEN, BEN ],
}

const getRoles = (role) => {
    const selectedRole = roles[role]
    return selectedRole
        ? getIncludedRoles(role).concat(selectedRole)
        : []
}

const getIncludedRoles = (role) => {
    const included = hierarchy[role]
    return included
        ? included.map(r => hierarchy[r] ? getIncludedRoles(r) : roles[r])
        : []
}

const applyRoles = (role, message) => {
    getRoles(role.toUpperCase()).forEach(r => {
        message.member.addRole(r.id)
        message.reply(r.welcome)
    })
}

module.exports = applyRoles
