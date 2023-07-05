import { defineStore } from 'pinia'
interface ImageState {
  file: File | null
  filter: string
}
export const useImageStore = defineStore('image', {
  state: (): ImageState => ({
    file: null,
    filter: ''
  })
})
