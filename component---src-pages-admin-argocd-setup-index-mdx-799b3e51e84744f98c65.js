(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{AyfQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return g}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var o=a("7ljp"),n=a("013z"),r=a("T0C+");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var l={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=p("PageDescription"),s=p("InlineNotification"),b={_frontmatter:l},m=n.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(o.b)(m,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"Complete the steps for setting up the ArgoCD tool to support integration with\nArtifactory as a Helm repository")),Object(o.b)(s,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": An ",Object(o.b)("strong",{parentName:"p"},"environment administrator")," performs the steps on this page. See ",Object(o.b)("a",i({parentName:"p"},{href:"/admin/plan-installation#roles"}),"Plan Installation > Roles")," for the overview of the roles involved.")),Object(o.b)("h2",null,"Overview"),Object(o.b)("p",null,"ArgoCD is the ",Object(o.b)("a",i({parentName:"p"},{href:"/guides/continuous-delivery"}),Object(o.b)(r.a,{name:"env",mdxType:"Globals"}),"’s continuous delivery tool"),".\nBefore you can use it as part of the environment, it must first be configured."),Object(o.b)("h2",null,"Prerequisites"),Object(o.b)("p",null,"Before setting up ArgoCD, ",Object(o.b)("a",i({parentName:"p"},{href:"/getting-started/artifactory-setup"}),"set up Artifactory")," so that ArgoCD can use it as a Helm repository."),Object(o.b)("h2",null,"Configuration"),Object(o.b)("p",null,"Configure ArgoCD to use Artifactory as a Helm repository."),Object(o.b)("h3",null,"Clone the ArgoCD repository"),Object(o.b)("p",null,"The ArgoCD repository contains files and samples for configuring ArgoCD."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Clone the repository to your development machine"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:IBM/template-argocd-gitops.git\ncd template-argocd-gitops\n")))),Object(o.b)("h3",null,"Get the Helm repository location"),Object(o.b)("p",null,"The Helm repository is in Artifactory. ArgoCD will need the URL to that repository."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the Artifactory console, select the Home page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the Set Me Up section, click on the ",Object(o.b)("inlineCode",{parentName:"p"},"generic-local")," repository"),Object(o.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"460px"}}),"\n      ",Object(o.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABEklEQVQoz52RfU+DMBDG+f4fzBg3M2OWbOqI/oGIG1Ao9IW3Pt5Vtmy6gPGSH3cp7dPnroHWGkop1HUNrq21v2iaZpLjHj4f8CeOY0RRhCRJ4JzDf4OFvWDf92jb9oKu604MwzALGzk55IVje8YYaBqBpexr+s+b5+DwgqWsUEiJXAgc0hRZnnvSLENeFHRJc3Wu16iqigRfX1A8LpGvV0jub7F/WOBzdYd4SfXiBroQMDRwMzqewgvW2zXy+B2ilJCyREGuFL24j8MHnMjADblxTlMts2igwy3MbgOxe4IMnz3qLQSyPVy4AaryW3zi9S8ErSI3mlFjJlQFR0KOMzsYD/3JoaX5+Ft+cL425+5c8AsiNAuFHwQXEAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Set Me Up - Repositories",title:"Set Me Up: Repositories",src:"/static/47a18ca9bf4f3a6f6626bd91afc5df8b/37e4f/setupartifactory.png",srcSet:["/static/47a18ca9bf4f3a6f6626bd91afc5df8b/7fc1e/setupartifactory.png 288w","/static/47a18ca9bf4f3a6f6626bd91afc5df8b/37e4f/setupartifactory.png 460w"],sizes:"(max-width: 460px) 100vw, 460px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the Set Me Up dialog for the generic-local repository, copy the Deploy URL"),Object(o.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"874px"}}),"\n      ",Object(o.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.3611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABk0lEQVQ4y6VT2VLbQBDU//8ZD7yAcQwYymULg7QW0mov7dmZXcXGIU6FIlPVNXtoe65W1TQN6rpG9lLK/wLnHNUwDFBKQWsNa+2X4Jw74fx8miZUmeyzpZTwNwshlIdHYu89AiHGWO4LYTmkDzPRv2CMgRCilOh9ztKDC1mqzKQzobtMeMz2fH0sM/tEBM4HvA8jFAUohEIJTH4qmw+yeDnD+Ps+xvRHe6qB9+gVh8lNpagZxjroyZYzS+34iuUKS4bGTEj0UDMGzvYQhzcM7Qt0xyBYA9G3UJsN+PUN+sUKw8O6gN8/Q643GMnbXX1qRZWzCNQDtnhEsyTcrfG6eMBh9Yx2+QS2ekJ7+4jXqx9oaH2gwB1plrMepldQnYAd1anHFRcc0it8FkrC96waxYhRchq7gDYCSs/QepZCloeSirRGPQqJPAq8T/Mg4xz6OPlqIl0FumyZwq7p8dJybN/e0XYSu9piu3PYbGe/3Ytyv2+pRZ3BLy2fhpJRdJgnb20kpDPEAuc+4Cm1EF1BSpd/hJ8YlfQJQGMMogAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Set Me Up - Generic Local Repository",title:"Set Me Up: generic-local Repository",src:"/static/51505acc18d12f318b340646f7d037e7/43104/artifactoryurlsetup.png",srcSet:["/static/51505acc18d12f318b340646f7d037e7/7fc1e/artifactoryurlsetup.png 288w","/static/51505acc18d12f318b340646f7d037e7/a5df1/artifactoryurlsetup.png 576w","/static/51505acc18d12f318b340646f7d037e7/43104/artifactoryurlsetup.png 874w"],sizes:"(max-width: 874px) 100vw, 874px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("h3",null,"Update the ArgoCD configuration file"),Object(o.b)("p",null,"The repo you cloned contains an ArgoCD configuration file. Put the Helm repository location in that file\nand deploy it to your ",Object(o.b)(r.a,{name:"env",mdxType:"Globals"}),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Log into your cluster from the CLI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add the folder name for your helm artifacts to the URL copied from the\nArtifactory console\n",Object(o.b)("inlineCode",{parentName:"p"},"[artifact-helm\n-repository\n-location]/[helm artifact folder]")," this is often the same name as your\nresource group")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In your local copy of the ",Object(o.b)("inlineCode",{parentName:"p"},"template-argocd-gitops")," repo, run ",Object(o.b)("inlineCode",{parentName:"p"},"./config\n/addhelmrepository.sh [artifact-helm-repository-location]/[helm artifact\n folder]")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",i({parentName:"pre"},{}),"where `[artifact-helm-repository-location]` is the URL of the Helm repository location in Artifactory\n")))),Object(o.b)("p",null,"Verify that the new configuration has deployed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the Kubernetes dashboard or OpenShift console, navigate to the Config Maps in the ",Object(o.b)("inlineCode",{parentName:"p"},"tools")," namespace")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("inlineCode",{parentName:"p"},"argocd-cm")," config map and confirm that its ",Object(o.b)("inlineCode",{parentName:"p"},"helm.repositories")," property specifies the Artifactory URL"))),Object(o.b)("h2",null,"Conclusion"),Object(o.b)("p",null,"ArgoCD now has the configuration file in the ",Object(o.b)(r.a,{name:"env",mdxType:"Globals"})," that it needs to access the Helm chart repository in Artifactory."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-argocd-setup-index-mdx-799b3e51e84744f98c65.js.map