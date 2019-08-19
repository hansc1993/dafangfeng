<template>
    <div class='mainPage'>
        <div class="header">
            <div class="content">
                <div class="logo"><img src="../assets/images/logo2.png" alt=""></div>
                <!-- <div class="mask"></div> -->
                <ul class="tabList">
                    <li><Router-link to='/hotProperty'>一手楼盘</Router-link></li>
                    <li><Router-link to='/secondHouse'>二手楼盘</Router-link></li>
                    <li><Router-link to='/knowledge'>知识星球</Router-link></li>
                    <li><Router-link to='/question'>常见问题</Router-link></li>
                </ul>
                <div class="header-wrap">
                    <h1>一手返佣50% - 二手佣金0.5%</h1>
                    <p class='successText'>上海大房峰成功案例4000例</p>
                </div>
                <div class="Affirming">
                    <a href="#" class='state'>
                        <i class='iconfont icon-wuuiconsuotanhao'></i>
                        <span>关于仿冒我公司进行不正当竞争行为的郑重申明</span>
                    </a>
                    <a href="#" class='ensure'>
                        <i class='iconfont icon-shejiwenzhang201'></i>
                        <span>房地产中介诚信服务承诺及保证书</span>
                    </a>
                </div>
            </div>
    
        </div>
        <div class="home-nav">
            <ul class='count'>
                <li>
                    <Router-link to='/hotProperty'>
                        <i class='iconfont icon-loufang' style='color:rgb(158, 137, 62);'></i>
                        <p class='titleP'>一手楼盘返佣</p>
                        <p>为您精准定位，位置周边配套设施一览无余</p>
                    </Router-link>
                </li>
                <li>
                    <Router-link to='/secondHouse'>
                        <!-- <img src="../assets/images/002.png" alt=""> -->
                        <i class='iconfont icon-solid-home' style='color:rgb(41, 130, 122);'></i>
                        <p class='titleP'>二手楼盘返佣</p>
                        <p>为您精准定位，位置周边配套设施一览无余</p>
                   </Router-link>
                </li>
                <li>
                     <Router-link to='/knowledge'>
                        <!-- <img src="../assets/images/002.png" alt=""> -->
                        <i class='iconfont icon-zhishi' style='color:rgb(61, 105, 160);'></i>
                        <p class='titleP'>知识星球</p>
                        <p>为您精准定位，位置周边配套设施一览无余</p>
                    </Router-link>
                </li>
                <li>
                    <Router-link to='/question'>
                        <!-- <img src="../assets/images/002.png" alt=""> -->
                        <i class='iconfont icon-qian' style='color:rgb(195, 53, 53)'></i>
                        <p class='titleP'>如何返佣</p>
                        <p>为您精准定位，位置周边配套设施一览无余</p>
                    </Router-link>
                </li>
            </ul>
        </div>
        <div class="handHref">
            <div class="wrapper">
                <div class="hrefContent">
                    <div class="titleLogo"><img src="../assets/images/logo3.png" alt=""></div>
                    <p>上海大房蜂房地产经纪有限公司的团队人员都是从业年限都在沪十年以上行业精英，长期致力于房地产经纪行业的正规化管理和经营，公司在以客为尊，正心明德的企业文化指导下，全力打造房地产经纪行业的“特种兵”。</p>
                    <div class="download">
                        <h4>联系我们</h4>
                        <img src="../assets/images/wechatPic/001.jpeg" alt="">
                    </div>
                </div>
                
            </div>
        </div>
        <div class="footer">
            <div class="wrapper">
                <div class="f-title">
                    <ul class='clearfix'>
                        <li>关于大房蜂</li>
                        <li>隐私申明</li>
                        <li>友情链接</li>
                    </ul>
                    <div class="fr">官方电话 : 189-1767-1684</div>
                </div>
                <div class="bottom">
                <div class="copyright">
                    上海大房蜂房地产经纪有限公司 | 上海大房蜂网版权所有 | <br>
                    违法和不良信息举报电话：189-1767-1684 违法和不良信息举报邮箱：jubaoyouxiang@dafangfeng.com
                </div>
                <div class="copyright">
                </div>
            </div>
            </div>
            
        </div>
        <leftLine/>
     </div>
</template>
<script>
import leftLine from '../components/leftLine'
export default {
    components: { leftLine }, 
}
</script>

