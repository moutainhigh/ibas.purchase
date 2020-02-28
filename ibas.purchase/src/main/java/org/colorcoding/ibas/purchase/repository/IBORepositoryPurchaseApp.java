package org.colorcoding.ibas.purchase.repository;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.repository.IBORepositoryApplication;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchasequote.IPurchaseQuote;
import org.colorcoding.ibas.purchase.bo.purchaserequest.IPurchaseRequest;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturn;

/**
 * Purchase仓库应用
 */
public interface IBORepositoryPurchaseApp extends IBORepositoryApplication {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购收货
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IPurchaseDelivery> fetchPurchaseDelivery(ICriteria criteria);

	/**
	 * 保存-采购收货
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IPurchaseDelivery> savePurchaseDelivery(IPurchaseDelivery bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购订单
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IPurchaseOrder> fetchPurchaseOrder(ICriteria criteria);

	/**
	 * 保存-采购订单
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IPurchaseOrder> savePurchaseOrder(IPurchaseOrder bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购退货
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IPurchaseReturn> fetchPurchaseReturn(ICriteria criteria);

	/**
	 * 保存-采购退货
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IPurchaseReturn> savePurchaseReturn(IPurchaseReturn bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购报价
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IPurchaseQuote> fetchPurchaseQuote(ICriteria criteria);

	/**
	 * 保存-采购报价
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IPurchaseQuote> savePurchaseQuote(IPurchaseQuote bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购申请
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IPurchaseRequest> fetchPurchaseRequest(ICriteria criteria);

	/**
	 * 保存-采购申请
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IPurchaseRequest> savePurchaseRequest(IPurchaseRequest bo);

	// --------------------------------------------------------------------------------------------//

}
