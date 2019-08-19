<template>
<div class='knowledge'>
    <headNav />
  <div class="waterfall clearfix">
		<ul v-for='(ele,index) in knowledgeData' :key='index' :style='width'>
            <li v-for='(item,index) in ele' :key='index'>
                <img :src="item.imgUrl" alt="" @click="open">
                <!-- <h2>{{item.title}}</h2> -->
                <!-- <div class="edit">
                    <i></i>
                </div> -->
            </li>
            
        </ul>
       
        
	</div>
    <leftLine/>
    <!-- <div class="model">
        <img src="../assets/images/poster/16.jpeg" alt="">
        <div class="mask"></div>
    </div> -->
</div>
</template>
<script>
import headNav from '../components/headNav'
import leftLine from '../components/leftLine'
import knowledgeData from '../components/knowledgeData'
export default {
    components: { leftLine,headNav }, 
    data() {
        return{
            width:"",
            knowledgeData:[[],[],[],[]],
        }
    },
   mounted(){
       let w = document.body.clientWidth;
    //    this.width ="width:"+ parseInt(w /this.knowledgeData.length) +'px';
       this.width ="width:"+ parseFloat(87 /4) +'%';
       console.log(parseInt(w /this.knowledgeData.length ))
       knowledgeData.forEach((e,i) => {
           console.log(e)
           console.log(i%4)
        this.knowledgeData[i%4].push(e);
       });
    //    console.log(this.knowledgeData[i])
        
    },
 
 methods: {
      open() {
        
      }
    }
}
</script>
<style lang="less">
    .knowledge {
        .waterfall {
        width:95.6%;
        padding:10px 15px;
            ul {
                display: inline-block;
                //  width: 16%;
                 margin:10px 20px;
                 float: left;
                li {
                    background:#fff;
                    box-shadow: -2px 0px 6px 4px #ccc;
                    // border: 1px solid red;
                    margin-bottom: 40px;
                    img {
                        width:100%;
                    }
                    h2 {
                        line-height: 30px;
                    }
                }
            }
        }
        
        
    }
</style>

 