<template>
  <div>
    <!-- 表单 -->
    <el-form ref="formRef" :model="queryParams" :inline="true">
      <template v-for="item in tableConfig.formItems" :key="item.prop">
        <el-form-item :label="item.label" :prop="item.prop">
          <!-- Input 输入框 -->
          <template v-if="item.type === 'input'">
            <template v-if="item.attrs?.type === 'number'">
              <el-input
                v-model.number="queryParams[item.prop]"
                v-bind="item.attrs"
                @keyup.enter="handleQuery"
              />
            </template>
            <template v-else>
              <el-input
                v-model="queryParams[item.prop]"
                v-bind="item.attrs"
                @keyup.enter="handleQuery"
              />
            </template>
          </template>
          <!-- Select 选择器 -->
          <template v-else-if="item.type === 'select'">
            <el-select v-model="queryParams[item.prop]" v-bind="item.attrs">
              <template v-for="option in item.options" :key="option.value">
                <el-option :label="option.label" :value="option.value" />
              </template>
            </el-select>
          </template>
          <!-- TreeSelect 树形选择 -->
          <template v-else-if="item.type === 'tree-select'">
            <el-tree-select
              v-model="queryParams[item.prop]"
              v-bind="item.attrs"
            />
          </template>
          <!-- 自动补全输入框 -->
          <template v-else-if="item.type === 'autocomplete'">
            <el-autocomplete
              v-model="queryParams[item.prop]"
              v-bind="item.attrs"
              @focus="fonusAutocomplete(item.prop)"
              :fetch-suggestions="querySearch"
            />
          </template>
          <!-- DatePicker 日期选择器 -->
          <template v-else-if="item.type === 'date-picker'">
            <el-date-picker
              v-model="queryParams[item.prop]"
              v-bind="item.attrs"
            />
          </template>
          <!-- Input 输入框 -->
          <template v-else>
            <template v-if="item.attrs?.type === 'number'">
              <el-input
                v-model.number="queryParams[item.prop]"
                v-bind="item.attrs"
                @keyup.enter="handleQuery"
              />
            </template>
            <template v-else>
              <el-input
                v-model="queryParams[item.prop]"
                v-bind="item.attrs"
                @keyup.enter="handleQuery"
              />
            </template>
          </template>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" icon="search" @click="handleQuery">
          搜索
        </el-button>
        <el-button icon="refresh" @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 列表 -->
    <el-button
      v-if="hasAdd"
      class="addbtn"
      type="primary"
      icon="Apple"
      @click="handlePopAdd"
    >
      添加
    </el-button>
    <el-table
      ref="tableRef"
      v-loading="loading"
      :data="pageData"
      :border="true"
      :max-height="250"
      :row-key="pk"
      :highlight-current-row="true"
      :class="{ radio: !isMultiple }"
      @select="handleSelect"
      @select-all="handleSelectAll"
    >
      <template v-for="col in tableConfig.tableColumns" :key="col.prop">
        <!-- 自定义 插槽 -->
        <template v-if="col.templet === 'custom'">
          <el-table-column v-bind="col">
            <template #default="scope">
              <slot
                :name="col.slotName ?? col.prop"
                :prop="col.prop"
                v-bind="scope"
              >??</slot>
            </template>
          </el-table-column>
        </template>
        <!-- 其他 -->
        <template v-else>
          <el-table-column v-bind="col" />
        </template>
      </template>
    </el-table>
    <!-- 分页 -->
    <pagination
      v-if="total > 0"
      v-model:total="total"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      @pagination="handlePagination"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { onClickOutside, useResizeObserver } from "@vueuse/core";
import type { FormInstance, PopoverProps, TableInstance } from "element-plus";

// 对象类型
export type IObject = Record<string, any>;
// 定义接收的属性
export interface ISelectConfig<T = any> {
  // 宽度
  width?: string;
  // 占位符
  placeholder?: string;
  // popover组件属性
  popover?: Partial<Omit<PopoverProps, "visible" | "v-model:visible">>;
  // 列表的网络请求函数(需返回promise)
  indexAction: (queryParams: T) => Promise<any>;
  // 主键名(跨页选择必填,默认为id)
  pk?: string;
  // 多选
  multiple?: boolean;
  // 表单项
  formItems: Array<{
    // 组件类型(如input,select等)
    type?: "input" | "select" | "tree-select" | "date-picker";
    // 标签文本
    label: string;
    // 键名
    prop: string;
    // 组件属性
    attrs?: IObject;
    // 初始值
    initialValue?: any;
    // 可选项(适用于select组件)
    options?: { label: string; value: any }[];
  }>;
  // 列选项
  tableColumns: Array<{
    type?: "default" | "selection" | "index" | "expand";
    label?: string;
    prop?: string;
    width?: string | number;
    [key: string]: any;
  }>;
}
const props = withDefaults(
  defineProps<{
    tableConfig: ISelectConfig;
    hasAdd: boolean;
  }>(),
  {
    hasAdd: false,
  }
);

// 自定义事件
const emit = defineEmits<{
  confirmClick: [selection: any[]];
}>();

