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
      label: "型号",
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
      label: "厂商",
      prop: "manufacturer",
      attrs: {
        clearable: true,
        class: "inline-input w-50",
        placeholder: "输入厂商",
      },
    },
    {
      type: "autocomplete",
      label: "供应商",
      prop: "supplier",
      attrs: {
        clearable: true,
        class: "inline-input w-50",
        placeholder: "输入供应商",
      },
    },
    {
      type: "select",
      label: "库存类型",
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
      label: "库存数量",
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
      type: "autocomplete",
      label: "封装",
      prop: "packaging",
      attrs: {
        placeholder: "请输入",
        clearable: true,
        style: {
          width: "200px",
        },
      },
    },
    {
      type: "autocomplete",
      label: "批次",
      prop: "batch",
      attrs: {
        placeholder: "请输入",
        clearable: true,
        style: {
          width: "200px",
        },
      },
    },
    {
      type: "autocomplete",
      label: "库位",
      prop: "location",
      attrs: {
        placeholder: "请输入",
        clearable: true,
        style: {
          width: "200px",
        },
      },
    },
    // {
    //   type: "select",
    //   label: "状态",
    //   prop: "status",
    //   attrs: {
    //     placeholder: "全部",
    //     clearable: true,
    //     style: {
    //       width: "100px",
    //     },
    //   },
    //   options: [
    //     { label: "启用", value: 1 },
    //     { label: "禁用", value: 0 },
    //   ],
    // },
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
    { label: "型号", align: "center", prop: "id", width: 100 },
    { label: "厂商", align: "center", prop: "username" },
    { label: "库存类型", align: "center", prop: "nickname", width: 120 },
    { label: "库存数量", align: "center", prop: "genderLabel", width: 100 },
    { label: "封装", align: "center", prop: "deptName", width: 120 },
    { label: "批次", align: "center", prop: "mobile", width: 120 },
    { label: "库位", align: "center", prop: "mobile", width: 120 },
    { label: "供应商", align: "center", prop: "mobile", width: 120 },
    { label: "数据来源", align: "center", prop: "mobile", width: 120 },
    { label: "创建时间", align: "center", prop: "mobile", width: 120 },
    { label: "创建时间", align: "center", prop: "createTime", width: 180 },
    {
      label: "操作",
      align: "center",
      prop: "status",
      templet: "custom",
      slotName: "options",
      width: 220,
    },
  ],
};

export default selectConfig;
