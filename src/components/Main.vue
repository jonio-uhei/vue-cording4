<template>
    <main>
        <section id="hero">
            <div class="hero">
                <div class="container">
                    <div class="message">
                        <p class="message-title">LEARN TO CODE.</p><!--/.message-title-->
                        <div class="message-flexbox">
                            <p class="message-title">LEARN TO BE</p><!--/.message-title-->
                            <p class="message-title">CREATIVE.</p><!--/.message-title-->
                        </div><!--/.message-flexbox-->
                        <p class="message-explain">Progateはオンラインプログラミング学習サービスです。</p><!--/.message-explain-->
                        <p class="message-explain">初心者にもやさしいスライドとレッスンで、ウェブサービスを作りながらプログラミングを学んでいきましょう。</p><!--/.message-explain-->
                    </div>
                    <div class="subscribe-wrap">
                        <a class="new-subscribe" href="#">新規登録はこちら</a><!--/.new-subscribe-->
                        <p class="or">or</p><!--/.or-->
                        <div class="facebool-twitter-flexbox">
                            <a href="#">
                                <div class="facebook-flexbox">
                                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                                    <p class="facebook">Facebookで登録</p><!--/.facebook-->
                                </div><!--/.hero-flexbox-->
                            </a>
                            <a href="#">
                                <div class="twitter-flexbox">
                                    <font-awesome-icon :icon="['fab', 'twitter']" />
                                    <p class="twitter">Twitterで登録</p><!--/.twitter-->
                                </div><!--/.hero-flexbox-->
                            </a>
                        </div><!--/.facebook-twitter-flexbox-->
                    </div><!--/.subscribe-wrap-->
                </div><!--/.container-->
            </div>
        </section><!--/#hero-->
        <section id="languages">
            <div class="languages">
                <h2 class="list">Learn Where to Get Started</h2><!--/.list-->
                <ul class="language-flexbox">
                    <li
                        v-for="(list,index) in lists"
                        :key = "index"
                    >
                        <div class="language-wrap">
                            <img class="language-background" :src="list.image">
                            <p class="language-title">{{list.title}}</p><!--/.language-title-->
                        </div><!--language-wrap-->
                        <p class="language-explain">{{list.explain}}</p>
                    </li>
                </ul><!--/.language-flexbox-->
            </div><!--/.language-->
        </section><!--/#languages-->
        <section id="development">
            <div class="development">
                <h2 class="progate">さあ、あなたもProgateでプログラミングを学んでみませんか？<br><span>Let's learn to code,learn to be creative!</span></h2><!--/.progate-->
                <div class="develop"><a href="#">さっそく開発する</a></div><!--/.develop-->
            </div><!--/.development-->
        </section><!--/#development-->
    </main>
   
</template>

<script>
    export default{
        data:function(){
            return{
                lists:[
                    {
                        title:"HTML&CSS",
                        image:require('@/assets/images/html-css.png'),
                        explain:"ウェブページの作成に使用される言語です。HTMLとCSSを組み合わせることで、静的なページを作り上げることができます。"
                    },
                    {
                        title:"jQuery",
                        image:require('@/assets/images/jquery.png'),
                        explain:"素敵な動きを手軽に実装できるJavaScriptライブラリです。 アニメーション効果をつけたり、Ajax（エイジャックス）を使って外部ファイルを読み込んだりと色々なことができます。"
                    },
                    {
                        title:"Ruby",
                        image:require('@/assets/images/ruby.png'),
                        explain:"オープンソースの動的なプログラミング言語で、 シンプルさと高い生産性を備えています。大きなWebアプリケーションから小さな日用ツールまで、さまざまなソフトウェアを作ることができます。"
                    },
                    {
                        title:"PHP",
                        image:require('@/assets/images/php.png'),
                        explain:"HTMLだけではページの内容を変えることはできません。PHPはHTMLにプログラムを埋め込み、それを可能にします。"
                    },
                    
                ]
            }
        }
    }
</script>