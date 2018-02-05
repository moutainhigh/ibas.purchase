package org.colorcoding.ibas.purchase.logic;

import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.ConditionRelationship;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.purchase.bo.purchasereturn.IPurchaseReturn;
import org.colorcoding.ibas.purchase.bo.purchasereturn.PurchaseReturn;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;

/**
 * 采购退货-服务
 * 
 * @author Niuren.Zhu
 *
 */
public abstract class PurchaseReturnService<L extends IBusinessLogicContract>
		extends BusinessLogic<L, IPurchaseReturn> {

	protected IPurchaseReturn fetchBeAffected(String docType, Integer docEntry) {
		// 必须要差完整对象，不然业务逻辑会出错
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(PurchaseReturn.PROPERTY_OBJECTCODE.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(docType);
		condition = criteria.getConditions().create();
		condition.setRelationship(ConditionRelationship.AND);
		condition.setAlias(PurchaseReturn.PROPERTY_DOCENTRY.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(docEntry);

		IPurchaseReturn order = this.fetchBeAffected(criteria, IPurchaseReturn.class);
		if (order == null) {
			BORepositoryPurchase boRepository = new BORepositoryPurchase();
			boRepository.setRepository(super.getRepository());
			IOperationResult<IPurchaseReturn> operationResult = boRepository.fetchPurchaseReturn(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			order = operationResult.getResultObjects().firstOrDefault();
		}
		if (order == null) {
			throw new BusinessLogicException(I18N.prop("msg_ph_not_found_order", docType, docEntry));
		}
		return order;
	}

}