<style lang="less">
    .mainPage {


        .header {
            padding-top: 40px;
            height:450px;
            position: relative;
            width:100%;
            background:url("../assets/images/001.png") no-repeat 0 0 ;
            background-size: 100% 100%;
            
            .logo {
                width:160px;
                height:80px;
                // background:#fff;
                margin-left: 130px;
                img {
                    width:100%;
                }
            }
            // .mask {
            //     width: 100%;
            //     height: 490px;
            //     background: rgba(0,0,0,0.3);
            //     position: absolute;
            //     top: 0;
            // }
            .tabList {
                display: flex;
                float: right;
                position: absolute;
                top: 50px;
                right:120px;
                li {
                        display: list-item;
                        text-align: -webkit-match-parent;
                    a {
                        color:#fff;
                        font-size: 16px;
                        margin-left: 20px;
                        text-decoration: none;
                        font-weight: 700;
                        text-shadow: 0 0 5px rgba(0,0,0,0.3);
                    }
                
                
                    

                }
            }
            .header-wrap {
                width: 100%;
                h1 {
                    font-size: 54px;
                    color:#fff;
                    text-align: center;
                    margin-top: 60px;
                }
                .successText {
                    font-size: 18px;
                    color:#fff;
                    text-align: center;
                    width:100%;

                }
            }
            .Affirming {
                color:#fff;
                position: absolute;
                bottom:30px;
                left: 130px;
                .state,.ensure {
                    opacity: 0.7;
                    i {
                        font-size: 16px;
                        padding-right: 5px;

                    }
                    span {
                        font-size: 12px;
                        font-weight: 300;
                    }
                }
                .ensure  {
                    padding-left: 30px;
                }
            }
            

        }
        .home-nav {
            .count {
                margin-top:60px;
                li {
                    height:170px;
                    // border: 1px solid red;
                    width:25%;
                    float: left;
                    a {
                        width: 80%;
                        display: inline-block;
                        img {
                            width: 76px;
                            height: 65px;
                            margin: 0 auto 17px auto;
                            display: block;
                            vertical-align: middle;
                        }
                        i{
                            height: 65px;
                            margin: 0 auto 17px auto;
                            display: block;
                            font-size: 60px;
                            width: 100% !important;
                            vertical-align: middle;
                            display: inline-block;
                            text-align: center;
                        }
                        .titleP {
                        font-size: 18px;
                        color: #394043;
                        }
                        p {
                            // 
                            width: 100%;
                            margin: 3px auto 5px auto;
                            font-size: 12px;
                            color: #b0b3b4;
                            line-height: 20px;
                            text-align: center;
                        }
                    }
                }
            }
        }
        .handHref {
            position: relative;
            height: 479px;
            background:url("../assets/images/003.jpg") no-repeat 0 0 ;
            background-size: 100% 100%;
            margin-top: 260px;
            .hrefContent {
                position: absolute;
                width: 479px;
                left: 60px;
                padding-top: 40px;
                .titleLogo {
                    width: 286px;
                    height: 118px;
                    // background:red;
                    img {
                        width:100%;
                    }
                }
                p {
                    line-height: 22px;
                    margin-top: 22px;

                }
                .download {
                    h4 {
                        color:#333;
                        font-size: 18px;
                        margin-top: 20px;
                    }
                    img {
                        width:115px;
                        height:115px;

                    }
                }
            }

        }
        .footer {
            width:100%;
            height:220px;
            background:url('../assets/images/005.jpg') no-repeat 0 0 ;
            background-size: 100% 100%;
            .wrapper {
                width: 1150px;
                margin:0 auto;
                position: relative;
                .f-title {
                    height: 75px;
                    border-bottom: 1px solid #393939;
                    line-height: 75px;
                    margin: 0;
                    ul {
                        li {
                            float: left;
                            color: #fff;
                            margin-right: 15px;
                            font-size: 14px;
                        }
                    }
                    .fr {
                        right: 0;
                        color:#7dcfa0;
                        top :0;
                        position: absolute;
                    }
                }
                .bottom {
                    padding-top: 23px;
                    .copyright {
                        color: #888c8e;
                        font-size: 12px;
                        line-height: 20px;
                        .img {
                            height: 20px;
                            vertical-align: top;
                        }
                        
                    }
                    
                }
            }
            
        

        }
    }  
</style>