package org.colorcoding.ibas.purchase.test.bo;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrderItem;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;
import org.colorcoding.ibas.purchase.repository.IBORepositoryPurchaseApp;

import junit.framework.TestCase;

/**
 * 采购订单 测试
 * 
 */
public class testPurchaseOrder extends TestCase {
	/**
	 * 获取连接口令
	 */
	String getToken() {
		return "";
	}

	/**
	 * 基本项目测试
	 * 
	 * @throws Exception
	 */
	public void testBasicItems() throws Exception {
		PurchaseOrder bo = new PurchaseOrder();
		// 测试属性赋值

		// 测试采购订单-行
		IPurchaseOrderItem purchaseorderitem = bo.getPurchaseOrderItems().create();
		System.out.println(String.format("new item: %s", purchaseorderitem.toString()));
		// 测试属性赋值

		// 测试对象的保存和查询
		IOperationResult<?> operationResult = null;
		ICriteria criteria = null;
		IBORepositoryPurchaseApp boRepository = new BORepositoryPurchase();
		// 设置用户口令
		boRepository.setUserToken(this.getToken());

		// 测试保存
		operationResult = boRepository.savePurchaseOrder(bo);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		PurchaseOrder boSaved = (PurchaseOrder) operationResult.getResultObjects().firstOrDefault();

		// 测试查询
		criteria = boSaved.getCriteria();
		criteria.setResultCount(10);
		operationResult = boRepository.fetchPurchaseOrder(criteria);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);

	}

}
