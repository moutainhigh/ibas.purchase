/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../3rdparty/ibas/index.d.ts" />
/// <reference path="../3rdparty/materials/index.ts" />
/// <reference path="../3rdparty/businesspartner/index.ts" />
/// <reference path="../api/index.ts" />
/// <reference path="./bo/PurchaseDelivery.ts" />
/// <reference path="./bo/PurchaseOrder.ts" />
/// <reference path="./bo/PurchaseReturn.ts" />
/// <reference path="./bo/ShippingAddress.ts" />
/// <reference path="./DataConverter.ts" />
/// <reference path="./BORepository.ts" />

namespace purchase {
    export namespace bo {
        // 注册业务对象仓库到工厂
        ibas.boFactory.register(BO_REPOSITORY_PURCHASE, BORepositoryPurchase);
        // 注册业务对象到工厂
        ibas.boFactory.register(PurchaseDelivery.BUSINESS_OBJECT_CODE, PurchaseDelivery);
        ibas.boFactory.register(PurchaseOrder.BUSINESS_OBJECT_CODE, PurchaseOrder);
        ibas.boFactory.register(PurchaseReturn.BUSINESS_OBJECT_CODE, PurchaseReturn);
        ibas.boFactory.register(ShippingAddress.BUSINESS_OBJECT_CODE, ShippingAddress);
    }
}