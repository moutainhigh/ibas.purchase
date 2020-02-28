﻿/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../api/index.ts" />
/// <reference path="./bo/PurchaseDelivery.ts" />
/// <reference path="./bo/PurchaseOrder.ts" />
/// <reference path="./bo/PurchaseReturn.ts" />
/// <reference path="./bo/PurchaseQuote.ts" />
/// <reference path="./bo/PurchaseRequest.ts" />
/// <reference path="./bo/ShippingAddress.ts" />
/// <reference path="./DataConverter.ts" />
/// <reference path="./BORepository.ts" />

namespace purchase {
    export namespace bo {
        // 注册业务对象仓库到工厂
        boFactory.register(BO_REPOSITORY_PURCHASE, BORepositoryPurchase);
        // 注册业务对象到工厂
        boFactory.register(PurchaseDelivery.BUSINESS_OBJECT_CODE, PurchaseDelivery);
        boFactory.register(PurchaseOrder.BUSINESS_OBJECT_CODE, PurchaseOrder);
        boFactory.register(PurchaseReturn.BUSINESS_OBJECT_CODE, PurchaseReturn);
        boFactory.register(PurchaseQuote.BUSINESS_OBJECT_CODE, PurchaseQuote);
        boFactory.register(PurchaseRequest.BUSINESS_OBJECT_CODE, PurchaseRequest);
        boFactory.register(ShippingAddress.BUSINESS_OBJECT_CODE, ShippingAddress);
    }
}