<template>
  <div
    :ref="dragSource"
    :class="[customClass, dragCollect.isDragging ? draggingClass : '']"
  >
    <slot></slot>
  </div>
</template>
<script setup>
import { useDrag } from "vue3-dnd";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  item: {
    type: [String, Object],
    default: null,
  },
  customClass: {
    type: String,
    default: null,
  },
  draggingClass: {
    type: String,
    default: null,
  },
});

const [dragCollect, dragSource, dragPreview] = useDrag({
  type: "box",
  item: { ...props.item },
  collect: (monitor) => ({ isDragging: monitor.isDragging() }),
});
</script>
