```html
<div>
  <q-tabs v-model="tabSettings" align="justify" narrow-indicator >
    <q-tab name="field" label="Field Common" />
    <q-tab name="fieldAlt" label="Field Others" />
    <q-tab name="button" label="Button Common" />
    <q-tab name="buttonAlt" label="Button Others" />
  </q-tabs>
  <q-tab-panels v-model="tabSettings" animated>
    <q-tab-panel name="field">
      <div class="row">
        <div class="col-6 q-pa-md">
          <q-input v-model="QStyle.color" label="Color" />
        </div>
        <div class="col-6 q-pa-md">
          <q-input v-model="QStyle.textColor" label="Text Color" />
        </div>
        <div class="col-6 q-pa-md">
          <q-input v-model="QField.bgColor" label="BG Color" />
        </div>
        <div class="col-6 q-pa-md">
          <q-input v-model="QField.standoutClass" label="Standout Class" />
        </div>
        <div class="col-12 q-pa-md q-gutter-md">
          <q-checkbox v-model="QStyle.dark" label="Dark" />
          <q-checkbox v-model="QField.filled" label="Filled" />
          <q-checkbox v-model="QField.outlined" label="Outlined" />
          <q-checkbox v-model="QField.borderless" label="Borderless" />
          <q-checkbox v-model="QField.standout" label="Standout" />
          <q-checkbox v-model="QField.hideBottomSpace" label="Hide Bottom Space" />
          <q-checkbox v-model="QField.rounded" label="Rounded" />
          <q-checkbox v-model="QField.square" label="Square" />
          <q-checkbox v-model="QStyle.dense" label="Dense" />
        </div>
      </div>
    </q-tab-panel>
    <q-tab-panel name="fieldAlt">
      <div class="text-h6" >Input</div>
      <div class="row">
        <div class="col-6 q-pa-md">
          <q-input v-model="QInput.inputClass" label="Input Class" />
        </div>
        <div class="col-6 q-pa-md">
          <q-input v-model="QInput.inputStyle" label="Input Style" />
        </div>
      </div>
      <div class="text-h6" >Select</div>
      <div class="row">
        <div class="col-6 q-pa-md">
          <q-input v-model="QSelect.popupContentClass" label="Popup Content Class" />
        </div>
        <div class="col-6 q-pa-md">
          <q-input v-model="QSelect.popupContentStyle" label="Popup Content Style" />
        </div>
      </div>
      <div class="text-h6" >Slider</div>
      <div class="row">
        <div class="col-6 q-pa-md">
          <q-input v-model="QSlider.labelColor" label="Label Color" />
        </div>
      </div>
      <div class="text-h6" >Date</div>
      <div class="row">
        <div class="col-6 q-pa-md">
          <q-input v-model="QDate.eventColor" label="Event Color" />
        </div>
      </div>
    </q-tab-panel>
    <q-tab-panel name="button">
      <div class="row">
        <div class="col-4 q-pa-md">
          <q-input v-model="QBtnShared.color" label="Color" />
        </div>
        <div class="col-4 q-pa-md">
          <q-input v-model="QBtnShared.textColor" label="Text Color" />
        </div>
        <div class="col-4 q-pa-md">
          <q-input v-model="QBtnShared.size" label="Size" />
        </div>
        <div class="col-12 q-pa-md q-gutter-md">
          <q-checkbox v-model="QBtnShared.ripple" label="Ripple" />
          <q-checkbox v-model="QBtn.round" label="Round" />
          <q-checkbox v-model="QBtnGroup.outline" label="Outline" />
          <q-checkbox v-model="QBtnGroup.flat" label="Flat" />
          <q-checkbox v-model="QBtnGroup.unelevated" label="Unelevated" />
          <q-checkbox v-model="QBtnGroup.rounded" label="Rounded" />
          <q-checkbox v-model="QBtnGroup.push" label="Push" />
          <q-checkbox v-model="QBtnGroup.glossy" label="Glossy" />
          <q-checkbox v-model="QBtn.fab" label="Fab" />
          <q-checkbox v-model="QBtn.fabMini" label="Fab Mini" />
        </div>
      </div>
    </q-tab-panel>
    <q-tab-panel name="buttonAlt">
      <div class="text-h6" >Dropdown</div>
      <div class="row">
        <div class="col-6 q-pa-md">
          <q-input v-model="QBtnDropdown.contentClass" label="Content Class" />
        </div>
        <div class="col-6 q-pa-md">
          <q-input v-model="QBtnDropdown.contentStyle" label="Content Style" />
        </div>
      </div>
      <div class="text-h6" >Toggle</div>
      <div class="row">
        <div class="col-6 q-pa-md">
          <q-input v-model="QBtnToggle.toggleColor" label="Toggle Class" />
        </div>
        <div class="col-6 q-pa-md">
          <q-input v-model="QBtnToggle.toggleTextColor" label="Toggle Text Style" />
        </div>
      </div>
    </q-tab-panel>
  </q-tab-panels>
</div>
```