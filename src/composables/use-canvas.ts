import { ref } from 'vue'

export default function useCanvas() {
  const canvasEl = ref<HTMLCanvasElement | null>(null)
}
