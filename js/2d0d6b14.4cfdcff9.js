(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0d6b14"],{7445:function(e){e.exports={type:"component",behavior:{$listeners:{desc:"All native events are being propagated (you don't need the '.native' modifier)"}},props:{value:{type:"Any",desc:"Model of the component defining current panel's name; If used as Number, it does not defines panel index though but slide name's which may be an Integer; Either use this property (along with a listener for 'input' event) OR use v-model directive",examples:['v-model="panelName"'],category:"model"},"keep-alive":{type:"Boolean",desc:"Equivalent to using Vue's native <keep-alive> component on the content",category:"behavior"},animated:{type:"Boolean",desc:"Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)",category:"behavior"},infinite:{type:"Boolean",desc:"Makes component appear as infinite (when reaching last panel, next one will become the first one)",category:"behavior"},swipeable:{type:"Boolean",desc:"Enable swipe events (may interfere with content's touch/mouse events)",category:"behavior"},"transition-prev":{type:"String",desc:"One of Quasar's embedded transitions (has effect only if 'animated' prop is set)",examples:["fade","slide-down"],category:"behavior",default:"slide-right"},"transition-next":{type:"String",desc:"One of Quasar's embedded transitions (has effect only if 'animated' prop is set)",examples:["fade","slide-down"],category:"behavior",default:"slide-left"},dark:{type:"Boolean",desc:"Notify the component that the background is a dark color",category:"style"},flat:{type:"Boolean",desc:"Applies a 'flat' design (no default shadow)",category:"style"},bordered:{type:"Boolean",desc:"Applies a default border to the component",category:"style"},vertical:{type:"Boolean",desc:"Put Stepper in vertical mode (instead of horizontal by default)",category:"behavior"},"alternative-labels":{type:"Boolean",desc:"Use alternative labels (applies only to horizontal stepper)",category:"header"},"header-nav":{type:"Boolean",desc:"Allow navigation through the header",category:"behavior"},contracted:{type:"Boolean",desc:"Hide header labels on narrow windows",category:"header|behavior"},"inactive-icon":{type:"String",desc:"Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix",examples:["map","ion-add","img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg","img:statics/path/to/some_image.png"],category:"header"},"inactive-color":{type:"String",desc:"Color name for component from the Quasar Color Palette",examples:["primary","teal-10"],category:"header"},"done-icon":{type:"String",desc:"Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix",examples:["map","ion-add","img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg","img:statics/path/to/some_image.png"],category:"header"},"done-color":{type:"String",desc:"Color name for component from the Quasar Color Palette",examples:["primary","teal-10"],category:"header"},"active-icon":{type:"String",desc:"Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix",examples:["map","ion-add","img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg","img:statics/path/to/some_image.png"],category:"header"},"active-color":{type:"String",desc:"Color name for component from the Quasar Color Palette",examples:["primary","teal-10"],category:"header"},"error-icon":{type:"String",desc:"Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix",examples:["map","ion-add","img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg","img:statics/path/to/some_image.png"],category:"header"},"error-color":{type:"String",desc:"Color name for component from the Quasar Color Palette",examples:["primary","teal-10"],category:"header"}},slots:{default:{desc:"Suggestion: QStep"},navigation:{desc:"Slot specific for the global navigation; Suggestion: QStepperNavigation"},message:{desc:"Slot specific for putting a message on top of each step (if horizontal stepper) or above steps (if vertical); Suggestion: QBanner, div.q-pa-lg"}},events:{input:{desc:"Emitted when component's model changes (current panel name); Is also used by v-model",params:{value:{type:["String","Number"],desc:"New current panel name",examples:["dashboard"]}}},"before-transition":{desc:"Emitted before transitioning to a new panel",params:{newVal:{type:["String","Number"],desc:"Panel name towards transition is going",examples:["dashboard"]},oldVal:{type:["String","Number"],desc:"Panel name from which transition is happening",examples:["dashboard"]}}},transition:{desc:"Emitted after component transitioned to a new panel",params:{newVal:{type:["String","Number"],desc:"Panel name towards transition has occurred",examples:["dashboard"]},oldVal:{type:["String","Number"],desc:"Panel name from which transition has happened",examples:["dashboard"]}}}},methods:{next:{desc:"Go to next panel"},previous:{desc:"Go to previous panel"},goTo:{desc:"Go to specific panel",params:{panelName:{type:["String","Number"],desc:"Panel's name, which may be a String or Number; Number does not refers to panel index, but to its name, which may be an Integer",required:!0,examples:["dashboard"]}}}}}}}]);