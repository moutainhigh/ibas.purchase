/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace app {
        /** 查看应用-采购退货 */
        export class PurchaseReturnViewApp extends ibas.BOViewService<IPurchaseReturnViewView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "7920b4e5-8965-45fd-925c-55be20ff422c";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchasereturn_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseReturn.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnViewApp.APPLICATION_ID;
                this.name = PurchaseReturnViewApp.APPLICATION_NAME;
                this.boCode = PurchaseReturnViewApp.BUSINESS_OBJECT_CODE;
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
                if (ibas.objects.isNull(this.viewData)) {
                    // 创建编辑对象实例
                    this.viewData = new bo.PurchaseReturn();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showPurchaseReturn(this.viewData);
                this.view.showPurchaseReturnItems(this.viewData.purchaseReturnItems.filterDeleted());
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: PurchaseReturnEditApp = new PurchaseReturnEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseReturn): void;
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], bo.PurchaseReturn)) {
                    this.viewData = arguments[0];
                    this.show();
                } else {
                    super.run.apply(this, arguments);
                }
            }
            private viewData: bo.PurchaseReturn;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    criteria = new ibas.Criteria();
                    // 添加查询条件

                }
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseReturn({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseReturn>): void {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.viewData = opRslt.resultObjects.firstOrDefault();
                            that.viewShowed();
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            /** 获取服务的契约 */
            protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
                return [];
            }
        }
        /** 视图-采购退货 */
        export interface IPurchaseReturnViewView extends ibas.IBOViewView {
            showPurchaseReturn(data: bo.PurchaseReturn): void;
            showPurchaseReturnItems(data: bo.PurchaseReturnItem[]): void;
        }
        /** 采购退货连接服务映射 */
        export class PurchaseReturnLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseReturnViewApp.APPLICATION_ID;
                this.name = PurchaseReturnViewApp.APPLICATION_NAME;
                this.boCode = PurchaseReturnViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller> {
                return new PurchaseReturnViewApp();
            }
        }
    }
}