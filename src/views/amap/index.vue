<template>
  <div class="amap-wrap">
    <el-amap vid="amapContainer" :events="events" class="amap-demo"></el-amap>
  </div>
</template>
<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
// 方法
import { getLngLat } from "./common";
import { addressSetMapCenter } from "./location";
import { amapSetMarker, amapClearMarker } from "./marker";
export default {
  name: "Amap",
  data() {
    return {
      lnglat: {},
      map: null,
      zoom: 18,
      events: {},
    };
  },
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    //加载地图的API
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map("amapContainer", {
        center: [116.404765, 39.918052],
        zoom: this.zoom, //初始化地图层级
      });
      this.map.on("click", (e) => {
        const lnglat = getLngLat(e);
        this.lnglat = lnglat;
        this.$emit("getLngLat", lnglat); // 子组件调父组件的方法
        this.setMarker();
      });
    });
  },
  methods: {
    mapCreate(params) {
      this.map = new AMap.Map("amapContainer", {
        center: [116.404765, 39.918052],
        zoom: this.zoom, //初始化地图层级
      });
      this.map.on("complete", () => {
        this.mapLoad();
      });
    },
    mapLoad() {
      if (this.options.mapLoad) {
        this.$emit("callback", {
          function: "mapLoad",
        });
      }
    },
    mapDestroy() {
      this.map && this.map.destroy();
    },
    setMapCenter(value) {
      addressSetMapCenter(value, this.map);
    },
    setMarker(lnglat) {
      amapSetMarker(lnglat || this.lnglat, this.map);
    },
    clearMarker() {
      amapClearMarker(this.map);
    },
  },
};
</script>
<style lang="scss">
.amap-wrap {
  height: 100%;
}
</style>