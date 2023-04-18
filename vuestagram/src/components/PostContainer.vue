<template>
  <div>
    <!-- ="" 여기에 데이터뿐만 아니라 props 이름도 쓸 수 있음 (props도 일종의 데이터) -->
    <div v-if="step === 0">
      <post-item
        v-for="(item, index) in postContent"
        :key="index"
        :post-content="postContent[index]"
      />
    </div>

    <!-- 필터 선택 페이지 -->
    <div v-if="step === 1">
      <div
        class="upload-image"
        :style="`background-image : url(${imageUrl})`"
      >
      </div>
      <div class="filters">
        <filter-box v-for="(item, index) in filters" :key="index" 
                    :image-url="imageUrl" 
                    :class="filters[index]"
                    />
      </div>
    </div>

    <!-- 글 작성 페이지 -->
    <div v-if="step === 2">
      <div class="upload-image"></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >write!
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBox from "./FilterBox.vue";
import PostItem from "./PostItem.vue";

export default {
  name: "PostContainer",

  components: {
    PostItem,
    FilterBox,
  },

  data() {
    return {
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },

  /**
   * TODO: 기능 구현
   * step: 0 -> <post-item />
   * step: 1 -> 필터 선택 페이지
   * step: 2 -> 글 작성 페이지
   */

  props: {
    postContent: Array,
    step: Number,
    imageUrl: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  padding: 10px 0;
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filter-1 + .filter-1 {
  margin-left: 10px;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
