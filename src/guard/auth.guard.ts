import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    userDetails: any
    constructor(private jwtService: JwtService, private router: Router) {
        this.userDetails = this.jwtService.decodeJwtToken()
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const userRole = this.jwtService.getUserRole();
        const requiredRoles = route.data['roles'] as string[];
        if (this.jwtService.isAuthenticated()) {
            if (requiredRoles && requiredRoles.length > 0) {
                if (requiredRoles.includes(userRole)) {
                    return true;
                } else {
                    this.router.navigate(['/not-found']);
                    return false;
                }
            }
        } 
            this.router.navigate(['/login']); // User is not authenticated, navigate to the login page
            return false;
    }

}