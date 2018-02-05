package org.colorcoding.ibas.purchase.logic;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 采购订单，退回契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IPurchaseOrderReturnContract extends IBusinessLogicContract {

	/**
	 * 单据类型
	 * 
	 * @return
	 */
	String getDocumentType();

	/**
	 * 单据编号
	 * 
	 * @return
	 */
	Integer getDocumentEntry();

	/**
	 * 单据行号
	 * 
	 * @return
	 */
	Integer getDocumentLineId();

	/**
	 * 数量
	 * 
	 * @return
	 */
	Decimal getQuantity();

}
