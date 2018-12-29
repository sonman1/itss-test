export * from './auth.service';
import { AuthService } from './auth.service';
export * from './profile.service';
import { ProfileService } from './profile.service';
export * from './root.service';
import { RootService } from './root.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [AuthService, ProfileService, RootService, UsersService];
