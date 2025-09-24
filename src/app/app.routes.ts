import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactsPage } from './pages/contacts-page/contacts-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { GroupsPage } from './pages/groups/groups';
import { RegisterPage } from './pages/register-page/register-page';
import { onlyLoggedUserGuard } from './guards/only-logged-user-guard';
import { onlyPublicUserGuard } from './guards/only-public-user-guard';
import { NewEditContact } from './pages/new-edit-contact/new-edit-contact';

export const routes: Routes = [
  {
    path: "login",
    component: LoginPage

  },
  {
    path: "register",
    component: RegisterPage
  },
  {
    path: "",
    component: LoggedLayout,
    children: [
      {
        path:"",
        component:NewEditContact,
      },
      {
        path: "",
        component: ContactsPage
      },
      {
        path: "contacts/:id/edit",
        component: NewEditContact
      },
      {
        path: "groups",
        component: GroupsPage
      },
    ]
  },

];
