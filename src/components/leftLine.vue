<template>
    <div class="lineLeft">
        <ul class='lineUl'>
            <li>
                <a href="">
                    <span class="popup"><i></i>安心服务承诺</span>
                    <img src="../assets/images/006.png" alt="">
                </a>
            </li>
            <li>
                <Router-link to='/question'>
                    <span class="popup"><i></i>在线问答</span>
                    <img src="../assets/images/010.png" alt="">
                </Router-link>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="popup popup-qr">
                        <i></i>
                        <img class='phoneImg' src="../assets/images/wechatPic/001.jpeg" alt="">
                        <em>联系我们</em>
                    </span>
                    <img src="../assets/images/007.png" alt="">
                </a>
            </li>
                <li>
                <a href="javascript:;">
                    <span class="popup"><i></i>服务热线 : 18917671684</span>
                    <img src="../assets/images/008.png" alt="">
                </a>
            </li>
        </ul>
        <div class='returnTop' @click="returnTop()">
            <img src="../assets/images/011.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        returnTop () {
            console.log(123456)
            window.scrollTo(0,0);
        }
    }
}
</script>

<style lang="less">
     .lineLeft {
        position: fixed;
        width:38px;
        height:100%;
        right: 0;
        background:#fff;
        top: 0;
        box-shadow: 0 1px 10px rgba(0,0,0,0.2);
        z-index: 1002;
        vertical-align: middle;
        .lineUl {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            li {
                width:100%;
                position: relative;
                
                line-height: 50px;
                a {
                    display: inline-block;
                    width:100%;
                    text-align: center;
                    img {
                        width:60%;
                        vertical-align: middle;
                    }
                    &:hover {
                        background:#805c0b;
                        .phoneImg {
                            width:94px;
                        }
                        img {
                            filter: invert(204%) sepia(49%) saturate(10%) hue-rotate(0deg) brightness(200%) contrast(200%)
                        }
                        .phoneImg {
                            filter:none;
                        }
                        .popup {
                            display: inline-block !important;
                        }
                        
                    }
                }
                .popup {
                    
                    display: none !important;
                    position: absolute;
                    right: 38px;
                    top: 0;
                    display: none;
                    padding: 0 14px;
                    color: #fff;
                    font-size: 12px;
                    background: #b78e02;
                    white-space: nowrap;
                    line-height: 50px;
                    i {
                        position: absolute;
                        right: 0;
                        top: 50%;
                        width: 0;
                        height: 0;
                        margin: -5px -10px 0 0;
                        font-size: 0;
                        border: 5px solid;
                        border-color: transparent transparent transparent #b78e02;
                        overflow: hidden;
                    }
                }
                
                .popup-qr {
                    top: -30px;
                    padding: 8px;
                    background: #fff;

                    em {
                        display: block;
                        padding-top: 8px;
                        color: #000;
                        line-height: 12px;
                        font-size: 12px;
                        text-align: center;
                    }

                    i {
                        border-color: transparent transparent transparent #fff;
                    }
                }
            }
        }
        .returnTop {
            position: fixed;
            bottom: 60px;
            right: 0;
            width: 38px;
            text-align: center;
            img {
                width: 80%;
            }
        }
    }
</style>