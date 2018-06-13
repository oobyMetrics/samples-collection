...
ga('create', 'UA-00000-0', 'auto');
ga('require', 'ecommerce');    // (you may see 'ec' instead of 'ecommerce')
ga('require', 'oobyMetrics');  // <== ADD THIS LINE TO EXISTING CODE
ga('send', 'pageview');
</script>

<!-- oobyMetrics -->
<script>
(function(w,d,s,u,o,m,a,g,h,x,y,z){g='GoogleAnalytics',h='sendHitTask';w[m]=w[m]||{sv:1,ev:[],co:d.cookie};
w[o]=function(t,d){w[m].ev.push([t,d,1*new Date])};z=d.createElement(s);z.src=u+'?a='+a+'&p='+g;z.async=1;y=
d.getElementsByTagName(s)[0];y.parentNode.insertBefore(z,y);x=w[w[g+'Object']||'ga'];'function'===typeof x&&
x('provide',m,function(x,e){e=x.get(h);x.set(h,function(x){e(x);w[o]('plugin:'+g,x.get('hitPayload'))})})})
(window,document,'script','//ooby.me/trics.js','ooby','oobyMetrics','YOUR_PROPERTY_CODE_HERE');
</script>
<!-- End oobyMetrics -->
