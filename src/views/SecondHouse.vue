<template>
    <div class='secondHouse'>
         <headNav />
        <!-- 正文 -->
        <div class="wrap-global">
            <div class="tiwen-panel clearfix">
                <!-- 问题 -->
                <!-- <div class="big-left">
                    <div class="all-answers">
                        <h2 class="big-title">共找到<span class="answers-num"> {{secondHouseData.length}} </span>套上海二手房</h2>
                        <div class='title-line'> </div>
                        
                        <div  class='ans-ul' v-for='(item,index) in secondHouseData' :key='index'>
                            <div class='ans-item clearfix'>
                                <div class="img">
                                    <img :src="item.housePig" alt="">
                                </div>
                                <div class="messInfo">
                                    <div class='titleNew'><p class='horseTitle'>{{item.houseName}}</p>  <button class='btnStyle btn1'>住宅</button><button class='btnStyle btn2'>在售</button></div>
                                    <p class='address'><i class='iconfont icon-dingwei'></i>{{item.houseAddress}}</p>
                                    <p><i class='iconfont icon-weibiaoti-'></i>{{item.roomInfo}} </p>
                                    <p><i class='iconfont icon-RectangleCopy'></i>总价 : {{item.TotalPrice}}</p>
                                    <p><i class='iconfont icon-pengyou'></i>{{item.daikan}}</p>
                                    <p class='tag'>
                                        <span class='subway'>近地铁</span>
                                        <span class='taxfree'>房本满五年</span>
                                        <span class='haskey'>随时看房</span>
                                    </p>
                                    <div class="jiage">
                                        <p class='mainJiage'>返佣 : {{item.payBack}}元</p>
                                        <em>单价{{item.average}}元/平米</em>
                                    </div>
                                </div>

                            </div>
                        </div>

                        
                        

                    </div>
                    
                </div> -->
                
                <!-- 顾问推荐 -->
                <!-- <div class="big-right">
                    <div class="jingjiren-push">
                        <span class="big-title">返佣流程</span>
                        <div class="title-line"></div>
                        <img src="../assets/images/two2.png" alt="" class='pushDiv'>
                    </div>
                    <div class="jingjiren-push zhuyishixiang">
                        <span class="big-title">注意事项</span>
                        <div class="title-line"></div>
                        <ul>
                            <li>1. 看房过程不要签署任何名字，防止一些平台含有佣金确认条款</li>
                            <li>2. 看房过程中，不要支付任何保证金</li>
                            <li>3. 全上海的房东我们都可以联系到</li>
                        </ul>
                        <div class='peopleDiv'>
                            <img class='people' src="../assets/images/wechatPic/001.jpeg" alt="">
                        </div>
                    </div>
                    
                </div> -->
                <h2 class="main-title">
                    大房蜂不组织二手房的看房流程，专注于低佣金模式下的合同交易
                </h2>
                <!-- <h2 class="main-title" style="font-size: 26px;">
                    ————我们可以联系到全上海的房东
                </h2> -->

                <div class="big-left">
                    <div class="jingjiren-push">
                        <span class="big-title">返佣流程</span>
                        <div class="title-line"></div>
                        <img src="../assets/images/two2.png" alt="" class='pushDiv'>
                    </div>
                </div>
                <div class="big-right">
                    <div class="jingjiren-push zhuyishixiang">
                        <span class="big-title">注意事项</span>
                        <div class="title-line"></div>
                        <ul>
                            <li>1. 看房过程<span class="mainMessage">不要签署任何名字</span>，防止一些平台含有佣金确认条款</li>
                            <li>2. 看房过程中，<span class="mainMessage">不要支付任何保证金</span></li>
                            <li>3. <span class="mainMessage">全上海</span>的房东我们都可以联系到</li>
                        </ul>
                        <div class='peopleDiv'>
                            <img class='people' src="../assets/images/wechatPic/001.jpeg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <leftLine/>
    </div>
</template>


<script>
import headNav from '../components/headNav'
import leftLine from '../components/leftLine'
import secondHouseData from '../components/secondHouseData'
export default {
    components: { leftLine,headNav }, 
    data(){
        return {
            secondHouseData:'',
        }
    },
    mounted(){
        this.secondHouseData = secondHouseData;
    }
}
</script>

