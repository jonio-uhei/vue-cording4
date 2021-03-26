<template>
    <div>
        <header class="header">
            <div class="header__menu">
                <h1><img class="logo" src="../assets/images/logo.png"></h1>
                <div class="line"
                    @click="naviOpen"
                    :class="{'is-active':active}"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div><!--/.line-->
                <nav class="navi-pc">
                    <ul class="navi__flexbox">
                        <li><a href="#">レッスン</a></li>
                        <li><a href="#">新規登録</a></li>
                        <li><a href="#">ログイン</a></li>
                    </ul><!--/.navi__flexbox-->
                </nav><!--/.navi-pc-->
            </div><!--/.header__menu-->
        </header><!--/.header-->
        <transition name="navi">
            <nav class="navi" v-show="navi">
                <ul class="navi_wrap">
                    <li><a href="#">レッスン</a></li>
                    <li><a href="#">新規登録</a></li>
                    <li><a href="#">ログイン</a></li>
                </ul><!--/.navi_wrap-->
            </nav><!--/.navi-->
        </transition>
    </div>
</template>

<script>
    export default{
        data:function(){
            return{
                active:false,
                navi:false
            }
        },
        methods:{
            naviOpen:function(){
                this.active = !this.active;
                this.navi = !this.navi;
            }
        }
    }
</script>

