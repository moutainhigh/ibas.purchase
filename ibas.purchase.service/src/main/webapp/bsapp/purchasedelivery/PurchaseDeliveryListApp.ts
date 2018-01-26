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
import { DataConverter4PH } from "../../borep/DataConverters";
import { PurchaseDeliveryViewApp } from "./PurchaseDeliveryViewApp";
import { PurchaseDeliveryEditApp } from "./PurchaseDeliveryEditApp";

/** 列表应用-采购交货 */
export class PurchaseDeliveryListApp extends ibas.BOListApplication<IPurchaseDeliveryListView, bo.PurchaseDelivery> {

    /** 应用标识 */
    static APPLICATION_ID: string = "e210c5f5-919b-4eab-aba7-2a10ae700df9";
    /** 应用名称 */
    static APPLICATION_NAME: string = "purchase_app_purchasedelivery_list";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.PurchaseDelivery.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = PurchaseDeliveryListApp.APPLICATION_ID;
        this.name = PurchaseDeliveryListApp.APPLICATION_NAME;
        this.boCode = PurchaseDeliveryListApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.editDataEvent = this.editData;
        this.view.deleteDataEvent = this.deleteData;
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
        boRepository.fetchPurchaseDelivery({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseDelivery>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    if (opRslt.resultObjects.length === 0) {
                        that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                    }
                    that.view.showData(opRslt.resultObjects);
                    that.busy(false);
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
    }
    /** 新建数据 */
    protected newData(): void {
        let app: PurchaseDeliveryEditApp = new PurchaseDeliveryEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run();
    }
    /** 查看数据，参数：目标数据 */
    protected viewData(data: bo.PurchaseDelivery): void {
        // 检查目标数据
        if (ibas.objects.isNull(data)) {
            this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                ibas.i18n.prop("shell_data_view")
            ));
            return;
        }
        let app: PurchaseDeliveryViewApp = new PurchaseDeliveryViewApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(data);

    }
    /** 编辑数据，参数：目标数据 */
    protected editData(data: bo.PurchaseDelivery): void {
        // 检查目标数据
        if (ibas.objects.isNull(data)) {
            this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                ibas.i18n.prop("shell_data_edit")
            ));
            return;
        }
        let app: PurchaseDeliveryEditApp = new PurchaseDeliveryEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(data);
    }
    /** 删除数据，参数：目标数据集合 */
    protected deleteData(data: bo.PurchaseDelivery | bo.PurchaseDelivery[]): void {
        // 检查目标数据
        if (ibas.objects.isNull(data)) {
            this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                ibas.i18n.prop("shell_data_delete")
            ));
            return;
        }
        let beDeleteds: ibas.ArrayList<bo.PurchaseDelivery> = new ibas.ArrayList<bo.PurchaseDelivery>();
        if (data instanceof Array) {
            for (let item of data) {
                item.delete();
                beDeleteds.add(item);
            }
        } else {
            data.delete();
            beDeleteds.add(data);
        }
        // 没有选择删除的对象
        if (beDeleteds.length === 0) {
            this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                ibas.i18n.prop("shell_data_delete")
            ));
            return;
        }
        let that: this = this;
        this.messages({
            type: ibas.emMessageType.QUESTION,
            title: ibas.i18n.prop(this.name),
            message: ibas.i18n.prop("shell_whether_to_delete", beDeleteds.length),
            actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
            onCompleted(action: ibas.emMessageAction): void {
                if (action === ibas.emMessageAction.YES) {
                    try {
                        let boRepository: BORepositoryPurchase = new BORepositoryPurchase();
                        let saveMethod: Function = function (beSaved: bo.PurchaseDelivery): void {
                            boRepository.savePurchaseDelivery({
                                beSaved: beSaved,
                                onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseDelivery>): void {
                                    try {
                                        if (opRslt.resultCode !== 0) {
                                            throw new Error(opRslt.message);
                                        }
                                        // 保存下一个数据
                                        let index: number = beDeleteds.indexOf(beSaved) + 1;
                                        if (index > 0 && index < beDeleteds.length) {
                                            saveMethod(beDeleteds[index]);
                                        } else {
                                            // 处理完成
                                            that.busy(false);
                                            that.messages(ibas.emMessageType.SUCCESS,
                                                ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                                        }
                                    } catch (error) {
                                        that.messages(ibas.emMessageType.ERROR,
                                            ibas.i18n.prop("shell_data_delete_error", beSaved, error.message));
                                    }
                                }
                            });
                            that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_deleting", beSaved));
                        };
                        that.busy(true);
                        // 开始保存
                        saveMethod(beDeleteds.firstOrDefault());
                    } catch (error) {
                        that.busy(false);
                        that.messages(error);
                    }
                }
            }
        });
    }
    /** 获取服务的契约 */
    protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
        return [
            new ibas.BOListServiceProxy({
                data: this.view.getSelecteds(),
                converter: new DataConverter4PH()
            })
        ];
    }
}
/** 视图-采购交货 */
export interface IPurchaseDeliveryListView extends ibas.IBOListView {
    /** 编辑数据事件，参数：编辑对象 */
    editDataEvent: Function;
    /** 删除数据事件，参数：删除对象集合 */
    deleteDataEvent: Function;
    /** 显示数据 */
    showData(datas: bo.PurchaseDelivery[]): void;
    /** 获取选择的数据 */
    getSelecteds(): bo.PurchaseDelivery[];
}
