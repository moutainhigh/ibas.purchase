/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { PurchaseDeliveryFunc, PurchaseDeliveryChooseServiceMapping, PurchaseDeliveryLinkServiceMapping } from "./purchasedelivery/index";
import { PurchaseOrderFunc, PurchaseOrderChooseServiceMapping, PurchaseOrderLinkServiceMapping } from "./purchaseorder/index";
import { PurchaseReturnFunc, PurchaseReturnChooseServiceMapping, PurchaseReturnLinkServiceMapping } from "./purchasereturn/index";

/** 模块控制台 */
export class Console extends ibas.ModuleConsole {
    /** 模块-标识 */
    static CONSOLE_ID: string = "de9278d9-4914-45a5-8418-9c609118d03f";
    /** 模块-名称 */
    static CONSOLE_NAME: string = "Purchase";
    /** 构造函数 */
    constructor() {
        super();
        this.id = Console.CONSOLE_ID;
        this.name = Console.CONSOLE_NAME;
    }
    private _navigation: ibas.IViewNavigation;
    /** 创建视图导航 */
    navigation(): ibas.IViewNavigation {
        return this._navigation;
    }
    /** 初始化 */
    protected registers(): void {
        // 注册功能
        this.register(new PurchaseDeliveryFunc());
        this.register(new PurchaseOrderFunc());
        this.register(new PurchaseReturnFunc());
        // 注册服务应用
        this.register(new PurchaseDeliveryChooseServiceMapping());
        this.register(new PurchaseDeliveryLinkServiceMapping());
        this.register(new PurchaseOrderChooseServiceMapping());
        this.register(new PurchaseOrderLinkServiceMapping());
        this.register(new PurchaseReturnChooseServiceMapping());
        this.register(new PurchaseReturnLinkServiceMapping());
        // 注册常驻应用

    }
    /** 运行 */
    run(): void {
        // 加载语言-框架默认
        ibas.i18n.load(this.rootUrl + "resources/languages/purchase.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/bo/purchasedelivery.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/bo/purchaseorder.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/bo/purchasereturn.json");
        // 设置资源属性
        this.description = ibas.i18n.prop(this.name.toLowerCase());
        this.icon = ibas.i18n.prop(this.name.toLowerCase() + "_icon");
        // 先加载ui导航
        let uiModules: string[] = [];
        if (!ibas.config.get(ibas.CONFIG_ITEM_DISABLE_PLATFORM_VIEW, false)
            && this.plantform === ibas.emPlantform.PHONE) {
            // 使用m类型视图
            uiModules.push("../bsui/m/Navigation");
        } else {
            // 使用c类型视图
            uiModules.push("../bsui/c/Navigation");
        }
        let that: Console = this;
        require(uiModules, function (ui: any): void {
            // 设置导航
            that._navigation = new ui.default();
            // 调用初始化
            that.initialize();
        });
        // 保留基类方法
        super.run();
    }
}
