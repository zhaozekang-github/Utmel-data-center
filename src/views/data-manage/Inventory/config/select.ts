/*
 * @Author: ZZK
 * @Date: 2024-05-17 10:31:21
 * @Description: 
 */
import UserAPI from "@/api/user";
import type { ISelectConfig } from "@/components/TableSelect/index.vue";

const selectConfig: ISelectConfig = {
  pk: "id",
  width: "70%",
  placeholder: "请选择用户",
  formItems: [
    {
      type: "input",
      label: "供应商名称",
      prop: "model",
      attrs: {
        placeholder: "型号",
        clearable: true,
        style: {
          width: "200px",
        },
      },
    },
    {
      type: "autocomplete",
      label: "徽章",
      prop: "supplier",
      attrs: {
        clearable: true,
        class: "inline-input w-50",
        placeholder: "输入供应商",
      },
    },
    {
      type: "autocomplete",
      label: "会员类型",
      prop: "manufacturer",
      attrs: {
        clearable: true,
        class: "inline-input w-50",
        placeholder: "输入厂商",
      },
    },
    {
      type: "select",
      label: "城市",
      prop: "inventory-type",
      attrs: {
        clearable: true,
        placeholder: "选择类型",
        style: {
          width: "130px",
        },
      },
      options: [
        { label: "现货库存", value: 1 },
        { label: "热卖库存", value: 0 },
      ],
    },
    {
      type: "autocomplete",
      label: "数据来源",
      prop: "inventory_num",
      attrs: {
        placeholder: "输入数量",
        clearable: true,
        style: {
          width: "200px",
        },
      },
    },
    {
      type: "date-picker",
      label: "创建时间",
      prop: "createAt",
      attrs: {
        type: "date",
        "range-separator": "~",
        placeholder: "请选择时间",
        "value-format": "YYYY-MM-DD",
        style: {
          width: "140px",
        },
      },
    },
  ],
  indexAction: function (params) {
    if ("createAt" in params) {
      const createAt = params.createAt as string[];
      params.startTime = createAt[0];
      params.endTime = createAt[1];
      delete params.createAt;
    }
    return UserAPI.getPage(params);
  },
  tableColumns: [
    { type: "selection", width: 50, align: "center" },
    {
      label: "供应商名称",
      align: "center",
      prop: "username",
      width: 100,
      link: "more",
    },
    { label: "徽章", align: "center", prop: "username" },
    { label: "会员类型", align: "center", prop: "nickname", width: 120 },
    { label: "城市", align: "center", prop: "genderLabel", width: 100 },
    { label: "数据来源", align: "center", prop: "deptName", width: 120 },
    { label: "创建时间", align: "center", prop: "mobile", width: 120 },
    { label: "操作", align: "center", prop: "mobile", width: 120 },
    { label: "供应商", align: "center", prop: "mobile", width: 120 },
    { label: "数据来源", align: "center", prop: "mobile", width: 120 },
    {
      label: "状态",
      align: "center",
      prop: "status",
      templet: "custom",
      slotName: "status",
    },
    { label: "创建时间", align: "center", prop: "createTime", width: 180 },
  ],
};


export default selectConfig;
