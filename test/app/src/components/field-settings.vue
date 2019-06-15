<template>
  <q-card class="full-width q-mb-md">
    <q-card-section>
      <div class="text-h6" >Settings</div>
    </q-card-section>
    <q-separator inset />
    <q-tabs v-model="tab" align="justify" narrow-indicator >
      <q-tab name="settings" label="Settings" />
      <q-tab name="html" label="Html" />
      <q-tab name="code" label="Code" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated :class="base.dark ? themes.dark : themes.light">
      <q-tab-panel name="settings" class="q-pa-none">
        <q-tabs v-model="tabSettings" align="justify" narrow-indicator >
          <q-tab name="field" label="Field Common" />
          <q-tab name="fieldAlt" label="Field Others" />
          <q-tab name="button" label="Button Common" />
          <q-tab name="buttonAlt" label="Button Others" />
        </q-tabs>
        <q-tab-panels v-model="tabSettings" animated :class="base.dark ? themes.dark : themes.light">
          <q-tab-panel name="field">
            <div class="row">
              <div class="col-6 q-pa-md">
                <q-input v-model="base.color" label="Color" />
              </div>
              <div class="col-6 q-pa-md">
                <q-input v-model="base.textColor" label="Text Color" />
              </div>
              <div class="col-6 q-pa-md">
                <q-input v-model="field.bgColor" label="BG Color" />
              </div>
              <div class="col-6 q-pa-md">
                <q-input v-model="field.standoutClass" label="Standout Class" />
              </div>
              <div class="col-12 q-pa-md q-gutter-md">
                <q-checkbox v-model="base.dark" label="Dark" />
                <q-checkbox v-model="field.filled" label="Filled" />
                <q-checkbox v-model="field.outlined" label="Outlined" />
                <q-checkbox v-model="field.borderless" label="Borderless" />
                <q-checkbox v-model="field.standout" label="Standout" />
                <q-checkbox v-model="field.hideBottomSpace" label="Hide Bottom Space" />
                <q-checkbox v-model="field.rounded" label="Rounded" />
                <q-checkbox v-model="field.square" label="Square" />
                <q-checkbox v-model="base.dense" label="Dense" />
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="fieldAlt">
            <div class="text-h6" >Input</div>
            <div class="row">
              <div class="col-6 q-pa-md">
                <q-input v-model="input.inputClass" label="Input Class" />
              </div>
              <div class="col-6 q-pa-md">
                <q-input v-model="input.inputStyle" label="Input Style" />
              </div>
            </div>
            <div class="text-h6" >Select</div>
            <div class="row">
              <div class="col-6 q-pa-md">
                <q-input v-model="select.popupContentClass" label="Popup Content Class" />
              </div>
              <div class="col-6 q-pa-md">
                <q-input v-model="select.popupContentStyle" label="Popup Content Style" />
              </div>
            </div>
            <div class="text-h6" >Slider</div>
            <div class="row">
              <div class="col-6 q-pa-md">
                <q-input v-model="slider.labelColor" label="Label Color" />
              </div>
            </div>
            <div class="text-h6" >Date</div>
            <div class="row">
              <div class="col-6 q-pa-md">
                <q-input v-model="date.eventColor" label="Event Color" />
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="button">
            <div class="row">
              <div class="col-4 q-pa-md">
                <q-input v-model="btnCommon.color" label="Color" />
              </div>
              <div class="col-4 q-pa-md">
                <q-input v-model="btnCommon.textColor" label="Text Color" />
              </div>
              <div class="col-4 q-pa-md">
                <q-input v-model="btnCommon.size" label="Size" />
              </div>
              <div class="col-12 q-pa-md q-gutter-md">
                <q-checkbox v-model="btnCommon.ripple" label="Ripple" />
                <q-checkbox v-model="btn.round" label="Round" />
                <q-checkbox v-model="btnGroup.outline" label="Outline" />
                <q-checkbox v-model="btnGroup.flat" label="Flat" />
                <q-checkbox v-model="btnGroup.unelevated" label="Unelevated" />
                <q-checkbox v-model="btnGroup.rounded" label="Rounded" />
                <q-checkbox v-model="btnGroup.push" label="Push" />
                <q-checkbox v-model="btnGroup.glossy" label="Glossy" />
                <q-checkbox v-model="btn.fab" label="Fab" />
                <q-checkbox v-model="btn.fabMini" label="Fab Mini" />
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="buttonAlt">
            <div class="text-h6" >Dropdown</div>
            <div class="row">
              <div class="col-6 q-pa-md">
                <q-input v-model="btnDropdown.contentClass" label="Content Class" />
              </div>
              <div class="col-6 q-pa-md">
                <q-input v-model="btnDropdown.contentStyle" label="Content Style" />
              </div>
            </div>
            <div class="text-h6" >Toggle</div>
            <div class="row">
              <div class="col-6 q-pa-md">
                <q-input v-model="btnToggle.toggleColor" label="Toggle Class" />
              </div>
              <div class="col-6 q-pa-md">
                <q-input v-model="btnToggle.toggleTextColor" label="Toggle Text Style" />
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-tab-panel>
      <q-tab-panel name="html">
        <q-markdown>
        {{html}}
        </q-markdown>
      </q-tab-panel>
      <q-tab-panel name="code">
        <q-markdown>
        {{code}}
        </q-markdown>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { base, themes, btnCommon, btn, btnGroup, btnDropdown, btnToggle, field, input, select, slider, date } from 'quasar-app-extension-qstyles/styles'

