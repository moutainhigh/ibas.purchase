package org.colorcoding.ibas.purchase.repository;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.*;
import org.colorcoding.ibas.purchase.bo.purchaseorder.*;
import org.colorcoding.ibas.purchase.bo.purchasereturn.*;

/**
* Purchase仓库服务
*/
public interface IBORepositoryPurchaseSvc extends IBORepositorySmartService {


    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-采购交货
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<PurchaseDelivery> fetchPurchaseDelivery(ICriteria criteria, String token);

    /**
     * 保存-采购交货
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<PurchaseDelivery> savePurchaseDelivery(PurchaseDelivery bo, String token);

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-采购订单
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<PurchaseOrder> fetchPurchaseOrder(ICriteria criteria, String token);

    /**
     * 保存-采购订单
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<PurchaseOrder> savePurchaseOrder(PurchaseOrder bo, String token);

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-采购退货
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<PurchaseReturn> fetchPurchaseReturn(ICriteria criteria, String token);

    /**
     * 保存-采购退货
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<PurchaseReturn> savePurchaseReturn(PurchaseReturn bo, String token);

    //--------------------------------------------------------------------------------------------//

}
