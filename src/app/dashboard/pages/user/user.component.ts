import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
// import { User } from '../../../interfaces/req-response';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styles: ``,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);
  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `User info: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }
    return 'User info:';
  });

  // constructor() {
  //   // Nos subscribimos al observable
  //   this.route.params.subscribe((params) => {
  //     console.log(params);
  //   });
  // }
}
