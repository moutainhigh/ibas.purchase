/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace bo {
        /** 采购申请 */
        export interface IPurchaseRequest extends ibas.IBODocument, ibas.IBOUserFields {
            /** 凭证编号 */
            docEntry: number;
            /** 期间编号 */
            docNum: number;
            /** 期间 */
            period: number;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 审批状态 */
            approvalStatus: ibas.emApprovalStatus;
            /** 单据状态 */
            documentStatus: ibas.emDocumentStatus;
            /** 对象类型 */
            objectCode: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 修改日期 */
            updateDate: Date;
            /** 修改时间 */
            updateTime: number;
            /** 版本 */
            logInst: number;
            /** 服务系列 */
            series: number;
            /** 数据源 */
            dataSource: string;
            /** 创建用户 */
            createUserSign: number;
            /** 修改用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 数据所有者 */
            dataOwner: number;
            /** 团队成员 */
            teamMembers: string;
            /** 数据所属组织 */
            organization: string;
            /** 过账日期 */
            postingDate: Date;
            /** 到期日 */
            deliveryDate: Date;
            /** 凭证日期 */
            documentDate: Date;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 备注 */
            remarks: string;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 已删除 */
            deleted: ibas.emYesNo;
            /** 需求人 */
            requester: string;
            /** 事由 */
            cause: string;
            /** 需求日期 */
            requestDate: Date;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 价格清单 */
            priceList: number;
            /** 舍入 */
            rounding: ibas.emYesNo;
            /** 舍入差额 */
            diffAmount: number;
            /** 项目代码 */
            project: string;
            /** 单据类型 */
            orderType: string;

            /** 采购申请-行集合 */
            purchaseRequestItems: IPurchaseRequestItems;

        }

        /** 采购申请-行 集合 */
        export interface IPurchaseRequestItems extends ibas.IBusinessObjects<IPurchaseRequestItem> {
            /** 创建并添加子项 */
            create(): IPurchaseRequestItem;
        }

        /** 采购申请-行 */
        export interface IPurchaseRequestItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
            /** 编码 */
            docEntry: number;
            /** 行号 */
            lineId: number;
            /** 显示顺序 */
            visOrder: number;
            /** 类型 */
            objectCode: string;
            /** 实例号（版本） */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 修改日期 */
            updateDate: Date;
            /** 修改时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 修改用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 已引用 */
            referenced: ibas.emYesNo;
            /** 已删除 */
            deleted: ibas.emYesNo;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
            /** 原始类型 */
            originalDocumentType: string;
            /** 原始标识 */
            originalDocumentEntry: number;
            /** 原始行号 */
            originalDocumentLineId: number;
            /** 物料编码 */
            itemCode: string;
            /** 物料标识 */
            itemSign: string;
            /** 物料/服务描述 */
            itemDescription: string;
            /** 数量 */
            quantity: number;
            /** 单位 */
            uom: string;
            /** 供应商 */
            supplier: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 行总计 */
            lineTotal: number;
            /** 需求日期 */
            requestDate: Date;
            /** 已清数量 */
            closedQuantity: number;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 税前价格 */
            preTaxPrice: number;
            /** 税前行总计 */
            preTaxLineTotal: number;
            /** 分配规则1 */
            distributionRule1: string;
            /** 分配规则2 */
            distributionRule2: string;
            /** 分配规则3 */
            distributionRule3: string;
            /** 分配规则4 */
            distributionRule4: string;
            /** 分配规则5 */
            distributionRule5: string;

            /** 采购申请-行-额外信息集合 */
            purchaseRequestItemExtras: IPurchaseRequestItemExtras;

        }

        /** 采购申请-行-额外信息 集合 */
        export interface IPurchaseRequestItemExtras extends ibas.IBusinessObjects<IPurchaseRequestItemExtra> {
            /** 创建并添加子项 */
            create(): IPurchaseRequestItemExtra;
        }

        /** 采购申请-行-额外信息 */
        export interface IPurchaseRequestItemExtra extends ibas.IBODocumentLine {
            /** 编码 */
            docEntry: number;
            /** 行号 */
            lineId: number;
            /** 显示顺序 */
            visOrder: number;
            /** 类型 */
            objectCode: string;
            /** 实例号（版本） */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 状态 */
            status: ibas.emBOStatus;
            /** 单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 修改日期 */
            updateDate: Date;
            /** 修改时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 修改用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 项目行号 */
            itemId: number;
            /** 额外类型 */
            extraType: string;
            /** 额外标识 */
            extraKey: number;
            /** 数量 */
            quantity: number;
            /** 备注 */
            note: string;

        }


    }
}
