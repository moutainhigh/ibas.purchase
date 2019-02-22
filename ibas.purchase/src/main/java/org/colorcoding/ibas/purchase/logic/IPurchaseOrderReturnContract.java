package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 采购订单，退回契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IPurchaseOrderReturnContract extends IBusinessLogicContract, IPurchaseBaseDocumentItem {

	/**
	 * 数量
	 * 
	 * @return
	 */
	BigDecimal getQuantity();

}
