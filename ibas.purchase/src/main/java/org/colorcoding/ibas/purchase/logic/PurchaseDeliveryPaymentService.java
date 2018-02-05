package org.colorcoding.ibas.purchase.logic;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.IPurchaseDelivery;
import org.colorcoding.ibas.purchase.bo.purchasedelivery.PurchaseDelivery;

/**
 * 采购收货-付款服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(IPurchaseDeliveryPaymentContract.class)
public class PurchaseDeliveryPaymentService extends PurchaseDeliveryService<IPurchaseDeliveryPaymentContract> {

	@Override
	protected boolean checkDataStatus(Object data) {
		if (data instanceof IPurchaseDeliveryPaymentContract) {
			IPurchaseDeliveryPaymentContract contract = (IPurchaseDeliveryPaymentContract) data;
			if (!PurchaseDelivery.BUSINESS_OBJECT_CODE.equals(contract.getDocumentType())) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(),
						"DocumentType", contract.getDocumentType());
				return false;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected IPurchaseDelivery fetchBeAffected(IPurchaseDeliveryPaymentContract contract) {
		return this.fetchBeAffected(contract.getDocumentType(), contract.getDocumentEntry());
	}

	@Override
	protected void impact(IPurchaseDeliveryPaymentContract contract) {
		if (this.getBeAffected() == null) {
			return;
		}
		Decimal paidTotal = this.getBeAffected().getPaidTotal();
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
		Decimal paidTotal = this.getBeAffected().getPaidTotal();
		if (paidTotal == null) {
			paidTotal = Decimal.ZERO;
		}
		paidTotal = paidTotal.subtract(contract.getAmount());
		this.getBeAffected().setPaidTotal(paidTotal);
	}

}