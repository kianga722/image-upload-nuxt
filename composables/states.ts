
export const useSelectedImage = () => useState<string | null>('selectedImage', () => null)
export const useIsUploadModalOpen = () => useState('isUploadModalOpen', () => false)
