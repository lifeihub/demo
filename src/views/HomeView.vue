<template>
  <div class="hello">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-container>
          <el-main>
            <div id="main" style="height:400px;width:400px;border:1px solid #ccc">123</div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'HomeView',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      randomNum: null,
      randomNumInterval: null
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    this.randomNumInterval = setInterval(() => {
      this.randomNum = Math.random()
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [this.randomNum * 50, this.randomNum * 20, this.randomNum * 30, this.randomNum * 10, this.randomNum * 10, this.randomNum * 20]
          }
        ]
      })
    }, 1000)
  },
  destroyed () {
    clearInterval(this.randomNumInterval)
    this.randomNumInterval = null
  }
}
</script>
