(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{370:function(e,a,t){"use strict";t.r(a);var r=t(8),n=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("我怎么也没想到，当时一点看不懂的CE，现在能够看懂了，看了"),a("a",{attrs:{href:"https://www.bilibili.com/video/av77758280",target:"_blank",rel:"noopener noreferrer"}},[e._v("B站上的视频"),a("OutboundLink")],1),e._v(" "),a("blockquote",[a("iframe",{attrs:{src:"//player.bilibili.com/player.html?aid=77758280&cid=133021550&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}}),e._v("\n虽然我只看了最后3P（我承认我是被标题吸引进去的）。。。\n之前可以做到使用[CE](https://github.com/cheat-engine/cheat-engine)改数值\n当时并不知道内存的原理只是知道搜索数值，大的、小的、未知的，我记得还有一节当时完全看不懂的指针。\n")])])]),e._v(" "),a("h3",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[e._v("#")]),e._v(" 知识点")]),e._v(" "),a("ul",[a("li",[e._v("1.代码在内存中紧密排列，不会空（NOP除外）。")]),e._v(" "),a("li",[e._v("2.通过字符的搜索可以找到内存地址。")]),e._v(" "),a("li",[e._v("3.CE中有找出是什么改写了这个地址")]),e._v(" "),a("li",[e._v("4.分析代码的组成，猜测原函数")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('- if语句（jnz）中有一个跳转，每一个分支都有一个return。\n- "mov a,b"即"a=b".一种做法是将edi改写，但是推荐改写常量，可以找edi的赋值语句，\n- "sub a,b"即"a-=b".分析游戏结构，找到修改的关键点。\n- 但是特殊僵尸并不受影响，说明游戏的结构，并不是仅仅是这样。\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[a("em",[a("strong",[e._v("可以分析一下特殊僵尸作为作业")])])]),e._v(" "),a("hr")])}),[],!1,null,null,null);a.default=n.exports}}]);