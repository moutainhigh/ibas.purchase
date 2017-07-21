/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { PurchaseDeliveryListApp } from "./PurchaseDeliveryListApp";

export class PurchaseDeliveryFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "bfb6e9a4-b7d6-43cd-8b4b-47be1c34d52f";
    /** 功能名称 */
    static FUNCTION_NAME = "purchase_func_purchasedelivery";
    /** 构造函数 */
    constructor() {
        super();
        this.id = PurchaseDeliveryFunc.FUNCTION_ID;
        this.name = PurchaseDeliveryFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: PurchaseDeliveryListApp = new PurchaseDeliveryListApp();
        app.navigation = this.navigation;
        return app;
    }
}
