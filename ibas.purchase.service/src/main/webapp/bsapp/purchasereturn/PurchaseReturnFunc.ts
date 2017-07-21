/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { PurchaseReturnListApp } from "./PurchaseReturnListApp";

export class PurchaseReturnFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "ca6d247a-b6b4-46cf-9df2-d0ab13c3d7fe";
    /** 功能名称 */
    static FUNCTION_NAME = "purchase_func_purchasereturn";
    /** 构造函数 */
    constructor() {
        super();
        this.id = PurchaseReturnFunc.FUNCTION_ID;
        this.name = PurchaseReturnFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: PurchaseReturnListApp = new PurchaseReturnListApp();
        app.navigation = this.navigation;
        return app;
    }
}
