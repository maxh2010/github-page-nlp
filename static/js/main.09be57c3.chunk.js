(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{29:function(e,n,t){e.exports=t(61)},34:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(20),o=t.n(i),l=(t(34),t(5)),s=t(8),c=t(14),u=t.n(c),h=t(21),d=t(11),m=t(6),f=t(22),p=t.n(f);function g(){var e=Object(l.a)(["\n  margin: 37px 0 5px 0;\n  display: flex;\n"]);return g=function(){return e},e}function w(){var e=Object(l.a)(["\n  width: 100px;\n  padding: 10px;\n  margin: 20px 0 5px auto;\n  cursor: pointer;\n"]);return w=function(){return e},e}function b(){var e=Object(l.a)(["\n  height: 75%;\n"]);return b=function(){return e},e}function y(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-left: ",";\n"]);return y=function(){return e},e}function v(){var e=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return v=function(){return e},e}var k=m.a.div(v()),x=m.a.div(y(),(function(e){return e.marginLeft})),E=m.a.textarea(b()),O=m.a.button(w()),T=m.a.div(g()),j=function(){var e=Object(a.useState)("The Chrysler Building, the famous art deco New York skyscraper, will be sold for a small fraction of its previous sales price.\nThe deal, first reported by The Real Deal, was for $150 million, according to a source familiar with the deal.\nMubadala, an Abu Dhabi investment fund, purchased 90% of the building for $800 million in 2008.\nReal estate firm Tishman Speyer had owned the other 10%.\nThe buyer is RFR Holding, a New York real estate company.\nOfficials with Tishman and RFR did not immediately respond to a request for comments.\nIt's unclear when the deal will close.\nThe building sold fairly quickly after being publicly placed on the market only two months ago.\nThe sale was handled by CBRE Group.\nThe incentive to sell the building at such a huge loss was due to the soaring rent the owners pay to Cooper Union, a New York college, for the land under the building.\nThe rent is rising from $7.75 million last year to $32.5 million this year to $41 million in 2028.\nMeantime, rents in the building itself are not rising nearly that fast.\nWhile the building is an iconic landmark in the New York skyline, it is competing against newer office towers with large floor-to-ceiling windows and all the modern amenities.\nStill the building is among the best known in the city, even to people who have never been to New York.\nIt is famous for its triangle-shaped, vaulted windows worked into the stylized crown, along with its distinctive eagle gargoyles near the top.\nIt has been featured prominently in many films, including Men in Black 3, Spider-Man, Armageddon, Two Weeks Notice and Independence Day.\nThe previous sale took place just before the 2008 financial meltdown led to a plunge in real estate prices.\nStill there have been a number of high profile skyscrapers purchased for top dollar in recent years, including the Waldorf Astoria hotel, which Chinese firm Anbang Insurance purchased in 2016 for nearly $2 billion, and the Willis Tower in Chicago, which was formerly known as Sears Tower, once the world's tallest.\nBlackstone Group (BX) bought it for $1.3 billion 2015.\nThe Chrysler Building was the headquarters of the American automaker until 1953, but it was named for and owned by Chrysler chief Walter Chrysler, not the company itself.\nWalter Chrysler had set out to build the tallest building in the world, a competition at that time with another Manhattan skyscraper under construction at 40 Wall Street at the south end of Manhattan. He kept secret the plans for the spire that would grace the top of the building, building it inside the structure and out of view of the public until 40 Wall Street was complete.\nOnce the competitor could rise no higher, the spire of the Chrysler building was raised into view, giving it the title."),n=Object(d.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(""),l=Object(d.a)(o,2),s=l[0],c=l[1],m=Object(a.useState)(!1),f=Object(d.a)(m,2),g=f[0],w=f[1],b=function(){var e=Object(h.a)(u.a.mark((function e(n){var t,a,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),"https://api.smrzr.io/summarize?ratio=0.15",t={method:"POST",headers:{"Content-Type":"raw/text"},body:n},e.next=5,fetch("https://api.smrzr.io/summarize?ratio=0.15",t);case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,i=r.summary,w(!1),c(i);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(k,null,r.a.createElement(x,null,r.a.createElement(O,{onClick:function(){return b(t)}},"Summarize"),r.a.createElement(E,{value:t,onChange:function(e){return i(e.currentTarget.value)}})),r.a.createElement(x,{marginLeft:"30px"},r.a.createElement(T,null,"Summary Using Distill BERT ",g&&r.a.createElement(p.a,{type:"Puff",color:"#00BFFF",height:15,width:15,timeout:1e4})),r.a.createElement(E,{value:s,readOnly:!0})))};function S(){var e=Object(l.a)(["\n  height: 100%;\n  padding: 0 30px 0 30px;\n"]);return S=function(){return e},e}var C=m.a.main(S()),B=function(){return r.a.createElement(C,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:j})))};function R(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  background-color: ",";\n  height: 50px;\n  padding: 0 20px 0 20px;\n"]);return R=function(){return e},e}var W=m.a.header(R(),"#bae8e8"),$=function(){return r.a.createElement(W,null,r.a.createElement("nav",null,r.a.createElement("div",null,"SMRZR.io. Online Summarization Application")))},z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=t(13);o.a.render(r.a.createElement(M.a,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);