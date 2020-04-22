(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{336:function(t,a,r){"use strict";r.r(a);var e=r(17),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"添加远程仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库"}},[t._v("#")]),t._v(" 添加远程仓库")]),t._v(" "),r("h4",{attrs:{id:"关联远程仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关联远程仓库"}},[t._v("#")]),t._v(" 关联远程仓库")]),t._v(" "),r("p",[r("code",[t._v("$ git remote add origin git@github.com:SuYxh/Test.git")])]),t._v(" "),r("h4",{attrs:{id:"把本地库的所有内容推送到远程库上"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#把本地库的所有内容推送到远程库上"}},[t._v("#")]),t._v(" 把本地库的所有内容推送到远程库上")]),t._v(" "),r("p",[r("code",[t._v("$ git push -u origin master")])]),t._v(" "),r("p",[t._v("把本地库的内容推送到远程，用"),r("code",[t._v("git push")]),t._v("命令，实际上是把当前分支master推送到远程。")]),t._v(" "),r("p",[t._v("由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。")]),t._v(" "),r("h4",{attrs:{id:"后续"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后续"}},[t._v("#")]),t._v(" 后续")]),t._v(" "),r("p",[t._v("从现在起，只要本地作了提交，就可以通过命令：")]),t._v(" "),r("p",[r("code",[t._v("$ git push origin master")])]),t._v(" "),r("p",[t._v("把本地master分支的最新修改推送至GitHub，现在，你就拥有了真正的分布式版本库！")]),t._v(" "),r("h4",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),r("p",[t._v("要关联一个远程库，使用命令"),r("code",[t._v("git remote add origin git@server-name:path/repo-name.git")]),t._v("；")]),t._v(" "),r("p",[t._v("关联后，使用命令"),r("code",[t._v("git push -u origin master")]),r("strong",[t._v("第一次")]),t._v("推送master分支的所有内容；")]),t._v(" "),r("p",[t._v("此后，每次本地提交后，只要有必要，就可以使用命令"),r("code",[t._v("git push origin master")]),t._v("推送最新修改；")])])}),[],!1,null,null,null);a.default=s.exports}}]);