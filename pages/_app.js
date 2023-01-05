import Layout from '../components/Layout';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import Script from 'next/script';
import $ from "jquery"
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    $(document).on("scroll", function () {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".tag");

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
          $(tag).addClass("visible");
        } else {
          $(tag).removeClass("visible");
        }
      }
    });

  })
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
