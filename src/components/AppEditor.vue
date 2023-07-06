<template>
  <div class="my-8">
    <canvas width="448" height="448" ref="canvasEl"></canvas>
    <div class="mt-4 text-xl text-white">
      <div class="flex justify-center gap-4">
        <button
          type="button"
          class="w-full py-4"
          v-for="(filter, index) in filters"
          :key="index"
          :class="{
            'bg-pink-600': store.filter !== filter,
            'bg-green-600': store.filter === filter
          }"
          @click="store.filter = store.filter === filter ? '' : filter"
        >
          {{ filter }}
        </button>
      </div>
      <a
        class="block w-full py-4 mt-2 text-center bg-indigo-700"
        :href="canvasImgURL"
        download="image.png"
      >
        Download
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useImageStore } from '@/stores/image'
import useReader from '@/composables/use-reader'
import useCanvas from '@/composables/use-canvas'

const filters = ['oceanic', 'vintage', 'rosetint']
const store = useImageStore()
const { canvasEl, loadImage, drawOriginalImage, filterImage, canvasImgURL } = useCanvas()
const { reader } = useReader(store.file, () => {
  if (!reader.result) return

  const dataURL = reader.result.toString()
  loadImage(dataURL)
})

store.$subscribe((mutation, state) => {
  drawOriginalImage()
  filterImage(state.filter)
})
</script>
