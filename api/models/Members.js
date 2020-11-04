'use strict'

const MembersModel = {
    get
}

export default MembersModel

async function get () {
    const MembersMockData = {
        data: [
            {
                id: 1,
                name: 'sutirth'
            },
            {
                id: 2,
                name: 'shantanu'
            },
            {
                id: 3,
                name: 'vikas'
            },
            {
                id: 4,
                name: 'gauraw'
            },
            {
                id: 5,
                name: 'bhaveet'
            },
            {
                id: 6,
                name: 'mehul'
            }
        ]
    }
    return MembersMockData    
}