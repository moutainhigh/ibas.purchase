/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        export class PurchaseQuoteFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "907ae3a9-289b-43f1-8505-7281125ee590";
            /** 功能名称 */
            static FUNCTION_NAME = "purchase_func_purchasequote";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseQuoteFunc.FUNCTION_ID;
                this.name = PurchaseQuoteFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: PurchaseQuoteListApp = new PurchaseQuoteListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}