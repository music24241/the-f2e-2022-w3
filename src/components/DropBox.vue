<template>
  <div :ref="drop" class="h-[100px] w-[100px] border border-primary-100">
    {{ JSON.stringify(lastDroppedItem) }}
    <slot />
  </div>
</template>

<script setup>
import { useDrop } from "vue3-dnd";

const props = defineProps({
  lastDroppedItem: {
    type: Object,
    default: null,
  },
  onDrop: {
    type: Function,
    default: (f) => f,
  },
});

const [dropCollect, drop] = useDrop({
  accept: ["box"],
  collect(monitor) {
    return {
      handlerId: monitor.getHandlerId(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    };
  },
  drop: props.onDrop,
  hover(item, monitor) {
    // console.log(item, monitor);
  },
});
</script>
