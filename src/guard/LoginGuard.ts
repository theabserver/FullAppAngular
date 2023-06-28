import { Router, ActivatedRouteSnapshot, createUrlTreeFromSnapshot } from '@angular/router';
import { map, catchError, of } from 'rxjs';
import { LoginService } from 'src/services/login.service';
import { inject } from '@angular/core';

export const authGuard = (next: ActivatedRouteSnapshot) => {
    return inject(LoginService)
        .isAuthenticated
        .pipe(
            map((isLoggedIn) =>
                (isLoggedIn ? true : createUrlTreeFromSnapshot(next, ['/', 'login']))
            )
        );
};