function getMenuSelected(){var e,a,t,l=null,n=0,c=0,s=0;document.getElementById("categoryMenu")&&(c=document.getElementById("categoryMenu").getElementsByTagName("li"));var m=window.location.href.replace(""+server_url,"");if("index.xtml"!=m&&"pageindex.xtm"!=m||(n=1),c)for(j=0;j<c.length;j++){if(t=c[j].getElementsByTagName("div"))for(k=0;k<t.length;k++)if("subcat"==t[k].className){if(a=!1,e=t[k].getElementsByTagName("a"))for(i=0;i<e.length;i++)-1!=window.location.href.indexOf(e[i].href)||n?(e[i].className="current",s=1,l&&"current"!=l.className&&(l.className=""),l=e[i],a=!0):e[i].className=e[i].className.replace("current","");t[k].style.display=a?"block":"none",t[0].className=a?"bullet_expanded":"bullet_collapsed",(e=c[j].getElementsByTagName("a"))&&e[0]&&(e[0].className=a?"active":"sep")}if(cat=c[j].getElementsByTagName("a"),cat.length&&0==s&&"sepbottom"==cat[0].className&&-1!=window.location.href.indexOf(cat[0].href)){var r=c[j].getElementsByTagName("a");r&&-1!=window.location.href.indexOf(r[0].href)&&(r[0].className="sep current")}}}
