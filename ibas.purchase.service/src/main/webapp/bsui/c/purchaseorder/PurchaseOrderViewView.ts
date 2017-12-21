/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as bo from "../../../borep/bo/index";
import { IPurchaseOrderViewView } from "../../../bsapp/purchaseorder/index";

/**
 * 查看视图-采购订单
 */
export class PurchaseOrderViewView extends ibas.BOViewView implements IPurchaseOrderViewView {

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Bar("", {
                contentLeft: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_edit"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://edit",
                        press: function (): void {
                            that.fireViewEvents(that.editDataEvent);
                        }
                    })
                ],
                contentRight: [
                    new sap.m.Button("", {
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://action",
                        press: function (event: any): void {
                            that.fireViewEvents(that.callServicesEvent, {
                                displayServices(services: ibas.IServiceAgent[]): void {
                                    if (ibas.objects.isNull(services) || services.length === 0) {
                                        return;
                                    }
                                    let popover: sap.m.Popover = new sap.m.Popover("", {
                                        showHeader: false,
                                        placement: sap.m.PlacementType.Bottom,
                                    });
                                    for (let service of services) {
                                        popover.addContent(new sap.m.Button({
                                            text: ibas.i18n.prop(service.name),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: service.icon,
                                            press: function (): void {
                                                service.run();
                                                popover.close();
                                            }
                                        }));
                                    }
                                    (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                    popover.openBy(event.getSource(), true);
                                }
                            });
                        }
                    })
                ]
            }),
            content: [this.layoutMain]
        });
        return this.page;
    }
    private page: sap.m.Page;
    private tablePurchaseOrderItem: sap.ui.table.Table;
    private layoutMain: sap.ui.layout.VerticalLayout;

    /** 显示数据 */
    showPurchaseOrder(data: bo.PurchaseOrder): void {
        this.layoutMain.setModel(new sap.ui.model.json.JSONModel(data));
    }
    /** 显示数据 */
    showPurchaseOrderItems(datas: bo.PurchaseOrderItem[]): void {
        this.tablePurchaseOrderItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
    }
}
