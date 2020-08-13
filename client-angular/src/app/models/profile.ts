import { WebSocial } from './websocial';

export class Profile {
  id: number;
  firstName: string;
  lastName: string;
  emails: string[];
  websites: WebSocial[];
  socials: WebSocial[];
}