export default {
  name: 'ComponentFieldSettings',
  data () {
    return {
      themes: themes,
      base: base,
      btnCommon: btnCommon,
      btn: btn,
      btnGroup: btnGroup,
      btnDropdown: btnDropdown,
      btnToggle: btnToggle,
      field: field,
      input: input,
      select: select,
      slider: slider,
      date: date,
      tabSettings: 'field',
      tab: 'settings',
      html: `
\`\`\`html
<q-tabs v-model="tabSettings" align="justify" narrow-indicator >
  <q-tab name="field" label="Field Common" />
  <q-tab name="fieldAlt" label="Field Others" />
  <q-tab name="button" label="Button Common" />
  <q-tab name="buttonAlt" label="Button Others" />
</q-tabs>
<q-tab-panels v-model="tabSettings" animated :class="{ 'bg-grey-10': base.dark, 'text-white': base.dark }">
  <q-tab-panel name="field">
    <div class="row">
      <div class="col-6 q-pa-md">
        <q-input v-model="base.color" label="Color" />
      </div>
      <div class="col-6 q-pa-md">
        <q-input v-model="base.textColor" label="Text Color" />
      </div>
      <div class="col-6 q-pa-md">
        <q-input v-model="field.bgColor" label="BG Color" />
      </div>
      <div class="col-6 q-pa-md">
        <q-input v-model="field.standoutClass" label="Standout Class" />
      </div>
      <div class="col-12 q-pa-md q-gutter-md">
        <q-checkbox v-model="base.dark" label="Dark" />
        <q-checkbox v-model="field.filled" label="Filled" />
        <q-checkbox v-model="field.outlined" label="Outlined" />
        <q-checkbox v-model="field.borderless" label="Borderless" />
        <q-checkbox v-model="field.standout" label="Standout" />
        <q-checkbox v-model="field.hideBottomSpace" label="Hide Bottom Space" />
        <q-checkbox v-model="field.rounded" label="Rounded" />
        <q-checkbox v-model="field.square" label="Square" />
        <q-checkbox v-model="base.dense" label="Dense" />
      </div>
    </div>
  </q-tab-panel>
  <q-tab-panel name="fieldAlt">
    <div class="text-h6" >Input</div>
    <div class="row">
      <div class="col-6 q-pa-md">
        <q-input v-model="input.inputClass" label="Input Class" />
      </div>
      <div class="col-6 q-pa-md">
        <q-input v-model="input.inputStyle" label="Input Style" />
      </div>
    </div>
    <div class="text-h6" >Select</div>
    <div class="row">
      <div class="col-6 q-pa-md">
        <q-input v-model="select.popupContentClass" label="Popup Content Class" />
      </div>
      <div class="col-6 q-pa-md">
        <q-input v-model="select.popupContentStyle" label="Popup Content Style" />
      </div>
    </div>
    <div class="text-h6" >Slider</div>
    <div class="row">
      <div class="col-6 q-pa-md">
        <q-input v-model="slider.labelColor" label="Label Color" />
      </div>
    </div>
    <div class="text-h6" >Date</div>
    <div class="row">
      <div class="col-6 q-pa-md">
        <q-input v-model="date.eventColor" label="Event Color" />
      </div>
    </div>
  </q-tab-panel>
  <q-tab-panel name="button">
    <div class="row">
      <div class="col-4 q-pa-md">
        <q-input v-model="btnCommon.color" label="Color" />
      </div>
      <div class="col-4 q-pa-md">
        <q-input v-model="btnCommon.textColor" label="Text Color" />
      </div>
      <div class="col-4 q-pa-md">
        <q-input v-model="btnCommon.size" label="Size" />
      </div>
      <div class="col-12 q-pa-md q-gutter-md">
        <q-checkbox v-model="btnCommon.ripple" label="Ripple" />
        <q-checkbox v-model="btn.round" label="Round" />
        <q-checkbox v-model="btnGroup.outline" label="Outline" />
        <q-checkbox v-model="btnGroup.flat" label="Flat" />
        <q-checkbox v-model="btnGroup.unelevated" label="Unelevated" />
        <q-checkbox v-model="btnGroup.rounded" label="Rounded" />
        <q-checkbox v-model="btnGroup.push" label="Push" />
        <q-checkbox v-model="btnGroup.glossy" label="Glossy" />
        <q-checkbox v-model="btn.fab" label="Fab" />
        <q-checkbox v-model="btn.fabMini" label="Fab Mini" />
      </div>
    </div>
  </q-tab-panel>
  <q-tab-panel name="buttonAlt">
    <div class="text-h6" >Dropdown</div>
    <div class="row">
      <div class="col-6 q-pa-md">
        <q-input v-model="btnDropdown.contentClass" label="Content Class" />
      </div>
      <div class="col-6 q-pa-md">
        <q-input v-model="btnDropdown.contentStyle" label="Content Style" />
      </div>
    </div>
    <div class="text-h6" >Toggle</div>
    <div class="row">
      <div class="col-6 q-pa-md">
        <q-input v-model="btnToggle.toggleColor" label="Toggle Class" />
      </div>
      <div class="col-6 q-pa-md">
        <q-input v-model="btnToggle.toggleTextColor" label="Toggle Text Style" />
      </div>
    </div>
  </q-tab-panel>
</q-tab-panels>
\`\`\`
      `,
      code: `
\`\`\`js
import { state as baseState } from 'quasar-app-extension-qstyles/src/styles/base'
import { state as btnCommonState } from 'quasar-app-extension-qstyles/src/styles/btn-common'
import { state as btnState } from 'quasar-app-extension-qstyles/src/styles/btn'
import { state as btnGroupState } from 'quasar-app-extension-qstyles/src/styles/btn-group'
import { state as btnDropdownState } from 'quasar-app-extension-qstyles/src/styles/btn-dropdown'
import { state as btnToggleState } from 'quasar-app-extension-qstyles/src/styles/btn-toggle'
import { state as fieldState } from 'quasar-app-extension-qstyles/src/styles/field'
import { state as inputState } from 'quasar-app-extension-qstyles/src/styles/input'
import { state as selectState } from 'quasar-app-extension-qstyles/src/styles/select'
import { state as sliderState } from 'quasar-app-extension-qstyles/src/styles/slider'
import { state as dateState } from 'quasar-app-extension-qstyles/src/styles/date'

export default {  
name: 'PageIndex',
  data () {
    return {
      base: baseState,
      btnCommon: btnCommonState,
      btn: btnState,
      btnGroup: btnGroupState,
      btnDropdown: btnDropdownState,
      btnToggle: btnToggleState,
      field: fieldState,
      input: inputState,
      select: selectState,
      slider: sliderState,
      date: dateState
    }
  }
}
\`\`\`
      `
    }
  }
}
</script>

<style>
</style>
