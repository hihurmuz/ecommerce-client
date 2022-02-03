<template>
    <div class="w-75">
        <div class="w-100 mb-4">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide
                    v-for="(el, i) in slideList"
                    :key="i"
                    :img-src="el.src"
                />
            </b-carousel>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
        slide: 0,
        sliding: null,
        slideList: [
            {
            src: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2102_20220105145904.png/format:webp",
            },
            {
            src: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2147_20210913124153.png/format:webp",
            },
            {
            src: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2110_20220107154324.png/format:webp",
            },
            {
            src: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2148_20220112144100.png/format:webp",
            },
        ],
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
