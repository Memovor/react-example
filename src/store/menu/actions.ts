import { SideBar, SET_MENU } from './types'
export const setMenu = (menu: SideBar[]) => ({
  type: SET_MENU,
  menu
})