// 主键
const pk = props.tableConfig.pk ?? "id";
// 是否多选
const isMultiple = props.tableConfig.multiple === true;
// 宽度
const width = props.tableConfig.width ?? "100%";
// 占位符
const placeholder = props.tableConfig.placeholder ?? "请选择";
// 是否显示弹出框
const popoverVisible = ref(false);
// 加载状态
const loading = ref(false);
// 数据总数
const total = ref(0);
// 列表数据
const pageData = ref<IObject[]>([]);
// 每页条数
const pageSize = 10;
// 搜索参数
const queryParams = reactive<{
  pageNum: number;
  pageSize: number;
  [key: string]: any;
}>({
  pageNum: 1,
  pageSize: pageSize,
});
// 自动补全加载
const restaurants = ref<RestaurantItem[]>([]);

// 计算popover的宽度
const tableSelectRef = ref();
const popoverWidth = ref(width);
useResizeObserver(tableSelectRef, (entries) => {
  popoverWidth.value = `${entries[0].contentRect.width}px`;
});

// 表单操作
const formRef = ref<FormInstance>();
// 初始化搜索条件
for (const item of props.tableConfig.formItems) {
  queryParams[item.prop] = item.initialValue ?? "";
}
// 重置操作
function handleReset() {
  formRef.value?.resetFields();
  fetchPageData(true);
}
// 查询操作
function handleQuery() {
  fetchPageData(true);
}
// 添加操作
function handlePopAdd() {
  emit("popAddClick", []);
}

// 获取分页数据
function fetchPageData(isRestart = false) {
  loading.value = true;
  if (isRestart) {
    queryParams.pageNum = 1;
    queryParams.pageSize = pageSize;
  }
  props.tableConfig
    .indexAction(queryParams)
    .then((data) => {
      total.value = data.total;
      pageData.value = data.list;
    })
    .finally(() => {
      loading.value = false;
    });
}

// 获取自动补全输入框数据
const loadAutocomplete = (url) => {
  if (url === "manufacturer") {
    restaurants.value = [
      { value: "vue", link: "https://github.com/vuejs/vue" },
      { value: "element", link: "https://github.com/ElemeFE/element" },
      { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
      { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
      { value: "vuex", link: "https://github.com/vuejs/vuex" },
      { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
      { value: "babel", link: "https://github.com/babel/babel" },
    ];
  } else if (url === "supplier") {
    restaurants.value = [
      { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
      { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
      { value: "vuex", link: "https://github.com/vuejs/vuex" },
      { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
      { value: "babel", link: "https://github.com/babel/babel" },
    ];
  }
};

let autocompleteUrl = ref("1");
// 点击自动补全输入框
function fonusAutocomplete(type) {
  autocompleteUrl.value = type;
}

let timeout: ReturnType<typeof setTimeout>;
// 查询自动补全数据
const querySearch = (queryString: string, cb: any) => {
  console.log(autocompleteUrl.value, "====");
  loadAutocomplete(autocompleteUrl.value);
  // console.log(url);
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;
  // call callback function to return suggestions
  // console.log(url);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 500);
};
// 自动补全筛选
const createFilter = (queryString: string) => {
  // 返回一个函数供filter回调使用
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};

// 列表操作
const tableRef = ref<TableInstance>();
// 数据刷新后是否保留选项
for (const item of props.tableConfig.tableColumns) {
  if (item.type === "selection") {
    item.reserveSelection = true;
    break;
  }
}
// 选择
const selectedItems = ref<IObject[]>([]);
const confirmText = computed(() => {
  return selectedItems.value.length > 0
    ? `已选(${selectedItems.value.length})`
    : "确 定";
});
function handleSelect(selection: any[], row: any) {
  if (isMultiple || selection.length === 0) {
    // 多选
    selectedItems.value = selection;
  } else {
    // 单选
    selectedItems.value = [selection[selection.length - 1]];
    tableRef.value?.clearSelection();
    tableRef.value?.toggleRowSelection(selectedItems.value[0], true);
    tableRef.value?.setCurrentRow(selectedItems.value[0]);
  }
}
function handleSelectAll(selection: any[]) {
  if (isMultiple) {
    selectedItems.value = selection;
  }
}
// 分页
function handlePagination() {
  fetchPageData();
}

// 弹出框
const isInit = ref(false);
// 显示
function handleShow() {
  if (isInit.value === false) {
    isInit.value = true;
    fetchPageData();
  }
}
// 清空
function handleClear() {
  tableRef.value?.clearSelection();
  selectedItems.value = [];
}
// 关闭
function handleClose() {
  popoverVisible.value = false;
}
const popoverContentRef = ref();

onMounted(() => {
  fetchPageData();
});
</script>

<style scoped lang="scss">
.reference :deep(.el-input__wrapper),
.reference :deep(.el-input__inner) {
  cursor: pointer;
}

.feedback {
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
}
// 隐藏全选按钮
.radio :deep(.el-table__header th.el-table__cell:nth-child(1) .el-checkbox) {
  visibility: hidden;
}
.addbtn {
  margin-bottom: 20px;
}
</style>
