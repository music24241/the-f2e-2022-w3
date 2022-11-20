<template>
  <!--  class="bg-[url('public/king.png')] bg-right-bottom bg-no-repeat"-->
  <main>
    <img src="public/po.png" alt="po" class="fixed bottom-0 right-0 z-10" />
    <div
      class="mx-auto flex min-h-screen max-w-[1200px] flex-col py-6 pt-[88px]"
    >
      <div>回上一頁</div>
      <div
        class="mb-14 h-6 w-full overflow-hidden rounded-3xl bg-secondary-100"
      >
        <div
          class="h-full w-20 bg-primary-100 transition duration-150 ease-in-out"
        ></div>
      </div>
      <section
        class="flex flex-1 flex-col rounded-4xl bg-secondary-300 py-16 px-[101px] text-2.5xl text-secondary-200"
      >
        <p class="mb-14">我是TT資訊王國．敏捷騎士團的軍師小敏</p>
        <p class="mb-14">
          用你們的話來說就是<span class="text-primary-100">PO</span
          >，也就是<span class="text-primary-100"
            >產品負責人 Product Owner</span
          >
        </p>
        <p>
          PO會負責評估產品代辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標，最後排出<span
            class="text-primary-100"
            >產品待辦清單 Product Backlog</span
          >
        </p>
        <button
          class="mx-auto mt-auto block w-fit rounded-2xl bg-danger-100 py-6 px-8 text-secondary-300"
        >
          開始任務
        </button>
      </section>
    </div>
  </main>
</template>

<script setup></script>
