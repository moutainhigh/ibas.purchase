package org.colorcoding.ibas.purchase.service.soap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.cxf.WebServicePath;
import org.colorcoding.ibas.purchase.repository.*;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.*;
import org.colorcoding.ibas.purchase.bo.purchaseorder.*;
import org.colorcoding.ibas.purchase.bo.purchasereturn.*;

/**
* Purchase 数据服务JSON
*/
@WebService
@WebServicePath("data")
public class DataService extends BORepositoryPurchase {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-采购交货
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<PurchaseDelivery> fetchPurchaseDelivery(@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
        return super.fetchPurchaseDelivery(criteria, token);
    }

    /**
     * 保存-采购交货
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<PurchaseDelivery> savePurchaseDelivery(@WebParam(name = "bo") PurchaseDelivery bo, @WebParam(name = "token") String token) {
        return super.savePurchaseDelivery(bo, token);
    }

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-采购订单
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<PurchaseOrder> fetchPurchaseOrder(@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
        return super.fetchPurchaseOrder(criteria, token);
    }

    /**
     * 保存-采购订单
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<PurchaseOrder> savePurchaseOrder(@WebParam(name = "bo") PurchaseOrder bo, @WebParam(name = "token") String token) {
        return super.savePurchaseOrder(bo, token);
    }

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-采购退货
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<PurchaseReturn> fetchPurchaseReturn(@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
        return super.fetchPurchaseReturn(criteria, token);
    }

    /**
     * 保存-采购退货
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<PurchaseReturn> savePurchaseReturn(@WebParam(name = "bo") PurchaseReturn bo, @WebParam(name = "token") String token) {
        return super.savePurchaseReturn(bo, token);
    }

    //--------------------------------------------------------------------------------------------//

}
