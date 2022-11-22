<script setup></script>

<template>
  <main>
    <img
      src="public/po_sit.png"
      alt="po_sit"
      class="fixed bottom-0 right-0 z-10"
    />
    <div
      class="mx-auto flex min-h-screen max-w-[1200px] flex-col py-6 pt-[88px]"
    >
      <!--    <img src="public/king.png" alt="king" class="fixed bottom-0 right-0 z-10" />-->
      <div
        class="mb-14 h-6 w-full overflow-hidden rounded-3xl bg-secondary-100"
      >
        <div
          class="h-full w-10 bg-primary-100 transition duration-150 ease-in-out"
        ></div>
      </div>
      <section
        class="flex flex-1 flex-col rounded-4xl bg-secondary-300 py-16 px-[101px] text-2.5xl text-secondary-200"
      >
        <p class="mb-14">
          勇者！歡迎來到TT資訊王國，我是TT King<br />
          在正式加入王國的敏捷騎士團以前，需要請你先了解騎士團的
          <span class="text-primary-100">Scrum流程與精神</span>
        </p>
        <p>請跟隨我一起通過Scrum新手村的挑戰任務吧！</p>
        <button
          @click.prevent="$router.push('/step2')"
          class="mx-auto mt-auto block w-fit rounded-2xl bg-danger-100 py-6 px-8 text-secondary-300"
        >
          開始任務
        </button>
      </section>
    </div>
  </main>
</template>
