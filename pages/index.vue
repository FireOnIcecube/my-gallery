<script setup>
import { storage } from "../firebase/index";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const storageRef = ref(storage);
const runtimeConfig = useRuntimeConfig();

const imgRefs = await listAll(storageRef).then((res) => res.items);
const imgUrls = await Promise.all(imgRefs.map((item) => getDownloadURL(item)));
</script>

<template>
  <div>
    <NavBar />

    <div>bucket : {{ runtimeConfig.public.STORAGE_BUCKET }}</div>
    <div :key="imgSrc" v-for="imgSrc of imgUrls">
      <img :src="imgSrc" />
    </div>
  </div>
</template>
