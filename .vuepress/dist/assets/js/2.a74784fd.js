(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{167:function(e,t,s){e.exports=s.p+"assets/img/minio8-1024x571.29b75642.png"},168:function(e,t,s){e.exports=s.p+"assets/img/access_key.39533054.png"},169:function(e,t,s){e.exports=s.p+"assets/img/create_minio8_stack.0bb7dc0f.png"},170:function(e,t,s){e.exports=s.p+"assets/img/cio_cluster_nodes.bc75bcc2.png"},202:function(e,t,s){"use strict";s.r(t);var i=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"cloud-scale-minio-with-cio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloud-scale-minio-with-cio","aria-hidden":"true"}},[this._v("#")]),this._v(" Cloud Scale Minio With CIO")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(167),alt:"minio8"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("strong",[this._v("Prerequisites")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"create-docker-secrets-for-minio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-docker-secrets-for-minio","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("strong",[this._v("Create Docker secrets for Minio")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Select Secrets from the left panel and click 'Add secret'")]),this._v(" "),t("li",[this._v("Enter key name 'access_key' with secret 'secret'.")]),this._v(" "),t("li",[this._v("Create the secret")]),this._v(" "),t("li",[this._v("Repeat step 2 and 3 for key name 'secret_key' and secret 'mysecret'")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(168),alt:"access_key"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"run-minio-on-docker-stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-minio-on-docker-stack","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("strong",[this._v("Run Minio on Docker Stack")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(169),alt:"reate_minio8_stac"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(170),alt:"cio cluster nodes"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("This example created 8 Minio instances. To add new Minio services:\n"),s("ol",[s("li",[e._v("Copy the service definition and change the name of the new service to avoid naming conflicts")]),e._v(" "),s("li",[e._v("Add a volume in volumes section, and update the volume name to avoid naming conflicts")]),e._v(" "),s("li",[e._v("Update the port number to expose for the new service")])])]),e._v(" "),s("li",[e._v("The Docker stack exposed the Minio services on ports 9001 to 9008 so multiple services can run on a cluster")]),e._v(" "),s("li",[e._v("The example used the same access key and secret key for all instances. Assign different keys for each Minio instance as appropriate.")])])}],r=s(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[s("a",{attrs:{href:"https://minio.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minio"),s("OutboundLink")],1),e._v(" is a popular object storage server compatible with "),s("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon S3 API"),s("OutboundLink")],1),e._v(". It is suited for storing unstructured data such as photos, videos, log files, backups and container images.")]),e._v(" "),s("p",[e._v("As a cloud-native application that is designed to easily scale on orchestrated platforms, Minio is an excellent fit for multi-tenant environments that need isolated and highly available object storage for each tenant.")]),e._v(" "),s("p",[e._v("In this recipe we use a Docker Stack file to deploy eight Minio instances with individual CIO volumes on a Swarm cluster. The volumes provisioned for the Minio instances benefit from the redundancy and performance isolation capabilities of the CIO storage layer. With support for up to 4095 volumes per node, the combination of Minio and CIO enable highly efficient use of resources to support more tenants per node.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("ul",[s("li",[s("p",[e._v("Familiarity with "),s("a",{attrs:{href:"https://docs.docker.com/docker-cloud/apps/stacks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Stack"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("CIO installed on your machine. Install from "),s("a",{attrs:{href:"http://storidge.com/docs/installing-developer-release/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".\n​")])])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("ol",[s("li",[e._v("Select Stacks from the left panel and click 'Add stack'")]),e._v(" "),s("li",[e._v("Enter the stack name and select the 'git Repository' build method")]),e._v(" "),s("li",[e._v("Enter url "),s("a",{attrs:{href:"https://github.com/storidge/docker-stacks",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/storidge/docker-stacks"),s("OutboundLink")],1),e._v(" and name of the example compose file 'minio8.yml'.")]),e._v(" "),s("li",[e._v("Click 'Deploy the stack' and Docker will pull the Minio image and CIO will create the data volumes using the pre-defined MINIO profile.")])]),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("The Minio instances are now available on the cluster at ports 9001 to 9008, and are accessible from any IP address in the cio cluster.")]),e._v(" "),s("p",[e._v("Display the node IPs by selecting the Storidge extension on the left panel.")]),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("In the example above, point the browser at any of the IP addresses, e.g. http://192.168.1.41:9001 to access the first Minio object storage server.")]),e._v(" "),s("p",[e._v('Login in with access key "secret" and secret key "mysecret" configured earlier.')]),e._v(" "),e._m(9),e._v(" "),e._m(10)])},i,!1,null,null,null);t.default=n.exports}}]);