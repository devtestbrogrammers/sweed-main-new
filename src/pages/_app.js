import '@/styles/globals.css'
import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Lato, Poppins } from 'next/font/google'
import { HubspotProvider } from 'next-hubspot';
import Script from 'next/script';
import $ from 'jquery';

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-lato',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins'
})

function onReadyCustomFunc() {
  /* Header section */
  const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - prev > delay) {
        prev = now;
        return func(...args);
      }
    }
  }
  const handleScroll = throttleFunction(() => {
    var pageTop = $(document).scrollTop();
    if (pageTop > $(window).height()) {
      $(".header-section").addClass('active');
    } else {
      $(".header-section").removeClass('active');
    }
  }, 100);
  $(document).on("scroll", handleScroll)

  /* "All You Need" section */
  $(".all-you-need-section .blocks-row").on({
    mouseenter: function () {
      $(this).parent().parent().find('.block').removeClass('active');
      $(this).parent().addClass('active');
      let dataConnect = $(this).parent().attr('data-connect');
      if (dataConnect) {
        let data = dataConnect.split(',');
        if (data) {
          $(data).each(function (index, value) {
            let valueClass = value.trim();
            $("." + valueClass).addClass('active');
          });
        }
      }
    },
    mouseleave: function () {
      $(this).parent().parent().find('.block').removeClass('active');
    }
  }, '.block-inner');
  /* "Image Text Block" section */
  $(document).on("scroll", throttleFunction(() => {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var blocks = $(".image-text-block");
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      if ($(block).position().top < pageBottom && !$(this).hasClass("active")) {
        $(block).addClass("active");
      }
    }
  }, 100))
  /* "Title Block" section */
  /*$(document).on("scroll", function() {
    if( $("div").hasClass("title-block-section") ) {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop;
      var block_content = $(".title-block-section .content");
      var block_header = $(".title-block-section .header");
      if ( ($(block_content).position().top -200 < pageBottom) && (pageBottom < $(block_content).position().top + $(block_content).height() - 200) ) {
        $(block_header).addClass("active");
      } else {
        $(block_header).removeClass("active");
      }
    }
  });*/
}
export default function App({ Component, pageProps }) {
  return (
    <HubspotProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sweed</title>
      </Head>
      <Script
        src="/js/custom.js"
        strategy="lazyOnload"
        onReady={onReadyCustomFunc}
      />
      <Script
        src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
        type="module"
      />

      <main className={`${lato.variable} ${poppins.variable} font-lato antialiased bg-diamonds flex flex-col min-h-screen`}>
        <Header />
        <div className='flex-grow'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </HubspotProvider>
  )
}
