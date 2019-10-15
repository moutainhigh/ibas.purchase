/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 查看应用-采购订单 */
        export class PurchaseOrderViewApp extends ibas.BOViewService<IPurchaseOrderViewView, bo.PurchaseOrder> {
            /** 应用标识 */
            static APPLICATION_ID: string = "9c891211-d0e7-4380-a906-fe8f80f3b7f6";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchaseorder_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseOrder.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseOrderViewApp.APPLICATION_ID;
                this.name = PurchaseOrderViewApp.APPLICATION_NAME;
                this.boCode = PurchaseOrderViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.editDataEvent = this.editData;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.viewData)) {
                    // 创建编辑对象实例
                    this.viewData = new bo.PurchaseOrder();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showPurchaseOrder(this.viewData);
                this.view.showPurchaseOrderItems(this.viewData.purchaseOrderItems.filterDeleted());
                this.view.showShippingAddresses(this.viewData.shippingAddresss.filterDeleted());
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: PurchaseOrderEditApp = new PurchaseOrderEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseOrder): void;
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], bo.PurchaseOrder)) {
                    this.viewData = arguments[0];
                    this.show();
                } else {
                    super.run.apply(this, arguments);
                }
            }
            protected viewData: bo.PurchaseOrder;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    let value: string = criteria;
                    criteria = new ibas.Criteria();
                    criteria.result = 1;
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = bo.PurchaseOrder.PROPERTY_DOCENTRY_NAME;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseOrder({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseOrder>): void {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.viewData = opRslt.resultObjects.firstOrDefault();
                            if (!that.isViewShowed()) {
                                that.show();
                            } else {
                                that.viewShowed();
                            }
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
        }
        /** 视图-采购订单 */
        export interface IPurchaseOrderViewView extends ibas.IBOViewView {
            showPurchaseOrder(data: bo.PurchaseOrder): void;
            showPurchaseOrderItems(data: bo.PurchaseOrderItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
        }
        /** 采购订单连接服务映射 */
        export class PurchaseOrderLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseOrderViewApp.APPLICATION_ID;
                this.name = PurchaseOrderViewApp.APPLICATION_NAME;
                this.boCode = PurchaseOrderViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller> {
                return new PurchaseOrderViewApp();
            }
        }
    }
}