<style lang="less">
#app {
    height:100%;
    background:#f1f1f1;
}
.secondHouse {
    
    .intro {
        height: 46px;
        line-height: 46px;
        // background: #f1f1f1;
        border-top: 1px solid #eee;
        .container {
            width: 1080px;
            margin: 0 auto;
            font-size: 12px;
            .fl {
                float: left;
                a {
                    color: #555555;
                }
            }
        }
    }
    .wrap-global {
        width: 100%;
        padding-bottom: 50px;
        .tiwen-panel {
            width: 1080px;
            margin: 0 auto;
            clear: both;
            .main-title {
                margin-top: 40px;
                font-size: 30px;
                color: #d44d38;
            }
            .big-left {
                float: left;
                width: 60%;
                height: 100%;
                background:#f1f1f1;
                .all-answers {
                    width: 100%;
                    float: left;
                    margin-top: 15px;
                    background-color: #f1f1f1;
                    // padding: 25px 30px 30px 30px;
                    border-radius: 2px;
                    box-sizing: border-box;
                    
                    .big-title {
                        display: inline-block;
                        font-size: 18px;
                        font-weight: bold;
                        margin-top:10px;
                        // margin-bottom: 20px;
                        .answers-num {
                            color: #f46a1f !important;
                        }
                    }
                    .title-line {
                            width: 100%;
                            height: 1px;
                            background-color: #eeeeee;
                    }
                    .ans-ul {
                        border-radius: 15px;
                        margin-top : 15px;
                        background-color: #fff;
                        padding: 10px 20px 10px 20px;
                        -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                        box-shadow: 0 1px 3px rgba(0,0,0,0.2); 
                        .ans-item {
                            padding-top: 15px ;
                            padding-bottom: 15px;
                            position: relative;
                            // border-bottom: 1px dashed #eeeeee;
                            box-sizing: border-box;
                            .img {
                                margin-top: 8px;
                                width:25%;
                                float:left;
                                img {
                                    width:100%;
                                }
                            }
                            .messInfo {
                                width:73%;
                                // height:30px;
                                float:right;
                                position: relative;
                                .iconfont {
                                    display: inline-block;
                                    padding-right: 5px;
                                }
                                p {
                                    line-height: 27px;
                                    .taxfree {
                                        background: #ffece8;
                                        color: #FF8062;
                                    }
                                    .haskey {
                                        background: #e1f5ed;
                                        color: #33BE85;
                                    }
                                    .subway {
                                        background: #f4f7f9;
                                        color: #849aae;
                                    }
                                }
                                .tag {
                                    span {
                                        font-size: 12px;
                                        line-height: 25px;
                                        padding: 0 7px;
                                        margin-right: 6px;
                                        display: inline-block;
                                    }
                                }
                                .titleNew {
                                    padding-bottom: 5px;
                                    .horseTitle {
                                        font-weight: bolder;
                                        font-size: 20px;
                                        display: inline-block;
                                        vertical-align: top;
                                    }
                                    .btnStyle {
                                        padding: 2px 7px;
                                        color: #fff;
                                        text-align: center;
                                        border-radius: 2px;
                                        margin-left: 10px;
                                        font-size: 10px;
                                    }
                                    .btn1 {
                                        background: #f3bf02;
                                    }
                                    .btn2 {
                                        background: #53CC9A;
                                    }
                                }
                                
                                .address {
                                    font-size: 16px;
                                }
                                .jiage {
                                    position: absolute;
                                    right: 0px;
                                    top: 40%;
                                    text-align: right;
                                    p {
                                        line-height:30px;
                                    }
                                    .mainJiage {
                                        color:#d44d38;
                                        font-size: 20px;
                                        font-weight: bolder;
                                        
                                    }
                                    em {
                                        color:#a9a9a9;
                                        font-size: 10px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .big-right {
                float: right;
                width: 38%;
                height: 100%;
                margin-top: 15px;
                margin-left: 20px;
            }

            .jingjiren-push {
                    width: 100%;
                    margin-left: 15px;
                    float: right;
                    margin-bottom: 15px;
                    padding-bottom: 25px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                    -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                    -o-box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                    -ms-box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                    background-color: #fff;
                    padding: 25px 10px 12px 10px;
                    border-radius: 2px;
                    box-sizing: border-box;
                    border-radius: 15px;
                        margin-top: 53px;
                    .big-title {
                        display: inline-block;
                        font-size: 18px;
                        font-weight: bold;
                        // margin-bottom: 15px;
                    }
                    .title-line {
                        width: 100%;
                        height: 1px;
                        margin:10px 0;
                        background-color: #eeeeee;
                    }
                    .pushDiv {
                        width:100%;
                        display: inline-block;
                        // border: 1px solid red;
                    }
                }
                .zhuyishixiang {
                    margin-top: 35px;
                    ul {
                        margin-top: 10px;
                        li {
                            // height:30px;
                            line-height: 26px;
                            padding:10px 0;
                            .mainMessage {
                                font-size: 20px;
                                color:#d44d38;
                            }
                            
                        }
                    }
                    .peopleDiv {
                        width: 100%;
                        text-align: center;
                        .people {
                            width: 111px;
                        }
                    }
                    
                }
                .mainMessage {
                    font-size: 20px;
                    color:#d44d38;
                }
        }
    }
}
    
</style>