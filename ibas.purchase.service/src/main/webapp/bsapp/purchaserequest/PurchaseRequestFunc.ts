/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        export class PurchaseRequestFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "c611d153-6b4c-47fb-9451-341327ffcf1f";
            /** 功能名称 */
            static FUNCTION_NAME = "purchase_func_purchaserequest";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseRequestFunc.FUNCTION_ID;
                this.name = PurchaseRequestFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: PurchaseRequestListApp = new PurchaseRequestListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
