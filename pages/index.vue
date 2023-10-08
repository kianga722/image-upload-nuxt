<script setup lang="ts">
  if (process.env.NODE_ENV === 'development' && process.browser) {
    const { worker } = await import('../mocks/browser')
    worker.start()
  }
</script>

<template>
  <div id='content-wrapper'>
    <Head>
      <Title>Image Gallery</Title>
      <Meta name="description" content="Image Gallery and Upload" />
    </Head>

    <HeaderTop />

    <ClientOnly>
      <GalleryMain />
    </ClientOnly>
    
    <ImageModal />

    <UploadModal />
  </div>
</template>