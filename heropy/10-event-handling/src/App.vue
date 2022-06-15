<template>
  <EventHandler />
  <hr />
  <EventHandler2 />
  <hr />
  <EventHandler3 />
  <hr />
  <EventHandler4 />
  <hr />
  <EventModifierPrevent />
  <hr />
  <EventModifierOnce />
  <hr />
  <EventModifierStop />
  <hr />
  <EventModifierCapture />
  <hr />
  <EventModifierSelf />
  <hr />
  <EventModifierPassive />
</template>

<script>
import EventHandler from './components/EventHandler.vue';
import EventHandler2 from './components/EventHandler2.vue';
import EventHandler3 from './components/EventHandler3.vue';
import EventHandler4 from './components/EventHandler4.vue';
import EventModifierPrevent from './components/EventModifierPrevent.vue';
import EventModifierOnce from './components/EventModifierOnce.vue';
import EventModifierStop from './components/EventModifierStop.vue';
import EventModifierCapture from './components/EventModifierCapture.vue';
import EventModifierSelf from './components/EventModifierSelf.vue';
import EventModifierPassive from './components/EventModifierPassive.vue';

export default {
  name: 'App',
  components: {
    EventHandler,
    EventHandler2,
    EventHandler3,
    EventHandler4,
    EventModifierPrevent,
    EventModifierOnce,
    EventModifierStop,
    EventModifierCapture,
    EventModifierSelf,
    EventModifierPassive,
  },
};
</script>

<style></style>
