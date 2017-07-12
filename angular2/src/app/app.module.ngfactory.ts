/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './app.module';
import * as i2 from './app.component';
import * as i3 from './post-list/post-list.component.ngfactory';
import * as i4 from './post-detail/post-detail.component.ngfactory';
import * as i5 from './app.component.ngfactory';
import * as i6 from '@angular/http';
import * as i7 from '../modules/transfer-http/transfer-http';
import * as i8 from '../modules/transfer-state/transfer-state';
import * as i9 from '@angular/common';
import * as i10 from '@angular/router';
import * as i11 from './services/comments.service';
import * as i12 from './services/posts.service';
import * as i13 from '../modules/transfer-http/transfer-http.module';
import * as i14 from './post-list/post-list.component';
import * as i15 from './post-detail/post-detail.component';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.PostListComponentNgFactory,i4.PostDetailComponentNgFactory,i5.AppComponentNgFactory]],
              [3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,i6.BrowserXhr,
          i6.BrowserXhr,([] as any[])),i0.ɵmpd(4608,i6.ResponseOptions,i6.BaseResponseOptions,
          ([] as any[])),i0.ɵmpd(5120,i6.XSRFStrategy,i6.ɵb,([] as any[])),i0.ɵmpd(4608,
          i6.XHRBackend,i6.XHRBackend,[i6.BrowserXhr,i6.ResponseOptions,i6.XSRFStrategy]),
          i0.ɵmpd(4608,i6.RequestOptions,i6.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i6.Http,i6.ɵc,[i6.XHRBackend,i6.RequestOptions]),i0.ɵmpd(4608,i7.TransferHttp,
              i7.TransferHttp,[i6.Http,i8.TransferState]),i0.ɵmpd(4608,i9.NgLocalization,
              i9.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,i10.ActivatedRoute,
              i10.ɵf,[i10.Router]),i0.ɵmpd(4608,i10.NoPreloading,i10.NoPreloading,
              ([] as any[])),i0.ɵmpd(6144,i10.PreloadingStrategy,(null as any),[i10.NoPreloading]),
          i0.ɵmpd(135680,i10.RouterPreloader,i10.RouterPreloader,[i10.Router,i0.NgModuleFactoryLoader,
              i0.Compiler,i0.Injector,i10.PreloadingStrategy]),i0.ɵmpd(4608,i10.PreloadAllModules,
              i10.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i0.NgProbeToken,() => {
            return [i10.ɵb()];
          },([] as any[])),i0.ɵmpd(4608,i10.ɵg,i10.ɵg,[i0.Injector]),i0.ɵmpd(5120,
              i0.APP_INITIALIZER,(p0_0:any) => {
                return [i10.ɵh(p0_0)];
              },[i10.ɵg]),i0.ɵmpd(5120,i10.ROUTER_INITIALIZER,i10.ɵi,[i10.ɵg]),i0.ɵmpd(5120,
              i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
                return [p0_0];
              },[i10.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i11.CommentsService,i11.CommentsService,
              [i7.TransferHttp]),i0.ɵmpd(4608,i12.PostsService,i12.PostsService,[i7.TransferHttp]),
          i0.ɵmpd(512,i6.HttpModule,i6.HttpModule,([] as any[])),i0.ɵmpd(512,i13.TransferHttpModule,
              i13.TransferHttpModule,([] as any[])),i0.ɵmpd(512,i9.CommonModule,i9.CommonModule,
              ([] as any[])),i0.ɵmpd(1024,i10.ɵa,i10.ɵd,[[3,i10.Router]]),i0.ɵmpd(512,
              i10.UrlSerializer,i10.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,
              i10.ChildrenOutletContexts,i10.ChildrenOutletContexts,([] as any[])),
          i0.ɵmpd(256,i10.ROUTER_CONFIGURATION,{},([] as any[])),i0.ɵmpd(1024,i9.LocationStrategy,
              i10.ɵc,[i9.PlatformLocation,[2,i9.APP_BASE_HREF],i10.ROUTER_CONFIGURATION]),
          i0.ɵmpd(512,i9.Location,i9.Location,[i9.LocationStrategy]),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i10.ROUTES,() => {
            return [[{path:'',component:i14.PostListComponent},{path:'post/:id',component:i15.PostDetailComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i10.Router,i10.ɵe,[i0.ApplicationRef,i10.UrlSerializer,
              i10.ChildrenOutletContexts,i9.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i10.ROUTES,i10.ROUTER_CONFIGURATION,[2,i10.UrlHandlingStrategy],
              [2,i10.RouteReuseStrategy]]),i0.ɵmpd(512,i10.RouterModule,i10.RouterModule,
              [[2,i10.ɵa],[2,i10.Router]]),i0.ɵmpd(512,i1.AppModule,i1.AppModule,([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2VseXNla29sa2VyL2Rldi9wZXJzb25hbC9jaGFwdGVyLTEyLWZyYW1ld29ya3MvYW5ndWxhcjIvc3JjL2FwcC9hcHAubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2VseXNla29sa2VyL2Rldi9wZXJzb25hbC9jaGFwdGVyLTEyLWZyYW1ld29ya3MvYW5ndWxhcjIvc3JjL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
