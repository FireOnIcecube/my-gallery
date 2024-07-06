<script setup>
import { storage } from "../firebase/index";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const runtimeConfig = useRuntimeConfig();

const storageRef = ref(storage);

const imgRefs = await listAll(storageRef).then((res) => res.items);
const imgUrls = await Promise.all(imgRefs.map((item) => getDownloadURL(item)));
console.log(imgUrls);
</script>

<template>
  <div>
    <AutoComplete
      v-model="value"
      dropdown
      :suggestions="items"
      @complete="search"
    />

    <div>bucket : {{ runtimeConfig.public.STORAGE_BUCKET }}</div>
    <div :key="imgSrc" v-for="imgSrc of imgUrls">
      <img :src="imgSrc" />
    </div>
  </div>
</template>
