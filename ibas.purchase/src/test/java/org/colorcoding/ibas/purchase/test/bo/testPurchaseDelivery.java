package org.colorcoding.ibas.purchase.test.bo;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDeliveryItem;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;
import org.colorcoding.ibas.purchase.repository.IBORepositoryPurchaseApp;

import junit.framework.TestCase;

/**
 * 采购交货 测试
 * 
 */
public class testPurchaseDelivery extends TestCase {
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
		PurchaseDelivery bo = new PurchaseDelivery();
		// 测试属性赋值

		// 测试采购交货-行
		IPurchaseDeliveryItem purchasedeliveryitem = bo.getPurchaseDeliveryItems().create();
		System.out.println(String.format("new item: %s", purchasedeliveryitem.toString()));
		// 测试属性赋值

		// 测试对象的保存和查询
		IOperationResult<?> operationResult = null;
		ICriteria criteria = null;
		IBORepositoryPurchaseApp boRepository = new BORepositoryPurchase();
		// 设置用户口令
		boRepository.setUserToken(this.getToken());

		// 测试保存
		operationResult = boRepository.savePurchaseDelivery(bo);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		PurchaseDelivery boSaved = (PurchaseDelivery) operationResult.getResultObjects().firstOrDefault();

		// 测试查询
		criteria = boSaved.getCriteria();
		criteria.setResultCount(10);
		operationResult = boRepository.fetchPurchaseDelivery(criteria);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);

	}

}
