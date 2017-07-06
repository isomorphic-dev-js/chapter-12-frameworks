"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// From https://github.com/FrozenPandaz/ng-universal-demo
var core_1 = require("@angular/core");
var server_transfer_state_1 = require("./server-transfer-state");
var transfer_state_1 = require("./transfer-state");
var ServerTransferStateModule = (function () {
    function ServerTransferStateModule() {
    }
    return ServerTransferStateModule;
}());
ServerTransferStateModule = __decorate([
    core_1.NgModule({
        providers: [
            { provide: transfer_state_1.TransferState, useClass: server_transfer_state_1.ServerTransferState }
        ]
    })
], ServerTransferStateModule);
exports.ServerTransferStateModule = ServerTransferStateModule;
