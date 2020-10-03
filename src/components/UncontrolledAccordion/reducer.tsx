type ActionType = {
    type: string
}
export  const TOGGLE_COLLAPSED="TOGGLE-COLLAPSED"
export type StateType={
    collapsed:boolean
}
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const stateCoy={...state,
                collapsed:!state.collapsed}
            return stateCoy
        default:
            return state
    }


}