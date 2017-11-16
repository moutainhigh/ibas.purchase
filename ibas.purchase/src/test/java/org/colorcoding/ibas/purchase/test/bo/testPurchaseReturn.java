package org.colorcoding.ibas.purchase.test.bo;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturnItem;
import org.colorcoding.ibas.purchase.bo.purchasereturn.PurchaseReturn;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;
import org.colorcoding.ibas.purchase.repository.IBORepositoryPurchaseApp;

import junit.framework.TestCase;

/**
 * 采购退货 测试
 * 
 */
public class testPurchaseReturn extends TestCase {
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
		PurchaseReturn bo = new PurchaseReturn();
		// 测试属性赋值

		// 测试采购退货-行
		IPurchaseReturnItem purchasereturnitem = bo.getPurchaseReturnItems().create();
		System.out.println(String.format("new item: %s", purchasereturnitem.toString()));
		// 测试属性赋值

		// 测试对象的保存和查询
		IOperationResult<?> operationResult = null;
		ICriteria criteria = null;
		IBORepositoryPurchaseApp boRepository = new BORepositoryPurchase();
		// 设置用户口令
		boRepository.setUserToken(this.getToken());

		// 测试保存
		operationResult = boRepository.savePurchaseReturn(bo);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		PurchaseReturn boSaved = (PurchaseReturn) operationResult.getResultObjects().firstOrDefault();

		// 测试查询
		criteria = boSaved.getCriteria();
		criteria.setResultCount(10);
		operationResult = boRepository.fetchPurchaseReturn(criteria);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);

	}

}
