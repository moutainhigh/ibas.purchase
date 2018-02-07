package org.colorcoding.ibas.purchase.logic;

/**
 * 采购的基于单据
 * 
 * @author Niuren.Zhu
 *
 */
public interface IPurchaseBaseDocument {

	/**
	 * 基于单据类型
	 * 
	 * @return
	 */
	String getBaseDocumentType();

	/**
	 * 基于单据编号
	 * 
	 * @return
	 */
	Integer getBaseDocumentEntry();

}
