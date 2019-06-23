(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c35e"],{f1eb:function(e){e.exports={type:"component",behavior:{$listeners:{desc:"All native events are being propagated (you don't need the '.native' modifier)"}},props:{ripple:{type:["Boolean","Object"],desc:"Configure material ripple (disable it by setting it to 'false' or supply a config object)",default:!0,examples:[!1,"{ center: true, color: 'teal' }"],category:"style"},type:{type:"String",desc:"Define the button HTML DOM type",default:"button",values:["a","submit","button","reset"],examples:['type="a" href="http://some-site.net" target="__blank"'],category:"general"},to:{type:["String","Object"],desc:"Equivalent to Vue Router <router-link> 'to' property",examples:["/home/dashboard",":to=\"{ name: 'my-route-name' }\""],category:"router"},replace:{type:"Boolean",desc:"Equivalent to Vue Router <router-link> 'replace' property",category:"router"},label:{type:["String","Number"],desc:"The text that will be shown on the button",examples:["Button Label"],category:"content"},icon:{type:"String",desc:"Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix",examples:["map","ion-add","img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg","img:statics/path/to/some_image.png"],category:"content"},"icon-right":{type:"String",desc:"Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix",examples:["map","ion-add","img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg","img:statics/path/to/some_image.png"],category:"content"},round:{type:"Boolean",desc:"Makes a circle shaped button",category:"style"},outline:{type:"Boolean",desc:"Use 'outline' design",category:"style"},flat:{type:"Boolean",desc:"Use 'flat' design",category:"style"},unelevated:{type:"Boolean",desc:"Remove shadow",category:"style"},rounded:{type:"Boolean",desc:"Applies a more prominent border-radius for a squared shape button",category:"style"},push:{type:"Boolean",desc:"Use 'push' design",category:"style"},glossy:{type:"Boolean",desc:"Applies a glossy effect",category:"style"},size:{type:"String",desc:"Button size name or a CSS unit including unit name",examples:["xs","sm","md","lg","xl","25px","2rem"],category:"style"},fab:{type:"Boolean",desc:"Makes button size and shape to fit a Floating Action Button",category:"style"},"fab-mini":{type:"Boolean",desc:"Makes button size and shape to fit a small Floating Action Button",category:"style"},color:{type:"String",desc:"Color name for component from the Quasar Color Palette",examples:["primary","teal-10"],category:"style"},"text-color":{type:"String",desc:"Overrides text color (if needed); color name from the Quasar Color Palette",examples:["primary","teal-10"],category:"style"},"no-caps":{type:"Boolean",desc:"Avoid turning label text into caps (which happens by default)",category:"content"},"no-wrap":{type:"Boolean",desc:"Avoid label text wrapping",category:"content"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},tabindex:{type:["Number","String"],desc:"Tabindex HTML attribute value",examples:["0","100"],category:"general"},align:{type:"String",desc:"Label or content alignment",default:"center",values:["left","right","center","around","between"],category:"content"},stack:{type:"Boolean",desc:"Stack icon and label vertically instead of on same line (like it is by default)",category:"content"},stretch:{type:"Boolean",desc:"When used on flexbox parent, button will stretch to parent's height",category:"content"},loading:{type:"Boolean",desc:"Put button into loading state (displays a QSpinner -- can be overriden by using a 'loading' slot)",category:"behavior|content"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},percentage:{type:"Number",desc:"Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background",examples:[23],category:"behavior"},"dark-percentage":{type:"Boolean",desc:"Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props",category:"behavior"}},slots:{default:{desc:"Use for custom content, instead of relying on 'icon' and 'label' props"},loading:{desc:"Override the default QSpinner when in 'loading' state"}}}}}]);