package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 采购收货-付款契约（收款单据）
 * 
 * @author Niuren.Zhu
 *
 */
public interface IPurchaseDeliveryPaymentContract extends IBusinessLogicContract, IPurchaseBaseDocument {

	/**
	 * 金额
	 * 
	 * @return
	 */
	BigDecimal getAmount();

	/**
	 * 货币
	 * 
	 * @return
	 */
	String getCurrency();

	/**
	 * 汇率
	 * 
	 * @return
	 */
	BigDecimal getRate();
}
