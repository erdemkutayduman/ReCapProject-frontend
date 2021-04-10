import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ReCap Project';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getUserDetailByEmailFromLocalStorage();
  }

  getUserDetailByEmailFromLocalStorage() {
    let userEmail: string | null = this.localStorageService.get<string>(
      'userEmail'
    );
    if (!userEmail) return;

    this.getUserDetailByEmail(userEmail);
  }

  getUserDetailByEmail(email: string) {
    this.userService
      .getUserDetailByEmail(email)
      .subscribe((response) => this.authService.setUserDetail(response.data));
  }
}
