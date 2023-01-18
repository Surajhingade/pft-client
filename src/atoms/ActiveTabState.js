import {atom} from 'recoil'

// higher order component for handle state of navbar active tab 
export const ActiveTabState = atom({
    key:"ActiveTabState",
    default:0,
})