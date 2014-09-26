<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <meta content="We're a company of storytellers." name='description'>

    <meta content='Role App' property='og:title'>
    <meta content='Role App' property='og:site_name'>
    <meta content='http://www.roleapp.com' property='og:url'>
    <?php /*
    <meta content="We're a company of storytellers. Following the tradition that began with spoken word and evolved into books, film, and games, Soap is building new ways for people to share narrative experiences. We believe in leveraging the latest technology to imagine better worlds and connect people in meaningful ways." property='og:description'>
    <meta content='http://www.thesoapcollective.com/images/soap_open_graph.jpg' property='og:image'>
    <meta content='158186024916' property='fb:app_id'>
    */ ?>

    <link href='http://www.roleapp.com/favicon.png' rel='shortcut icon'>
    <link href='http://www.roleapp.com/favicon.png' rel='apple-touch-icon'>

    <title> The Soap Collective</title>

    <link href='stylesheets/normalize.css' rel='stylesheet' type='text/css' />
    <link href='stylesheets/main.css' rel='stylesheet' type='text/css' />
  </head>

  <body class="gradient-green">
    <div id='page-container'>
      <div id="role-logo">Role App</div>
      <p>Role is an upcoming group storytelling game from The Soap Collective.<br />Sign up now and be among the first to learn more.</p>
      <p>Your adventure starts soon!</p>
      <!-- Begin MailChimp Signup Form -->
      <div id="mc_embed_signup">
        <form action="//thesoapcollective.us9.list-manage.com/subscribe/post?u=3b7974721fb3e8f4f031367db&amp;id=2febceb97b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
              <input type="email" value="" placeholder="Email" name="EMAIL" class="required email" id="mce-EMAIL">
            </div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div><!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;"><input type="text" name="b_3b7974721fb3e8f4f031367db_2febceb97b" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
          </div>
        </form>
      </div>
      <!--End mc_embed_signup-->
    </div>

    <script src='//use.typekit.net/dhn8nfe.js' type='text/javascript'></script>
    <script>
      // Typekit
      try{Typekit.load();}catch(e){}
    </script>
    <script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>
    <script>
      var gradients = ['gradient-green', 'gradient-orange', 'gradient-pink'];
      var $form = $('#mc_embed_signup');
      var $email = $('#mce-EMAIL');

      var delay = (function(){
        var timer = 0;
        return function(callback, ms){
          clearTimeout (timer);
          timer = setTimeout(callback, ms);
        };
      })();

      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      $(document).ready(function(){
        var random = Math.floor(Math.random() * gradients.length);
        $('body').removeClass('gradient-green gradient-orange gradient-pink').addClass(gradients[random]);
      });

      $email.keyup(function(){
        delay(function(){
          if (validateEmail($email.val())) {
            $form.addClass('is-valid');
          } else {
            $form.removeClass('is-valid');
          }
        }, 500);
      });

      // Google Analytics
      // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      // })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      // ga('create', 'UA-11359166-1', 'auto');
      // ga('send', 'pageview');
    </script>
  </body>
</html>
