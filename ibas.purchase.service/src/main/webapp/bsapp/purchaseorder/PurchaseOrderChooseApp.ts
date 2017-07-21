/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryPurchase } from "../../borep/BORepositories";
import { PurchaseOrderEditApp } from "./PurchaseOrderEditApp";

/** 选择应用-采购订单 */
export class PurchaseOrderChooseApp extends ibas.BOChooseService<IPurchaseOrderChooseView, bo.PurchaseOrder> {

    /** 应用标识 */
    static APPLICATION_ID: string = "b58793da-446b-4013-a5bf-6759404690f2";
    /** 应用名称 */
    static APPLICATION_NAME: string = "purchase_app_purchaseorder_choose";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.PurchaseOrder.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = PurchaseOrderChooseApp.APPLICATION_ID;
        this.name = PurchaseOrderChooseApp.APPLICATION_NAME;
        this.boCode = PurchaseOrderChooseApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
    }
    /** 查询数据 */
    protected fetchData(criteria: ibas.ICriteria): void {
        this.busy(true);
        let that: this = this;
        let boRepository: BORepositoryPurchase = new BORepositoryPurchase();
        boRepository.fetchPurchaseOrder({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseOrder>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    if (opRslt.resultObjects.length === 1
                        && ibas.config.get(ibas.CONFIG_ITEM_AUTO_CHOOSE_DATA, true)) {
                        // 仅一条数据，直接选择
                        that.chooseData(opRslt.resultObjects);
                    } else {
                        if (!that.isViewShowed()) {
                            // 没显示视图，先显示
                            that.show();
                        }
                        that.view.showData(opRslt.resultObjects);
                        that.busy(false);
                    }
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_fetching_data"));
    }
    /** 新建数据 */
    protected newData(): void {
        // 关闭自身
        this.destroy();
        // 调用编辑应用
        let app: PurchaseOrderEditApp = new PurchaseOrderEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run();
    }
}
/** 视图-采购订单 */
export interface IPurchaseOrderChooseView extends ibas.IBOChooseView {
    /** 显示数据 */
    showData(datas: bo.PurchaseOrder[]): void;
}
/** 采购订单选择服务映射 */
export class PurchaseOrderChooseServiceMapping extends ibas.BOChooseServiceMapping {
    /** 构造函数 */
    constructor() {
        super();
        this.id = PurchaseOrderChooseApp.APPLICATION_ID;
        this.name = PurchaseOrderChooseApp.APPLICATION_NAME;
        this.boCode = PurchaseOrderChooseApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 创建服务并运行 */
    create(): ibas.IService<ibas.IServiceContract> {
        return new PurchaseOrderChooseApp();
    }
}
