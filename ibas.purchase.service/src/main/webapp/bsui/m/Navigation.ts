/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../3rdparty/ibas/index.d.ts" />
/// <reference path="../../3rdparty/openui5/index.d.ts" />
/// <reference path="../../index.d.ts" />
/// <reference path="./purchasedelivery/index.ts" />
/// <reference path="./purchaseorder/index.ts" />
/// <reference path="./purchasereturn/index.ts" />
namespace purchase {
    export namespace ui {
        /**
         * 视图导航
         */
        export class Navigation extends ibas.ViewNavigation {
            /**
             * 创建实例
             * @param id 应用id
             */
            protected newView(id: string): ibas.IView {
                let view: ibas.IView = null;
                switch (id) {
                    case app.PurchaseDeliveryListApp.APPLICATION_ID:
                        view = new m.PurchaseDeliveryListView();
                        break;
                    case app.PurchaseDeliveryChooseApp.APPLICATION_ID:
                        view = new m.PurchaseDeliveryChooseView();
                        break;
                    case app.PurchaseDeliveryViewApp.APPLICATION_ID:
                        view = new m.PurchaseDeliveryViewView();
                        break;
                    case app.PurchaseDeliveryEditApp.APPLICATION_ID:
                        view = new m.PurchaseDeliveryEditView();
                        break;
                    case app.PurchaseOrderListApp.APPLICATION_ID:
                        view = new m.PurchaseOrderListView();
                        break;
                    case app.PurchaseOrderChooseApp.APPLICATION_ID:
                        view = new m.PurchaseOrderChooseView();
                        break;
                    case app.PurchaseOrderViewApp.APPLICATION_ID:
                        view = new m.PurchaseOrderViewView();
                        break;
                    case app.PurchaseOrderEditApp.APPLICATION_ID:
                        view = new m.PurchaseOrderEditView();
                        break;
                    case app.PurchaseReturnListApp.APPLICATION_ID:
                        view = new m.PurchaseReturnListView();
                        break;
                    case app.PurchaseReturnChooseApp.APPLICATION_ID:
                        view = new m.PurchaseReturnChooseView();
                        break;
                    case app.PurchaseReturnViewApp.APPLICATION_ID:
                        view = new m.PurchaseReturnViewView();
                        break;
                    case app.PurchaseReturnEditApp.APPLICATION_ID:
                        view = new m.PurchaseReturnEditView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}