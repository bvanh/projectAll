(window["webpackJsonpreact-quiz-v2"]=window["webpackJsonpreact-quiz-v2"]||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),i=n(4),a=n.n(i),r=(n(17),n(5)),u=n(6),o=n(11),l=n(7),h=n(10),m=n(26);var v=function(e){var t=e.currentQuiz,n=e.timeOut,s=e.newInterval,i=e.newMinute,a=e.newSeconds;return""===t?c.a.createElement("div",{className:"start"},c.a.createElement("h1",null,"Welcome to Quiz-Game !?"),c.a.createElement("h4",null,"In 30 seconds"),c.a.createElement(m.a,{color:"primary",size:"lg",onClick:function(){return e.startQuiz(t,n,s,i,a)}},"Let's Go")):null};var w=function(e){var t=e.listQuiz,n=e.currentQuiz,s=e.statusButton,i=e.newMinute,a=e.newSeconds;if(""!==n&&n>=0){var r=t[n]||{},u=r.correct,o=r.status,l=r.question,h=(r.answer||[]).map((function(t,s){return c.a.createElement("button",{className:o[s],key:s,onClick:function(){return e.checkAnswer(t,u,n,s)}},t)}));return c.a.createElement("div",null,c.a.createElement("h1",{className:"a"},"Quiz"),c.a.createElement("div",{className:"quiz"},c.a.createElement("h3",null,l),h,c.a.createElement("div",{className:"next"},c.a.createElement("button",{className:s[0],onClick:function(){return e.backQuestion(n)},disabled:s[1]},"Back"),c.a.createElement("button",{className:s[0],onClick:function(){return e.submitQuestion(n)},disabled:s[2]},"Submit"),c.a.createElement("button",{className:s[0],onClick:function(){return e.nextQuestion(n)},disabled:s[3]},"Next")),c.a.createElement("footer",null,c.a.createElement("span",{id:"progress"},"Question ",n+1," of 5"),c.a.createElement("span",{id:"time"},i<10?"0"+i:i,":",a<10?"0"+a:a))))}return null};n(21);var d=function(e){var t=e.statusButton,n=e.currentQuiz,s=e.newCorrect,i=e.showAnswer,a=e.isAnswer,r=e.newMinute,u=e.newSeconds,o=e.timeOut,l=e.newInterval;if("result"===n){var h=s.reduce((function(e,t){return e+t}),0),m=i.map((function(e,t){return c.a.createElement("span",{key:t},"Question ",t+1,": ",e," .")}));return c.a.createElement("div",null,c.a.createElement("h1",{className:"a"},"Quiz"),c.a.createElement("h2",null,"Finish!!!"),c.a.createElement("div",{className:"quiz"},c.a.createElement("div",null,c.a.createElement("h6",null,c.a.createElement("b",null,"Yours Score: ",h,"/5 Quiz")),c.a.createElement("h6",null,"  ",c.a.createElement("b",null,"Yours Time: ",r<10?"0"+r:r,"p",u<10?"0"+u:u,"s"))),c.a.createElement("div",{className:"next"},c.a.createElement("button",{className:t[0],onClick:function(){return e.resetQuiz(r,u,o,l)}},"TryAgain"),c.a.createElement("button",{className:t[0],onClick:function(){return e.printAnswer()}},"CheckAnswer"),c.a.createElement("button",{className:t[0],onClick:function(){return e.backHome()}},"Homepage")),a&&c.a.createElement("div",{className:"showanswer"},m),c.a.createElement("footer",null,c.a.createElement("span",{id:"progress"},"Result"),c.a.createElement("span",{id:"time"},"00:00"))))}return null},b=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={listquiz:[{question:"Who is stronger than Thanos ?",answer:["Surtur","Thor","Black Panther","Iron man"],status:["choice","choice","choice","choice"],correct:"Surtur"},{question:"What's the value of 1 + 1 ?",answer:[2,3,4,5],status:["choice","choice","choice","choice"],correct:2},{question:"How many countries in the world ?",answer:[193,194,195,196],status:["choice","choice","choice","choice"],correct:195},{question:"Who is god in DC universe?",answer:["The Presence","Batman","The One Above All","Green Lantern"],status:["choice","choice","choice","choice"],correct:"Batman"},{question:"1 + 2 + 3 + ..... + 99 = ?",answer:[4850,4580,4950,4590],status:["choice","choice","choice","choice"],correct:4950}],currentquiz:"",totalcorrect:[0,0,0,0,0],isanswered:!1,statusbtn:["btn1",!1,!0,!1],showanswer:["Surtur",2,195,"Batman",4950],minute:0,seconds:0,timeout:null,interval:null},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"startQuiz",value:function(e,t,n,s,c){var i=this;var a=this.state.statusbtn.slice();a[1]=!0,n=setInterval((function(){59===c?(s++,c=0):c>=0&&c++,i.setState({minute:s,seconds:c})}),1e3),t=setTimeout((function(){i.setState({currentquiz:"result"}),clearInterval(n)}),3e4),this.setState({currentquiz:0,statusbtn:a,timeout:t,interval:n,minute:0,seconds:0})}},{key:"chooseAnswer",value:function(e,t,n,s){var c=JSON.parse(JSON.stringify(this.state.listquiz));c[n].status=["choice","choice","choice","choice"],c[n].status[s]+=" selected";var i=this.state.statusbtn.slice();i[2]=!1;var a=this.state.totalcorrect;a[n]=e===t?1:0,this.setState({statusbtn:i,listquiz:c,currentquiz:n,totalcorrect:a}),console.log(this.state.totalcorrect)}},{key:"nextQuestion",value:function(e){e++;var t=this.state.statusbtn.slice();4===e?t[3]=!0:e>0&&(t[1]=!1),this.setState({currentquiz:e,statusbtn:t})}},{key:"backQuestion",value:function(e){e--;var t=this.state.statusbtn.slice();0===e?t[1]=!0:e>0&&(t[3]=!1),this.setState({currentquiz:e,statusbtn:t})}},{key:"submit",value:function(e){clearTimeout(this.state.timeout),clearInterval(this.state.interval),this.setState({currentquiz:"result"})}},{key:"resetQuiz",value:function(e,t,n,s){var c=this,i=JSON.parse(JSON.stringify(this.state.listquiz));i[0].status=["choice","choice","choice","choice"],i[1].status=["choice","choice","choice","choice"],i[2].status=["choice","choice","choice","choice"],i[3].status=["choice","choice","choice","choice"],i[4].status=["choice","choice","choice","choice"];var a=this.state.statusbtn.slice();a=["btn1",!0,!0,!1],e=0,t=0,s=setInterval((function(){59===t?(e++,t=0):t>=0&&t++,c.setState({minute:e,seconds:t})}),1e3),n=setTimeout((function(){c.setState({currentquiz:"result"}),clearInterval(s)}),3e4),this.setState({listquiz:i,currentquiz:0,statusbtn:a,totalcorrect:[0,0,0,0,0],timeout:n,interval:s,minute:0,seconds:0})}},{key:"backHome",value:function(){clearTimeout(this.state.timeout),clearInterval(this.state.interval);var e=JSON.parse(JSON.stringify(this.state.listquiz));e[0].status=["choice","choice","choice","choice"],e[1].status=["choice","choice","choice","choice"],e[2].status=["choice","choice","choice","choice"],e[3].status=["choice","choice","choice","choice"],e[4].status=["choice","choice","choice","choice"];var t=this.state.statusbtn.slice();t=["btn1",!0,!0,!1],this.setState({listquiz:e,currentquiz:"",statusbtn:t,totalcorrect:[0,0,0,0,0],minute:0,seconds:0})}},{key:"showAnswer",value:function(){this.setState({isanswered:!0})}},{key:"render",value:function(){var e=this.state,t=e.listquiz,n=e.currentquiz,s=e.totalcorrect,i=e.isanswered,a=e.statusbtn,r=e.showanswer,u=e.minute,o=e.seconds,l=e.timeout,h=e.interval;return c.a.createElement("div",{className:"App"},c.a.createElement(v,{currentQuiz:n,startQuiz:this.startQuiz.bind(this),statusButton:a,timeOut:l,newInterval:h,newMinute:u,newSeconds:o}),c.a.createElement(w,{listQuiz:t,currentQuiz:n,statusButton:a,checkAnswer:this.chooseAnswer.bind(this),nextQuestion:this.nextQuestion.bind(this),backQuestion:this.backQuestion.bind(this),submitQuestion:this.submit.bind(this),newCorrect:s,newMinute:u,newSeconds:o}),c.a.createElement(d,{listQuiz:t,statusButton:a,currentQuiz:n,resetQuiz:this.resetQuiz.bind(this),newCorrect:s,backHome:this.backHome.bind(this),showAnswer:r,isAnswer:i,printAnswer:this.showAnswer.bind(this),newMinute:u,newSeconds:o,timeOut:l,newInterval:h}))}}]),t}(c.a.Component);n(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23);a.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.5731c791.chunk.js.map