import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Components for Paths */
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


const routes: Routes = [
/* Homepage Paths */
  {	path: '',			component: HomepageComponent },
  {	path: 'service', 	component: ServiceComponent},
  {	path: 'contact', 	component: ContactsComponent},
	{
		path: 'history',
		component: HistoryComponent
	},
	{
		path: 'client',
		component: ClientHomeComponent
	},
	{
		path: 'consultation',
		component: ConsultationComponent
	},

/* Client Paths */
	{
		path: 'client/car',
		component: ClientCarListComponent
	},
	{
		path: 'client/car/history',
		component: ClientCarHistoryComponent
	},
	{
		path: 'client/car/register',
		component: ClientCarRegisterComponent
	},
	{
		path: 'client/car/view',
		component: ClientCarViewComponent
	},
	{
		path: 'client/car/modify',
		component: ClientCarModifyComponent
	}, 
	{
		path: 'client/apps',
		component: ClientAppointmentListComponent
	},
	{
		path: 'client/request',
		component: ClientAppointmentComponent
	},
	{
		path: 'client/apps/request',
		component: ClientAppointmentComponent
	},
	{
		path: 'client/profile',
		component: ClientProfileComponent
	},
	{
		path: 'client/profile/modify',
		component: ClientProfileModifyComponent
	},

/* Manager Paths*/
	{
		path: 'manager',
		component: ManagerHomeComponent
	},
	{
		path: 'manager/system',
		component: ManagerSystemComponent
	},
	{
		path: 'manager/system/reports',
		component: ManagerSystemReportComponent
	},
	{
		path: 'manager/system/wait-list',
		component: ManagerSystemWaitingListComponent
	},
	{
		path: 'manager/system/repair-view',
		component: ManagerRepairViewComponent
	},
	{
		path: 'manager/employee',
		component: ManagerEmployeeListComponent
	},
	{
		path: 'manager/employee/view',
		component: ManagerEmployeeViewComponent
	},
	{
		path: 'manager/assign',
		component: ManagerRepairAcceptComponent
	},
	{
		path: 'manager/checkin',
		component: ManagerRepairCheckinComponent
	},
	{
		path: 'manager/car-list',
		component: ManagerCarListComponent
	},
	{
		path: 'manager/car-list/view',
		component: ManagerCarViewComponent
	},
	{
		path: 'manager/profile',
		component: ManagerProfileComponent
	},

/* Admin Paths*/
	{
		path: 'admin',
		component: AdminHomeComponent
	},
	{
		path: 'admin/users',
		component: AdminUsersListComponent
	},
	{
		path: 'admin/users/view',
		component: AdminUsersViewComponent
	},
	{
		path: 'admin/users/create',
		component: AdminUsersCreateComponent
	},
	{
		path: 'admin/listing',
		component: AdminInventoryViewComponent,
	},
	{
		path: 'admin/users/modify',
		component: AdminUsersModifyComponent
	},
	{
		path: 'admin/modify',
		component:AdminInventoryModifyComponent
	},
	{
		path: 'admin/add',
		component: AdminInventoryAddComponent
	},
	{
		path: 'admin/request',
		component: AdminInventoryRequestListComponent
	},
	{
		path: 'admin/app',
		component: AdminAppointmentComponent
	},
	{
		path: 'admin/profile',
		component: AdminProfileModifyComponent
	},

/* Mechanic Paths */ 
	{
		path: 'mechanic',
		component: MechanicHomeComponent
	},
	{
		path: 'mechanic/profile',
		component: MechanicProfileComponent
	},
	{
		path: 'mechanic/profile/modify',
		component: MechanicProfileModifyComponent
	},
	{
		path: 'mechanic/repair-order',
		component: MechanicRepairOrderListComponent
	},
	{
		path: 'mechanic/repair-order/view',
		component: MechanicRepairOrderComponent
	},
	{
		path: 'mechanic/spare-parts/request',
		component: MechanicSparePartsRequestComponent
	},
	{
		path: 'mechanic/spare-parts',
		component: MechanicSparePartsListComponent
	},

/* Log and Register Paths */
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'login/forgot',
		component: LoginMainComponent
	},
	{
		path: 'register',
		component: LoginRegisterClientComponent
	},
	{
		path: 'register-employee',
		component: LoginRegisterEmployeeComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
