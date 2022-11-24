<template>
  <div :ref="drop">
    <template v-if="lastDroppedItem">
      <slot name="dropped" />
    </template>
    <template v-else>
      <slot name="default" />
    </template>
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
  customClass: {
    type: [String, Object, Array],
    default: null,
  },
  droppedClass: {
    type: [String, Object, Array],
    default: null,
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
