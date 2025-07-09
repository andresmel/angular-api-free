
import { signal } from '@angular/core';


const _userSignal= signal<any>(null);

export const userStore={

  user: _userSignal.asReadonly(),

  setUser(user: any) {
    _userSignal.set(user);
  },

  updateUser(updates: Partial<any>) {
    _userSignal.update(currentUser => ({
      ...currentUser,
      ...updates
    }))
  },

  clearUser() {
    _userSignal.set(null);
     sessionStorage.removeItem("user") ;
  },

  onLoadApp(){
    const user = sessionStorage.getItem("user");
    if (user) {
      _userSignal.set(JSON.parse(user));
    } else {
      _userSignal.set(null);
    }
  }
}
