package org.colorcoding.ibas.purchase.bo.purchaseorder;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.purchase.MyConfiguration;

/**
 * 采购订单-行 集合
 */
@XmlType(name = PurchaseOrderItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ PurchaseOrderItem.class })
public class PurchaseOrderItems extends BusinessObjects<IPurchaseOrderItem, IPurchaseOrder>
		implements IPurchaseOrderItems {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "PurchaseOrderItems";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -719161880707439114L;

	/**
	 * 构造方法
	 */
	public PurchaseOrderItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent
	 *            父项对象
	 */
	public PurchaseOrderItems(IPurchaseOrder parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return PurchaseOrderItem.class;
	}

	/**
	 * 创建采购订单-行
	 * 
	 * @return 采购订单-行
	 */
	public IPurchaseOrderItem create() {
		IPurchaseOrderItem item = new PurchaseOrderItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IPurchaseOrderItem item) {
		super.afterAddItem(item);
		if (item instanceof PurchaseOrderItem) {
			((PurchaseOrderItem) item).parent = this.getParent();
		}
		// 记录父项的值
		item.setRate(this.getParent().getDocumentRate());
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = super.getElementCriteria();
		return criteria;
	}

	@Override
	public void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
	}
}
