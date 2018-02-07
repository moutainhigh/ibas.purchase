package org.colorcoding.ibas.purchase.logic;

/**
 * 采购的基于单据行项目
 * 
 * @author Niuren.Zhu
 *
 */
public interface IPurchaseBaseDocumentItem extends IPurchaseBaseDocument {

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

	/**
	 * 基于单据行号
	 * 
	 * @return
	 */
	Integer getBaseDocumentLineId();

}
