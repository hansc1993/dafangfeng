<template>
    <div class='question'>
        <headNav />
        <!-- 面包屑 -->
        <div class="intro">
            <div class="container">
                <div class="fl l-txt">
                    <i class="icon"></i>
                    <a href="/">大房蜂上海站</a>
                    <span class="stp">&nbsp;&gt;&nbsp;
                        </span><a href="/wenda/">房产问题问答</a>
                    <span class="stp">&nbsp;&gt;&nbsp;</span>
                    <span>全部问题</span>
                </div>
            </div>
        </div>

        <!-- 正文 -->
        <div class="wrap-global">
            <div class="tiwen-panel clearfix">
                <!-- 问题 -->
                <div class="big-left">
                    <div class="all-answers">
                        <h2 class="big-title">为您找到<span class="answers-num"> {{queData.length}} </span>个问题</h2>
                        <div class='title-line'> </div>
                        <ul class='ans-ul'>
                            <li class='ans-item' v-for='(item,index) in queData' :key='index'>
                                <h2>{{item.que}}</h2>
                                <span>{{item.ans}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 顾问推荐 -->
                <div class="big-right">
                    <div class="jingjiren-push">
                        <span class="big-title">相关顾问推荐</span>
                        <div class="title-line"></div>
                        <ul class='push-ul'>
                            <li v-for="(item,index) in adviserPerson" :key='index'>
                                <div class="agentInfo">
                                    <img :src="item.headPic" alt="">
                                    <h2>{{item.name}}</h2>
                                    <p>{{item.autograph}}</p>
                                    <em>已完成<span class='jiaoyiNum'> {{item.orderNumber}} </span> 次交易</em>
                                    <p class="agent-tips">
                                        <span>联系方式 : {{item.photo}}</span>
                                    </p>
                                    <img class='WeChat' :src="item.wechatPicUrl" alt="">
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        <leftLine/>
    </div>
</template>


<script>
import leftLine from '../components/leftLine'
import headNav from '../components/headNav'
import questionData from '../components/questionData.js'
import adviserPerson from '../components/adviserPerson.js'
export default {
    components: { leftLine,headNav }, 
    data(){
        return {
            queData:'',
            adviserPerson:'',
        }
    },
    mounted(){
        this.queData = questionData;
        this.adviserPerson = adviserPerson;
    }
}
</script>

<style lang="less">
#app {
    height:100%;
    background:#f1f1f1;
}
.question {
    
    .intro {
        height: 46px;
        line-height: 46px;
        // background: #f1f1f1;
        border-top: 1px solid #eee;
        .container {
            width: 1000px;
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
            width: 1000px;
            margin: 0 auto;
            clear: both;
            .big-left {
                float: left;
                width: 745px;
                height: 100%;
                
                .all-answers {
                    width: 745px;
                    float: left;
                    margin-top: 15px;
                    background-color: #fff;
                    padding: 25px 30px 30px 30px;
                    border-radius: 2px;
                    box-sizing: border-box;
                    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.2); 
                    .big-title {
                        display: inline-block;
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 20px;
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
                        .ans-item {
                            padding-bottom: 20px;
                            position: relative;
                            border-bottom: 1px dashed #eeeeee;
                            box-sizing: border-box;
                            h2 {
                                font-size: 16px;
                                line-height: 50px;
                                display: block;
                                height:50px;
                            }
                        }
                    }
                }
            }
            .big-right {
                float: right;
                width: 250px;
                height: 100%;
                margin-top: 15px;
                .jingjiren-push {
                    width: 240px;
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
                    padding: 25px 24px 12px 24px;
                    border-radius: 2px;
                    box-sizing: border-box;
                    .big-title {
                        display: inline-block;
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .title-line {
                        width: 100%;
                        height: 1px;
                        background-color: #eeeeee;
                    }
                    .push-ul {
                        li {
                            position: relative;
                            .agentInfo {
                                padding-top: 25px;
                                text-align: center;
                                position: relative;
                                img {
                                    display: inline-block;
                                    width: 100px;
                                    height: 100px;
                                    border-radius: 50%;
                                }
                                h2 {
                                    line-height: 30px;
                                    display: block;
                                    height: 30px;
                                    font-size: 18px;
                                }
                                p {
                                    font-size: 12px;
                                    line-height: 26px;
                                    color: #999;
                                    max-width: 190px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                                em {
                                    color: #333;
                                    font-size: 12px;
                                    line-height: 30px;
                                    margin-bottom: 10px;
                                        .jiaoyiNum {
                                            color:coral;
                                            font-size: 14px;
                                        }
                                }
                                .agent-tips {
                                    font-size: 12px;
                                    line-height: 38px;
                                    color: #999;
                                    max-width: 190px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    span {
                                        border: 1px solid #bfbfbf;
                                        padding: 4px 8px;
                                        border-radius: 2px;
                                        margin-right: 6px;
                                    }
                                }
                                .WeChat {
                                    width:80px;
                                    height:80px;
                                    border-radius: 0%;
                                }
                                .wxPig {
                                    position: absolute;
                                    right: 0;
                                    border:1px solid red;
                                    width:80px;
                                    height:80px;
                                }
                            }
                            
                        }
                    }
                }
                
            }
        }
    }
}
</style>