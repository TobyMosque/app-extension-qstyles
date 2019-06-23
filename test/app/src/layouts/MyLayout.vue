<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen">
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-expansion-item expand-separator label="Layout">
          <q-item v-for="layout in layouts" :key="layout.name" clickable :to="layout.path">
            <q-item-section>
              <q-item-label>{{layout.name}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item expand-separator label="Components">
          <q-item v-for="component in components" :key="component.name" clickable :to="component.path">
            <q-item-section>
              <q-item-label>{{component.name}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import metaService from '../services/metas'
import { openURL } from 'quasar'
import { QStyle } from 'quasar-app-extension-qstyles/src/themer'

export default {
  name: 'MyLayout',
  data () {
    let layouts = metaService.layouts.map(layout => {
      let dash = layout.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).substring(1)
      return {
        name: layout,
        path: '/layout/' + dash
      }
    })
    let components = metaService.components.map(layout => {
      let dash = layout.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).substring(1)
      return {
        name: layout,
        path: '/component/' + dash
      }
    })
    return {
      QStyle: QStyle,
      leftDrawerOpen: this.$q.platform.is.desktop,
      layouts: layouts,
      components: components
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
