import {Routes, RouterModule} from "@angular/router";
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";
import {DataDrivenComponent} from "./data-driven/data-driven.component";
import {HomeComponent} from "./home/home.component";
/**
 * Created by yubraj on 2/7/17.
 */

const APP_ROUTES : Routes = [
    {path:"", component: HomeComponent},
    {path:"template", component: TemplateDrivenComponent},
    {path:"data", component: DataDrivenComponent}
];

export const routes = RouterModule.forRoot(APP_ROUTES);
