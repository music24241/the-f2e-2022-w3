<template>
  <main>
    <div class="mx-auto flex min-h-screen max-w-[1200px] flex-col py-6 pt-6">
      <a
        href="#"
        @click.prevent="$router.push('/')"
        class="mb-10 flex w-fit items-center text-secondary-300"
      >
        <span class="material-icons">chevron_left</span>
        回上一頁
      </a>
      <div
        class="mb-[168px] h-6 w-full overflow-hidden rounded-3xl bg-secondary-100"
      >
        <div
          class="h-full w-30 bg-primary-100 transition duration-150 ease-in-out"
        ></div>
      </div>
      <section class="relative mb-8 flex text-2.5xl text-secondary-200">
        <div class="absolute top-[-160px] left-[48px] z-10 flex items-start">
          <img src="public/po_sit.png" alt="po_sit" class="mr-14" />
          <div
            class="mt-4 flex w-[659px] items-center rounded-3xl border-3 border-danger-100 py-3 px-6"
          >
            <div
              class="step2-jira-line absolute left-[-43px] bottom-[26px]"
            ></div>
            <div class="mr-4 text-xl text-danger-100">
              請把需求貓貓拖拉到右邊產品代辦清單，並調整代辦的優先度順序～
              <br />
              TT王國也推薦使用
              <span class="text-info-100">Jira</span> 來做任務管理喔！
            </div>
            <img src="public/jira_logo.png" alt="jira" />
          </div>
        </div>
        <!--主要內容-->
        <!--left-->
        <div class="mr-3 flex-1 rounded-4xl bg-secondary-300 py-8 px-6">
          <ul class="flex h-full flex-col justify-end">
            <li
              v-for="(originProductBacklog, idx) in originProductBacklogList"
              :key="idx"
            >
              <DragBox
                dragging-class="opacity-0"
                :custom-class="originProductBacklog.class"
                :item="originProductBacklog"
                :is-dropped="
                  productBacklogList.some(
                    (productBacklog) =>
                      productBacklog.lastDroppedItem?.key ===
                      originProductBacklog.key
                  )
                "
                is-dropped-class="opacity-0"
              >
                <div class="cat-face"></div>
                <span v-html="originProductBacklog.text"></span>
              </DragBox>
            </li>
          </ul>
        </div>
        <!--right-->
        <div class="flex-1 rounded-4xl bg-secondary-300 py-8 px-6">
          <div class="mb-4 text-center text-[32px] text-white">
            產品代辦清單 Product Backlog
          </div>
          <ul>
            <li v-for="(productBacklog, idx) in productBacklogList" :key="idx">
              <DropBox
                @drop="handleDrop(idx, $event)"
                :last-dropped-item="productBacklog.lastDroppedItem"
              >
                <template v-slot:default>
                  <div
                    class="h-[111px] cursor-pointer rounded-[60px] border-3 border-dashed border-primary-100 py-9 text-center text-2xl text-primary-100 hover:bg-primary-100 hover:bg-opacity-20"
                    :class="{ 'mb-4': idx !== productBacklogList.length - 1 }"
                  >
                    {{ productBacklog.title }}
                  </div>
                </template>
                <template v-slot:dropped>
                  <div
                    class="relative flex h-[111px] cursor-pointer items-center rounded-[60px] border-primary-100 bg-primary-100 pl-10 pr-24 text-center text-xl text-secondary-300 text-primary-100"
                    :class="{ 'mb-4': idx !== productBacklogList.length - 1 }"
                  >
                    <div class="cat-face yellow-cat-face"></div>
                    <img src="public/equal.png" alt="equal" class="mr-auto" />
                    <span
                      v-html="productBacklog.lastDroppedItem?.text"
                      class="mx-auto"
                    ></span>
                  </div>
                </template>
              </DropBox>
            </li>
          </ul>
        </div>
      </section>
      <button
        :disabled="!checkValid"
        class="mx-auto w-fit rounded-2xl py-6 px-8 text-[32px]"
        :class="[
          checkValid
            ? 'bg-danger-100 bg-secondary-400'
            : 'bg-secondary-400 text-secondary-200',
        ]"
      >
        完成清單
      </button>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import DragBox from "../components/DragBox.vue";
import DropBox from "../components/DropBox.vue";

const step = ref(1);

const originProductBacklogList = ref([
  {
    key: "1",
    class: "relative cat blue-cat mb-1",
    draggingClass: "",
    text: "會員系統<br />(登入、註冊、權限管理)",
  },
  {
    key: "2",
    class: "relative cat yellow-cat ml-auto mb-1",
    text: "應徵者的線上履歷編輯器",
  },
  {
    key: "3",
    class: "relative cat blue-cat mb-1",
    text: "前台職缺列表 <br />(職缺詳情、點擊應徵)",
  },
  {
    key: "4",
    class: "relative cat yellow-cat ml-auto",
    text: "後台職缺管理功能<br />(資訊上架下架、應徵者資料)",
  },
]);

const productBacklogList = ref([
  {
    lastDroppedItem: null,
    title: "優先度最高",
  },
  {
    lastDroppedItem: null,
    title: "優先度高",
  },
  {
    lastDroppedItem: null,
    title: "優先度中",
  },
  {
    lastDroppedItem: null,
    title: "優先度低",
  },
]);

const handleDrop = (idx, item) => {
  console.log(idx, item);
  // const { id, title } = item;
  // droppedBoxNames.value.push(name);
  productBacklogList.value[idx].lastDroppedItem = item;
};

const checkValid = computed(() => {
  const result = ["2", "3", "1", "4"];
  return (
    productBacklogList.value.length === originProductBacklogList.value.length &&
    productBacklogList.value.every(
      (productBacklog, idx) =>
        productBacklog.lastDroppedItem?.key === result[idx]
    )
  );
});
</script>
