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
        export class PurchaseQuoteViewApp extends ibas.BOViewService<IPurchaseQuoteViewView, bo.PurchaseQuote> {
            /** 应用标识 */
            static APPLICATION_ID: string = "997155ae-34d4-4cfa-88d5-7163902aa743";
            /** 应用名称 */
            static APPLICATION_NAME: string = "purchase_app_purchasequote_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PurchaseQuote.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseQuoteViewApp.APPLICATION_ID;
                this.name = PurchaseQuoteViewApp.APPLICATION_NAME;
                this.boCode = PurchaseQuoteViewApp.BUSINESS_OBJECT_CODE;
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
                    this.viewData = new bo.PurchaseQuote();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showPurchaseQuote(this.viewData);
                this.view.showPurchaseQuoteItems(this.viewData.purchaseQuoteItems.filterDeleted());
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: PurchaseQuoteEditApp = new PurchaseQuoteEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseQuote): void;
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], bo.PurchaseQuote)) {
                    this.viewData = arguments[0];
                    this.show();
                } else {
                    super.run.apply(this, arguments);
                }
            }
            protected viewData: bo.PurchaseQuote;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    let value: string = criteria;
                    criteria = new ibas.Criteria();
                    criteria.result = 1;
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = ibas.BO_PROPERTY_NAME_DOCENTRY;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryPurchase = new bo.BORepositoryPurchase();
                boRepository.fetchPurchaseQuote({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PurchaseQuote>): void {
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
        export interface IPurchaseQuoteViewView extends ibas.IBOViewView {
            showPurchaseQuote(data: bo.PurchaseQuote): void;
            showPurchaseQuoteItems(data: bo.PurchaseQuoteItem[]): void;
        }
        /** 采购订单连接服务映射 */
        export class PurchaseQuoteLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PurchaseQuoteViewApp.APPLICATION_ID;
                this.name = PurchaseQuoteViewApp.APPLICATION_NAME;
                this.boCode = PurchaseQuoteViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller> {
                return new PurchaseQuoteViewApp();
            }
        }
    }
}