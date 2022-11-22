<template>
  <main class="flex justify-between">
    <div>
      <div v-if="dragCollect.isDragging" :ref="dragPreview">dragPreview</div>
      <div v-else :ref="dragSource">dragSource</div>
    </div>

    <div :ref="drop">Drop Target</div>

    <!--    <div>dragLayer</div>-->
  </main>
</template>

<style></style>

<script setup>
import { useDrag } from "vue3-dnd";
import { useDrop } from "vue3-dnd";
// import { useDragLayer } from "vue3-dnd";

// const dragCollected = useDragLayer((monitor) => ({
//   item: monitor.getItem(),
// }));

const [dropCollect, drop] = useDrop({
  accept: ["BOX"],
  collect(monitor) {
    // console.log(monitor);
    return {
      handlerId: monitor.getHandlerId(),
    };
  },
  hover(item, monitor) {
    console.log(item, monitor);
  },
});

const [dragCollect, dragSource, dragPreview] = useDrag({
  type: "BOX",
  item: { id: "1" },
  collect: (monitor) => ({ isDragging: monitor.isDragging() }),
});
</script>
