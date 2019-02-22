package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrder;

/**
 * 采购订单-付款服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(IPurchaseOrderPaymentContract.class)
public class PurchaseOrderPaymentService extends PurchaseOrderService<IPurchaseOrderPaymentContract> {

	@Override
	protected IPurchaseOrder fetchBeAffected(IPurchaseOrderPaymentContract contract) {
		return this.fetchBeAffected(contract.getBaseDocumentType(), contract.getBaseDocumentEntry());
	}

	@Override
	protected void impact(IPurchaseOrderPaymentContract contract) {
		if (this.getBeAffected() == null) {
			return;
		}
		BigDecimal paidTotal = this.getBeAffected().getPaidTotal();
		if (paidTotal == null) {
			paidTotal = Decimal.ZERO;
		}
		paidTotal = paidTotal.add(contract.getAmount());
		this.getBeAffected().setPaidTotal(paidTotal);
	}

	@Override
	protected void revoke(IPurchaseOrderPaymentContract contract) {
		if (this.getBeAffected() == null) {
			return;
		}
		BigDecimal paidTotal = this.getBeAffected().getPaidTotal();
		if (paidTotal == null) {
			paidTotal = Decimal.ZERO;
		}
		paidTotal = paidTotal.subtract(contract.getAmount());
		this.getBeAffected().setPaidTotal(paidTotal);
	}

}