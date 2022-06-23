import { SideBar, SetMenu, SET_MENU } from './types'
const initStateMenu: SideBar[] = []
export const menuReducer = (state = initStateMenu, action: SetMenu) => {
  switch(action.type) {
    case SET_MENU:
      return action.menu
    default:
      return state
  }
}