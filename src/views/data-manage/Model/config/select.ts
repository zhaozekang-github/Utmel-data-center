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
      label: "PID",
      prop: "model",
      attrs: {
        placeholder: "PID",
        clearable: true,
        style: {
          width: "200px",
        },
      },
    },
    {
      type: "autocomplete",
      label: "型号",
      prop: "supplier",
      attrs: {
        clearable: true,
        class: "inline-input w-50",
        placeholder: "输入供应商",
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
      type: "input",
      label: "厂商ID",
      prop: "model",
      attrs: {
        placeholder: "PID",
        clearable: true,
        style: {
          width: "200px",
        },
      },
    },
    {
      type: "select",
      label: "分类",
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
    { label: "PID", align: "center", prop: "username" },
    { label: "型号", align: "center", prop: "nickname", width: 120 },
    { label: "厂商", align: "center", prop: "genderLabel", width: 100 },
    { label: "厂商ID", align: "center", prop: "deptName", width: 120 },
    { label: "一级分类", align: "center", prop: "mobile", width: 120 },
    { label: "二级分类", align: "center", prop: "mobile", width: 120 },
    { label: "封装", align: "center", prop: "mobile", width: 120 },
    { label: "创建时间", align: "center", prop: "createTime", width: 180 },
    {
      label: "操作",
      align: "center",
      prop: "options",
      width: 180,
      templet: "custom",
      slotName: "options",
    },
  ],
};

export default selectConfig;
