<template>
   <div class="headNav">
            <Router-link to='/'><img src="../assets/images/logo3.png" alt=""></Router-link>
            
            <ul class="clearfix">
                <li>
                    <Router-link to='/hotProperty'>一手楼盘返佣</Router-link>
                </li>
                 <li>
                    <Router-link to='/secondHouse'>二手交易</Router-link>
                </li>
                 <li>
                    <Router-link to='/knowledge'>知识星球</Router-link>
                </li>
                 <li>
                    <Router-link to='/question'>常见问题</Router-link>
                </li>
            </ul>
        </div> 

</template>
<style lang="less">
    .headNav {
        height: 70px;
        line-height: 70px;
        // background: #39ac6a;
        color: #FFF;
        background:url("../assets/images/013.png") no-repeat 0 0 ;
        background-size: cover;
        padding:0px 210px;
        position: relative;
        img {
            height: 60px;
            margin-top: 5px;
        }
        ul {
            position: absolute;
            top:0;
            right:230px;
            li {
                color:#fbe05a;
                // box-shadow: 10px 10px 10px 10px #333;
                float: left;
                font-size: 16px;
                font-weight: bolder;
                padding-left: 20px;
               
            }
         }
    }
</style>