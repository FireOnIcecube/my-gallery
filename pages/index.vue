<script setup>
import { storage } from "../firebase/index";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const storageRef = ref(storage);

const imgRefs = await listAll(storageRef).then((res) => res.items);
const imgUrls = await Promise.all(imgRefs.map((item) => getDownloadURL(item)));
</script>

<template>
  <div>
    <div class="bg-red-500">test</div>
    <div v-for="imgSrc of imgUrls">
      <img :src="imgSrc" />
    </div>
  </div>
</template>
