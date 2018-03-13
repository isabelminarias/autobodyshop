import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule  } from '@angular/common/http';

// Components
  import { AppComponent } from './app.component';
  import { HomepageComponent } from './default/homepage/homepage.component';
  import { NavbarComponent } from './default/navbar/navbar.component';
  import { FooterComponent } from './default/footer/footer.component';
  import { ServiceComponent } from './default/service/service.component';
  import { HistoryComponent } from './default/history/history.component';
  import { ContactsComponent } from './default/contacts/contacts.component';
  import { ConsultationComponent } from './default/consultation/consultation.component';
  import { ClientHomeComponent } from './client/client-home/client-home.component';
  import { ClientAppointmentComponent } from './client/client-appointment/client-appointment.component';
  import { ClientCarRegisterComponent } from './client/client-car--register/client-car--register.component';
  import { ClientCarViewComponent } from './client/client-car--view/client-car--view.component';
  import { ClientCarModifyComponent } from './client/client-car--modify/client-car--modify.component';
  import { ClientNavbarComponent } from './client/client-navbar/client-navbar.component';
  import { ClientCarListComponent } from './client/client-car--list/client-car--list.component';
  import { ClientCarHistoryComponent } from './client/client-car--history/client-car--history.component';
  import { ClientAppointmentListComponent } from './client/client-appointment--list/client-appointment--list.component';
  import { ClientProfileComponent } from './client/client-profile/client-profile.component';
  import { ClientProfileModifyComponent } from './client/client-profile--modify/client-profile--modify.component';
  import { LoginMainComponent } from './login/login-main/login-main.component';
  import { LoginRegisterClientComponent } from './login/login-register--client/login-register--client.component';
  import { LoginRegisterEmployeeComponent } from './login/login-register--employee/login-register--employee.component';
  import { LoginComponent } from './login/login/login.component';
  import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
  import { ManagerNavbarComponent } from './manager/manager-navbar/manager-navbar.component';
  import { ManagerEmployeeListComponent } from './manager/manager-employee--list/manager-employee--list.component';
  import { ManagerEmployeeViewComponent } from './manager/manager-employee--view/manager-employee--view.component';
  import { ManagerSystemComponent } from './manager/manager-system/manager-system.component';
  import { ManagerSystemWaitingListComponent } from './manager/manager-system--waiting-list/manager-system--waiting-list.component';
  import { ManagerSystemReportComponent } from './manager/manager-system--report/manager-system--report.component';
  import { ManagerCarListComponent } from './manager/manager-car--list/manager-car--list.component';
  import { ManagerCarViewComponent } from './manager/manager-car--view/manager-car--view.component';
  import { ManagerRepairCheckinComponent } from './manager/manager-repair--checkin/manager-repair--checkin.component';
  import { ManagerRepairAcceptComponent } from './manager/manager-repair--accept/manager-repair--accept.component';
  import { ManagerRepairViewComponent } from './manager/manager-repair--view/manager-repair--view.component';
  import { ManagerProfileComponent } from './manager/manager-profile/manager-profile.component';
  import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
  import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
  import { AdminInventoryViewComponent } from './admin/admin-inventory--view/admin-inventory--view.component';
  import { AdminInventoryAddComponent } from './admin/admin-inventory--add/admin-inventory--add.component';
  import { AdminInventoryModifyComponent } from './admin/admin-inventory--modify/admin-inventory--modify.component';
  import { AdminInventoryRequestListComponent } from './admin/admin-inventory--request-list/admin-inventory--request-list.component';
  import { AdminUsersListComponent } from './admin/admin-users--list/admin-users--list.component';
  import { AdminUsersViewComponent } from './admin/admin-users--view/admin-users--view.component';
  import { AdminUsersCreateComponent } from './admin/admin-users--create/admin-users--create.component';
  import { AdminUsersModifyComponent } from './admin/admin-users--modify/admin-users--modify.component';
  import { AdminAppointmentComponent } from './admin/admin-appointment/admin-appointment.component';
  import { AdminProfileModifyComponent } from './admin/admin-profile--modify/admin-profile--modify.component';
  import { MechanicHomeComponent } from './mechanic/mechanic-home/mechanic-home.component';
  import { MechanicRepairOrderComponent } from './mechanic/mechanic-repair-order/mechanic-repair-order.component';
  import { MechanicSparePartsListComponent } from './mechanic/mechanic-spare-parts--list/mechanic-spare-parts--list.component';
  import { MechanicSparePartsRequestComponent } from './mechanic/mechanic-spare-parts--request/mechanic-spare-parts--request.component';
  import { MechanicRepairOrderListComponent } from './mechanic/mechanic-repair-order--list/mechanic-repair-order--list.component';
  import { MechanicProfileComponent } from './mechanic/mechanic-profile/mechanic-profile.component';
  import { MechanicProfileModifyComponent } from './mechanic/mechanic-profile--modify/mechanic-profile--modify.component';
  import { MechanicNavbarComponent } from './mechanic/mechanic-navbar/mechanic-navbar.component';

  import { ApiService } from './services/api/api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    ServiceComponent,
    HistoryComponent,
    ContactsComponent,
    ConsultationComponent,
    ClientHomeComponent,
    ClientAppointmentComponent,
    ClientCarRegisterComponent,
    ClientCarViewComponent,
    ClientCarModifyComponent,
    ClientNavbarComponent,
    ClientCarListComponent,
    ClientAppointmentListComponent,
    ClientCarHistoryComponent,
    LoginMainComponent,
    LoginRegisterClientComponent,
    LoginRegisterEmployeeComponent,
    LoginComponent,
    ManagerHomeComponent,
    ManagerNavbarComponent,
    ManagerEmployeeListComponent,
    ManagerEmployeeViewComponent,
    ManagerSystemComponent,
    ManagerSystemWaitingListComponent,
    ManagerSystemReportComponent,
    ManagerCarListComponent,
    ManagerCarViewComponent,
    ManagerRepairCheckinComponent,
    ManagerRepairAcceptComponent,
    ManagerRepairViewComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminInventoryViewComponent,
    AdminInventoryAddComponent,
    AdminInventoryModifyComponent,
    AdminInventoryRequestListComponent,
    AdminUsersListComponent,
    AdminUsersViewComponent,
    AdminUsersCreateComponent,
    AdminUsersModifyComponent,
    AdminAppointmentComponent,
    ClientProfileComponent,
    ClientProfileModifyComponent,
    ManagerProfileComponent,
    MechanicHomeComponent,
    AdminProfileModifyComponent,
    MechanicRepairOrderComponent,
    MechanicSparePartsListComponent,
    MechanicSparePartsRequestComponent,
    MechanicRepairOrderListComponent,
    MechanicProfileComponent,
    MechanicProfileModifyComponent,
    MechanicNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
