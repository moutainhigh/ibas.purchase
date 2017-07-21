/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 模块索引文件，此文件集中导出类
export * from "./PurchaseDelivery";
export * from "./PurchaseOrder";
export * from "./PurchaseReturn";

// 注册业务对象到工厂
import * as ibas from "ibas/index";
import { PurchaseDelivery } from "./PurchaseDelivery";
ibas.boFactory.register(PurchaseDelivery.BUSINESS_OBJECT_CODE, PurchaseDelivery);
import { PurchaseOrder } from "./PurchaseOrder";
ibas.boFactory.register(PurchaseOrder.BUSINESS_OBJECT_CODE, PurchaseOrder);
import { PurchaseReturn } from "./PurchaseReturn";
ibas.boFactory.register(PurchaseReturn.BUSINESS_OBJECT_CODE, PurchaseReturn);
