package org.colorcoding.ibas.purchase.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;

/**
 * 采购收货-付款服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(IPurchaseDeliveryPaymentContract.class)
public class PurchaseDeliveryPaymentService extends PurchaseDeliveryService<IPurchaseDeliveryPaymentContract> {

	@Override
	protected IPurchaseDelivery fetchBeAffected(IPurchaseDeliveryPaymentContract contract) {
		return this.fetchBeAffected(contract.getBaseDocumentType(), contract.getBaseDocumentEntry());
	}

	@Override
	protected void impact(IPurchaseDeliveryPaymentContract contract) {
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
	protected void revoke(IPurchaseDeliveryPaymentContract contract) {
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