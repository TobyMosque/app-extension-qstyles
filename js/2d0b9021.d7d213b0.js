(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0b9021"],{"30b0":function(e){e.exports={type:"component",behavior:{$listeners:{desc:"All native events are being propagated (you don't need the '.native' modifier)"}},props:{value:{type:"Number",default:0,desc:"Current progress (must be between min/max)",examples:[0,100,52.32],category:"model"},min:{type:"Number",default:0,desc:"Minimum value defining 'no progress' (must be lower than 'max')",examples:[0,100,52.32],category:"model"},max:{type:"Number",default:100,desc:"Maximum value defining 100% progress made (must be higher than 'min')",examples:[100,52.32],category:"model"},color:{type:"String",desc:"Color name for the arc progress from the Quasar Color Palette",examples:["primary","teal-10"],category:"style"},"center-color":{type:"String",desc:"Color name for the center part of the component from the Quasar Color Palette",examples:["primary","teal-10"],category:"style"},"track-color":{type:"String",desc:"Color name for the track of the component from the Quasar Color Palette",examples:["primary","teal-10"],category:"style"},size:{type:"String",desc:"Size in CSS units, including unit name",examples:["16px","2rem"],category:"style"},"font-size":{type:"String",desc:"Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size",default:"0.25em",examples:["1em","16px","2rem"],category:"style"},thickness:{type:"Number",default:.2,desc:"Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size",examples:[1,.3],category:"style"},angle:{type:"Number",desc:"Angle to rotate progress arc by",default:0,examples:[0,40,90],category:"content"},indeterminate:{type:"Boolean",desc:"Put component into 'indeterminate' state; Ignores 'value' prop",category:"behavior"},"show-value":{type:"Boolean",desc:"Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component",category:"content|behavior"},reverse:{type:"Boolean",desc:"Reverses the direction of progress; Only for determined state",category:"behavior"}},slots:{default:{desc:"Used for component content only if 'show-value' prop is set; Make sure the content has enough space to be displayed inside the component"}}}}}]);