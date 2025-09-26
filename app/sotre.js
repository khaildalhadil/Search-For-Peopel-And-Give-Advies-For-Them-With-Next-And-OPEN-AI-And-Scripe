import {create} from 'zustand';

const useMyStore = create((set) => ({
  name: "",
  LinkedinDataUser: [],
  googleUser: [],

  setUserName: (nameUser) => set(() => ({ name: nameUser })) ,
  setLinkedinDataUser: (user) => set(() => ({LinkedinDataUser: user})),
  setGoogleUser: (user) => set(() => ({googleUser: user}))
}))

export default useMyStore;