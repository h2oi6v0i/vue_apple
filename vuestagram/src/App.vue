<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step === 1" @click="step++">Next</li>
        <li v-if="step === 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <post-container
      :post-content="postContent"
      :step="step"
      :image-url="imageUrl"
      @write="written = $event"
    />

    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import PostContainer from "./components/PostContainer.vue";
import postContent from "./assets/post.js";
import axios from "axios";

export default {
  name: "App",

  components: {
    PostContainer,
  },

  data() {
    return {
      postContent: postContent,
      clickedCount: 0,
      tabItemNum: 0,
      step: 0, // 중요하고 다양한 컴포넌트가 사용하는 데이터는 전부 최상위 부모에 저장하기!
      imageUrl: "", // 1️⃣ data()에 저장
      written: "",
    };
  },

  methods: {
    /**
     * 클릭 시, 1.서버에서 추가 게시물을 가져오고 2.<PostItem>으로 보여주기
     */
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.clickedCount}.json`)
        .then((result) => {
          // () 생략하고 result만 써도 됨
          this.postContent.push(result.data);
          this.clickedCount++;
        });
    },

    /**
     * TODO: PostContainer.vue의 upload-image에 background 속성으로 넣기
     * - 여기에 있는 변수를 자식 컴포넌트로 보내는 방법
     */
    upload(e) {
      let file = e.target.files; // 내가 업로드한 파일이 다 담겨있음
      let url = URL.createObjectURL(file[0]); // file[0]의 URL 생성함
      this.imageUrl = url; // 2️⃣ data()에서 만든 변수에 url 담기
      this.step++;
    },

    publish() {
      let myPost = {
        name: "John Doe",
        userImage: "https://placeimg.com/200/200/people",
        postImage: this.imageUrl,
        likes: 20,
        date: "Apr 20",
        liked: false,
        content: this.written,
        filter: "clarendon",
      };
      this.postContent.unshift( myPost ); // Array 맨 앞에 추가하기
      this.step = 0; // 메인 페이지로 돌아가기
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
