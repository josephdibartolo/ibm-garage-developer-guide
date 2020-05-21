(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{RSIL:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return m}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z"),o=n("T0C+");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},l=c("PageDescription"),u=c("InlineNotification"),p={_frontmatter:s},b=r.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(b,i({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l,{mdxType:"PageDescription"},Object(a.b)("p",null,"Overall process for installing a ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"}))),Object(a.b)("h2",null,"Background"),Object(a.b)("p",null,"To understand how the process is performed, keep these concepts in mind."),Object(a.b)("h3",null,"Roles"),Object(a.b)("p",null,"A ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"})," is installed and used by users acting in four roles:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Account owner"),": The user who owns the account"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Account managers"),": Account owner or other users with ",Object(a.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-account-services"}),"account management permissions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Environment administrators"),": Users in the account with ",Object(a.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userroles#platformroles"}),"permissions to create services in the environment’s resource group")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Environment users"),": Users in the account with ",Object(a.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userroles#service_access_roles"}),"permissions to use existing services in the environment’s resource group")," (e.g. developers, data scientists, etc.)")),Object(a.b)("p",null,"The account owner must create the access group for account managers (see below). The account owner will:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create an ",Object(a.b)("inlineCode",{parentName:"li"},"ACCT-MGR-IAM-ADMIN")," access group using the ",Object(a.b)("inlineCode",{parentName:"li"},"acp-mgr")," script"),Object(a.b)("li",{parentName:"ul"},"Add a functional ID, configured using the ",Object(a.b)("inlineCode",{parentName:"li"},"acp-iaas")," script, with API keys for the account managers")),Object(a.b)("p",null,"Then, as described in ",Object(a.b)("a",i({parentName:"p"},{href:"/admin/config-account"}),"Configure Account"),", the account managers can set up the resource groups and access groups needed to install and use the environments. For each environment, the account managers will:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a resource group"),Object(a.b)("li",{parentName:"ul"},"Create an access group named ",Object(a.b)("inlineCode",{parentName:"li"},"<resource_group>-ADMIN")," using the script ",Object(a.b)("inlineCode",{parentName:"li"},"acp-admin")),Object(a.b)("li",{parentName:"ul"},"Create an access group named ",Object(a.b)("inlineCode",{parentName:"li"},"<resource_group>-USER")," using the script ",Object(a.b)("inlineCode",{parentName:"li"},"acp-user"))),Object(a.b)("p",null,"This diagram from ",Object(a.b)("a",i({parentName:"p"},{href:"http://localhost:8000/toolkit-resources/resource-mgmt#access-group-example"}),"Resource Access Management")," shows the relationship of these access groups to a pair of development environments:"),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(a.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAAEWklEQVQ4y4VSa0wUVxS+wKZBMbwSW1vTFtNImlhiGkj7yxZoTBNbjTz6QAwWKGqDLyTQpl1EXtZYa0xUShqwpWjESkpbaqMoLRR5CUFBHu5jZmef7LKzOzuzOzM7uzuc3lmW2LQ1nuRk7pxv5tzvO99BABCFcNDB5eeOhsnENwoOZm/NyXp5Z2nRxnd2v5+6p7I85eOayudyDhSvyztU+pgsWZd7aO8zKBLRK4f8ms7YtNdQHPqfmPkeRf+Qi6J6jqPonmM4a5ef12pQNDQjdKAE/2cxm9J/af8m226zpEZaqrpvXHvFy3HVWq2ubnr6QSPDeI77/YEsBcWK0OOibF9snPIBsLQD/KI41XquPsz03oO7+Urd7XYDTdPKEfx+f4eCqdXTT6WmQkxcPKi2Z4IKX6F6fQuoEp6GqOJizNAvBRqNTrbBJ4j7IrdHDY71bXEuLg7q9fp+rVb7h8lkGnc6nRUKODzs2EsZnXMmEz2qJ53jtCs4RjuFaQMpXS4t25OIQl73i6KdUhglLRPfFtPb35NhNFJtGo3mW8ysJRQKdfC8UKig8w/99QpjicfKWIBgKCwALAvcfNXhz5ORwPOnlIIg+ndFRqEaGR98D/4VPM93KuDsNKhnFsbgpq5ZmDIPSD4WRJ8ognXBP/5ZZWUS0lica43sUtpDgoqPMFR1/35lczAgNQQCgTpRFGsxy5Msy20POz0FjebgLNwyNwPBTYK8tHwhS3q1RV/WJyPRRSUMdp/diGurIgyj+od636QMhkmSJO/ihqNer3fO42GrFXBiIvSBiYLbVhN0UyT8arHIP7sZuGEywdldBe8mIs7Lngjf4PXlrUgeGhvIUdzV6XRgMBhAlmVFcit6Quzfj1YjTpBecgtynsvDrl0BRiYGtpIk4SAIwmKz2UyLi4ucJAWaFGxomNsxr3V1agimbV7HfGezhy66XHCZoqCusPDtBCS5bGvsk38+i0nGLrfLiOnp7XrVajGfwZK/EgThFJ7heYZhwgp0856m8NBEPDzGCxCZodns0VUcPZaMJJE/GV6DQPDDf0qW5RDgJiBJ0rLLPt9FBbROudWOhfswqf9N0BGj0hLNiGwwAOZF/7i6/EgSsjmZNBvDlzhc7udXTPlr5HaWHArNyfLSdDAYvI+TxMaoFdAxw9ctyP1w3X4CCL4fQNnDoAwekp0tO92UjDxO0/o7Ny9l4hklPmrY9xZB6CmNRqvDjTQsy9qxSfUKqL3nLacNVqudpOZo0qLx0eI8z4WMDux2QWlREuJ8XGPYZc6XuyL5DpaMjQDcEHR6PeB9xC4LYZfbr8OqtkuQ0NUB8a3tEK8+DfF15yCh5gKsLi5OXoO8grTeJy1lcj5hhSGamOzLpgyEBSdFOx0E46ZdctBf+6S1qf4Ixf6nuPmTW7G7v2jc1PJjZ3pL10/p569cTb/QeTWj6uszm7aVH3whr6IqJb/y0w35R6sfJX7H9Q07Dx9J+RsscCdLyQ10uQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Access groups example",title:"Access groups example",src:"/static/97670ac0e688220fa7f8e2810d92d96b/3cbba/access-example.png",srcSet:["/static/97670ac0e688220fa7f8e2810d92d96b/7fc1e/access-example.png 288w","/static/97670ac0e688220fa7f8e2810d92d96b/a5df1/access-example.png 576w","/static/97670ac0e688220fa7f8e2810d92d96b/3cbba/access-example.png 1152w","/static/97670ac0e688220fa7f8e2810d92d96b/58488/access-example.png 1604w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("p",null,"The steps below help the account owner start configuring the account in this manner."),Object(a.b)("h3",null,"Architecture"),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"/arch/environment"}),"Environment Architecture")," shows the structure of the ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"})," that will be installed. Typically, each ",Object(a.b)("a",i({parentName:"p"},{href:"/arch/teams"}),"development team")," gets its own environment. However, multiple teams can share a single environment. The environment structure is designed to support best practices for a ",Object(a.b)("a",i({parentName:"p"},{href:"/arch/application"}),"cloud-native application architecture"),", including designing applications that are ",Object(a.b)("a",i({parentName:"p"},{href:"/arch/manageable"}),"built to manage"),"."),Object(a.b)("h2",null,"Set up account managers"),Object(a.b)(u,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": The ",Object(a.b)("strong",{parentName:"p"},"account owner")," creates this access group for account managers and adds the functional ID for managing API keys. See ",Object(a.b)("a",i({parentName:"p"},{href:"/admin/plan-installation#roles"}),"Plan Installation > Roles")," for the overview of the roles involved.")),Object(a.b)("p",null,"The account owner may want to delegate the responsibilities for configuring the account for all of the development teams that want environments. Those users who are delegated to will need account management permissions. An easy way to manage who has these permissions is to create an access group with those policies and add those users to the group. An account only needs one of these account manager access groups, which will be used to support all environments in the account."),Object(a.b)("p",null,"In a new account, the account owner is the only user. Even after inviting other users, the account owner is initially the only user with the account management permissions needed to grant those permissions to other users. Therefore it is the account owner who must create the access group for account managers."),Object(a.b)(u,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": The video in ",Object(a.b)("a",i({parentName:"p"},{href:"/toolkit-resources/resource-mgmt#configuration-process"}),"Resource Access Management > Configuration Process")," shows how to perform the steps in this process.")),Object(a.b)("h3",null,"Prepare to run scripts"),Object(a.b)("p",null,"We’ll use some scripts in the steps below to help create access groups. Here, we’ll download the scripts and prepare to run them. (If you want to use the console to manually configure the access groups, you can skip this step.)"),Object(a.b)("p",null,"Clone the Git repository with the scripts. (This repo also has the scripts for installing the ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"}),".)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Clone the ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Switch to the cloned directory"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd ibm-garage-iteration-zero\n")))),Object(a.b)("p",null,"The scripts need you to log into IBM Cloud first. In the terminal you’ll use to run the scripts, log in to IBM Cloud."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Log in to the IBM Cloud CLI",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",i({parentName:"pre"},{className:"language-bash"}),"ibmcloud login -a cloud.ibm.com -r <region>\n")))),Object(a.b)("h3",null,"Access group for account managers"),Object(a.b)("p",null,"The account owner must create an access group to grant the necessary permissions for managing the account. Do this by running a script, or by using the console to manually perform the steps in the script. Also, add the account manager(s) to this group."),Object(a.b)(u,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": IBM Cloud has multiple ",Object(a.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-account-services"}),"account management services"),", in addition to IAM: Billing, License and entitlement, Support center, etc. An easy way to grant access to these individually is to create an access group for administering each: ACCT-MGR-BILLING-ADMIN, ACCT-MGR-LICENSE-ADMIN, ACCT-MGR-SUPPORT-ADMIN. The group created below only has IAM capabilities, so a good name for it is ACCT-MGR-IAM-ADMIN.")),Object(a.b)("p",null,"To create the access group for the account managers:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a new ",Object(a.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-account_setup"}),"access group"),", name it something like ",Object(a.b)("inlineCode",{parentName:"li"},"ACCT-MGR-IAM-ADMIN")," (all capital letters) (or name it after your account)"),Object(a.b)("li",{parentName:"ul"},"Run the script ",Object(a.b)("inlineCode",{parentName:"li"},"./terraform/scripts/acp-mgr.sh"),", which adds the necessary policies to the access group"),Object(a.b)("li",{parentName:"ul"},"Add the account managers to the group")),Object(a.b)("p",null,"The script adds policies that allow the user to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create resource groups"),Object(a.b)("li",{parentName:"ul"},"Invite users to the account"),Object(a.b)("li",{parentName:"ul"},"Create access groups")),Object(a.b)("p",null,"The script also adds the same policies that an environment administrator has. But whereas an environment administrator can only manage the resources in one resource group, an account manager can manage the resources in all resource groups. This gives the account manager the ability in any resource group to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create clusters"),Object(a.b)("li",{parentName:"ul"},"Manage the IBM Cloud Container Registry (used as the environment’s ",Object(a.b)("a",i({parentName:"li"},{href:"/guides/image-registry"}),"image registry"),")"),Object(a.b)("li",{parentName:"ul"},"Create service instances")),Object(a.b)("h3",null,"Functional ID for infrastructure permissions"),Object(a.b)("p",null,"Account managers need the permissions to create and manage IaaS resources required by a ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"}),". Permissions for classic infrastructure (fka SoftLayer) cannot be added to an access group, only to a user. Rather than add these permissions to each account manager, create a ",Object(a.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-manapikey#ibm-cloud-api-keys"}),"functional ID")," and grant it the infrastructure permissions. The functional ID will ",Object(a.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-users#api_key_most_cases"}),"own the API keys")," that the Kubernetes service needs to create clusters. As account managers are added to and removed from the account, the functional ID will always remain and always have the necessary infrastructure permissions."),Object(a.b)("p",null,"Set up the functional ID in the account:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create the functional ID, sign it up for an IBM Cloud account, and ",Object(a.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-iamuserinv"}),"invite the user")," to this account"),Object(a.b)("li",{parentName:"ul"},"Run the script ",Object(a.b)("inlineCode",{parentName:"li"},"./terraform/scripts/acp-iaas.sh")," for the functional ID’s user, which adds the necessary permissions to the user")),Object(a.b)("p",null,"The script adds the ",Object(a.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-access_reference#infra"}),"classic infrastructure permissions")," needed to create and manage clusters:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create VLANs"),Object(a.b)("li",{parentName:"ul"},"Create Kubernetes Service clusters (e.g. create virtual servers, storage, and networking)"),Object(a.b)("li",{parentName:"ul"},"Manage Kubernetes Service clusters (e.g. add nodes)")),Object(a.b)("p",null,"The script also adds the IAM permissions to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Run the command to reset the API key that the Kubernetes service will use")),Object(a.b)("p",null,"By granting these infrastructure permissions to the functional ID and using it to create API keys, the account managers and environment administrators can create Kubernetes and OpenShift clusters without needing infrastructure permissions."),Object(a.b)("p",null,"Next, each account manager will need to use the functional ID to reset the API key that the Kubernetes service will use. By using the functional ID, the API key will be owned by the functional ID instead of by the account manager. The account managers need a way to log in as the functional ID without all of them sharing the ID’s password or a single API key. Thus each account manager needs their own API key for the functional ID’s account."),Object(a.b)("p",null,"Create API keys for the functional ID:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Log into IBM Cloud as the functional ID (not as the account owner)"),Object(a.b)("li",{parentName:"ul"},"Switch to this account that you’re configuring"),Object(a.b)("li",{parentName:"ul"},"For each account manager, ",Object(a.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey#create_user_key"}),"create an API key"),", downloading each key to a file"),Object(a.b)("li",{parentName:"ul"},"Give each account manager their API key file for the functional ID")),Object(a.b)("p",null,"Users should not share these API key files with each other. When a user is no longer an account manager, remove them from the access group and delete their API key. To make a user an account manager, add them to the access group and create an API key for them."),Object(a.b)("h2",null,"Process"),Object(a.b)("p",null,"The overall process:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Configure account — An account manager configures the account so that ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"}),"s can be installed"),Object(a.b)("li",{parentName:"ol"},"Install environment — An environment administrator runs the ",Object(a.b)(o.a,{name:"shortName",mdxType:"Globals"})," scripts to create a ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"})),Object(a.b)("li",{parentName:"ol"},"Configure environment — The environment administrator finishes setting up the newly installed ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"}))),Object(a.b)("p",null,"Once the environment is set up, the environment users can start using it to develop applications."),Object(a.b)("h3",null,"Configure account"),Object(a.b)("p",null,"First, before installing an environment, an account manager needs to configure the IBM Cloud account for the\nenvironment. See ",Object(a.b)("a",i({parentName:"p"},{href:"/admin/config-account"}),"Configure Account")," for detailed instructions, which accomplish this:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Upgrade the image registry"),Object(a.b)("li",{parentName:"ol"},"Prepare to run scripts"),Object(a.b)("li",{parentName:"ol"},"Select a region and zone"),Object(a.b)("li",{parentName:"ol"},"Select a pair of public/private VLANs"),Object(a.b)("li",{parentName:"ol"},"Create a resource group"),Object(a.b)("li",{parentName:"ol"},"Set the Kubernetes service API key"),Object(a.b)("li",{parentName:"ol"},"Create an access group for environment administrators"),Object(a.b)("li",{parentName:"ol"},"Create an access group for environment users"),Object(a.b)("li",{parentName:"ol"},"Optionally, create a cluster for the environment")),Object(a.b)("h3",null,"Install environment"),Object(a.b)("p",null,"Second, once the account manager has configured the account for installing an environment, the account manager and the environment administrator need to jointly decide how the environment administrator is going to install the environment. There are two options:"),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"/admin/installation-ibm-cloud"}),Object(a.b)("strong",{parentName:"a"},"Install including creating a new cluster")),": The environment administrator who performs this install needs permissions to create clusters as well as service instances. The script will run as this user to create the cluster, create the service instances, and install the CI/CD tools in the cluster."),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"/admin/installation-existing"}),Object(a.b)("strong",{parentName:"a"},"Install into an existing cluster")),": The account manager creates the cluster and then grants the environment administrator access to it. The environment administrator who performs this install needs permissions to create service instances but not to create clusters. The script will run as the environment administrator to create the service instances and install the CI/CD tools in the existing cluster."),Object(a.b)(u,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": A third option is to ",Object(a.b)("a",i({parentName:"p"},{href:"/admin/installation-crc"}),"install an environment in Red Hat CodeReady Containers"),". For this option, you’re not installing in IBM Cloud, so you don’t have to configure your IBM Cloud account. However, you do have to install CRC.")),Object(a.b)("h3",null,"Configure environment"),Object(a.b)("p",null,"Third, after installing the environment, before giving the users access to the environment, the environment administrator needs to finish configuring it. See ",Object(a.b)("a",i({parentName:"p"},{href:"/admin/config-install"}),"Configure Environment")," for detailed instructions, which accomplish this:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Configure RBAC security in the cluster"),Object(a.b)("li",{parentName:"ul"},"Test opening the ",Object(a.b)(o.a,{name:"dashboard",mdxType:"Globals"})),Object(a.b)("li",{parentName:"ul"},"Complete setup of LogDNA"),Object(a.b)("li",{parentName:"ul"},"Complete setup of SysDig"),Object(a.b)("li",{parentName:"ul"},"Test the pipeline by deploying a first app"),Object(a.b)("li",{parentName:"ul"},"Complete setup of Artifactory"),Object(a.b)("li",{parentName:"ul"},"Complete setup of Argo CD"),Object(a.b)("li",{parentName:"ul"},"Rerun pipeline and confirm that the app’s Helm chart is added to Artifactory"),Object(a.b)("li",{parentName:"ul"},"Set up a GitOps repo to validate ArgoCD setup and configuration")),Object(a.b)("h2",null,"Conclusion"),Object(a.b)("p",null,"Having configured the account, installed the environment, and configured the environment, the administrators have now completed an end-to-end installation of a ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"}),". It is ready for a development team to begin using for application development."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-plan-installation-index-mdx-bb3fe840c43c4ca23060.js.map