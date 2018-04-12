package org.colorcoding.ibas.purchase.repository;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.repository.IBORepositorySmartService;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.bo.purchasequote.PurchaseQuote;
import org.colorcoding.ibas.purchase.bo.purchasereturn.PurchaseReturn;

/**
 * Purchase仓库服务
 */
public interface IBORepositoryPurchaseSvc extends IBORepositorySmartService {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购收货
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseDelivery> fetchPurchaseDelivery(ICriteria criteria, String token);

	/**
	 * 保存-采购收货
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseDelivery> savePurchaseDelivery(PurchaseDelivery bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购订单
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseOrder> fetchPurchaseOrder(ICriteria criteria, String token);

	/**
	 * 保存-采购订单
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseOrder> savePurchaseOrder(PurchaseOrder bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购退货
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseReturn> fetchPurchaseReturn(ICriteria criteria, String token);

	/**
	 * 保存-采购退货
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseReturn> savePurchaseReturn(PurchaseReturn bo, String token);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-采购报价
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseQuote> fetchPurchaseQuote(ICriteria criteria, String token);

	/**
	 * 保存-采购报价
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<PurchaseQuote> savePurchaseQuote(PurchaseQuote bo, String token);

	// --------------------------------------------------------------------------------------------//

}
