/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/index";
import { IBORepositoryPurchase, BO_REPOSITORY_PURCHASE } from "../api/index";
import { DataConverter4ph } from "./DataConverters";

/** 业务对象仓库 */
export class BORepositoryPurchase extends ibas.BORepositoryApplication implements IBORepositoryPurchase {

    /** 创建此模块的后端与前端数据的转换者 */
    protected createConverter(): ibas.IDataConverter {
        return new DataConverter4ph;
    }

    /**
     * 查询 采购交货
     * @param fetcher 查询者
     */
    fetchPurchaseDelivery(fetcher: ibas.FetchCaller<bo.PurchaseDelivery>): void {
        super.fetch(bo.PurchaseDelivery.name, fetcher);
    }
    /**
     * 保存 采购交货
     * @param saver 保存者
     */
    savePurchaseDelivery(saver: ibas.SaveCaller<bo.PurchaseDelivery>): void {
        super.save(bo.PurchaseDelivery.name, saver);
    }

    /**
     * 查询 采购订单
     * @param fetcher 查询者
     */
    fetchPurchaseOrder(fetcher: ibas.FetchCaller<bo.PurchaseOrder>): void {
        super.fetch(bo.PurchaseOrder.name, fetcher);
    }
    /**
     * 保存 采购订单
     * @param saver 保存者
     */
    savePurchaseOrder(saver: ibas.SaveCaller<bo.PurchaseOrder>): void {
        super.save(bo.PurchaseOrder.name, saver);
    }

    /**
     * 查询 采购退货
     * @param fetcher 查询者
     */
    fetchPurchaseReturn(fetcher: ibas.FetchCaller<bo.PurchaseReturn>): void {
        super.fetch(bo.PurchaseReturn.name, fetcher);
    }
    /**
     * 保存 采购退货
     * @param saver 保存者
     */
    savePurchaseReturn(saver: ibas.SaveCaller<bo.PurchaseReturn>): void {
        super.save(bo.PurchaseReturn.name, saver);
    }

}
// 注册业务对象仓库到工厂
ibas.boFactory.register(BO_REPOSITORY_PURCHASE, BORepositoryPurchase);
