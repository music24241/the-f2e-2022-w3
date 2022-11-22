<template>
  <main class="flex">
    <ul class="px-4">
      <li v-for="item in originList" :key="item.id">
        <DragBox :id="item.id.toString()" :item="item">
          {{ item.title }}
        </DragBox>
      </li>
    </ul>

    <ul class="px-4">
      <li v-for="(item, idx) in resultList" :key="item.id">
        <DropBox
          :item="item"
          :last-dropped-item="item.lastDroppedItem"
          @drop="handleDrop(idx, $event)"
        >
          {{ item.title }}
        </DropBox>
      </li>
    </ul>

    <!--    <div>dragLayer</div>-->
  </main>
</template>

<style></style>

<script setup>
import DragBox from "../components/DragBox.vue";
import DropBox from "../components/DropBox.vue";
import { ref } from "vue";
import { useDrag } from "vue3-dnd";
import { useDrop } from "vue3-dnd";
// import { useDragLayer } from "vue3-dnd";

// const dragCollected = useDragLayer((monitor) => ({
//   item: monitor.getItem(),
// }));

const originList = ref([
  { id: 1, title: "a" },
  { id: 2, title: "b" },
  { id: 3, title: "c" },
  { id: 4, title: "d" },
]);
const resultList = ref([{ lastDroppedItem: null }, { lastDroppedItem: null }]);
const selectedItem = ref(null);

const handleDrop = (idx, item) => {
  console.log(idx, item);
  const { id, title } = item;
  console.log(id, title);
  // droppedBoxNames.value.push(name);
  resultList.value[idx].lastDroppedItem = item;
};
</script>
