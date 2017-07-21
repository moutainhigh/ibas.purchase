package org.colorcoding.ibas.purchase.service.rest;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.purchase.repository.*;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.*;
import org.colorcoding.ibas.purchase.bo.purchaseorder.*;
import org.colorcoding.ibas.purchase.bo.purchasereturn.*;

/**
* Purchase 数据服务JSON
*/
@Path("data")
public class DataService extends BORepositoryPurchase {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-采购交货
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("fetchPurchaseDelivery")
    public OperationResult<PurchaseDelivery> fetchPurchaseDelivery(Criteria criteria, @QueryParam("token") String token) {
        return super.fetchPurchaseDelivery(criteria, token);
    }

    /**
     * 保存-采购交货
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("savePurchaseDelivery")
    public OperationResult<PurchaseDelivery> savePurchaseDelivery(PurchaseDelivery bo, @QueryParam("token") String token) {
        return super.savePurchaseDelivery(bo, token);
    }

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-采购订单
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("fetchPurchaseOrder")
    public OperationResult<PurchaseOrder> fetchPurchaseOrder(Criteria criteria, @QueryParam("token") String token) {
        return super.fetchPurchaseOrder(criteria, token);
    }

    /**
     * 保存-采购订单
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("savePurchaseOrder")
    public OperationResult<PurchaseOrder> savePurchaseOrder(PurchaseOrder bo, @QueryParam("token") String token) {
        return super.savePurchaseOrder(bo, token);
    }

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-采购退货
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("fetchPurchaseReturn")
    public OperationResult<PurchaseReturn> fetchPurchaseReturn(Criteria criteria, @QueryParam("token") String token) {
        return super.fetchPurchaseReturn(criteria, token);
    }

    /**
     * 保存-采购退货
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("savePurchaseReturn")
    public OperationResult<PurchaseReturn> savePurchaseReturn(PurchaseReturn bo, @QueryParam("token") String token) {
        return super.savePurchaseReturn(bo, token);
    }

    //--------------------------------------------------------------------------------------------//

}
