import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const segGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
    const lService=inject(AuthService)
    const router=inject(Router)
    const rpta=lService.getToken();
    if(!rpta){
      router.navigate(['/login']);
      return false;
    }
    return rpta;
};