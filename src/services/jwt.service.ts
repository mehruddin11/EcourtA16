import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  private authenticationSubject = new Subject<boolean>();
  decodeJwtToken() {
    const token = this.getToken();
    if (token) {
      try {
        // Decode the JWT token
        const decodedToken: any = jwtDecode(token);
        return decodedToken;
      }
      catch (error) {
        return null;
      }
    }
    return null;
  }

  getToken() {
    return localStorage.getItem("authtoken");
  }

  setToken(token: string) {
    this.authenticationSubject.next(true);
    return localStorage.setItem("authtoken", token);
  }
  removeToken() {
    this.authenticationSubject.next(false);
    return localStorage.removeItem("authtoken");
  }
  getAuthenticationStatus(): Subject<boolean> {
    return this.authenticationSubject;
  }
  getUserRole() {
    const decodedToken = this.decodeJwtToken();
    return decodedToken ? decodedToken["Role"] : null;
  }

  isTokenExpired() {
    const decodedToken = this.decodeJwtToken();
    if (decodedToken && decodedToken.exp) {
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedToken.exp < currentTime;
    }
    return true; // Token is considered expired if no expiry information is available
  }

  getPermissions() {
    const decodedToken = this.decodeJwtToken();
    return decodedToken && decodedToken.Permissions ? decodedToken.Permissions : [];
  }

  getRedirectRoute() {

    const permissions = this.getPermissions();

    const permissionToRouteMap: any = {
      'customer': 'customer',
      'admin': 'admin',
    };

    console.log(permissions);

    for (const per of permissions) {
      console.log(per, permissionToRouteMap[per]);

      const routePath = permissionToRouteMap[per];
      if (routePath) {
        return routePath;
      }
    }
    return 'admin-portal'
  }

  isAuthenticated() {
    const token = this.getToken();

    if (!!token && !this.isTokenExpired()) {
      return true;
    }
    else {
      // this.logout()
      return false;
    }

  }

  getName() {
    const decodedToken = this.decodeJwtToken();
    if (decodedToken && decodedToken.Name) {
      return decodedToken.Name
    }
    else {
      return "Admin"
    }
  }

  hasPermission(permission: string) {
    const decodedToken = this.decodeJwtToken();
    if (decodedToken && decodedToken.Permissions) {
      return decodedToken.Permissions.includes(permission);
    }
    return false;
  }

  logout() {
    this.removeToken();
  }
}